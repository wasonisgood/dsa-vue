<template>
    <div :id="pieObject.id"></div>
</template>

<script>
import Highcharts from 'highcharts';
export default {
    name: "pieData",
    props: {
        pieObject: { type: Object }
    },
    data() {
        return {
            chart: {},
            pieData: this.pieObject.pieData.slice()
        }
    },
    mounted() {
		var height = document.getElementById(this.pieObject.id).offsetHeight;
        var total = 50;
        let pieDatas = [...this.pieData]
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
            PieChart.setTitle({
                text:
                    `<div class="pieWord"> 
						<div>${list[num].name}</div>
						<div>${list[num].z}%</div>
						<hr>
						<div>總計：${list[num].y}kWh</div>
					</div>`}, false, true)
            window.AutoStart = setInterval(window.pieCarousel, 1000);
        }
        var PieChart = Highcharts.chart(this.pieObject.id, {
            chart: {
                spacing: [0, 0, 0, 0], /*Mead 園的上、右、下、左的空白*/
                type: 'pie',
                height: height,
                backgroundColor: 'transparent',
                events: {
                    render: function () {
                        let data = this.series[0].data[0]
                        this.setTitle({text:
                                `<div class="pieWord"> 
									<div>${data.name}</div>
									<div>${data.z}%</div>
									<hr>
									<div>總計：${data.y}kWh</div>
								</div>`, y: 125}, false, false) /*Mead 中間字的Y軸*/
                    }
                }
            },
            title: {
                useHTML: true,
                floating: true,
                title: "",
                style: { color: '#6A7CAE', fontSize: 14 }
            },
            credits: {
                enabled: false
            },
            tooltip: {
                enabled: false,
                pointFormat: '<br>{point.y}kWh {point.z}%'
            },
            plotOptions: {
                series: {
                    states: {
                        inactive: {
                            opacity: 0.9
                        },
                    },
                },
                pie: {
                    slicedOffset: 0,
                    size: '90%', /*Mead 主要園的大小 280 100%*/
                    innerSize: '65%',
                    shadow: false,
                    allowPointSelect: true,
                    cursor: 'pointer',
                    colors: ['#8695C2', '#18AFC6', '#45AEA5', '#5cb0d4'],
                    legend: {
                        enabled: false
                    },
                    dataLabels: {
                        enabled: false,
                        useHTML: true,
                        formatter: function () {
                            return '<div class="text-center h6 font"><b>' + this.point.name + '   <span>' +
                                this.point.y + ' %</span></b><hr style="margin-top:5px;margin-bottom:5px;">' + '總計 : ' +
                                this.point.z + '小時' + this.point.x + '分</div>'
                        },
                        distance: 10,
                        connectorWidth: 0,
                        style: {
                            color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || '#6A7CAE',
                            fontSize: 16,
                            fontFamily: '微軟正黑體'
                        }
                    },

                }
            },
            series: [{
                type: 'pie',
                data: this.pieData,
                events: {
                    click: (e) => {
                        pieView = e.point.index
                        ReSet(pieView)
                    },
                }
            },
            {
                type: 'pie',
                data: [
                    {
                        name: '',
                        y: 10,
                        color: 'rgb(255,255,255,0.3)',
                    },
                    ,
                ],
                dataLabels: {
                    enabled: false
                },
                credits: { enabled: false },
                tooltip: {                    enabled: false,
                    style: {
                        pointerEvents: 'none'
                    }                },
                allowPointSelect: false,
                plotOptions: {
                    pie: {
                        allowPointSelect: false,
                        size: '100%',
                    },
                    series: {
                        states: {
                            hover: {
                                enabled: false
                            },
                        }
                    }
                },
                size: '70%', /*Mead 透明圓環的大小 215 78%*/
                innerSize: '75%' /*Mead 透明圓環的內圈大小 180 75%*/
            },
            {
                type: 'pie',
                data: pieDatas,
                dataLabels: {
                    enabled: false
                },
                credits: { enabled: false },
                tooltip: {                    enabled: false,
                    style: {
                        pointerEvents: 'none'
                    }                },
                plotOptions: {
                    pie: {
                        allowPointSelect: true,
                        size: '100%',
                    },

                },
                size: '57%',/*Mead 中心白圓的大小 175 63%*/
                innerSize: '95%' /*Mead 中心白圓的內圈大小 167.5 95%*/
            },
            ]        }, function (c) { // 图表初始化完毕后的会掉函数
            // 环形图圆心
            var centerY = c.series[0].center[1],
                titleHeight = parseInt(c.title.styles.fontSize);
            // 动态设置标题位置
            c.setTitle({
                y: centerY + titleHeight / 2
            });
        });


        let pieView = 0
        window.pieCarousel = () => {
            pieDatas = [...this.pieData.slice()]
            let series = PieChart.series[0];
            let list = series.data
            let num = pieView++ % this.pieData.length;
            let total = 0
            for (let i = 0; i < series.data.length; i++) {
                list[i].selected = false
                list[i].sliced = false
                // list[i].borderColor = 'rgb(255,255,255,0)'
                list[i].color = series.options.colors[i]
                total += list[i].y
                PieChart.series[2].data[i].sliced = false
                PieChart.series[2].data[i].selected = false
                PieChart.series[2].data[i].color = 'rgb(255,255,255,0)'
            }
            for (let i = 0; i < series.data.length; i++) {
                list[i].z = Math.round(list[i].y / total * 100)
            }

            PieChart.series[2].data[num].color = PieChart.series[0].data[num].color
            PieChart.series[2].data[num].selected = false
            PieChart.series[2].data[num].sliced = false
            PieChart.series[2].setData(PieChart.series[2].data, true);
            PieChart.series[0].setData(list, true);
            PieChart.setTitle({
                text:
                    `<div class="pieWord"> 
						<div>${list[num].name}</div>
						<div>${list[num].z}%</div>
						<hr>
						<div>總計：${list[num].y}kWh</div>
					</div>`}, false, false)

        }
        window.AutoStart = setInterval(window.pieCarousel, 1000);
    },
    methods: {
        refresh: function (newValue) {
        }
    },
    updated: function () {
        console.log("123")
    }
};
</script>
<style lang="css">
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

/*圖表*/
.pieWord {
    color: #6a7cb1;
    text-align: center;
    font-size: 19px;
}
.pieWord > div:nth-child(1) {
    height: 20px;
}
.pieWord > div:nth-child(2) {
    font-size: 47px;
    height: 60px;
    font-family: "Microsoft JhengHei Blod", sans-serif;
}
.pieWord > hr {
    margin: 0.25rem 0px;
    border-top: 1px solid #6a7cae;
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