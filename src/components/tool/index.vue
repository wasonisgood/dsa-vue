<template scoped >
<div class="malfunction">
  <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
    <div class="modal-dialog diaol">
        <div class="modal-content tablenum">
            <div class="modal-header text-center justify-content-center">
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">
                  <div>
                    <img class="align-self-center mr-2 img" src="@/assets/tool/close.png" width="20" height="20">
                  </div>
                </button>
            </div>
            <div class="modal-body">
              <img class="align-self-center mr-1 img" src="@/assets/tool/table_blue.png" width="20" height="20">
              領刀表
              <hr>
              <div class="col text-center justify-content-center tab2">
                <table class="table3">
                  <tr class="th2">
                    <th>編號</th>
                    <th>加工刀具</th>
                    <th>需求次數</th>
                  </tr>
                  <tr v-for="item in tool_check" class="tr2"><td>{{item.id}}</td><td>{{item.tool}}</td><td>{{item.num}}</td></tr>
                </table>
              </div>
            </div>
            <div class="modal-footer">
              <button class="btn mt-1" data-toggle="modal" data-target="#myModal2">
                <img class="align-self-center mr-1 img" src="@/assets/tool/table.png" width="20" height="20">
                產生序號
              </button>
            </div>
        </div>
    </div>
  </div>
  <div class="modal fade" id="myModal2" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
	<div class="modal-dialog diaol2">
		<div class="modal-content codenum">
      <div class="modal-body">
        <div class="code">
          領刀表序號<br>
        </div>
        <div class="text-center justify-content-center">
          <input class="in1" type="text" value="108000001" />
          <button class="btn wi">
            <img class="align-self-center mr-3 img" src="@/assets/tool/tick.png" width="20" height="20">確認
          </button>
        </div>
      </div>
	  </div>
	</div>
