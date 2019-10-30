//圓餅圖title根據rem調整offset
var html = document.getElementsByTagName("html")
var style = window.getComputedStyle(html[0], null).getPropertyValue('font-size');
var fontSize = parseFloat(style);
//圓餅圖data
var nav1020a_value = Math.floor(Math.random()*100);
var nvx600a_value = Math.floor(Math.random()*100);

//refersh per sec
setInterval(function(){
	nav1020a_value = Math.floor(Math.random()*100);
	nvx600a_value = Math.floor(Math.random()*100);
	for(var i=0; i<2 ;i++){
		NXV1020A.series[i].data[0].update(y = nav1020a_value);
		NXV1020A_mobile.series[i].data[0].update(y = nav1020a_value);
		NXV600A.series[i].data[0].update(y = nvx600a_value);
		NXV600A_mobile.series[i].data[0].update(y = nvx600a_value);
		
		NXV1020A.series[i].data[1].update(y = 100 - nav1020a_value);
		NXV1020A_mobile.series[i].data[1].update(y = 100 - nav1020a_value);
		NXV600A.series[i].data[1].update(y = 100 - nvx600a_value);
		NXV600A_mobile.series[i].data[1].update(y = 100 - nvx600a_value);
	}
	NXV1020A.setTitle({text:nav1020a_value+'%'})
	NXV1020A_mobile.setTitle({text:nav1020a_value+'%'})
	NXV600A.setTitle({text:nvx600a_value+'%'})
	NXV600A_mobile.setTitle({text:nvx600a_value+'%'})
}, 1000);

var NXV1020A = Highcharts.chart('NXV1020AChart',
{
	chart: {
		type: 'pie'
	},
	credits: {
		enabled: false,  //remove highchart.com logo
	}, 
	series: [
		//圓餅圖外圈
		{
			type: 'pie',
			data: [{
				y:nav1020a_value, color: '#8598c1'
			},{
				y:100-nav1020a_value, color: '#ebf0f8'
			}],
			size: '100%',
			innerSize: '75%',
			animation: false,
			enableMouseTracking: false,
			dataLabels: false,
			borderWidth: 0,
		},
		//圓餅圖內圈(灰色部分)
		{
			type: 'pie',
			data: [{
				y:nav1020a_value, color: '#cdd4e7'
			},{
				y:100-nav1020a_value, color: '#ebf0f8'
			}],
			size: '75%',
			innerSize: '85%',
			animation: false,
			enableMouseTracking: false,
			dataLabels: false,
			borderWidth: 0,
		}
	],
	title: {
		text: nav1020a_value+'%',
		verticalAlign: 'middle',
		align: 'center',
		margin: 0,
		y: fontSize*3.25,
		floating: true,
		style: {
			fontWeight: 'bold',
			fontSize: '3.25rem',
			color: '#8598c1'
		}
	},
});

var NXV1020A_mobile = Highcharts.chart('NXV1020AChart-mobile',
{
	chart: {
		type: 'pie'
	},
	credits: {
		enabled: false,  //remove highchart.com logo
	}, 
	series: [
		//圓餅圖外圈
		{
			type: 'pie',
			data: [{
				y:nav1020a_value, color: '#8598c1'
			},{
				y:100-nav1020a_value, color: '#ebf0f8'
			}],
			size: '100%',
			innerSize: '75%',
			animation: false,
			enableMouseTracking: false,
			dataLabels: false,
			borderWidth: 0,
		},
		//圓餅圖內圈(灰色部分)
		{
			type: 'pie',
			data: [{
				y:nav1020a_value, color: '#cdd4e7'
			},{
				y:100-nav1020a_value, color: '#ebf0f8'
			}],
			size: '75%',
			innerSize: '85%',
			animation: false,
			enableMouseTracking: false,
			dataLabels: false,
			borderWidth: 0,
		}
	],
	title: {
		text: nav1020a_value+'%',
		verticalAlign: 'middle',
		align: 'center',
		margin: 0,
		y: fontSize*3.25,
		floating: true,
		style: {
			fontWeight: 'bold',
			fontSize: '3.25rem',
			color: '#8598c1'
		}
	},
});

var NXV600A = Highcharts.chart('NXV600AChart',
{
	chart: {
		type: 'pie'
	},
	credits: {
		enabled: false,
	}, 
	series: [
		{
			type: 'pie',
			data: [{
				y:nvx600a_value, color: '#23afc7'
			},{
				y:100-nvx600a_value, color: '#ebf0f8'
			}],
			size: '100%',
			innerSize: '75%',
			animation: false,
			enableMouseTracking: false,
			dataLabels: false,
			borderWidth: 0,
		},
		{
			type: 'pie',
			data: [{
				y:nvx600a_value, color: '#cdd4e7'
			},{
				y:100-nvx600a_value, color: '#ebf0f8'
			}],
			size: '75%',
			innerSize: '85%',
			animation: false,
			enableMouseTracking: false,
			dataLabels: false,
			borderWidth: 0,
		}
	],
	title: {
		text: nvx600a_value+'%',
		verticalAlign: 'middle',
		align: 'center',
		margin: 0,
		y: fontSize*3.25,
		floating: true,
		style: {
			fontWeight: 'bold',
			fontSize: '3.25rem',
			color: '#23afc7'
		}
	},
});			   

var NXV600A_mobile = Highcharts.chart('NXV600AChart-mobile',
{
	chart: {
		type: 'pie'
	},
	credits: {
		enabled: false,
	}, 
	series: [
		{
			type: 'pie',
			data: [{
				y:nvx600a_value, color: '#23afc7'
			},{
				y:100-nvx600a_value, color: '#ebf0f8'
			}],
			size: '100%',
			innerSize: '75%',
			animation: false,
			enableMouseTracking: false,
			dataLabels: false,
			borderWidth: 0,
		},
		{
			type: 'pie',
			data: [{
				y:nvx600a_value, color: '#cdd4e7'
			},{
				y:100-nvx600a_value, color: '#ebf0f8'
			}],
			size: '75%',
			innerSize: '85%',
			animation: false,
			enableMouseTracking: false,
			dataLabels: false,
			borderWidth: 0,
		}
	],
	title: {
		text: nvx600a_value+'%',
		verticalAlign: 'middle',
		align: 'center',
		margin: 0,
		y: fontSize*3.25,
		floating: true,
		style: {
			fontWeight: 'bold',
			fontSize: '3.25rem',
			color: '#23afc7'
		}
	},
});	