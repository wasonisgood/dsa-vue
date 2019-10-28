<template>
  <div class="container-fluid overy">
    <div class="row ml-2 mt-1">
      <div class="col-lg-4">
        <div class="card" style="height:61.3rem;">
          <div id="mac-collapse-1" class="row title-header ml-3 mr-3 mt-2" style="border-bottom:1px solid #C6CAD5">
            <div class="col text-left justify-content-center">
              <div>
                <img class="mr-2 align-self-center" src="./img/icon-01.png" width="23" height="23">
                <span class="title">健康診斷分析</span>
              </div>
            </div>
            <div class="col align-self-center justify-content-center text-right mb-3" style="width: 6vw;">
              <select  value="GO" name="menu" style="font-size:10px" class="select selectpicker healthAnalysis-select text-color-blue text-center">
                <option selected="selected" value="#">NXW 1020 A</option>
                <option value="#">NXV 600 A</option>
              </select>
            </div>
          </div>
          <div id="mac-target-1" class="col card-body">
            <div class="col text-left justify-content-center">
              <div class="health_tit mt-3">
                <img class="align-self-center ml-2 img" src="@/assets/tool/Run.png" width="20" height="20">
                <div style="margin-top:-1.45rem;margin-left:2.6rem;">健康狀態</div>
              </div>
            </div>
            <div class="row" style="font-size:13px;">
              <div class="col-lg-6 text-left justify-content-center imgset">
                <img class="align-self-center ml-4" src="@/assets/tool/ui-01.png" style="width: 30vh; height: 33vh;" >
              </div>
              <div class="col-lg-6 text-center justify-content-center mt-4 numvi">
                <div class="leftcol">
                  <img class="align-self-center mr-1" src="@/assets/tool/dount.png" width="20" height="20">錯誤判斷合計數
                  <div class="leftfont">0</div>
                </div>
                <div class="leftcol">
                  <img class="align-self-center mr-1" src="@/assets/tool/dount.png" width="20" height="20">正常判斷合計數
                  <div class="leftfont">0</div>
                </div>
                <div class="leftcol">
                  <img class="align-self-center mr-1" src="@/assets/tool/dount.png" width="20" height="20">警告判斷合計數
                  <div class="leftfont">5</div>
                </div>
                <div class="leftcol" style="background-color: #eaeef8; height: 3.5vh; width: 7.5vw; border: 1px #6a7cb1 solid;margin-left:9vh;">
                  <div style="height:3vh;margin-top:0.5rem">運送狀態:取料中</div>
                </div>
              </div>
            </div>
            <div class="row text-center justify-content-center mt-4 ml-2 mr-2" style="border-bottom:1px solid #CACBCC;">
              <div class="col">
                <div class="row tble" style="border-top:1px solid #CFD6E3;">
                  <div class="col th">
                    <div style="margin-top:1vh;">診段項目</div>
                  </div>
                  <div class="col-3 th">
                    <div style="margin-top:1vh;">健康狀態</div>
                  </div>
                  <div class="col th">
                    <div style="margin-top:1vh;">診斷說明</div>
                  </div>
                </div>
                <div class="row " style="background-color:#FBFCFE;" v-for="item in table">
                  <div class="col td"><div>{{item.diag}}</div></div>
                  <div class="col-3 td" style="border-left:1px solid #E6E7E8;border-right:1px solid #E6E7E8;"><div>{{item.health}}</div></div>
                  <div class="col td"><div>{{item.des}}</div></div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col text-right" style="margin-bottom:-1vh;">
                <button class="btnblue">報表輸出</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-8" style="overflow-y:scroll;height:1000px;">
        <div class="row">
          <div class="col-lg-6">
            <div class="panel">
              <div id="mac-collapse-2" class="row ml-3 mr-3 mt-2 title-header" style="border-bottom:1px solid #C6CAD5">
                <div class="col text-left justify-content-center">
                  <div class="mb-3">
                    <img class="mr-2 align-self-center" src="./img/icon2.png" width="23">
                     <span class="title">今日運作狀態分析</span>
                  </div>
                </div>
              </div>
              <div id="mac-target-2" class="row text-center card-body">
                <div class="col-5">
                  <div class="piechartBorder mt-5">
                    <div id="piechartname" class="mb-2 mt-2" style="border-bottom:1px solid #D5D9E3;"><span style="font-size:13pt;font-weight:lighter;" class="">合計時間</span></div>
                    <div id="piecharttime"><span style="font-size:15pt;font-weight:lighter;" class="">0 小時 0 分</span></div>
                  </div>
                </div>
                <div class="col-7">
                  <div id="container-speed" style="width:280px;margin-left:3vh;"></div>
				  <div id="container-speed-mobile"></div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="panel">
              <div id="mac-collapse-3" class="row title-header ml-3 mr-3 mt-2" style="border-bottom:1px solid #C6CAD5">
                <div class="col text-left justify-content-center">
                  <div class="mb-3">
                    <img class="mr-2 align-self-center" src="./img/icon3.png" width="23">
                    <span class="title ">刀具壽命分析</span>
                  </div>
                </div>
              </div>
              <div id="mac-target-3" class="row text-center card-body">
                <div class="col ">
					<div class="text-left ml-4 mt-3 mb-3" style="font-size:10px;color:#B8C2D7;">刀具損耗率</div>
                	<div class="mr-5 ml-3">
						<vue-highcharts id="highvue-mobile" class="" :options="options" ref="barChart" style="height:29vh;" ></vue-highcharts>
						<div style="width:8vh;height:1vh;background-color:#fff;position:absolute;top:96%;left:75%;"></div>
					</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row mt-3">
          <div class="col-lg-12">
            <div class="panel">
              <div id="mac-collapse-4" class="row title-header ml-3 mr-3 mt-2" style="border-bottom:1px solid #C6CAD5">
                <div class="col text-left justify-content-center">
                  <div class="mb-3">
                    <img class="mr-2 align-self-center" src="./img/icon2.png" width="23">
                    <span class="title ">加工數據分析(不同區間比較)</span>
                  </div>
                </div>
              </div>
              <div id="mac-target-4" class="row card-body">
                <div class="col-lg-2">
                  <div class="row">
                    <div class="col ">
						<div class="ma-onetable mt-4 mb-4 text-center justify-content-center">
							<div style="color:#697BB0;border-bottom: 2px #c0c3ca solid;font-size:12px;">
								<div class="text-left mr-3 ml-2 mt-2 mb-2">分析設定</div>
							</div>
							<div class=" mr-3 ml-3 mb-4 mt-4">
								<div>比較項目(加工數據)</div>
								<div class="mt-3 mb-3">
									<select id="itemSelect_data" class="ma-select" >
										<option value="1">進給速度</option>
										<option value="2">主軸轉速</option>
										<option value="3">主軸負載</option>
										<option value="4">X軸負載</option>
										<option value="5">Y軸負載</option>
										<option value="6">Z軸負載</option>
										<option value="7">A軸負載</option>
									</select>
								</div>
								<div>比較項目(生產時間))</div>
								<div class="mt-2 mb-2">
									<select class="ma-select" id="itemSelect_data" >
										<option value="2019-04-15 16:00">2019-04-15 16:00</option>
										<option value="2019-04-16 16:00">2019-04-16 16:00</option>
									</select>
								</div>
								<div class="mb-2">比較次數</div>
								<div class="mb-2" id="showTime"></div>
								<div class="mb-2">前<input type="text" class="ml-2 mr-2" style="font-size:11px;width:4vh;text-align:center;" value="7">次</div>
								<div><button class="ma-but">產出分析圖</button></div>
							</div>
						</div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-10">
                  <div id="container-data" class="mt-4"></div>
				  <div id="container-data-mobile" class="mt-4"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
		<div class="row mt-3">
          <div class="col-lg-12">
            <div class="panel mb-3">
              <div id="mac-collapse-5" class="row title-header ml-3 mr-3 mt-2" style="border-bottom:1px solid #C6CAD5">
                <div class="col text-left justify-content-center">
                  <div class="mb-3">
                    <img class="mr-2 align-self-center" src="./img/icon2.png" width="23">
                    <span class="title ">加工數據分析(相同區間比較)</span>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-lg-2">
                  <div id="mac-target-5" class="row card-body">
                    <div class="col">
						<div class="ma-onetable mt-4 mb-4 text-center justify-content-center">
							<div style="color:#697BB0;border-bottom: 2px #c0c3ca solid;font-size:12px;">
								<div class="text-left mr-3 ml-2 mt-2 mb-2">分析設定</div>
							</div>
							<div class=" mr-3 ml-3 mb-4 mt-4">
								<div>比較項目1(加工數據)</div>
								<div class="mt-3 mb-3">
									<select id="itemSelect1" class="ma-select">
										<option value="1">進給速度</option>
										<option value="2">主軸轉速</option>
										<option value="3">主軸負載</option>
										<option value="4">X軸負載</option>
										<option value="5">Y軸負載</option>
										<option value="6">Z軸負載</option>
										<option value="7">A軸負載</option>
									</select>
								</div>
								<div>比較項目2(加工數據)</div>
								<div class="mt-3 mb-3">
									<select id="itemSelect2" class="ma-select">
										<option value="2">主軸轉速</option>
										<option value="1">進給速度</option>
										<option value="3">主軸負載</option>
										<option value="4">X軸負載</option>
										<option value="5">Y軸負載</option>
										<option value="6">Z軸負載</option>
										<option value="7">A軸負載</option>
									</select>
								</div>
								<div>比較項目(生產時間)</div>
								<div class="mt-3 mb-3">
									<select name="time" id="localTime" class="ma-select">
										<option value="2019-04-15 16:00">2019-04-15 16:00</option>
										<option value="2019-04-16 16:00">2019-04-16 16:00</option>
									</select>
								</div>
								<div><button class="ma-but">產出分析圖</button></div>
							</div>
						</div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-10">
                  <div class="mt-4" id="container-same"></div>
				  <div id="container-same-mobile" class="mt-4"></div>
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
import * as d3 from 'd3'
import Highcharts from 'highcharts';
import $ from 'jquery'
import VueHighcharts from './vue-highcharts-master/src/VueHighcharts.vue'
import {BarChart} from 'highcharts-vue'
const data = {
  chart: {
	type: 'column',
	events:{
		load:function(){
			var series = this.series[0],
				chart = this;
			setInterval(function(){
				var DSA1 = Math.floor(Math.random()*20*5)+1;
				var DSA2 = Math.floor(Math.random()*20*5)+1;
				var DSA3 = Math.floor(Math.random()*20*5)+1;
				var DSA4 = Math.floor(Math.random()*20*5)+1;
				var DSA5 = Math.floor(Math.random()*20*5)+1;
				var DSA6 = Math.floor(Math.random()*20*5)+1;
				var DSA7 = Math.floor(Math.random()*20*5)+1;
				var DSA8 = Math.floor(Math.random()*20*5)+1;
				series.setData([DSA1,DSA2,DSA3,DSA4,DSA5,DSA6,DSA7,DSA8]);
			},1000)
		}
	}
  },
  title: {
    text:null,
  },
  subtitle: {
  },
  xAxis: {
		categories: [
			'DSA001',
			'DSA002',
			'DSA003',
			'DSA004',
			'DSA005',
			'DSA006',
			'DSA007',
			'DSA008'
	  ],
      crosshair: true,
      labels:{
        style:{
		  color:'#6678A8',
		  fontSize: '10px'
        }
      }
		},
		yAxis: {
      tickAmount: 6,
			min: 0,
			max:100,
			title: {
				text: null
      },
      gridLineColor: '#BAC3D1',
      labels:{
		format:'{value}%',
        style:{
          color:'#6678A8'
		}
      }
    },
    legend: {
		enabled: false
	},
    tooltip: {
			borderWidth: 3,
			shape:"square",
			headerFormat: '<span style="font-size:10px"><b>{point.key}:</b></span><table>',
			pointFormat: '<td style="padding:0"><b>{point.y:.0f} 次</b></td></tr>',
		},
		plotOptions: {
			column: {
				colorByPoint:true,
				borderRadiusTopLeft: 30,
				borderRadiusTopRight: 30,
				stacking: 'null'
			},
		},
		series: [{
      		name:'data',
			type: 'column',
			data: [
				{y:10,color:'#8895C0'},
				{y:20,color:'#45AEA5'},
				{y:3,color:'#18AFC6'},
				{y:12,color:'#8895C0'},
				{y:7,color:'#45AEA5'},
				{y:5,color:'#18AFC6'},
				{y:8,color:'#8895C0'},
				{y:3,color:'#45AEA5'},]
			}]
  }
