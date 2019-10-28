<template>
  <div class="system">
    <div class="container-fluid">
      <div class="row">
        <div class="col-lg-12 col-xl-7 myCol ">
          <div class="panright mt-2" >
            <div class="row mt-3 mr-3 ml-2"  style="border-bottom:1px solid #E5E5E5;">
              <div class="col text-left justify-content-center mb-2">
                <img class="iconsm" src="@/assets/System/system-status.png">
                系統狀態
              </div>  
              <div class="col text-right mr-3">
                <img class="status mr-2" src="@/assets/System/Run.png">Run          
                <img class="status mr-2" src="@/assets/System/Error.png">Error
                <img class="status mr-2" src="@/assets/System/Idle.png">Idle
              </div>
            </div>
            <div class="row">
              <div class="col-6 pb-3">
                <div class="mcName text-center mt-5">
                  <span>CNC</span><br>
                  <span>NXV1020A</span>
                  <img class="MCstatus ml-3" width="30" src="@/assets/System/Error.png">
                </div>
                <img style="width: 80%;margin-left:6vh;margin-top:2vh;" class="machine" src="@/assets/System/123.png" >
              </div>
              <div class="col-6 pb-3">
                <div class="mcName text-center mt-5">
                  <span>CNC</span><br>
                  <span>NXV600A</span>
                  <img class="MCstatus ml-3" width="30" src="@/assets/System/Run.png">
                </div>
                <img style="width: 80%;margin-left:6vh;margin-top:2vh;" class="machine" src="@/assets/System/123.png">
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-12 col-xl-5">
          <div class="row">
            <div class="col myCol">
              <div class="panright mt-2">
                <div class="row mr-3 ml-2">
                  <div class="col text-left justify-content-center mt-2 ml-3 mb-2" style="border-bottom:1px solid #E5E5E5;">
                    <img class="mr-2 ml-3 mb-2 mt-2" width="20" src="@/assets/System/icon_black.png">
                    訂單資訊
                  </div>
                </div>
                <div class="row justify-content-center">
                  <div>
                    <div class="text-center" style="width:67vh;overflow-y:scroll;height:42vh">
                      <div class="row  mr-1 ml-1" style="border-top:2px solid #BEC8E1;border-bottom:2px solid #BEC8E1;">
                        <div class="col-xl-2 mt-2 mb-2"> 訂單日期 </div>
                        <div class="col-xl-2 mt-2 mb-2"> 訂單編號 </div>
                        <div class="col-xl-2 mt-2 mb-2"> 案號 </div>
                        <div class="col-xl-2 mt-2 mb-2"> 交期 </div>
                        <div class="col-xl-2 mt-2 mb-2"> 完成日期 </div>
                        <div class="col-xl-2 mt-2 mb-2"> 交貨 </div>
                      </div>
                      <div class="row mr-1 ml-1" style="border-bottom:1px solid #BEC8E1;color:#7A8BBA;" v-for="item in orders">
                        <div class="col-xl-2 mt-3 mb-2"> {{item.data}}</div>
                        <div class="col-xl-2 mt-3 mb-2"> {{item.id}}</div>
                        <div class="col-xl-2 mt-3 mb-2"> {{item.number}}</div>
                        <div class="col-xl-2 mt-3 mb-2"> {{item.arrdata}}</div>
                        <div class="col-xl-2 mt-3 mb-2"> {{item.findata}}</div>
                        <div class="col-xl-2 mt-3 mb-2" style="padding-top: 5px;">
                          <input type="checkbox" :id="item.checkid" />
                          <label :for="item.checkid"><span></span></label>
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
      <div class="row mt-2">
        <div class="col-7">
          <div class="row">
            <div class="col panbottom ml-3 text-left" >
              <div class="" style="border-bottom:1px solid #BEC8E1">
                <div class="mt-2 mb-2">
                  <img class="ml-1 mr-2" width="20" src="@/assets/System/instant-power-consumption.png">
                  系統即時用電量
                </div>
              </div>
              <div class="w-xl-100 w-xs-100">
                <div class="">
                  <div class="now-Power-content mt-4">
                    <span id="nowPower-Value"></span>
                    <div class="innerContent">
                        <canvas id="nowPower"></canvas>
                    </div>
                    <span id="nowPower-min-Value" >0</span>
                    <span id="nowPower-max-Value">2500(W)</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="col panbottom ml-4 text-left" >
              <div class="" style="border-bottom:1px solid #BEC8E1">
                <div class="mt-2 mb-2">
                  <img class="ml-1 mr-2" width="20" src="@/assets/System/system-status.png">
                  本月累計用電量
                </div>
              </div>
              <div class="row mt-4" style="border-bottom:1px solid #C6CAD5;">
                <div class="col-4 totalPower-field mb-3" style="border-right:1px solid #C6CAD5; height:3vh;">
                  <span>每週用電</span>
                </div>
                <div class="col-8">
                  <div class="progress" style="height: 3vh;">
                    <div class="progress-bar text-right" role="progressbar" style="width: 40%;background-color:#8596C1;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"><span style="margin-right:0.5rem">1.2kWh</span></div>
                  </div>
                </div>
              </div>
              <div class="row mt-3" style="border-bottom:1px solid #C6CAD5;">
                <div class="col-4 totalPower-field mb-3" style="border-right:1px solid #C6CAD5; height:3vh;">
                  <span>本月用電</span>
                </div>
                <div class="col-8">
                  <div class="progress" style="height: 3vh;">
                     <div class="progress-bar text-right" role="progressbar" style="width: 50%;background-color:#78BAB5;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"><span style="margin-right:0.5rem">1.5kWh</span></div>
                  </div>
                </div>
              </div>
              <div class="row mt-3" style="border-bottom:1px solid #C6CAD5;">
                <div class="col-4 totalPower-field mb-3" style="border-right:1px solid #C6CAD5; height:3vh;">
                  <span>本季用電</span>
                </div>
                <div class="col-8">
                  <div class="progress" style="height: 3vh;">
                     <div class="progress-bar text-right" role="progressbar" style="width: 70%;background-color:#19B0C8;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"><span style="margin-right:0.5rem">1.9kWh</span></div>
                  </div>
                </div>
              </div>
              <div class="row mt-3">
                <div class="col-4 totalPower-field mb-3" style="border-right:1px solid #C6CAD5; height:3vh;">
                  <span>累積用電</span>
                </div>
                <div class="col-8" >
                  <div class="progress" style="height: 3vh;">
                     <div class="progress-bar text-right" role="progressbar" style="width:80%;background-color:#59C2D9;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"><span style="margin-right:0.5rem">2.2kWh</span></div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col panbottom ml-4 mr-3 text-left" >
              <div class="" style="border-bottom:1px solid #BEC8E1">
                <div class="mt-2 mb-2">
                  <img class="ml-1 mr-2" width="20" src="@/assets/System/tools.png">
                  系加工元件
                </div>
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
        <div class="col-5">
          <div class="row">
            <div class="col panbottom ml-3 mr-4 text-left" >
              <div class="" style="border-bottom:1px solid #BEC8E1">
                <div class="mt-2 mb-2">
                  <img class="ml-1 mr-2" width="20" src="@/assets/System/iconAchievedToday.png">
                  機台嫁動率
                </div>
              </div>
              <div class="w-xl-100 w-xs-100">
                  <div class="machine-content">
                      <canvas id="myCanvas" class="ml-4"></canvas>
                  </div>
              </div>
            </div>
            <div class="col panbottom mr-3 text-left" >
              <div class="" style="border-bottom:1px solid #BEC8E1">
                <div class="mt-2 mb-2">
                  <img class="ml-1 mr-2" width="20" src="@/assets/System/output-status.png">
                  本月產出狀況
                </div>
              </div> 
              <div class="w-xl-100 w-xs-100">
                <div class="resultAnalysis-item">
                  <div class="resultAnalysis-items">
                    <div class="resultAnalysis-name mt-3" style="white-space:nowrap;margin-left:-1vh;margin-bottom:-0.5rem;"></div>
                    <hr>
                    <div class="resultAnalysis-number"></div>
                  </div>
                  <div class="resultAnalysis-items">
                    <div class="resultAnalysis-name mt-3" style="white-space:nowrap;margin-left:-1vh;margin-bottom:-0.5rem;"></div>
                      <hr>
                      <div class="resultAnalysis-number"></div>
                    </div>
                  </div>
                  <div  id="resultAnalysis-content" class="resultAnalysis-chart"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
