<template>
    <div class="SystemHome">
        <div style="width:100%; padding: 15px 0; overflow-x: hidden;">
            <div class="container-fluidcontainer-on-phone">
                <div class="row">
                    <div class="w-xl-60 w-xs-100 content">
                        <div class="content-body">
                            <div class="w-xl-100 w-xs-100 text-left" onclick="Toggle('system')">
                                <span class="workTitle"><img class="mr-2" width="20" src="./img/system-status.png">系統狀態</span>
                                <span class="workTitle hide-on-phone" style="float: right; margin-right: 15px;"><img class="mr-2" width="20"
                                        src="./img/Idle.png">Idle</span>
                                <span class="workTitle hide-on-phone" style="float: right;"><img class="mr-2" width="20"
                                        src="./img/Error.png">Error</span>
                                <span class="workTitle hide-on-phone" style="float: right;"><img class="mr-2" width="20"
                                        src="./img/Run.png">Run</span>
                            </div>
                            <div class="collapse show" id="system">
                                <div class="w-xl-100 w-xs-100">
                                    <hr>
                                </div>
                                <div class="w-xl-50 w-xs-100">
                                    <div class="w-xl-50 w-xs-100 system-status">
                                        <div class="system-title" style="float: left;">
                                            <span >CNC</span>
                                            <br>
                                            <span >NXV1020A</span>
                                        </div>
                                        <img class="hide-on-phone" style="margin-top: 10px; margin-right: 70px;" width="30" src="./img/Error.png" />
                                        <span class="hide-on-computer" style="float: right;"><img class="mr-2" width="20"
                                                src="./img/Error.png">Error</span>
                                    </div>
                                    <div class="w-xl-100 w-xs-100">
                                        <img style="width: 80%;" src="./img/BG.png" />
                                    </div>
                                </div>
                                <div class="w-xl-50 w-xs-100">
                                    <div class="w-xl-50 w-xs-100 system-status">
                                        <div class="system-title" style="float: left;">
                                            <span>CNC</span>
                                            <br>
                                            <span>NXV600A</span>
                                        </div>
                                        <img class="hide-on-phone" style="margin-top: 10px; margin-right: 70px;" width="30" src="./img/Run.png" />
                                        <span class="hide-on-computer" style="float: right;"><img class="mr-2" width="20"
                                                src="./img/Run.png">Run</span>
                                    </div>
                                    <div class="w-xl-100 w-xs-100">
                                        <img style="width: 80%;" src="./img/BG.png" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="w-xl-40 w-xs-100 content">
                        <div class="content-body">
                            <div class="w-xl-100 w-xs-100 text-left" onclick="Toggle('orderTable')">
                                <span class="workTitle"><img class="mr-2" width="20" src="./img/icon_black.png">訂單資訊</span>
                            </div>
                            <div class="collapse show" id="orderTable">
                                <div class="w-xl-100 w-xs-100">
                                    <hr>
                                </div>
                                <div class="w-xl-100 hide-on-phone">
                                    <div class="row table-header">
                                        <div class="col-xl-2"> 訂單日期 </div>
                                        <div class="col-xl-2"> 訂單編號 </div>
                                        <div class="col-xl-2"> 案號 </div>
                                        <div class="col-xl-2"> 交期 </div>
                                        <div class="col-xl-2"> 完成日期 </div>
                                        <div class="col-xl-2"> 交貨 </div>
                                    </div>
                                    <div class="table-value">
                                        <div class="row">
                                            <div class="col-xl-2"> 2019/06/30 </div>
                                            <div class="col-xl-2"> 10808260001 </div>
                                            <div class="col-xl-2"> WDR603 </div>
                                            <div class="col-xl-2"> 2019/06/30 </div>
                                            <div class="col-xl-2"> 2019/06/30 </div>
                                            <div class="col-xl-2" style="padding-top: 5px;">
                                                <input type="checkbox" id="c1" />
                                                <label for="c1"><span></span></label>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-xl-2"> 2019/06/30 </div>
                                            <div class="col-xl-2"> 10808260001 </div>
                                            <div class="col-xl-2"> WDR603 </div>
                                            <div class="col-xl-2"> 2019/06/30 </div>
                                            <div class="col-xl-2"> 2019/06/30 </div>
                                            <div class="col-xl-2" style="padding-top: 5px;">
                                                <input type="checkbox" id="c2" />
                                                <label for="c2"><span></span></label>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-xl-2"> 2019/06/30 </div>
                                            <div class="col-xl-2"> 10808260001 </div>
                                            <div class="col-xl-2"> WDR603 </div>
                                            <div class="col-xl-2"> 2019/06/30 </div>
                                            <div class="col-xl-2"> 2019/06/30 </div>
                                            <div class="col-xl-2" style="padding-top: 5px;">
                                                <input type="checkbox" id="c3" />
                                                <label for="c3"><span></span></label>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-xl-2"> 2019/06/30 </div>
                                            <div class="col-xl-2"> 10808260001 </div>
                                            <div class="col-xl-2"> WDR603 </div>
                                            <div class="col-xl-2"> 2019/06/30 </div>
                                            <div class="col-xl-2"> 2019/06/30 </div>
                                            <div class="col-xl-2" style="padding-top: 5px;">
                                                <input type="checkbox" id="c4" />
                                                <label for="c4"><span></span></label>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-xl-2"> 2019/06/30 </div>
                                            <div class="col-xl-2"> 10808260001 </div>
                                            <div class="col-xl-2"> WDR603 </div>
                                            <div class="col-xl-2"> 2019/06/30 </div>
                                            <div class="col-xl-2"> 2019/06/30 </div>
                                            <div class="col-xl-2" style="padding-top: 5px;"> <input type="checkbox"
                                                    id="c5" />
                                                <label for="c5"><span></span></label>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-xl-2"> 2019/06/30 </div>
                                            <div class="col-xl-2"> 10808260001 </div>
                                            <div class="col-xl-2"> WDR603 </div>
                                            <div class="col-xl-2"> 2019/06/30 </div>
                                            <div class="col-xl-2"> 2019/06/30 </div>
                                            <div class="col-xl-2" style="padding-top: 5px;">
                                                <input type="checkbox" id="c6" />
                                                <label for="c6"><span></span></label>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-xl-2"> 2019/06/30 </div>
                                            <div class="col-xl-2"> 10808260001 </div>
                                            <div class="col-xl-2"> WDR603 </div>
                                            <div class="col-xl-2"> 2019/06/30 </div>
                                            <div class="col-xl-2"> 2019/06/30 </div>
                                            <div class="col-xl-2" style="padding-top: 5px;">
                                                <input type="checkbox" id="c7" />
                                                <label for="c7"><span></span></label>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-xl-2"> 2019/06/30 </div>
                                            <div class="col-xl-2"> 10808260001 </div>
                                            <div class="col-xl-2"> WDR603 </div>
                                            <div class="col-xl-2"> 2019/06/30 </div>
                                            <div class="col-xl-2"> 2019/06/30 </div>
                                            <div class="col-xl-2" style="padding-top: 5px;">
                                                <input type="checkbox" id="c8" />
                                                <label for="c8"><span></span></label>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-xl-2"> 2019/06/30 </div>
                                            <div class="col-xl-2"> 10808260001 </div>
                                            <div class="col-xl-2"> WDR603 </div>
                                            <div class="col-xl-2"> 2019/06/30 </div>
                                            <div class="col-xl-2"> 2019/06/30 </div>
                                            <div class="col-xl-2" style="padding-top: 5px;">
                                                <input type="checkbox" id="c9" />
                                                <label for="c9"><span></span></label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="w-xs-100 hide-on-computer phone-table">
                                    <div class="row table-header">
                                        <div class="w-xs-20"> 訂單日期 </div>
                                        <div class="w-xs-25"> 訂單編號 </div>
                                        <div class="w-xs-15"> 案號 </div>
                                        <div class="w-xs-20"> 交期 </div>
                                        <div class="w-xs-20"> 完成日期 </div>
                                    </div>
                                    <div class="table-value finished">
                                        <div class="row">
                                            <div class="w-xs-20"> 2019/06/30 </div>
                                            <div class="w-xs-25"> 10808260001 </div>
                                            <div class="w-xs-15"> WDR603 </div>
                                            <div class="w-xs-20"> 2019/06/30 </div>
                                            <div class="w-xs-20"> 2019/06/30 </div>
                                        </div>
                                        <div class="row">
                                            <div class="w-xs-20"> 2019/06/30 </div>
                                            <div class="w-xs-25"> 10808260001 </div>
                                            <div class="w-xs-15"> WDR603 </div>
                                            <div class="w-xs-20"> 2019/06/30 </div>
                                            <div class="w-xs-20"> 2019/06/30 </div>
                                        </div>
                                        <div class="row">
                                            <div class="w-xs-20"> 2019/06/30 </div>
                                            <div class="w-xs-25"> 10808260001 </div>
                                            <div class="w-xs-15"> WDR603 </div>
                                            <div class="w-xs-20"> 2019/06/30 </div>
                                            <div class="w-xs-20"> 2019/06/30 </div>
                                        </div>
                                        <div class="row">
                                            <div class="w-xs-20"> 2019/06/30 </div>
                                            <div class="w-xs-25"> 10808260001 </div>
                                            <div class="w-xs-15"> WDR603 </div>
                                            <div class="w-xs-20"> 2019/06/30 </div>
                                            <div class="w-xs-20"> 2019/06/30 </div>
                                        </div>
                                        <div class="row">
                                            <div class="w-xs-20"> 2019/06/30 </div>
                                            <div class="w-xs-25"> 10808260001 </div>
                                            <div class="w-xs-15"> WDR603 </div>
                                            <div class="w-xs-20"> 2019/06/30 </div>
                                            <div class="w-xs-20"> 2019/06/30 </div>
                                        </div>
                                    </div>
                                    <div class="table-value unfinished">
                                        <div class="row">
                                            <div class="w-xs-20"> 2019/06/30 </div>
                                            <div class="w-xs-25"> 10808260001 </div>
                                            <div class="w-xs-15"> WDR603 </div>
                                            <div class="w-xs-20"> 2019/06/30 </div>
                                            <div class="w-xs-20"> 2019/06/30 </div>
                                        </div>
                                        <div class="row">
                                            <div class="w-xs-20"> 2019/06/30 </div>
                                            <div class="w-xs-25"> 10808260001 </div>
                                            <div class="w-xs-15"> WDR603 </div>
                                            <div class="w-xs-20"> 2019/06/30 </div>
                                            <div class="w-xs-20"> 2019/06/30 </div>
                                        </div>
                                        <div class="row">
                                            <div class="w-xs-20"> 2019/06/30 </div>
                                            <div class="w-xs-25"> 10808260001 </div>
                                            <div class="w-xs-15"> WDR603 </div>
                                            <div class="w-xs-20"> 2019/06/30 </div>
                                            <div class="w-xs-20"> 2019/06/30 </div>
                                        </div>
                                        <div class="row">
                                            <div class="w-xs-20"> 2019/06/30 </div>
                                            <div class="w-xs-25"> 10808260001 </div>
                                            <div class="w-xs-15"> WDR603 </div>
                                            <div class="w-xs-20"> 2019/06/30 </div>
                                            <div class="w-xs-20"> 2019/06/30 </div>
                                        </div>
                                        <div class="row">
                                            <div class="w-xs-20"> 2019/06/30 </div>
                                            <div class="w-xs-25"> 10808260001 </div>
                                            <div class="w-xs-15"> WDR603 </div>
                                            <div class="w-xs-20"> 2019/06/30 </div>
                                            <div class="w-xs-20"> 2019/06/30 </div>
                                        </div>
                                        <div class="row">
                                            <div class="w-xs-20"> 2019/06/30 </div>
                                            <div class="w-xs-25"> 10808260001 </div>
                                            <div class="w-xs-15"> WDR603 </div>
                                            <div class="w-xs-20"> 2019/06/30 </div>
                                            <div class="w-xs-20"> 2019/06/30 </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="w-xl-20 w-xs-100 content">
                        <div class="content-body">
                            <div class="w-xl-100 w-xs-100 text-left" onclick="Toggle('nowPowerChart')">
                                <span class="workTitle"><img class="mr-2" width="20"
                                        src="./img/instant-power-consumption.png">系統即時用電量</span>
                            </div>
                            <div class="collapse show" id="nowPowerChart">
                                <div class="w-xl-100 w-xs-100">
                                    <hr>
                                </div>
                                <div class="w-xl-100 w-xs-100">
                                    <div class="nowPower-panel">
                                        <!-- <div class="now-Power-content">
                                            <span id="nowPower-Value"></span>
                                            <div class="innerContent">
                                                <canvas id="nowPower">

                                                </canvas>
                                            </div>
                                            <span id="nowPower-min-Value">0</span>
                                            <span id="nowPower-max-Value">2500(W)</span>
                                        </div> -->
                                        <nowpower></nowpower>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="w-xl-20 w-xs-100 content">
                        <div class="content-body">
                            <div class="w-xl-100 w-xs-100 text-left" onclick="Toggle('totalPower')">
                                <span class="workTitle"><img class="mr-2" width="20"
                                        src="./img/system-status.png">本月累計用電量</span>
                            </div>
                            <div class="collapse show" id="totalPower">
                                <div class="w-xl-100 w-xs-100">
                                    <hr>
                                </div>
                                <div class="w-xl-100 w-xs-100">
                                    <div class="row totalPower-data" style="border: 0;">
                                        <div class="col-xl-4 col-4 totalPower-field">
                                            <span>每週用電</span>
                                        </div>
                                        <div class="col-xl-8 col-8">
                                            <div class="progress">
                                                <div class="progress-bar-blue" style="width: 40%"><span>1.2kWh</span></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row totalPower-data">
                                        <div class="col-xl-4 col-4 totalPower-field">
                                            <span>本月用電</span>
                                        </div>
                                        <div class="col-xl-8 col-8">
                                            <div class="progress">
                                                <div class="progress-bar-green" style="width: 50%"><span>1.5kWh</span></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row totalPower-data">
                                        <div class="col-xl-4 col-4 totalPower-field">
                                            <span>本季用電</span>
                                        </div>
                                        <div class="col-xl-8 col-8">
                                            <div class="progress">
                                                <div class="progress-bar-blue-green" style="width: 70%"><span>1.9kWh</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row totalPower-data">
                                        <div class="col-xl-4 col-4 totalPower-field">
                                            <span>累積用電</span>
                                        </div>
                                        <div class="col-xl-8 col-8">
                                            <div class="progress">
                                                <div class="progress-bar-light-blue" style="width: 80%"><span>2.2kWh</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="w-xl-20 w-xs-100 content">
                        <div class="content-body">
                            <div class="w-xl-100 w-xs-100 text-left" onclick="Toggle('blockMW')">
                                <span class="workTitle"><img class="mr-2" width="20" src="./img/tools.png">加工元件</span>
                            </div>
                            <div class="collapse show" id="blockMW">
                                <div class="w-xl-100 w-xs-100">
                                    <hr>
                                </div>
                                <div class="w-xl-100 w-xs-100">
                                    <div class="cellContent">
                                        <div id="collapseMW" class="collapse show">
                                            <div class="blockMW mb-4">
                                                <div class="blockMW__title ">
                                                    <div class="BG-color_blue">NXV 1020 A</div>
                                                </div>
                                                <div class="blockMW__content color_blue">
                                                    <div>WDR604-A01-P001-1</div>
                                                </div>
                                            </div>
                                            <div class="blockMW">
                                                <div class="blockMW__title ">
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
                    <div class="w-xl-20 w-xs-100 content">
                        <div class="content-body">
                            <div class="w-xl-100 w-xs-100 text-left" onclick="Toggle('machineUtilizationRate')">
                                <span class="workTitle"><img class="mr-2" width="20"
                                        src="./img/iconAchievedToday.png">機台嫁動率</span>
                            </div>
                            <div class="collapse show" id="machineUtilizationRate">
                                <div class="w-xl-100 w-xs-100">
                                    <hr>
                                </div>
                                <div class="w-xl-100 w-xs-100">
                                    <!-- <div class="machine-content">
                                        <canvas id="myCanvas"></canvas>
                                    </div> -->
                                    <circleAnalysis></circleAnalysis>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="w-xl-20 w-xs-100 content">
                        <div class="content-body">
                            <div class="w-xl-100 w-xs-100 text-left" onclick="Toggle('resultAnalysis')">
                                <span class="workTitle"><img class="mr-2" width="20"
                                        src="./img/output-status.png">本月產出狀況</span>
                            </div>
                            <div class="collapse show" id="resultAnalysis">
                                <div class="w-xl-100 w-xs-100">
                                    <hr>
                                </div>
                                <div class="w-xl-100 w-xs-100">
                                    <!-- <div class="resultAnalysis-item">
                                        <div class="resultAnalysis-items">
                                            <div class="resultAnalysis-name"></div>
                                            <hr>
                                            <div class="resultAnalysis-number"></div>
                                        </div>
                                        <div class="resultAnalysis-items">
                                            <div class="resultAnalysis-name"></div>
                                            <hr>
                                            <div class="resultAnalysis-number"></div>
                                        </div>
                                    </div>
                                    <div id="resultAnalysis-content" class="resultAnalysis-chart">

                                    </div> -->
                                    <resultAnalysis></resultAnalysis>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import $ from 'jquery'
