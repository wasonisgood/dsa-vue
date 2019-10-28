var names = [];
var dataPie = [];
var total = 0;
var energy_total = 0;
var machineProgress=0;
var totalPowerProgress=0;
var last=0;
var last_power_info=0;
var last_product_count_array=[];
var qq;
function arraysEqual(a, b) {
  if (a === b) return true;
  if (a == null || b == null) return false;
  if (a.length != b.length) return false;

  for (var i = 0; i < a.length; ++i) {
    if (a[i] !== b[i]) return false;
  }
  return true;
}
setInterval(function () {
	$.ajax({
	  url: "main.php",
	  type: "GET",
	  dataType: "json",
	  success: function(Jdata) {
	  var tableRef = document.getElementById('tableQ').getElementsByTagName('tbody')[0];
	  var health_array = (Jdata.MainPage.product_info); // Get sexy JSON from main.php
		  // var output_array = (Jdata.MainPage.output_info); // Get sexy JSON from main.php


	  if (health_array!=last)
        {
        	$("#machineTableEmpty").empty();
	        for(var i=0; i<health_array.length;i++)
	        {
	        	var newRow   = tableRef.insertRow(tableRef.rows.length);
	        	var newCell  = newRow.insertCell(0);
	        	var newCell2  = newRow.insertCell(0);
	        	var newCell3  = newRow.insertCell(0);
	        	var newCell4  = newRow.insertCell(0);
	        	var newCell5  = newRow.insertCell(0);
	        	var newCell6  = newRow.insertCell(0);
				var newText  = document.createTextNode(Jdata.MainPage.product_info[i]);
				var newText2  = document.createTextNode(Jdata.MainPage.product_info[i+1]);
				var newText3  = document.createTextNode(Jdata.MainPage.product_info[i+2]);
				var newText4 = document.createTextNode(Jdata.MainPage.product_info[i+3]);
				var newText5  = document.createTextNode(Jdata.MainPage.product_info[i+4]);
				var newText6  = document.createTextNode(Jdata.MainPage.product_info[i+5]);
				newCell.appendChild(newText6);
				newCell2.appendChild(newText5);
				newCell3.appendChild(newText4);
				newCell4.appendChild(newText3);
				newCell5.appendChild(newText2);
				newCell6.appendChild(newText);
				i+=5;
	        }
	    }
        last = health_array;

        if(Jdata.MainPage.power_info!=last_power_info)
        {
        	gauge.set(Math.round(Jdata.MainPage.power_info));
        }
        last_power_info = Jdata.MainPage.power_info
        
	  	total = 0;
	  	totalPower_array = Jdata.MainPage.energy_info.map(function(v){return +v});
	  	var NumOfJData = Jdata.MainPage.output_info.product_count_array.length; //NumOfJData=3
      for(let j = 3; j >-1 ; j--){
        machineProgress = Jdata.MainPage.cnc_oee[j];
        totalPowerProgress = Jdata.MainPage.energy_info[j];
        energy_total = Jdata.MainPage.energy_info[3]
        
        if(j==0){
        	$('#totalPowerProgressText0').html(`${totalPowerProgress} e-4 kWh`)
        }
        else{
			$('#totalPowerProgressText'+j).html(`${totalPowerProgress} kWh`)
		}
		
		let TPwidth = Math.round(totalPowerProgress/energy_total*100);
		if(j==1||j==2){
			$('#totalPowerProgressBar'+j).css({'width':`${TPwidth}%`,'background':RBColor[j]})
		}
		else{
			$('#totalPowerProgressBar'+j).css({'width':`${energy_total}%`,'background':RBColor[j]})
		}
		$('#machineProgressBar'+j).css({'width':`${machineProgress}%`,'background':RBColor[j]})
		if(j==1||j==2){
			if(totalPowerProgress <= 50){
			$('#totalPowerProgressText'+j).css({'color':'#333333','width':`calc( 100% - .5rem)`})
			}
			else{
				$('#totalPowerProgressText'+j).css({'color':'#ffffff','width':`${TPwidth - 1}%`})
			}
		}
		else{
			$('#totalPowerProgressText'+j).css({'color':'#fff','width':`calc( 100% - .5rem)`})
		}
		if(machineProgress <= 50 || machineProgress > 99){
			if(machineProgress <= 50){
				$('#machineProgressText'+j).css({'color':'#333333'})
			}
			else{
				$('#machineProgressText'+j).css({'color':'#ffffff'})
			}
			$('#machineProgressText'+j).css({'width':`calc( 100% - .5rem)`})
		}
		else{
			$('#machineProgressText'+j).css({'color':'#ffffff','width':`${machineProgress - 1}%`})
		}
        $('#machineProgressText'+j).html(`${machineProgress} %`)
        
        lineData.push([]);
     }
     	var output_info = Jdata.MainPage.output_info.product_count_array;


     	if(!arraysEqual(output_info,last_product_count_array))
     	{
     		for (var i = 0;i<NumOfJData;i++)
			 {
			 	total += Jdata.MainPage.output_info.product_count_array[i];
			}
		  	for (var i = 0;i<NumOfJData;i++)
			 {
			 	window.pieData[i]['z'] = Jdata.MainPage.output_info.product_count_array[i]
			 	window.pieData[i]['name'] = Jdata.MainPage.output_info.product_name_array[i]
			 	window.pieData[i]['y'] = Math.round(Jdata.MainPage.output_info.product_count_array[i]/total * 100)
				 window.PieChart.update({
					title: {
						text: '',
					},
					series: [{
						data: window.pieData
					}]
				})
				dataPie = [];
				names = [];
			}

     	}
		last_product_count_array = output_info;
    for (var i =0;i<Jdata.MainPage.sys_condition.length-1;i++)
        {
            if (Jdata.MainPage.sys_condition[i]==1)
            {
                qq="mc-run";
            }else if(Jdata.MainPage.sys_condition[i]==2)
            {
                qq="mc-error";
            }
            else if(Jdata.MainPage.sys_condition[i]==3)
            {
                qq="mc-downtime";
            }
            else
            {
            	qq="mc-shut";
			}
			if(document.getElementById("c"+ i) !== null){
				document.getElementById("c"+ i).className="mc c"+i+" "+qq;
			}
        }
        switch(Jdata.MainPage.sys_condition[9]) {
			
		     case 0:
				 /*
				 * arr1/arr2 : 應該是右上的箭頭
				 * arr3/arr4 : 應該是往左邊的箭頭
				 * arrowGreen : 綠燈
				 * arrowGrey : 灰燈
				 * arrowUse : 橘燈
				 *
				 * 總之, 我改用最笨的寫法, 也是最安全的寫法, 就是一個Arrow一個class
				 * */

				 document.getElementById("arr1").className="mcArrow1Gray mcTriangle";
				 document.getElementById("arr2").className="mcArrow1Gray mcTriangle-1";
				 document.getElementById("arr3").className="mcArrow3Gray mcTriangle-2";
				 document.getElementById("arr4").className="mcArrow3Gray mcTriangle-3";

				/*
		        document.getElementById("arr1").className="mcArrow mcTriangle";
		        document.getElementById("arr2").className="mcArrow mcTriangle-1";
		        document.getElementById("arr3").className="mcArrow mcTriangle-2";
		        document.getElementById("arr4").className="mcArrow mcTriangle-3";
		        */

		        break;
			case 1:
		     	console.log("QQ")

				 /*
		        document.getElementById("arr1").className="mcArrow mcTriangle";
		        document.getElementById("arr2").className="mcArrow mcTriangle-1";
		        document.getElementById("arr3").className="mcArrowG mcTriangle-2";
		        document.getElementById("arr4").className="mcArrowG mcTriangle-3";
				*/

				document.getElementById("arr1").className="mcArrow1Gray mcTriangle";
				document.getElementById("arr2").className="mcArrow1Gray mcTriangle-1";
				document.getElementById("arr3").className="mcArrow3Green mcTriangle-2";
				document.getElementById("arr4").className="mcArrow3Green mcTriangle-3";


		        break;
		     case 2:
				 /*
				  document.getElementById("arr1").className="mcArrowG mcTriangle";
				  document.getElementById("arr2").className="mcArrowG mcTriangle-1";
				  document.getElementById("arr3").className="mcArrow mcTriangle-2";
				  document.getElementById("arr4").className="mcArrow mcTriangle-3";
				  */

				 document.getElementById("arr1").className="mcArrow1Green mcTriangle";
				 document.getElementById("arr2").className="mcArrow1Green mcTriangle-1";
				 document.getElementById("arr3").className="mcArrow3Gray mcTriangle-2";
				 document.getElementById("arr4").className="mcArrow3Gray mcTriangle-3";
		        break;
		     case 8:

				/*
		        document.getElementById("arr1").className="mcArrowUse mcTriangle";
		        document.getElementById("arr2").className="mcArrowUse mcTriangle-1";
		        document.getElementById("arr3").className="mcArrowUse mcTriangle-2";
		        document.getElementById("arr4").className="mcArrowUse mcTriangle-3";
				*/

				 document.getElementById("arr1").className="mcArrow1Use mcTriangle";
				 document.getElementById("arr2").className="mcArrow1Use mcTriangle-1";
				 document.getElementById("arr3").className="mcArrow3Use mcTriangle-2";
				 document.getElementById("arr4").className="mcArrow3Use mcTriangle-3";
				 break;	
		     case 9:

				/*
		        document.getElementById("arr1").className="mcArrowUse mcTriangle";
		        document.getElementById("arr2").className="mcArrowUse mcTriangle-1";
		        document.getElementById("arr3").className="mcArrowUse mcTriangle-2";
		        document.getElementById("arr4").className="mcArrowUse mcTriangle-3";
				*/

				 document.getElementById("arr1").className="mcArrow1Blue mcTriangle";
				 document.getElementById("arr2").className="mcArrow1Blue mcTriangle-1";
				 document.getElementById("arr3").className="mcArrow3Blue mcTriangle-2";
				 document.getElementById("arr4").className="mcArrow3Blue mcTriangle-3";
				 break;
				 
		     default:
		        break;
		} 
	  },
	  error: function() {
	     console.log("ERROR!!!");
	  }
	});


},1000)

