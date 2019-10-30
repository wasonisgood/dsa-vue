var canvas, ctx;
var data = {
    "start": 0,
    "end": 120,
    "step": 20,
    "obj": [{
        "index": 1,
        "value": 80,
        "color": "#6A7CAF"
    }, {
        "index": 2,
        "value": 60,
        "color": "#6AB7C8"
    }]
}
var positionX = 150;
var positionY = 150;
var radius = 100;


setInterval(function() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < data["obj"].length; i++) {
        value = Math.floor(Math.random() * 100) + 0;
        data["obj"][i].value = value;
    }
    drawBase();
}, 1000);

canvas = document.getElementById('myCanvas');
ctx = canvas.getContext('2d');
canvas.width = "300";
canvas.height = "300";
canvas.style.width = "230px";
canvas.style.border = "hidden";

drawBase();

function drawBase() {
    drawCircle();
    drawScale();

    for (let i = 0; i < data["obj"].length; i++) {
        var obj = data["obj"][i];
        drawArcLine(obj["index"], obj["value"], obj["color"]);
    }
}

function drawCircle() {
    ctx.lineWidth = 3;
    ctx.beginPath();
    var start = angleToRadian(0);
    var end = angleToRadian(360);

    ctx.save();
    ctx.shadowBlur = 10;
    ctx.shadowOffsetX = 2;
    ctx.shadowOffsetY = 4;
    ctx.shadowColor = "rgba(50, 50, 50, 0.6)";
    ctx.fillStyle = "#fff";
    ctx.arc(positionX, positionY, radius, start, end, true);
    ctx.fill();
    ctx.restore();

    ctx.strokeStyle = "#fff";

    ctx.moveTo(positionX - 40, positionY);
    ctx.lineTo(positionX + 40, positionY);
    ctx.font = "20px sans-serif";
    ctx.textAlign = "center";
    ctx.textBaseline = "bottom";
    ctx.fillStyle = "#6A7CAF";
    ctx.fillText("NXV1020A", positionX, positionY - 10, 100);
    ctx.fillStyle = "#6AB7C8";
    ctx.fillText("NXV600A", positionX, positionY + 30, 100);
    ctx.stroke();
    ctx.closePath();
}

function drawScale() {
    var currentAngle = 90;
    var start = data["start"];
    var end = data["end"];
    var step = data["step"];
    var spiltSize = (end - start) / step;
    var stepAngle = 360 / spiltSize;
    var textRadius = radius - 20;
    for (let i = start; i < end; i += step) {
        var Radian = angleToRadian(currentAngle);
        var textX = Math.cos(Radian) * textRadius;
        var textY = Math.sin(Radian) * textRadius;
        ctx.beginPath();
        ctx.font = "14px sans-serif"
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillStyle = "#4f4f4f";
        ctx.fillText(i + " %", positionX + textX, positionY + textY);
        currentAngle += stepAngle;
    }
}

function drawArcLine(index, value, color) {
    var lineWidth = 10;
    var startAngle = 90;
    var endAngle = startAngle + (value / (data["end"] - data["start"]) * 360);
    var arcLineRadius = radius + 20 * index;
    ctx.lineWidth = lineWidth;
    ctx.beginPath();
    var start = angleToRadian(startAngle);
    var end = angleToRadian(endAngle);
    ctx.arc(positionX, positionY, arcLineRadius, start, end, true);
    ctx.strokeStyle = color;
    ctx.stroke();
    //
    var arrowX = arcLineRadius * Math.cos(end);
    var arrowY = arcLineRadius * Math.sin(end);
    drawArrowhead(positionX + arrowX, positionY + arrowY, angleToRadian(endAngle + 90), lineWidth + 10, lineWidth + 10, color);
}

function angleToRadian(angle) {
    return (360 - angle) / 180 * Math.PI;
}

function drawArrowhead(locx, locy, angle, sizex, sizey, color) {
    var hx = sizex / 2;
    var hy = sizey / 2;

    ctx.translate((locx), (locy));
    ctx.rotate(angle);
    ctx.translate(-hx, -hy);

    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(0, 1 * sizey);
    ctx.lineTo(1 * sizex, 1 * hy);
    ctx.closePath();
    ctx.fillStyle = color;
    ctx.fill();

    ctx.translate(hx, hy);
    ctx.rotate(-angle);
    ctx.translate(-locx, -locy);
}