</template>

<script>
import Highcharts from '../highcharts.js'
import gauge from './gauge.min'
import result from './resultAnalysis'
export default {
  mounted() {
    //機台稼動率
    var canvas, ctx;
    var data = {
    "start": 0,
    "end": 120,
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
var positionX = 150;
var positionY = 150;
var radius = 100;


setInterval(function() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < data["obj"].length; i++) {
       var value = Math.floor(Math.random() * 100) + 0;
        data["obj"][i].value = value;
    }
    drawBase();
}, 1000);

canvas = document.getElementById('myCanvas');
ctx = canvas.getContext('2d');
canvas.width = "300";
canvas.height = "300";
canvas.style.width = "230px";
canvas.style.border = "hidden";

drawBase();

function drawBase() {
    drawCircle();
    drawScale();

    for (let i = 0; i < data["obj"].length; i++) {
        var obj = data["obj"][i];
        drawArcLine(obj["index"], obj["value"], obj["color"]);
    }
}

function drawCircle() {
    ctx.lineWidth = 3;
    ctx.beginPath();
    var start = angleToRadian(0);
    var end = angleToRadian(360);

    ctx.save();
    ctx.shadowBlur = 10;
    ctx.shadowOffsetX = 2;
    ctx.shadowOffsetY = 4;
    ctx.shadowColor = "rgba(50, 50, 50, 0.6)";
    ctx.fillStyle = "#fff";
    ctx.arc(positionX, positionY, radius, start, end, true);
    ctx.fill();
    ctx.restore();

    ctx.strokeStyle = "#fff";

    ctx.moveTo(positionX - 40, positionY);
    ctx.lineTo(positionX + 40, positionY);
    ctx.font = "20px sans-serif";
    ctx.textAlign = "center";
    ctx.textBaseline = "bottom";
    ctx.fillStyle = "#6A7CAF";
    ctx.fillText("NXV1020A", positionX, positionY - 10, 100);
    ctx.fillStyle = "#6AB7C8";
    ctx.fillText("NXV600A", positionX, positionY + 30, 100);
    ctx.stroke();
    ctx.closePath();
}

function drawScale() {
    var currentAngle = 90;
    var start = data["start"];
    var end = data["end"];
    var step = data["step"];
    var spiltSize = (end - start) / step;
    var stepAngle = 360 / spiltSize;
    var textRadius = radius - 20;
    for (let i = start; i < end; i += step) {
        var Radian = angleToRadian(currentAngle);
        var textX = Math.cos(Radian) * textRadius;
        var textY = Math.sin(Radian) * textRadius;
        ctx.beginPath();
        ctx.font = "14px sans-serif"
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillStyle = "#4f4f4f";
        ctx.fillText(i + " %", positionX + textX, positionY + textY);
        currentAngle += stepAngle;
    }
}

function drawArcLine(index, value, color) {
    var lineWidth = 10;
    var startAngle = 90;
    var endAngle = startAngle + (value / (data["end"] - data["start"]) * 360);
    var arcLineRadius = radius + 20 * index;
    ctx.lineWidth = lineWidth;
    ctx.beginPath();
    var start = angleToRadian(startAngle);
    var end = angleToRadian(endAngle);
    ctx.arc(positionX, positionY, arcLineRadius, start, end, true);
    ctx.strokeStyle = color;
    ctx.stroke();
    //
    var arrowX = arcLineRadius * Math.cos(end);
    var arrowY = arcLineRadius * Math.sin(end);
    drawArrowhead(positionX + arrowX, positionY + arrowY, angleToRadian(endAngle + 90), lineWidth + 10, lineWidth + 10, color);
}

function angleToRadian(angle) {
    return (360 - angle) / 180 * Math.PI;
}

function drawArrowhead(locx, locy, angle, sizex, sizey, color) {
    var hx = sizex / 2;
    var hy = sizey / 2;

    ctx.translate((locx), (locy));
    ctx.rotate(angle);
    ctx.translate(-hx, -hy);

    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(0, 1 * sizey);
    ctx.lineTo(1 * sizex, 1 * hy);
    ctx.closePath();
    ctx.fillStyle = color;
    ctx.fill();

    ctx.translate(hx, hy);
    ctx.rotate(-angle);
    ctx.translate(-locx, -locy);
};
    //抓URL值
    
   if(location.hash=='#/System'){
    //系統即時用電量
    var value;
    var opts = {
      angle: 0, // The span of the gauge arc
      lineWidth: 0.25, // The line thickness
      radiusScale: 1, // Relative radius
      pointer: {
          length: 0.25, // // Relative to gauge radius
          strokeWidth: 0.054, // The thickness
          color: '#696969' // Fill color
      },
      limitMax: false, // If false, max value increases automatically if value > maxValue
      limitMin: false, // If true, the min value of the gauge will be fixed
      colorStart: '#6FADCF', // Colors
      colorStop: '#8FC0DA', // just experiment with them
      strokeColor: '#E0E0E0', // to see which ones work best for you
      generateGradient: true,
      highDpiSupport: true, // High resolution support
      renderTicks: {
          divisions: 20,
          divWidth: 3.5,
          divLength: 1,
          divColor: '#fff',
          subDivisions: 0,
          subLength: 0,
          subWidth: 0,
          subColor: '#666666'
      },
      staticZones: [
          { strokeStyle: '#49A59E', min: 0, max: 860 },
          { strokeStyle: '#28A4BC', min: 860, max: 1640 },
          { strokeStyle: '#697BB0', min: 1640, max: 2500 },
      ],
  };

  var target = document.getElementById('nowPower'); // your canvas element
  var gauge = new Gauge(target).setOptions(opts); // create sexy gauge!
  gauge.setTextField(document.getElementById("nowPower-Value"));
  gauge.maxValue = 2500; // set max gauge value
  gauge.setMinValue(0); // Prefer setter over gauge.minValue = 0
  gauge.set(950); // set actual value

  setInterval(function() {
      value = Math.floor(Math.random() * 2500) + 0;
      gauge.set(value); // set actual value
  }, 2000);
  };
  // 本月產出狀況
  onload = function(){
    var chartSize = innerWidth >= 768 ? 200 : 150;
    var pieData = [{
            name: 'NXV1020A',
            y: 70,
            z: 100,
        },
        {
            name: 'NXV600A',
            y: 30,
            z: 100,
        }
    ]
    
    var pieDatas = [...pieData]
    let ReSet = (num) => {
        clearInterval(AutoStart)
        for (let i = 0; i < PieChart.series[0].data.length; i++) {
            PieChart.series[2].data[i].sliced = false
            PieChart.series[2].data[i].selected = false
            PieChart.series[2].data[i].color = 'rgb(255,255,255,0)'
        }
        PieChart.series[2].data[pieView].color = PieChart.series[0].data[pieView].color
        PieChart.series[2].data[pieView].sliced = true
        PieChart.series[2].data[pieView].selected = true
        let series = PieChart.series[0];
        list = series.data
        PieChart.series[2].setData(PieChart.series[2].data, true);
        PieChart.setTitle({
            text: `<div style="text-align: center;">
            <div>${list[num].name}</div>
            <div style="font-size:1.25rem;font-weight: 700;">${list[num].y}%</div>
            <hr style="margin:.25rem; border-top: 1px solid #A8ACC2; width: 6rem;">
            <div>總計:${list[num].z}件</div>
        </div>`
        }, false, true)
        AutoStart = setInterval(pieCarousel, 3000);
    }
    var PieChart = Highcharts.chart('resultAnalysis-content', {
        chart: {
            height: 240,
            spacing: [0, 0, 0, 0],
            type: 'pie',
            useHTML: true,
            events: {
                render: function() {
                    let series = this.series
                    let sum = 0
                    for (let i = 0; i < series.length; i++) {
                        if (series[i].visible) {
                            for (let j = 0; j < series[i].data.length; j++) {
                                sum += series[i].data[j].y
                            }
                        }
                    }
                    this.setTitle({
                        text: '<div class="fcenter"><b>名稱</b><br><hr"><br>' +
                            +sum + 'pcs</div>',
                        y: 100
                    }, false, false)
                }
            }
        },
        title: {
            floating: true,
            useHTML: true,
            title: "",
            style: { color: '#A8ACC2', fontSize: 14 }
    
        },
        credits: {
            enabled: false
        },
        tooltip: {
            enabled: false,
            pointFormat: '總計:{point.z}pcs'
        },
        legend: false, //圖標
        plotOptions: {
            // series: {
            //     dataLabels: {
            //         enabled: true,
            //         format: '<h6>{point.name} {point.y}%</h6>'
            //     }
            // },
            series: {
                states: {
                    inactive: {
                        opacity: 0.9
                    },
                },
            },
            pie: {
                slicedOffset: 0,
                size: chartSize,
                innerSize: '65%',
                shadow: false,
                allowPointSelect: true,
                cursor: 'pointer',
                colors: ['#8695C2', '#18AFC6', '#45AEA5', '#6db8d8'],
                showInLegend: true,
                dataLabels: {
                    enabled: false,
                    useHTML: true,
                    dataLabels: {
                        enabled: false,
                    },
                    formatter: function() {
                        return ''
                            // return '<div class="text-center font pieFont"><b>'+ this.point.name +'  <span >' +
                            // 		this.point.y +' %</span></b><hr style="margin-top:5px;margin-bottom:5px;">'  + //'總計 : '
                            // 		this.point.z + 'pcs</div>'
                    },
                    distance: 10,
                    connectorWidth: 0,
                    style: {
                        color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || '#A8ACC2',
                        fontSize: 12,
                        fontFamily: '微軟正黑體'
                    }
                },
    
            }
        },
        series: [{
                data: pieData,
                events: {
                    click: (e) => {
                        pieView = e.point.index
                        ReSet(pieView)
                    },
                },
            }, {
                type: 'pie',
                data: [{
                    name: '',
                    y: 10,
                    color: 'rgb(255,255,255,0.5)'
                }],
                dataLabels: {
                    enabled: false
                },
                size: 160,
                innerSize: 130
            },
            {
    
                type: 'pie',
                data: pieDatas,
                dataLabels: {
                    enabled: false
                },
                credits: { enabled: false },
                tooltip: {
                    enabled: false,
                    style: {
                        pointerEvents: 'none'
                    }
                },
                plotOptions: {
                    pie: {
                        allowPointSelect: true,
                        size: '100%',
                    },
                    series: {
                        selected: false,
                    }
                },
                size: 125,
                innerSize: 117.5
            }
        ]
    }, function(c) { // 图表初始化完毕后的会掉函数
        // 环形图圆心
        var centerY = c.series[0].center[1],
            titleHeight = parseInt(c.title.styles.fontSize);
        // 动态设置标题位置
        c.setTitle({
            y: centerY + titleHeight / 2
        });
    });
    var pieView = 0
    var pieCarousel = () => {
        pieDatas = [...PieChart.series[0].points]
        var list = pieData
        var num = pieView++ % pieData.length;
        let name = document.getElementsByClassName('resultAnalysis-name')
        let number = document.getElementsByClassName('resultAnalysis-number')
    
        for (let i = 0; i < pieData.length; i++) {
            // pieData[i].selected = false
            // pieData[i].sliced = false
            PieChart.series[2].data[i].name = pieDatas[i].name
            PieChart.series[2].data[i].y = pieDatas[i].y
            PieChart.series[2].data[i].z = pieDatas[i].z
            name[i].innerHTML = `<div style="font-size:12px; color: #6A7BAF;">${pieData[i].name} ${pieData[i].y}%</div>`
            number[i].innerHTML = `<div style="font-size:12px; color: #6A7BAF;">總計:${pieData[i].z}件</div>`
            PieChart.series[2].data[i].sliced = false
            PieChart.series[2].data[i].selected = false
            PieChart.series[2].data[i].color = 'rgb(255,255,255,0)'
        }
        // data.selected = true
        // data.sliced = true
        PieChart.series[2].data[num].color = PieChart.series[0].data[num].color
        PieChart.series[2].data[num].selected = false
        PieChart.series[2].data[num].sliced = false
        PieChart.series[2].setData(PieChart.series[2].data, true);
    
    
        PieChart.setTitle({
            text: `<div style="text-align: center; color: #6A7BAF;">
            <div>${list[num].name}</div>
            <div style="font-size:1.25rem;font-weight: 700;">${list[num].y} %</div>
            <hr style="margin:.25rem; border-top: 1px solid #A8ACC2; width: 6rem;">
            <div>總計:${list[num].z}件</div>
        </div>`
        }, false, false)
    }
    var AutoStart = setInterval(pieCarousel, 3000);
}
  },
  data(){
    return{
      
      orders:[
        {
          data:'2019/06/30',
          id:'10808260001',
          number:'WDR603',
          arrdata:'2019/06/30',
          findata:'2019/06/30',
          checkid:'c1'
        },
        {
          data:'2019/06/30',
          id:'10808260001',
          number:'WDR603',
          arrdata:'2019/06/30',
          findata:'2019/06/30',
          checkid:'c2'
        },
        {
          data:'2019/06/30',
          id:'10808260001',
          number:'WDR603',
          arrdata:'2019/06/30',
          findata:'2019/06/30',
          checkid:'c3'
        },
        {
          data:'2019/06/30',
          id:'10808260001',
          number:'WDR603',
          arrdata:'2019/06/30',
          findata:'2019/06/30',
          checkid:'c4'
        },
        {
          data:'2019/06/30',
          id:'10808260001',
          number:'WDR603',
          arrdata:'2019/06/30',
          findata:'2019/06/30',
          checkid:'c5'
        },
        {
          data:'2019/06/30',
          id:'10808260001',
          number:'WDR603',
          arrdata:'2019/06/30',
          findata:'2019/06/30',
          checkid:'c6'
        },
        {
          data:'2019/06/30',
          id:'10808260001',
          number:'WDR603',
          arrdata:'2019/06/30',
          findata:'2019/06/30',
          checkid:'c7'
        },
        {
          data:'2019/06/30',
          id:'10808260001',
          number:'WDR603',
          arrdata:'2019/06/30',
          findata:'2019/06/30',
          checkid:'c8'
        },
        {
          data:'2019/06/30',
          id:'10808260001',
          number:'WDR603',
          arrdata:'2019/06/30',
          findata:'2019/06/30',
          checkid:'c9'
        }
      ]
    }
  },
  methods:{
  }
}
</script>

