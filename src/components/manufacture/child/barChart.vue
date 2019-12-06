<template>
    <div :id="barObject.id"></div>
</template>

<script>
export default {
    name: "barChart",
    props: {
        barObject: { type: Object }
    },
    data() {
        return {
            chart: {}
        }
    },
    mounted() {
		var height = document.getElementById(this.barObject.id).offsetHeight;
        this.chart = Highcharts.chart(this.barObject.id, {
            chart: {
                backgroundColor: 'transparent',
                height: height
            },
            credits: {
                enabled: false
            },
            title: {
                text: null
            },
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
                    }
                }
            },
            yAxis: {
                title: null,
                labels: {
                    format: '{value} kW',
                    style: {
                        color: '#8898bd',
                        fontSize: '12px'
                    }
                },
                plotLines: [{
                    color: 'black',
                    width: 6,
                    value: 10,
                    label: {
                        align: 'right',
                        style: {
                            fontStyle: 'italic'
                        },
                    },
                    zIndex: 5
                }]
            },
            series: [{
                showInLegend: false,
                type: 'column',
                name: '用電量',
                data: this.barObject.data.slice()
            }],
            tooltip: {
                formatter: function () {
                    return this.y + ' kW';
                }
            },
            plotOptions: {
                column: {
                    grouping: false,
                    borderRadiusTopLeft: 30,
                    borderRadiusTopRight: 30
                }
            },
            backgroundColor: 'transparent'
        });
    },
    watch: {
        barObject: {
			deep: true,
            handler() {
                this.chart.series[0].update({data: this.barObject.data.slice()});
            }
        }
    }
};
</script>
<style lang="css">
*{
	font-family: Microsoft JhengHei !important;
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