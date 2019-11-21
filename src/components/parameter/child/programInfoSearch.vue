<template>
	<div class="white-container d-flex justify-content-center">
		<div class="blue-container align-self-center d-flex flex-column">
			<div class="align-self-center d-flex"><span class="align-self-center ml-3">加工資訊查詢</span></div>
			<div class="align-self-center d-flex justify-content-between">
				<div class="ml-3 d-flex justify-content-between">
					<div class="align-self-center d-flex flex-column"><span class="align-self-center">日期</span><input class="align-self-center"></input></div>
					<div class="align-self-center d-flex flex-column"><span class="align-self-center">訂單號碼</span><input class="align-self-center"></input></div>
					<div class="align-self-center d-flex flex-column"><span class="align-self-center">工件名稱</span><input class="align-self-center"></input></div>
				</div>
				<div class="d-flex justify-content-end"><button class="mr-3 mt-3 align-self-center button-style-1">查詢</button></div>
			</div>
		</div>
	</div>
</template>

<script>

</script>

<style scoped>
*{
	color: #697BB0;
	font-weight: 300!important;
}

input{
	border: 0.3px solid #8598c1;
}

.white-container{
	height: 16.2037vh;
	width: 100%;
	background-color: #FFF;
}

.blue-container{
	width: 51.666666vw;
	height: 12.5vh;
    border: 1px solid #8598C1;
    background-color: #ECF0F9;
}

.blue-container >div:nth-child(1){
	height: 4.6vh;
	width: calc(100% - 50px);
	border-bottom: 1px solid #8598C1;
}

.blue-container >div:nth-child(2){
	height: calc(100% - 4.6vh);
	width: calc(100% - 50px);
}

.blue-container >div:nth-child(2) >div:nth-child(1){
	width: 70%;
}

.blue-container >div:nth-child(2) >div:nth-child(2){
	width: 20%;
}

.button-style-1{
	width: 7.18vw;
	height: 2.7vh;
	background-color: #8596c0;
	color: #fff;
	border: 0;
}
</style>