</div>
  <div class="container-fluid">
    <div class="row">
      <div class="col-xl-7 col-sm-12 myCol ">
        <!--左邊欄位-->
        <div class="panel mt-3 ml-5 big">
          <div class="row">
            <div class="title col text-left justify-content-center">
              <img class="align-self-center ml-3 mr-2 img" src="@/assets/tool/new.png" width="25" height="25">
              刀塔刀具資訊
            </div>
            <div class="col text-right mr-1">
              <div class="NXV">NXV 1020 A</div>
            </div>
          </div>
          <hr>
          <div class="row">
            <div class="col-sm-6">
              <div class="col text-left justify-content-center">
                <div class="health_tit">
                  <img class="align-self-center ml-2 img" src="@/assets/tool/Run.png" width="20" height="20">
                  <div style="margin-top:-1.45rem;margin-left:2.6rem;">健康狀態</div>
                </div>
              </div>
              <div class="row">
                <div class="col text-left justify-content-center imgset">
                  <img class="align-self-center ml-4" src="@/assets/tool/ui-01.png" style="width: 15.625vw; height: 25vh;" >
                </div>
                <div class="col text-center justify-content-center mt-4 numvi" style="border:1px solid red; ">
                  <div class="leftcol">
                    <img class="align-self-center mr-1" src="@/assets/tool/dount.png" width="25" height="25">刀具壽命正常合計
                    <div class="leftfont">10</div>
                  </div>
                  <div class="leftcol">
                    <img class="align-self-center mr-1" src="@/assets/tool/dount.png" width="25" height="25">刀具壽命警告合計
                    <div class="leftfont">10</div>
                  </div>
                  <div class="leftcol">
                    <img class="align-self-center mr-1" src="@/assets/tool/dount.png" width="25" height="25">刀具壽命異常合計
                    <div class="leftfont">4</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-sm-6 tab">
              <table class="table">
                <tr class="tr">
                  <th>刀塔編號</th>
                  <th>加工刀具</th>
                  <th>刀具壽命</th>
                  <th>使用次數</th>
                  <th>備註</th>
                </tr>
                <tr class="tr_h" v-for="item in table1">
                  <td><div class="circle_num"><div style="margin-bottom:-2vh;border:1px solid red;"><span>{{item.id}}</span></div></div></td>
                  <td>{{item.tool}}</td>
                  <td>{{item.age}}</td>
                  <td>{{item.num}}</td>
                  <td><div class="circle"></div></td>
                </tr>
              </table>
            </div>
          </div>
        </div>
        <br>
        <div class="panel big">
          <div class="row">
            <div class="col text-left justify-content-center">
              <img class="align-self-center mr-2 img" src="@/assets/tool/new.png" width="20" height="20">
              刀塔刀具資訊
            </div>
            <div class="col text-right mr-1">
              <div class="NXV">NXV 600 A</div>
            </div>
          </div>
          <hr>
          <div class="row">
            <div class="col-sm-6">
              <div class="col text-left justify-content-center">
                <div class="health_tit">
                  <img class="align-self-center" src="@/assets/tool/Run.png" width="20" height="20">
                  健康狀態
                </div>
              </div>
              <div class="row">
                <div class="col text-left justify-content-center">
                  <img class="align-self-center img" src="@/assets/tool/ui-02.png"  width="300" height="260">
                </div>
                <div class="col text-center justify-content-center mt-4 numvi">
                  <div class="leftcol">
                    <img class="align-self-center" src="@/assets/tool/dount.png" width="20" height="20">刀具壽命正常合計
                    <hr>
                    <div class="leftfont">10</div>
                  </div>
                  <div class="leftcol">
                    <img class="align-self-center" src="@/assets/tool/dount.png" width="20" height="20">刀具壽命警告合計
                    <hr>
                    <div class="leftfont">10</div>
                  </div>
                  <div class="leftcol">
                    <img class="align-self-center" src="@/assets/tool/dount.png" width="20" height="20">刀具壽命異常合計
                    <hr>
                    <div class="leftfont">4</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-sm-6 tab">
              <table class="table">
                <tr class="tr">
                  <th>刀塔編號</th>
                  <th>加工刀具</th>
                  <th>刀具壽命</th>
                  <th>使用次數</th>
                  <th>備註</th>
                </tr>
                <tr class="tr_h" v-for="item in table2">
                  <td><div class="circle_num">{{item.id}}</div></td>
                  <td>{{item.tool}}</td>
                  <td>{{item.age}}</td>
                  <td>{{item.num}}</td>
                  <td><div class="circle"></div></td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </div>
      <!--右邊欄位-->
      <div class="col-xl-5 col-sm-12">
        <div class="panel mt-3 mr-3 height">
          <div class="row">
            <div class="col text-left justify-content-center">
              <img class="align-self-center mr-2 img" src="@/assets/tool/sure.png" width="20" height="20">
              刀具確認
            </div>
          </div>
          <hr>
          <div class="panel blue">
            <div class="col text-left justify-content-center machining">
              加工工件 :<input class="col_input" type="text" value="WDR604-A01-P001" /><br>
              加工數量 :<input class="col_input" type="text" value="100" /><br>
              加工機床 :<input class="col_input" type="text" value="WDR604-A01-P001" /><br>
            </div>
            <div class="sett">
              <button class="btn">
                <img class="align-self-center mr-3 img" src="@/assets/tool/tick.png" width="20" height="20">確認
              </button>
              <hr class="short_hr">
            </div>
          </div>
          <div class="col text-center justify-content-center tab2">
            <table class="table2">
              <tr class="th2">
                <th>編號</th>
                <th>加工刀具</th>
                <th>需求次數</th>
                <th>正確</th>
              </tr>
              <tr class="tr2" v-for="item in tool_check"><td>{{item.id}}</td><td>{{item.tool}}}</td><td>{{item.num}}</td><td><input type="checkbox"/></td></tr>
            </table>
            </div>
            <div class="col text-center justify-content-center">
              <div class="sett">
                <hr class="short_hr">
                <div class="buttt">
                <button class="btn" type="button" data-toggle="modal" data-target="#myModal">
                  <img class="align-self-center mr-1 img" src="@/assets/tool/table.png" width="20" height="20">
                  領刀表
                </button></div><br>
                <div class="bluesmall">
                  <div class="col text-left justify-content-center mf">
                    加工程式 :<input type="text" />
                    <div class="select">
                     <button class="btn1" >選擇檔案</button>
                    </div>
                    <div class="fileupload">
                      <hr class="short_hr2">
                      <div class="top">
                        <button class="btn">
                          <img class="align-self-center mr-2 img" src="@/assets/tool/upload.png" width="20" height="20">
                          上傳
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--側邊欄-->
    <div id="hide">
      <router-link to="tool"><img @mouseover="addActive1()" @mouseout="removeActive1()" src="@/assets/sidebar/sideicon1.png" height="30" width="30" class="mt-4 mb-3"></router-link>  
      <router-link to="" ><img @mouseover="addActive2()" @mouseout="removeActive2()" src="@/assets/sidebar/sideicon2.png" height="30" width="30" class="mb-3"></router-link>
      <router-link to="waterlevel"><img @mouseover="addActive3()" @mouseout="removeActive3()" src="@/assets/sidebar/sideicon3.png" height="30"  width="30" class="mb-3"></router-link>  
      <router-link to="parameter"><img @mouseover="addActive4()" @mouseout="removeActive4()" src="@/assets/sidebar/sideicon4.png" height="30" width="30" class="mb-3"></router-link>  
    </div>
    <div class="one" v-if="modal1">
      <span><i class="fas fa-caret-right onesp" style="font-size:30px;"></i></span>
      <div id="menu1" class="menu">
        <span class="maret" style="top:-11%;left:20%;">◎</span>
        <span style="margin-left:2vh;font-size:14px;">刀具資訊</span>
      </div>
    </div>
    <div class="two" v-if="modal2">
      <span><i class="fas fa-caret-right onesp" style="font-size:30px;"></i></span>
      <div id="menu2" class="menu">
        <span class="maret" style="top:-11%;left:20%;">◎</span>
        <span style="margin-left:2vh;font-size:14px;">刀具追蹤</span>
      </div>
    </div>
    <div class="three" v-if="modal3">
      <span><i class="fas fa-caret-right onesp" style="font-size:30px;"></i></span>
      <div id="menu3" class="menu">
        <span class="maret" style="top:-11%;left:20%;">◎</span>
        <span style="margin-left:2vh;font-size:14px;">水位分析</span>
      </div>
    </div>
    <div class="four" v-if="modal4">
      <span><i class="fas fa-caret-right onesp" style="font-size:30px;"></i></span>
      <div id="menu4" class="menu">
        <span class="maret" style="top:-11%;left:20%;">◎</span>
        <span style="margin-left:2vh;font-size:14px;">參數設定</span>
      </div>
    </div>
    </div>