import Highcharts from 'highcharts';
import nowpower from './nowpower.vue'
import resultAnalysis from './resultAnalysis'
import circleAnalysis from './circleAnalysis'

export default {
    components:{
        nowpower,
        resultAnalysis,
        circleAnalysis
    },
    methods: {
    
         Toggle: function(toggleID) {
            if (window.innerWidth < 576) {
                $("#" + toggleID).collapse('toggle');
            }
        
            window.onload = function () {
                if (window.innerWidth < 576) {
                    $("#orderTable").collapse('hide');
                    $("#nowPowerChart").collapse('hide');
                    $("#totalPower").collapse('hide');
                    $("#blockMW").collapse('hide');
                    $("#machineUtilizationRate").collapse('hide');
                    $("#resultAnalysis").collapse('hide');
                }
            };
        }     
    },
    mounted() {
        // function Toggle(toggleID) {
        //     if (window.innerWidth < 576) {
        //         $("#" + toggleID).collapse('toggle');
        //     }
        // }
        // window.onload = function () {
        //     if (window.innerWidth < 576) {
        //         $("#orderTable").collapse('hide');
        //         $("#nowPowerChart").collapse('hide');
        //         $("#totalPower").collapse('hide');
        //         $("#blockMW").collapse('hide');
        //         $("#machineUtilizationRate").collapse('hide');
        //         $("#resultAnalysis").collapse('hide');
        //     }
        // };
  },
}
</script>
<style scoped>
@import "../../assets/assets/css/all.css";
@import "../../assets/assets/css/app.css"; 
@import "../../assets/assets/css/frameworkV2.css";
@import "style/index.css";
@import "style/icon.css";
/* @import "style/bootstrap.min.css"; */
hr{
    margin-top: 0;
    margin-bottom: 0;
}     
.SystemHome{
    height:100%;
    
}
@media only screen and (max-width: 769px){
    .SystemHome{
        height:100%;
        overflow-y: scroll;
    }
}
</style>