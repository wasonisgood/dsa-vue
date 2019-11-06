<template>
    <div class="content-body">
        <div class="w-lg-100 w-xs-100 text-left" @click="Toggle(systemStatusData)">
            <span class="workTitle">
                <img class="mr-2" width="20" src="@/assets/home/img/system-status.png" />系統狀態
            </span>
            <span class="workTitle hide-on-phone float-right" style="margin-right: 15px;">
                <img class="mr-2" width="20" src="@/assets/home/img/Idle.png" />Idle
            </span>
            <span class="workTitle hide-on-phone float-right">
                <img class="mr-2" width="20" src="@/assets/home/img/Error.png" />Error
            </span>
            <span class="workTitle hide-on-phone float-right">
                <img class="mr-2" width="20" src="@/assets/home/img/Run.png" />Run
            </span>
        </div>
        <div class="h-lg-90" id="systemStatusData" v-show="systemStatusData.flag">
            <div class="w-lg-100 w-xs-100">
                <hr />
            </div>
            <div class="h-lg-100 w-lg-50 w-xs-100" style="padding-top: 20px">
                <div class="w-lg-50 w-xs-100 system-status">
                    <div class="system-title float-left">
                        <span>CNC</span>
                        <br />
                        <span>NXV1020A</span>
                    </div>
                    <img class="hide-on-phone system-img" width="30" src="@/assets/home/img/Error.png" />
                    <span class="hide-on-computer status-phone float-right">
                        <img class="mr-2" width="20" src="@/assets/home/img/Error.png" />Error
                    </span>
                </div>
                <div class="h-lg-100 w-lg-100 w-xs-100">
                    <img class="h-xl-100 h-lg-90 image-bg" src="@/assets/home/img/BG.png" />
                </div>
            </div>
            <div class="h-lg-100 w-lg-50 w-xs-100" style="padding-top: 20px">
                <div class="w-lg-50 w-xs-100 system-status">
                    <div class="system-title float-left">
                        <span>CNC</span>
                        <br />
                        <span>NXV600A</span>
                    </div>
                    <img class="hide-on-phone system-img" width="30" src="@/assets/home/img/Run.png" />
                    <span class="hide-on-computer status-phone float-right">
                        <img class="mr-2" width="20" src="@/assets/home/img/Run.png" />Run
                    </span>
                </div>
                <div class="h-lg-100 w-lg-100 w-xs-100">
                    <img class="h-xl-100 h-lg-90 image-bg" src="@/assets/home/img/BG.png" />
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "systemStatus",
    props: {
        systemStatusData: { type: Object },
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
.system-title {
    color: #6a7baf;
    font-size: 14px;
    padding: 5px;
    margin-left: 30px;
    background-color: #ecf0f9;
}
.system-img {
    margin-top: 10px;
    margin-right: 70px;
}
@media screen and (min-width: 992px) {
    .w-lg-100 {
        float: left;
        width: 100%;
        padding: 5px 15px;
    }
    .w-lg-50 {
        float: left;
        width: 50%;
        padding: 5px 15px;
    }
    .h-lg-100 {
        height: 100%;
    }
    .h-lg-90 {
        height: 90%;
    }
    .image-bg {
        width: 80%;
    }
    .system-status {
        z-index: 1;
        margin-bottom: -70px;
    }
}
@media screen and (max-width: 992px) {
    .w-xs-100 {
        float: left;
        width: 100%;
        padding: 5px 15px;
    }
    .status-phone {
        -webkit-transform: scale(0.7);
    }
    .image-bg {
        width: 100%;
    }
    .system-title {
        font-size: 12px;
        margin-left: 0;
        -webkit-transform: scale(0.7);
    }
    .system-status {
        padding: 0;
    }
}
@media screen and (min-width: 1800px) {
    .h-xl-100 {
        height: 100%;
    }
}
</style>
