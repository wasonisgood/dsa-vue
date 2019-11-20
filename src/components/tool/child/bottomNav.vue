<template>
	<div class="bottom-navbar d-flex background-white d-block d-lg-none">
		<a v-for="(item,index) in titleList" class="bottom-navitem d-flex flex-column">
			<img v-bind:src="item.iconSrc" height="20" width="20" class="align-self-center mt-3"/>
			<span class="align-self-center text-size-13">{{item.navtitle}}</span>
		</a>
	</div>
</template>

<script>
	export default{
		name: "bottomNav",
		props: {
			titleList: Array, 
		}
	}
</script>

<style>
.bottom-navbar{
	position: fixed;
	width: 100%;
	/* overflow-x: scroll; */
	height: 10%;
	bottom: 0px;
}

.bottom-navitem{
	width: 25vw;
	height: 100%;
}

.text-size-13{
	font-size: 0.8125rem;
}

</style>