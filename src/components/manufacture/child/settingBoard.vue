<template>
	<div class="d-flex justify-content-center" :class="{'w-100': (boardStyle=='horizon')}">
		<div class="dataSetBoard hor d-flex flex-column" v-if="(boardStyle=='horizon')">
			<div class="dataSetBoard__title align-self-center d-flex justify-content-between">
				<span class="align-self-center">日期設定</span>
				<blueBtn class="align-self-center" text="產出分析圖"></blueBtn>
			</div>
			<div class="dataSetBoard__body align-self-center d-flex justify-content-between">
				<div class="d-flex flex-column justify-content-center">
					<span class="align-self-center mb-1">起始日期</span>
					<select>
						<option>2019-05-09</option>
						<option>2019-05-10</option>
					</select>
				</div>
				<div class="d-flex flex-column justify-content-center">
					<span class="align-self-center mb-1">結束日期</span>
					<select>
						<option>2019-05-10</option>
						<option>2019-05-11</option>
					</select>
				</div>
				<div class="d-flex flex-column justify-content-center">
					<span class="align-self-center mb-1">契約型式</span>
					<select>
						<option value="2"  >兩段式契約</option>
						<option value="3" >三段式契約</option>
					</select>
				</div>
			</div>
		</div>
		<div class="dataSetBoard ver d-flex flex-column" v-else-if="(boardStyle=='vertical')">
			<div class="dataSetBoard__title align-self-center d-flex justify-content-between">
				<span class="align-self-center">分析設定</span>
			</div>
			<div class="dataSetBoard__body align-self-center d-flex flex-column justify-content-around">
				<div class="align-self-center d-flex flex-column justify-content-center">
					<span class="align-self-center mb-1">起始日期</span>
					<select>
						<option>2019-05-09</option>
						<option>2019-05-10</option>
					</select>
				</div>
				<div class="align-self-center d-flex flex-column justify-content-center">
					<span class="align-self-center mb-1">結束日期</span>
					<select>
						<option>2019-05-10</option>
						<option>2019-05-11</option>
					</select>
				</div>
				<div class="align-self-center d-flex flex-column justify-content-center">
					<span class="align-self-center mb-1">(期間)</span>
					<select>
						<option value="2"  >兩段式契約</option>
						<option value="3" >三段式契約</option>
					</select>
				</div>
				<blueBtn class="align-self-center" text="查詢" ></blueBtn>
			</div>
		</div>
		<div class="dataSetBoard ver d-flex flex-column" v-else>
			<div class="dataSetBoard__title align-self-center d-flex justify-content-between">
				<span class="align-self-center">分析設定</span>
			</div>
			<div class="dataSetBoard__body align-self-center d-flex flex-column justify-content-around">
				<div class="align-self-center d-flex flex-column justify-content-center">
					<span class="align-self-center mb-1">指定故障碼</span>
					<select>
						<option>1003</option>
						<option>1004</option>
					</select>
				</div>
				<div class="align-self-center d-flex flex-column justify-content-center">
					<span class="align-self-center mb-1">指定項目</span>
					<select>
						<option value="2" >修復時間</option>
						<option value="3" >故障時間</option>
					</select>
				</div>
				<blueBtn class="align-self-center" text="查詢" ></blueBtn>
			</div>
		</div>	
	</div>	
</template>

<script>
	import blueBtn from './buttonDarkBlue.vue';
	export default{
		name: "dataSetBoard",
		components: {blueBtn},
		props: {
			boardStyle: {type: String}
		}
	}
</script>

<style scoped>
select{
	background-color: #FFF;
	color: #6a7cb1;
	width: 157px;
}

.dataSetBoard{
	background-color: #EBEFF8;
	border: 0.5px #8192b9 solid;
}


.hor{
	height: 12.037037vh;
	width: 87.5%;
}

.ver{
	height: 29.444444vh;
	width: 9.322916vw;
}

.dataSetBoard__title {
	width: calc(100% - 1.57vw);
	height: 4.722222vh !important;
    border-bottom: 1px #C6CAD5 solid;
	color: #8092b8;
}

.dataSetBoard__body{
	width: calc(100% - 1.57vw);
	height: calc(100% - 4.722222vh);
}

.dataSetBoard__body>div span {
    font-size: 12px;
    color: #99969f;
    font-family: 'Microsoft JhengHei', sans-serif;
}
</style>