export default {
  mounted(){
	//收合
	if(window.screen.width<=1000){
	var headers = document.getElementsByClassName("title-header");
        for(var i=0; i<headers.length; i++){
            headers[i].addEventListener('click', function(){
                var targetID, chartID = null, type;
                var Yoffset = this.parentElement.parentElement.parentElement.offsetHeight; //調整捲動的高度
                switch(this.id){
                    case "mac-collapse-1":
                        targetID = "mac-target-1";
                        Yoffset = 0;
                        break;
                    case "mac-collapse-2":
                        targetID = "mac-target-2";
                        chartID = "container-speed-mobile";
                        break;
                    case "mac-collapse-3":
                        targetID = "mac-target-3";
                        chartID = "highvue-mobile";
                        Yoffset *= 2;
                        break;
                    case "mac-collapse-4":
						targetID = "mac-target-4";
						chartID = "container-data-mobile";
                        Yoffset *= 3;
                        break;
                    case "mac-collapse-5":
						targetID = "mac-target-5";
						chartID = "container-same-mobile";
                        Yoffset *= 4;
                        break;
                }		
                var target = document.getElementById(targetID);
                var accordion = document.getElementsByClassName("card-body");
                for(var i=0; i<accordion.length; i++){
                    //先將其他元素收合
                    if(accordion[i].id != targetID){
                        var collapse_element = document.getElementById(accordion[i].id);
                        collapse_element.style.display = "none";
                    }
                }
                window.scrollBy(0, 0);
                //開展->收合; 收合->展開
                if(target.style.display == "none"){
                    target.style.display = "block";
                    if(chartID != null){ draw(chartID); }
                    window.scrollBy(0, Yoffset);
                }
                else{
                    target.style.display = "none";
				}
            })
		}
		

        // click event for bottom navigator
        var navitems = document.getElementsByClassName("bottom-navitem");
        for(var i=0; i<navitems.length; i++){
            navitems[i].addEventListener('click', function(){
                var targetID, chartID = null;
                var temp = document.getElementsByClassName("title-header")
                var Yoffset;
                switch(this.id){
                    case "navitem-1":
                        targetID = "mac-target-1";
                        Yoffset = 0;
                        break;
                    case "navitem-2":
                        targetID = "mac-target-2";
                        chartID = "container-speed-mobile";
                        Yoffset = temp[1].parentElement.parentElement.parentElement.offsetHeight; //調整捲動的高度
                        break;
                    case "navitem-3":
                        targetID = "mac-target-3";
                        chartID = "highvue-mobile";
                        Yoffset = temp[2].parentElement.parentElement.parentElement.offsetHeight; //調整捲動的高度
                        Yoffset *= 2;
                        break;
                    case "navitem-4":
						targetID = "mac-target-4";
						chartID = "container-data-mobile";
                        Yoffset = temp[3].parentElement.parentElement.parentElement.offsetHeight; //調整捲動的高度
                        Yoffset *= 3;
                        break;
                    case "navitem-5":
						targetID = "mac-target-5";
						chartID = "container-same-mobile";
                        Yoffset = temp[4].parentElement.parentElement.parentElement.offsetHeight; //調整捲動的高度
                        Yoffset *= 4;
                        break;
                }		
                var target = document.getElementById(targetID);
                var accordion = document.getElementsByClassName("card-body");
                for(var i=0; i<accordion.length; i++){
                    //先將其他元素收合
                    if(accordion[i].id != targetID){
                        var collapse_element = document.getElementById(accordion[i].id);
                        collapse_element.style.display = "none";
                    }
                }
                window.scrollBy(0, 0);
                //開展->收合; 收合->展開
                if(target.style.display == "none"){
                    target.style.display = "block";
                    if(chartID != null){ draw(chartID); }
                    window.scrollBy(0, Yoffset);
                }
                else{
                    target.style.display = "none";
                }	
            })
		}
	}

    //chart4
    let LineChartCNC = (call_php_str, btn_select_CNC_db, btn_select_CNC_sp) =>{
    var id;
    if(window.innerWidth>768){
        id = 'container-same';
    }else{
        id = 'container-same-mobile';
    }
    // var call_php_str='CNC1_SP_2.php';
    // var btn_select_CNC_db = 'CNC_proc_data_1';
    // var btn_select_CNC_sp = 'CNC1';
    call_php_str = `../php/${call_php_str}`
    var plot_container_data_2d = [];
    var btn_Y1_val;
    var btn_Y1_num;
    var btn_Y2_val;
    var btn_Y2_num;
    var btn_Y1_CHS;
    var btn_Y2_CHS;
    var btn_select_time;
    var data_fake_1;
    var data_fake_2;

setInterval(function(){
	data_fake_1.shift();
	data_fake_2.shift();
	data_fake_1.push(Math.random*200);
	data_fake_2.push(Math.random*200);
	chart.series[0].update({data: data_fake_1});
	chart.series[1].update({data: data_fake_2});
}, 1000);


// 假資料, 用於initial顯示
data_fake_1 =
	[190, 192, 194, 196, 198, // 1-5
		200, 202, 204, 206, 208, // 6-10
		210, 212, 214 , 216, 218, // 11-15
		220, 222, 224 , 226, 228, // 16-20
		231, 232, 233 , 234, 235, // 21-25
		236, 237, 238 , 239, 240, //26-30
		241, 242, 243, 244, 245, // 31-35
		246, 247, 248 , 249, 250, // 36-40
		250, 249, 248 , 247, 246, // 41-45
		245, 244, 243 , 242, 241, // 46-50
		240, 239, 238 , 237, 236, // 51-55
		235, 234, 233 , 232, 231, // 56-60
		228, 226, 224 , 222, 220, // 61-65
		218, 216, 214 , 212, 210, // 66-70
		208, 206, 204 , 202, 200, // 71-75
		202, 204, 206 , 208, 210, // 76-80
		207, 204, 201 , 198, 195, // 81-85
		192, 189, 186 , 183, 180, // 86-90
		177, 174, 171 , 168, 165, // 91-95
		162, 158, 155 , 152, 150 // 96-100
	];


data_fake_2 =
	[190, 192, 194, 196, 198, // 1-5
		200, 202, 204, 206, 208, // 6-10
		210, 212, 214 , 216, 218, // 11-15
		220, 222, 224 , 226, 228, // 16-20
		231, 232, 233 , 234, 235, // 21-25
		236, 237, 238 , 239, 240, //26-30
		241, 242, 243, 244, 245, // 31-35
		246, 247, 248 , 249, 250, // 36-40
		250, 249, 248 , 247, 246, // 41-45
		245, 244, 243 , 242, 241, // 46-50
		240, 239, 238 , 237, 236, // 51-55
		235, 234, 233 , 232, 231, // 56-60
		228, 226, 224 , 222, 220, // 61-65
		218, 216, 214 , 212, 210, // 66-70
		208, 206, 204 , 202, 200, // 71-75
		202, 204, 206 , 208, 210, // 76-80
		207, 204, 201 , 198, 195, // 81-85
		192, 189, 186 , 183, 180, // 86-90
		177, 174, 171 , 168, 165, // 91-95
		162, 158, 155 , 152, 150 // 96-100
	];


var chart = Highcharts.chart(id, {
	chart: {
		type: 'spline',
		backgroundColor: "#ffffff00"
	},
	title: {
		text: null
	},
	subtitle: {
		text: null
	},
	credits: {
		enabled: false
	},
	legend: {
		symbolHeight: 12,
		symbolWidth: 12,
		symbolRadius: 6
	},
	xAxis: {
		min: 0,
		max: 100,
		labels: {
			format: '{value} %'
		},
		crosshair: true,
		showFirstLabel: false, //第一個
		tickAmount: 5,
	},
	yAxis: [{
		min: 0, // y1
		max: 300,
		title: {
			text: '項目1',
			align: 'high',
			rotation: 0,
			stroke: '#f24',
			y: 0,
			style: {
				color:'#7280B3',
			}
		},
		labels: {
			style: {
				color:'#7280B3' // y1 #05DBB7
			}
		},
		tickAmount: 7
	},
		{
			min: 0, // y2
			max: 360,
			title:{
				text: '項目2',
				align: 'high',
				rotation: 0,
				y: 0,

				style: {
					color:'#7280B3',
				}
			}
			,
			labels: {
				style: {
					color:'#7280B3' // y2
				}
			},
			opposite: true, // y2
			tickAmount: 4
		}],
	plotOptions: {

		series: {
			marker: {
				enabled: false
			},
			label: {
				connectorAllowed: false
			},
			//pointStart: 2010
		}
	},
	series: [{
		name: 'Y0', //y1
		data: data_fake_1,
		color:'#05DBB7',
		yAxis: 0 // 指定 Y1軸
	}, {
		name: 'Y1', //y2
		data: data_fake_2 ,
		color:'#7280B3',
		yAxis: 1 // 指定 Y2軸
	}],
	responsive: {
		rules: [{
			condition: {
				//maxWidth: 500
			},
			chartOptions: {
				legend: {
					enabled: false
				},
			}
		}]
	}
});


// 相同區間, ajax
$("#btn_send_same").click(function(){ // when button press


	btn_Y1_val = $("#itemSelect1").val(); // Feed / SpeedS
	btn_Y1_num = parseInt(btn_Y1_val);
	//console.log(btn_Y1_num);


	btn_Y2_val = $("#itemSelect2").val(); // Feed / SpeedS
	btn_Y2_num = parseInt(btn_Y2_val);
	//console.log(btn_Y2_num);

	btn_select_time = $("#ProductionTime").val(); // 2019-07-22T16:11
	//console.log(btn_select_time);


	// Function Declare
	var GetAjaxSQL_btn = function returnGetSQL_btn(){
		var returnValue;


		// Stored Procedure
		$.ajax({
			async: false,
			tradition: true,
			url: call_php_str, // 'CNC1_SP_2.php'
			type: "POST",
			data: {
				'select_y1': btn_Y1_num, // Feed/ SpeedS
				'select_y2': btn_Y2_num, // Feed/ SpeedS
				'select_time': btn_select_time, // 2019-07-22T16:11
				'select_CNC_sp': btn_select_CNC_sp, // 'CNC1'
				'select_CNC_db': btn_select_CNC_db, // 'CNC_proc_data_1'
			},
			dataType:"JSON",
			success: function(Jdata){
				console.log(Jdata);
				var str_ydata_init = JSON.stringify(Jdata); //json-string
				//console.log(str_ydata_init);

				// Get Y1
				var str_split = str_ydata_init.split('"Y1":["');
				var y1_split_1 = str_split[1];
				var y1_split_2 = y1_split_1.split('"]}');
				//console.log(y1_split_2[0]);


				// Get Y2
				var y2_split_1 = y1_split_2[1].split('"Y2":["');
				//console.log(y2_split_1[1]);

				// Y1 + Y2
				var N_ALL_array = new Array();
				N_ALL_array[0] = y1_split_2[0].split('","').map(Number); // Y1
				N_ALL_array[1] = y2_split_1[1].split('","').map(Number); // Y2

				console.log(N_ALL_array);

				returnValue = N_ALL_array;
			},
			error: function(xhr, ajaxOptions, thrownError) {
				console.log(xhr.responseText);
				returnValue = [];
			}


		});


		return returnValue;
	}


	// Function Call
	plot_container_data_2d = GetAjaxSQL_btn();
	//console.log(plot_container_data_2d);


	// update series_name
	switch (btn_Y1_num){
		case 1: btn_Y1_CHS = '進給速度'; break;
		case 2: btn_Y1_CHS = '主軸轉速'; break;
		case 3: btn_Y1_CHS = '主軸轉速'; break;
		case 4: btn_Y1_CHS = 'X軸負載'; break;
		case 5: btn_Y1_CHS = 'Y軸負載'; break;
		case 6: btn_Y1_CHS = 'Z軸負載'; break;
		case 7: btn_Y1_CHS = 'A軸負載'; break;
	}
	switch (btn_Y2_num){
		case 1: btn_Y2_CHS = '進給速度'; break;
		case 2: btn_Y2_CHS = '主軸轉速'; break;
		case 3: btn_Y2_CHS = '主軸轉速'; break;
		case 4: btn_Y2_CHS = 'X軸負載'; break;
		case 5: btn_Y2_CHS = 'Y軸負載'; break;
		case 6: btn_Y2_CHS = 'Z軸負載'; break;
		case 7: btn_Y2_CHS = 'A軸負載'; break;
	}


	chart.series[0].update({
		data: plot_container_data_2d[0],
		name: btn_Y1_CHS,
	});
	chart.series[1].update({
		data: plot_container_data_2d[1],
		name: btn_Y2_CHS,
	});


	var update_Y_MAX = new Array();
	update_Y_MAX[0] = Math.max(...plot_container_data_2d[0]) * 1.05; // Y0 MAX
	update_Y_MAX[1] = Math.max(...plot_container_data_2d[1]) * 1.05; // Y1 MAX


	// Update y-max
	chart.yAxis[0].update({
		max: update_Y_MAX[0], // Y0 MAX
	});
	chart.yAxis[1].update({
		max: update_Y_MAX[1], // Y1 MAX
		//opposite: true,
	});


	chart.redraw();


});

}
    LineChartCNC('CNC_SP_2.php','CNC_proc_data_2','CNC1')
    //chart3
    var id;
if(window.innerWidth>768){
	id = 'container-data';
}else{
	id = 'container-data-mobile';
}
setInterval(function(){
	data_fake_1.shift();
	data_fake_2.shift();
	data_fake_3.shift();
	data_fake_4.shift();
	data_fake_5.shift();
	data_fake_6.shift();
	data_fake_7.shift();
	data_fake_1.push(Math.random*200);
	data_fake_2.push(Math.random*200);
	data_fake_3.push(Math.random*200);
	data_fake_4.push(Math.random*200);
	data_fake_5.push(Math.random*200);
	data_fake_6.push(Math.random*200);
	data_fake_7.push(Math.random*200);
	chart.series[0].update({data: data_fake_1});
	chart.series[1].update({data: data_fake_2});
	chart.series[2].update({data: data_fake_3});
	chart.series[3].update({data: data_fake_4});
	chart.series[4].update({data: data_fake_5});
	chart.series[5].update({data: data_fake_6});
	chart.series[6].update({data: data_fake_7});
}, 1000);

	var number=7;
	var btn_select_CNC_db = 'CNC_proc_data_1';
	var btn_select_CNC_sp = 'CNC1';
	var call_php_str = 'CNC1_SP_1.php';
	var btn_select_val;
	var btn_select_num;
	var btn_select_time;
	var btn_select_N = 1;
	var plot_container_data_2d = [];
	var dynamic_series;
	var data_fake_1,data_fake_2,data_fake_3,data_fake_4,data_fake_5,data_fake_6,data_fake_7;


	// 假資料, 用於initial顯示
	data_fake_1 =
		[175, 180, 187, 173, 185, // 1-5
		187, 182, 189, 176, 180, // 6-10
		190, 183, 192 , 197, 200, // 11-15
		193, 195, 185 , 179, 175, // 16-20
		224, 227, 235 , 230, 237, // 21-25
		235, 232, 236 , 225, 229, //26-30
		224, 227, 235 , 230, 237, // 31-35
		224, 227, 235 , 230, 237, // 36-40
		235, 232, 236 , 225, 229, // 41-45
		224, 227, 235 , 230, 237, // 46-50
		224, 227, 235 , 230, 237, // 51-55
		235, 232, 236 , 225, 229, // 56-60
		224, 227, 235 , 230, 237, // 61-65
		224, 227, 235 , 230, 237, // 66-70
		235, 232, 236 , 225, 229, // 71-75
		224, 227, 235 , 230, 237, // 76-80
		235, 232, 236 , 225, 229, // 81-85
		224, 227, 235 , 230, 237, // 86-90
		224, 227, 235 , 230, 237, // 91-95
		245, 242, 248 , 255, 260 // 96-100
	];

	data_fake_2 =
		[150, 143, 148, 140, 135, // 1-5
		139, 132, 125, 129, 127, // 6-10
		122, 129, 115 , 119, 115, // 11-15
		124, 120, 128 , 132, 123, // 16-20
		124, 120, 128 , 132, 123, // 21-25
		124, 120, 128 , 132, 123, //26-30
		124, 120, 128 , 132, 123, // 31-35
		110, 114, 107 , 110, 100, // 36-40
		123, 132, 127 , 125, 117, // 41-45
		110, 114, 107 , 110, 100, // 46-50
		110, 114, 107 , 110, 100, // 51-55
		121, 123, 110 , 114, 125, // 56-60
		110, 114, 107 , 110, 100, // 61-65
		121, 123, 110 , 114, 125, // 66-70
		110, 114, 107 , 110, 100, // 71-75
		121, 123, 110 , 114, 125, // 76-80
		110, 114, 107 , 110, 100, // 81-85
		121, 123, 110 , 114, 125, // 86-90
		130, 122, 138 , 124, 132, // 91-95
		140, 148, 142 , 143, 150 // 96-100
	];

	data_fake_3 =
		[160, 150, 157, 145, 155, // 1-5
		152, 142, 148, 135, 144, // 6-10
		153, 172, 165 , 181, 180, // 11-15
		172, 175, 172 , 175, 172, // 16-20
		172, 175, 172 , 175, 172, // 21-25
		172, 175, 172 , 175, 172, //26-30
		180, 174, 165 , 175, 162, // 31-35
		153, 164, 157 , 169, 173, // 36-40
		184, 179, 181 , 173, 180, // 41-45
		190, 185, 175 , 210, 224, // 46-50
		225, 213, 203 , 220, 200, // 51-55
		210, 213, 225 , 220, 230, // 56-60
		180, 174, 165 , 175, 162, // 61-65
		123, 138, 142 , 132, 125, // 66-70
		180, 174, 165 , 175, 162, // 71-75
		123, 138, 142 , 132, 125, // 76-80
		180, 174, 165 , 175, 162, // 81-85
		123, 138, 142 , 132, 125, // 86-90
		118, 113, 104 , 110, 100, // 91-95
		93, 104, 88 , 95, 80 // 96-100
	];

	data_fake_4 =
		[162, 175, 153, 142, 132, // 1-5
		152, 162, 157, 164, 156, // 6-10
		152, 162, 157, 164, 156, // 11-15
		152, 162, 157, 164, 156, // 16-20
		152, 162, 157, 164, 156, // 21-25
		152, 162, 157, 164, 156, //26-30
		152, 162, 157, 164, 156, // 31-35
		152, 162, 157, 164, 156, // 36-40
		152, 162, 157, 164, 156, // 41-45
		152, 162, 157, 164, 156, // 46-50
		150, 142, 147 , 134, 131, // 51-55
		125, 115, 127 , 132, 104, // 56-60
		110, 115, 121 , 110, 100, // 61-65
		110, 115, 121 , 110, 100, // 66-70
		110, 115, 121 , 110, 100, // 71-75
		103, 110, 108 , 111, 102, // 76-80
		103, 110, 108 , 111, 102, // 81-85
		103, 110, 108 , 111, 102, // 86-90
		103, 110, 108 , 111, 102, // 91-95
		93, 104, 88 , 95, 85 // 96-100
	];
	data_fake_5 =
		[100, 115, 121, 128, 132, // 1-5
		100, 115, 121, 128, 132, // 6-10
		100, 115, 121, 128, 132, // 11-15
		100, 115, 121, 128, 132, // 16-20
		100, 115, 121, 128, 132, // 21-25
		138, 148, 143, 152, 150, //26-30
		138, 148, 143, 152, 150, // 31-35
		138, 148, 143, 152, 150, // 36-40
		152, 172, 163, 158, 165, // 41-45
		152, 172, 163, 158, 175, // 46-50
		185, 181, 193 , 187, 194, // 51-55
		185, 181, 193 , 187, 194, // 56-60
		185, 181, 193 , 187, 194, // 61-65
		185, 181, 193 , 187, 194, // 66-70
		185, 181, 193 , 187, 194, // 71-75
		203, 211, 209 , 215, 220, // 76-80
		203, 211, 209 , 215, 220, // 81-85
		203, 211, 209 , 215, 220, // 86-90
		224, 213, 225 , 208, 232, // 91-95
		224, 213, 225 , 208, 230 // 96-100
	];

	data_fake_6 =
		[100, 120, 110, 117, 125, // 1-5
		100, 120, 110, 117, 125, // 6-10
		100, 120, 110, 117, 125, // 11-15
		100, 120, 110, 117, 125, // 16-20
		100, 120, 110, 117, 125, // 21-25
		138, 127, 132, 140, 139, //26-30
		138, 127, 132, 140, 139, // 31-35
		138, 127, 132, 140, 139, // 36-40
		138, 127, 132, 140, 139, // 41-45
		142, 132, 137, 145, 150, // 46-50
		140, 132, 138 , 125, 131, // 51-55
		125, 100, 112 , 113, 118, // 56-60
		125, 100, 112 , 113, 118, // 61-65
		125, 100, 112 , 113, 118, // 66-70
		125, 100, 112 , 113, 118, // 71-75
		107, 112, 102 , 100, 103, // 76-80
		107, 112, 102 , 100, 103, // 81-85
		107, 112, 102 , 100, 103, // 86-90
		107, 112, 102 , 100, 103, // 91-95
		100, 95, 103 , 95, 90 // 96-100
	];

	data_fake_7 =
		[200, 204, 213, 207, 220, // 1-5
		192, 183, 187, 175, 172, // 6-10
		192, 183, 187, 175, 172, // 11-15
		192, 183, 187, 175, 172, // 16-20
		192, 183, 187, 175, 172, // 21-25
		163, 168, 157, 162, 155, //26-30
		163, 168, 157, 162, 155, // 31-35
		163, 168, 157, 162, 155, // 36-40
		163, 168, 157, 162, 155, // 41-45
		163, 168, 157, 162, 150, // 46-50
		153, 162, 170 , 165, 175, // 51-55
		153, 162, 170 , 165, 175, // 56-60
		153, 162, 170 , 165, 175, // 61-65
		153, 162, 170 , 165, 175, // 66-70
		153, 162, 170 , 165, 175, // 71-75
		187, 197, 182 , 192, 200, // 76-80
		187, 197, 182 , 192, 200, // 81-85
		204, 199, 211 , 232, 223, // 86-90
		204, 199, 211 , 232, 223, // 91-95
		204, 199, 211 , 232, 230 // 96-100
	];


	dynamic_series = [{
		name: 'n-1',
		data: data_fake_1,
		color: '#43B4AB'
	},{
		name: 'n-2',
		data: data_fake_2,
		color: '#65C6BE'
	}, {
		name: 'n-3',
		data: data_fake_3,
		color: '#05DBB7'
	}, {
		name: 'n-4',
		data: data_fake_4,
		color: '#55C5E4'
	}, {
		name: 'n-5',
		data: data_fake_5,
		color: '#7280B3'
	}, {
		name: 'n-6',
		data: data_fake_6,
		color: '#929EC5'
	}, {
		name: 'n-7',
		data: data_fake_7,
		color: '#94AADE'
	}];

	var legendSetting = {};
	if(id == 'container-data'){
		legendSetting.layout = 'vertical';
		legendSetting.alignH = 'right';
	}else{
		legendSetting.layout = 'horizontal';
		legendSetting.alignH = 'center';
	}
	/* id : container-data: 加工數據(不同區間) */
	var chart = Highcharts.chart(id, {
		chart: {
			marginRight: 100,
			backgroundColor: "#ffffff00"
		},
		title: {
			text: null,
		},
		subtitle: {
			text: null
		},
		credits: {
			enabled: false
		},
		legend: {
			layout: legendSetting.layout,
			align: legendSetting.alignH,
			verticalAlign: 'top',
			floating: false,
			symbolWidth: 0,
			itemMarginTop: 10,
			useHTML:true,
			labelFormatter: function () {
				return '<div class="mr-2 legend" style="margin: 0;display: inline-block;width: 10px;height: 10px;border-radius:50%;background:'+this.color+'"></div>'+'<span style="color: #8898bd;" title="' + this.name + '">' + this.name + '</span>';
			}
		},
		xAxis: {
			min: 0,
			max: 100,
			title: {
				text: '' // Empty
			},
			labels: {
				format: '{value} %' // 達詳認為這樣可以代表加工時間
			},
			crosshair: true,
			showFirstLabel: false,
			tickAmount: 5
		},
		yAxis: {
			min: 0,
			max: 300, // initial
			title: {
				text: '' //Feed // 進給速度
			},
			labels: {
				//format: '{value} %'
			},
			tickAmount: 7
		},
		plotOptions: {

			series: {
				marker: {
					enabled: false
				},
				label: {
					connectorAllowed: false
				},
				//pointStart: 2010
			}
		},
		series: dynamic_series,

		responsive: {
			rules: [{
				condition: {
					maxWidth: 500,

				},
				chartOptions: {
					legend: {
						enabled:true
					}
				}
			}]
		}
	});
	// 顯示在下面的文字時間
	$("#showTime").html($("#localTime").val().replace('T',' '));

	// 不同區間, ajax
	$("#btn_send_data").click(function(){ // when button press

		btn_select_N = $("#btn_select_N").val(); // 1-7

		btn_select_val = $("#itemSelect_data").val(); // Feed / SpeedS
		btn_select_num = parseInt(btn_select_val);

		btn_select_time = $("#localTime").val(); // 2019-07-22T16:11

		// Function Declare
		var GetAjaxSQL_btn = function returnGetSQL_btn(){
			var returnValue;
			// Stored Procedure
			$.ajax({
				async: false,
				tradition: true,
				url: call_php_str, // 'CNC1_SP_1.php'
				type: "POST",
				data: {
					'select_y': btn_select_num, // Feed/ SpeedS
					'select_time': btn_select_time, // 2019-07-22T16:11
					'MAX_LINE': btn_select_N, // 比較次數
					'select_CNC_sp': btn_select_CNC_sp, // 'CNC1'
					'select_CNC_db': btn_select_CNC_db, // 'CNC_proc_data_1'
				},
				dataType:"JSON",
				success: function(Jdata){
					//console.log(Jdata);
					var str_ydata_init = JSON.stringify(Jdata); //json-string
					//console.log(str_ydata_init);


					//console.log(str_ydata_init);



					var str_split = str_ydata_init.split('"N0":["');
					var up_split_1 = str_split[1];
					var up_split_2 = up_split_1.split('"]}');



					//console.log(up_split_2[0]); // N-0
					var N_ALL_array = new Array();
					N_ALL_array[0] = up_split_2[0].split('","').map(Number); // N-0
					for (var j = 1; j < btn_select_N; ++j){ // btn_select_N = 7
						//console.log(up_split_2[j].split(':["')[1]); // N-1 ~ N-6
						N_ALL_array[j] = up_split_2[j].split(':["')[1].split('","').map(Number); // // N-1 ~ N-6

					}

					returnValue = N_ALL_array;

					//console.log(returnValue);

				},
				error: function(xhr, ajaxOptions, thrownError) {
					console.log(xhr.responseText);
					returnValue = [];
				}


			});


			return returnValue;
		}


		// Function Call
		plot_container_data_2d = GetAjaxSQL_btn();
		//console.log(plot_container_data_2d);


		// Update the chart
		var series = chart.series; // btn_select_N = 2
		for (var i = 0; i < btn_select_N; ++i) { // 將[0]~[1] 更新數據

			series[i].update({
				data: plot_container_data_2d[i],
			});

		}
		for (var i = 7; i > btn_select_N; --i){ // 將 [6]~[2]歸0

			series[i-1].update({
				data: [], // null
			});

		}


		var update_Y_MAX = new Array();
		for(var i = 0; i < btn_select_N; ++i){

			update_Y_MAX[i] = Math.max(...plot_container_data_2d[i]) * 1.05;

		}

		// Update y-max
		chart.yAxis[0].update({
			max: Math.max(...update_Y_MAX), //Math.max(...plot_container_data_2d) * 1.05,
		});

		chart.redraw();

	});

    //pie
    var id;
if(innerWidth>768){
	id = 'container-speed';
}else{
	id = 'container-speed-mobile';
}

var pieData = [{
		name: '閒置',
		y: 25,
		z: 0,
		x: 0
    },{
        name: '加工中',
        y: 50,
        z: 0,
        x: 0
    },{
        name: '清洗治具',
        y: 25,
        z: 0,
        x: 0
    }
 //    ,{
 //        name: '故障',
 //        y: 25,
 //        z: 0,
 //        x: 0
	// }
	];
let pieDatas = [...pieData]
// let ReSet = ( num) =>{
	// clearInterval(AutoStart)
	// let total = 0
	// let series = PieChart.series[0];
	// list = series.data
	// for(let i = 0 ; i < PieChart.series[0].data.length ; i++){
		// PieChart.series[2].data[i].sliced = false
		// PieChart.series[2].data[i].selected = false
		// PieChart.series[2].data[i].color = 'rgb(255,255,255,0)'
		// total += list[i].y
	// }
	// PieChart.series[2].data[pieView].color = PieChart.series[0].data[pieView].color
	// PieChart.series[2].data[pieView].sliced = true
	// PieChart.series[2].data[pieView].selected = true
	// PieChart.series[2].setData(PieChart.series[2].data,true);
	// PieChart.setTitle({
		// text:
		// `<div style="color: #A8ACC2;text-align: center;">
                // <div>${list[num].name}</div>
                // <div style="font-size:2rem;font-weight: 700;">${Math.round(list[num].y / total * 100)}%</div>
                // <hr style="margin:.25rem; border-top: 1px solid #A8ACC2; width: 6rem;">
                // <div>總計 : ${list[num].z} 小時 ${list[num].x} 分</div>
        // </div>`,y:80}, false, true)
	// AutoStart = setInterval( pieCarousel, 1000);
// }
var PieChart = Highcharts.chart(id, {
	chart: {
		backgroundColor: "#ffffff00",
		spacing : [0, 0 , 0, 0],
		type: 'pie',
		events: {
			render: function() {
                let data = this.series[0].data[0]
                let series = this.series
				let sum = 0
				for(let i = 0; i < series.length; i++) {
					if(series[i].visible){
						for(let j = 0; j < series[i].data.length; j++) {
							sum += series[i].data[j].y
						}
						var min=parseInt(sum/60)
						var sec=sum % 60
					}
				}
			// this.setTitle({text: '<div class="fcenter"><b>合計時間</b><br><div class="demo_line_05">———————————</div><br>' +
            // 					  + min +'分'+ sec +'秒</div>',y:140}, false, false)
            this.setTitle({text:
             `<div style="position:relative; margin-top:95%;color: #A8ACC2;text-align: center;">
                <div>${data.name}</div>
                <div style="font-size:2rem;font-weight: 700;">${data.y}%</div>
                <hr style="margin:.25rem; border-top: 1px solid #A8ACC2; width: 7rem;">
                <div>總計 : ${data.z} 小時 ${data.x} 分</div>
		    </div>`,y:50}, false, false)
			}
		}
	},
	title: {
		useHTML:true,
		floating:true,
		title:"",
		style:{ color:'#A8ACC2',fontSize: 16 }
	},
	credits: {
		enabled: false
	  },
	tooltip: {
		enabled: false,
		pointFormat: '<br>{point.z}小時 {point.x}分 {point.y}次'
	},
	plotOptions: {
		series:{
            states: {
                inactive:{
                    opacity: 0.9
                },
            },
		},
		pie: {
			slicedOffset: 0,
			size: '90%',
			innerSize: '65%',
			shadow: false,
			allowPointSelect: true,
			cursor: 'pointer',
			// 右上  右下 左下 左上 '#8695C2','#18AFC6','#45AEA5','#5cb0d4'
			colors: ['#8695C2','#18AFC6','#45AEA5'],
			legend:{
				enabled:false
			},
			dataLabels: {
				enabled: false,
				useHTML:true,
                formatter: function() {
						return '<div class="text-center h6 font"><b>'+ this.point.name +'   <span>' +
								this.point.y +' %</span></b><hr style="margin-top:5px;margin-bottom:5px;">' + '總計 : ' +
								this.point.z + '小時'+this.point.x + '分</div>'
                },
				distance: 10,
				connectorWidth: 0,
				style: {
					color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || '#A8ACC2',
					fontSize: 16,
					fontFamily: '微軟正黑體'
				}
			},

		}
	},
	series: [{
		data: pieData,
		events: {
			click: (e) => {
				var pieView = e.point.index
				ReSet(pieView)
			},
		}
	},
	{
		type: 'pie',
		data: [{
				name: '',
				y:10,
				color:'rgb(255,255,255,0.3)'
			}],
			dataLabels:{
				enabled:false
			},
			credits: { enabled: false },
			tooltip: { enabled: false,
			style:{
				pointerEvents: 'none'
			} },
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
			size:215,
			innerSize:180
	},
	// {
		// type: 'pie',
		// data: pieDatas,
			// dataLabels:{
				// enabled:false
			// },
			// credits: { enabled: false },
			// tooltip: { enabled: false,
			// style:{
				// pointerEvents: 'none'
			// } },
			// plotOptions: {
				// pie: {
					// allowPointSelect: true,
					// size: '100%',
				// },

			// },
			// size:175,
			// innerSize:167.5
	// },
]
}, function(c) { // 图表初始化完毕后的会掉函数
	// 环形图圆心
	var centerY = c.series[0].center[1],
		titleHeight = parseInt(c.title.styles.fontSize);
	// 动态设置标题位置
	c.setTitle({
		y:centerY + titleHeight/2
	});
});

var y;
var pieView = 0
var pieCarousel =  () =>{
	var temp1, temp2, temp3;
	temp1 = Math.round(Math.random()*30);
	temp2 = Math.round(Math.random()*40);
	temp3 = 100-temp1-temp2;
	PieChart.series[0].data[0].update(y = temp1);
	PieChart.series[0].data[1].update(y = temp2);
	PieChart.series[0].data[2].update(y = temp3);
	// PieChart.series[2].data[0].update(y = temp1);
	// PieChart.series[2].data[1].update(y = temp2);
	// PieChart.series[2].data[2].update(y = temp3);

	pieDatas = [...pieData]
	let Ptime = document.getElementById('piecharttime')
	var list = pieData
	var num = pieView++ %list.length;
  let Minute = 0,Hour = 0, total = 0
    for(let i = 0 ; i < list.length ; i++){
		PieChart.series[2].data[i].selected = false
		PieChart.series[2].data[i].color = 'rgb(255,255,255,0)'
		total += list[i].y
        Hour += list[i].z
        Minute += list[i].x
	}
	if(Minute > 59){
        Hour += Math.floor(Minute / 60)
        Minute = Minute % 60
    }
	PieChart.series[2].data[num].color = PieChart.series[0].data[num].color
	// PieChart.series[2].setData(PieChart.series[2].data,true);

	Ptime.innerHTML = `${Hour} 小時 ${Minute} 分`
	// PieChart.series[0].setData(pieData,true);

    PieChart.setTitle({
		text:
		`<div style='position:relative; margin-top:75%;color: #A8ACC2;text-align: center;'>
                <div>${list[num].name}</div>
                <div style='font-size:2rem;font-weight: 700;'>${Math.round(list[num].y / total * 100)}%</div>
                <hr style='margin:.25rem; border-top: 1px solid #A8ACC2; width: 6rem;'>
                <div>總計 : ${list[num].z} 小時 ${list[num].x} 分</div>
        </div>`}, false, false)
}
var AutoStart = setInterval( pieCarousel, 1000);

addEventListener('resize', function(event){
	location.reload();
});
  },
  components: {
	  VueHighcharts
  },
  data(){
      return{
		options: data,
       table:[
         {
           diag:'刀具壽命',
           health:'---',
           des:'---'
         },
         {
           diag:'加工時間',
           health:'---',
           des:'---'
         },
         {
           diag:'主軸負載',
           health:'---',
           des:'---'
         },
         {
           diag:'主軸轉速',
           health:'---',
           des:'---'
         },
         {
           diag:'進給速度',
           health:'---',
           des:'---'
         },
       ]
      }
  },
  methods:{
  }
}
</script>

