var positionX = 150;
var positionY = 150;
var radius = 100;

$(function () {
    let productionCapacityData = {
        "start": 0,
        "end": 300,
        "step": 50,
        "obj": [
            {
                "index": 1,
                "name": "NXV1020A",
                "value": 200,
                "color": "#6A7CAF"
            }, {
                "index": 2,
                "name": "NXV600A",
                "value": 150,
                "color": "#6AB7C8"
            }
        ]
    }
    let canvas = document.getElementById("productionCapacity");
    let ctx = canvas.getContext("2d");
    canvas.width = "300";
    canvas.height = "300";
    canvas.style.width = "230px";
    canvas.style.border = "hidden";

    drawBase(ctx, productionCapacityData);

    for (let i = 0; i < productionCapacityData["obj"].length; i++) {
        let obj = productionCapacityData["obj"][i];
        drawArcLine(ctx, productionCapacityData, obj["index"], obj["value"], obj["color"]);
    }
});

function drawBase(ctx, productionCapacityData) {
    drawCircle(ctx, productionCapacityData);
    drawScale(ctx, productionCapacityData);
}

function drawCircle(ctx, productionCapacityData) {
    ctx.lineWidth = 3;
    ctx.beginPath();
    let start = angleToRadian(0);
    let end = angleToRadian(360);
    ctx.arc(positionX, positionY, radius, start, end, true);
    ctx.strokeStyle = "rgba(200, 200, 200 , 0.9)";

    ctx.moveTo(positionX - 40, positionY);
    ctx.lineTo(positionX + 40, positionY);
    ctx.font = "20px sans-serif";
    ctx.textAlign = "center";
    ctx.textBaseline = "bottom";
    ctx.fillStyle = "#6A7CAF";
    ctx.fillText(productionCapacityData["obj"][0]["name"], positionX, positionY - 10, 100);
    ctx.fillStyle = "#6AB7C8";
    ctx.fillText(productionCapacityData["obj"][1]["name"], positionX, positionY + 30, 100);
    ctx.stroke();
}

function drawScale(ctx, productionCapacityData) {
    let currentAngle = 90;
    let start = productionCapacityData["start"];
    let end = productionCapacityData["end"];
    let step = productionCapacityData["step"];
    let spiltSize = (end - start) / step;
    let stepAngle = 360 / spiltSize;
    let textRadius = radius - 20;
    for (let i = start; i < end; i += step) {
        let Radian = angleToRadian(currentAngle);
        let textX = Math.cos(Radian) * textRadius;
        let textY = Math.sin(Radian) * textRadius;
        ctx.beginPath();
        ctx.font = "14px sans-serif"
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillStyle = "#4f4f4f";
        ctx.fillText(i, positionX + textX, positionY + textY);
        currentAngle += stepAngle;
    }
}

function drawArcLine(ctx, productionCapacityData, index, value, color) {
    let lineWidth = 10;
    let startAngle = 90;
    let endAngle = startAngle + (value / (productionCapacityData["end"] - productionCapacityData["start"]) * 360);
    let arcLineRadius = radius + 20 * index;
    ctx.lineWidth = lineWidth;
    ctx.beginPath();
    let start = angleToRadian(startAngle);
    let end = angleToRadian(endAngle);
    ctx.arc(positionX, positionY, arcLineRadius, start, end, true);
    ctx.strokeStyle = color;
    ctx.stroke();
    //
    let arrowX = arcLineRadius * Math.cos(end);
    let arrowY = arcLineRadius * Math.sin(end);
    drawArrowhead(ctx, positionX + arrowX, positionY + arrowY, angleToRadian(endAngle + 90), lineWidth + 10, lineWidth + 10, color);
}

function angleToRadian(angle) {
    return (360 - angle) / 180 * Math.PI;
}

function drawArrowhead(ctx, locx, locy, angle, sizex, sizey, color) {
    let hx = sizex / 2;
    let hy = sizey / 2;

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