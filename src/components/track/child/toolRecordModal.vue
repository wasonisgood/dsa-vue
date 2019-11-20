<template>
	<div v-if="toggle" class="modal-1 modal-background">
		<div class="modal-header d-flex justify-content-end"><button @click="Close" class="align-self-center closebtn"><img class="align-self-center" src="@/assets/track/close.png" height="23" width="23" /></button></div>
		<div class="modal-body" style="height: 44.09vh;">
			<div class="subtitle-div d-flex">
				<img class="align-self-center" src="@/assets/track/icon11.png" height="23" width="23" />
				<span class="align-self-center ml-3 text-size-16 text-weight-bold">刀具履歷</span>
			</div>
			<div class="d-flex justify-content-around">
				<div class="modal-1-selector background-primary">
					<div class="d-flex modal-1-selector-header">
						<span class="align-self-center text-blue-1 text-size-14 text-weight-bold">刀具選擇</span>
					</div>
					<div class="d-flex flex-column">
						<div class="d-flex flex-column justify-content-around">
							<span class="align-self-center text-black-1 text-size-12 text-weight-normal">刀具種類</span>
							<select class="modal-select align-self-center w-75 text-blue-1 text-size-11 text-weight-normal"><option>D6鑽頭</option></select>
							<button class="d-flex justify-content-center align-self-center w-75 button-style-1">
								<img class="mr-3 align-self-center" src="@/assets/track/icon1.png" height="17" width="17" />
								<span class="text-size-14 text-weight-normal">查詢</span>
							</button>
						</div>
						<div class="d-flex flex-column justify-content-around">
							<span class="align-self-center text-black-1 text-size-12 text-weight-normal">刀具壽命</span>
							<input value=100 class="align-self-center w-75 text-center text-blue-1 text-size-11 text-weight-normal"/>
							<button class="d-flex justify-content-center align-self-center w-75 button-style-1">
								<img class="mr-3 align-self-center" src="@/assets/track/modify.png" height="19" width="19" />
								<span class="text-size-14 text-weight-normal">修改</span>
							</button>
						</div>
					</div>
				</div>
				<table class="modal-1-table">
					<thead class="background-darkblue text-white text-center text-size-14 text-weight-bold">
						<tr>
							<th>編號</th>
							<th>加工工件</th>
							<th>工件材質</th>
							<th>使用次數</th>
							<th>加工時間</th>
							<th></th>
						</tr>
					</thead>
					<tbody class="scroll text-blue-1 text-center bg-white">
							<tr>
								<td>001</td> <td>WDR604-A01-P001</td> <td>AL6061</td> <td>50</td> <td>00:24:35</td>
							</tr>
							<tr>
								<td>002</td> <td>WDR604-A01-P001</td> <td>AL6061</td> <td>50</td> <td>00:24:35</td>
							</tr>
							<tr>
								<td>003</td> <td>WDR604-A01-P001</td> <td>AL6061</td> <td>50</td> <td>00:24:35</td>
							</tr>
							<tr>
								<td>004</td> <td>WDR604-A01-P001</td> <td>AL6061</td> <td>50</td> <td>00:24:35</td>
							</tr>
							<tr>
								<td>005</td> <td>WDR604-A01-P001</td> <td>AL6061</td> <td>50</td> <td>00:24:35</td>
							</tr>
							<tr>
								<td>006</td> <td>WDR604-A01-P001</td> <td>AL6061</td> <td>50</td> <td>00:24:35</td>
							</tr>
							<tr>
								<td>007</td> <td>WDR604-A01-P001</td> <td>AL6061</td> <td>50</td> <td>00:24:35</td>
							</tr>
					</tbody>
				</table>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		name: "toolRecordModal",
		props: {
			Close: Function,
			toggle: Boolean,
		}
	}
</script>

<style scoped>
input, select{
	border: 0.5px #8092b8 solid;
}

