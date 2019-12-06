<template scoped>
	<div>
		<asideNav></asideNav>
		<div class="d-flex justify-content-between" style="height: 82.4074074vh; width: 94.354166vw; margin-left: 4.177083vw;">
			<!--左側版面--->
			<div class="leftside align-self-center bg-white d-flex flex-column">
				<subtitle :subtitleInfo = "subtitle.costimate"></subtitle>
				<settingBoard class="align-self-center mt-4" boardStyle="horizon"></settingBoard>
				<div class="pieChartDiv align-self-center mt-3 d-flex">
					<pieChart :pieObject="pie" style="width:70%;"></pieChart>
					<div class="d-flex flex-column justify-content-center" style="width:30%; height:100%;">
						<div class="mt-5 align-self-center d-flex flex-column justify-content-center" style="border:1px solid #8898bd; width: 125px; height: 175px; border-radius: .55rem; color: #6a7cb1; font-size: 19px;">
							<span class="align-self-center">總電量</span>
							<span class="align-self-center">1800NT</span>
							<hr class="align-self-center" style="width: 80%;">
							<span class="align-self-center">合計電量</span>
							<span class="align-self-center">1800KW</span>
						</div>
						<blueBtn class="align-self-center mt-5" text="輸入費率"></blueBtn>
					</div>
				</div>
				<!-- table -->
				<tableAnalyze class="align-self-center mt-3"></tableAnalyze>
				<!-- button -->
				<capsule class="mt-4" :capsuleData="capsuleData.costimate" size="normal"></capsule>
			</div>
			<!--右側版面--->
			<div class="rightside align-self-center d-flex flex-column justify-content-between">
				<div class="upper-right bg-white">
					<subtitle :subtitleInfo = "subtitle.statistics"></subtitle>
					<div class="barChartDiv d-flex justify-content-between">
						<barChart :barObject="bar" class="align-self-center" style="width:75%; height:90%;"></barChart>
						<div class="chartLegend align-self-center d-flex flex-column justify-content-around" style="width:20%; height:95%;">
							<blueBtn class="align-self-center mt-3" text="查詢區間用電"></blueBtn>
							<div class="align-self-center d-flex" v-for="item in legend">
								<div><img :src="item.iconSrc"></div>
								<div>{{item.text}}</div>
							</div>
							<capsule :capsuleData="capsuleData.statistics" size="small" class="align-self-center"></capsule>
						</div>
					</div>
				</div>
				<div class="lower-right bg-white">
					<subtitle :subtitleInfo = "subtitle.powerFactor"></subtitle>
					<div class="lineChartDiv d-flex justify-content-between">
						<settingBoard class="align-self-center" boardStyle="vertical"></settingBoard>
						<lineChart :lineChartData="line" class="align-self-center" style="width:82%; height:90%;"></lineChart>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import asideNav from './child/aside.vue';
import subtitle from './child/subtitle.vue';
import settingBoard from './child/settingBoard.vue';
import pieChart from './child/pieChart.vue';
import barChart from './child/barChart.vue';
import lineChart from './child/lineChart.vue';
import tableAnalyze from './child/tableAnalyze.vue';
import capsule from './child/capsule.vue';
import blueBtn from './child/buttonDarkBlue.vue';

