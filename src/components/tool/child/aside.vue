<template>
	<div>
		<div class="aside d-flex flex-column">
			<router-link to="tool" class="d-flex justify-content-center"><img src="@/assets/tool/aside_1.png" height="30" class="align-self-center"/></router-link> 
			<router-link to="track" class="d-flex justify-content-center"><img src="@/assets/tool/aside_2.png" height="30" class="align-self-center"/></router-link> 
			<router-link to="waterlevel" class="d-flex justify-content-center"><img src="@/assets/tool/aside_3.png" height="30" class="align-self-center"/></router-link> 
			<router-link to="parameter" class="d-flex justify-content-center"><img src="@/assets/tool/aside_4.png" height="30" class="align-self-center"/></router-link> 
		</div>
		<div id="menu1" class="hidden-menu">
			<div class="h-100 d-flex justify-content-center" onclick="javascript:location.href='index.html'">
				<i class="material-icons align-self-center mr-2">◎</i><span class="align-self-center">刀具資訊</span>
			</div>
		</div>
		<div id="menu2" class="hidden-menu">
			<div class="h-100 d-flex justify-content-center" onclick="javascript:location.href='../track/index.html'">
				<i class="material-icons align-self-center mr-2">◎</i><span class="align-self-center">刀具追蹤</span>
			</div>
		</div>
		<div id="menu3" class="hidden-menu">
			<div class="h-100 d-flex justify-content-center" onclick="javascript:location.href='../waterlevel/#/waterlevel/'">
				<i class="material-icons align-self-center mr-2">◎</i><span class="align-self-center">水位分析</span>
			</div>
		</div>
		<div id="menu4" class="hidden-menu">
			<div class="h-100 d-flex justify-content-center" onclick="javascript:location.href='../parameter/index.html'">
				<i class="material-icons align-self-center mr-2">◎</i><span class="align-self-center">訂單管理</span>
			</div>
		</div>
	</div>
</template>

<style scoped>
#menu1{
    top: 1vh;
	z-index: 99;
}

#menu2{
    top: 6.5vh;
	z-index: 99;
}

#menu3{
    top: 12vh;
	z-index: 99;
}

#menu4{
    top: 17.5vh;
	z-index: 99;
}

.aside{
	background: linear-gradient( to bottom, rgb(128,146,184), rgb(128,146,184,0.4) );
	position: fixed;
	left: 0;
	top: 11.851851851vh;
	height: 83.5vh;
	width: 2.55vw;
	margin: 0;
}

.aside img:nth-child(1){
	margin-top: 2vh;
}

.aside img:nth-child(2), .aside img:nth-child(3), .aside img:nth-child(4){
	margin-top: 2.5vh;
}
.hidden-menu{
	height: 5.2vh;
	width: 9vw;
    position: absolute;
    left: 3.8vw;
    background-color: #7f92b9;
    color: white;
    font-size: 1rem;
    display: none;
    box-shadow: 0 0 5px #99969f;
    background-image: linear-gradient(to bottom right, #ffffff,#9ea1c0,#9499b9);
}

.hidden-menu .material-icons{
    font-size: 1.3rem;
}

.hidden-menu:before {
    content: "";
    position: absolute;
    right: 104%;
    top: 37%;
    width: 0;
    height: 0;
    border-top: 10px solid transparent;
    border-left: 11px solid #47598b;
    border-bottom: 10px solid transparent;
}

.material-icons, .hidden-menu, .aside {
    cursor: pointer;
    -webkit-user-select: none;
    user-select: none;
}
</style>