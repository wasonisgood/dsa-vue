var g = new JustGage({
    id: "gauge",
    value: getRandomInt(0, 100),
    valueFontColor: '#ffffff',
    valueFontFamily: "Abwechselnschrift",
    gaugeColor:"#24303e",
    label: "OEE",
    min: 0,
    max: 100,
    symbol: "%",
    gaugeWidthScale: 0.5,
    customSectors: [{
        color: '#28879e',
        lo: 0,
        hi: 100
    }]
    ,
    shadowOpacity: 0.5,
    shadowSize: 5,
    shadowVerticalOffset: 10,
    counter: true,
});

setInterval(function () {
    g.refresh(getRandomInt(0, 100));
}, 1000);