<style >
input[type="checkbox"] {
    display: none;
}

input[type="checkbox"]+label {
    color: #f2f2f2;
    margin: 0;
    height: 20px;
}

input[type="checkbox"]+label span {
    display: inline-block;
    width: 20px;
    height: 20px;
    background: url("./uncheck.png");
    background-size: 20px;
    cursor: pointer;
}

input[type="checkbox"]:checked+label span {
    background: url("./check.png");
    background-size: 20px;
}
#nowPower {
    width: 100%;
}

#nowPower-Value {
    float: right;
    color: #697BB0;
    font-size: 36px;
}

#nowPower-min-Value {
    float: left;
    font-size: 16px;
    color: #697BB0;
}

#nowPower-max-Value {
    float: right;
    font-size: 16px;
    color: #697BB0;
}

.resultAnalysis-items {
    padding-top: 3rem;
}

.resultAnalysis-item {
    width: 30%;
    float: left;
    height: 250px;
}

.resultAnalysis-chart {
    width: 70%;
    float: right;
    margin-left:7vh;
}
.BG-color_blue {
    background-color: #8092b9;
}

.color_blue {
    color: #8092b9;
}

.BG-color_green {
    background-color: #19b0c6;
}

.color_green {
    color: #19b0c6;
}
.cellContent {
    padding: 2rem 0;
}

