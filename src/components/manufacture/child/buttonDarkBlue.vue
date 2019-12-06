<template>
	<button type="button" id="printDrew">{{text}}</button>
</template>

<script>
	export default{
		props:{
			text: { type: String},
			func: { type: Function}
		}
	}
</script>

<style scoped>
	button{
		min-width: fit-content;
		font-size: 14px;
		background-color: #869CC9;
		color: white;
		width: 140px;
		height: 29px;
		border-radius: 0px;
		line-height: 11px;
		font-family: 'Microsoft JhengHei', sans-serif;
		border: none;
	}
</style>