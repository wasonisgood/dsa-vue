<template>
	<div :class="{'tool-storage-content': (type!='phone'), 'phone': (type=='phone')}" class="text-blue-1 background-primary-transparent50 d-flex flex-column" style="padding: 3vh 3.1vw;">
		<div :class="{'flex-column': (type=='phone')}" class="align-self-center d-flex justify-content-between w-100">
			<span class="align-self-center text-size-16 text-blue-1 text-weight-normal">刀桿種類 :</span>
			<select class="align-self-center text-size-14 text-blue-1 text-weight-normal"><option class="text-size-11 text-blue-1 text-weight-normal">ER</option></select>
		</div>
		<div :class="{'flex-column': (type=='phone')}" class="align-self-center d-flex justify-content-between w-100">
			<span class="align-self-center text-size-16 text-blue-1 text-weight-normal">刀具種類 :</span>
			<select class="align-self-center text-size-14 text-blue-1 text-weight-normal"><option class="text-size-11 text-blue-1 text-weight-normal">圓柱銑刀</option></select>
		</div>
		<div :class="{'flex-column': (type=='phone')}" class="align-self-center d-flex justify-content-between w-100">
			<span class="align-self-center text-size-16 text-blue-1 text-weight-normal">刀具長度 :</span>
			<input class="align-self-center text-size-14 text-blue-1 text-weight-normal text-center" value=150></input>
		</div>
		<div :class="{'flex-column': (type=='phone')}" class="align-self-center d-flex justify-content-between w-100">
			<span class="align-self-center text-size-16 text-blue-1 text-weight-normal">刀長補正 :</span>
			<input class="align-self-center text-size-14 text-blue-1 text-weight-normal text-center" value=20></input>
		</div>
		<div :class="{'flex-column': (type=='phone')}" class="align-self-center d-flex justify-content-between w-100">
			<span class="align-self-center text-size-16 text-blue-1 text-weight-normal">刀長磨耗補正 :</span>
			<input class="align-self-center text-size-14 text-blue-1 text-weight-normal text-center" value=20></input>
		</div>
		<div :class="{'flex-column': (type=='phone')}" class="align-self-center d-flex justify-content-between w-100">
			<span class="align-self-center text-size-16 text-blue-1 text-weight-normal">刀長直徑 :</span>
			<input class="align-self-center text-size-14 text-blue-1 text-weight-normal text-center" value=10></input>
		</div>
		<div :class="{'flex-column': (type=='phone')}" class="align-self-center d-flex justify-content-between w-100">
			<span class="align-self-center text-size-16 text-blue-1 text-weight-normal">刀徑磨耗補正 :</span>
			<input class="align-self-center text-size-14 text-blue-1 text-weight-normal text-center" value=20></input>
		</div>
		<div :class="{'flex-column': (type=='phone')}" class="align-self-center d-flex justify-content-between w-100">
			<span class="align-self-center text-size-16 text-blue-1 text-weight-normal">刀具額定壽命 :</span>
			<input class="align-self-center text-size-14 text-blue-1 text-weight-normal text-center" value=100></input>
		</div>
		<div :class="{'flex-column': (type=='phone')}" class="align-self-center d-flex justify-content-between w-100">
			<span class="align-self-center text-size-16 text-blue-1 text-weight-normal">刀具使用次數 :</span>
			<input class="align-self-center text-size-14 text-blue-1 text-weight-normal text-center" value=100></input>
		</div>
	</div>
</template>

<script>
	export default{
		name: "toolStorage",
		props: {
			type: String,
		}
	}
</script>

<style scoped>
input, select{
	border: 0.5px #8092b8 solid;
}

select{
	text-align-last: center;
    -moz-appearance:none;
    -webkit-appearance:none;
    appearance:none;
	background-image: url("../../../assets/tool/select_arrow.png"), linear-gradient(#697bb0, #697bb0);
	background-size: 8px 8px, 1px 80%;
	background-repeat: no-repeat, no-repeat;
	background-position: calc(92.5% + 4px) 50%, 85% 50%;
	background-color: #FFF;
	padding: 0 1rem; 
}

/* scroll bar style */
.tool-storage-content::-webkit-scrollbar{
	width: 1.375rem;
}

.tool-storage-content::-webkit-scrollbar-track{
	border-left: 1px solid #bbc4d2;
	border-right: 1px solid #bbc4d2;
	padding: 0 0;
	background-color: #fff;
}

.tool-storage-content::-webkit-scrollbar-button:single-button:vertical:decrement{
	border-left: 1px solid #bbc4d2;
	border-right: 1px solid #bbc4d2;
	border-top: 1px solid #bbc4d2;
	background-color: #fff;
	background-image: url("../../../assets/tool/scroll-uparrow.png");
	background-size: 8px 8px;
	background-repeat: no-repeat;
	background-position: 50% 50%;
}

.tool-storage-content::-webkit-scrollbar-button:single-button:vertical:increment{
	border-left: 1px solid #bbc4d2;
	border-right: 1px solid #bbc4d2;
	border-bottom: 1px solid #bbc4d2;
	background-color: #fff;
	background-image: url("../../../assets/tool/scroll-downarrow.png");
	background-size: 8px 8px;
	background-repeat: no-repeat;
	background-position: 50% 50%;
}

.background-primary-transparent50{
	background-color: #eaeff880;
}

.text-blue-1{
	color: #6a7cb1;
}

.text-size-11{
	font-size: 0.6875rem;
}

.text-size-14{
	font-size: 0.875rem;
}

.text-size-16{
	font-size: 1rem;
}

.text-weight-normal{
	font-weight: 400;
}

.tool-storage-content{
	width: 21.89vw;
	height: 59.4vh;
	margin-top:2.9vh;
	margin-left: 2.075vw;
	overflow-y: scroll;
}

.tool-storage-content div{
	margin-top: 1.42vh;
}

.tool-storage-content select, .tool-storage-content input{
	width:7.8vw;
	height:2.78vh;
}

.phone select, .phone input{
	width: 100%;
}
</style>