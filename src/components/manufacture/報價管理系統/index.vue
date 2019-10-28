<template>
    <div class="Cadata">
        <div class="main">
            <div class="container-fluid" style="overflow-y: hidden;">
                <div class="row" style="clear:both">
                    <div class="col-lg-5 col-12 content">

                        <!-- 左上圖 -->
                        <div onclick="Toggle('QuotationManagement')">
                            <span class="pl-3 font-weight-bold"><img class="mr-2" width="20"
                                    src="./img/list.png">報價管理系統</span>
                        </div>
                        <div class="collapse show" id="QuotationManagement">
                            <hr>
                            <div style="background-color: #EBEFF8; border: 1px #6096dd solid;">
                                <div class="container-fluid">
                                    <div class="row">
                                        <div class="col-md-12 col-12">
                                            <span class="blue font-weight-bold">報價資料：</span>
                                            <label class="custom-button mb-0">選擇檔案
                                                <input type="file" style="display: none;" />
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div class="container-fluid pt-0 pb-0">
                                    <div class="row">
                                        <div class="col-md-12 col-12">
                                            <hr>
                                        </div>
                                    </div>
                                </div>
                                <div style="overflow-x: auto;">
                                    <div class="container-fluid font-text-sm" style="min-width: 550px;">
                                        <div class="row">
                                            <div class="col-md-2 col-2 text-center">
                                                <span class="blue">日期</span>
                                            </div>
                                            <div class="col-md-2 col-2 text-center">
                                                <span class="blue">案號</span>
                                            </div>
                                            <div class="col-md-2 col-2 text-center">
                                                <span class="blue">圖面張數</span>
                                            </div>
                                            <div class="col-md-3 col-3 text-center">
                                                <span class="blue">交貨日期</span>
                                            </div>
                                            <div class="col-md-3 col-3 text-center">
                                                <span class="blue">檔案</span>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-2 col-2">
                                                <input type="text" value="" class="w-100 text-center" />
                                            </div>
                                            <div class="col-md-2 col-2">
                                                <input type="text" value="" class="w-100 text-center" />
                                            </div>
                                            <div class="col-md-2 col-2">
                                                <input type="number" value="1" class="w-100 text-center" />
                                            </div>
                                            <div class="col-md-3 col-3">
                                                <input type="text" value="" class="w-100 text-center" />
                                            </div>
                                            <div class="col-md-3 col-3">
                                                <input type="text" value="" class="w-100 text-center" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="container-fluid">
                                    <div class="row">
                                        <div class="col-md-9 col-12">
                                            <hr >
                                        </div>
                                        <div class="col-md-3 col-12">
                                            <button class="w-100 custom-button">
                                                <img class="mr-3" src="./img/upload-image.png" width="15">上傳
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div class="container-fluid">
                                    <div class="row">
                                        <div class="col-md-3 col-12 text-center">
                                            <img src="./img/icon-01.png" width="20"><span class="blue font-weight-bold">案號查詢：</span>
                                        </div>
                                        <div class="col-md-5 col-12">
                                            <input type="text" value="" class="w-100 text-center" />
                                        </div>
                                        <div class="col-md-4 col-12">
                                            <button class="w-100 custom-button">查詢</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <br>

                            <!-- 左下圖 -->
                            <div class="table-responsive-xl" style="height:35%; overflow-y: scroll;">
                                <table class="table text-center font-text-sm">
                                    <thead class="table-header">
                                        <tr>
                                            <th style="min-width: 70px;">編號</th>
                                            <th style="min-width: 100px;">日期</th>
                                            <th style="min-width: 100px;">案號</th>
                                            <th style="min-width: 100px;">圖面張數</th>
                                            <th style="min-width: 100px;">交貨日期</th>
                                            <th style="min-width: 70px;">檔案</th>
                                            <th style="min-width: 70px;">進度</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">001</th>
                                            <td>DSA00000001</td>
                                            <td>MMOP12</td>
                                            <td>2</td>
                                            <td>2019/08/27</td>
                                            <td><img src="./img/folder.png" width="20"></td>
                                            <td><img src="./img/check.png" width="20"></td>
                                        </tr>
                                        <tr>
                                            <th scope="row">002</th>
                                            <td>DSA00000002</td>
                                            <td>YOY787</td>
                                            <td>1</td>
                                            <td>2019/08/27</td>
                                            <td><img src="./img/folder.png" width="20"></td>
                                            <td><img src="./img/uncheck.png" width="20"></td>
                                        </tr>
                                        <tr>
                                            <th scope="row">003</th>
                                            <td>DSA00000003</td>
                                            <td>FORD401</td>
                                            <td>2</td>
                                            <td>2019/08/27</td>
                                            <td><img src="./img/folder.png" width="20"></td>
                                            <td><img src="./img/check.png" width="20"></td>
                                        </tr>
                                        <tr>
                                            <th scope="row">004</th>
                                            <td>DSA00000004</td>
                                            <td>FORD401</td>
                                            <td>2</td>
                                            <td>2019/08/27</td>
                                            <td><img src="./img/folder.png" width="20"></td>
                                            <td><img src="./img/check.png" width="20"></td>
                                        </tr>
                                        <tr>
                                            <th scope="row">005</th>
                                            <td>DSA00000005</td>
                                            <td>FORD401</td>
                                            <td>2</td>
                                            <td>2019/08/27</td>
                                            <td><img src="./img/folder.png" width="20"></td>
                                            <td><img src="./img/check.png" width="20"></td>
                                        </tr>
                                        <tr>
                                            <th scope="row">006</th>
                                            <td>DSA00000006</td>
                                            <td>FORD401</td>
                                            <td>2</td>
                                            <td>2019/08/27</td>
                                            <td><img src="./img/folder.png" width="20"></td>
                                            <td><img src="./img/check.png" width="20"></td>
                                        </tr>
                                        <tr>
                                            <th scope="row">007</th>
                                            <td>DSA00000007</td>
                                            <td>FORD401</td>
                                            <td>2</td>
                                            <td>2019/08/27</td>
                                            <td><img src="./img/folder.png" width="20"></td>
                                            <td><img src="./img/check.png" width="20"></td>
                                        </tr>
                                        <tr>
                                            <th scope="row">008</th>
                                            <td>DSA00000008</td>
                                            <td>FORD401</td>
                                            <td>2</td>
                                            <td>2019/08/27</td>
                                            <td><img src="./img/folder.png" width="20"></td>
                                            <td><img src="./img/check.png" width="20"></td>
                                        </tr>
                                        <tr>
                                            <th scope="row">009</th>
                                            <td>DSA00000009</td>
                                            <td>FORD401</td>
                                            <td>2</td>
                                            <td>2019/08/27</td>
                                            <td><img src="./img/folder.png" width="20"></td>
                                            <td><img src="./img/check.png" width="20"></td>
                                        </tr>
                                        <tr>
                                            <th scope="row">010</th>
                                            <td>DSA00000010</td>
                                            <td>FORD401</td>
                                            <td>2</td>
                                            <td>2019/08/27</td>
                                            <td><img src="./img/folder.png" width="20"></td>
                                            <td><img src="./img/check.png" width="20"></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-7 col-12 content">

                        <!-- 右上圖 -->
                        <div onclick="Toggle('OrderManagement')">
                            <span class="pl-3 font-weight-bold"><img class="mr-2" width="20"
                                    src="./img/list.png">訂單管理系統</span>
                        </div>
                        <div class="collapse show" id="OrderManagement">
                            <hr>
                            <div class="table-responsive-xl" style="height: calc(40vh); overflow-y: scroll;">
                                <table class="table text-center font-text-sm">
                                    <thead class="table-header">
                                        <tr>
                                            <th style="min-width: 70px;">編號</th>
                                            <th style="min-width: 100px;">日期</th>
                                            <th style="min-width: 100px;">訂單號碼</th>
                                            <th style="min-width: 100px;">交貨日期</th>
                                            <th style="min-width: 70px;">完成率</th>
                                            <th style="min-width: 100px;">完成日期</th>
                                            <th style="min-width: 100px;">圖面資訊</th>
                                            <th style="min-width: 70px;">交貨</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">001</th>
                                            <td>2019/08/27</td>
                                            <td>10809230001</td>
                                            <td>2019/08/27</td>
                                            <td>50%</td>
                                            <td>2019/08/27</td>
                                            <td><img src="./img/folder.png" width="20"></td>
                                            <td><img src="./img/uncheck.png" width="20"></td>
                                        </tr>
                                        <tr>
                                            <th scope="row">002</th>
                                            <td>2019/08/27</td>
                                            <td>10809230002</td>
                                            <td>2019/08/27</td>
                                            <td>50%</td>
                                            <td>2019/08/27</td>
                                            <td><img src="./img/folder.png" width="20"></td>
                                            <td><img src="./img/uncheck.png" width="20"></td>
                                        </tr>
                                        <tr>
                                            <th scope="row">003</th>
                                            <td>2019/08/27</td>
                                            <td>10809230003</td>
                                            <td>2019/08/27</td>
                                            <td>50%</td>
                                            <td>2019/08/27</td>
                                            <td><img src="./img/folder.png" width="20"></td>
                                            <td><img src="./img/uncheck.png" width="20"></td>
                                        </tr>
                                        <tr>
                                            <th scope="row">004</th>
                                            <td>2019/08/27</td>
                                            <td>10809230004</td>
                                            <td>2019/08/27</td>
                                            <td>50%</td>
                                            <td>2019/08/27</td>
                                            <td><img src="./img/folder.png" width="20"></td>
                                            <td><img src="./img/uncheck.png" width="20"></td>
                                        </tr>
                                        <tr>
                                            <th scope="row">005</th>
                                            <td>2019/08/27</td>
                                            <td>10809230005</td>
                                            <td>2019/08/27</td>
                                            <td>50%</td>
                                            <td>2019/08/27</td>
                                            <td><img src="./img/folder.png" width="20"></td>
                                            <td><img src="./img/uncheck.png" width="20"></td>
                                        </tr>
                                        <tr>
                                            <th scope="row">006</th>
                                            <td>2019/08/27</td>
                                            <td>10809230006</td>
                                            <td>2019/08/27</td>
                                            <td>50%</td>
                                            <td>2019/08/27</td>
                                            <td><img src="./img/folder.png" width="20"></td>
                                            <td><img src="./img/uncheck.png" width="20"></td>
                                        </tr>
                                        <tr>
                                            <th scope="row">007</th>
                                            <td>2019/08/27</td>
                                            <td>10809230007</td>
                                            <td>2019/08/27</td>
                                            <td>50%</td>
                                            <td>2019/08/27</td>
                                            <td><img src="./img/folder.png" width="20"></td>
                                            <td><img src="./img/uncheck.png" width="20"></td>
                                        </tr>
                                        <tr>
                                            <th scope="row">008</th>
                                            <td>2019/08/27</td>
                                            <td>10809230008</td>
                                            <td>2019/08/27</td>
                                            <td>50%</td>
                                            <td>2019/08/27</td>
                                            <td><img src="./img/folder.png" width="20"></td>
                                            <td><img src="./img/uncheck.png" width="20"></td>
                                        </tr>
                                        <tr>
                                            <th scope="row">009</th>
                                            <td>2019/08/27</td>
                                            <td>10809230009</td>
                                            <td>2019/08/27</td>
                                            <td>50%</td>
                                            <td>2019/08/27</td>
                                            <td><img src="./img/folder.png" width="20"></td>
                                            <td><img src="./img/uncheck.png" width="20"></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <br>

                            <!-- 左下圖 -->
                            <div style="background-color: #EBEFF8; border: 1px #6096dd solid;">
                                <div class="container-fluid">
                                    <div class="row">
                                        <div class="col-md-12 col-12">
                                            <span class="blue font-weight-bold">訂單資料：</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="container-fluid pt-0 pb-0">
                                    <div class="row">
                                        <div class="col-md-12 col-12">
                                            <hr >
                                        </div>
                                    </div>
                                </div>
                                <div style="overflow-x: auto;">
                                    <div class="container-fluid font-text-sm" style="min-width: 550px;">
                                        <div class="row">
                                            <div class="col-md-2 col-2 text-center">
                                                <span class="blue">日期</span>
                                            </div>
                                            <div class="col-md-3 col-3 text-center">
                                                <span class="blue">訂單號碼</span>
                                            </div>
                                            <div class="col-md-2 col-2 text-center">
                                                <span class="blue">案號</span>
                                            </div>
                                            <div class="col-md-2 col-2 text-center">
                                                <span class="blue">圖面張數</span>
                                            </div>
                                            <div class="col-md-3 col-3 text-center">
                                                <span class="blue">交貨日期</span>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-2 col-2">
                                                <input type="text" value="" class="w-100 text-center" />
                                            </div>
                                            <div class="col-md-3 col-3">
                                                <input type="text" value="" class="w-100 text-center" />
                                            </div>
                                            <div class="col-md-2 col-2">
                                                <input type="number" value="1" class="w-100 text-center" />
                                            </div>
                                            <div class="col-md-2 col-2">
                                                <input type="text" value="" class="w-100 text-center" />
                                            </div>
                                            <div class="col-md-3 col-3">
                                                <input type="text" value="" class="w-100 text-center" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="container-fluid">
                                    <div class="row">
                                        <div class="col-md-2 col-12"><span class="col-md-1 blue font-weight-bold">圖面檔案：</span>
                                        </div>
                                        <div class="col-md-10 col-12 text-left">
                                            <label class="custom-button mb-0">選擇檔案
                                                <input type="file" style="display: none;" />
                                            </label>
                                            <input type="text" value="" />
                                        </div>
                                    </div>
                                </div>
                                <div class="container-fluid">
                                    <div class="row">
                                        <div class="col-md-2">
                                            <span class="col-md-1 col-12 blue font-weight-bold">圖面BOM：</span>
                                        </div>
                                        <div class="col-md-10 col-12 text-left">
                                            <label class="custom-button mb-0">選擇檔案
                                                <input type="file" style="display: none;" />
                                            </label>
                                            <input type="text" value="" />
                                        </div>
                                    </div>
                                </div>
                                <div class="container-fluid">
                                    <div class="row">
                                        <div class="col-md-9 col-12">
                                            <hr>
                                        </div>
                                        <div class="col-md-3 col-12">
                                            <button class="w-100 custom-button">
                                                <img class="mr-3" src="./img/upload-image.png" width="15">上傳
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div class="container-fluid">
                                    <div class="row">
                                        <div class="col-md-3 col-12 text-center">
                                            <img src="./img/icon-01.png" width="20"><span class="blue font-weight-bold">訂單號碼：</span>
                                        </div>
                                        <div class="col-md-5 col-12">
                                            <input type="text" value="" class="w-100 text-center" />
                                        </div>
                                        <div class="col-md-4 col-12">
                                            <button class="w-100 custom-button">查詢</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    <!-- 側邊欄 -->
    <div id="hide">
        <router-link to="waterlevel"><img src="./img/sideicon1.png" height="30" width="30"></router-link>  
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
    <div id="menu1" class="hidden-menu" onclick="javascript:location.href='../power_analysis/UI-CNXx4.html'"><i class="material-icons">radio_button_checked</i><span>能源分析</span></div>
    <div id="menu2" class="hidden-menu" onclick="javascript:location.href='../failure_analysis/UI-CNXx4.html'"><i class="material-icons">radio_button_checked</i>故障統計</div>
    <div id="menu3" class="hidden-menu" onclick="javascript:location.href='../機台分析/index.html'"><i class="material-icons">radio_button_checked</i>機台比較</div>
    <div id="menu4" class="hidden-menu" onclick="javascript:location.href='../報價管理系統/index.html'"><i class="material-icons">radio_button_checked</i>產能數據分析</div>
    </div>
</template>
<script>
// import $ from 'jquery'
// function Toggle(toggleID) {
//         if (window.innerWidth < 576) {
//             $("#" + toggleID).collapse('toggle');
//         }
//     }
//     $(document).ready(function() {
//         if (window.innerWidth < 576) {
//             $("#OrderManagement").collapse('hide');
//         }
// });
export default {
    methods: {
        // hideside:function() {
        //     [...document.getElementById('hide').children].forEach((child, i) => {
        //         child.addEventListener('mouseover', () => {
        //             [...document.getElementsByClassName('hidden-menu')].forEach((that) => {
        //                 that.style.display = 'none'
        //             })
        //             document.getElementById(`menu${i+1}`).style.display = 'block'
        //         })
        //     });
        //     this.addEventListener('click', () => {
        //         if (event.toElement.hide !== 'hide') {
        //             [...document.getElementsByClassName('hidden-menu')].forEach((that) => {
        //                 that.style.display = 'none'
        //             })
        //         }
        //     })
        // },
    },
}
</script>
<style>
@import "style/index.css";  
@import "../assets/css/icon.css"; 
.Cadata{
  position: relative;
  height:75%;
  overflow-y: scroll;
}
.main{
    clear:both;
}
</style>