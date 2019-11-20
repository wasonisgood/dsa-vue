<template>
	<div v-if="show" class="modal-1 background-primary">
		<div class="d-flex flex-column">
			<div class="sn-modal-title d-flex justify-content-center">
				<span class="text-blue-1 align-self-center">領刀表序號</span>
			</div>
			<div class="d-flex">
				<input :value="serialNumber" class="text-blue-1 text-center align-self-center"></input>
				<button @click="ConfirmSerialNumber" class="align-self-center ml-3 d-flex justify-content-center text-weight-normal text-white">
					<img class="mr-2 align-self-center" src="@/assets/tool/check_white.png" height="17" width="17"/>確認
				</button>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		name: "serialNumberModal",
		props: {
			serialNumber: String,
			show: Boolean,
			ConfirmSerialNumber: Function,
		},
		mounted() {
		}
	}
</script>

<style scoped>
.background-primary{
	background-color: #eaeff8;
}

.modal-1{
	width: 20.8vw;
	height: 9.5vh;
	z-index: 10;
	position: fixed;
	left: 38.6vw;
	top: 30.27vh;
	border: 1px #697bb0 solid;
}

.modal-1 input{
	width: 9.32vw;
	margin-left: 1.5rem;
	height: 3.88vh;
	border: 1px #697bb0 solid;
}

.modal-1 button{
	width: 7.23vw;
	height: 2.6vh;
	background-color: #8192b9;
	border: none;
}

.sn-modal-title{
	width: 9.32vw;
	height: 3.3vh;
	margin-left: 1.5rem;
}


.text-blue-1{
	color: #6a7cb1;
}

.text-white-1{
	color: #fff;
}

.text-weight-normal{
	font-weight: 400;
}
</style>