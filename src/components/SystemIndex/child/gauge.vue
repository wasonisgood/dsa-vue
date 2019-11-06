<template>
    <div class="content-body">
        <div class="w-lg-100 w-xs-100 text-left" @click="Toggle(nowPowerChartData)">
            <span class="workTitle">
                <img class="mr-2" width="20" src="@/assets/home/img/instant-power-consumption.png" />系統即時用電量
            </span>
        </div>
        <div class="w-lg-100" v-show="nowPowerChartData.flag" id="nowPowerChart">
            <div class="w-lg-100 w-xs-100">
                <hr />
            </div>
            <div class="h-lg-90 w-lg-100 w-xs-100">
                <div style="width: 100%; float:right;">
                    <span class="nowPower-Value">{{nowPowerChartData.data.nowValue}}</span>
                </div>
                <canvas :id="nowPowerChartData.data.id" class="nowPower-main"></canvas>
                <div style="width: 100%;">
                    <span class="nowPower-min-Value">{{nowPowerChartData.data.minValue}}</span>
                    <span class="nowPower-max-Value">{{nowPowerChartData.data.maxValue}}(W)</span>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import "../../../assets/assets/js/gauge.min.js";
export default {
    name: "nowPower",
    props: {
        nowPowerChartData: { type: Object },
        Toggle: { type: Function }
    },
    data() {
        return {
            gauge: undefined
        }
    },
    mounted() {
        let step = parseInt((this.nowPowerChartData.data.maxValue - this.nowPowerChartData.data.minValue) / 3);
        let opts = {
            angle: 0, // The span of the gauge arc
            lineWidth: 0.25, // The line thickness
            radiusScale: 1.1, // Relative radius
            pointer: {
                length: 0.25, // // Relative to gauge radius
                strokeWidth: 0.054, // The thickness
                color: '#696969' // Fill color
            },
            limitMax: false, // If false, max value increases automatically if value > this.nowPowerChartData.data.maxValue
            limitMin: false, // If true, the min value of the gauge will be fixed
            colorStart: '#6FADCF', // Colors
            colorStop: '#8FC0DA', // just experiment with them
            strokeColor: '#E0E0E0', // to see which ones work best for you
            generateGradient: true,
            highDpiSupport: true, // High resolution support
            renderTicks: {
                divisions: 20,
                divWidth: 3.5,
                divLength: 1,
                divColor: '#fff',
                subDivisions: 0,
                subLength: 0,
                subWidth: 0,
                subColor: '#666666'
            },
            staticZones: [
                { strokeStyle: '#49A59E', min: this.nowPowerChartData.data.minValue, max: this.nowPowerChartData.data.minValue + step },
                { strokeStyle: '#28A4BC', min: this.nowPowerChartData.data.minValue + step, max: this.nowPowerChartData.data.maxValue - step },
                { strokeStyle: '#697BB0', min: this.nowPowerChartData.data.maxValue - step, max: this.nowPowerChartData.data.maxValue },
            ],
        };

        let target = document.getElementById(this.nowPowerChartData.data.id); // your canvas element
        this.gauge = new Gauge(target).setOptions(opts); // create sexy gauge!
        this.gauge.maxValue = this.nowPowerChartData.data.maxValue; // set max gauge value
        this.gauge.setMinValue(this.nowPowerChartData.data.minValue); // Prefer setter over gauge.this.nowPowerChartData.data.minValue = 0
        this.gauge.set(this.nowPowerChartData.data.nowValue);
    },
    updated: function () {
        this.gauge.set(this.nowPowerChartData.data.nowValue); // set actual value
    }
};
</script>
<style>
.nowPower-main {
    width: 90%;
    height: 90%;
}

.nowPower-Value {
    float: right;
    color: #697bb0;
    font-size: 34px;
}

.nowPower-min-Value {
    float: left;
    font-size: 16px;
    color: #697bb0;
}

.nowPower-max-Value {
    float: right;
    font-size: 16px;
    color: #697bb0;
}

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

@media screen and (min-width: 992px) {
    .w-lg-90 {
        float: left;
        width: 90%;
        padding: 5px 15px;
    }
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
}
</style>
