<template>
    <div>
        <div style="width:100%; height:80vh; padding: 15px 0; overflow-x: hidden;" id="phone-body">
            <div class="container-fluidcontainer-on-phone h-100">
                <div class="row h-lg-60">
                    <div id="system-header" class="h-lg-100 w-lg-60 w-xs-100 home-content">
                        <div class="content-body">
                            <div class="w-lg-100 w-xs-100 text-left" @click="Toggle(system)">
                                <span class="workTitle">
                                    <img class="mr-2" width="20" src="@/assets/home/img/system-status.png" />系統狀態
                                </span>
                                <span class="workTitle hide-on-phone" style="float: right; margin-right: 15px;">
                                    <img class="mr-2" width="20" src="@/assets/home/img/Idle.png" />Idle
                                </span>
                                <span class="workTitle hide-on-phone" style="float: right;">
                                    <img class="mr-2" width="20" src="@/assets/home/img/Error.png" />Error
                                </span>
                                <span class="workTitle hide-on-phone" style="float: right;">
                                    <img class="mr-2" width="20" src="@/assets/home/img/Run.png" />Run
                                </span>
                            </div>
                            <div class="h-lg-90" id="system" v-show="system.flag">
                                <div class="w-lg-100 w-xs-100">
                                    <hr />
                                </div>
                                <div class="h-lg-100 w-lg-50 w-xs-100" style="padding-top: 20px">
                                    <div class="w-lg-50 w-xs-100 system-status">
                                        <div class="system-title" style="float: left;">
                                            <span>CNC</span>
                                            <br />
                                            <span>NXV1020A</span>
                                        </div>
                                        <img class="hide-on-phone" style="margin-top: 10px; margin-right: 70px;" width="30" src="@/assets/home/img/Error.png" />
                                        <span class="hide-on-computer status-phone" style="float: right;">
                                            <img class="mr-2" width="20" src="@/assets/home/img/Error.png" />Error
                                        </span>
                                    </div>
                                    <div class="h-lg-100 w-lg-100 w-xs-100">
                                        <img class="h-xl-100 h-lg-80 image-bg" src="@/assets/home/img/BG.png" />
                                    </div>
                                </div>
                                <div class="h-lg-100 w-lg-50 w-xs-100" style="padding-top: 20px">
                                    <div class="w-lg-50 w-xs-100 system-status">
                                        <div class="system-title" style="float: left;">
                                            <span>CNC</span>
                                            <br />
                                            <span>NXV600A</span>
                                        </div>
                                        <img class="hide-on-phone" style="margin-top: 10px; margin-right: 70px;" width="30" src="@/assets/home/img/Run.png" />
                                        <span class="hide-on-computer status-phone" style="float: right;">
                                            <img class="mr-2" width="20" src="@/assets/home/img/Run.png" />Run
                                        </span>
                                    </div>
                                    <div class="h-lg-100 w-lg-100 w-xs-100">
                                        <img class="h-xl-100 h-lg-80 image-bg" src="@/assets/home/img/BG.png" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="orderTable-header" class="h-lg-100 w-lg-40 w-xs-100 home-content">
                        <div class="content-body">
                            <div class="w-lg-100 w-xs-100 text-left" @click="Toggle(orderTable)">
                                <span class="workTitle">
                                    <img class="mr-2" width="20" src="@/assets/home/img/icon_black.png" />訂單資訊
                                </span>
                            </div>
                            <div class="h-lg-90" v-show="orderTable.flag" id="orderTable">
                                <div class="w-lg-100 w-xs-100">
                                    <hr />
                                </div>
                                <div class="h-lg-90 w-lg-100 hide-on-phone">
                                    <div class="table-header">
                                        <div class="row">
                                            <div class="col-lg-2">訂單日期</div>
                                            <div class="col-lg-2">訂單編號</div>
                                            <div class="col-lg-2">案號</div>
                                            <div class="col-lg-2">交期</div>
                                            <div class="col-lg-2">完成日期</div>
                                            <div class="col-lg-2">交貨</div>
                                        </div>
                                    </div>
                                    <div class="h-lg-90 table-value">
                                        <div class="row" v-for="(data, index) in orderTable.data" v-bind:key="index">
                                            <div class="col-lg-2">{{data.orderDate}}</div>
                                            <div class="col-lg-2">{{data.orderNumber}}</div>
                                            <div class="col-lg-2">{{data.caseNumber}}</div>
                                            <div class="col-lg-2">{{data.deliveryDate}}</div>
                                            <div class="col-lg-2">{{data.completeDate}}</div>
                                            <div class="col-lg-2" style="padding-top: 5px;">
                                                <input type="checkbox" v-model="data.deliveryFlag" :id="'order_' + index" />
                                                <label :for="'order_' + index">
                                                    <span></span>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="w-xs-100 hide-on-computer phone-table">
                                    <div class="table-header">
                                        <div class="row">
                                            <div class="w-xs-20">訂單日期</div>
                                            <div class="w-xs-25">訂單編號</div>
                                            <div class="w-xs-15">案號</div>
                                            <div class="w-xs-20">交期</div>
                                            <div class="w-xs-20">完成日期</div>
                                        </div>
                                    </div>
                                    <div class="table-value">
                                        <div v-for="(data, index) in sortNumbers" v-bind:key="index" :class="data.deliveryFlag? 'row finished':'row unfinished'">
                                            <div class="w-xs-20">{{data.orderDate}}</div>
                                            <div class="w-xs-25">{{data.orderNumber}}</div>
                                            <div class="w-xs-15">{{data.caseNumber}}</div>
                                            <div class="w-xs-20">{{data.deliveryDate}}</div>
                                            <div class="w-xs-20">{{data.completeDate}}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row h-lg-40">
                    <div id="nowPowerChart-header" class="h-lg-100 w-lg-20 w-xs-100 home-content">
                        <div class="content-body">
                            <div class="w-lg-100 w-xs-100 text-left" @click="Toggle(nowPowerChart)">
                                <span class="workTitle">
                                    <img class="mr-2" width="20" src="@/assets/home/img/instant-power-consumption.png" />系統即時用電量
                                </span>
                            </div>
                            <div class="w-lg-90" v-show="nowPowerChart.flag" id="nowPowerChart">
                                <div class="w-lg-100 w-xs-100">
                                    <hr />
                                </div>
                                <div class="h-lg-90 w-lg-100 w-xs-100">
                                    <gauge :data="nowPowerChart.data"></gauge>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="totalPower-header" class="h-lg-100 w-lg-20 w-xs-100 home-content">
                        <div class="content-body">
                            <div class="w-lg-100 w-xs-100 text-left" @click="Toggle(totalPower)">
                                <span class="workTitle">
                                    <img class="mr-2" width="20" src="@/assets/home/img/system-status.png" />本月累計用電量
                                </span>
                            </div>
                            <div class="h-lg-90" id="totalPower" v-show="totalPower.flag">
                                <div class="w-lg-100 w-xs-100">
                                    <hr />
                                </div>
                                <div class="h-lg-90 w-lg-100 w-xs-100">
                                    <div class="row totalPower-data" style="border: 0;">
                                        <div class="col-lg-4 col-4 totalPower-field">
                                            <span>每週用電</span>
                                        </div>
                                        <div class="col-lg-8 col-8">
                                            <div class="progress-container">
                                                <div class="progress-bar-blue" style="width: 40%">
                                                    <span>1.2kWh</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row totalPower-data">
                                        <div class="col-lg-4 col-4 totalPower-field">
                                            <span>本月用電</span>
                                        </div>
                                        <div class="col-lg-8 col-8">
                                            <div class="progress-container">
                                                <div class="progress-bar-green" style="width: 50%">
                                                    <span>1.5kWh</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row totalPower-data">
                                        <div class="col-lg-4 col-4 totalPower-field">
                                            <span>本季用電</span>
                                        </div>
                                        <div class="col-lg-8 col-8">
                                            <div class="progress-container">
                                                <div class="progress-bar-blue-green" style="width: 70%">
                                                    <span>1.9kWh</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row totalPower-data">
                                        <div class="col-lg-4 col-4 totalPower-field">
                                            <span>累積用電</span>
                                        </div>
                                        <div class="col-lg-8 col-8">
                                            <div class="progress-container">
                                                <div class="progress-bar-light-blue" style="width: 80%">
                                                    <span>2.2kWh</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="blockMW-header" class="h-lg-100 w-lg-20 w-xs-100 home-content">
                        <div class="content-body">
                            <div class="w-lg-100 w-xs-100 text-left" @click="Toggle(blockMW)">
                                <span class="workTitle">
                                    <img class="mr-2" width="20" src="@/assets/home/img/tools.png" />加工元件
                                </span>
                            </div>
                            <div class="h-lg-90" id="blockMW" v-show="blockMW.flag">
                                <div class="w-lg-100 w-xs-100">
                                    <hr />
                                </div>
                                <div class="h-lg-90 w-lg-100 w-xs-100">
                                    <div class="cellContent">
                                        <div id="collapseMW" class="collapse show">
                                            <div class="blockMW">
                                                <div class="blockMW__title">
                                                    <div class="BG-color_blue">NXV 1020 A</div>
                                                </div>
                                                <div class="blockMW__content color_blue">
                                                    <div>WDR604-A01-P001-1</div>
                                                </div>
                                            </div>
                                            <div class="blockMW">
                                                <div class="blockMW__title">
                                                    <div class="BG-color_green">NXV 600 A</div>
                                                </div>
                                                <div class="blockMW__content color_green">
                                                    <div>WDR604-A01-P001-2</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="machineUtilizationRate-header" class="h-lg-100 w-lg-20 w-xs-100 home-content">
                        <div class="content-body">
                            <div class="w-lg-100 w-xs-100 text-left" @click="Toggle(machineUtilizationRate)">
                                <span class="workTitle">
                                    <img class="mr-2" width="20" src="@/assets/home/img/iconAchievedToday.png" />機台嫁動率
                                </span>
                            </div>
                            <div class="h-lg-90" id="machineUtilizationRate" v-show="machineUtilizationRate.flag">
                                <div class="w-lg-100 w-xs-100">
                                    <hr />
                                </div>
                                <div class="h-lg-90 w-lg-100 w-xs-100">
                                    <div class="h-lg-100 machine-content">
                                        <circleAnalysis :data="machineUtilizationRate.data" :bus="bus"></circleAnalysis>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="resultAnalysis-header" class="h-lg-100 w-lg-20 w-xs-100 home-content">
                        <div class="content-body">
                            <div class="w-lg-100 w-xs-100 text-left" @click="Toggle(resultAnalysis)">
                                <span class="workTitle">
                                    <img class="mr-2" width="20" src="@/assets/home/img/output-status.png" />本月產出狀況
                                </span>
                            </div>
                            <div class="h-lg-90" id="resultAnalysis" v-show="resultAnalysis.flag">
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
                                    <div id="resultAnalysis-content" class="resultAnalysis-chart"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer style="z-index:100;" :scrollToTag="scrollToTag" :system="system" :orderTable="orderTable" :nowPowerChart="nowPowerChart" :totalPower="totalPower" :blockMW="blockMW"
            :machineUtilizationRate="machineUtilizationRate" :resultAnalysis="resultAnalysis"></Footer>
    </div>
</template>

<script>
import Vue from 'vue'
import gauge from './gauge/gauge.vue'
import circleAnalysis from './circleAnalysis/circleAnalysis.vue'

export default {
    name: "home",
    components: { gauge, circleAnalysis },
    data() {
        return {
            bus: new Vue(),
            system: {
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
                flag: true
            },
            blockMW: {
                name: "blockMW-header",
                flag: true
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
                flag: true
            }
        }
    },
    created() {
        document.addEventListener("resize", this.windowSizeChange);
    },
    destroyed() {
        document.removeEventListener("resize", this.windowSizeChange);
    },
    mounted() {
        import("./js/resultAnalysis.js");

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
            this.bus.$emit('drawBase')
            // this.$set(this.machineUtilizationRate, 'data', machineUtilizationRateData);
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
    },
    computed: {
        sortNumbers: function () {
            let buffer = this.orderTable.data.slice();
            return buffer.sort(function (x, y) {
                return y.deliveryFlag - x.deliveryFlag;
            });
        }
    }
};
</script>
<style lang="css">
@import url("./css/home.css");
@import url("../../assets/css/frameworkV2.css");
@import url("../../assets/css/icon.css");
</style>