.blockMW {
    position: relative;
    height: 80px;
    max-width: 250px;
    margin: auto;
}

.blockMW__title {
    position: absolute;
    width: 68%;
}

.blockMW__title>div {
    letter-spacing: 2;
    line-height: 19px;
    font-size: 12px;
    padding-left: 26px;
    height: 40px;
    font-weight: 700;
    color: #FFF;
    clip-path: polygon(14px 0, calc(100% - 14px) 0, 100% 50%, calc(100% - 114px) 100%, 14px 100%, 0 50%);
    -webkit-clip-path: polygon(14px 0, calc(100% - 14px) 0, 100% 50%, calc(100% - 14px) 100%, 14px 100%, 0 50%);
}

.blockMW__content {
    position: absolute;
    text-align: center;
    width: 100%;
    top: 19px;
    left: 2px;
    filter: drop-shadow(1px 4px 6px rgba(50, 50, 0, 0.3));
}

.blockMW__content>div {
    font-family: '小塚ゴシック Pro', 'Kozuka Gothic Pro', sans-serif;
    letter-spacing: 0.8;
    margin-left: 3px;
    font-size: 17px;
    font-weight: 700;
    padding: 16.5px;
    background-color: #FFF;
    clip-path: polygon(20px 0, calc(100% - 20px) 0, 100% 50%, calc(100% - 20px) 100%, 20px 100%, 0 50%);
    -webkit-clip-path: polygon(20px 0, calc(100% - 20px) 0, 100% 50%, calc(100% - 20px) 100%, 20px 100%, 0 50%);
}

