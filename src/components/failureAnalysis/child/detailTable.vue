<template>
	<div class="r-tableBlock">
		<table class="table r-table table-hover cusScrllBar" id="break-table">
			<thead id="break-search">
				<tr>
					<th>故障搜尋</th>
					<th></th>
					<th></th>
					<th></th>
					<th></th>
					<th v-if="showItem==1"></th>
					<th v-if="showItem==1"></th>
					<th></th>
				</tr>
			</thead>
			<thead>
				<tr>
					<th>故障排序</th>
					<th>故障碼</th>
					<th>故障描述</th>
					<th>故障次數</th>
					<th class="d-flex">
						<span class="breakTableMTR table2 toleft mr-4">◄</span>
						<span>MTTR</span>
						<span class="breakTableMTR table2 toright ml-4">►</span>
					</th>
					<th v-if="showItem==1">
						<span class="breakTableMTR table2 toleft mr-4">◄</span>
						<span>MTBF</span>
						<span class="breakTableMTR table2 toright ml-4">►</span>
					</th>
					<th v-if="showItem==1">
						<span class="breakTableMTR table2 toleft mr-4">◄</span>
						<span>MTTF</span>
						<span class="breakTableMTR table2 toright ml-4">►</span>
					</th>
					<th></th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td scope="row">
						<div>
							<h5 class="rounded-circle bg-dark text-light text-center">1</h5>
						</div>
					</td>
					<td>上料異常</td>
					<td>Robot 取料異常</td>
					<td>13</td>
					<td>4</td>
					<td v-if="showItem==1">6</td>
					<td v-if="showItem==1">11</td>
				</tr>
				<tr>
					<td>
						<div>
							<h5 class="rounded-circle bg-dark text-light text-center">2</h5>
						</div>
					</td>
					<td>沾漿異常</td>
					<td>Robot 取料異常</td>
					<td>3</td>
					<td>8</td>
					<td v-if="showItem==1">7</td>
					<td v-if="showItem==1">0</td>
				</tr>
				<tr>
					<td>
						<div>
							<h5 class="rounded-circle bg-dark text-light text-center">3</h5>
						</div>
					</td>
					<td>沾砂異常</td>
					<td>CNC 加工時異常</td>
					<td>2</td>
					<td>5</td>
					<td v-if="showItem==1">1</td>
					<td v-if="showItem==1">3</td>
				</tr>
				<tr>
					<td>
						<div>
							<h5 class="rounded-circle bg-dark text-light text-center">4</h5>
						</div>
					</td>
					<td>沾砂異常</td>
					<td>CNC 加工時異常</td>
					<td>2</td>
					<td>5</td>
					<td v-if="showItem==1">1</td>
					<td v-if="showItem==1">3</td>
				</tr>
				<tr>
					<td>
						<div>
							<h5 class="rounded-circle bg-dark text-light text-center">5</h5>
						</div>
					</td>
					<td>沾砂異常</td>
					<td>CNC 加工時異常</td>
					<td>2</td>
					<td>5</td>
					<td v-if="showItem==1">1</td>
					<td v-if="showItem==1">3</td>
				</tr>
			</tbody>
		</table>
	</div>	
</template>

<script>
	export default{
		name: 'failureSearchTable',
		props: {
		},
		data(){
			return{
				showItem: 0,
			}
		}
	}
</script>

<style scoped>
.r-table tr {
    display: table;
    table-layout: fixed;
    width: 100%;
}

.r-table tbody tr {
    border-bottom: 1px #C8CEDA solid;
    line-height: 1;
}

.r-table td {
    color: #8898bd;
    border: 0;
    line-height: 24px;
    width: 20%;
    padding: 12px;
    font-family: 'Microsoft JhengHei Light', sans-serif;
    vertical-align: middle;
    text-align: center;
}

.r-table h5 {
    font-size: 20px;
    width: 25px;
    font-weight: bold;
    margin: auto;
}
.r-tableBlock {
    background-color: #EBEFF8;
	height: 285px;
    border: 0.5px #8192b9 solid;
}

.r-table {
    width: calc(100% - 30px);
    margin: 0px 15px 15px;
    font-size: 14px;
    text-align: center
}

.r-table>thead>tr>th {
    color: #7382B0;
    padding: 5px;
    border-top: 0px;
    border-bottom: 0px;
    font-family: 'Microsoft JhengHei Blod', sans-serif;
}

.r-table>thead:first-child th {
    color: #434b5d;
    line-height: 28px;
    padding: 6px 0px;
    font-size: 18px;
    border-bottom: 1.8px solid #C8CEDA;
    font-family: 'Microsoft JhengHei Blod', sans-serif;
}

.r-table>thead:nth-child(2) tr {
    border-bottom: 1.8px solid #6880ac;
}

.r-table>thead:nth-child(2) th:last-child {
    width: 15px;
}

.breakTableMTR {
    display: inline-block;
    cursor: pointer;
}

table tbody{
	max-height: 196px;
}

table tbody{
	overflow-y: scroll !important;
    display: block;
}
thead tr th:nth-last-child(1){
	width: 1.375rem !important;
}
/* table scroll bar style */
tbody::-webkit-scrollbar{
	width: 1.375rem;
}
tbody::-webkit-scrollbar-track{
	border-left: 1px solid #bbc4d2;
	border-right: 1px solid #bbc4d2;
	padding: 0 0;
	background-color: #fff;
}
tbody::-webkit-scrollbar-button:single-button:vertical:decrement{
	border-left: 1px solid #bbc4d2;
	border-right: 1px solid #bbc4d2;
	border-top: 1px solid #bbc4d2;
	background-color: #fff;
	background-image: url("./scroll-uparrow.png");
	background-size: 8px 8px;
	background-repeat: no-repeat;
	background-position: 50% 50%;
}
tbody::-webkit-scrollbar-button:single-button:vertical:increment{
	border-left: 1px solid #bbc4d2;
	border-right: 1px solid #bbc4d2;
	border-bottom: 1px solid #bbc4d2;
	background-color: #fff;
	background-image: url("./scroll-downarrow.png");
	background-size: 8px 8px;
	background-repeat: no-repeat;
	background-position: 50% 50%;
}
</style>