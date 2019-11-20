<template>
	<div v-if="(type=='computer')" class="tool-storage-button d-flex justify-content-between">
		<img @click="ShowToolRecordModal" class="align-self-center" src="@/assets/track/button-05.png">
		<img class="align-self-center" src="@/assets/track/button-06.png">
		<img class="align-self-center" src="@/assets/track/button-07.png">
	</div>
	<div v-else class="d-flex flex-column justify-content-between">
		<button class="align-self-center text-size-16 text-black-1 text-weight-normal w-100" id="searchbtn">刀具履歷</button>
		<button class="align-self-center text-size-16 text-black-1 text-weight-normal w-100">資訊修改</button>
		<button class="align-self-center text-size-16 text-black-1 text-weight-normal w-100">刀具入庫</button>
	</div>	
</template>

<script>
 export default{
	name: "toolStorageButton",
	props: {
		ShowToolRecordModal: Function,
		type: String,
	}
 }
</script>

<style scoped>
.tool-storage-button{
	height: 9.99vh;
	width: 21.89vw;
	margin-left: 2.075vw;
}

.tool-storage-button img{
	width: 6.14vw;
	height: 3.3vh;
	border: 0;
}
</style>