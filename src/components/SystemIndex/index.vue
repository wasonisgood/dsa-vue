<template>
    <div>
        <div class="home-container">
            <div class="h-100">
                <div class="row h-lg-60">
                    <div id="system-header" class="h-lg-100 w-lg-60 w-xs-100 home-content">
                        <systemStatus :systemStatusData="systemStatus" :Toggle="Toggle"></systemStatus>
                    </div>
                    <div id="orderTable-header" class="h-lg-100 w-lg-40 w-xs-100 home-content">
                        <orderTable :orderTableData="orderTable" :Toggle="Toggle"></orderTable>
                    </div>
                </div>
                <div class="row h-lg-40">
                    <div id="nowPowerChart-header" class="h-lg-100 w-lg-20 w-xs-100 home-content">
                        <gauge :nowPowerChartData="nowPowerChart" :Toggle="Toggle"></gauge>
                    </div>
                    <div id="totalPower-header" class="h-lg-100 w-lg-20 w-xs-100 home-content">
                        <totalPower :totalPowerData="totalPower" :Toggle="Toggle"></totalPower>
                    </div>
                    <div id="blockMW-header" class="h-lg-100 w-lg-20 w-xs-100 home-content">
                        <blockMW :blockMWData="blockMW" :Toggle="Toggle"></blockMW>
                    </div>
                    <div id="machineUtilizationRate-header" class="h-lg-100 w-lg-20 w-xs-100 home-content">
                        <circleAnalysis :circleAnalysisData="machineUtilizationRate" :bus="bus" :Toggle="Toggle"></circleAnalysis>
                    </div>
                    <div id="resultAnalysis-header" class="h-lg-100 w-lg-20 w-xs-100 home-content">
                        <resultAnalysis :resultAnalysisData="resultAnalysis" :Toggle="Toggle"></resultAnalysis>
                    </div>
                </div>
            </div>
        </div>

        <!-- 手機版footer -->
        <footer class="d-sm-none phone-footer">
            <div style="width: 100vw; height: 100%;">
                <div class="phone-footer-container">
                    <img src="@/assets/home/img/footer/system-status-phone.png" class="phone-footer-img" @click="scrollToTag(systemStatus)" />
                </div>
                <div class="phone-footer-container">
                    <img src="@/assets/home/img/footer/search-phone.png" class="phone-footer-img" @click="scrollToTag(orderTable)" />
                </div>
                <div class="phone-footer-container">
                    <img src="@/assets/home/img/footer/instant-power-consumption-phone.png" class="phone-footer-img" @click="scrollToTag(nowPowerChart)" />
                </div>
                <div class="phone-footer-container">
                    <img src="@/assets/home/img/footer/electronic-phone.png" class="phone-footer-img" @click="scrollToTag(totalPower)" />
                </div>
                <div class="phone-footer-container">
                    <img src="@/assets/home/img/footer/tools-phone.png" class="phone-footer-img" @click="scrollToTag(blockMW)" />
                </div>
                <div class="phone-footer-container">
                    <img src="@/assets/home/img/footer/iconAchievedToday-phone.png" class="phone-footer-img" @click="scrollToTag(machineUtilizationRate)" />
                </div>
                <div class="phone-footer-container">
                    <img src="@/assets/home/img/footer/output-status-phone.png" class="phone-footer-img" @click="scrollToTag(resultAnalysis)" />
                </div>
            </div>
        </footer>
    </div>
</template>

<script>
import Vue from 'vue'
import gauge from './child/gauge.vue'
import circleAnalysis from './child/circleAnalysis.vue'
import resultAnalysis from './child/resultAnalysis.vue'
import totalPower from './child/totalPower.vue'
import blockMW from './child/blockMW.vue'
import orderTable from './child/orderTable.vue'
import systemStatus from './child/systemStatus.vue'

