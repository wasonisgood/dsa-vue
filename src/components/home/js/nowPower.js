var opts = {
    angle: 0, // The span of the gauge arc
    lineWidth: 0.25, // The line thickness
    radiusScale: 1, // Relative radius
    pointer: {
        length: 0.25, // // Relative to gauge radius
        strokeWidth: 0.054, // The thickness
        color: '#696969' // Fill color
    },
    limitMax: false, // If false, max value increases automatically if value > maxValue
    limitMin: false, // If true, the min value of the gauge will be fixed
    colorStart: '#6FADCF', // Colors
    colorStop: '#8FC0DA', // just experiment with them
    strokeColor: '#E0E0E0', // to see which ones work best for you
    generateGradient: true,
    highDpiSupport: true, // High resolution support
    renderTicks: {
        divisions: 20,
        divWidth: 3.5,
        divLength: 1,
        divColor: '#fff',
        subDivisions: 0,
        subLength: 0,
        subWidth: 0,
        subColor: '#666666'
    },
    staticZones: [
        { strokeStyle: '#49A59E', min: 0, max: 860 },
        { strokeStyle: '#28A4BC', min: 860, max: 1640 },
        { strokeStyle: '#697BB0', min: 1640, max: 2500 },
    ],
};

var target = document.getElementById('nowPower'); // your canvas element
var gauge = new Gauge(target).setOptions(opts); // create sexy gauge!
gauge.setTextField(document.getElementById("nowPower-Value"));
gauge.maxValue = 2500; // set max gauge value
gauge.setMinValue(0); // Prefer setter over gauge.minValue = 0
gauge.set(950); // set actual value

setInterval(function() {
    gauge.set(Math.floor(Math.random() * 2500) + 0); // set actual value
}, 2000);