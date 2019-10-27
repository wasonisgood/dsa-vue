Chart.pluginService.register({
    beforeDraw: function (chart) {
        if (chart.config.options.elements.center) {
            //Get ctx from string
            var ctx = chart.chart.ctx;

            //Get options from the center object in options
            var centerConfig = chart.config.options.elements.center;
            var fontStyle = centerConfig.fontStyle || 'Arial';
            var txt = centerConfig.text;
            var color = centerConfig.color || '#000';
            var sidePadding = centerConfig.sidePadding || 20;
            var sidePaddingCalculated = (sidePadding / 100) * (chart.innerRadius * 2)
            //Start with a base font of 30px
            ctx.font = "30px " + fontStyle;

            //Get the width of the string and also the width of the element minus 10 to give it 5px side padding
            var stringWidth = ctx.measureText(txt).width;
            var elementWidth = (chart.innerRadius * 2) - sidePaddingCalculated;

            // Find out how much the font can grow in width.
            var widthRatio = elementWidth / stringWidth;
            var newFontSize = Math.floor(30 * widthRatio);
            var elementHeight = (chart.innerRadius * 2);

            // Pick a new font size so it will not be larger than the height of label.
            var fontSizeToUse = Math.min(newFontSize, elementHeight);

            //Set font settings to draw it correctly.
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            var centerX = ((chart.chartArea.left + chart.chartArea.right) / 2);
            var centerY = ((chart.chartArea.top + chart.chartArea.bottom) / 2);
            ctx.font = fontSizeToUse + "px " + fontStyle;
            ctx.fillStyle = color;

            //Draw text in center
            ctx.fillText(txt, centerX, centerY);
        }
    }
});

var randomScalingFactor = function () {
    return (Math.random() > 0.5 ? 1.0 : 1.0) * Math.round(Math.random() * 100);
};

// draws a rectangle with a rounded top
Chart.helpers.drawRoundedTopRectangle = function (ctx, x, y, width, height, radius) {
    ctx.beginPath();
    ctx.moveTo(x + radius, y);
    // top right corner
    ctx.lineTo(x + width - radius, y);
    ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
    // bottom right	corner
    ctx.lineTo(x + width, y + height);
    // bottom left corner
    ctx.lineTo(x, y + height);
    // top left
    ctx.lineTo(x, y + radius);
    ctx.quadraticCurveTo(x, y, x + radius, y);
    ctx.closePath();
};

Chart.elements.RoundedTopRectangle = Chart.elements.Rectangle.extend({
    draw: function () {
        var ctx = this._chart.ctx;
        var vm = this._view;
        var left, right, top, bottom, signX, signY, borderSkipped;
        var borderWidth = vm.borderWidth;

        if (!vm.horizontal) {
            // bar
            left = vm.x - vm.width / 3;
            right = vm.x + vm.width / 3;
            top = vm.y;
            bottom = vm.base;
            signX = 1;
            signY = bottom > top ? 1 : -1;
            borderSkipped = vm.borderSkipped || 'bottom';
        } else {
            // horizontal bar
            left = vm.base;
            right = vm.x;
            top = vm.y - vm.height / 2;
            bottom = vm.y + vm.height / 2;
            signX = right > left ? 1 : -1;
            signY = 1;
            borderSkipped = vm.borderSkipped || 'left';
        }

        // Canvas doesn't allow us to stroke inside the width so we can
        // adjust the sizes to fit if we're setting a stroke on the line
        if (borderWidth) {
            // borderWidth shold be less than bar width and bar height.
            var barSize = Math.min(Math.abs(left - right), Math.abs(top - bottom));
            borderWidth = borderWidth > barSize ? barSize : borderWidth;
            var halfStroke = borderWidth / 2;
            // Adjust borderWidth when bar top position is near vm.base(zero).
            var borderLeft = left + (borderSkipped !== 'left' ? halfStroke * signX : 0);
            var borderRight = right + (borderSkipped !== 'right' ? -halfStroke * signX : 0);
            var borderTop = top + (borderSkipped !== 'top' ? halfStroke * signY : 0);
            var borderBottom = bottom + (borderSkipped !== 'bottom' ? -halfStroke * signY : 0);
            // not become a vertical line?
            if (borderLeft !== borderRight) {
                top = borderTop;
                bottom = borderBottom;
            }
            // not become a horizontal line?
            if (borderTop !== borderBottom) {
                left = borderLeft;
                right = borderRight;
            }
        }

        // calculate the bar width and roundess
        var barWidth = Math.abs(left - right);
        var roundness = this._chart.config.options.barRoundness || 0.5;
        var radius = barWidth * roundness * 0.7;

        // keep track of the original top of the bar
        var prevTop = top;

        // move the top down so there is room to draw the rounded top
        top = prevTop + radius;
        var barRadius = top - prevTop;

        ctx.beginPath();
        ctx.fillStyle = vm.backgroundColor;
        ctx.strokeStyle = vm.borderColor;
        ctx.lineWidth = borderWidth;

        // draw the rounded top rectangle
        Chart.helpers.drawRoundedTopRectangle(ctx, left, (top - barRadius + 1), barWidth, bottom - prevTop, barRadius);

        ctx.fill();
        if (borderWidth) {
            ctx.stroke();
        }

        // restore the original top value so tooltips and scales still work
        top = prevTop;
    },
});