select{
	text-align-last: center;
    -moz-appearance:none;
    -webkit-appearance:none;
    appearance:none;
	background-image: url("../../../assets/tool/select_arrow.png"), linear-gradient(#697bb0, #697bb0);
	background-size: 8px 8px, 1px 80%;
	background-repeat: no-repeat, no-repeat;
	background-position: calc(92.5% + 4px) 50%, 85% 50%;
	background-color: #FFF;
	padding: 0 1rem; 
}

/* scroll bar style */
.modal-1-table tbody::-webkit-scrollbar{
	width: 0.9375rem;
}

.modal-1-table tbody::-webkit-scrollbar-track{
	border-left: 1px solid #bbc4d2;
	border-right: 1px solid #bbc4d2;
	padding: 0 0;
	background-color: #eaeff8;
}

.modal-1-table tbody::-webkit-scrollbar-button:single-button:vertical:decrement{
	border-left: 1px solid #bbc4d2;
	border-right: 1px solid #bbc4d2;
	border-top: 1px solid #bbc4d2;
	background-color: #eaeff8;
	background-image: url("../../../assets/tool/scroll-uparrow.png");
	background-size: 8px 8px;
	background-repeat: no-repeat;
	background-position: 50% 50%;
}

.modal-1-table tbody::-webkit-scrollbar-button:single-button:vertical:increment{
	border-left: 1px solid #bbc4d2;
	border-right: 1px solid #bbc4d2;
	border-bottom: 1px solid #bbc4d2;
	background-color: #eaeff8;
	background-image: url("../../../assets/tool/scroll-downarrow.png");
	background-size: 8px 8px;
	background-repeat: no-repeat;
	background-position: 50% 50%;
} 

.background-primary{
	background-color: #eaeff8;
}

.background-darkblue{
	background-color: #8192b9;
}

.closebtn{
	background-color: #ffffff00 !important;
	border: none;
}

.modal-header{
	width: 100%;
	height: 4.1vh;
	background-color: #6c80b8;
}

.modal-body{
	width: 100% !important;
	padding: 0 2.1vw !important;
	box-shadow: 4px 4px 3px #aaa !important;
}

.modal-background{
	background-color: rgb(255,255,255,0.8);
}

.modal-1{
	width: 52.94vw;
	height: 48.19vh;
	z-index: 1;
	position: fixed;
	left: 38.38vw;
	top: 28.13vh;
}

.modal-1-selector{
	width: 9.6vw;
	height: 30.33vh;
	margin-top: 3vh;
	border: 1px #8092b8 solid;
	padding: 0 0.5vw;
}

.modal-1-selector input, .modal-1-selector select{
	height: 2.638vh;
	width: 7.2916vw;
	margin: 0;
}

.modal-1-selector-header{
	height: calc(3.6vh - 1px); 
	border-bottom: 1px #8092b8 solid;
}

.modal-1-selector div div:nth-child(2){
	height: 10.34vh;
	margin-top: 2.016vh;
}

.modal-1-selector div div:nth-child(1){
	height: 10.34vh;
	margin-top: 1.5vh;
}

.modal-1-table{
	width: 33.17vw;
	height: 30.33vh;
	border-collapse: collapse;
	margin-top: 3vh;
}

.modal-1-table thead{
	height: 3.6vh;
}

.modal-1-table thead, .modal-1-table tbody tr{
	display: table;
	width: 100%;
	table-layout: fixed;
}

.modal-1-table tbody{
	width: 100%;
	display: block;
	max-height:26.73vh;
	overflow-y: scroll;
}

.modal-1-table tbody tr{
	height: 3.8185vh;
	border-bottom: 1px #8092b8 solid;
}

.modal-1-table tbody tr td:nth-child(1){
	border-left: 1px #8092b8 solid;
	border-right: 1px #8092b8 solid;
	font-weight: 300;
	font-size: 0.6875rem;
}

.modal-1-table tbody tr td:nth-child(n+2){
	font-weight: 300;
	font-size: 0.875rem;
}

.modal-1-table thead th:nth-last-child(1){
	width: 0.9375rem;
}

.modal-1-table thead tr th:nth-child(2), .modal-1-table tbody tr td:nth-child(2){
	width: 30%;
}

.subtitle-div{
	width: calc(100% - 1.57vw);
	height: 4.814814814vh;
	border-bottom: 1px #8192b9 solid;
	margin-left: 0.785vw;
}

.text-black-1{
	color: #434b5d;
}

.text-blue-1{
	color: #6a7cb1;
}

.text-white{
	color: #fff;
}

.text-size-11{
	font-size: 0.6875rem;
}

.text-size-12{
	font-size: 0.75rem;
}

.text-size-14{
	font-size: 0.875rem;
}

.text-size-16{
	font-size: 1rem;
}

.text-weight-bold{
	font-weight: 700;
}

.text-weight-normal{
	font-weight: 400;
}
</style>