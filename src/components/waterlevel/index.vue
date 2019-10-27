<template scoped >
  <div class="container-fluid">
    <div class="row">
      <div class="col-xl-5 col-12">
        <div class="panel mt-3 ml-5" style="opacity: 0.8; border:1px solid #bbc4d2">
          <div class="row">
            <div class="col text-left justify-content-center" style="font-weight: 900;font-size:16pt;font-family: Microsoft JhengHei;">
              <img class="align-self-center mr-2  img" src="./wateranly.jpg" style="margin-left:5vh;" width="25">
              刀具水位分析
            </div>
          </div>
          <div class="mr-5 ml-5">
            <hr style="background-color:#8192b9">
            <div class="statistical">
                <vue-highcharts :options="options" ref="barChart" style="width:95vh;height:35vh;"></vue-highcharts>
                <button class="btcustom-l" @click="leftan()"><i style="font-size:20px;" class="fas fa-caret-left"></i></button>
                <button class="btcustom-r" @click="rightan()"><i style="font-size:20px;" class="fas fa-caret-right"></i></button>
                <div class="bg-white" style="width:10vh;height:4vh;position:absolute;margin-top:-4vh;margin-left:42vh;"></div>
                <div class="bg-white" style="width:10vh;height:2vh;position:absolute;margin-top:-4vh;margin-left:0vh;"></div>
            </div>
            <div class="processing">
              <table class="table2 text-center justify-content-center">
                <tr><th>加工刀具</th><th>安全數量</th><th>新刀數量</th><th>舊刀數量</th><th>庫存水位</th></tr>
                <tr v-for="item in tools"><td class="td1">{{item.t}}</td><td style="border-right: 0.75px solid #bbc4d2;">{{item.sf_num}}</td><td style="border-right: 0.75px solid #bbc4d2;">{{item.new_num}}</td><td style="border-right: 0.75px solid #bbc4d2;">{{item.old_num}}</td><td><div class="circle circle2" :style="{ 'background-color': item.bgcolor }" ></div></td></tr>          
              </table>
            </div>
          </div>
        </div>
      </div> 
      <div class="col-xl-7 col-12">
        <div class="panel mt-3" style="opacity: 0.8;border:1px solid #bbc4d2;">
          <div class="row">
            <div class="col text-left justify-content-center ml-3" style="margin-bottom:-2vh;margin-top:0.4rem;font-weight: 900;font-family: Microsoft JhengHei;">
              <img class=" mr-2 img" style="margin-top:-0.5rem;" src="@/assets/waterlevel/waterlevl.jpg" width="20">
              <span style="font-size:20px;">刀具水位</span>
            </div>
            <div class="text-right justify-content-center">
              <select class="sel">
                <option value="鑽頭">鑽頭</option>
              </select>
            </div>
          </div>
          <hr style=";background-color:#8192b9">
          <div class="kind">
            <table class="table text-center justify-content-center">
              <tr style="height:34px;font-size:16px;"><th>刀具種類</th><th>型號</th><th>新刀數量</th><th>舊刀數量</th><th>安全數量</th><th>刀徑</th><th>刃數</th><th>用途</th><th style="width:15vh">備註</th></tr>
              <tbody><tr v-for="item in watlevel"><td style="font-weight:lighter"><div style="margin-top:0.5rem;">{{item.kind}}</div></td><td><div style="margin-top:0.5rem;">{{item.code}}</div></td><td><div style="margin-top:0.5rem;">{{item.new_num}}</div></td><td><div style="margin-top:0.5rem;">{{item.old_num}}</div></td><td><div style="margin-top:0.5rem;">{{item.sf_num}}</div></td><td><div style="margin-top:0.5rem;">{{item.path}}</div></td><td><div style="margin-top:0.5rem;">{{item.edg_num}}</div></td><td><div style="margin-top:0.5rem;">{{item.use}}</div></td><td><div class="circle circle1" :style="{'background-color':item.remark}" style="margin-top:0.5rem;"></div></td></tr>
              <tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
              <tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
              <tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
              <tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
              <tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
              <tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
              <tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
              <tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
              <tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
              <tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
              <tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
              <tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
              <tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
              </tbody>
            </table>
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
import VueHighcharts from './vue-highcharts-master/src/VueHighcharts.vue'
import Highcharts from 'highcharts'
import {Chart} from 'highcharts-vue'
const borderRadius = require('highcharts-border-radius')
borderRadius(Highcharts);
const data = {
  chart: {
    type: 'column',
  },
  title: {
    text:null,
  },
  subtitle: {
  },
  xAxis: {
			categories: [
        '',
				'1',
				'2',
				'3',
				'4',
				'5',
        '6',
        '',
				'7',
				'8',
				'9',
				'10',
				'11',
        '12',
        ''
      ],
      crosshair: true,
      labels:{
        style:{
          color:'#6678A8'
        }
      }
		},
		yAxis: {
      tickAmount: 5,
			min: 0,
			title: {
				text: null
      },
      gridLineColor: '#BAC3D1',
      labels:{
        style:{
          color:'#6678A8'
        }
      }
    },
    
    tooltip: {
			headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
			pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
			'<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
			footerFormat: '</table>',
			shared: true,
			useHTML: true
		},
		plotOptions: {
			column: {
        colorByPoint:true,
        borderRadiusTopLeft: 30,
        borderRadiusTopRight: 30
      },
		},
		series: [{
      name:'123',
			type: 'column',
      data: [
        {y:0, color:'#fff'},
        {y:80,color:'#8895C0'},
        {y:110,color:'#8895C0'},
        {y:120,color:'#75B7B1'},
        {y:100,color:'#F5DB56'},
        {y:120,color:'#8895C0'},
        {y:160,color:'#75B7B1'},
        {y:0, color:'#fff'},
        {y:160,color:'#75B7B1'},
        {y:120,color:'#8895C0'},
        {y:100,color:'#F5DB56'},
        {y:120,color:'#75B7B1'},
        {y:110,color:'#8895C0'},
        {y:80,color:'#8895C0'},
        {y:0, color:'#fff'}]
    },{
      type: 'line',
      data:['',70,100,96,40,110,106,'',106,110,40,96,100,70,''],
      color:'#424B5D',
      marker:{
        lineWidth: 5,
        lineColor:'#424B5D',
      }
    }],
  }
