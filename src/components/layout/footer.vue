<template>
    <div class="d-none d-md-block">
        <footer class="d-flex align-items-center justify-content-between">
            <div style="margin-left: 3.96875vw;">{{time}}</div>
            <img style="margin-right: 3.96875vw; height: 52%;" src="@/assets/footer_logo.png">
        </footer>
    </div>
</template>
<script>
export default {
    props: {
        system: { type: Object },
        orderTable: { type: Object },
        nowPowerChart: { type: Object },
        totalPower: { type: Object },
        blockMW: { type: Object },
        machineUtilizationRate: { type: Object },
        resultAnalysis: { type: Object }
    },
    data() {
        return {
            time: ""
        }
    },
    mounted: function () {
        var nowDate = new Date();
        var hours = nowDate.getHours();
        if (hours <= 12) {
            this.time = nowDate.getFullYear() + "/" + (nowDate.getMonth() + 1) + "/" + nowDate.getDate() + "   AM" + hours + ":" + nowDate.getMinutes();
        }
        else {
            this.time = nowDate.getFullYear() + "/" + (nowDate.getMonth() + 1) + "/" + nowDate.getDate() + "   PM" + hours + ":" + nowDate.getMinutes();
        }
    }
};
</script>
<style>
</style>
