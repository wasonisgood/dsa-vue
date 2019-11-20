<template>
	<div v-if="show" class="modal-2 modal-background">
		<div class="modal-header d-flex justify-content-end">
			<button @click="CloseToolTableModal" class="align-self-center closebtn">
				<img src="@/assets/tool/close.png" width="23" height="23"/>
			</button>
		</div>
		<div class="modal-body">
			<div class="subtitle d-flex">
				<img class="align-self-center mr-2" src="@/assets/tool/info.png" height="23" width="23" />
				<span class="align-self-center text-size-18 text-weight-bold text-black-1">領刀表</span>
			</div>
			<table class="modal-2-table">
				<thead class="background-darkblue-2 text-center text-white text-weight-bold text-size-14">
					<tr>
						<th>編號</th>
						<th>加工刀具</th>
						<th>數量</th>
						<th>刀具壽命</th>
						<th></th>
					</tr>
				</thead>
				<tbody class="text-blue-1 text-center">
						<tr v-for="item in toolTable">
							<td>{{item.id}}</td><td>{{item.tool}}</td><td>{{item.number}}</td><td>{{item.life}}</td>
						</tr>
				</tbody>
			</table>
			<div class="d-flex justify-content-end" style="height: 5.8vh;">
				<button @click="GetSerialNumber" class="align-self-center d-flex justify-content-center button-darkblue background-darkblue-1 ml-3 text-white text-weight-normal">
					<img class="mr-2 align-self-center" src="@/assets/tool/document_white.png" height="17" width="17"/>產生序號
				</button>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		name: "toolTableModal",
		props: {
			toolTable: Array,
			show: Boolean,
			CloseToolTableModal: Function,
			GetSerialNumber: Function,
		},
		mounted() {
		}
	}
</script>

<style>
.text-blue-1{
	color: #6a7cb1;
}

.text-white-1{
	color: #fff;
}

.text-size-14{
	font-size: 0.875rem;
}

.text-size-18{
	font-size: 1.125rem;
}

.text-weight-bold{
	font-weight: 700;
}

.text-weight-normal{
	font-weight: 400;
}

.modal-background{
	background-color: #fff;
}
.modal-2{
	width: 38vw;
	height: 48vh;
	z-index: 1;
	position: fixed;
	left: 29.58vw;
	top: 23.4vh;
}

.modal-2 input{
	height: 2.7vh;
	width: 40%;
	margin-right: 20%;
	border: 1px #697bb0 solid;
}

.modal-2 .modal-body{
	height: 44vh;
}

.modal-2-table{
	height: 30.45vh;
	width: 28.52vw;
	margin-left: 2.2vw;
	margin-top: 2.4vh;
}

.modal-2-table tr{
	height: 3.80625vh;
	border-bottom: 1px #8092b8 solid;
}

.modal-2-table tbody td:nth-child(1), .modal-2-table tbody td:nth-child(2){
	border-left: 1px #8092b8 solid;
}

.modal-header{
	width: 100%;
	height: 4.1vh;
	background-color: #6c80b8;
}

.modal-header button{
	background-color: #6c80b8;
	border: none;
}

.modal-body{
	width: 100%;
	padding: 0 2.1vw;
	box-shadow: 4px 4px 3px #aaa;
}
</style>