export default {
    components: {
       VueHighcharts
    },
    data(){
        return{
          options: data,
          tools:[
            {
              t:'絲攻',
              sf_num:'85',
              new_num:'85',
              old_num:'10',
              water_lev:'100',
              bgcolor:'#6A7BB0'
            },
            {
              t:'鑽頭',
              sf_num:'85',
              new_num:'85',
              old_num:'10',
              water_lev:'100',
              bgcolor:'#6A7BB0'
            },
            {
              t:'端铣刀',
              sf_num:'85',
              new_num:'60',
              old_num:'10',
              water_lev:'100',
              bgcolor:'#44A69E'
            },
            {
              t:'面铣刀',
              sf_num:'85',
              new_num:'30',
              old_num:'10',
              water_lev:'100',
              bgcolor:'#F5DB56'
            },{
              t:'搪刀',
              sf_num:'85',
              new_num:'85',
              old_num:'10',
              water_lev:'100',
              bgcolor:'#6A7BB0'
            },
            {
              t:'鉸刀',
              sf_num:'85',
              new_num:'60',
              old_num:'10',
              water_lev:'100',
              bgcolor:'#44A69E'
            }
          ],
          watlevel:[
            {
              kind:'鑽頭',
              code:'MR2AL010F',
              new_num:'2',
              old_num:'2',
              sf_num:'5',
              path: '5',
              edg_num:'2',
              use:'不鏽鋼用',
              remark:'#6A7BB0'
            },
            {
              kind:'鑽頭',
              code:'MR2AL010F',
              new_num:'4',
              old_num:'4',
              sf_num:'3',
              path:'8',
              edg_num:'4',
              use:'鋁用',
              remark:'#44A69E'
            },
            {
              kind:'鑽頭',
              code:'MR2AL010F',
              new_num:'6',
              old_num:'6',
              sf_num:'2',
              path: '16',
              edg_num:'6',
              use:'',
              remark:'#F5DB56'
            }
          ],
          modal1: false,
          modal2: false,
          modal3: false,
          modal4: false,
          backgoundcolor: ''
        }
    },
    mounted: function () {
        var vm = this
        Bus.$on('val', (data) => {
        vm.backgoundcolor = data
        })
    },
    methods: {
      leftan(){
        let content = document.querySelector(".statistical");
        content.scrollLeft -= 600;
      },
      rightan(){
        let content = document.querySelector(".statistical");
        content.scrollLeft += 600;
      },
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
      getbgcolor(num){
        if(num>=85){
          this.tools.bgcolor = '#6A7BB0'
        }else if(num<85 & num>=60){
          this.tools.bgcolor = '#44A69E'
        }else if(num<60){
          this.tools.bgcolor = '#F5DB56'
        }
      }
    }
}
</script>
<style scoped>
*{
  font-family: Microsoft JhengHei;
  font-size:12px;
}
::-webkit-scrollbar
{
  width:2vh;
  background-color: #D9DBE8; 
}
::-webkit-scrollbar-button:vertical:decrement{
background-image: url('arrow-up.png');
background-repeat: no-repeat;
}
::-webkit-scrollbar-button:vertical:increment {
background-image: url('arrow-down.png');
background-repeat: no-repeat;
}
::-webkit-scrollbar-thumb{
background-color:#8090B8; 
}
.btcustom-l{
  position:fixed;
  left:12%;
  border:none;
  top:48.5%;
  background-color: #fff;
  width:3vh;
  font-size:18px;
  color:#9097BA;
}
.btcustom-r{
  position:fixed;
  left:34%;
  top:48.5%;
  border:none;
  background-color: #fff;
  width:3vh;
  font-size:18px;
  color:#9097BA;
}
.container-fluid{
  height:82%; 
  overflow-y: hidden;
  overflow-x: hidden;

}
hr{
  background-color:#8092B8;
}
.circle1{
  width:20px;
  height:20px;
  margin:0px auto;
}
.circle2{
  width:20px;
  height:20px;
  margin:0px auto;
}
.sel{
  margin-right:5vh;
  width:13vh;
  height:2vh;
  text-align: center;
  text-align-last: center;
  color:#7787B7;
  background-color:#EAEEF7;
  margin-top:0.5rem;
}
.kind{
  margin: 3vh;
  overflow-y:scroll;
  height:47.5rem;
}
.table{
  margin-bottom:3vh;
  min-width:100%;
  font-weight: 900;
}
.table th{
  background-color: #6678A8;
  color: #fff;
  height: 34px;
  font-size:16px;
}
.table tr{
  border-bottom: 1px solid #BCC6D2;
}
.table td{
  height:5vh;
  color: #8793BE;
  font-size:14px;
}
.table2{
  width:100%;
  border-bottom:1px solid #6678A8;
}
.table2 th{
  font-size:16px;
  font-weight: 900;
  background-color: #6678A8;
  color: #fff;
  height:3rem;
  
}
.table2 tr{
  height: 3.2rem;
}
.table2 td{
  color:#6777a8;
  font-family: Microsoft JhengHei;
  font-size:12px;
  border-top: 0.75px solid #bbc4d2;
}
.td1{
  background-color: #EFF0F5;
  font-size:14px;
  font-weight:900;
  color:#6777a8;
  border-right: 0.75px solid #bbc4d2;
}
.processing{
  overflow-x:hidden;
  overflow-y:scroll;
  margin-bottom:1.3rem;
}
.statistical{
  font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  width:91%;
  overflow-x:hidden;
  overflow-y:hidden;
  margin:3vh 3vh 0vh 3vh; 
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
