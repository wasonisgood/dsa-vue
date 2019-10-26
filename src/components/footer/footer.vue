<template>
    <div>
        <div class="d-lg-block hide-on-phone">
            <footer class="d-flex align-items-center justify-content-between" style="height: 62px; position: fixed;">
                <div id="time"></div>
                <div class="co">
                    <span class="chineseCompanyName">達詳自動化股份有限公司</span>&nbsp;&nbsp;
                    <span class="engCompanyName">DA&nbsp;SHIANG&nbsp;AUTOMATION</span>&nbsp;
                    <span class="footerSpan">CO.LTD</span>
                </div>
            </footer>
        </div>
        <!-- 手機版footer -->
        <footer class="phone-footer hide-on-computer">
            <div style="width: 100vw; height: 100%;">
                <div class="phone-footer-container">
                    <img src="@/assets/footer/img/system-status-phone.png" style="padding: 0; text-align: center;" @click="scrollToTag(system)" />
                </div>
                <div class="phone-footer-container">
                    <img src="@/assets/footer/img/search-phone.png" style="padding: 0; text-align: center;" @click="scrollToTag(orderTable)" />
                </div>
                <div class="phone-footer-container">
                    <img src="@/assets/footer/img/instant-power-consumption-phone.png" style="padding: 0; text-align: center;" @click="scrollToTag(nowPowerChart)" />
                </div>
                <div class="phone-footer-container">
                    <img src="@/assets/footer/img/electronic-phone.png" style="padding: 0; text-align: center;" @click="scrollToTag(totalPower)" />
                </div>
                <div class="phone-footer-container">
                    <img src="@/assets/footer/img/tools-phone.png" style="padding: 0; text-align: center;" @click="scrollToTag(blockMW)"/>
                </div>
                <div class="phone-footer-container">
                    <img src="@/assets/footer/img/iconAchievedToday-phone.png" style="padding: 0; text-align: center;" @click="scrollToTag(machineUtilizationRate)" />
                </div>
                <div class="phone-footer-container">
                    <img src="@/assets/footer/img/output-status-phone.png" style="padding: 0; text-align: center;" @click="scrollToTag(resultAnalysis)" />
                </div>
            </div>
        </footer>
    </div>
</template>
<script>
export default {
    props: {
        scrollToTag: { type: Function },
        system: { type: Object },
        orderTable: { type: Object },
        nowPowerChart: { type: Object },
        totalPower: { type: Object },
        blockMW: { type: Object },
        machineUtilizationRate: { type: Object },
        resultAnalysis: { type: Object }
    }
};
</script>
<style>
.phone-footer {
    width: 100vw;
    height: 10vh;
    line-height: 10vh;
    background-color: #fff;
    position: fixed;
    bottom: 0;
}

.phone-footer-container {
    float: left;
    text-align: center;
    width: 14.28571428571429%;
}

.phone-footer-container:hover {
    background-color: #444a5a;
}
@media screen and (max-width: 992px) {
    .hide-on-phone {
        display: none;
    }
}
@media screen and (min-width: 992px) {
    .hide-on-computer {
        display: none;
    }
}
.phone-footer-container img {
    height: 6vh;
    width: 13vw;
}
</style>
