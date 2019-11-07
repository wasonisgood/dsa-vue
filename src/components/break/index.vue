<template>
  <div class="malfunction">
 <!-- Button trigger modal -->
    <!-- Modal -->
    <div v-if="modal1" class="modal1" style="z-index:5 !important;overflow-x:hidden;overflow-y:hidden;">
        <div class="modal-dialog modal-xl" role="document">
            <div class="modal-content custom xs celephone" style="overflow-x:hidden;overflow-y:hidden;">
                <div class="modal-header head d-flex justify-content-end hidden_small" style="overflow-x:hidden;overflow-y:hidden;">
                    <button type="button" @click="modalAction1()" class="rounded-circle" aria-label="Close">
                        <div class="clo"><img src="./close.png"></div>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="container-fluid">
                        <!--手機-->
                                <img class="align-self-center hidden_big" src="@/assets/malfunctionPic/break-reason.png" width="20" height="20">
                                <strong class="ml-2 tit hidden_big">故障原因分析</strong>
                            <div class="row hidden_big">
                                <div>
                                    <div class="row reasoncir" v-for="item in errors" v-if="reason_idfind(item.id)===filter_id">
                                        <div class="col-5">
                                            <div class="leftto1">
                                                <span>發生機率</span>
                                                <pie-chart :data="chartData" :options="chartOptions"></pie-chart>
                                            </div>
                                        </div>
                                        <div class="col-1 mt-3">
                                            <div class="circle1"><span>1</span></div>
                                        </div>
                                        <div class="col-5 ">
                                            <div class="leftto1">
                                                <span>可能原因</span>
                                                <div id="Reasons1" class="reason">{{item.Pc1}}</div>
                                                <span>處理連結</span>
                                                <button id="btn1" :value="item.Pc1" type="button" class="btn btnblue" data-toggle="modal"
                                                        data-target="#modelId2" @click="getID"  data-dismiss="modal"><img width="20"
                                                            src="@/assets/malfunctionPic/icon-02.png">建議處理方式</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row reasoncir" v-for="item in errors" v-if="reason_idfind(item.id)===filter_id">
                                        <div class="col-5">
                                            <div class="leftto1">
                                                <span>發生機率</span>
                                                <pie-chart :data="chart" :options="chartOptions"></pie-chart>
                                            </div>
                                        </div>
                                        <div class="col-1 mt-3">
                                            <div class="circle1"><span>2</span></div>
                                        </div>
                                        <div class="col-5 ">
                                            <div class="leftto1">
                                                <span>可能原因</span>
                                                <div id="Reasons1" class="reason">{{item.Pc2}}</div>
                                                <span>處理連結</span>
                                                <button id="btn1" :value="item.Pc2" type="button" class="btn btnblue" data-toggle="modal"
                                                        data-target="#modelId2" @click="getID"  data-dismiss="modal"><img width="20"
                                                            src="@/assets/malfunctionPic/icon-02.png">建議處理方式</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row reasoncir" v-for="item in errors" v-if="reason_idfind(item.id)===filter_id">
                                        <div class="col-5">
                                            <div class="leftto1">
                                                <span>發生機率</span>
                                                <pie-chart :data="chartData" :options="chartOptions"></pie-chart>
                                            </div>
                                        </div>
                                        <div class="col-1 mt-3">
                                            <div class="circle1"><span>3</span></div>
                                        </div>
                                        <div class="col-5 ">
                                            <div class="leftto1">
                                                <span>可能原因</span>
                                                <div id="Reasons1" class="reason">{{item.Pc3}}</div>
                                                <span>處理連結</span>
                                                <button id="btn1" :value="item.Pc3" type="button" class="btn btnblue" data-toggle="modal"
                                                        data-target="#modelId2" @click="getID"  data-dismiss="modal"><img width="20"
                                                            src="@/assets/malfunctionPic/icon-02.png">建議處理方式</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        <!--電腦-->
                        <div class="row hidden_small onesize">
                                <div class="col-xl-4 col-12 twosize">
                                    <div class="mb-3">
                                        <img class="align-self-center" src="@/assets/malfunctionPic/icon-07.png" width="25" height="25">
                                        <strong class="ml-3 tibold">故障資訊</strong>
                                    </div>
                                    <hr style="width:100%;background-color:#8192b9;">
                                    <table class="table breakin">
                                        <thead>
                                            <tr>
                                                <th>項目</th>
                                                <th>內容</th>
                                            </tr>
                                        </thead>
                                        <tbody v-for="item in errors" v-if="reason_idfind(item.id)===filter_id">
                                            <tr>
                                                <td scope="row" class="bg-white">故障時間</td>
                                                <td class="breaktime bg-white">{{item.time}}</td>
                                            </tr>
                                            <tr>
                                                <td scope="row">故障碼</td>
                                                <td class="breakcode">{{item.code}}</td>
                                            </tr>
                                            <tr>
                                                <td scope="row" class="bg-white">處理狀態</td>
                                                <td class="breakstate bg-white">{{item.Ps}}</td>
                                            </tr>
                                            <tr>
                                                <td scope="row">狀況描述</td>
                                                <td class="breakdescript">{{item.Ed}}</td>
                                            </tr>

                                            </tbody>
                                    </table>
                                </div>
                                <!--電腦-->
                                <div class="col-xl-8">
                                    <div class="mb-3">
                                        <img class="align-self-center" src="@/assets/malfunctionPic/break-reason.png" width="25" height="25">
                                        <strong class="ml-3 mt-5 tibold">故障原因分析</strong>
                                    </div>
                                    <hr style="background-color:#8192b9;">
                                    <div class="divbor">
                                        <table class="table xsbro table-hover text-center h5 mayTable">
                                            <thead>
                                                <tr>
                                                    <th></th>
                                                    <th width="33%"><div class="xsth">可能原因</div></th>
                                                    <th><div class="xsth">發生機率</div></th>
                                                    <th width="30%"><div class="xsth">處理連結</div></th>
                                                </tr>
                                            </thead>

                                            <tbody v-for="item in errors" v-if="reason_idfind(item.id)===filter_id">
                                                <tr>
                                                    <td scope="row">
                                                        <div class="rounded-circle text-light liCircle" style="margin-left:0vh;"><span>1</span></div>
                                                    </td>
                                                    <td><div id="Reasons1">{{item.Pc1}}</div></td>
                                                    <td>
                                                        <strong><span class="numpa1">75<br>%</span></strong> 
                                                        <div class="piech"><pie-chart :data="chartData1" :options="chartOptions"></pie-chart></div>    
                                                    </td>
                                                    <td width="30%" >
                                                        <div :id="item.Pc1" :value="item.Pc1" class="btn bg1" @click="getID();modalAction2();modalAction1();"  data-dismiss="modal"><img width="20"
                                                                src="@/assets/malfunctionPic/icon-02.png" style=""><span class="ml-2" :id="item.Pc1">建議處理方式</span></div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td scope="row">
                                                        <div class="rounded-circle bg-dark text-light liCircle" style="margin-left:0vh;"><span>2</span></div>
                                                    </td>
                                                    <td id="Reason2">{{item.Pc2}}</td>
                                                    <td>
                                                        <strong><span class="numpa2">75<br>%</span></strong>
                                                        <div class="piech"><pie-chart :data="chartData2" :options="chartOptions"></pie-chart></div>
                                                    </td>
                                                    <td width="30%">
                                                        <div :id="item.Pc2" :value="item.Pc2" class="btn bg2"
                                                            @click="getID();modalAction2();modalAction1();"><img width="20"
                                                                src="@/assets/malfunctionPic/icon-02.png"><span class="ml-2" :id="item.Pc2">建議處理方式</span></div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td scope="row">
                                                        <div class="rounded-circle bg-dark text-light liCircle" style="margin-left:0vh;"><span>3</span></div>
                                                    </td>
                                                    <td id="Rt3">{{item.Pc3}}</td>
                                                    <td>
                                                        <strong><span class="numpa3">75<br>%</span></strong>
                                                        <div class="piech"><pie-chart :data="chartData3" :options="chartOptions"></pie-chart></div>
                                                    </td>
                                                    <td width="30%">
                                                        <div :id="item.Pc3" :value="item.Pc3" class="btn bg3" 
                                                            @click="getID();modalAction2();modalAction1();"  data-dismiss="modal"><img width="20"
                                                                src="@/assets/malfunctionPic/icon-02.png"><span class="ml-2" :id="item.Pc3">建議處理方式</span></div>
                                                    </td>
                                                </tr>

                                            </tbody>
                                        </table>
                                    </div>
                                </div>

                        </div>

                    </div>
                </div>

            </div>
        </div>
    </div>
    <!-- Modal -->
    <div v-if="modal2" tabindex="-1" class="modal1" style="z-index:2000 !important;" role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
        <div class="modal-dialog modal-xl" role="document">
            <div class="modal-content custom xs celephone">
                <div class="modal-header head d-flex justify-content-end hidden_small">
                    <button @click="modalAction2()"  type="button" class="rounded-circle" aria-label="Close">
                        <div class="clo"><img src="./close.png"></div>
                    </button>
                </div>
                <div class="modal-body modblue">
                    <div class="container-fluid">
                        <!--手機-->
                        <img class="align-self-center hidden_big" src="@/assets/malfunctionPic/break-reason.png" width="20" height="20">
                        <strong class="ml-2 tit hidden_big">建議處理方式</strong>
                        <div class="hidden_big">
                            <div class="card">   
                                <div class="row ml-3 rowsp">
                                    <div class="col-2 x1">
                                        <div class="circle2"><span>1</span></div>
                                    </div>
                                    <div class="col-10 mt-5 x1" v-for="qa in checkits" v-if="getid===qa.q">    
                                        <span class="spanqa">{{qa.a}}</span>
                                    </div>
                                </div>
                            </div>
                            <button id="btn2" type="button" class="btn btnblue"
                                          data-toggle="modal" data-target="#modelId1"  data-dismiss="modal">
                                        <span>返回原因</span></button>
                        </div>
                        <!--電腦-->
                        <div class="row hidden_small onesize">
                            <div class="col-xl-4 col-12">
                                <div class="mb-3">
                                    <img class="align-self-center" src="@/assets/malfunctionPic/icon-07.png" width="25" height="25">
                                    <strong class="ml-3 tibold">故障資訊</strong>
                                </div>
                                <hr style="width:100%;background-color:#8192b9;">
                                <table v-for="item in errors" v-if="reason_idfind(item.id)===filter_id" rules="all" class="table breakin">
                                    <thead>
                                        <tr>
                                            <th>項目</th>
                                            <th>內容</th>
                                        </tr>
                                    </thead>
                                     <tbody>
                                         <tr>
                                            <td scope="row" class="bg-white">故障時間</td>
                                            <td class="breaktime bg-white">{{item.time}}</td>
                                        </tr>
                                        <tr>
                                            <td scope="row">故障碼</td>
                                            <td class="breakcode">{{item.code}}</td>
                                        </tr>
                                        <tr>
                                            <td scope="row" class="bg-white">處理狀態</td>
                                            <td class="breakstate bg-white">{{item.Ps}}</td>
                                        </tr>
                                        <tr>
                                            <td scope="row">狀況描述</td>
                                            <td class="breakdescript">{{item.Ed}}</td>
                                        </tr>

                                        </tbody>
                                </table>
                            </div>
                            <div class="col-xl-8 col-12">
                                <div class="mb-3">
                                    <img class="align-self-center" src="@/assets/malfunctionPic/break-reason.png" width="25" height="25">
                                    <strong class="ml-3 mt-5 tibold">建議處理方式</strong>
                                    <div id="btn2" class="btn btnblue2 float-right"
                                          @click="modalAction2();modalAction1();">
                                        <img width="25" height="25" src="./goback.png"><span style="font-size:1rem;" class="ml-2">返回原因</span></div>
                                </div>
                                <hr style="background-color:#E2E3E4;">
                                <div style="width:38rem;margin-left:2vh;margin-top:2vh;border: 1px #aaaeb8 solid;background-color:#fff;">
                                <table class="table xsbro table-hover text-center r-table h5 SuggesTable">
                                    <thead>
                                        <tr>
                                            <th></th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        <tr>
                                            <td scope="row">
                                                <div class="rounded-circle bg-dark text-light liCircle"><span>1</span></div>
                                            </td>
                                            <td v-for="qa in checkits" v-if="getid===qa.q" id="handle1">
                                                {{qa.a}}
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    </div>
    <!-- Modal -->
    <div class="modal1" v-if="modal3" id="modelId3" tabindex="-1" role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
        <div class="modal-dialog modal-xl" role="document">
            <div class="modal-content xs custom celephone" style="overflow-x:hidden;overflow-y:hidden;">
                <div class="modal-header head d-flex justify-content-end hidden_small">
                    <button type="button" @click="modalAction3()" class="rounded-circle" data-dismiss="modal" aria-label="Close">
                        <div class="clo"><img src="./close.png"></div>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="container-fluid">
                        <!--手機-->
                        <img class="align-self-center hidden_big" src="@/assets/malfunctionPic/break-reason.png" width="20" height="20">
                        <strong class="ml-2 tit hidden_big">故障報告</strong>
                            <div class="report-result hidden_big">
                                <button type="button" class="btn btn-outline-light" data-toggle="modal"
                                                    data-target="#modelId5">
                                                    <img width="30" src="@/assets/malfunctionPic/report.png">
                                                </button>
                                <strong><span>故障原因描述</span></strong>
                                <div class="row" v-for="item in errors" v-if="report_idfind(item.id)===filter_id">
                                    <div class="col-2 report-top">
                                        <div class="circle2 reportdiv"><span>1</span></div>
                                    </div>
                                    <div class="col-8 report-top">
                                        <div class="reportdiv">{{item.Pc1}}</div>
                                    </div>
                                    <div class="col-2 report-top">
                                        <input id="ck1" v-model="checkedNames"   type="radio" class="reportdiv checkError" name="radio_descript" :value="item.Pc1">
                                    </div>
                                    <div class="col-2 report-top">
                                        <div class="circle2 reportdiv"><span>2</span></div>
                                    </div>
                                    <div class="col-8 report-top">
                                        <div class="reportdiv">{{item.Pc2}}</div>
                                    </div>
                                    <div class="col-2 report-top">
                                        <input id="ck1" v-model="checkedNames"   type="radio" class="reportdiv checkError" name="radio_descript" :value="item.Pc2">
                                    </div>
                                    <div class="col-2 report-top">
                                        <div class="circle2 reportdiv"><span>3</span></div>
                                    </div>
                                    <div class="col-8 report-top">
                                        <div class="reportdiv">{{item.Pc3}}</div>
                                    </div>
                                    <div class="col-2 report-top">
                                        <input id="ck1" v-model="checkedNames"   type="radio" class="reportdiv checkError" name="radio_descript" :value="item.Pc3">
                                    </div>
                                </div>
                            </div>
                            <div class="report-result hidden_big">
                                <button type="button" class="btn btn-outline-light" data-toggle="modal"
                                                    data-target="#modelId5">
                                                    <img width="30" src="@/assets/malfunctionPic/report.png">
                                                </button>
                                <strong><span>處理方式描述</span></strong>
                                <div class="row" v-for="item in errors" v-if="report_idfind(item.id)===filter_id">
                                    <div class="col-2 report-top">
                                        <div class="circle2 reportdiv"><span>1</span></div>
                                    </div>
                                    <div class="col-8 report-top" v-for="qa in checkits" v-if="item.Pc1===qa.q">
                                        <div class="reportdiv">{{qa.a}}</div>
                                    </div>
                                    <div class="col-2 report-top">
                                        <input id="ck1" v-model="checkedNames"   type="radio" class="reportdiv checkError" name="radio_descript" :value="item.Pc1">
                                    </div>
                                    <div class="col-2 report-top">
                                        <div class="circle2 reportdiv"><span>2</span></div>
                                    </div>
                                    <div class="col-8 report-top" v-for="qa in checkits" v-if="item.Pc2===qa.q">
                                        <div class="reportdiv">{{qa.a}}}</div>
                                    </div>
                                    <div class="col-2 report-top">
                                        <input id="ck1" v-model="checkedNames"   type="radio" class="reportdiv checkError" name="radio_descript" :value="item.Pc2">
                                    </div>
                                    <div class="col-2 report-top">
                                        <div class="circle2 reportdiv"><span>3</span></div>
                                    </div>
                                    <div class="col-8 report-top" v-for="qa in checkits" v-if="item.Pc3===qa.q">
                                        <div class="reportdiv">{{qa.a}}</div>
                                    </div>
                                    <div class="col-2 report-top">
                                        <input id="ck1" v-model="checkedNames"   type="radio" class="reportdiv checkError" name="radio_descript" :value="item.Pc3">
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col text-right">
                                        <button id=Enter type="button" class="btn btnblue font-weight-bold" data-dismiss="modal">報告送出</button>
                                    </div>
                                </div>
                            </div>
                        <!--電腦-->
                        <div class="row hidden_small onesize">
                            <div class="col-xl-4 col-12">
                                <div class="mb-3">
                                    <img class="align-self-center" src="@/assets/malfunctionPic/icon-07.png" width="25" height="25">
                                    <strong class="ml-3 tibold">故障資訊</strong>
                                </div>
                                 <hr style="width:100%;background-color:#8192b9;">
                                <table class="table breakin">
                                    <thead>
                                        <tr>
                                            <th>項目</th>
                                            <th>內容</th>
                                        </tr>
                                    </thead>
                                     <tbody  v-for="item in errors" v-if="report_idfind(item.id)===filter_id">
                                         <tr>
                                            <td scope="row" class="bg-white">故障時間</td>
                                            <td class="breaktime bg-white">{{item.time}}</td>
                                        </tr>
                                        <tr>
                                            <td scope="row">故障碼</td>
                                            <td class="breakcode">{{item.code}}</td>
                                        </tr>
                                        <tr>
                                            <td scope="row" class="bg-white">處理狀態</td>
                                            <td class="breakstate bg-white">{{item.Ps}}</td>
                                        </tr>
                                        <tr>
                                            <td scope="row">狀況描述</td>
                                            <td class="breakdescript">{{item.Ed}}</td>
                                        </tr>

                                        </tbody>
                                </table>
                            </div>
                            <div class="col-xl-8 col-12">
                                <div class="mb-3">
                                    <img class="align-self-center" src="@/assets/malfunctionPic/break-reason.png" width="25" height="25">
                                    <strong class="ml-3 tibold">故障報告</strong>
                                </div>
                                 <hr style="background-color:#8192b9;">
                                  <div class="divbor">
                                <table class="xsbro table-hover text-center r-table h5 ReconTable" >
                                    <thead>
                                        <tr>
                                            <th class="text-left" style="width:15vh;letter-spacing:0vh;">
                                                <div class="ml-3">故障原因描述</div>
                                            </th>
                                            <th class="text-left">
                                                <button type="button" class="btn btn-outline-light" @click="modalAction5();">
                                                    <img widht="25" class="IMGmodelID5" src="@/assets/malfunctionPic/icon-01.png">
                                                </button>
                                            </th>
                                        </tr>
                                    </thead>

                                    <tbody v-for="item in errors" v-if="report_idfind(item.id)===filter_id">
                                        <tr>
                                            <td scope="row">
                                                <div class="rounded-circle bg-dark text-light liCircle"><span>1</span></div>
                                            </td>
                                            <td id="Reson1_description">
                                               {{item.Pc1}}
                                            </td>
                                            <td class="">
                                                <input id="ck1" v-model="checkedNames"   type="checkbox" class="checkError cb" name="radio_descript" :value="item.Pc1">
                                            </td>
                                        </tr>
                                        <tr>
                                            <td scope="row">
                                                <div class="rounded-circle bg-dark text-light liCircle"><span>2</span></div>
                                            </td>
                                            <td id="Reson2_description">
                                                {{item.Pc2}}
                                            </td>
                                            <td>
                                                <input  type="checkbox" v-model="checkedNames" class="checkError cb" name="radio_descript" :value="item.Pc2">
                                            </td>
                                        </tr>
                                        <tr>
                                            <td scope="row">
                                                <div class="rounded-circle bg-dark text-light liCircle"><span>3</span></div>
                                            </td>
                                            <td id="Reson3_description">
                                               {{item.Pc3}}
                                            </td>
                                            <td>
                                                <input  type="checkbox" v-model="checkedNames"  class="checkError cb" name="radio_descript" :value="item.Pc3">
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row hidden_small">
                    <div class="col text-right mb-3">
                        <div id="next"  :value="checkedNames" class="btn btnblue2 mr-5" @click="modalAction4();modalAction3();"><span>下一步</span></div>
                        <div id="Enter"  class="btn btnblue2 mr-4" @click="modalAction3()"><span>報告送出</span></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="modal1" v-if="modal4"  tabindex="-1" role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
        <div class="modal-dialog modal-xl" role="document">
            <div class="modal-content xs custom">
                <div class="modal-header head d-flex justify-content-end">
                    <button type="button" class="rounded-circle" @click="modalAction4()" aria-label="Close">
                        <div class="clo"><img src="./close.png"></div>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="container-fluid ">
                        <div class="row hidden_small onesize">
                            <div class="col-xl-4 col-12">
                                <div class="mb-3">
                                    <img class="align-self-center" src="@/assets/malfunctionPic/icon-07.png" width="25" height="25">
                                    <strong class="ml-3 tibold">故障資訊</strong>
                                </div>
                                <hr style="width:100%;background-color:#8192b9;">
                                <table class="table breakin">
                                    <thead>
                                        <tr>
                                            <th>項目</th>
                                            <th>內容</th>
                                        </tr>
                                    </thead>
                                     <tbody  v-for="item in errors" v-if="report_idfind(item.id)===filter_id">
                                         <tr>
                                            <td scope="row" class="bg-white">故障時間</td>
                                            <td class="breaktime bg-white">{{item.time}}</td>
                                        </tr>
                                        <tr>
                                            <td scope="row">故障碼</td>
                                            <td class="breakcode">{{item.code}}</td>
                                        </tr>
                                        <tr>
                                            <td scope="row" class="bg-white">處理狀態</td>
                                            <td class="breakstate bg-white">{{item.Ps}}</td>
                                        </tr>
                                        <tr>
                                            <td scope="row">狀況描述</td>
                                            <td class="breakdescript">{{item.Ed}}</td>
                                        </tr>

                                        </tbody>
                                </table>
                            </div>
                            <div class="col-xl-8 col-12">
                                <div class="mb-3">
                                    <img class="align-self-center" src="@/assets/malfunctionPic/break-reason.png" width="25" height="25">
                                    <strong class="ml-3 tibold">故障報告</strong>
                                </div>
                                <hr style="background-color:#8192b9;">
                                <div class="divbor">
                                <table class="xsbro table-hover text-center r-table h5 ReconTable">
                                    <thead>
                                        <tr>
                                            <th class="text-left" style="width:15vh;letter-spacing:0vh;">
                                                <div class="ml-3">處理方式描述</div>
                                            </th>
                                            <th class="text-left">
                                                <button type="button" class="btn btn-outline-light" @click="modalAction5();">
                                                    <img width="25" class="IMGmodelID5" src="@/assets/malfunctionPic/icon-01.png">
                                                </button>
                                            </th>
                                        </tr>
                                    </thead>

                                    <tbody >
                                        <tr>
                                            <td scope="row" style="width:5vh;">
                                                <div class="rounded-circle ml-3 bg-dark text-light liCircle"><span>1</span></div>
                                            </td>
                                            <td id="ReportRadio1" style="width:30vh;">
                                                <!--寫死{{qa.a}}v-for="qa in checkits" v-if="checkedNames===qa.q"-->
                                                <div id="ReportRadio1">重新調整下料阻擋缸位置</div>
                                            </td>
                                            <td>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
                <div class="row">
                    <div class="col text-right mb-3" >
                        <div class="btn btnblue2  mr-5"  @click="modalAction4();modalAction3();"><span>上一步</span></div>
                        <div id="Enter"  class="btn btnblue2 mr-4" @click="modalAction4();"><span>報告送出</span></div>
                    </div>
                </div>
            </div>
        </div>
    </div>



    <!-- Button trigger modal -->
    <!-- Modal -->
    <div class="modal1" v-if="modal5" tabindex="-1" role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
        <div class="modal-dialog modal-sm celephone" role="document">
            <!--手機-->
            <div class="modal-content hidden_big" style="background-color:#ECF0F9;">
                <div class="modal-header" style="color: rgb(79, 105, 172);border: 0;padding-bottom: 0;">
                    <h6 class="modal-title result-talk">其他原因說明:</h6>
                </div>
                <div class="modal-body">
                    <textarea cols="10" rows="2"></textarea>
                </div>
                <div class="row">
                <div class="col text-right">
                     <div class="modal-footer" style="color: rgb(79, 105, 172);border: 0;padding-top: 0;">
                         <button type="button" class="btn result-but" data-dismiss="modal">取消</button>
                         <button type="button" class="btn result-but" data-dismiss="modal">儲存</button>
                     </div>
                </div>
                </div>
            </div>
            <!--電腦-->
            <div class="smallform modal-content hidden_small" style="background-color:#ECF0F9;">
                <div class="modal-header" style="height:1vh;color: rgb(79, 105, 172);border: 0;padding-bottom: 0;">
                    <div style="margin-top:-1vh;"><h6 class="modal-title">其他原因說明:</h6></div>
                </div>
                <div class="modal-body">
                    <textarea cols="10" rows="2"></textarea>
                </div>
                <div class="row">
                <div class="col text-right">
                     <div class="modal-footer" style="height:1vh;color: rgb(79, 105, 172);border: 0;padding-top: 0;">
                         <button type="button" class="btn btnblue" style="width:6vh;height:2vh;" @click="modalAction5()"><div class="mb-2"><span>儲存</span></div></button>
                         </div>
                </div>
                </div>
            </div>
        </div>
    </div>

        <!-- Button trigger modal -->
    <!-- Modal -->
    <div class="modal1" v-if="modal6" tabindex="-1" role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
            <div class="modal-dialog modal-sm" role="document">
                <div class="modal-content" style="background-color:#ECF0F9;">
                    <div class="modal-header" style="color: rgb(79, 105, 172);border: 0;padding-bottom: 0;">
                        <h6 class="modal-title">其他處理方式說明:</h6>
                    </div>
                    <div class="modal-body">
                        <textarea cols="40" rows="3"></textarea>
                    </div>
                    <div class="modal-footer" style="color: rgb(79, 105, 172);border: 0;padding-top: 0;">
                        <button type="button" class="btn btnblue" style="font-size: 14px;" @click="modalAction5();modalAction4()">儲存</button>
                    </div>
                </div>
            </div>
        </div>

    <!-- Modal -->
    <div class="modal1" v-if="modal7" tabindex="-1" role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
            <div class="modal-dialog modal-xl" role="document">
                <div class="modal-content xs custom celephone" style="overflow-x:hidden;overflow-y:hidden;">
                    <div class="modal-header head d-flex justify-content-end hidden_small">
                        <button type="button" class="rounded-circle" @click="modalAction7()" aria-label="Close">
                            <div class="clo"><img src="./close.png"></div>
                        </button>
                    </div>
                    <div class="modal-body ">
                        <div class="container-fluid">
                            <!--手機-->
                            <div class="hidden_big">
                                <img class="align-self-center" src="@/assets/malfunctionPic/break-reason.png" width="20" height="20">
                                <strong class="ml-2">故障管理審核</strong>
                                <div class="row mt-4 text-center tit2">
                                    <div class="col-6">
                                        <strong>故障原因描述</strong>
                                    </div>
                                    <div class="col-6">
                                        <strong>處理方式描述</strong>
                                    </div>
                                </div>
                                <div class="row text-center report-top mt-3 conte" v-for="item in errors" v-if="pass_idfind(item.id)===filter_id">
                                    <div class="col-6 mt-3">
                                        {{item.Pc1}}
                                    </div>
                                    <div class="col-6 mt-3"  v-for="qa in checkits"  v-if="pass_idfind(item.id)===filter_id&&item.Pc1===qa.q">
                                        {{qa.a}}
                                    </div>
                                </div>
                                <div class="row text-center report-top mt-3 conte" v-for="item in errors" v-if="pass_idfind(item.id)===filter_id">
                                    <div class="col-6 mt-3">
                                        {{item.Pc2}}
                                    </div>
                                    <div class="col-6 mt-3"  v-for="qa in checkits"  v-if="pass_idfind(item.id)===filter_id&&item.Pc2===qa.q">
                                        {{qa.a}}
                                    </div>
                                </div>
                                <div class="row text-center report-top mt-3 conte" v-for="item in errors" v-if="pass_idfind(item.id)===filter_id">
                                    <div class="col-6 mt-3">
                                        {{item.Pc3}}
                                    </div>
                                    <div class="col-6 mt-3"  v-for="qa in checkits"  v-if="pass_idfind(item.id)===filter_id&&item.Pc3===qa.q">
                                        {{qa.a}}
                                    </div>
                                </div>
                                <div class="row mt-4">
                                    <div class="col-6">
                                        <button id="Yes" type="button" class="btn btnblue font-weight-bold "  data-target="#modelId9" data-dismiss="modal">通過</button>
                                    </div>
                                    <div class="col-6">
                                        <button id="No" type="button" class="btn btnblue font-weight-bold mr-3" data-target="#modelId8" data-toggle="modal">駁回</button>
                                    </div>
                                </div>
                            </div>
                            <!--電腦-->
                            <div class="row hidden_small onesize">
                                <div class="col-4">
                                    <div class="mb-3">
                                        <img class="align-self-center" src="@/assets/malfunctionPic/icon-07.png" width="25" height="25">
                                        <strong class="ml-3 tibold">故障資訊</strong>
                                    </div>
                                    <hr style="width:100%;background-color:#8192b9;">
                                    <table class="table breakin">
                                        <thead>
                                            <tr>
                                                <th>項目</th>
                                                <th>內容</th>
                                            </tr>
                                        </thead>
                                        <tbody v-for="item in errors" v-if="pass_idfind(item.id)===filter_id">
                                         <tr>
                                            <td scope="row" class="bg-white">故障時間</td>
                                            <td class="breaktime bg-white">{{item.time}}</td>
                                        </tr>
                                        <tr>
                                            <td scope="row">故障碼</td>
                                            <td class="breakcode">{{item.code}}</td>
                                        </tr>
                                        <tr>
                                            <td scope="row" class="bg-white">處理狀態</td>
                                            <td class="breakstate bg-white">{{item.Ps}}</td>
                                        </tr>
                                        <tr>
                                            <td scope="row">狀況描述</td>
                                            <td class="breakdescript">{{item.Ed}}</td>
                                        </tr>

                                        </tbody>
                                </table>
                                </div>
                                <div class="col-xl-8">
                                    <div class="mb-3">
                                        <img class="align-self-center" src="@/assets/malfunctionPic/break-reason.png" width="20" height="20">
                                        <strong class="ml-3 tibold">故障管理審核</strong>
                                    </div>
                                    <hr style="background-color:#8192b9;">
                                    <div class="divbor">
                                    <table class="table xsbro table-hover text-center h5 r-table r-th ReviewTable" style="">
                                        <thead style="color:#4c6ec4;">
                                            <tr>

                                                <th><div class="mb-2">故障原因描述</div></th>

                                                <th><div class="mb-2">處理方式描述</div></th>
                                            </tr>
                                        </thead>

                                        <tbody v-for="item in errors" v-if="pass_idfind(item.id)===filter_id">
                                            <tr>
                                                <td id="pass_des">{{item.Pc1}}</td>
                                                <td id="pass_handle"  v-for="qa in checkits"  v-if="pass_idfind(item.id)===filter_id&&item.Pc1===qa.q">{{qa.a}}</td>
                                            </tr>

                                        </tbody>
                                    </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                            <div class="col text-right hidden_small" style="margin-top:-1vh;">
                                <div id="Yes" class="btn btnblue2 mr-5"  @click="modalAction9();modalAction7();"><span>通過</span></div>
                                <div id="No" class="btn btnblue2 mr-4" @click="modalAction8();modalAction7();"><span>駁回</span></div>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    <div class="modal1" v-if="modal8" tabindex="-1" role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
        <div class="modal-dialog modal-sm celephone " role="document">
            <div class="modal-content" style="background-color:#ECF0F9;margin-top: 40%">
                <div class="modal-header" style="color: rgb(79, 105, 172);border: 0;padding-bottom: 0;">
                    <h6 class="modal-title">駁回原因:</h6>
                </div>
                <div class="modal-body">
                    <textarea cols="40" rows="3"></textarea>
                </div>
                <div class="modal-footer" style="color: rgb(79, 105, 172);border: 0;padding-top: 0;">
                    <button type="button" class="btn btnblue" @click="modalAction8();modalAction7();"><span>確認</span></button>
                    <button type="button" class="btn btnblue" @click="modalAction8();modalAction7();"><span>取消</span></button>
                </div>
            </div>
        </div>
    </div>
    <div class="modal1 text-center" v-if="modal9" tabindex="-1" role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
        <div class="modal-dialog modal-sm" role="document">
            <div class="modal-content" style="background-color:#ECF0F9;margin-top: 40%">
                <div class="modal-body">
                    <button type="button" class="btn btnblue" @click="modalAction9();modalAction7();"><span>確認</span></button>
                    <button type="button" class="btn btnblue" @click="modalAction9();modalAction7();"><span>取消</span></button>
                </div>
            </div>
        </div>
    </div>

    <div class="container-fluid mt-2 mb-2">
        <div class="panel">
            <div class="text-left hidden_small mt-2 ml-3 mb-2">
                <img width="25" style="vertical-align: text-top;" src="@/assets/malfunctionPic/icon-05.png">
                <div style="margin-top:-1.8rem;margin-left:2vh;"><span class="font-weight-bold title">故障狀態</span></div>
            </div>
            <hr class="tit_hr hidden_small">
            <div class="row"><!--問題 -->
                <div class="dr col-xl-3 col-12 text-center hidden_small" style="opacity: 0.8;">
                    <div class="mt-2 button-prev" slot="button-prev"><strong><div style="margin-top:0.2rem;margin-right:0.1rem;"><i class="fas fa-caret-up" style="color:white;margin-right:0.4rem;margin-top:-0.2rem;"></i></div></strong></div>
                    <div class="mt-2 button-next" slot="button-next"><div style="margin-top:0.2rem;margin-right:0.1rem;"><i class="fas fa-caret-down" style="color:white;margin-right:0.4rem;margin-top:-0.2rem;"></i></div></div>
                        <swiper id="swiperBox" v-bind:options="swiperOption" ref="mySwiper">
                            <swiper-slide class="swiper-slide1 " v-for="photo in photos">
                                 <div class="page card-text">
                                    <img :src="photo.imgsrc" alt="...">
                                    <div class="btn mt-2 btn-custom2">{{photo.btn}}</div>
                                </div>
                            </swiper-slide>
                        </swiper>
                </div>
                <!--手機版面-->
                <div class="col-xl-9 col-12">
                    <div class="row hidden_big">
                        <div class="col-3 text-center background hidden_big">
                            <button class="back" style="background-color:#FFCDB1"></button>
                            <span>未排除</span>
                        </div>
                        <div class="col-3 text-center background hidden_big">
                            <button class="back" style="background-color:#90D279"></button>
                            <span>已排除</span>
                        </div>
                        <div class="col-3 text-center background hidden_big">
                            <button class="back" style="background-color:#56C0EE"></button>
                            <span>報告提交</span>
                        </div>
                        <div class="col-3 text-center background hidden_big">
                            <button class="back" style="background-color:#D0D0D0"></button>
                            <span>審核完成</span>
                        </div>
                    </div>
                    <hr class="tit_hr hidden_big">
                    <!--電腦版面 -->
                    <div class="row" style="opacity: 0.8;">
                        <div class="col-12">
                            <div class="dx">
                                <table class=" table7 table-hover text-center hidden_small">
                                    <thead>
                                        <tr style="border-top:0px;">
                                            <th class="column1"><div style="margin-bottom:1vh;">故障發生時間<i class="fas fa-caret-down down mt-0 faca"></i></div></th>
                                            <th class="column2"><div style="margin-bottom:1vh;">故障碼<i class="fas fa-caret-down down mt-0 faca"></i></div></th>
                                            <th class="column3"><div style="margin-bottom:1vh;">處理狀態<i class="fas fa-caret-down down mt-0 ml-3 faca"></i></div></th>
                                            <th><div style="margin-bottom:1vh;">故障設備</div></th>
                                            <th class="column5"><div style="margin-bottom:1vh;">異常描述</div></th>
                                            <th class="column6"><div style="margin-bottom:1vh;">異常處理</div></th>
                                        </tr>
                                    </thead>
                                    <tbody class="tobody"  border border-primary>
                                        <tr v-for="item in errors">
                                            <td class="column1"><div class="mt-2 st"><strong>{{item.time}} {{item.time2}}</strong></div></td>
                                            <td class="column2"><div class="mt-2 st"><strong>{{item.code}}</strong></div></td>
                                            <td id="sum2"  class="column3"><div class="mt-2 st Pspro"><strong>{{item.Ps}}</strong></div></td>
                                            <td><div class="mt-2 st"><strong>{{item.Fe}}</strong></div></td>
                                            <td class="column5"><div class="mt-2 st"><strong>{{item.Ed}}</strong></div></td>
                                            <td class="column6">
                                                <div class="row text-center justify-content-center">
                                                    <div class="col-xl-4">
                                                        <div class="btn btnblue" :id="reason_idfind(item.id)" @click="getData();modalAction1()"
                                                            ><img width="20" :id="reason_idfind(item.id)"  src="@/assets/malfunctionPic/icon-02.png" class="mr-3"><span :id="reason_idfind(item.id)">故障原因</span></div>
                                                    </div>
                                                    <div class="col-xl-4">
                                                        <div :id="report_idfind(item.id)" @click="getData();modalAction3()" class="btn btnblue" data-toggle="modal"
                                                             data-dismiss="modal"><img width="20" :id="report_idfind(item.id)" 
                                                                src="@/assets/malfunctionPic/icon-03.png" class="mr-3"><span :id="report_idfind(item.id)">故障報告</span></div>
                                                    </div>
                                                    <div class="col-xl-4">
                                                        <div :id="pass_idfind(item.id)" @click="getData();modalAction7();"  class="btn btnblue" data-toggle="modal"
                                                              data-dismiss="modal"><img width="20" :id="pass_idfind(item.id)" 
                                                                src="@/assets/malfunctionPic/icon-04.png" class="mr-3"><span :id="pass_idfind(item.id)">主管審核</span></div>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        <!--手機版面 -->
                        <div class="allbo hidden_big text-center">
                            <div class="row text-left th">
                                <div class="sp col-3.5">
                                    <span>故障發生時間</span>
                                </div>
                                <div class="col-3">
                                    <span>故障碼</span>
                                </div>
                                <div class="col-3">
                                    <span>故障設備</span>
                                </div>
                                <div class="col-3.5">
                                    <span>異常描述</span>
                                </div>
                            </div>
                            <div class="div_body" v-for="item in errors">
                                <div class="row td">
                                    <div class="col-3">
                                        <div class="span"><span>{{item.time}}{{item.time2}}</span></div>
                                    </div>
                                    <div class="col-3">
                                            <div class="span"><span>{{item.code}}</span></div>
                                    </div>
                                    <div class="col-3">
                                            <div class="span"><span>{{item.Fe}}</span></div>
                                    </div>
                                    <div class="col-3">
                                            <div class="span"><span>{{item.Ed}}</span></div>
                                    </div>
                                    <div class="ifPs" v-bind:style="{'background-color':item.Ps_color}">
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-4">
                                        <div  class="btn btnblue" :id="reason_idfind(item.id)" @click="getData" data-toggle="modal" data-target="#modelId1" data-dismiss="modal">
                                            <img width="20" src="@/assets/malfunctionPic/icon-02.png">故障原因
                                        </div>
                                    </div>
                                    <div class="col-4">
                                        <div :id="report_idfind(item.id)"  @click="getData" class="btn btnblue" data-toggle="modal" data-target="#modelId3"  data-dismiss="modal">
                                            <img width="20" src="@/assets/malfunctionPic/icon-03.png">故障報告
                                        </div>
                                    </div>
                                    <div class="col-4">
                                        <div :id="pass_idfind(item.id)"  @click="getData" class="btn btnblue" data-toggle="modal" data-target="#modelId7"  data-dismiss="modal">
                                            <img width="20" src="@/assets/malfunctionPic/icon-04.png">主管審核
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        <!-- <div class="row mt-2">
            <div class="col-md-12 btn-light">
                <div class="card-group" >
                    <div class="card">
                        <div class="card-body card-content" style="box-shadow:none;">
                            <img src="@/assets/malfunctionPic/ui-01.png" class="card-img-top" alt="...">
                            <button type="button" class="btn mt-2 btn-custom">CNC技術文件連結</button>
                        </div>
                    </div>
                    <div class="card">

                        <div class="card-body card-content">
                            <img src="@/assets/malfunctionPic/ui-02.png" class="card-img-top" alt="...">
                            <button type="button" class="btn mt-2 btn-custom">Gantry去刺站文件連結</button>
                        </div>
                    </div>
                    <div class="card">

                        <div class="card-body card-content">
                            <img src="@/assets/malfunctionPic/ui-03.png" class="card-img-top" alt="...">
                            <button type="button" class="btn mt-2 btn-custom">伺服壓機文件連結</button>
                        </div>
                    </div>
                    <div class="card">

                        <div class="card-body card-content">
                            <img src="@/assets/malfunctionPic/ui-06.png" class="card-img-top" alt="...">
                            <button type="button" class="btn mt-2 btn-custom">機械手文件連結</button>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-body card-content">
                            <img src="@/assets/malfunctionPic/ui-05.png" class="card-img-top" alt="...">
                            <button type="button" class="btn mt-2 btn-custom">ZP-2文件連結</button>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-body card-content">
                            <img src="@/assets/malfunctionPic/ui-07.png" class="card-img-top" alt="...">
                            <button type="button" class="btn mt-2 btn-custom">彈性輸送帶</button>
                        </div>
                    </div>
                </div>
            </div>
        </div> -->
        </div>
    </div>