window.pieData =[
		{
			name: 'A',
			y: 10,
			z: 5,
		},
		{
			name: 'B',
			y: 10,
			z: 5,
		},
		{
			name: 'C',
			y: 10,
			z: 5,
		}
]

window.pieDatas = [...window.pieData]
let ReSet = ( num) =>{
	clearInterval(window.AutoStart)
	for(let i = 0 ; i < PieChart.series[0].data.length ; i++){
		PieChart.series[2].data[i].sliced = false
		PieChart.series[2].data[i].selected = false
		PieChart.series[2].data[i].color = 'rgb(255,255,255,0)'
	}
	PieChart.series[2].data[pieView].color = PieChart.series[0].data[pieView].color
	PieChart.series[2].data[pieView].sliced = true
	PieChart.series[2].data[pieView].selected = true
	let series = PieChart.series[0];
	list = series.data
	PieChart.series[2].setData(PieChart.series[2].data,true);
	window.PieChart.setTitle({
		text: 
		`<div style="text-align: center;">
			<div>${list[num].name}</div>
			<div style="font-size:1.25rem;font-weight: 700;">${list[num].y} %</div>
			<hr style="margin:.25rem; border-top: 1px solid #A8ACC2; width: 6rem;">
			<div>${list[num].z} pcs</div>
		</div>`}, false, true) 
	window.AutoStart = setInterval( window.pieCarousel, 3000);
}
window.window.PieChart = Highcharts.chart('resultAnalysis-content', {
	chart: {
		height: 240,
		spacing : [ 0, -100 , 0 , 0],
		type: 'pie',
		useHTML:true,
		events: {
			render: function() {
				let series = this.series
				let sum = 0
				for(let i = 0; i < series.length; i++) {
					if(series[i].visible){
						for(let j = 0; j < series[i].data.length; j++) {
							sum += series[i].data[j].y
						}
					}
				}
				this.setTitle({text: '<div class="fcenter"><b>名稱</b><br><hr"><br>' +
								  + sum +'pcs</div>',y:100}, false, false) 
			}
		}
	},
	title: {
		floating:true,
		useHTML:true,
		title:"",
		style:{ color:'#A8ACC2',fontSize: 14 }
		
	},
	credits: {
		enabled: false
	  },
	tooltip: {
		enabled: false,
		pointFormat: '總計:{point.z}pcs'
	},
	legend : false, //圖標
	plotOptions: {
		// series: {
        //     dataLabels: {
        //         enabled: true,
        //         format: '<h6>{point.name} {point.y}%</h6>'
        //     }
		// },
		series:{
            states: {
                inactive:{
                    opacity: 0.9
                },
            },
		},
		pie: {
			slicedOffset: 0,
			size: 200,
			innerSize: '65%',
			shadow: false,
			allowPointSelect: true,
			cursor: 'pointer',
			colors: ['#8695C2','#18AFC6','#45AEA5','#6db8d8'],
			showInLegend: true,
			dataLabels: {
				enabled: false,
				useHTML:true,
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
			data: window.pieData,
			events: {
				click: (e) => {
					pieView = e.point.index
					ReSet(pieView)
				},
			},
		},{
		type: 'pie',
		data: [{
			name: '',
			y:10,
			color:'rgb(255,255,255,0.5)'
		}],
		dataLabels:{
				enabled:false
		},
		size:160,
		innerSize:130
	},
	{
	
		type: 'pie',
		data: window.pieDatas,
			dataLabels:{
				enabled:false
			},
			credits: { enabled: false },
			tooltip: { enabled: false,
			style:{
				pointerEvents: 'none'
			} },
			plotOptions: {
				pie: {
					allowPointSelect: true,
					size: '100%',
				},
				series:{
					selected: false,
				}
			},
			size:125,
			innerSize:117.5
	}]
}, function(c) { // 图表初始化完毕后的会掉函数
	// 环形图圆心
	var centerY = c.series[0].center[1],
		titleHeight = parseInt(c.title.styles.fontSize);
	// 动态设置标题位置
	c.setTitle({
		y:centerY + titleHeight/2
	});
});
window.pieView = 0
window.pieCarousel =  () =>{
	window.pieDatas = [...window.PieChart.series[0].points]
	list = window.pieData
	num = window.pieView++ %window.pieData.length;
	let name = document.getElementsByClassName('resultAnalysis-name')
	let number = document.getElementsByClassName('resultAnalysis-number')

	for(let i = 0 ; i < window.pieData.length ; i++){
		// window.pieData[i].selected = false
		// window.pieData[i].sliced = false
		window.PieChart.series[2].data[i].name = window.pieDatas[i].name
		window.PieChart.series[2].data[i].y = window.pieDatas[i].y
		window.PieChart.series[2].data[i].z = window.pieDatas[i].z
		name[i].innerHTML = `${window.pieData[i].name}  <b>${window.pieData[i].y}</b>'%`
		number[i].innerHTML = `${window.pieData[i].z} pcs`
		window.PieChart.series[2].data[i].sliced = false
		window.PieChart.series[2].data[i].selected = false
		window.PieChart.series[2].data[i].color = 'rgb(255,255,255,0)'
	}
	// data.selected = true
	// data.sliced = true
	window.PieChart.series[2].data[num].color = window.PieChart.series[0].data[num].color
	window.PieChart.series[2].data[num].selected = false
	window.PieChart.series[2].data[num].sliced = false
	window.PieChart.series[2].setData(window.PieChart.series[2].data,true);
	
	
	window.PieChart.setTitle({
		text: 
		`<div style="text-align: center;">
			<div>${list[num].name}</div>
			<div style="font-size:1.25rem;font-weight: 700;">${list[num].y} %</div>
			<hr style="margin:.25rem; border-top: 1px solid #A8ACC2; width: 6rem;">
			<div>${list[num].z} pcs</div>
		</div>`}, false, false) 
}
window.AutoStart = setInterval( window.pieCarousel, 3000);



var RBColor =  [
                '#8791c0',
                '#77b5af',
                '#70b2c8',
                '#23c5fb',
            ]
var DAColor = ['#84889d'];
var lineData =[],labelData= [],labelsData=[];
 var secs = 7
 var sec = 60
 for(let i = sec; i > 0 ; i--){

     labelData.push(i)
  }
 lineData.map((index,value)=>{
     for(let i = sec; i > 0 ; i--){
         index.push( Math.floor(Math.random() * 30)+10);
     }
 })


 var opts = {
    angle: 0, // The span of the gauge arc
    lineWidth: 0.25, // The line thickness
    radiusScale: 1, // Relative radius
    pointer: {
      length: 0.25, // // Relative to gauge radius
      strokeWidth: 0.054, // The thickness
      color: '#696969' // Fill color
    },
    limitMax: false,     // If false, max value increases automatically if value > maxValue
    limitMin: false,     // If true, the min value of the gauge will be fixed
    colorStart: '#6FADCF',   // Colors
    colorStop: '#8FC0DA',    // just experiment with them
    strokeColor: '#E0E0E0',  // to see which ones work best for you
    generateGradient: true,
    highDpiSupport: true,     // High resolution support
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
        {strokeStyle: '#49A59E', min: 0, max: 860},
        {strokeStyle: '#28A4BC', min: 860, max: 1640},
        {strokeStyle: '#697BB0', min: 1640, max: 2500},
     ],
  };
  var target = document.getElementById('nowPower'); // your canvas element
  var gauge = new Gauge(target).setOptions(opts); // create sexy gauge!
  gauge.setTextField(document.getElementById("nowPower-Value"));
  gauge.maxValue = 2500; // set max gauge value
  gauge.setMinValue(0);  // Prefer setter over gauge.minValue = 0
  gauge.set(0); // set actual value
