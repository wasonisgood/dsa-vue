<template>
	<div class="tool-track-search background-primary">
		<div class="tool-track-search-title text-blue-1 d-flex">
			<img class="align-self-center" src="@/assets/track/icon6.png" height="23" width="23" />
			<span class="align-self-center ml-2 text-size-16">刀具查詢</span>
		</div>
		<div class="d-flex">
			<div class="align-self-center d-flex flex-column"><span class="align-self-center text-blue-1 text-size-14 text-weight-light">刀具位置</span><input class="text-center text-blue-2 text-size-11-7 text-weight-light" readonly></input>
			</div>
			<div class="align-self-center d-flex flex-column"><span class="align-self-center text-blue-1 text-size-14 text-weight-light">刀桿種類</span><input class="text-center text-blue-2 text-size-11-7 text-weight-light" readonly></input>
			</div>
			<div class="align-self-center d-flex flex-column"><span class="align-self-center text-blue-1 text-size-14 text-weight-light">刀具種類</span><input value=2 class="text-center text-blue-2 text-size-11-7 text-weight-light" readonly></input>
			</div>
			<div class="align-self-center d-flex flex-column"><span class="align-self-center text-blue-1 text-size-14 text-weight-light">領刀人員</span><input value=026 class="text-center text-blue-2 text-size-11-7 text-weight-light" eadonly></input>
			</div>
			<div class="align-self-center d-flex flex-column"><span class="align-self-center text-blue-1 text-size-14 text-weight-light">領刀日期</span><input value="2019/09/25" class="text-center text-blue-2 text-size-11-7 text-weight-light" readonly></input>
			</div>
			<div class="align-self-center d-flex">
				<button class="mt-4 d-flex justify-content-center button-style-1 text-size-14 text-weight-normal"><img class="mr-4 align-self-center" src="@/assets/track/icon1.png" height="17" width="17" />查詢</button>
				<button @click="ShowToolTable" class="mt-4 d-flex justify-content-center button-style-1 text-size-14 text-weight-normal">
					<img class="mr-4 align-self-center" src="@/assets/track/icon2.png" height="17" width="17" />領刀表
				</button>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		name: "toolTrackSearch",
		props: {
			ShowToolTable: Function,
		},
	}
</script>

<style scoped>
.button-style-1{
	width: 7.18vw;
	height: 2.7vh;
	background-color: #8596c0;
	color: #fff;
	border: 0;
}

.text-blue-1{
	color: #6a7cb1;
}

.text-blue-2{
	color: #8192b9;
}

.text-size-11-7{
	font-size: 0.73125rem;
}

.text-size-14{
	font-size: 0.875rem;
}

.text-size-16{
	font-size: 1rem;
}

.text-weight-light{
	font-weight: 300;
}

.text-weight-normal{
	font-weight: 400;
}

.tool-track-search{
	width: calc(62vw - 2px);
	height: calc(14.44vh - 2px);
	margin-top: 2.9vh;
	padding: 0 1.25vw;
	border: 1px #8092b8 solid;
}

.tool-track-search>div:nth-child(2){
	height: calc(9.49vh - 3px); 
	width: calc(100% - 2.5vw);
	margin-left: 1.25vw;
}

.tool-track-search button:nth-child(1){
	margin-left: 2.70833vw;
}

.tool-track-search button:nth-child(2){
	margin-left: 0.8333vw;
}

.tool-track-search input{
	width:6.24vw;
	height:2.7vh;
	margin-right: 1.5625vw;
	border: 0.5px #8598c1 solid;
}

.tool-track-search>div:nth-child(2) span{
	margin-right: 1.5625vw;
	margin-bottom: 4px;
}

.tool-track-search-title{
	height: calc(4.95vh - 1px);
	border-bottom: 1px #8092b8 solid; 
}
</style>