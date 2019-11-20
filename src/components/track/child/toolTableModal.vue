<template>
	<div v-if="toggle" class="modal-2 modal-background">
		<div class="modal-header d-flex justify-content-end"><button @click="Close" class="align-self-center closebtn"><img class="align-self-center" src="@/assets/track/close.png" height="23" width="23" /></button></div>
		<div class="modal-body">
			<div class="subtitle-div-modal d-flex">
				<img class="align-self-center" src="@/assets/track/icon12.png" height="23" width="23" />
				<span class="align-self-center ml-3 text-size-16 text-weight-bold">領刀表</span>
				<input value=10800001 readonly class="align-self-center ml-4 text-center text-blue-1 text-size-13 text-weight-light"/>
				<button class="d-flex align-self-center justify-content-center button-style-1">
					<img class="mr-3 align-self-center" src="@/assets/track/icon1.png" height="15" width="15" />
					<span class="align-self-center text-size-14 text-weight-normal">查詢</span>
				</button>
			</div>
			<table class="modal-2-table">
				<thead class="background-darkblue text-white text-center text-center text-size-14 text-weight-bold">
					<tr>
						<th>編號</th>
						<th>加工刀具</th>
						<th>數量</th>
						<th>刀具壽命</th>
						<th></th>
					</tr>
				</thead>
				<tbody class="text-blue-1 text-center bg-white">
						<tr>
							<td>001</td> <td>D6鑽頭</td> <td>1</td> <td>50</td>
						</tr>
						<tr>
							<td>002</td> <td>D6鑽頭</td> <td>4</td> <td>50</td>
						</tr>
						<tr>
							<td>003</td> <td>D6鑽頭</td> <td>1</td> <td>50</td>
						</tr>
						<tr>
							<td>004</td> <td>D6鑽頭</td> <td>4</td> <td>50</td>
						</tr>
						<tr>
							<td>005</td> <td>D6鑽頭</td> <td>1</td> <td>50</td>
						</tr>
						<tr>
							<td>006</td> <td>D6鑽頭</td> <td>4</td> <td>50</td>
						</tr>
						<tr>
							<td>007</td> <td>D6鑽頭</td> <td>1</td> <td>50</td>
						</tr>
				</tbody>
			</table>
			<div class="d-flex justify-content-end" style="height: 6vh;">
				<button class="align-self-center d-flex justify-content-center button-style-1">
					<img class="mr-3 align-self-center" src="@/assets/track/icon5.png" height="15" width="15" />
					<span class="align-self-center text-size-14 text-weight-normal">出庫</span>
				</button>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		name: "toolTableModal",
		props: {
			Close: Function,
			toggle: Boolean,
		}
	}
</script>

<style scoped>
.modal-2-table tbody::-webkit-scrollbar{
	width: 0.9375rem;
}

.modal-2-table tbody::-webkit-scrollbar-track{
	border-left: 1px solid #bbc4d2;
	border-right: 1px solid #bbc4d2;
	padding: 0 0;
	background-color: #eaeff8;
}

.modal-2-table tbody::-webkit-scrollbar-button:single-button:vertical:decrement{
	border-left: 1px solid #bbc4d2;
	border-right: 1px solid #bbc4d2;
	border-top: 1px solid #bbc4d2;
	background-color: #eaeff8;
	background-image: url("../../../assets/tool/scroll-uparrow.png");
	background-size: 8px 8px;
	background-repeat: no-repeat;
	background-position: 50% 50%;
}

.modal-2-table tbody::-webkit-scrollbar-button:single-button:vertical:increment{
	border-left: 1px solid #bbc4d2;
	border-right: 1px solid #bbc4d2;
	border-bottom: 1px solid #bbc4d2;
	background-color: #eaeff8;
	background-image: url("../../../assets/tool/scroll-downarrow.png");
	background-size: 8px 8px;
	background-repeat: no-repeat;
	background-position: 50% 50%;
} 

.background-darkblue{
	background-color: #8192b9;
}

.closebtn{
	background-color: #ffffff00;
	border: none;
}

.modal-background{
	background-color: rgb(255,255,255,0.8);
}

.modal-2-table thead{
	height: 3.6vh;
}

.modal-2-table thead, .modal-2-table tbody tr{
	display: table;
	width: 100%;
	table-layout: fixed;
}

.modal-2-table tbody{
	width: 100%;
	display: block;
	max-height:26.73vh;
	overflow-y: scroll;
}

.modal-2-table tbody tr{
	height: 3.8185vh;
	border-bottom: 1px #8092b8 solid;
}

.modal-2-table tbody tr td:nth-child(1){
	border-left: 1px #8092b8 solid;
	border-right: 1px #8092b8 solid;
	font-weight: 300;
	font-size: 0.6875rem;
}

.modal-2-table tbody tr td:nth-child(n+2){
	font-weight: 300;
	font-size: 0.875rem;
}

.modal-2-table thead th:nth-last-child(1){
	width: 0.9375rem;
}

.modal-2{
	width: 40.87vw;
	height: 50.8vh;
	z-index: 1;
	position: fixed;
	left: 44.41vw;
	top: 28.13vh;
}

.modal-2 input{
	height: 2.7vh;
	width: 40%;
	margin-right: 20%;
	border: 1px #697bb0 solid;
}

.modal-2 .modal-body{
	height: 46.7vh;
}

.modal-2-table{
	height: 30.45vh;
	width: 28.52vw;
	margin-left: 4.075vw;
	margin-top: 3vh;
}

.modal-header{
	width: 100%;
	height: 4.1vh;
	background-color: #6c80b8;
}

.modal-body{
	width: 100%;
	padding: 0 2.1vw;
	box-shadow: 4px 4px 3px #aaa;
}

.subtitle-div-modal{
	width: calc(100% - 1.57vw);
	height: calc(5.56vh - 2px);
	border-bottom: 1px #8192b9 solid;
	margin-left: 0.785vw;
}

.text-size-13{
	font-size: 0.8125rem;
}

.text-size-14{
	font-size: 0.875rem;
}

.text-size-16{
	font-size: 1rem;
}

.text-weight-normal{
	font-weight: 400;
}

.text-weight-bold{
	font-weight: 700;
}

.text-blue-1{
	color: #6a7cb1;
}
</style>