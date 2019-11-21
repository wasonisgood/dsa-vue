<template>
	<div class="white-container d-flex justify-content-center">
		<table class="d-flex flex-column">
			<thead>
				<tr class="text-center">
					<th>日期</th>
					<th>訂單號碼</th>
					<th>工件名稱</th>
					<th>◄</th>
					<th>刀杯1</th>
					<th>刀杯2</th>
					<th>刀杯3</th>
					<th>刀杯4</th>
					<th>刀杯5</th>
					<th>►</th>
					<th></th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="num in 12" class="text-center">
					<td>2019/0925 10:33:25</td>
					<td>1080926001</td>
					<td>WDR604-A01-P001-1</td>
					<td></td>
					<td>D6鑽頭</td>
					<td>D6鑽頭</td>
					<td>D6鑽頭</td>
					<td>D6鑽頭</td>
					<td>D6鑽頭</td>
					<td></td>
				</tr>
			</tbody>
		</table>
	</div>
</template>

<script>

</script>

<style scoped>
.white-container{
	height: 56.75926296vh;
	width: 100%;
	background-color: #FFF;
}

tbody::-webkit-scrollbar{
	width: 0.9375rem;
}

tbody::-webkit-scrollbar-track{
	border-left: 1px solid #bbc4d2;
	border-right: 1px solid #bbc4d2;
	padding: 0 0;
	background-color: #eaeff8;
}

tbody::-webkit-scrollbar-button:single-button:vertical:decrement{
	border-left: 1px solid #bbc4d2;
	border-right: 1px solid #bbc4d2;
	border-top: 1px solid #bbc4d2;
	background-color: #eaeff8;
	background-image: url("../../../assets/tool/scroll-uparrow.png");
	background-size: 8px 8px;
	background-repeat: no-repeat;
	background-position: 50% 50%;
}

tbody::-webkit-scrollbar-button:single-button:vertical:increment{
	border-left: 1px solid #bbc4d2;
	border-right: 1px solid #bbc4d2;
	border-bottom: 1px solid #bbc4d2;
	background-color: #eaeff8;
	background-image: url("../../../assets/tool/scroll-downarrow.png");
	background-size: 8px 8px;
	background-repeat: no-repeat;
	background-position: 50% 50%;
}

table{
	width: 51.666666vw;
	height: calc(51vh + 34px);
}

thead{
	height: 34px;
	width: 100%;
	display: table;
	table-layout: fixed;
	background-color: #8192b9;
	color: #FFF;
	font-size: 1rem;
}

thead tr th:nth-last-child(1){
	width: 0.9375rem;
}

thead tr th:nth-child(4), thead tr th:nth-child(10), tbody tr td:nth-child(4), tbody tr td:nth-child(10){
	width: 1.2rem;
}

thead tr th:nth-child(1), thead tr th:nth-child(3), tbody tr td:nth-child(1), tbody tr td:nth-child(3){
	width: 12rem;
}

tbody{
	display: block;
	overflow-y: scroll;
	max-height: 51vh;
	width: 100%;
}

tbody tr{
	height: 42px;
	width: 100%;
	display: table;
	table-layout: fixed;
	color: #697BB0;
	font-size: 0.8125rem;
	border-bottom: 1px solid #8598C1;
}

td{
	font-weight: 300!important;
}
</style>