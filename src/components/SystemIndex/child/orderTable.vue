<template>
    <div class="content-body">
        <div class="w-lg-100 w-xs-100 text-left" @click="Toggle(orderTableData)">
            <span class="workTitle">
                <img class="mr-2" width="20" src="@/assets/home/img/icon_black.png" />訂單資訊
            </span>
        </div>
        <div class="h-lg-90" v-show="orderTableData.flag" id="orderTable">
            <div class="w-lg-100 w-xs-100">
                <hr />
            </div>
            <div class="h-lg-90 w-lg-100 hide-on-phone">
                <div class="table-header">
                    <div class="row">
                        <div class="col-lg-2">訂單日期</div>
                        <div class="col-lg-2">訂單編號</div>
                        <div class="col-lg-2">案號</div>
                        <div class="col-lg-2">交期</div>
                        <div class="col-lg-2">完成日期</div>
                        <div class="col-lg-2">交貨</div>
                    </div>
                </div>
                <div class="h-lg-90 table-value">
                    <div class="row" v-for="(data, index) in orderTableData.data" v-bind:key="index">
                        <div class="col-lg-2">{{data.orderDate}}</div>
                        <div class="col-lg-2">{{data.orderNumber}}</div>
                        <div class="col-lg-2">{{data.caseNumber}}</div>
                        <div class="col-lg-2">{{data.deliveryDate}}</div>
                        <div class="col-lg-2">{{data.completeDate}}</div>
                        <div class="col-lg-2" style="padding-top: 5px;">
                            <input type="checkbox" v-model="data.deliveryFlag" :id="'order_' + index" />
                            <label :for="'order_' + index">
                                <span></span>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
            <div class="w-xs-100 d-sm-none phone-table">
                <div class="table-header">
                    <div class="row">
                        <div class="w-xs-20">訂單日期</div>
                        <div class="w-xs-25">訂單編號</div>
                        <div class="w-xs-15">案號</div>
                        <div class="w-xs-20">交期</div>
                        <div class="w-xs-20">完成日期</div>
                    </div>
                </div>
                <div class="table-value">
                    <div v-for="(data, index) in sortNumbers" v-bind:key="index" :class="data.deliveryFlag? 'row finished':'row unfinished'">
                        <div class="w-xs-20">{{data.orderDate}}</div>
                        <div class="w-xs-25">{{data.orderNumber}}</div>
                        <div class="w-xs-15">{{data.caseNumber}}</div>
                        <div class="w-xs-20">{{data.deliveryDate}}</div>
                        <div class="w-xs-20">{{data.completeDate}}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "orderTable",
    props: {
        orderTableData: { type: Object },
        Toggle: { type: Function }
    },
    computed: {
        sortNumbers: function () {
            let buffer = this.orderTableData.data.slice();
            return buffer.sort(function (x, y) {
                return y.deliveryFlag - x.deliveryFlag;
            });
        }
    }
};
</script>
<style>
.table-header {
    border-top: 1px #6c81ba solid;
    border-bottom: 1px #6c81ba solid;
    color: #2d3d4f;
    padding: 0.5rem 0;
    font-size: 12px;
    font-weight: bold;
    margin: 0;
}

.table-value {
    overflow-x: hidden;
    overflow-y: scroll;
}

.table-value .row {
    border-top: 1px #6c81ba solid;
    font-size: 14px;
    color: #6a7cb1;
    height: 50px;
    line-height: 50px;
    margin: 0;
    padding: 0;
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

/* checkbox */
input[type="checkbox"] {
    display: none;
}

input[type="checkbox"]+label {
    color: #f2f2f2;
    margin: 0;
    height: 20px;
}

input[type="checkbox"]+label span {
    display: inline-block;
    width: 20px;
    height: 20px;
    background: url("../../../assets/home/img/uncheck.png");
    background-size: 20px;
    cursor: pointer;
}

input[type="checkbox"]:checked+label span {
    background: url("../../../assets/home/img/check.png");
    background-size: 20px;
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
    .table-header {
        width: calc(100% - 17px);
    }
}

@media screen and (max-width: 992px) {
    .w-xs-100 {
        float: left;
        width: 100%;
        padding: 5px 15px;
    }
    
    .table-value {
        overflow: hidden;
        max-height: none;
        font-size: 12px;
    }
    .table-value .row {
        height: 20px;
        line-height: 20px;
        border-top: none;
        padding: 0;
    }
    .table-value .row div, .table-header .row div {
        padding: 0;
        -webkit-transform: scale(0.6);
    }
    .finished {
        background-color: #DEF1D5;
    }
    .unfinished {
        background-color: #FFCDAD;
    }
}

@media screen and (min-width: 1800px) {
    .h-xl-100 {
        height: 100%;
    }
}
</style>
