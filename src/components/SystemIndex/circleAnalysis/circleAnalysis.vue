<template>
    <canvas :id="data.id"></canvas>
</template>
<script>
export default {
    name: "circleAnalysis",
    props: {
        data: { type: Object },
        bus: { type: undefined },
    },
    data() {
        return {
            canvas: undefined,
            ctx: undefined,
            positionX: 150,
            positionY: 150,
            radius: 100,
        }
    },
    mounted() {
        this.canvas = document.getElementById(this.data.id);
        this.ctx = this.canvas.getContext('2d');
        this.canvas.width = "300";
        this.canvas.height = "300";
        this.canvas.style.width = "80%"
        this.canvas.style.height = "100%"
        this.canvas.style.border = "hidden";

        this.drawBase();

        this.bus.$on('drawBase', this.drawBase)
    },
    updated: function () {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.drawBase();
    },
    methods: {
        drawBase: function () {
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
            this.drawCircle();
            this.drawScale();

            for (let i = 0; i < this.data.obj.length; i++) {
                var obj = this.data.obj[i];
                this.drawArcLine(obj.index, obj.value, obj.color);
            }
        },
        drawCircle: function () {
            this.ctx.lineWidth = 3;
            this.ctx.beginPath();
            var start = this.angleToRadian(0);
            var end = this.angleToRadian(360);

            this.ctx.save();
            this.ctx.shadowBlur = 10;
            this.ctx.shadowOffsetX = 2;
            this.ctx.shadowOffsetY = 4;
            this.ctx.shadowColor = "rgba(50, 50, 50, 0.6)";
            this.ctx.fillStyle = "#fff";
            this.ctx.arc(this.positionX, this.positionY, this.radius, start, end, true);
            this.ctx.fill();
            this.ctx.restore();

            this.ctx.strokeStyle = "#fff";

            this.ctx.moveTo(this.positionX - 40, this.positionY);
            this.ctx.lineTo(this.positionX + 40, this.positionY);
            this.ctx.font = "20px sans-serif";
            this.ctx.textAlign = "center";
            this.ctx.textBaseline = "bottom";
            this.ctx.fillStyle = "#6A7CAF";
            this.ctx.fillText("NXV1020A", this.positionX, this.positionY - 10, 100);
            this.ctx.fillStyle = "#6AB7C8";
            this.ctx.fillText("NXV600A", this.positionX, this.positionY + 30, 100);
            this.ctx.stroke();
            this.ctx.closePath();
        },
        drawScale: function () {
            var currentAngle = 90;
            var start = this.data.start;
            var end = this.data.end;
            var step = this.data.step;
            var spiltSize = ((end - start) / step) + 1;
            var stepAngle = 360 / spiltSize;
            var textRadius = this.radius - 20;
            for (let i = start; i <= end; i += step) {
                var Radian = this.angleToRadian(currentAngle);
                var textX = Math.cos(Radian) * textRadius;
                var textY = Math.sin(Radian) * textRadius;
                this.ctx.beginPath();
                this.ctx.font = "14px sans-serif"
                this.ctx.textAlign = "center";
                this.ctx.textBaseline = "middle";
                this.ctx.fillStyle = "#4f4f4f";
                this.ctx.fillText(i + " %", this.positionX + textX, this.positionY + textY);
                currentAngle += stepAngle;
            }
        },
        drawArcLine: function (index, value, color) {
            var lineWidth = 10;
            var startAngle = 90;
            var endAngle = startAngle + (value / (this.data.end - this.data.start) * 360);
            var arcLineRadius = this.radius + 20 * index;
            this.ctx.lineWidth = lineWidth;
            this.ctx.beginPath();
            var start = this.angleToRadian(startAngle);
            var end = this.angleToRadian(endAngle);
            this.ctx.arc(this.positionX, this.positionY, arcLineRadius, start, end, true);
            this.ctx.strokeStyle = color;
            this.ctx.stroke();
            //
            var arrowX = arcLineRadius * Math.cos(end);
            var arrowY = arcLineRadius * Math.sin(end);
            this.drawArrowhead(this.positionX + arrowX, this.positionY + arrowY, this.angleToRadian(endAngle + 90), lineWidth + 10, lineWidth + 10, color);
        },
        angleToRadian: function (angle) {
            return (360 - angle) / 180 * Math.PI;
        },
        drawArrowhead: function (locx, locy, angle, sizex, sizey, color) {
            var hx = sizex / 2;
            var hy = sizey / 2;

            this.ctx.translate((locx), (locy));
            this.ctx.rotate(angle);
            this.ctx.translate(-hx, -hy);

            this.ctx.beginPath();
            this.ctx.moveTo(0, 0);
            this.ctx.lineTo(0, 1 * sizey);
            this.ctx.lineTo(1 * sizex, 1 * hy);
            this.ctx.closePath();
            this.ctx.fillStyle = color;
            this.ctx.fill();

            this.ctx.translate(hx, hy);
            this.ctx.rotate(-angle);
            this.ctx.translate(-locx, -locy);
        }
    }
};
</script>
<style>
</style>
