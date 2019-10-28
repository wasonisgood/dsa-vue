<template>
    <div class="cellContent">
        <div id="collapseMW" class="collapse show">
            <div v-for="(machine, index) in data" v-bind:key="index" class="blockMW">
                <div class="blockMW__title">
                    <div :class="'BG-' + machine.class">{{machine.name}}</div>
                </div>
                <div :class="'blockMW__content ' + machine.class">
                    <div>{{machine.value}}</div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "blockMW",
    props: {
        data: { type: Object },
    }
};
</script>
<style>
/* for machining_workpiece */

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

@media screen and (max-width: 992px) {
    .blockMW {
        height: 80px;
        margin-bottom: 10px;
    }
}
</style>
