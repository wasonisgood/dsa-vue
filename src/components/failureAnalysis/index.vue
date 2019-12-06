<template scoped>
	<div>
		<asideNav></asideNav>
		<div class="main-container">
			<!-- time select -->
			<div class="w-100 d-flex justify-content-center" style="height: 86px;">
				<timeSelector></timeSelector>
			</div>
			<div class="w-100 d-flex justify-content-between" style="height:calc(100% - 86px);">
				<!-- left-half 設備故障統計 -->
				<div class="d-flex flex-column" style="height:100%; width: 640px;">
					<subtitle :subtitleInfo = "subtitle.statistics"></subtitle>
					<div class="mt-5 d-flex justify-content-center" style="width: calc(100% - 1.57vw); height: 352px; margin-left: 0.785vw;">
						<div class="align-self-center d-flex flex-column justify-content-center ml-4" style="width:30%; height:100%;">
							<div class="align-self-center d-flex flex-column pieInfoBox mb-4 text-center" v-for="item in pie.pieData">
								<span>{{item.name}}</span><hr><span>總計:{{item.y}}次</span>
							</div>
						</div>
						<pieChart :pieObject="pie" class="align-self-center" style="width:70%; height:100%;"></pieChart>
					</div>
					<statisticTable class="mt-5 align-self-center" style="width: 80%;"></statisticTable>
				</div>
				<!-- right-half 故障次數明細 -->
				<div class="d-flex flex-column" style="height:100%; width: calc(100% - 660px);">
					<subtitle :subtitleInfo = "subtitle.details"></subtitle>
					<detailTable style="width: calc(100% - 3.57vw);" class="align-self-center mt-4"></detailTable>
					<div class="mt-3 align-self-center d-flex justify-content-between" style="width: calc(100% - 3.57vw); height: 360px;">
						<settingBoard class="align-self-center" boardStyle="vertical-2" style="height:90%;"></settingBoard>
						<lineChart :lineChartData="line" class="align-self-center" style="width:80%; height:90%;"></lineChart>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import asideNav from '../manufacture/child/aside.vue';
import subtitle from '../manufacture/child/subtitle.vue';
import timeSelector from './child/timeSelector.vue';
import pieChart from '../manufacture/child/pieChart.vue';
import lineChart from '../manufacture/child/lineChart.vue';
import settingBoard from '../manufacture/child/settingBoard.vue';
import statisticTable from './child/statisticTable.vue';
import detailTable from './child/detailTable.vue';

export default {
	name: "FailureAnalysis",
	components: {asideNav, subtitle, timeSelector, pieChart, lineChart, settingBoard, statisticTable, detailTable},
	data(){
		return{
			subtitle:{
				statistics:{
					iconSrc: require("@/assets/manufacture/failure_analysis/icon-01.png"),
					text: "設備故障統計",
					type: "normal",
				},
				details:{
					iconSrc: require("@/assets/manufacture/failure_analysis/icon-02.png"),
					text: "故障次數明細",
					type: "select",
					options: ['NXV1020A', 'NXV600A']
				}
			},
			pie:{
				id: "pie1",
				pieData: [{
					name: 'NVX600A',
					y: 15,
					z: 25,
				}, {
					name: 'NXV1020A',
					y: 10,
					z: 25,
				}],
				upFlag: false
			},
			line: {
				id: "line1",
				type: 'FA',
				dataList: [{
					showInLegend: false,
					name: 'NXB1020A',
					data: [0, 10, 9, 14, 4, 22, 11, 24, 14, 15, 30],
					marker: {
						symbol: 'circle'
					},
					color: "#44afa5",
					upFlag: true
				}]
			},
		}
	},
	mounted(){
		setInterval(()=>{
			this.line.dataList[0].data.shift();
			this.line.dataList[0].data.push(Math.random()*30);
		}, 1000);		
	}
}
</script>

<style scoped>
.main-container{
	height: 77.25925vh;
	width: 94.354166vw;
	margin-left: 4.177083vw;
	margin-top: 2.574074074vh;
	background-color: #FFF;
	border: 1.5px solid #bbc4d2;
}
.pieInfoBox{
    border-radius: initial;
    width: 178px;
    height: fit-content;
    padding: 10px;
    box-shadow: 2px 2px 7px #DDD;
    background-color: rgba(255, 255, 255, 0.7);
    border: 0px;
    font-size: 19px;
	color: #6a7cb1;
	font-weight: 100;
}
</style>