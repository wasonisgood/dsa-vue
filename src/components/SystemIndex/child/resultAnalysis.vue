<template>
    <div class="content-body">
        <div class="w-lg-100 w-xs-100 text-left" @click="Toggle(resultAnalysisData)">
            <span class="workTitle">
                <img class="mr-2" width="20" src="@/assets/home/img/output-status.png" />本月產出狀況
            </span>
        </div>
        <div class="h-lg-90" id="resultAnalysis" v-show="resultAnalysisData.flag">
            <div class="w-lg-100 w-xs-100">
                <hr />
            </div>
            <div class="h-lg-90 w-lg-100 w-xs-100">
                <div class="h-lg-100 resultAnalysis-item">
                    <div class="resultAnalysis-items">
                        <div class="resultAnalysis-name"></div>
                        <hr />
                        <div class="resultAnalysis-number"></div>
                    </div>
                    <div class="resultAnalysis-items">
                        <div class="resultAnalysis-name"></div>
                        <hr />
                        <div class="resultAnalysis-number"></div>
                    </div>
                </div>
                <div :id="resultAnalysisData.data.id" class="resultAnalysis-chart"></div>
            </div>
        </div>
    </div>
</template>
<script>
import "../../../assets/assets/js/highcharts.js";
export default {
    name: "resultAnalysis",
    props: {
        resultAnalysisData: { type: Object },
        Toggle: { type: Function }
    },
    mounted() {
        let chartSize = window.innerWidth > 992 ? (window.innerWidth - 768) * 0.0434 + 150 : 180;
        window.pieData = this.resultAnalysisData.data.obj;
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
            let list = series.data
            PieChart.series[2].setData(PieChart.series[2].data, true);
            window.PieChart.setTitle({
                text: `<div style="text-align: center;">
                    <div>${list[num].name}</div>
                    <div style="font-size:1.25rem;font-weight: 700;padding-top:-2rem">${list[num].y}%</div>
                    <hr style="margin:.25rem; border-top: 1px solid #A8ACC2; width: 6rem;">
                    <div>總計:${list[num].value}件</div>
                </div>`
            }, false, true)
            window.AutoStart = setInterval(window.pieCarousel, 3000);
        }
        window.PieChart = Highcharts.chart(this.resultAnalysisData.data.id, {
            chart: {
                height: 230,
                spacing: [0, 0, 0, 0],
                type: 'pie',
                useHTML: true,
                events: {
                    render: function () {
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
                pointFormat: '總計:{point.value}pcs'
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
                        formatter: function () {
                            return ''
                            // return '<div class="text-center font pieFont"><b>'+ this.point.name +'  <span >' +
                            // 		this.point.y +' %</span></b><hr style="margin-top:5px;margin-bottom:5px;">'  + //'總計 : '
                            // 		this.point.value + 'pcs</div>'
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
        }, function (c) { // 图表初始化完毕后的会掉函数
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
            let list = window.pieData
            let num = window.pieView++ % window.pieData.length;
            let name = document.getElementsByClassName('resultAnalysis-name')
            let number = document.getElementsByClassName('resultAnalysis-number')

            for (let i = 0; i < window.pieData.length; i++) {
                // window.pieData[i].selected = false
                // window.pieData[i].sliced = false
                window.PieChart.series[2].data[i].name = window.pieDatas[i].name
                window.PieChart.series[2].data[i].y = window.pieDatas[i].percentage
                window.PieChart.series[2].data[i].value = window.pieDatas[i].value
                name[i].innerHTML = `<div style="font-size:12px; color: #6A7BAF;">${window.pieData[i].name} ${window.pieData[i].y}%</div>`
                number[i].innerHTML = `<div style="font-size:12px; color: #6A7BAF;">總計:${window.pieData[i].value}件</div>`
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
                text: `<div style="text-align: center; color: #6A7BAF;margin-top:-10%">
                        <div>${list[num].name}</div>
                        <div style="font-size:1.25rem;font-weight: 700;">${list[num].y} %</div>
                        <hr style="margin:.25rem; border-top: 1px solid #A8ACC2; width: 6rem;">
                        <div>總計:${list[num].value}件</div>
                    </div>`
            }, false, false)
        }
        window.AutoStart = setInterval(window.pieCarousel, 3000);
    }
};
</script>
<style>
.resultAnalysis-items {
    height: 50%;
    padding: 2rem 0;
}

.resultAnalysis-item {
    width: 30%;
    float: left;
}

.resultAnalysis-chart {
    height: 100%;
    width: 70%;
    float: left;
}

.workTitle {
    font-size: 16px;
    padding-left: 1rem;
    padding-top: 0.5rem;
    color: #444a5a;
    float: left;
    font-weight: bold;
}

.content-body {
    border: 0.1rem solid #bbc4d2;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.8);
    text-align: center;
    border-radius: 5px;
}

@media screen and (min-width: 992px) {
    .w-lg-100 {
        float: left;
        width: 100%;
        padding: 5px 15px;
    }
    .h-lg-90 {
        height: 90%;
    }
    .h-lg-100 {
        height: 100%;
    }
}

@media screen and (max-width: 992px) {
    .resultAnalysis-items {
        padding: 3rem 0;
    }
    .w-xs-100 {
        float: left;
        width: 100%;
        padding: 5px 15px;
    }
}

@media screen and (min-width: 1800px) {
    .h-xl-100 {
        height: 100%;
    }
}
</style>