Chart.defaults.roundedBar = Chart.helpers.clone(Chart.defaults.bar);

Chart.controllers.roundedBar = Chart.controllers.bar.extend({
    dataElementType: Chart.elements.RoundedTopRectangle
});

var totalNumber = 2;
var op34 = 2;
var op5 = 2;
var data1 = [];
var data2 = [];
var data3 = [];
var updateInterval = 1000;

function getRandom1() {
    if (data1.length > 0) {
        data1 = data1.slice(1);
    }
    while (data1.length <= totalNumber) {
        var y = Math.round(Math.random() * 500);
        if (y < 0)
            y = 0;
        if (y > 500)
            y = 500;
        data1.push(y);
    }
    var res = [];
    for (var i = 0; i < data1.length; ++i)
        res.push(data1[i])
    return res;
}

function getRandom2() {
    if (data2.length > 0) {
        data2 = data2.slice(1);
    }
    while (data2.length <= op34) {
        var y = Math.round(Math.random() * 100);
        if (y < 0)
            y = 0;
        if (y > 100)
            y = 100;
        data2.push(y);
    }
    var res2 = [];
    for (var i = 0; i < data2.length; ++i)
        res2.push(data2[i])
    return res2;
}

function getRandom3() {
    if (data3.length > 0) {
        data3 = data3.slice(1);
    }
    while (data3.length <= op5) {
        var y = Math.round(Math.random() * 100);
        if (y < 0)
            y = 0;
        if (y > 100)
            y = 100;
        data3.push(y);
    }
    data3.pop();
    var res3 = [];
    for (var i = 0; i < data3.length; ++i)
        res3.push(data3[i])
    return res3;
}

function update() {
    var config = {
        type: 'doughnut',
        data: {
            labels: [
                "早班完成數",
                "晚班完成數",
                "未完成數",
            ],
            datasets: [{
                data: getRandom1(),
                backgroundColor: [
                    "#0bbad5",
                    "#889cc8",
                    "#4ab6ad",
                ],
                hoverBackgroundColor: [
                    "#0bbad5",
                    "#889cc8",
                    "#4ab6ad",
                ]
            }]
        },
        options: {
            elements: {
                center: {
                    text: '總產量',
                    color: '#FF6384', // Default is #000000
                    fontStyle: 'Arial', // Default is Arial
                    sidePadding: 20 // Defualt is 20 (as a percentage)
                }
            },
            legend: {
              display: false
            }
        }
    };

    var bar = {
        type: 'roundedBar',
        data: {
            labels: ['OP3', 'OP4', 'OP5'],
            datasets: [{
                label: '1',
                backgroundColor: '#899ac8',
                borderColor: 'blue',
                data: getRandom2()
            }, {
                label: '2',
                backgroundColor: '#4bbed2',
                borderColor: 'rgb(255, 99, 132)',
                data: getRandom2()
            }, {
                label: '3',
                backgroundColor: '#6dbdb7',
                borderColor: 'rgb(255, 99, 132)',
                data: getRandom2()
            }, {
                label: '4',
                backgroundColor: '#55b7e6',
                borderColor: 'rgb(255, 99, 132)',
                data: getRandom3()
            }
            ]
        },
        options: {
            responsive: true,
            barRoundness: 1,
            legend: {
              display: false
            }
        }
    }

    var ctx = document.getElementById('myChart').getContext('2d');
    var chart = new Chart(ctx, bar);

    var ctx = document.getElementById("Doughnut").getContext("2d");
    var myDoughnut = new Chart(ctx, config);
    setTimeout(update, updateInterval);
    console.log(getRandom1());
}

update();
