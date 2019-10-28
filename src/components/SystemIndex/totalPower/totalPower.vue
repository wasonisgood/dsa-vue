<template>
    <div class="totalPower">
        <div v-for="(energy, index) in title" v-bind:key="index" class="totalPower-data" :style="[index == 0 ? { border: 0 } : {}]">
            <div class="totalPower-field">
                <span>{{energy.name}}</span>
            </div>
            <div class="totalPower-value">
                <div class="progress-container">
                    <div :class="energy.class" :style="{ width: (data[energy.key] / data.allEnergy * 100) + '%' }">
                        <span>{{data[energy.key]}}</span>
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
        data: { type: Object },
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

@media screen and (max-width: 992px) {
    .totalPower {
        height: 200px;
    }
}
</style>
