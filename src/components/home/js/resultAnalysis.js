var chartSize = window.innerWidth >= 768 ? 200 : 150;
window.pieData = [{
        name: 'NXV1020A',
        y: 70,
        z: 100,
    },
    {
        name: 'NXV600A',
        y: 30,
        z: 100,
    }
]

window.pieDatas = [...window.pieData]
let ReSet = (num) => {
    clearInterval(window.AutoStart)
    for (let i = 0; i < PieChart.series[0].data.length; i++) {
        PieChart.series[2].data[i].sliced = false
        PieChart.series[2].data[i].selected = false
        PieChart.series[2].data[i].color = 'rgb(255,255,255,0)'
    }
    PieChart.series[2].data[pieView].color = PieChart.series[0].data[pieView].color
    PieChart.series[2].data[pieView].sliced = true
    PieChart.series[2].data[pieView].selected = true
    let series = PieChart.series[0];
    list = series.data
    PieChart.series[2].setData(PieChart.series[2].data, true);
    window.PieChart.setTitle({
        text: `<div style="text-align: center;">
        <div>${list[num].name}</div>
        <div style="font-size:1.25rem;font-weight: 700;">${list[num].y}%</div>
        <hr style="margin:.25rem; border-top: 1px solid #A8ACC2; width: 6rem;">
        <div>總計:${list[num].z}件</div>
    </div>`
    }, false, true)
    window.AutoStart = setInterval(window.pieCarousel, 3000);
}
window.window.PieChart = Highcharts.chart('resultAnalysis-content', {
    chart: {
        height: 240,
        spacing: [0, 0, 0, 0],
        type: 'pie',
        useHTML: true,
        events: {
            render: function() {
                let series = this.series
                let sum = 0
                for (let i = 0; i < series.length; i++) {
                    if (series[i].visible) {
                        for (let j = 0; j < series[i].data.length; j++) {
                            sum += series[i].data[j].y
                        }
                    }
                }
                this.setTitle({
                    text: '<div class="fcenter"><b>名稱</b><br><hr"><br>' +
                        +sum + 'pcs</div>',
                    y: 100
                }, false, false)
            }
        }
    },
    title: {
        floating: true,
        useHTML: true,
        title: "",
        style: { color: '#A8ACC2', fontSize: 14 }

    },
    credits: {
        enabled: false
    },
    tooltip: {
        enabled: false,
        pointFormat: '總計:{point.z}pcs'
    },
    legend: false, //圖標
    plotOptions: {
        // series: {
        //     dataLabels: {
        //         enabled: true,
        //         format: '<h6>{point.name} {point.y}%</h6>'
        //     }
        // },
        series: {
            states: {
                inactive: {
                    opacity: 0.9
                },
            },
        },
        pie: {
            slicedOffset: 0,
            size: chartSize,
            innerSize: '65%',
            shadow: false,
            allowPointSelect: true,
            cursor: 'pointer',
            colors: ['#8695C2', '#18AFC6', '#45AEA5', '#6db8d8'],
            showInLegend: true,
            dataLabels: {
                enabled: false,
                useHTML: true,
                dataLabels: {
                    enabled: false,
                },
                formatter: function() {
                    return ''
                        // return '<div class="text-center font pieFont"><b>'+ this.point.name +'  <span >' +
                        // 		this.point.y +' %</span></b><hr style="margin-top:5px;margin-bottom:5px;">'  + //'總計 : '
                        // 		this.point.z + 'pcs</div>'
                },
                distance: 10,
                connectorWidth: 0,
                style: {
                    color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || '#A8ACC2',
                    fontSize: 12,
                    fontFamily: '微軟正黑體'
                }
            },

        }
    },
    series: [{
            data: window.pieData,
            events: {
                click: (e) => {
                    pieView = e.point.index
                    ReSet(pieView)
                },
            },
        }, {
            type: 'pie',
            data: [{
                name: '',
                y: 10,
                color: 'rgb(255,255,255,0.5)'
            }],
            dataLabels: {
                enabled: false
            },
            size: 160,
            innerSize: 130
        },
        {

            type: 'pie',
            data: window.pieDatas,
            dataLabels: {
                enabled: false
            },
            credits: { enabled: false },
            tooltip: {
                enabled: false,
                style: {
                    pointerEvents: 'none'
                }
            },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    size: '100%',
                },
                series: {
                    selected: false,
                }
            },
            size: 125,
            innerSize: 117.5
        }
    ]
}, function(c) { // 图表初始化完毕后的会掉函数
    // 环形图圆心
    var centerY = c.series[0].center[1],
        titleHeight = parseInt(c.title.styles.fontSize);
    // 动态设置标题位置
    c.setTitle({
        y: centerY + titleHeight / 2
    });
});
window.pieView = 0
window.pieCarousel = () => {
    window.pieDatas = [...window.PieChart.series[0].points]
    list = window.pieData
    num = window.pieView++ % window.pieData.length;
    let name = document.getElementsByClassName('resultAnalysis-name')
    let number = document.getElementsByClassName('resultAnalysis-number')

    for (let i = 0; i < window.pieData.length; i++) {
        // window.pieData[i].selected = false
        // window.pieData[i].sliced = false
        window.PieChart.series[2].data[i].name = window.pieDatas[i].name
        window.PieChart.series[2].data[i].y = window.pieDatas[i].y
        window.PieChart.series[2].data[i].z = window.pieDatas[i].z
        name[i].innerHTML = `<div style="font-size:12px; color: #6A7BAF;">${window.pieData[i].name} ${window.pieData[i].y}%</div>`
        number[i].innerHTML = `<div style="font-size:12px; color: #6A7BAF;">總計:${window.pieData[i].z}件</div>`
        window.PieChart.series[2].data[i].sliced = false
        window.PieChart.series[2].data[i].selected = false
        window.PieChart.series[2].data[i].color = 'rgb(255,255,255,0)'
    }
    // data.selected = true
    // data.sliced = true
    window.PieChart.series[2].data[num].color = window.PieChart.series[0].data[num].color
    window.PieChart.series[2].data[num].selected = false
    window.PieChart.series[2].data[num].sliced = false
    window.PieChart.series[2].setData(window.PieChart.series[2].data, true);


    window.PieChart.setTitle({
        text: `<div style="text-align: center; color: #6A7BAF;">
        <div>${list[num].name}</div>
        <div style="font-size:1.25rem;font-weight: 700;">${list[num].y} %</div>
        <hr style="margin:.25rem; border-top: 1px solid #A8ACC2; width: 6rem;">
        <div>總計:${list[num].z}件</div>
    </div>`
    }, false, false)
}
window.AutoStart = setInterval(window.pieCarousel, 3000);