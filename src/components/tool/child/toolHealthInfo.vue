<template>
	<div class="tool-info-left d-flex">
		<img class="align-self-center" :src="toolHealthInfoData.imgSrc"/>
		<div class="d-flex flex-column text-blue-1 justify-content-between">
			<span class="d-flex flex-column">
				<span class="align-self-center d-flex" style="border-bottom: 1px #bac3d1 solid; line-height: 2rem;">
					<span class="text-weight-light text-blue-1 text-size-28">◎</span>
					<span class="text-weight-light text-blue-1 text-size-13" >刀具壽命正常合計</span>
				</span>
				<span class="align-self-center text-weight-bold text-blue-1 text-size-21">{{toolHealthInfoData.normal}}</span>
			</span>
			<span class="d-flex flex-column">
				<span class="align-self-center d-flex" style="border-bottom: 1px #bac3d1 solid; line-height: 2rem;">
					<span class="text-weight-light text-blue-1 text-size-28">◎</span>
					<span class="text-weight-light text-blue-1 text-size-13" >刀具壽命警告合計</span>
				</span>
				<span class="align-self-center text-family-1 text-weight-bold text-blue-1 text-size-21">{{toolHealthInfoData.warning}}</span>
			</span>
			<span class="d-flex flex-column">
				<span class="align-self-center d-flex" style="border-bottom: 1px #bac3d1 solid; line-height: 2rem;">
					<span class="text-weight-light text-blue-1 text-size-28">◎</span>
					<span class="text-weight-light text-blue-1 text-size-13" >刀具壽命異常合計</span>
				</span>
				<span class="align-self-center text-weight-bold text-blue-1 text-size-21">{{toolHealthInfoData.error}}</span>
			</span>
		</div>
	</div>
</template>

<script>
	export default{
		name: "toolHealthInfo",
		props: {
			toolHealthInfoData: Object, 
		},
	}
</script>

<style>
.tool-info-left{
	width: 27.4vw;
	margin-left: 1.5vw;
}

.tool-info-left img{
	width: 15.625vw;
	height: 25vh;
	margin-top: 5.17vh;
}

.tool-info-left div{
	width: 11.775vw;
	height: 22vh;
	margin-top: 6.17vh;
}

.text-blue-1{
	color: #6a7cb1;
}

.text-size-13{
	font-size: 0.8125rem;
}

.text-size-21{
	font-size: 1.3125rem;
}

.text-size-28{
	font-size: 1.75rem;
}

.text-weight-bold{
	font-weight: 700;
}

.text-weight-light{
	font-weight: 300;
}
</style>