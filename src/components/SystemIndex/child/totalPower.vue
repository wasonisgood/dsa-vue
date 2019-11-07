<template>
    <div class="content-body">
        <div class="w-lg-100 w-xs-100 text-left" @click="Toggle(totalPowerData)">
            <span class="workTitle">
                <img class="mr-2" width="20" src="@/assets/home/img/system-status.png" />本月累計用電量
            </span>
        </div>
        <div class="h-lg-90" id="totalPower" v-show="totalPowerData.flag">
            <div class="w-lg-100 w-xs-100">
                <hr />
            </div>
            <div class="h-lg-90 w-lg-100 w-xs-100">
                <div class="totalPower">
                    <div v-for="(energy, index) in title" v-bind:key="index" class="totalPower-data" :style="[index == 0 ? { border: 0 } : {}]">
                        <div class="totalPower-field">
                            <span>{{energy.name}}</span>
                        </div>
                        <div class="totalPower-value">
                            <div class="progress-container">
                                <div :class="energy.class" :style="{ width: (totalPowerData.data[energy.key] / totalPowerData.data.allEnergy * 100) + '%' }">
                                    <span>{{totalPowerData.data[energy.key]}}kwh</span>
                                </div>
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
    name: "totalPower",
    props: {
        totalPowerData: { type: Object },
        Toggle: { type: Function }
    },
    data() {
        return {
            title: [
                { key: "weekEnergy", name: "每週用電", percentage: 0, class: "progress-bar-blue" },
                { key: "monthEnergy", name: "每月用電", percentage: 0, class: "progress-bar-green" },
                { key: "seasonEnergy", name: "每季用電", percentage: 0, class: "progress-bar-blue-green" },
                { key: "accumulatedEnergy", name: "累積用電", percentage: 0, class: "progress-bar-light-blue" }
            ]
        }
    }
};
</script>
<style>
.totalPower {
    height: 100%;
}
.totalPower-data {
    margin: 0;
    border-top: 2px #c6cad5 solid;
    padding: 0.8rem 0;
    font-size: 15px;
    color: #6677a8;
    height: 25%;
}

.totalPower-field {
    width: 30%;
    float: left;
}
.totalPower-value {
    width: 70%;
    float: left;
    padding: 0 10px;
    border-left: 2px #c6cad5 solid;
}
.progress-bar-blue {
    text-align: right;
    padding-right: 5px;
    height: 30px;
    line-height: 30px;
    color: #fff;
    background: #8596c1;
}

.progress-bar-green {
    text-align: right;
    padding-right: 5px;
    height: 30px;
    line-height: 30px;
    color: #fff;
    background: #78bab5;
}

.progress-bar-blue-green {
    text-align: right;
    padding-right: 5px;
    height: 30px;
    line-height: 30px;
    color: #fff;
    background: #19b0c8;
}

.progress-bar-light-blue {
    text-align: right;
    padding-right: 5px;
    height: 30px;
    line-height: 30px;
    color: #fff;
    background: #59c2d9;
}

.progress-container {
    width: 100%;
    height: 30px;
    background: #e8ebee;
    font-weight: 700;
    position: relative;
}

.workTitle {
    font-size: 16px;
    padding-left: 1rem;
    padding-top: 0.5rem;
    color: #444A5A;
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
    .w-xs-100 {
        float: left;
        width: 100%;
        padding: 5px 15px;
    }
    .totalPower {
        height: 200px;
    }
}

@media screen and (min-width: 1800px) {
    .h-xl-100 {
        height: 100%;
    }
}
</style>
