<template>
    <div :id="lineChartData.id"></div>
</template>


<script>
export default {
    name: "lineChart",
    props: {
        lineChartData: { type: Object }
    },
    data() {
        return {
            chart: {},
            counter: this.lineChartData.dataList[0].data.length
        }
    },
    mounted() {
		var height = document.getElementById(this.lineChartData.id).offsetHeight;
        this.chart = Highcharts.chart(this.lineChartData.id, {
            chart: {
				marginTop: (this.lineChartData.type == 'FA')?33:20,
                backgroundColor: 'transparent',
                height: height,
                animation: Highcharts.svg // don't animate in old IE
            },
            credits: {
                enabled: false
            },
            title: null,
            xAxis: {
                labels: {
                    formatter: function () {
                        var label = (this.value + 1).toString()
                        if (label.length < 2) {
                            label = '0' + label
                        }
                        return label;
                    },
                    style: {
                        color: '#8898bd',
                        fontSize: '12px'
                    },
                }
            },
            yAxis: {
                title:
				(this.lineChartData.type == 'FA')?{
					text: `<span style="color: #7382B0;font-weight:700; font-size:14px;">修復時間</span>`,
					align: 'high',
					rotation: 0,
					y: -20,
					offset: -20,
				}
				:null,
                labels: {
                    style: {
                        color: '#8898bd',
                        fontSize: '12px'
                    }
                },
            },
            plotOptions: {
                series: {
                    lineWidth: 3,
                    marker: {
                        radius: 6
                    }
                }
            },
            series: this.lineChartData.dataList
        });
    },
    watch: {
        lineChartData: {
			deep: true,
            handler() {
				for(var i=0; i<this.chart.series.length; i++){
					this.chart.series[i].update({data: this.lineChartData.dataList[i].data});
				}
            }
        }
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

@media screen and (min-width: 992px) {
    .w-lg-100 {
        float: left;
        width: 100%;
        padding: 5px 15px;
    }
    .h-lg-90 {
        height: 90%;
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