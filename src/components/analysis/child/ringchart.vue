<template>
	<div class="background-white h-100">
		<div class="subtitleDiv d-flex">
			<img :src="ringChartData.iconSrc" height="20" width="20" class="align-self-center mr-3"/>
			<span class="subtitle text-style-2 align-self-center">{{ringChartData.title}}</span>
		</div>
		<!-- 圓餅圖 - ringchart-NXV600A.js-->
		<div class="ringChartDiv" :id="ringChartData.chartID">
		</div>
		<!-- 診斷 -->
		<form class="diagnosisForm background-primary">
			<div class="d-flex mt-1 ml-1" style="height: 15%;">
				<span class="col-form-label text-left text-nowrap align-self-center text-style-1">診斷結果 :</span>
				<input class="h-auto text-center align-self-center text-style-1" type="text" value="正常" readonly> </input>
			</div>
			<div class="d-flex h-75 ml-1">
				<span class="col-form-label text-left text-nowrap align-self-start text-style-1">診斷說明 :</span>
				<textarea class="h-100 align-self-center text-style-1" readonly></textarea>
			</div>
		</form>
	</div>	
</template>

<script>
	import Highcharts from 'highcharts';
	export default{
		name: "ringchart",
		props: {
			ringChartData: {type: Object}
		},
		data(){
			return{
				ringChart: undefined,
			}
		},
		mounted() {
			//圓餅圖title根據rem調整offset
			var html = document.getElementsByTagName("html")
			var style = window.getComputedStyle(html[0], null).getPropertyValue('font-size');
			var fontSize = parseFloat(style);
			var color;
			if(this.ringChartData.chartID == 'NXV1020AChart') { color = "#8598c1"}
			if(this.ringChartData.chartID == 'NXV600AChart') { color = "#23afc7"}
			this.ringChart = Highcharts.chart(this.ringChartData.chartID,
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
							y:this.ringChartData.value, color: color
						},{
							y:100-this.ringChartData.value, color: '#ebf0f8'
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
							y:this.ringChartData.value, color: '#cdd4e7'
						},{
							y:100-this.ringChartData.value, color: '#ebf0f8'
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
					text: this.ringChartData.value+'%',
					verticalAlign: 'middle',
					align: 'center',
					margin: 0,
					y: fontSize*3.25,
					floating: true,
					style: {
						fontWeight: 'bold',
						fontSize: '3.25rem',
						color: color
					}
				},
			});
		},
		watch: {
			ringChartData: {
				deep: true,
				handler (){
					this.ringChart.series[0].data[0].update(this.ringChartData.value);
					this.ringChart.series[0].data[1].update(100 - this.ringChartData.value);
					this.ringChart.series[1].data[0].update(this.ringChartData.value);
					this.ringChart.series[1].data[1].update(100 - this.ringChartData.value);
					this.ringChart.setTitle({text: this.ringChartData.value+"%"})
				}
			},
		}
	};
</script>

<style>
.subtitle {
	font-family: arial,"Microsoft JhengHei","微軟正黑體",sans-serif !important;
    font-size: 1.125rem;
    font-weight: bold;
    color: #434b5d;
}

.subtitleDiv {
    width: 94%;
    height: 13%;
    margin: 0 3%;
    color: #000;
    border-bottom: 2px #bbc4d2 solid;
}

.ringChartDiv {
    width: 32.5%;
    height: 86%;
    margin-left: 3%;
    float: left;
}

.diagnosisForm {
    width: 54%;
    height: 71%;
    margin-right: 6%;
    margin-top: 4%;
    float: right;
    border: 1px #bbc4d2 solid;
    padding-right: 20px;
    background-color: rgb(234, 239, 248, 0.8);
}

.diagnosisForm input {
    width: 25%;
}

.diagnosisForm>div>span {
    width: 20%;
    color: #6a7cb1;
    font-size: 1.125rem;
}

.diagnosisForm span {
    line-height: 12px;
}

.diagnosisForm>div>textarea {
    width: 80%;
}

.diagnosisForm>div>input,
.diagnosisForm>div>textarea {
    color: #6a7cb1;
    font-size: 0.75rem;
    border: 1px #bbc4d2 solid;
}

textarea {
    padding-right: -2px;
    padding: 0px !important;
}

.diagnosisForm>div>textarea {
    overflow-y: scroll;
}

textarea::-webkit-scrollbar {
    width: 20px;
    background: rgb(147, 158, 158);
}

.diagnosisDescribe-mobile {
    height: 20vh;
    width: 90%;
    margin-left: 5%;
}

.diagnosisDescribe-mobile textarea {
    height: 80%;
    width: 100%;
    margin-top: 1%;
}

.diagnosisResult-mobile {
    height: 5vh;
    width: 90%;
    margin-left: 5%;
}

.diagnosisResult-mobile input {
    width: 70%;
    margin-left: 5%;
    text-align: center;
}

.text-style-1 {
    font-family: Microsoft JhengHei;
    font-weight: normal;
}

.text-style-2 {
    font-family: Microsoft JhengHei;
    font-weight: bold;
}

textarea {
    resize: none;
    overflow-y: scroll;
}

textarea::-webkit-scrollbar{
    width: 1.375rem;
}

textarea::-webkit-scrollbar-track{
    border-left: 1px solid #bbc4d2;
    border-right: 1px solid #bbc4d2;
    padding: 0 0;
    background-color: #c9d1dc;
}

textarea::-webkit-scrollbar-button:single-button:vertical:decrement{
    border-left: 1px solid #bbc4d2;
    border-right: 1px solid #bbc4d2;
    border-top: 1px solid #bbc4d2;
    background-color: #c9d1dc;
    background-image: url("../../../assets/analysis/scroll-uparrow.png");
    background-size: 8px 8px;
    background-repeat: no-repeat;
    background-position: 50% 50%;
}

textarea::-webkit-scrollbar-button:single-button:vertical:increment{
    border-left: 1px solid #bbc4d2;
    border-right: 1px solid #bbc4d2;
    border-bottom: 1px solid #bbc4d2;
    background-color: #c9d1dc;
    background-image: url("../../../assets/analysis/scroll-downarrow.png");
    background-size: 8px 8px;
    background-repeat: no-repeat;
    background-position: 50% 50%;
}

</style>