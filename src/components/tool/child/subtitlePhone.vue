<template>
	<div @click="ToggleContent" class="card-header background-white d-flex">
		<img class="align-self-center" :src="subtitleInfo.iconSrc" height="23" width="23" />
		<span class="align-self-center ml-3">{{subtitleInfo.text}}</span>
	</div>
</template>

<script>
	export default{
		name: "subtitlePhone",
		props: {
			subtitleInfo: Object,
			ToggleContent: Function,
		},
	}
</script>

<style>
.card-header{
	height: 12%;
}

.background-white{
	background-color: #ffffffcc;
}
</style>