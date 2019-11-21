<template>
	<div class="white-container d-flex justify-content-center">
		<div class="blue-container align-self-center d-flex flex-column">
			<div class="ordwork align-self-center d-flex flex-column justify-content-around">
				<div class="w-100 align-self-center d-flex justify-content-center mt-3"><span class="mr-4">訂單號碼:</span><input type="text" /></div>
				<div class="w-100 align-self-center d-flex justify-content-center mb-3"><span><span class="text-left mr-4">工</span><span class="text-right ml-2 mr-4">件:</span></span><input type="text" /></div>
			</div>
			<div class="tool-list align-self-center d-flex justify-content-between">
				<div class="tool-list-half">
					<div class="list-title d-flex">
						<div class="d-flex justify-content-center"><span class="align-self-center">刀塔編號</span></div><div class="d-flex justify-content-center"><span class="align-self-center">加工刀具</span></div>
					</div>
					<div class="list-item d-flex flex-column">
						<div v-for="num in 12" class="d-flex list-item-row">
							<div class="d-flex justify-content-center"><div class="num align-self-center d-flex justify-content-center"><span class="align-self-center">{{num}}</span></div></div>
							<div class="d-flex justify-content-center"><select class="align-self-center"><option>D6鑽頭</option></select></div>
						</div>
					</div>
				</div>
				<div class="tool-list-half">
					<div class="list-title d-flex">
						<div class="d-flex justify-content-center"><span class="align-self-center">刀塔編號</span></div><div class="d-flex justify-content-center"><span class="align-self-center">加工刀具</span></div>
					</div>
					<div class="list-item d-flex flex-column">
						<div v-for="num in 12" class="d-flex list-item-row">
							<div class="d-flex justify-content-center"><div class="num align-self-center d-flex justify-content-center"><span class="align-self-center">{{num}}</span></div></div>
							<div class="d-flex justify-content-center"><select class="align-self-center"><option>D6鑽頭</option></select></div>
						</div>
					</div>
				</div>
			</div>
			<div class="align-self-center d-flex justify-content-between">
				<div></div>
				<button class="align-self-center d-flex justify-content-center button-style-1 text-size-14 text-weight-normal">
					<img class="mr-4 align-self-center" src="@/assets/parameter/2.png" width="17" height="17">刀庫設定
				</button>
			</div>
		</div>		
	</div>
</template>

<script>
	export default{
		data(){
		
		},
	}
</script>

<style scoped>
.white-container{
	width: 100%;
	height: 72.96296296vh;
	background-color: #FFF;
}

.blue-container{
	width: 30.5729166vw;
	height: 67.96296vh;
    border: 1px solid #8598C1;
    background-color: #ECF0F9;
}

.button-style-1{
	width: 7.18vw;
	height: 2.7vh;
	background-color: #8596c0;
	color: #fff;
	border: 0;
}

.tool-list{
	width: calc(100% - 50px);
	height: calc((100% - 12.4074074vh)*0.91 );
	color: #697bb0;
}

.tool-list select{
	background-color: #FFF;
	color: #697bb0;
	font-weight: 300!important;
}

.blue-container>div:nth-child(3){
	width: calc(100% - 50px);
	height: calc((100% - 12.4074074vh)*0.09 );
}

.tool-list-half{
	width: 45%;
	height: 100%;
}

.num{
    background-color: #535E97;
    border-radius: 1.25vh;
    width: 2.5vh !important;
    height: 2.5vh;
    color: #fff;
}

.list-title{
	height: 10%;
	width: 100%;
	border-bottom: 1px #8092b8 solid;
}

.list-title span{
	font-weight: 300!important;
}

.list-title div:nth-child(1){
	width: 35%;
}

.list-title div:nth-child(2){
	width: 65%;
}

.list-item{
	height: 90%;
}

.list-item-row{
	height: calc(100%/12);
	border-bottom: 1px #8092b8 solid;
}

.list-item-row div:nth-child(1){
	width: 35%;
}

.list-item-row div:nth-child(2){
	width: 65%;
}

.list-item-row div:nth-child(2) select{
	width: 90%;
	height: 55%;
}

.ordwork{
	min-height: 12.4074074vh;
	width: calc(100% - 50px);
	color: #697bb0;
	font-size: 1rem;
	border-bottom: 1px #8092b8 solid;
}

.ordwork span{
	font-weight: 300!important;
}

.ordwork input{
    width: 60%;
	border: 0.3px solid #8598c1;
}

.text-size-14{
	font-size: 0.875rem;
}

.text-weight-normal{
	font-weight: 400;
}
</style>