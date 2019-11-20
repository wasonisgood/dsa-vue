<template>
	<div class="subtitle d-flex justify-content-between">
		<span class="h-100 d-flex">
			<img :src="subtitleInfo.iconSrc" class="align-self-center" height="23" width="23" />
			<span class="align-self-center ml-2 text-size-18 text-weight-bold text-black-1">{{subtitleInfo.text}}</span>
		</span>
		<input v-if="subtitleInfo.type == 'input'" class="align-self-center background-primary text-center text-blue-1 text-weight-light text-size-13" :value="subtitleInfo.inputValue"></input>
	</div>
</template>

<script>
	export default{
		name: "subtitle",
		props: {
			subtitleInfo: Object, 
		},
	}
</script>

<style>
.background-primary{
	background-color: #eaeff8;
}

.subtitle{
	width: calc(100% - 1.57vw);
	height: 4.814814814vh;
	border-bottom: 1px #8192b9 solid;
	margin-left: 0.785vw;
}

.subtitle input{
	height: 2.314814814vh;
	width: 7.34375vw;
	border: 1px #8092b8 solid;
	margin-right: 2vw;
}

.subtitle img{
	margin-left:1.16vw;
}

.text-blue-1{
	color: #6a7cb1;
}

.text-black-1{
	color: #434b5d;
}

.text-size-13{
	font-size: 0.8125rem;
}

.text-size-18{
	font-size: 1.125rem;
}

.text-weight-bold{
	font-weight: 700;
}


.text-weight-light{
	font-weight: 300;
}

</style>