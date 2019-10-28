<template scoped >
<div class="malfunction">
  <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
    <div class="modal-dialog">
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
	<div class="modal-dialog">
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
      <div class="col-lg-12 col-xl-7 myCol ">
        <!--左邊欄位-->
        <div class="panel big">
          <div class="row">
            <div class="col text-left justify-content-center">
              <img class="align-self-center mr-2 img" src="@/assets/tool/new.png" width="20" height="20">
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
                  <img class="align-self-center img" src="@/assets/tool/Run.png" width="20" height="20">
                  健康狀態
                </div>
              </div>
              <div class="row">
                <div class="col text-left justify-content-center">
                  <img class="align-self-center" src="@/assets/tool/ui-01.png"  width="300" height="280">
                </div>
                <div class="col text-center justify-content-center mt-4">
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
                <tr class="tr_h" v-for="item in table1">
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
                <div class="col text-center justify-content-center mt-4">
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
      <div class="col-sm-4">
        <div class="panel height">
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
                <button class="btn" type="button" data-toggle="modal" data-target="#myModal">
                  <img class="align-self-center mr-1 img" src="@/assets/tool/table.png" width="20" height="20">
                  領刀表
                </button><br>
                <div class="bluesmall">
                  <div class="col text-left justify-content-center mf">
                    加工程式 :<input type="text" />
                    <button class="btn1" >選擇檔案</button>
                    <div class="fileupload">
                      <hr class="short_hr2">
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
      ]
    }
  }
}
</script>
<style scoped >
 @media only screen and (max-width: 480px) {
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
  width:52vh;
  height:25vh;
  border:1px solid #DCE0E9;
  overflow-y: scroll;
}
.table2{
  width:100%;
  height:25vh;
  border:1px solid #DCE0E9;
}
.tab{
  height:30vh;
  border:1px solid #DCE0E9;
  overflow:auto;
}
.tab2{
  width:100%;
   height:30vh;
  border:1px solid #DCE0E9;
  overflow:auto;
  margin-top:2vh;
}
.tr{
  height:6vh;
  background-color:#8596C1;
  color:#fff;
}
.th2{
  height:4vh;
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
  color:#7180B3;
}
.leftcol{
  color:#6A7BAF;
  margin-top:1vh
}
.leftfont{
  font-size:20px;
  font-weight:bold;
}
.circle{
  margin:0px auto;
  width:20px;
  height:20px;
  border-radius:999em;
  background-color:green;
}
.health_tit{
  border:1px solid #B5BBD4;
  width:11vh;
  border-radius:10rem;
  background-color:#F0F3FA;
}
.NXV{
  border:1px solid #B5BBD4;
  width:18vh;
  background-color:#F0F3FA;
  float:right;
  text-align:center;
  color:#6A7BB0;
}
hr{
  background-color:#8092B8;
}
.circle_num{
  color:#fff;
  font-size:18px;
  background-color:#525D93;
  width:30px;
  height:30px;
  text-align:center;
  border-radius:999em;
  margin:0px auto;
}
.big{
  height:38vh;
}
.blue{
  background-color:#EDF2F8;
  color:#6A7CAF;
  height:23vh;
}
.short_hr{
  width:70%;

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
  margin-left:5vh;
  margin-top:-2vh;
  height:4vh;
  color:#fff;
}
.sett{
  height:12%;
  margin-top:3vh;
}
.height{
  width:85vh;
  height:79vh;
}
.bluesmall{
  width:100%;
  background-color:#EDF2F8;
  color:#6A7CAF;
  height:10vh;
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
.mf input{
  margin-left:2vh;
  width:36vh;
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
  width:100vh;
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
  width:17vh;
  color:#8491BF;
  box-shadow:2px 2px #A6A6A8;
}
</style>
