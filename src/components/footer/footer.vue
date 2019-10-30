<template>
    <div class="footer"> 
        <div class="d-lg-block hide-on-phone">
            <footer class="d-flex align-items-center justify-content-between" style="height: 62px; position: fixed;">
                <div id="time">{{ date }}</div>
                <div class="co"><span class="chineseCompanyName"> 達詳自動化股份有限公司</span>&nbsp;&nbsp; <span
                        class="engCompanyName">DA&nbsp;SHIANG&nbsp;AUTOMATION</span>&nbsp;<span
                        class="footerSpan">CO.LTD</span>
                </div>
            </footer>
        </div>
        <!-- footer for computer ver. -->
        <div class="d-none d-lg-block">
            <footer class="d-flex align-items-center justify-content-between">
                <div id="time">{{ date }}</div>
                <div class="co"><span class="chineseCompanyName"> 達詳自動化股份有限公司</span>&nbsp;&nbsp; <span class="engCompanyName">DA&nbsp;SHIANG&nbsp;AUTOMATION</span>&nbsp;<span class="footerSpan">CO.LTD</span></div>
            </footer>
        </div>
    </div>
</template>
<script>

export default {
    data() {
        return {
            date:''
        }
    },
    mounted() {
        var nowDate = new Date();
        var hours = nowDate.getHours();
        if(hours<=12)
        {
            this.date = nowDate.getFullYear() + "/" + (nowDate.getMonth()+1) + "/" + nowDate.getDate() + '     ' +"AM"+hours+":"+nowDate.getMinutes();
        }
        else{
            this.date  = nowDate.getFullYear() + "/" + (nowDate.getMonth()+1) + "/" + nowDate.getDate() + '     ' +"PM"+hours+":"+nowDate.getMinutes();
        }
    },
}
</script>
<style >
@import "../../assets/assets/css/all.css";
@import "../../assets/assets/css/app.css"; 
@import "../../assets/assets/css/frameworkV2.css";    
/* for rwd screen */

@media screen and (min-width: 1500px) {
    body {
        overflow-y: hidden;
    }
    .system-status {
        z-index: 1000;
        margin-top: 30px;
        margin-bottom: -70px;
    }
    .w-xl-20 {
        float: left;
        width: 20%;
        padding: 5px 15px;
    }
    .w-xl-40 {
        float: left;
        width: 40%;
        padding: 5px 15px;
    }
    .w-xl-50 {
        float: left;
        width: 50%;
        padding: 5px 15px;
    }
    .w-xl-60 {
        float: left;
        width: 60%;
        padding: 5px 15px;
    }
    .w-xl-80 {
        float: left;
        width: 80%;
        padding: 5px 15px;
    }
    .w-xl-100 {
        float: left;
        width: 100%;
        padding: 5px 15px;
    }
    .hide-on-computer {
        display: none;
    }
    .table-header {
        padding-right: 1rem;
    }
}

@media screen and (max-width: 1500px) {
    .w-xs-15 {
        float: left;
        width: 15%;
        padding: 5px 15px;
    }
    .w-xs-20 {
        float: left;
        width: 20%;
        padding: 5px 15px;
    }
    .w-xs-25 {
        float: left;
        width: 25%;
        padding: 5px 15px;
    }
    .w-xs-100 {
        float: left;
        width: 100%;
        padding: 5px 15px;
    }
    .hide-on-phone {
        display: none;
    }
    .table-value {
        overflow: hidden;
        max-height: none;
        font-size: 12px;
    }
    .container-on-phone {
        padding: 0;
    }
    .table-header div {
        padding: 0;
    }
    .table-value .row {
        border-top: none;
        padding: 0;
    }
    .table-value .row div, .table-header div {
        padding: 0;
        -webkit-transform: scale(0.6);
    }
    .finished {
        background-color: #DEF1D5;
    }
    .unfinished {
        background-color: #FFCDAD;
    }
    .footer-company {
        font-size: 16px !important;
        padding-top: 10px;
        padding-bottom: 0;
    }
    .footer-engcompany {
        padding-top: 0;
    }
    .table-value .row {
        height: 20px;
        line-height: 20px;
    }
}
</style>