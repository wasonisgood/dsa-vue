<template>
    <div class="content-body">
        <div class="w-lg-100 w-xs-100 text-left" @click="Toggle(blockMWData)">
            <span class="workTitle">
                <img class="mr-2" width="20" src="@/assets/home/img/tools.png" />加工元件
            </span>
        </div>
        <div class="h-lg-90" id="blockMW" v-show="blockMWData.flag">
            <div class="w-lg-100 w-xs-100">
                <hr />
            </div>
            <div class="h-lg-90 w-lg-100 w-xs-100">
                <div class="cellContent">
                    <div id="collapseMW">
                        <div v-for="(machine, index) in blockMWData.data" v-bind:key="index" class="blockMW">
                            <div class="blockMW__title">
                                <div :class="'BG-' + machine.class">{{machine.name}}</div>
                            </div>
                            <div :class="'blockMW__content ' + machine.class">
                                <div>{{machine.value}}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "blockMW",
    props: {
        blockMWData: { type: Object },
        Toggle: { type: Function }
    }
};
</script>
<style>
.workTitle {
    font-size: 16px;
    padding-left: 1rem;
    padding-top: 0.5rem;
    color: #444a5a;
    float: left;
    font-weight: bold;
}

.content-body {
    border: 0.1rem solid #bbc4d2;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.8);
    text-align: center;
    border-radius: 5px;
}

.cellContent {
    padding: 5% 0;
    height: 100%;
}

#collapseMW {
    height: 100%;
}

.blockMW {
    position: relative;
    height: 50%;
    max-width: 250px;
    margin: auto;
}

.blockMW__title {
    position: absolute;
    width: 68%;
}

.blockMW__title > div {
    letter-spacing: 2;
    line-height: 19px;
    font-size: 12px;
    padding-left: 26px;
    height: 40px;
    font-weight: 700;
    color: #fff;
    clip-path: polygon(
        14px 0,
        calc(100% - 14px) 0,
        100% 50%,
        calc(100% - 114px) 100%,
        14px 100%,
        0 50%
    );
    -webkit-clip-path: polygon(
        14px 0,
        calc(100% - 14px) 0,
        100% 50%,
        calc(100% - 14px) 100%,
        14px 100%,
        0 50%
    );
}

.blockMW__content {
    position: absolute;
    text-align: center;
    width: 100%;
    top: 19px;
    left: 2px;
    filter: drop-shadow(1px 4px 6px rgba(50, 50, 0, 0.3));
}

.blockMW__content > div {
    font-family: "小塚ゴシック Pro", "Kozuka Gothic Pro", sans-serif;
    letter-spacing: 0.8;
    margin-left: 3px;
    font-size: 17px;
    font-weight: 700;
    padding: 16.5px;
    background-color: #fff;
    clip-path: polygon(
        20px 0,
        calc(100% - 20px) 0,
        100% 50%,
        calc(100% - 20px) 100%,
        20px 100%,
        0 50%
    );
    -webkit-clip-path: polygon(
        20px 0,
        calc(100% - 20px) 0,
        100% 50%,
        calc(100% - 20px) 100%,
        20px 100%,
        0 50%
    );
}

.BG-color_blue {
    background-color: #8092b9;
}

.color_blue {
    color: #8092b9;
}

.BG-color_green {
    background-color: #19b0c6;
}

.color_green {
    color: #19b0c6;
}

@media screen and (min-width: 992px) {
    .w-lg-100 {
        float: left;
        width: 100%;
        padding: 5px 15px;
    }
    .h-lg-90 {
        height: 90%;
    }
}

@media screen and (max-width: 992px) {
    .blockMW {
        height: 80px;
        margin-bottom: 10px;
    }
    .w-xs-100 {
        float: left;
        width: 100%;
        padding: 5px 15px;
    }
}

@media screen and (min-width: 1800px) {
    .h-xl-100 {
        height: 100%;
    }
}
</style>
