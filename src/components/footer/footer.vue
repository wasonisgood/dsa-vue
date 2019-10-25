<template>
  <div>
    <div class="d-lg-block hide-on-phone">
      <footer
        class="d-flex align-items-center justify-content-between"
        style="height: 62px; position: fixed;"
      >
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
          <img
            src="@/assets/footer/img/system-status-phone.png"
            onclick="scrollToId('system-header')"
            style="padding: 0; text-align: center;"
          />
        </div>
        <div class="phone-footer-container">
          <img
            src="@/assets/footer/img/search-phone.png"
            style="padding: 0; text-align: center;"
            onclick="scrollToId('orderTable-header')"
          />
        </div>
        <div class="phone-footer-container">
          <img
            src="@/assets/footer/img/instant-power-consumption-phone.png"
            style="padding: 0; text-align: center;"
            onclick="scrollToId('nowPowerChart-header')"
          />
        </div>
        <div class="phone-footer-container">
          <img
            src="@/assets/footer/img/electronic-phone.png"
            style="padding: 0; text-align: center;"
            onclick="scrollToId('totalPower-header')"
          />
        </div>
        <div class="phone-footer-container">
          <img
            src="@/assets/footer/img/tools-phone.png"
            style="padding: 0; text-align: center;"
            onclick="scrollToId('blockMW-header')"
          />
        </div>
        <div class="phone-footer-container">
          <img
            src="@/assets/footer/img/iconAchievedToday-phone.png"
            style="padding: 0; text-align: center;"
            onclick="scrollToId('machineUtilizationRate-header')"
          />
        </div>
        <div class="phone-footer-container">
          <img
            src="@/assets/footer/img/output-status-phone.png"
            style="padding: 0; text-align: center;"
            onclick="scrollToId('resultAnalysis-header')"
          />
        </div>
      </div>
    </footer>
  </div>
</template>
<script>
export default {};
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
