<template>
    <div class="toolana">
        <div class="main">
        <div class="container-fluid" style="overflow-y: hidden;">
            <div class="row option text-center">
                <div class="col-md-2"></div>
                <span class="col-md-2 col-12">加工時間選擇</span>
                <div class="col-md-2 col-12">
                    <input type="datetime-local" id='dt1' APformat="onlyHour">
                </div>
                <span class="col-md-1 col-12" style="font-size: 30px;">~</span>
                <div class="col-md-2 col-12">
                    <input type="datetime-local" id='dt2' APformat="onlyHour">
                </div>
            </div>
            <div class="row">
                <div class="col-lg-8 col-12 content">

                    <!-- 左上圖 -->
                    <div onclick="Toggle('Analyze')">
                        <span class="pl-3 font-weight-bold"><img class="mr-2" width="20" src="./img/analysis.png">機台分析</span>
                    </div>
                    <div class="collapse show" id="Analyze">
                        <hr class="bg-dark">
                        <div class="row">
                            <!-- 平均故障間隔時間 -->
                            <div class="col-md-4 col-12">
                                <div class="pb-2" style="padding-left: 10%;">
                                    <span class="font-weight-bold"><img src='./img/icon_checkmark.png' height="20"
                                            width="20">平均故障間隔時間</span>
                                </div>
                                <div class="text-center">
                                    <canvas id="failureTime"></canvas>
                                </div>
                            </div>
                            <!-- 機台嫁動率 -->
                            <div class="col-md-4 col-12">
                                <div class="pb-2" style="padding-left: 10%;">
                                    <span class="font-weight-bold"><img src='./img/icon_checkmark.png' height="20"
                                            width="20">機台嫁動率</span>
                                </div>
                                <div class="text-center">
                                    <canvas id="updateRate"></canvas>
                                </div>
                            </div>
                            <!-- 產能 -->
                            <div class="col-md-4 col-12">
                                <div class="pb-2" style="padding-left: 10%;">
                                    <span class="font-weight-bold"><img src='./img/icon_checkmark.png' height="20"
                                            width="20">產能</span>
                                </div>
                                <div class="text-center">
                                    <canvas id="productionCapacity"></canvas>
                                </div>
                            </div>
                        </div>
                        <br>

                        <!-- 左下圖 -->
                        <div class="row">
                            <div class="col-md-4 col-12">
                                <div class="pb-2" style="padding-left: 10%;">
                                    <span class="font-weight-bold"><img src='./img/icon_chart.png' height="20"
                                            width="20">刀具壽命分析</span>
                                </div>
                            </div>
                            <div class="col-md-12 col-12">
							
							<hr class="bg-dark">
                                <div id="table1-container">
                                    <table class="table1" id="machineLife">
                                        <tr class="hideTitle">
                                            <th width="100px"></th>
                                            <th width="80px"></th>
                                            <th width="80px"></th>
                                            <th width="80px"></th>
                                            <th width="80px"></th>
                                            <th width="80px"></th>
                                            <th width="80px"></th>
                                            <th width="80px"></th>
                                            <th width="80px"></th>
                                        </tr>
                                        <tr>
                                            <th>加工機台</th>
                                            <th style="cursor: pointer; width: 100px;" id="col1">◄DSA001</th>
                                            <th style="cursor: pointer;" id="col2"> DSA002</th>
                                            <th id="col3"> DSA003</th>
                                            <th id="col4"> DSA004</th>
                                            <th id="col5"> DSA005</th>
                                            <th id="col6"> DSA006</th>
                                            <th id="col7"> DSA007</th>
                                            <th id="col8"> DSA008</th>
                                            <th style="cursor: pointer;" id="col9"> DSA009</th>
                                            <th style="cursor: pointer;" id="col10"> DSA010</th>
                                        </tr>
                                        <tr>
                                            <td class="col1">NXV1020A</td>
                                            <td>16</td>
                                            <td>26</td>
                                            <td>36</td>
                                            <td>46</td>
                                            <td>56</td>
                                            <td>66</td>
                                            <td>76</td>
                                            <td>86</td>
                                            <td>97</td>
                                            <td>106</td>
                                        </tr>
                                        <tr>
                                            <td class="col1">NXV600A</td>
                                            <td>130</td>
                                            <td>230</td>
                                            <td>330</td>
                                            <td>430</td>
                                            <td>530</td>
                                            <td>630</td>
                                            <td>730</td>
                                            <td>830</td>
                                            <td>931</td>
                                            <td>110</td>
                                        </tr>
                                    </table>
                                </div>
                                <span style="float:right; height: 5vh; font-size:12px; color:#6977a4; padding-right: 40px;">單位:
                                    刀具使用量</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-12 content">

                    <div onclick="Toggle('Compare')">
                        <span class="pl-3 font-weight-bold"><img class="mr-2" width="20" src="./img/compare.png">故障比較</span>
                    </div>
                    <div class="collapse show" id="Compare">
                        <hr class="bg-dark">

                        <!-- 右上圖 -->
                        <div class="ringchart">
                            <div class="piechartDiv">
                                <div id="container-speed"></div>
                            </div>
                        </div>

                        <!-- 右下圖 -->
                        <div class="comparetable">
                            <div id="table2-container">
                                <table class="table2">
                                    <tr>
                                        <th>機台代號</th>
                                        <th>故障次數</th>
                                        <th>時間</th>
                                    </tr>
                                    <tr>
                                        <td>NXV1020A</td>
                                        <td>10</td>
                                        <td>25h 10m 15s</td>
                                    </tr>
                                    <tr class="rowblue">
                                        <td>NXV600A</td>
                                        <td>15</td>
                                        <td>30h 10m 22s</td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- 側邊欄 -->
    <div id="hide">
        <router-link to="toolana"><img src="./img/sideicon1.png" height="30" width="30"></router-link>  
        <router-link to="toolana"><img src="./img/sideicon2.png" height="30" width="30"></router-link>
        <router-link to="toolana"><img src="./img/sideicon3.png" height="30" width="30"></router-link>  
        <router-link to="manufacture"><img src="./img/sideicon4.png" height="30" width="30"></router-link>  
        <!-- <img src="./img/sideicon1.png" height="30" width="30"
            onclick="javascript:location.href='../failure_analysis/UI-CNXx4.html'">
        <img src="./img/sideicon2.png" height="30" width="30"
            onclick="javascript:location.href='../failure_analysis/UI-CNXx4.html'">
        <img src="./img/sideicon3.png" height="30" width="30" onclick="javascript:location.href='../機台分析/index.html'">
        <img src="./img/sideicon4.png" height="30" width="30" onclick="javascript:location.href='../報價管理系統/index.html'"> -->
    </div>
    <div id="menu1" class="hidden-menu" onclick="javascript:location.href='../power_analysis/UI-CNXx4.html'"><i
            class="material-icons">radio_button_checked</i><span>能源分析</span></div>
    <div id="menu2" class="hidden-menu" onclick="javascript:location.href='../failure_analysis/UI-CNXx4.html'"><i
            class="material-icons">radio_button_checked</i>故障統計</div>
    <div id="menu3" class="hidden-menu" onclick="javascript:location.href='../機台分析/index.html'"><i
            class="material-icons">radio_button_checked</i>機台比較</div>
    <div id="menu4" class="hidden-menu" onclick="javascript:location.href='../報價管理系統/index.html'"><i
            class="material-icons">radio_button_checked</i>產能數據分析</div>
    </div>
</template>
<script>
import $ from 'jquery'
// import './js/PieChartEP'
// import './js/failureTime'
// import './js/hideaside'
// import './js/machineLife'
// import './js/productionCapacity'
// import './js/updateRate'
// import './js/airdatepicker/airpicker'
function Toggle(toggleID) {
    if (window.innerWidth < 576) {
        $("#" + toggleID).collapse('toggle');
    }
}
$(document).ready(function () {
    if (window.innerWidth < 576) {
        $("#Compare").collapse('hide');
    }
});
export default {
    
}
</script>
<style>
@import "style/index.css"; 
@import "style/airdatepicker/datepicker.min.css";  
@import "style/airdatepicker/megeAirpicker.css";   
@import "../assets/css/icon.css"; 
.toolana{
  position: relative;
  height:75%;
  overflow-y: scroll;
}    
</style>