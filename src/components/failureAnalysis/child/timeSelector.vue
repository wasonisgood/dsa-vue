<template>
	<div class="align-self-center d-flex justify-content-center selectbar">
		<span class="align-self-center mr-3">運作時間選擇:</span>
		<select class="align-self-center mr-3"><option>2019/04/01</option></select>
		<span class="align-self-center mr-3">~</span>
		<select class="align-self-center"><option>2019/04/01</option></select>
	</div>
</template>

<style scoped>
	span{
		color: #6677A8;
		font-family: 'Microsoft JhengHei Light', sans-serif;
		font-size: 16px;
	}
	select{
		width: 157px;
		height: 27px;
		color: #6a7cb1;
		background-color: white;
		border: 1px solid #8598c1;
		border-radius: 0px;
		font-size: 14px;
		letter-spacing: 0.5px;
		text-align: center;
		text-align-last: center;
	}
	.selectbar{
		width: 1746px;
		height: 50px;
		background-color: #EDF2F8;
		box-shadow: 2px 2px 6px #888;
	}
</style>