</template>

<script>
export default {
  data(){
    return{
      tool_check:[
        {
          id:'001',
          tool:'D6鑽頭',
          num:'50'
        },
        {
          id:'002',
          tool:'D6鑽頭',
          num:'50'
        },
        {
          id:'003',
          tool:'D6鑽頭',
          num:'50'
        },
        {
          id:'004',
          tool:'D6鑽頭',
          num:'50'
        },
        {
          id:'005',
          tool:'D6鑽頭',
          num:'50'
        },
        {
          id:'006',
          tool:'D6鑽頭',
          num:'50'
        },
        {
          id:'007',
          tool:'D6鑽頭',
          num:'50'
        },
        {
          id:'008',
          tool:'D6鑽頭',
          num:'50'
        },
        {
          id:'009',
          tool:'D6鑽頭',
          num:'50'
        },
        {
          id:'010',
          tool:'D6鑽頭',
          num:'50'
        },
      ],
      table1:[
        {
          id:"1",
          tool:"0001122",
          age:"10",
          num:"10",
          remark:""
        },
        {
          id:"2",
          tool:"0001122",
          age:"10",
          num:"10",
          remark:""
        },
        {
          id:"3",
          tool:"0001122",
          age:"10",
          num:"10",
          remark:""
        },
        {
          id:"4",
          tool:"0001122",
          age:"10",
          num:"10",
          remark:""
        },
        {
          id:"5",
          tool:"0001122",
          age:"10",
          num:"10",
          remark:""
        },
        {
          id:"6",
          tool:"0001122",
          age:"10",
          num:"10",
          remark:""
        },
        {
          id:"7",
          tool:"0001122",
          age:"10",
          num:"10",
          remark:""
        }
      ],
      table2:[
        {
          id:"1",
          tool:"0001122",
          age:"10",
          num:"10",
          remark:""
        },
        {
          id:"2",
          tool:"0001122",
          age:"10",
          num:"10",
          remark:""
        },
        {
          id:"3",
          tool:"0001122",
          age:"10",
          num:"10",
          remark:""
        },
        {
          id:"4",
          tool:"0001122",
          age:"10",
          num:"10",
          remark:""
        },
        {
          id:"5",
          tool:"0001122",
          age:"10",
          num:"10",
          remark:""
        },
        {
          id:"6",
          tool:"0001122",
          age:"10",
          num:"10",
          remark:""
        },
        {
          id:"7",
          tool:"0001122",
          age:"10",
          num:"10",
          remark:""
        }
      ],
      modal1: false,
      modal2: false,
      modal3: false,
      modal4: false
    }
  },
  methods:{
    addActive1(){
      this.modal1= true
    },
    removeActive1(){
      this.modal1 = false
    },
    addActive2(){
      this.modal2= true
    },
    removeActive2(){
      this.modal2 = false
    },addActive3(){
      this.modal3= true
    },
    removeActive3(){
      this.modal3 = false
    },
    addActive4(){
      this.modal4= true
    },
    removeActive4(){
      this.modal4 = false
    },
  }
}
</script>
<style scoped >
 @media only screen and (max-width: 576px) {
   .numvi{
     font-size:1vh;
   }
   .imgset{
     margin-top:7vh;
   }
   .height button{
     width:41vh;
   }
   .buttt button{
     margin-right:1vh;
   }
   .sett button{
     margin-right:1vh;
   }
   .diaol{
     width:45%;
     margin-left:28vh;
   }
   .diaol2{
     margin-left:4vh;
     margin-top:40vh;
   }
   .select
   {
     width:100%;
     margin-top:1vh;
     margin-left:-1vh;
   }
   .top button{
     margin-right:-2vh;
     width:105%;
   }
 }
 *{
   font-family: Microsoft JhengHei;
   font-size:13pt;
   font-weight: lighter;
 }
 .numvi{
   margin-right:4vh;
 }
 .imgset{
   width:400px;
   margin-top: 5vh;
 }
 hr{
   background-color: #8192B9;
 }
 .title{
   color:#424B5D;
   font-size:18pt;
   font-weight: 900;
   
 }