<style scope>
.test{
  border:1px solid red;
}
.piech{
  width:25vh;
  height:25vh;
  }
.piechartDiv{
    position: relative;
  }
.piechartBorder{
    width:15vh;
    position: absolute;
    text-align: center;
    background: #ebeefc;
    z-index: 1000;
    box-shadow: inset 0 0 2px rgba(100, 100, 100, 0.3);
    border: 1px solid #EAEEF7;
    padding: .5rem 1rem;
    top: 6rem;
    left: 2rem;
    color: #A8ACC2;
}
#piechartname{
    padding: .5rem 2rem;
    border-bottom: #dbdee4 2px solid;
}
#piecharttime{
    padding: .5rem 1rem;
}

@media screen and (max-width: 780px) {
    .piechartBorder {
        position: static;
        margin-bottom: 1rem;
    }
}
.piechartBorder{
  color: #B8C1DB;
}
.btnblue{
  font-size: 10px;
  border-radius: 5px;
  background-color: #8795BF;
}
.td{
  height:4vh;
}
.td div{
  margin-top: 1vh;
  color:#8795BF;
  font-size:10px;
}
.th{
  height:5vh;
  background-color: #8795BF;
  color:#fff;
  font-size:13pt;
}
.select{
  background-color: #eaeef8;
  color:#6A7BAF;
  width:16vh;
  padding: 0 0 0 3vh;
}
.title{
  font-weight: 900;
  font-size:20px;
}
.health_tit{
  border:1px solid #8192B9;
  width:28%;
  height: 3vh;
  font-size:1rem;
  border-radius:10rem;
  color:#6A7BB0;
  background-color:#EAEEF7;
}
.leftcol{
  color:#6A7BAF;
  margin-top:1vh;
  margin-left:7vh;
}
.leftfont{
  margin-top: 1vh;
  margin-left: 4vh;
  width:12vh;
  border-top:1px solid #BAC3D1;
  font-size:21pt;
  font-weight:900;
  margin-left:2vh;
}
.ma-onetable{
	background-color: #E8EFF7;
	border: 2px #c0c3ca solid;
}
.ma-select{
	width:13vh;
	height: 2vh;
	font-size: 11px;
	color:#97A4C8;
}
.ma-but{
	width: 13vh;
	color:#fff;
	border:none;
	background-color: #8897BE;
	font-size:12px;
	height:3vh;
	border-radius: 0.3rem;
}
@media screen and (max-width: 700px){
	.overy{
		overflow-y:scroll;
	}
	
}
@media screen and (min-width: 768px){
	.overy{
		overflow-y:hidden;
	}
}
</style>
