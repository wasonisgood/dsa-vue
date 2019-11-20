<template>
	<div class="health-title d-flex background-primary">
		<img :src="toolHealthState.iconSrc" class="align-self-center ml-2" height="20" width="20"/>
		<span class="align-self-center ml-2 text-blue-1 text-size-14 text-weight-normal">健康狀態</span>
	</div>
</template>

<script>
	export default{
		name: "toolHealthState",
		props: {
			toolHealthState: Object, 
		}
	}
</script>

<style>
.background-primary{
	background-color: #eaeff8;
}

.health-title{
	width: 5.83vw;
	height: 3.15vh;
	position: absolute;
	top: 1.5vh;
	left: 1vw;
	border: 1px #8092b8 solid;
	border-radius: 1.575vh;
}

.text-blue-1{
	color: #6a7cb1;
}

.text-size-14{
	font-size: 0.875rem;
}

.text-weight-normal{
	font-weight: 400;
}
</style>