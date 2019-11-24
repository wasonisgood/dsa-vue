<template scoped>
	<div class="d-none d-lg-block">
		<div class="background-primary d-flex w-100">
			<asideNav></asideNav>
			<div class="processing-program background-white">
				<subtitle :subtitleInfo = "subtitle.processingProgram"></subtitle>
				<programContent></programContent>
			</div>
			<div class="processing-info background-white">
				<subtitle :subtitleInfo = "subtitle.processingInfo"></subtitle>
				<programInfoSearch></programInfoSearch>
				<programInfoTable></programInfoTable>
			</div>
		</div>
	</div>
</template>	

<script>
import asideNav from '../tool/child/aside.vue';
import subtitle from '../tool/child/subtitle.vue';
import subtitlePhone from '../tool/child/subtitlePhone.vue';
import programContent from './child/programContent.vue';
import programInfoSearch from './child/programInfoSearch.vue';
import programInfoTable from './child/programInfoTable.vue';

export default {
	name: "parameter",
	components: {asideNav, subtitle, subtitlePhone, programContent, programInfoSearch, programInfoTable},
	data(){
		return{
			subtitle: {
				processingProgram: {
					iconSrc: require("@/assets/parameter/1.png"),
					text: "加工程式",
					type: "normal",
				},
				processingInfo: {
					iconSrc: require("@/assets/parameter/3.png"),
					text: "加工資訊",
					type: "normal",
				},			
			},
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
      }
  }
}
</script>

<style scoped>
.background-primary{
	background-color: #eaeff8;
}

.background-white{
	background-color: #ffffffcc;
}

.processing-program{
	width: 35.10416vw;
	min-height: 7.77778vh;
	margin-left: 4.008vw;
	margin-top: 2.96vh;
	border: 1px #bbc4d2 solid;
}

.processing-info{
	width: 58.177083vw;
	min-height: 7.77778vh;
	margin-left: 1.197vw;
	margin-top: 2.96vh;
	border: 1px #bbc4d2 solid;
}
</style>