.big{
  margin-left: 3vh;
  height:41vh;
}
.malfunction{
  height:80%;
  overflow-y: scroll;
  overflow-x: hidden;
}
img{
  max-width:100%;
  height:auto;
}
.table{
  width:100%;
  height:25vh;
  border:1px solid #DCE0E9;
  overflow-y: scroll;
}
.table2{
  width:100%;
  height:23vh;
  border:1px solid #DCE0E9;
}
.tab{
  margin-top: 3vh;
  margin-left: -3vh;
  margin-bottom: 3vh;
  height:30vh;
  border:1px solid red;
  overflow-x:hidden;
}
.tab2{
  width:100%;
   height:30vh;
  border:1px solid #DCE0E9;
  overflow:auto;
  margin-top:2vh;
}
.tr{
  height:3vh;
  background-color:#8597C0;
  color:#fff;
  font-weight: 900;
}
.th2{
  background-color:#8596C1;
  color:#fff;
}
.tr2{
  border-bottom:1px solid #DCE0E9;
  height:4vh;
  color:#7180B3;
}
.tr_h td{
  height:6vh;
  border-right:1px solid #DCE0E9;
}
.leftcol{
  color:#6A7BAF;
  margin-top:1vh
}
.leftfont{
  margin-top: 1vh;
  margin-left: 4vh;
  width:14vh;
  border-top:1px solid #BAC3D1;
  font-size:21pt;
  font-weight:900;
}
.circle{
  margin:0px auto;
  width:20px;
  height:20px;
  border-radius:999em;
  background-color:green;
}
.health_tit{
  border:1px solid #8192B9;
  width:28%;
  height: 3vh;
  font-size:1rem; 
  border-radius:10rem;
  color:#6A7BB0;
  background-color:#EAEEF7;
}
.NXV{
  border:1px solid #B5BBD4;
  width:18vh;
  background-color:#F0F3FA;
  float:right;
  text-align:center;
  color:#6A7BB0;
  font-size:13pt;
}
hr{
  background-color:#8092B8;
}
.circle_num{
  color:#fff;
  font-size:20pt;
  background-color:#525D94;
  width:3vh;
  height:3vh;
  text-align:center;
  border-radius:999em;
  margin:0px auto;
  font-weight: 900;
}
.height{
  height:85vh;
}
.blue{
  background-color:#EDF2F8;
  color:#6A7CAF;
  height:23vh;
}
.short_hr{
  width:65%;
  margin-left:3vh;

}
.machining{
  margin-left:5vh;
}
.col_input{
  color:#6A7CAF;
  margin-left:2vh;
  margin-top:2vh;
  width:50%;
  text-align:center;
}
.btn{
  background-color:#8596C1;
  position:relative;
  width:25%;
  float:right;
  margin-right:2vh;
  margin-left:5vh;
  margin-top:-2vh;
  height:4vh;
  color:#fff;
  font-size:1vh;
}
.sett{
  height:12%;
  margin-top:3vh;
}
.bluesmall{
  margin-top:3vh;
  width:100%;
  background-color:#EDF2F8;
  color:#6A7CAF;
  height:100%;
  border:1px solid #CFD4D9;
}
.fileupload{
  width:100%;
  margin-left:-1vh;
  margin-top:2vh;
}
.short_hr2{
  width:65%;
}
.mf{
  margin-top:1vh;
  margin-bottom:5vh;
  height: 8vh;
}
.mf input{
  margin-top:1vh;
  margin-left:2vh;
  width:52%;
  margin-right:3vh;
}
@media (min-width: 768px) {
    .modal-xl {
        width: 90% !important;
        max-width:1200px !important;
    }
}
@media (min-width: 576px){
    .modal-dialog {
        max-width: 500px;
        margin: 1.75rem auto;
    }
}
.modal-sm{
  min-width: 400px;
}
.head{
    background: #6D80B8;
    height: 45px;
}
.head button{
    background-color: white;
    border: 0;
    cursor: pointer;
    position: relative;
    text-align: center;
    height: 30px;
    width: 30px;
    margin-top: -.5rem;
}
.head span{
   margin: auto;
   padding: 0;
   width: 100%;
   text-align: center;
   display: inline-block;
}
.modal-header{
  background-color:#6D80B8;
}
.table3{
  width:100%;
  height:40vh;
  border:1px solid #DCE0E9;
}
.tablenum{
  margin-left:-25vh;
  margin-top:15vh;
  width:200%;
}
.codenum{
  background-color:#EAEEF7;
  margin-top:10vh;
  width:50vh;

}
.code{
  margin-left:5vh;
  color:#6D80B9;
}
.wi{
  margin-right:1vh;
  margin-top:0vh;
  width:20vh;
}
.in1{
  border:1px solid #8596C0;
  text-align:center;
  color:#6A7BB1;
  height:4vh;
}
.btn1{
  width:25%;
  color:#8491BF;
  box-shadow:2px 2px #A6A6A8;
}
#hide {
    top: 12%;
    width: 2.5rem;
    height: 100%;
    position: fixed;
    left: 0;
    background-color: #7f92b9;
    background-image: linear-gradient(#7f92b9, #a6afcc, #c1c7dd);
    text-align: center;
}

#hide img {
    margin: 0.7rem 0;
}
#menu1{
  top:12%;
}
#menu2 {
    top: 18%;
}

#menu3 {
    top: 24%;
}

#menu4 {
    top: 30%;
}
.menu {
    position: absolute;
    width: 20vh;
    background-color: #7f92b9;
    color: white;
    font-size: 1.3rem;
    padding: 1rem 2rem 1rem 4rem;
    box-shadow: 0 0 5px #99969f;
    background-image: linear-gradient(to bottom right, #ffffff, #9ea1c0, #9499b9);
    z-index: 5;
    font-weight: lighter;
}
.menu .maret {
    position: absolute;
    z-index: 5;
    font-size:3rem;
}
.one{
  position:absolute;
  top:12%;
  left:4%;
}
.two{
  position:absolute;
  top:18%;
  left:4%;
}
.three{
  position:absolute;
  top:24%;
  left:4%;
}
.four{
  position:absolute;
  top:30%;
  left:4%;
}
.onesp{
  color:#3A548A;
  margin-left: -2vh;
  margin-top: 2vh;
}

</style>