</template>

<script>
import Bus from './script.js'
import PieChart from "./PieChart.js";
import Slick from 'vue-slick';
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
const filter_id = "";
const getid = "";
export default {
    components: {
        PieChart,
        swiper,
      swiperSlide,
    },
    data(){
        return{
            swiperOption: {
                // swiper configs 所有的配置同swiper官方api配置
                    notNextTick: true,//notNextTick是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true
                    direction: 'vertical',//水平方向移动
                    setWrapperSize: true,//Swiper使用flexbox布局(display: flex)，开启这个设定会在Wrapper上添加等于slides相加的宽或高，在对flexbox布局的支持不是很好的浏览器中可能需要用到。
                    autoHeight: true,//自动高度。设置为true时，wrapper和container会随着当前slide的高度而发生变化
                    slidesPerView: 1,//设置slider容器能够同时显示的slides数量(carousel模式)。可以设置为数字（可为小数，小数不可loop），或者 'auto'则自动根据slides的宽度来设定数量。loop模式下如果设置为'auto'还需要设置另外一个参数loopedSlides。
                    mousewheel: false,//开启鼠标滚轮控制Swiper切换。可设置鼠标选项，默认值false
                    mousewheelControl: false,//同上
                    height: window.innerHeight, // 高度设置，占满设备高度
                    resistanceRatio: 0,//抵抗率。边缘抵抗力的大小比例。值越小抵抗越大越难将slide拖离边缘，0时完全无法拖离。本业务需要
                    observeParents: true,//将observe应用于Swiper的父元素。当Swiper的父元素变化时，例如window.resize，Swiper更新
                    // 如果自行设计了插件，那么插件的一些配置相关参数，也应该出现在这个对象中，如下debugger
                    debugger: true,
                    // swiper的各种回调函数也可以出现在这个对象中，和swiper官方一样
                    onTransitionStart(swiper){
                        console.log(swiper)
                    },
                    navigation: {
                        nextEl: '.button-next',
                        prevEl: '.button-prev',
                    },
            },
            on: {
                //监听滑动切换事件，返回swiper对象
                slideChange: ()=>{
                    let swiper = this.$refs.mySwiper.swiper;
                    console.log(swiper.activeIndex); //滑动打印当前索引
                }
            },
            chartOptions: {
                hoverBorderWidth: 20
            },
            chartData1: {
                hoverBackgroundColor: "red",
                hoverBorderWidth: 10,
                datasets: [
                    {
                        label: "Data One",
                        backgroundColor: ["#6A7BAE", "#E9EDF6"],
                        data: [75,25]
                    }
                ]
            },
            chartData2: {
                hoverBackgroundColor: "red",
                hoverBorderWidth: 10,
                datasets: [
                {
                    label: "Data two",
                    backgroundColor: ["#19A5BA", "#E9EDF6"],
                    data: [75,25]
                }
            ]
            },
            chartData3: {
                hoverBackgroundColor: "red",
                hoverBorderWidth: 10,
                datasets: [
                {
                    label: "Data three",
                    backgroundColor: ["#43A4A1", "#E9EDF6"],
                    data: [75,25]
                }
            ]
            },
            checkedNames: [],
            //故障狀態
            errors:[
                {
                    id:'4',
                    time:'2019/06/04 10:10',
                    time2:'am',
                    code:'013',
                    Ps:'已排除',
                    Fe:'彈性輸送機',
                    Ed:'RFID寫入失敗',
                    Pc1:'托盤位置偏移',
                    Pc2:'程式設定錯誤',
                    Pc3:'工件未確實放料',
                    Ps_color:'#90D279'
                },
                {
                    id:'3',
                    time:'2019/06/01 08:55',
                    time2:'am',
                    code:'050',
                    Ps:'報告提交',
                    Fe:'Gantry 去刺站',
                    Ed:'Gantry 夾取拍攝完成工件異常',
                    Pc1:'機械手視覺零點定義錯誤',
                    Pc2:'磁簧位置偏移',
                    Pc3:'夾爪氣源異常',
                    Ps_color:'#56C0EE'
                },
                {
                    id:'2',
                    time:'2019/05/31 08:55',
                    time2:'pm',
                    code:'050',
                    Ps:'報告提交',
                    Fe:'Gantry 去刺站',
                    Ed:'Gantry 夾取拍攝完成工件異常',
                    Pc1:'機械手視覺零點定義錯誤',
                    Pc2:'磁簧位置偏移',
                    Pc3:'夾爪氣源異常',
                    Ps_color:'#56C0EE'
                },
                {
                    id:'1',
                    time:'2019/05/31 09:31',
                    time2:'am',
                    code:'022',
                    Ps:'審核完成',
                    Fe:'ZP-2',
                    Ed:'ZP-2 工件夾取異常',
                    Pc1:'治具盤位置錯誤',
                    Pc2:'磁簧位置偏移',
                    Pc3:'夾爪氣源異常',
                    Ps_color:'#D0D0D0'
                },
                {
                    id:'0',
                    time:'2019/05/29 04:16',
                    time2:'pm',
                    code:'020',
                    Ps:'審核完成',
                    Fe:'ZP-2',
                    Ed:'ZP-2 X軸馬達負載異常',
                    Pc1:'撞機',
                    Pc2:'X軸滑軌有異物阻擋',
                    Pc3:'控制器參數設定錯誤',
                    Ps_color:'#D0D0D0'
                },
                {
                    id:'10',
                    time:'2019/05/27 02:31',
                    time2:'pm',
                    code:'022',
                    Ps:'未排除',
                    Fe:'ZP-2',
                    Ed:'ZP-2 工件夾取異常',
                    Pc1:'治具盤位置錯誤',
                    Pc2:'磁簧位置偏移',
                    Pc3:'夾爪氣源異常',
                    Ps_color:'#FFCDB1'
                },
                {
                    id:'9',
                    time:'',
                    code:'',
                    Ps:'',
                    Fe:'',
                    Ed:'',
                    Pc1:'',
                    Pc2:'',
                    Pc3:''
                },
                {
                    id:'8',
                    time:'',
                    code:'',
                    Ps:'',
                    Fe:'',
                    Ed:'',
                    Pc1:'',
                    Pc2:'',
                    Pc3:''
                },
                {
                    id:'7',
                    time:'',
                    code:'',
                    Ps:'',
                    Fe:'',
                    Ed:'',
                    Pc1:'',
                    Pc2:'',
                    Pc3:''
                },
                {
                    id:'6',
                    time:'',
                    code:'',
                    Ps:'',
                    Fe:'',
                    Ed:'',
                    Pc1:'',
                    Pc2:'',
                    Pc3:''
                },
                {
                    id:'5',
                    time:'',
                    code:'',
                    Ps:'',
                    Fe:'',
                    Ed:'',
                    Pc1:'',
                    Pc2:'',
                    Pc3:''
                },
            ],
            checkits:[
              {
                q:'托盤位置偏移',
                a:'重新調整下料阻擋缸位置'
              },
              {
                q:'程式設定錯誤',
                a:'請聯絡DSA進行調整'
              },
              {
                q:'工件未確實放料',
                a:'請重新調整IRB4600放料點位'
              },
              {
                q:'機械手視覺零點定義錯誤',
                a:'重新進行點位設定'
              },
              {
                q:'磁簧位置偏移',
                a:'重新調整磁簧'
              },
              {
                q:'夾爪氣源異常',
                a:'檢查檢查氣迴路與氣源'
              },
              {
                q:'治具盤位置錯誤',
                a:'重新調整治具'
              },
              {
                q:'撞機',
                a:'使用手動模式排除，並對ZP-2檢查'
              },
              {
                q:'X軸滑軌有異物阻擋',
                a:'檢查滑軌，並排除異物'
              },
              {
                q:'控制器參數設定錯誤',
                a:'請根據手冊重新進行參數自動調整'
              }
            ],
            //照片
            photos:[
                {
                    title:'CNC技術文件',
                    imgsrc:require('@/assets/malfunctionPic/ui-01.png'),
                    btn:'CNC技術文件連結'
                },
                {
                    title:'Gantry去刺站',
                    imgsrc:require('@/assets/malfunctionPic/ui-02.png'),
                    btn:'Gantry去刺站文件連結'
                },
                {
                    title:'伺服壓機文件',
                    imgsrc:require('@/assets/malfunctionPic/ui-03.png'),
                    btn:'伺服壓機文件連結'
                },
                {
                    title:'機械手文件',
                    imgsrc:require('@/assets/malfunctionPic/ui-04.png'),
                    btn:'機械手文件連結'
                },
                {
                    title:'ZP-2文件',
                    imgsrc:require('@/assets/malfunctionPic/ui-05.png'),
                    btn:'ZP-2文件連結'
                },
                {
                    title:'彈性輸送帶',
                    imgsrc:require('@/assets/malfunctionPic/ui-06.png'),
                    btn:'彈性輸送帶連結'
                }
            ],
            filter_id:"",
            reason_num:"0",
            getid:"",
            modal1: false,
            modal2: false,
            modal3: false,
            modal4: false,
            modal5: false,
            modal6: false,
            modal7: false,
            modal8: false,
            modal9: false,
        }
    },
    mounted: function () {
        var vm = this
        Bus.$on('val', (data) => {
        vm.filter_id = data
        
        })
    },
    notund: function(){
        var vm = this
        Bus.on('val',(data) =>{
            vm.getid = data
        })
    },
    methods:{
        reason_idfind:function(id){
            return "Reason" + id;
        },
        report_idfind:function(id){
            return "Report" + id;
        },
        pass_idfind:function(id){
            return "Pass" + id;
        },
        getData: function () {
            this.filter_id = event.target.id;
        },
        getID: function(){
            this.getid = event.target.id
        },
        reInit() {
            // Helpful if you have to deal with v-for to update dynamic lists
            this.$refs.slick.reSlick()
        },
        modalAction1(){

          if(this.modal1 == false){
              this.modal1= true
          }else{
              this.modal1= false
          }
        },
        modalAction2(){

          if(this.modal2 == false){
              this.modal2= true
          }else{
              this.modal2= false
          }
        },
        modalAction3(){

          if(this.modal3 == false){
              this.modal3= true
          }else{
              this.modal3= false
          }
        },
        modalAction4(){

          if(this.modal4 == false){
              this.modal4= true
          }else{
              this.modal4= false
          }
        },
        modalAction5(){

          if(this.modal5 == false){
              this.modal5= true
          }else{
              this.modal5= false
          }
        },
        modalAction6(){

          if(this.modal6 == false){
              this.modal6= true
          }else{
              this.modal6= false
          }
        },
        modalAction7(){

          if(this.modal7 == false){
              this.modal7= true
          }else{
              this.modal7= false
          }
        },
        modalAction8(){

          if(this.modal8 == false){
              this.modal8= true
          }else{
              this.modal8= false
          }
        },
        modalAction9(){

          if(this.modal9 == false){
              this.modal9= true
          }else{
              this.modal9= false
          }
        },
        
    }
}
document.onkeydown=function(e){    //對整個頁面監聽  
var keyNum=window.event ? e.keyCode :e.which;       //獲取被按下的鍵值  
//判斷如果使用者按下了回車鍵（keycody=13）  
    if(keyNum==123){
        setTimeout("location.reload()", 1000 )
    }
}
</script>

