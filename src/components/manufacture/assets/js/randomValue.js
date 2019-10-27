(function () {
    var chart1 = $("#flotLineChart1");
    var chart2 = $("#flotLineChart2");
    var chart3 = $("#flotLineChart3");

    var totalNumber = 11;
    var updateInterval = 1000;
    var data1 = [];
    var data2 = [];
    var data3 = [];

    function getRandomData1() {
        if (data1.length > 0) {
            data1 = data1.slice(1);
        }
        while (data1.length <= totalNumber) {
            var y =Math.random() * 100 ;
            if (y < 0)
                y = 0;
            if (y > 100)
                y = 100;
            data1.push(y);
        }
        var res = [];
        for (var i = 0; i < data1.length; ++i)
            res.push([i, data1[i]])
        return res;
    }

    function getRandomData2() {
        if (data1.length > 0)
            data2 = data2.slice(1);
        while (data2.length <= totalNumber) {
            var y = Math.random() * 100;
            if (y < 0)
                y = 0;
            if (y > 100)
                y = 100;
            data2.push(y);
        }
        var res = [];
        for (var i = 0; i < data2.length; ++i)
            res.push([i, data2[i]])
        return res;
    }

    function getRandomData3() {
        if (data3.length > 0)
            data3 = data3.slice(1);
        while (data3.length <= totalNumber) {
            var y = Math.random() * 100;
            if (y < 0)
                y = 0;
            if (y > 100)
                y = 100;
            data3.push(y);
        }
        var res = [];
        for (var i = 0; i < data3.length; ++i)
            res.push([i, data3[i]])
        return res;
    }

    var options = {
        series: {
            lines: {
                show: true,
                lineWidth: 2,
                fill: true,
                fillColor: {
                    colors: [{
                        opacity: 0.1
                    }, {
                        opacity: 0.13
                    }]
                }
            },
            points: {
                show: true,
                color: "ffffff",
                lineWidth: 2,
                radius: 3,
            },
            shadowSize: 0,
            stack: true
        },
        grid: {
            show: true,
            hoverable: true,
            clickable: true,
            tickColor: "#f9f9f9",
            borderWidth: 0
        },
        legend: {
            show: false,
            backgroundOpacity: 0,
            labelBoxBorderColor: "#fff"
        },
        colors: ["#cb9624", "#4c7387", "#6f848c"],
        xaxis: {
            position: top,
            ticks: [
                [0, "M1"],
                [1, "M2"],
                [2, "M3"],
                [3, "M4"],
                [4, "M5"],
                [5, "M6"],
                [6, "M7"],
                [7, "M8"],
                [8, "M9"],
                [9, "M10"],
                [10, "M11"],
                [11, "M12"]
            ],
            font: {
                family: "Roboto,sans-serif",
                color: "#ccc"
            },
            color: "#141c27",
        },
        yaxis: {
            show: false,
            ticks: 7,
            tickDecimals: 0,
            font: {
                color: "#ccc"
            },
        }
    };

    var dataset1 = [
        { label: "Mails", data: getRandomData1() },
        { label: "SMS", data: getRandomData2() },
        { label: "Invoices", data: getRandomData3() }
    ]

    var dataset2 = [
        { label: "Mails", data: getRandomData1() },
        { label: "SMS", data: getRandomData2() },
        { label: "Invoices", data: getRandomData3() }
    ]

    var dataset3 = [
        { label: "Mails", data: getRandomData1() },
        { label: "SMS", data: getRandomData2() },
        { label: "Invoices", data: getRandomData3() }
    ]

    var plot1 = $.plot(chart1, dataset1, options);
    var plot2 = $.plot(chart2, dataset2, options);
    var plot3 = $.plot(chart3, dataset3, options);

    function showTooltip(x, y, contents) {
        $('<div id="tooltip">' + contents + '</div>').css({
            position: 'absolute',
            display: 'none',
            'font-size': '14px',
            top: y - 40,
            left: x - 55,
            color: "#fff",
            padding: '5px 10px',
            textShadow: '1px 1px 1px white',
            'border-radius': '3px',
            'background-color': 'rgba(0,0,0,0)'
        }).appendTo("body").fadeIn(200);
    }

    var previousPoint = null;
    chart1.bind("plothover", function(event, pos, item) {
        if (item) {
            if (previousPoint != item.dataIndex) {
                previousPoint = item.dataIndex;

                $("#tooltip").remove();
                var x = item.datapoint[0].toFixed(0),
                    y = item.datapoint[1].toFixed(0);

                showTooltip(item.pageX, item.pageY,
                    y);
            }
        } else {
            $("#tooltip").remove();
            previousPoint = null;
        }
    });

    chart2.bind("plothover", function(event, pos, item) {
        if (item) {
            if (previousPoint != item.dataIndex) {
                previousPoint = item.dataIndex;

                $("#tooltip").remove();
                var x = item.datapoint[0].toFixed(0),
                    y = item.datapoint[1].toFixed(0);

                showTooltip(item.pageX, item.pageY,
                    y);
            }
        } else {
            $("#tooltip").remove();
            previousPoint = null;
        }
    });

    chart3.bind("plothover", function(event, pos, item) {
        if (item) {
            if (previousPoint != item.dataIndex) {
                previousPoint = item.dataIndex;

                $("#tooltip").remove();
                var x = item.datapoint[0].toFixed(0),
                    y = item.datapoint[1].toFixed(0);

                showTooltip(item.pageX, item.pageY,
                    y);
            }
        } else {
            $("#tooltip").remove();
            previousPoint = null;
        }
    });

    function update() {
        dataset1 = [
            { label: "Mails", data: getRandomData1() },
            { label: "SMS", data: getRandomData2() },
            { label: "Invoices", data: getRandomData3() }
        ]

        dataset2 = [
            { label: "Mails", data: getRandomData1() },
            { label: "SMS", data: getRandomData2() },
            { label: "Invoices", data: getRandomData3() }
        ]

        dataset3 = [
            { label: "Mails", data: getRandomData1() },
            { label: "SMS", data: getRandomData2() },
            { label: "Invoices", data: getRandomData3() }
        ]

        plot1.setData(dataset1);
        plot1.draw();

        plot2.setData(dataset2);
        plot2.draw();

        plot3.setData(dataset3);
        plot3.draw();

        setTimeout(update, updateInterval);
    }

    update();

}())