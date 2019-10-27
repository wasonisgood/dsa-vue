<template>
    <div>
        <div style="width: 100%; float:right;">
            <span class="nowPower-Value">{{data.nowValue}}</span>
        </div>
        <canvas :id="data.id" class="nowPower-main"></canvas>
        <div style="width: 100%;">
            <span class="nowPower-min-Value">{{data.minValue}}</span>
            <span class="nowPower-max-Value">{{data.maxValue}}(W)</span>
        </div>
    </div>
</template>
<script>
import "../../../assets/assets/js/gauge.min.js";
import "../../../assets/assets/js/highcharts.js";
export default {
    name: "nowPower",
    props: {
        data: { type: Object },
    },
    data() {
        return {
            gauge: undefined
        }
    },
    mounted() {
        let step = parseInt((this.data.maxValue - this.data.minValue) / 3);
        let opts = {
            angle: 0, // The span of the gauge arc
            lineWidth: 0.25, // The line thickness
            radiusScale: 1.1, // Relative radius
            pointer: {
                length: 0.25, // // Relative to gauge radius
                strokeWidth: 0.054, // The thickness
                color: '#696969' // Fill color
            },
            limitMax: false, // If false, max value increases automatically if value > this.data.maxValue
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
                { strokeStyle: '#49A59E', min: this.data.minValue, max: this.data.minValue + step },
                { strokeStyle: '#28A4BC', min: this.data.minValue + step, max: this.data.maxValue - step },
                { strokeStyle: '#697BB0', min: this.data.maxValue - step, max: this.data.maxValue },
            ],
        };

        let target = document.getElementById(this.data.id); // your canvas element
        this.gauge = new Gauge(target).setOptions(opts); // create sexy gauge!
        this.gauge.maxValue = this.data.maxValue; // set max gauge value
        this.gauge.setMinValue(this.data.minValue); // Prefer setter over gauge.this.data.minValue = 0
        this.gauge.set(this.data.nowValue);
    },
    updated: function () {
        this.gauge.set(this.data.nowValue); // set actual value
    }
};
</script>
<style>
.nowPower-main {
    width: 100%;
    height: 100%;
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
</style>