.panright{
  height:48vh;
  border:2px solid #BBC4D2;
  border-radius: 0.3rem;
  background-color: #fff;
}
.panbottom{
  height:30vh;
  border:2px solid #BBC4D2;
  border-radius: 0.3rem;
  background-color: #fff;
}
.test{
  border:1px solid red;
}
.system{
  overflow-y:scroll;
 
}
.machine{
  z-index: 0;
}
.mcName{
  position: absolute;
  width: 80px;
  height:40px;
  background-color: #ebeff8;
  margin-left:10%;
  margin-top:5%;
  z-index: 1;
  color:#879cc7;
  font-size: 10pt;
}
.MCstatus{
  position: absolute;
  width:30px;
  height:30px;
  z-index: 1;
  margin-top:-15px;
  margin-left:5px;
}
@media screen and (min-height: 1020){
  .systemStatus-mid {
    min-height: 560px;
    height: calc(90vh - 5rem);
    position: relative;
  }
  .systemStatus-panel, .healthAnalysis-panel,
  .totalPower-panel, .resultAnalysis-panel,
  .machine-panel, .nowPower-panel{
    min-height: calc(33vh - 2rem) !important;
  }
}
@media screen and (max-width: 992px){
  .first-col{
    padding: 0;
  }
}

.myCol{
  padding: 0.2rem;
}
.childWindow{
  height: calc(100vh - 2rem);
  overflow-y: auto;
}
.childWindow::-webkit-scrollbar-track,.healthAnalysis-divTable::-webkit-scrollbar-track
{
  box-shadow: inset 0 0 6px rgba(100,100,100,0.3);
  border-radius: 4px;
  background-color: #F5F5F5;
}
.childWindow::-webkit-scrollbar,.healthAnalysis-divTable::-webkit-scrollbar
{
  width: .25rem;
  background-color: #F5F5F5;
}
.childWindow::-webkit-scrollbar-thumb,.healthAnalysis-divTable::-webkit-scrollbar-thumb
{
  border-radius: 1px;
  box-shadow: inset 0 0 6px rgba(100,100,100,.3);
  background-color: #555;
}
.container{
  max-width: 100%;
}
.container-fluid{
  height: 100%;
  padding-top: 0.5rem;
  
}
.container-fluid > .row > .col-lg-12{
  max-height: calc(100vh - 0rem);
}
.systemStatus-panel,.healthAnalysis-panel,.totalPower-panel,.resultAnalysis-panel,.machine-panel,.nowPower-panel{
  background-color: #fff;
  background-clip: border-box;
  /* box-shadow: inset 0 0 6px rgba(100,100,100,.3); */
  border: 1px solid rgba(0,0,0,.125);
  /* border-radius: .25rem; */
  padding: .5rem 15px;
  min-height: calc(25vh - 3rem);
  height: 100%;
}
.now-Power-content{
  position: relative;
  padding-top: .1rem;
}
.now-Power-content .innerContent{
  padding-top: 3rem;
}
.systemStatus-panel{
  overflow: auto;
  min-height: calc( 70vh - 5rem);
}
.systemStatus-mid {
  height: 52rem;
  position: relative;
}
.healthAnalysis-title::before{
  background-image: url('/assets/System/icon_black.png');
  background-size: 100% 100%;
  display: inline-block;
  position:relative;
  top:2px;
  width: 1.25rem;
  height: 1.25rem;
  content:"";
  vertical-align: baseline;
  margin-right: .5rem;
}
.healthAnalysis-img{
  padding-top: 2rem;
  display: block;
  margin: auto;
}