<style scoped>
@media only screen and (max-width: 576px) {
    .tibold{
        font-family: Microsoft JhengHei;
        font-weight: 900;
        color:#434b5d;
    }
    .report-result{
        color:#9094AC;
    }
    .result-but{
        width:20%;
         padding-top: 5px;
        padding-bottom: 5px;
        padding-right: 3px;
        padding-left: 3px;
        background-color: #8596C1;
        color: white;
        display: inline-block;
        box-shadow: 5px 5px 5px grey;
        height: 4vh;
        margin: .5rem .25rem;
        overflow: hidden;
    }
    .result-talk{
        color:#737FA4;
        font-size:2vh;
        font-weight:bold;
    }
    .report-top{
        border-top:1px solid #EFEFEF;
    }
    .reportdiv{
        margin-top:3vh;
        margin-bottom:3vh;
    }
    .ifPs{
        position:absolute;
        margin-top:5vh;
        width:1vh;
        height:7vh;
    }
    .test{
        border:1px solid red;
    }
    .malfunction{
        height:75%;
        overflow-y:scroll;
        overflow-x:hidden;
    }
    .hidden_small{
        position:absolute;
        visibility: hidden;
    }
    .background{
        width:auto;
        height:3vh;
        font-size:12px;
    }
    .back{
        width:2vh;
        height:2vh;
        border:none;
    }
    .tit_hr{
        color:#E0E3EC;
        margin-left:-2vh;
        width:52vh;
    }
    .allbo{
        font-size:1vh;
        color:#64759C;
    }
    .th{
        font-size:2vh;
        height:5vh;
        margin-left:-1vh;
    }
    .th div{
        margin:0 0 0 0;
    }
    .th span{
        white-space:nowrap;
    }
    .td div{
        height:10vh;
    }
    .span{
        margin-left:-2vh;
        margin-top:5vh;
        width:12vh;
    }
    .td{
        border-bottom:1px solid #B9C0CB;
    }
    .background{
        white-space:nowrap;
    }
    .btn span{
        vertical-align: middle;
    }
    .btnblue {
        padding-top: 5px;
        padding-bottom: 5px;
        padding-right: 3px;
        padding-left: 3px;
        background-color: #8596C1;
        color: white;
        display: inline-block;
        box-shadow: 5px 5px 5px grey;
        height: 4vh;
        width:14vh;
        margin: .5rem .25rem;
        overflow: hidden;
    }
    .btnblue span{
        position:relative;
        bottom: 7px;
        display: inline-block;
        font-size: 14px;
        width:100px;
        text-align: center;
        font-weight: bold;
    }
    .circle1{
        width:42px;
        height:42px;
        background-color:#434b5d;
        color:white;
        border-radius:99rem;
        margin-left:-3vh;
        text-align:center;
        font-size:24px;
        font-weight:bold;
    }
    .circle2{
        width:42px;
        height:42px;
        background-color:#434b5d;
        color:white;
        border-radius:99rem;
        text-align:center;
        font-size:24px;
        font-weight:bold;
    }
    .leftto1{
        margin-top:5vh;
        text-align:center;
        color:#6C7EA9;
        font-size:12px;
        margin-bottom:3vh;
    }
    .leftto1 span{
        font-size:18px;
        font-weight:900px;
    }
    .reason{
        margin-bottom:4vh;
    }
    .leftto1 button{
        width:18vh;
    }
    .reasoncir{
        margin-bottom:3vh;
        border:1px solid #CBCBCB;
        width:50vh;
        margin-left:1vh;
        margin-right:1vh;
    }
    .modblue{
        background-color:#EBEFF8;
    }
    .tit{
        font-size:20px;
    }
    .tit2{
        font-size:16px;
        color:#838CA5;
    }
    .conte{
        color:#838CA5;
        font-size:13px;
    }
    .x1{
        margin-top:4vh;
        margin-bottom:3vh;
    }
    .spanqa{
        font-size:16px;
        color:#9697BB;
    }
    .rowsp{
        width:90%;
        border-bottom:1px solid #D7D7D7;
    }
    .btnblue{
        width:100%;
    }
    .btnblue span{
        font-size:18px;
    }
    .celephone{
        margin-top:50vh;
    }
}
@media only screen and (min-width: 700px){
    .divbor{
        width:43rem;
        margin-left:2vh;
        margin-top:2vh;
        border: 1px #aaaeb8 solid;
        background-color:#fff;
        overflow-x:hidden;
        overflow-y:scroll;
        scrollbar-face-color:#E9EEF7;
    }
    input[type=checkbox] {
            position: relative;
            width: 0.8rem;
            height: 0.8rem;
        }
        input[type=checkbox]::before{
            content:'';
            position: absolute;
            top: 0;
            left: 0;
            width: 3vh;
            height: 3vh;
            line-height:22px;
            text-align: center;
            color:white;
            font-size:24px;
            background-color:#fff;
            border-radius: 4px;
            border:1px solid #B0B3C2; 
        }
        input[type=checkbox]:checked::before {
            color:black;
            content: '✔';
        }
    .onesize{
        height: 35vh;
    }
    .modal1{
        position:absolute;
        width:100%;
        z-index:1000;
    }
    .liCircle span{
        margin-top:2vh;
        margin-left:0.2rem;
        font-size:1.8rem;
    }
    .breakin{
        margin-top: 2vh;
        margin-left: 1vh;
        text-align: center;
        vertical-align: middle;
        width:27vh;
        height:34vh;
    }
    .breakin tr:nth-child(even){
	background-color:#D8DDEA;
	}
    .breakin thead{
        background-color: #8092B8;
    }
    .breakin th{
        height: 1vh;
        color: white;
    }
    .breakin tr th:nth-child(1) {
        width: 35%;
        text-align: center;
    }
    .breakin td{
        border: 1px solid #CECED6;
        
    }
    .breakin tr:nth-child(4) td {
        height: 14vh;
        vertical-align: middle;
    }
    .breakin tbody{
        font-weight: lighter;
    }
    .xrbro thead,
    .xrbro tbody tr {
        display: table;
        width: 100%;
        table-layout: fixed;
    }
    .xsth{
        margin-top: -2vh;
        white-space: nowrap;
        font-weight: lighter;
        color:#6a7cb1;
    }
    .xsbro thead{
        width:10%;
    }
    .xsbro th{
    font-weight: lighter;
    color: #6D80B8;
    font-size:2vh;
    border-bottom:2px solid #E4E6E9;
    }
    pie-chart{
        filter: drop-shadow(30px 10px 4px #4444dd);
    }
    .piech{
        width:7vh;
        height:7vh;
    }
    .xsbro tr{
        border-bottom:0.75px solid #bcc6d4;
    }
    .xsbro tr td{
        vertical-align: middle;
        height:10vh;
    }
    .xsbro tr td:nth-child(1){
        vertical-align: middle;
        width: 3vh;
    }
    .xsbro{ 
        background-color: #fff;
        opacity:1;
        display: block;
        overflow-x: hidden;
        overflow-y: hidden;
        padding: 20px;
        height:24.3rem;
        width:38rem;
    }
    .clo{
        margin-top: -0.2rem;
        margin-left:-0.8rem;
    }
    .xs{
        overflow-x:hidden;
        background-color:rgba(255, 255, 255, 0.8); 
        margin-top: 3rem; 
        height:50vh;
        width:98vh;
    }
    .numpa1{
        font-weight: 900;
        font-family:Microsoft JhengHei;
        color:#434b5d;
        font-size:0.5rem;
        z-index:1000;
        position:fixed;
        margin-top: 2.1rem;
        margin-left: -2.4rem;
    }
    .numpa2{
        font-weight: 900;
        font-family:Microsoft JhengHei;
        color:#434b5d;
        font-size:0.5rem;
        z-index:1000;
        position:fixed;
        margin-top: 2.1rem;
        margin-left: -2.4rem;
    }
    .numpa3{
        font-weight: 900;
        font-family:Microsoft JhengHei;
        color:#434b5d;
        font-size:0.5rem;
        z-index:1000;
        position:fixed;
        margin-top: 2.1rem;
        margin-left: -2.4rem;
    }
    .bg1{
        color: white;
        display: inline-block;
        height: 3vh;
        width:11vh;
        margin: .5rem .25rem;
        overflow: hidden;
        font-size:0.1rem;
        background-color:#6A7BAE;
    }
    .bg2{
        color: white;
        display: inline-block;
        height: 3vh;
        width:11vh;
        margin: .5rem .25rem;
        overflow: hidden;
        font-size:0.1rem;
        background-color:#19A5BA;
    }
    .bg3{
        color: white;
        display: inline-block;
        height: 3vh;
        width:11vh;
        margin: .5rem .25rem;
        overflow: hidden;
        font-size:0.1rem;
        background-color:#43A4A1;
    }
    .page{
        height:56vh;
        margin-top:5vh;
        text-align:center;
        box-shadow:5px 5px 5px #888888;
        border:1px solid #888888;
    }
    .smallform{
        width:26vh;
        margin-top: 9vh;
        margin-left:24vh;
    }
    .button-prev{
        background-color: #647DB1;
        width:3vh;
        height:3vh;
        position:absolute;
        top:0%;
        left:46%;
        z-index: 10;
        border-radius: 99rem;
    }
    .cirpr{
        background-color: #818FB4;
        width:3vh;
        height:3vh;
        position: absolute;
        z-index: 9;
        left:50.3%;
        border-radius: 99rem;
    }
    .cirne{
        background-color: #818FB4;
        width:3vh;
        height: 3vh;
        position:fixed;
        z-index: 9;
        top:85.5%;
        left:13.1%;
        border-radius: 99rem;
    }

    .button-next{
        background-color: #647DB1;
        height:3vh;
        width:3vh;
        position: fixed;
        left:12%;
        top:84%;
        z-index: 10;
        border-radius: 99rem;
    }
    #swiperBox{
        background-color: #fff;
        height:70%;
        width:100%;
        position:relative;
    }
    #swiperBox img{
        margin-top: 5vh;
        width:90%;
        height:40vh;
        -webkit-filter: drop-shadow(1px 8px 3px #999);
        filter: drop-shadow(1px 8px 3px #999)
    }
    #swiperBox button{
        color:#808DA5;
        width:25vh;
    }
    .panel{
        height:80vh;
        overflow-y:hidden;

    }
    .tobody td{
        height: 4.1rem;
        border:1px solid #DDDEE3;
    }
    .tobody{
        border-left:3px solid #CFD2E3;
        border-right:3px solid #CFD2E3;
    }
    .button-prev,
    .button-next{
        font-size:2rem
    }
    .faca{
        font-size:20px;
    }
    .st{
        font-weight:900; 
    }
    .container-fluid{
        overflow-y:hidden;
    }
    .dx{
        overflow-y:scroll;
        overflow-x:hidden;
        margin-top:2vh;
        height: 91%;
        border-bottom:2px solid #757E9D;
    }
    .Pspro{
        font-weight: lighter;
    }
    .dr{
        margin-top: 4vh;
    }
    .table{
        color:#7581A6;
        text-align: center;
    }
    .table th{
        font-size:1rem;
        font-weight:bold;
        border-bottom:2px solid #757E9D;
    }
     .table7{
         width:100%;
         margin-top:3rem;
        color:#7581A6;
        text-align: center;
    }
    .table7 th{
        margin-top: 3vh;
        font-size:1rem;
        font-weight:bold;
        border-bottom:2px solid #757E9D;
    }
    .tit_hr{
        color:#8596C1;
    }
    .hidden_big{
        position:absolute;
        display:none;
    }
    .myslide img{
        width:40%;
    }
    .malfunction{
        position: relative;
        overflow-y: hidden;
    }
    .container {
        margin: 1.5rem 2rem;
        background: #EAEEF7;
    }
    .card-body {
    width:100%;
    }
    .card-body{
        padding: 1rem 2rem;
    }
    .card-body th,
    td {
        color: #7D8DB6;
    }
    .card-content{
        min-height: 17rem;
        height: initial;
        min-width: 14rem;
    }
    .card-content img{
        height: 12rem;
        width: auto;
        max-width: 100%;
        margin: auto;
        left: 0;
        right: 0;
        display: block;
        min-width: 10rem;
    }
    .card-body tbody {
        display: block;
        height: 300px;
        overflow: auto;
        min-height: 24rem;
        overflow-y: scroll;
        border-bottom: #7D8DB6 solid .15rem;
    }

    .card-body tbody td {
        vertical-align:middle;
        border-color: rgb(199, 205, 219);
    }

    .card-body thead,
    .card-body tbody tr {
        display: table;
        width: 100%;
        table-layout: fixed;
    }

    .card-body thead {
        border-left-color: white;
        border-right-color: white;
        border-bottom: #7D8DB6 solid .15rem;
    }

    tr td:nth-child(1) {
        border-left: none;
    }

    tr td:nth-child(6) {
        border-right: none;
    }

    td button {
        background: #7D8DB6;
        color: #ffffff;
        box-shadow: 5px 5px 5px grey;
        margin-right: 5px;
    }

    button img {
        margin: 4px;
        float: left;
    }

    span {
        font-size: 14px;
        width:80px;
        text-align: center;
        font-weight: bold;
    }


    .card-group button {
        color: #4a75d1;
        display: block;
        margin: auto;
        box-shadow: 5px 5px 5px grey;
    }

    .card-group .card {
        background: #e1f2fc;
        margin: 15px;
    }

    i {
        float: right;
        margin-top: 0px;
        cursor: pointer;
    }
    .test{
        border:1px solid red;
    }
    .btnblue2 { 
        background-color: #8596C1;
        color: white;
        height: 2.1rem;
        width:14vh;
        margin-top: 0.1rem;
        margin-bottom: 0.5rem;
        overflow: hidden;
        font-size:0.6em;
    }
    .btnblue {
        background-color: #8596C1;
        color: white;
        height: 1.8rem;
        width:12vh;
        margin-top: 0.1rem;
        margin-bottom: 0.5rem;
        overflow: hidden;
        font-size:0.6em;
    }
    .bbut2{
        margin-top: 0.3rem;
        background-color: #8596C1;
        box-shadow: 5px 15px 5px #888888;
    }
    .bbut{
        margin-top: 0.3rem;
        background-color: #8596C1;
        height: 1rem;
        width:12vh; 
        box-shadow: 5px 15px 5px #888888;
    }
    .btnblue img{
        margin:0 auto;
    }
    .btnblue div{
        margin-top: -0.3rem;
    }
    *{
        font-family: '微軟正黑體';
    }
    .head{
        background: #6D80B8;
        height: 45px;
    }
    .head button{
        background-color: white;
        border: 0;
        cursor: pointer;
        position: relative;
        text-align: center;
        height: 30px;
        width: 30px;
        margin-top: -.5rem;
    }
    .head span{
        margin: auto;
        padding: 0;
        width: 100%;
        text-align: center;
        display: inline-block;
    }
    .modal-sm{
    min-width: 400px;

  }

.l-table{
    text-align: center;
    vertical-align: middle;
    border: 1px #aaaeb8 solid;
    height: 400px;
}
.l-table tr:nth-child(even){
	background-color:#D8DDEA;
	}
.l-table thead{
    background-color: #8092B8;
}
.l-table th{
    color: white;
}
.l-table tr th:nth-child(1) {
    width: 35%;
    text-align: center;
}

.l-table tr:nth-child(4) td {
    height: 200px;
    vertical-align: middle;
}


.r-table thead,
.r-table tbody tr {
    display: table;
    width: 100%;
    table-layout: fixed;
}

.r-table th{
    color: #6D80B8;
}

.r-th thead tr th:nth-child(1){
    width: 50%;
}

.r-th tbody tr td:nth-child(1){
    width: 50%;
}


.r-table tr td{
    vertical-align: middle;
    margin-top: 1vh;
    height: 5rem;
}

.r-table tr td:nth-child(1){
    vertical-align: middle;
}
.modal-dialog{
    margin-top: 10%;
}

body,

    .container {
        margin: 10px;
        background: #EAEEF7;
    }
    .card-body {
        height: 100%;
    }

    .card-body th,
    td {
        color: #7D8DB6;
    }
    .card-content{
        min-height: 17rem;
        height: initial;
    }
    .card-content img{
        height: 12rem;
        width: auto;
        max-width: 100%;
        margin: auto;
        left: 0;
        right: 0;
        display: block;
    }
    .card-body tbody {
        display: block;
        height: 300px;
        overflow: auto;
        min-height: 24rem;
    }

    .card-body tbody td {
        vertical-align:middle;
        border-color: rgb(199, 205, 219);
    }

    .card-body thead,
    .card-body tbody tr {
        display: table;
        width: 100%;
        table-layout: fixed;
    }

    .card-body thead {
        border-left-color: white;
        border-right-color: white;
    }

    tr td:nth-child(1) {
        border-left: none;
    }

    tr td:nth-child(6) {
        border-right: none;
    }

    td button {
        background: #7D8DB6;
        color: #ffffff;
        /* box-shadow: 5px 5px 5px grey; */
        margin-right: 5px;
    }

    button img {
		position:relative;
		top:-3px;
        float: left;
    }

    span {
        font-weight: bold;

    }

    .cardP {
       text-align: center;
    }

    .card-group button {
        color: #4a75d1;
        display: block;
        margin: auto;
        /* box-shadow: 5px 5px 5px grey; */
    }

    .card-group .card {
        background: #e1f2fc;
        margin: 15px;
    }

    .card-group .card-body {
        background: #fdfdff;
    }

    i {
        float: right;
        margin-top: 0px;
        cursor: pointer;
    }
    .btnblue {
        padding-top: 5px;padding-bottom: 5px; padding-right: 3px;padding-left: 3px;
        background-color: #8596C1;
        color: white;
        display: inline-block;

    }
    .btn-custom{
        color: #7A84A4 !important;
        background: linear-gradient( to top, #C4CAD9, #f4f6fb) !important;
        /* box-shadow: 0.1rem 0.1rem 0.2rem 0rem #a8b0c3 !important; */
    }
    .btn-custom2{
        font-weight: 900;
        width:23vh;
        color: #7A84A4 !important;
        background: linear-gradient( to top, #C4CAD9, #f4f6fb) !important;
        /* box-shadow: 0.1rem 0.1rem 0.2rem 0rem #a8b0c3 !important; */
    }
    .card-group > *{
        display: flex;
    }
    .slick-arrow{
        /* box-shadow: initial !important; */
        background: rgba(0, 0, 0, 0);
        border: none;
        max-width: 3rem;
    }
    .card-group > :first-child{
        flex: 1;
    }
    .card-group > :nth-child(2){
        flex: 10;
    }
    .card-group > :last-child{
        flex: 1;
    }
    .slick-prev::before{
        content: '←';
    }
    .slick-next:before{
        content: '→';
    }
    .slick-prev:before, .slick-next:before {
        font-family: 'slick';
        font-size: 2rem;
        line-height: 1;
        opacity: .75;
        color: #bbc7dd;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
    .bg1,
    .bg2,
    .bg3{
        margin-left:0vh;
        width:15vh;
        font-size:12px;
    }
    .btn-light{
        background: #fafafc !important;
    }
    .btn-light:hover{
        background: #f9f9fe !important;
    }
    .btn{
        font-family:Microsoft JhengHei;
        vertical-align: middle;
        font-size:12px;
    }
    
    textarea{
        width: 100%;
    }
    #modelId8 .modal-body,#modelId9 .modal-body{
        text-align: center;
    }
    .liCircle{
        width:3vh;
        height:3vh;
        background-color:#434b5d;
        margin-left:3vh;
    }
    .title{
        margin-left:1.2rem; 
        letter-spacing: 0.1rem;
        color:#65656D;
        font-size: 20px;
        font-weight: bolder;
    }
    #btn2{
        margin-top: -0.5rem;
    }
    .ReconTable tbody tr td:last-child{
        width: 3rem;

    }
    tbody tr td:nth-child(2),.ReviewTable td{
        font-size: 1rem;
    }
    .mayTable tbody tr td:nth-child(3){
    }
    .ReconTable h4,.descriptionTable h4{
        font-weight: 700;
    }
    .SuggesTable thead th{
        text-align: left;
    }
    .ml-2{
        vertical-align: middle;
    }
    .IMGmodelID5{
        height: 1.2rem; /*1.25 rem*/
        width: 1.2rem; /*1.25 rem*/
    }
    td button{
        box-shadow:none !important;
    }
    div button{
        box-shadow:none !important;
    }
    .column1{ width:15%;}
    .column2{ width:10%;}
    .column3{ text-align:center;}
    .column5{ width:20%;}
    .column6{ width:36%;}
}
@media (min-width: 768px) {
    .modal-xl {
        width: 90% !important;
        max-width:1200px !important;
    }
}
@media (min-width: 576px){
    .modal-dialog {
        max-width: 500px;
        margin: 1.75rem auto;
    }
}

</style>
