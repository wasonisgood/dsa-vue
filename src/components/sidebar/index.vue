<template>
<!-- 側邊欄 -->
    <div id="hide">
        <router-link to="waterlevel"><img src="./img/sideicon1.png" height="30" width="30"></router-link>  
        <router-link to="toolana"><img src="./img/sideicon2.png" height="30" width="30"></router-link>
        <router-link to="toolana"><img src="./img/sideicon3.png" height="30" width="30"></router-link>  
        <router-link to="manufacture"><img src="./img/sideicon4.png" height="30" width="30"></router-link>  
        <!-- <img src="./img/sideicon1.png" height="30" width="30"
            onclick="javascript:location.href='../failure_analysis/UI-CNXx4.html'">
        <img src="./img/sideicon2.png" height="30" width="30"
            onclick="javascript:location.href='../failure_analysis/UI-CNXx4.html'">
        <img src="./img/sideicon3.png" height="30" width="30" onclick="javascript:location.href='../機台分析/index.html'">
        <img src="./img/sideicon4.png" height="30" width="30" onclick="javascript:location.href='../報價管理系統/index.html'"> -->
    </div>
    <div id="menu1" class="hidden-menu" onclick="javascript:location.href='../power_analysis/UI-CNXx4.html'"><i class="material-icons">radio_button_checked</i><span>能源分析</span></div>
    <div id="menu2" class="hidden-menu" onclick="javascript:location.href='../failure_analysis/UI-CNXx4.html'"><i class="material-icons">radio_button_checked</i>故障統計</div>
    <div id="menu3" class="hidden-menu" onclick="javascript:location.href='../機台分析/index.html'"><i class="material-icons">radio_button_checked</i>機台比較</div>
    <div id="menu4" class="hidden-menu" onclick="javascript:location.href='../報價管理系統/index.html'"><i class="material-icons">radio_button_checked</i>產能數據分析</div>
    </div>
</template>
<style>
#hide {
    padding-top: 0.3rem;
    width: 2.5rem;
    height: 100%;
    position: fixed;
    left: 0;
    background-color: #7f92b9;
    background-image: linear-gradient(#7f92b9, #a6afcc, #c1c7dd);
    text-align: center;
}

#hide img {
    margin: 0.7rem 0;
}

#menu2 {
    top: 3.2rem;
}

#menu3 {
    top: 6.4rem;
}

#menu4 {
    top: 9.6rem;
}
.hidden-menu {
    position: absolute;
    left: 3.8rem;
    background-color: #7f92b9;
    color: white;
    font-size: 1.3rem;
    padding: 1rem 2rem 1rem 4rem;
    display: none;
    box-shadow: 0 0 5px #99969f;
    background-image: linear-gradient(to bottom right, #ffffff, #9ea1c0, #9499b9);
}

.hidden-menu .material-icons {
    font-size: 1.6rem;
    position: absolute;
    top: 1.1rem;
    left: 1.5rem;
}

.hidden-menu:before {
    content: "";
    position: absolute;
    right: 104%;
    top: 37%;
    width: 0;
    height: 0;
    border-top: 10px solid transparent;
    border-left: 11px solid #000000;
    border-bottom: 10px solid transparent;
}
</style>