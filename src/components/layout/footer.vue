<template>
  <div class="footer">

        <div class="row" style="margin-left:5vh;margin-right:5vh;">
            <div class="col-6 pl-2 text-left" style="margin-top:0.3rem">
              <p>2019/10/20 PM 17:30 </p>
            </div>
            <div class="col-6 pr-4 text-right" style="margin-top:0.3rem">
              <p>達詳自動化股份有限公司   DA SHIANG AUTOMATION CO.LTD</p>
            </div>
        </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            nowdate:new Date(2014,2,0)
        }
    }
}
</script>

<style >
.footer{
  position: absolute;
    bottom: 0;
    width:100%;
    height:62px;
    background-color: #181f31;
    z-index:5;
}
p{
    padding-top: 10px;
    padding-left: 15px;
    color: white;
}

</style>