export default {
    name: "home",
    components: { gauge, circleAnalysis, resultAnalysis, totalPower, blockMW, orderTable, systemStatus },
    data() {
        return {
            bus: new Vue(),
            systemStatus: {
                name: "system-header",
                flag: true
            },
            orderTable: {
                name: "orderTable-header",
                flag: true,
                data: [{
                    orderDate: "2019/06/30",
                    orderNumber: "10808260001",
                    caseNumber: "WDR603",
                    deliveryDate: "2019/06/30",
                    completeDate: "2019/06/30",
                    deliveryFlag: true
                }, {
                    orderDate: "2019/06/30",
                    orderNumber: "10808260002",
                    caseNumber: "WDR603",
                    deliveryDate: "2019/06/30",
                    completeDate: "2019/06/30",
                    deliveryFlag: false
                }, {
                    orderDate: "2019/06/30",
                    orderNumber: "10808260003",
                    caseNumber: "WDR603",
                    deliveryDate: "2019/06/30",
                    completeDate: "2019/06/30",
                    deliveryFlag: true
                }, {
                    orderDate: "2019/06/30",
                    orderNumber: "10808260004",
                    caseNumber: "WDR603",
                    deliveryDate: "2019/06/30",
                    completeDate: "2019/06/30",
                    deliveryFlag: false
                }, {
                    orderDate: "2019/06/30",
                    orderNumber: "10808260005",
                    caseNumber: "WDR603",
                    deliveryDate: "2019/06/30",
                    completeDate: "2019/06/30",
                    deliveryFlag: true
                }, {
                    orderDate: "2019/06/30",
                    orderNumber: "10808260006",
                    caseNumber: "WDR603",
                    deliveryDate: "2019/06/30",
                    completeDate: "2019/06/30",
                    deliveryFlag: false
                }, {
                    orderDate: "2019/06/30",
                    orderNumber: "10808260007",
                    caseNumber: "WDR603",
                    deliveryDate: "2019/06/30",
                    completeDate: "2019/06/30",
                    deliveryFlag: true
                }, {
                    orderDate: "2019/06/30",
                    orderNumber: "10808260008",
                    caseNumber: "WDR603",
                    deliveryDate: "2019/06/30",
                    completeDate: "2019/06/30",
                    deliveryFlag: false
                }, {
                    orderDate: "2019/06/30",
                    orderNumber: "10808260009",
                    caseNumber: "WDR603",
                    deliveryDate: "2019/06/30",
                    completeDate: "2019/06/30",
                    deliveryFlag: true
                }, {
                    orderDate: "2019/06/30",
                    orderNumber: "10808260010",
                    caseNumber: "WDR603",
                    deliveryDate: "2019/06/30",
                    completeDate: "2019/06/30",
                    deliveryFlag: false
                }, {
                    orderDate: "2019/06/30",
                    orderNumber: "10808260011",
                    caseNumber: "WDR603",
                    deliveryDate: "2019/06/30",
                    completeDate: "2019/06/30",
                    deliveryFlag: true
                }]
            },
            nowPowerChart: {
                name: "nowPowerChart-header",
                flag: true,
                data: {
                    id: "nowPower",
                    maxValue: 2500,
                    minValue: 0,
                    nowValue: 950
                }
            },
            totalPower: {
                name: "totalPower-header",
                flag: true,
                data: {
                    allEnergy: 5,
                    weekEnergy: 1.2,
                    monthEnergy: 1.9,
                    seasonEnergy: 2.5,
                    accumulatedEnergy: 4
                }
            },
            blockMW: {
                name: "blockMW-header",
                flag: true,
                data: [
                    {
                        name: "NXV 1020 A",
                        value: "WDR604-A01-P001-1",
                        class: "color_blue"
                    },
                    {
                        name: "NXV 600 A",
                        value: "WDR604-A01-P001-2",
                        class: "color_green"
                    }
                ]
            },
            machineUtilizationRate: {
                name: "machineUtilizationRate-header",
                flag: true,
                data: {
                    "id": "machineUtilizationRateChart",
                    "start": 0,
                    "end": 100,
                    "step": 20,
                    "obj": [{
                        "index": 1,
                        "value": 80,
                        "color": "#6A7CAF"
                    }, {
                        "index": 2,
                        "value": 60,
                        "color": "#6AB7C8"
                    }]
                }
            },
            resultAnalysis: {
                name: "resultAnalysis-header",
                flag: true,
                data: {
                    "id": "resultAnalysisChart",
                    "obj": [{
                        name: 'NXV1020A',
                        y: 70,
                        value: 100,
                    }, {
                        name: 'NXV600A',
                        y: 30,
                        value: 100,
                    }]
                }
            }
        }
    },
    mounted() {
        if (window.innerWidth < 992) {
            setTimeout(() => {
                this.$set(this.orderTable, 'flag', false);
                this.$set(this.nowPowerChart, 'flag', false);
                this.$set(this.totalPower, 'flag', false);
                this.$set(this.blockMW, 'flag', false);
                this.$set(this.machineUtilizationRate, 'flag', false);
                this.$set(this.resultAnalysis, 'flag', false);
            }, 500);
        }
        window.onresize = () => {
            setTimeout(() => {
                location.reload();
            }, 1000);
        }
        setInterval(() => {
            // machineUtilizationRate
            let machineUtilizationRateData = this.machineUtilizationRate.data;
            for (let i = 0; i < machineUtilizationRateData.obj.length; i++) {
                machineUtilizationRateData.obj[i].value = Math.floor(Math.random() * machineUtilizationRateData.end) + machineUtilizationRateData.start;
            }
            this.bus.$emit('drawBase');
        }, 1000);
        setInterval(() => {
            // nowPower
            let data = this.nowPowerChart.data;
            data.nowValue = Math.floor(Math.random() * data.maxValue) + data.minValue;
            this.$set(this.nowPowerChart, 'data', data);
        }, 1000);
    },
    methods: {
        Toggle: function (content) {
            if (window.innerWidth < 992) {
                this.$set(content, 'flag', !content.flag);
            }
        },
        scrollToTag: function (content) {
            this.$set(content, 'flag', true);
            setTimeout(function () {
                document.getElementById(content.name).scrollIntoView({
                    behavior: 'smooth'
                });
            }, 100)
        }
    }
};
</script>
<style lang="css">
@import url("./css/home.css");
@import url("../../assets/css/icon.css");
</style>