.healthAnalysis-light{
  height: 1.5rem;
  width: auto;
}



.healthAnalysis-line{
  position: absolute;
  top: 40px;
  left: -60px;
}
.healthAnalysis-divTable{
  overflow-y: auto;
  max-height: 16.5rem;
  width: 100%;
}
.healthAnalysis-table{
  border-collapse: collapse;
  width: 100%;
  text-align: center;
}
.healthAnalysis-table thead{
  width: 100%;
  /* background: #8795bf; */
  color: #666;
}
.healthAnalysis-table tbody{
  color: #697bb0;
  overflow-y: scroll;
  min-height: 20rem;
  width: 100%;
}
.healthAnalysis-table tr{
  width: 100%;
}
.healthAnalysis-table thead th{
  font-size: 15px;
  color: #444b5e;
}
.RPLine-0{
  width: 20%;
  border-top: .1rem solid #CCC;
  position: absolute;
  top: 50%;
  left: 7.5%;
  transform: rotate(-40deg);
}
.RPLine-1{
  width: 20%;
  border-top: .1rem solid #CCC;
  position: absolute;
  top: 70%;
  left: 7.5%;
  transform: rotate(40deg);
}
.RPLine-2{
  width: 20%;
  border-top: .1rem solid #CCC;
  position: absolute;
  top: 40%;
  left: 22.5%;
}
.RPLine-3{
  width: 20%;
  border-top: .1rem solid #CCC;
  position: absolute;
  top: 85%;
  left: 22.5%;
}
.RPLine-4{
  width: 20%;
  border-top: .1rem solid #CCC;
  position: absolute;
  top: 50%;
  left: 40%;
  transform: rotate(40deg);
}
.RPLine-5{
  width: 20%;
  border-top: .1rem solid #CCC;
  position: absolute;
  top: 70%;
  left: 40%;
  transform: rotate(-40deg);
}
.RPLine-6{
  width: 20%;
  border-top: .1rem solid #CCC;
  position: absolute;
  top: 50%;
  left: 55%;
  transform: rotate(-40deg);
}
.RPLine-7{
  width: 35%;
  border-top: .1rem solid #CCC;
  position: absolute;
  top: 75%;
  left: 57%;
  transform: rotate(22.5deg);
}
.RPLine-8{
  width: 20%;
  border-top: .1rem solid #CCC;
  position: absolute;
  top: 40%;
  left: 72.5%;
}
.img-thumbnail{
  border: none;
}