export default {
	name: "PowerAnalysis",
	components: {asideNav,subtitle, settingBoard, pieChart, barChart, lineChart, tableAnalyze, capsule, blueBtn},
	data(){
		return{
			subtitle:{
				costimate:{
					iconSrc: require("@/assets/manufacture/power_analysis/icon-01.png"),
					text: "期間電費估算",
					type: "normal",
				},
				statistics:{
					iconSrc: require("@/assets/manufacture/power_analysis/icon-02.png"),
					text: "最高用電統計",
					type: "normal",
				},
				powerFactor:{
					iconSrc: require("@/assets/manufacture/power_analysis/icon-04.png"),
					text: "功率因素",
					type: "legend",
					buttonText: "查詢運行狀態",
					legend:[
						{
							src: require("@/assets/manufacture/power_analysis/col_regular.png"),
							text: 'NXV1020A',
						},
						{
							src: require("@/assets/manufacture/power_analysis/col_attention.png"),
							text: 'NXV600A',
						}	
					],
				}
			},
			pie:{
				id: "pie1",
				pieData: [{
					name: '尖峰',
					y: 900,
					z: 25,
				}, {
					name: '半尖峰',
					y: 450,
					z: 25,
				}, {
					name: '離峰',
					y: 450,
					z: 25,
				}],
				upFlag: false
			},
			bar:{
				id: "bar1",
				data: [
					{ y: 1, color: "#7ABDB6" },
					{ y: 2, color: "#8B99C6" },
					{ y: 3, color: "#8B99C6" },
					{ y: 4, color: "#8B99C6" },
					{ y: 5, color: "#7ABDB6" },
					{ y: 6, color: "#7ABDB6" },
					{ y: 7, color: "#8B99C6" },
					{ y: 8, color: "#8B99C6" },
					{ y: 9, color: "#EBA158" },
					{ y: 10, color: "#8B99C6" }
				]
			},
			line: {
				id: "line1",
				dataList: [{
					showInLegend: false,
					name: 'NXB1020A',
					data: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
					marker: {
						symbol: 'circle'
					},
					color: "#6e81b9",
					upFlag: true
				}, {
					showInLegend: false,
					name: 'NXV600A',
					data: [100, 90, 80, 70, 60, 50, 40, 30, 20, 10, 0],
					marker: {
						symbol: 'circle'
					},
					color: "#44afa5",
					upFlag: false
				}]
			},
			capsuleData:{
				costimate:[
					{
						text: '基本電費',
						value: '100000 NT'
					},
					{
						text: '超約罰款',
						value: '120000 NT'				
					}
				],
				statistics:[
					{
						text: '契約容量',
						value: '1050 kW'
					}
				]
			},
			legend:[
				{
					iconSrc: require("@/assets/manufacture/power_analysis/col_datumLine.png"),
					text: 'DatumLine'
				},
				{
					iconSrc: require("@/assets/manufacture/power_analysis/col_regular.png"),
					text: 'Regular'
				},
				{
					iconSrc: require("@/assets/manufacture/power_analysis/col_attention.png"),
					text: 'Attention'
				},
				{
					iconSrc: require("@/assets/manufacture/power_analysis/col_warning.png"),
					text: 'Warning'
				}
			]
		}
	},
	mounted(){
		setInterval(()=>{
			this.line.dataList[0].data.shift();
			this.line.dataList[1].data.shift();
			this.line.dataList[0].data.push(Math.random()*125);
			this.line.dataList[1].data.push(Math.random()*125);
		}, 1000);
		
		setInterval(() => {
			// this.bar.data.shift();
			// this.bar.data.push({ y: 10, color: "#8B99C6"})
			for(var i=0; i<10; i++){
				this.$set(this.bar.data[i], 'y', Math.round(Math.random()*7+5));
			}
        }, 1000);
		
	}
}
</script>

<style scoped>
	.leftside{
		height: 77.259259vh;
		width: 600px;
		border: 1.5px solid #bbc4d2;
	}
	.rightside{
		height: 77.259259vh;
		width: 1200px;
	}
	.upper-right{
		height: 49%;
		width: 100%;
		border: 1.5px solid #bbc4d2;
	}
	.lower-right{
		height: 49%;
		width: 100%;
		border: 1.5px solid #bbc4d2;
	}
	.pieChartDiv{
		height: 340px;
		width: 87.5%;
	}
	.lineChartDiv{
		width: calc(100% - 3.57vw);
		height: calc(100% - 4.814814814vh);
		margin-left: 1.785vw;
	}
	.barChartDiv{
		width: calc(100% - 3.57vw);
		height: calc(100% - 4.814814814vh);
		margin-left: 1.785vw;
	}
	.chartLegend >div{
		width: 90%;
	}
	.chartLegend >div >div{
		width: 50%;
		color: #8898bd;
		font-size: 14px;
	}
</style>