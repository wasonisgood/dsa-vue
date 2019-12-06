<template>
	<div class="capsule" :class="{capsuleSmall: (size=='small') }">
		<div v-for="item in capsuleData">
			<div>{{item.text}}</div>
			<div>{{item.value}}</div>
		</div>
	</div>
</template>

<script>
	export default{
		name: 'capsule',
		props: {
			capsuleData: { type: Array},
			size: { type: String}
		}
	}
</script>

<style scoped>
	.capsule {
		display: flex;
		justify-content: space-around;
		align-items: center;
		flex-wrap: wrap;
	}

	.capsule>div {
		width: 236px;
		display: flex;
	}

	.capsule>div>div {
		font-size: 17.7px;
		height: 47px;
		width: 118px;
		text-align: center;
		line-height: 47px;
		border: 1px solid #84c5d7;
		font-family: "Microsoft JhengHei", sans-serif;
	}

	.capsule>div div:nth-child(1) {
		background-color: #84c5d7;
		color: #ffffff;
		border-top-left-radius: 5px;
		border-bottom-left-radius: 5px;
	}

	.capsule>div div:nth-child(2) {
		color: #84c5d7;
		border-top-right-radius: 5px;
		border-bottom-right-radius: 5px;
	}

	.capsuleSmall>div {
		width: 206px;
		display: flex;
	}

	.capsuleSmall>div>div {
		height: 40px;
		line-height: 40px;
		font-size: 15.6px;
	}
</style>