.table-fixed thead {
  width: 97%;
}
.totalPower-content{
  padding: 1.5rem 15px;
}
.machine-content{
  padding: 1rem 1rem 0 1rem;
}
.machine-content > .row{
  padding: .75rem 0 .75rem 0;
  height: 3.5rem;
  border-bottom: 1px solid #999;
}
.machine-content > .row:nth-child(4){
  border-bottom: none;
}
.machine-content > .row >.col-3 ,.totalPower-content > .row > .col-4{
  padding-right: 0;
  padding-left: 2rem;
  padding-top: 0.3rem;
}
.totalPower-content > .row{
  padding-top: .5rem;
  border-bottom: 1px solid #999;
  padding-bottom: .5rem;
}
.totalPower-content > .row:last-child{
  border-bottom: none;
}
.totalPower-content > .row:first-child > .col-4{
  padding-top: 1rem;
  margin-top: -0.75rem;
}
.totalPower-content > .row > .col-4{
  border-right: 1px solid #999;
  padding-top: 1.5rem;
  margin-top: -1.1rem;
  padding-left: 0;
  text-align: center;
}
.totalPower-content .progress{
  width: 100%;
}
.totalPower-content .progress-bar{
  background: linear-gradient(to right,#8795bf , #fefefe);
}
.progress{
  background: #e8ebee;
  font-weight: 700;
  position: relative;
}
.progress-text{
  position: absolute;
  line-height: 2rem;
  font-weight: inherit;
  text-align: right;
}
.progress,.progress-bar{
  border-radius:0px;
  height: 30px;
  color: #697bb0;
  /* text-shadow: #666 0px 0px 3px; */
}
.totalPower-content-span,.machine-content-span{
  line-height: 1rem;
  vertical-align: super;
  font-size: 15px;
  font-weight: initial;
  color: #6677A8;
}
.totalPower-status-type{
  padding-left: 1rem;
  font-size: 2rem;
}
.totalPower-status-text{
  padding-left: 1rem;
}
.machine-title::before{
  background-image: url('/assets/System/iconAchievedToday.png');
  background-size: 100% 100%;
  display: inline-block;
  position:relative;
  top:2px;
  width: 1.25rem;
  height: 1.25rem;
  content:"";
  font-weight: bold;
  vertical-align: baseline;
  margin-right: .5rem;
}
.totalPower-title::before,.resultAnalysis-title::before,.nowPower-title::before{
  background-image: url('/assets/System/iconDataAnalysis.png');
  background-size: 100% 100%;
  display: inline-block;
  position:relative;
  top:2px;
  width: 1.25rem;
  height: 1.25rem;
  content:"";
  font-weight: bold;
  vertical-align: baseline;
  margin-right: .5rem;
  
}
.nowPower-content{
  position: relative;
}

#nowPower-Value{
  position: absolute;
  right: 1rem;
  top: 0.3rem;
  color: #697BB0;
  font-size: 2rem;
  font-weight: bold;
}
#nowPower{
  width: 100%;
}
#nowPower-min{
  position: absolute;
  left: 1rem;
  top: 12rem;
}
#nowPower-max{
  position: absolute;
  right: -0.3rem;
  top: 12rem;
}
#nowPower-w{
  position: absolute;
  top: 13rem;
  right:0;
}
.systemStatus-title{
  display: block;
  height: 10rem;
  width: 9rem;
  position: absolute;
  bottom: 2rem;
  right: 2rem;
}
.systemStatus-icon {
  padding: 0.8rem;
}
.systemStatus-icon .mc{
  padding-top: 0;
}
.systemStatus-icon  > span{
  font-size: 1.1rem;
  display: inline;
  padding-top: 0.2rem;
  margin-left: 4rem;
}
.title{
  font-size: 1.125rem;
  font-weight: bolder;
}
.pieFont{
  color: #6677A8;
  font-weight: 500;
}
 #mbg{
    background-image: url('/assets/System/BG.png');
    background-repeat: no-repeat;
    background-size: auto 750px;
    height: 100%;
    position: absolute;
    width: 100%;
    margin: auto;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    min-height: 842px;
    min-width: 1062px;
  }
  .from-btm{
    padding-top: 360px;
  }
  .transparent{
    background-color: rgba(0, 0, 0, 0);
    border-color: rgba(0, 0, 0, 0);
  }
  .left{
    position: absolute;
    top: 47%;
    font-size: 2.5rem;
  }
  .right{
    position: absolute;
    top: 47%;
    font-size: 2.5rem;
    right: 0px;
  }
  .mc{
    position: absolute;
    border-radius: 43px;
    height: 40px;
    width: 40px;
    margin-left: calc( 23px / 4);
    box-shadow:  0 0 0.2rem 0 #808A87;
  }
  .mctext{
    position: absolute;
    display: block;
    color: #FFF;
    margin-top: 4px;
    padding: 0 0.25rem;
    font-size: 12px;
    background: #19a4bb;
  }
  .mctitle{
    position: absolute;
    width: 7rem;
    padding: 0 .5rem;
    text-align: center;
    border: 2px solid #19a4bb;
    background: rgba(255,255,255,0.7);
    font-size: 1.25rem;
  }
  .mcSquare{
    top: 170px;
    left: 620px;
  }
  .mcSquare-1{
    top: 450px;
    left: 350px;
  }
  .mcArrowUse{
    display: block;
    position: absolute;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0 16px 16px 0;
    border-color: transparent #f09431 transparent transparent;
  }
  .mcArrow{
    display: block;
    position: absolute;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 9.375px 12.5px 9.375px 0;
    border-color: transparent #706f6f transparent transparent;
  }
  .mcArrowG{
    display: block;
    position: absolute;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0 16px 16px 0;
    border-color: transparent #4aa49f transparent transparent;
  }
  .mcArrow3Green{
    display: block;
    position: absolute;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 9.375px 12.5px 9.375px 0; /* Arrow 3: Lef */
    border-color: transparent #4aa49f transparent transparent; /*Green*/
  }
  .mcArrow3Gray{
    display: block;
    position: absolute;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 9.375px 12.5px 9.375px 0; /* Arrow 3: Lef */
    border-color: transparent #706f6f transparent transparent; /*Gray*/
  }
  .mcArrow1Gray{
    display: block;
    position: absolute;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0 16px 16px 0; /* Arrow 1: Right-Up */
    border-color: transparent #706f6f transparent transparent; /* Gray */
  }
  .mcArrow1Green{
    display: block;
    position: absolute;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0 16px 16px 0; /* Arrow 1: Right-Up */
    border-color: transparent  #4aa49f transparent transparent; /* Gray */
  }
  .mcArrow1Blue{
    display: block;
    position: absolute;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0 16px 16px 0; /* Arrow 1: Right-Up */
    border-color: transparent  #3e568c transparent transparent; /* Orange */
  }
  .mcArrow1Use{
    display: block;
    position: absolute;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0 16px 16px 0; /* Arrow 1: Right-Up */
    border-color: transparent  #f09431 transparent transparent; /* Orange */
  }
  .mcArrow3Use{
    display: block;
    position: absolute;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 9.375px 12.5px 9.375px 0;  /* Arrow 3: Lef */
    border-color: transparent  #f09431 transparent transparent; /* Orange */
  }
  .mcArrow3Blue{
    display: block;
    position: absolute;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 9.375px 12.5px 9.375px 0;  /* Arrow 3: Lef */
    border-color: transparent  #3e568c transparent transparent; /* Orange */
  }
  .mcTriangle {
    top: 425px;
    left: 470px;
  }
  .mcTriangle-1{
    top: 440px;
    left: 455px;
  }
  .mcTriangle-2 {
    top: 470px;
    left: 330px;
  }
  .mcTriangle-3{
    top: 470px;
    left: 310px;
  }
  .mcOther{
    margin-left: -4rem;
    margin-top: 0.75rem;
  }
  .mcCV{
    margin-left: -3rem;
    margin-top: 0.75rem;
  }
  .mcCNC{
    margin-top: 4.25rem;
    margin-left: 0rem;
  }
  .mcCNC:nth-child(odd){
    /* margin-top: -1.75rem;
    margin-left: -10px; */
  }
  .c3{
    top: 670px;
    left: 210px;
  }
  .c4{
    top: 670px;
    left: 280px;
  }
  .c5{
    top: 670px;
    left: 355px;
  }
  .c6{
    top: 670px;
    left: 430px;
  }
  .c0{
    top: 370px;
    left: 115px;
  }
  .c1{
    top: 255px;
    left: 875px;
  }
  .c2{
    top: 670px;
    left: 115px;
  }
  .c8{
    top: 121.5px;
    left: 536.7px;
  }
  .c7{
    top: 255px;
    left: 536.7px;
  }
  /* .c7{ */
    /* top: 365px; */
    /* left: 553.5px; */
  /* } */
  .mc-small{
    border-radius: 18px;
    height: 18px;
    width: 18px;
    display: inline-block;
    margin-right: 10px;
  }
  .mc-run{
    /* background-image: radial-gradient(white, #4aa49f 30%, #118781 50%, rgba(255,255,255,0.8) 50%, rgba(255,255,255,0.6) 100%); */
    background-image: url('/assets/System/Run.png')  no-repeat center;
    background-size: contain;
  }
  .mc-shut{
    background-image: radial-gradient(white, #C0C0C0 30%, #808A87 50%, rgba(255,255,255,0.8) 50%, rgba(255,255,255,0.6) 100%);
  }
  .mc-error{
    /* background-image: radial-gradient(white, #f2a14f 30%, #f08e2b 50%, rgba(255,255,255,0.8) 50%, rgba(255,255,255,0.6) 100%); */
    background-image: url('/assets/System/Error.png') no-repeat center;
    background-size: contain;
  }
  .mc-downtime{
    /* background-image: radial-gradient(white, #5e73a2 30%, #36518d 50%, rgba(255,255,255,0.8) 50%, rgba(255,255,255,0.6) 100%); */
    background-image: url('/assets/System/Idle.png') no-repeat center;
    background-size: contain;
  }
  .resultAnalysis-panel{
    position: relative;
   }
  .resultAnalysis-item{
    z-index: 1000;
    top: 4rem;
    left: 2rem;
    width: 4rem;
    position: absolute;
  }
  .resultAnalysis-items{
    padding-top: 1rem;
    display: block;
    color: #A8ACC2;
    text-align: center;
    font-size: .75rem;
  }
  .resultAnalysis-name{
    border-bottom: 1px solid rgba(0,0,0,.125);
    /* padding-bottom: .25rem; */
  }

</style>
