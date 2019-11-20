<template scoped>
	<div>
		<!-- 電腦排版 -->
		<div class="d-none d-lg-block">
			<div class="background-primary d-flex w-100">
				<!-- 側邊欄 -->
				<asideNav></asideNav>
				<!-- 左側欄位(刀具資訊) -->
				<div class="tool-info-container d-flex flex-column justify-content-between">
					<div class="tool-info background-white">
						<subtitle :subtitleInfo = "subtitle.toolInfo1020a"></subtitle>
						<div class="d-flex justify-content-between position-relative">
							<toolHealthState :toolHealthState = "nxv1020a.state"></toolHealthState>
							<toolHealthInfo :toolHealthInfoData = "nxv1020a.info"></toolHealthInfo>
							<toolHealthTable :toolHealthTableData = "nxv1020a.table"></toolHealthTable>
						</div>
					</div>
					<!-- 刀塔刀具資訊 (NVX600A)-->
					<div class="tool-info background-white">
						<subtitle :subtitleInfo = "subtitle.toolInfo600a"></subtitle>
						<div class="d-flex justify-content-between position-relative">
							<toolHealthState :toolHealthState = "nxv600a.state"></toolHealthState>
							<toolHealthInfo :toolHealthInfoData = "nxv600a.info"></toolHealthInfo>
							<toolHealthTable :toolHealthTableData = "nxv600a.table"></toolHealthTable>
						</div>						
					</div>
				</div>
				<!-- 刀具確認 -->
				<div class="tool-confirm-container background-white">
					<subtitle :subtitleInfo = "subtitle.toolConfirm"></subtitle>
					<toolConfirm :toolConfirmData="toolConfirm" :showToolTable="GetTable"></toolConfirm>
				</div>
			</div>
		</div>
		<!-- 領刀表modal -->
		<toolTableModal :toolTable="toolTable" :show="showToolTableModal" :CloseToolTableModal="CloseToolTableModal" :GetSerialNumber="GetSerialNumber"></toolTableModal>
		<!-- 領刀表序號modal -->
		<serialNumberModal :serialNumber="serialNumber" :show="showSerialNumberModal" :ConfirmSerialNumber="ConfirmSerialNumber"></serialNumberModal>
		<!-- 手機排版 -->
		<div class="container-fluid background-primary d-block d-lg-none" style="max-height:70vh; padding-bottom: 40vh; overflow-y: scroll;">
			<div class="row">
				<!-- 刀具資訊 -->
				<div class="col">
					<div class="card background-white mt-3 mb-3">
						<subtitlePhone :subtitleInfo="subtitle.toolInfo1020a" :ToggleContent="ToggleContent1"></subtitlePhone>
						<toolInfoPhone :toolHealthState = "nxv1020a.state" :toolHealthInfoData = "nxv1020a.info" :toolHealthTableData = "nxv1020a.table" :collapse="collapse_content_1" :SelectToolInfo="SelectToolInfo"></toolInfoPhone>
						<toolInfoPhone :toolHealthState = "nxv600a.state" :toolHealthInfoData = "nxv600a.info" :toolHealthTableData = "nxv600a.table" :collapse="collapse_content_1_2" :SelectToolInfo="SelectToolInfo"></toolInfoPhone>
					</div>
				</div>
			</div>
			<div class="row">
				<!-- 刀具確認 -->
				<div class="col">
					<div class="card background-white mt-3 mb-3">
						<subtitlePhone :subtitleInfo="subtitle.toolConfirm" :ToggleContent="ToggleContent2"></subtitlePhone>
						<toolConfirmPhone :toolConfirmData="toolConfirm" :collapse = "collapse_content_2"></toolConfirmPhone>
					</div>
				</div>
			</div>
			<div v-for="(item,index) in titleList" v-if="index > 1" class="row">
				<div class="col">
					<div class="card background-white mt-3 mb-3">
						<subtitlePhone :subtitleInfo="item" :ToggleContent="ToggleContent2"></subtitlePhone>
					</div>
				</div>
			</div>
		</div>
		<!-- 底部導覽列-手機版 -->
		<bottomNav :titleList = "titleList"></bottomNav>
	</div>
</template>

<script>
import asideNav from './child/aside.vue';
import subtitle from './child/subtitle.vue';
import subtitlePhone from './child/subtitlePhone.vue';
import toolHealthState from './child/toolHealthState.vue';
import toolHealthInfo from './child/toolHealthInfo.vue';
import toolHealthTable from './child/toolHealthTable.vue';
import toolInfoPhone from './child/toolInfoPhone.vue';
import toolConfirm from './child/toolConfirm.vue';
import toolConfirmPhone from './child/toolConfirmPhone.vue';
import toolTableModal from './child/toolTableModal.vue';
import serialNumberModal from './child/serialNumberModal.vue'
import bottomNav from './child/bottomNav.vue';

export default {
	name: "toolInfo",
	components: {asideNav, subtitle, subtitlePhone, toolHealthState, toolHealthInfo, toolHealthTable, toolInfoPhone, toolConfirm, toolConfirmPhone, toolTableModal, serialNumberModal, bottomNav},
	data(){
		return{
			subtitle:{
				toolInfo1020a: {
					iconSrc: require("@/assets/tool/info.png"),
					text: "刀塔刀具資訊",
					type: "input",
					inputValue: "NVX 1020 A",
				},
				toolInfo600a: {
					iconSrc: require("@/assets/tool/info.png"),
					text: "刀塔刀具資訊",
					type: "input",
					inputValue: "NVX 600 A",
				},
				toolConfirm: {
					iconSrc: require("@/assets/tool/sure.png"),
					text: "刀具確認",
					type: "normal",
				}
			},
			nxv1020a:{
				state: {
					iconSrc: require("@/assets/tool/Run.png")
				},
				info: {
					imgSrc: require("@/assets/tool/ui-01.png"),
					normal: 10,
					warning: 5,
					error: 2,
				},
				table: [
					{
						id:"❶",
						tool:'0001122',
						life:50,
						times:50,
						remark:"#49a69f",
					},
					{
						id:"❷",
						tool:'0001122',
						life:50,
						times:50,
						remark:"#f5db56",
					},
					{
						id:"❸",
						tool:'0001122',
						life:50,
						times:50,
						remark:"#6a7cb1",
					},
					{
						id:"❹",
						tool:'0001122',
						life:50,
						times:50,
						remark:"#49a69f",
					},
					{
						id:"❺",
						tool:'0001122',
						life:50,
						times:50,
						remark:"#6a7cb1",
					},
				]
			},
			nxv600a:{
				state: {
					iconSrc: require("@/assets/tool/Run.png")
				},
				info: {
					imgSrc: require("@/assets/tool/ui-02.png"),
					normal: 12,
					warning: 3,
					error: 3,
				},
				table: [
					{
						id:"❶",
						tool:'0001122',
						life:50,
						times:50,
						remark:"#49a69f",
					},
					{
						id:"❷",
						tool:'0001122',
						life:50,
						times:50,
						remark:"#f5db56",
					},
					{
						id:"❸",
						tool:'0001122',
						life:50,
						times:50,
						remark:"#6a7cb1",
					},
					{
						id:"❹",
						tool:'0001122',
						life:50,
						times:50,
						remark:"#49a69f",
					},
					{
						id:"❺",
						tool:'0001122',
						life:50,
						times:50,
						remark:"#6a7cb1",
					},
				]
			},
			toolConfirm:[
				{
					id:"001",
					tool:"D6鑽頭",
					require:"50",
					correct:require("@/assets/tool/checkbox.png")
				},
				{
					id:"002",
					tool:"D6鑽頭",
					require:"50",
					correct:require("@/assets/tool/checkbox.png")
				},
				{
					id:"003",
					tool:"D6鑽頭",
					require:"50",
					correct:require("@/assets/tool/checkbox.png")
				},
				{
					id:"004",
					tool:"D6鑽頭",
					require:"50",
					correct:require("@/assets/tool/empty_checkbox.png")
				},
				{
					id:"005",
					tool:"D6鑽頭",
					require:"50",
					correct:require("@/assets/tool/checkbox.png")
				},
				{
					id:"006",
					tool:"D6鑽頭",
					require:"50",
					correct:require("@/assets/tool/checkbox.png")
				},
				{
					id:"007",
					tool:"D6鑽頭",
					require:"50",
					correct:require("@/assets/tool/checkbox.png")
				},
				{
					id:"008",
					tool:"D6鑽頭",
					require:"50",
					correct:require("@/assets/tool/checkbox.png")
				},
			],
			toolTable:[
				{
					id:"001",
					tool:"D6鑽頭",
					number:1,
					life:50
				},
				{
					id:"002",
					tool:"D6鑽頭",
					number:4,
					life:50
				},
				{
					id:"003",
					tool:"D6鑽頭",
					number:1,
					life:50
				},
				{
					id:"004",
					tool:"D6鑽頭",
					number:4,
					life:50
				},
				{
					id:"005",
					tool:"D6鑽頭",
					number:1,
					life:50
				},
				{
					id:"006",
					tool:"D6鑽頭",
					number:1,
					life:50
				},
				{
					id:"007",
					tool:"D6鑽頭",
					number:7,
					life:50
				}
			],
			serialNumber: "10800001",
			titleList:[
				{
					text:"刀塔刀具資訊",
					navtitle:"刀具資訊",
					iconSrc:require("@/assets/tool/info.png")
				},
				{
					text:"刀具確認",
					navtitle:"刀具確認",
					iconSrc:require("@/assets/tool/sure.png")
				},
				{
					text:"刀具入庫",
					navtitle:"刀具入庫",
					iconSrc:require("@/assets/tool/calendar.png")
				},
				{
					text:"刀具追蹤",
					navtitle:"刀具追蹤",
					iconSrc:require("@/assets/tool/search.png")
				},
				{
					text:"刀具水位分析",
					navtitle:"水位分析",
					iconSrc:require("@/assets/tool/search.png")
				},
				{
					text:"刀具水位",
					navtitle:"刀具水位",
					iconSrc:require("@/assets/tool/search.png")
				},
				{
					text:"加工程式",
					navtitle:"加工程式",
					iconSrc:require("@/assets/tool/search.png")
				},
				{
					text:"加工資訊",
					navtitle:"加工資訊",
					iconSrc:require("@/assets/tool/search.png")
				},
			],
			showToolTableModal: false,
			showSerialNumberModal: false,
			collapse_content_1: false,
			collapse_content_1_2: false,
			collapse_content_2: false,
			now_tool_info: "NXV 1020 A",
		}
	},
	methods:{
		GetTable(){
			this.showToolTableModal = true;
		},
		GetSerialNumber(){
			this.showSerialNumberModal = true;
		},
		CloseToolTableModal(){
			this.showToolTableModal = false;
		},
		ConfirmSerialNumber(){
			this.showSerialNumberModal = false;
		},
		ToggleContent1(){
			if(this.now_tool_info=="NXV 1020 A"){
				this.collapse_content_1 = !this.collapse_content_1;
			}
			else if(this.now_tool_info=="NXV 600 A"){
				this.collapse_content_1_2 = !this.collapse_content_1_2;
			}
		},
		ToggleContent2(){
			this.collapse_content_2 = !this.collapse_content_2;
		},
		SelectToolInfo(event){
			this.now_tool_info = event.target.value;
			if(this.now_tool_info=="NXV 1020 A"){
				this.collapse_content_1 = true;
				this.collapse_content_1_2 = false;
			}
			else if(this.now_tool_info=="NXV 600 A"){
				this.collapse_content_1_2 = true
				this.collapse_content_1 = false;
			}
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

.content-container{
	width: 97.45vw;
	height: 83.5vh;
}

.tool-info{
	width: 100%;
	height: 37.6vh;
	border: 1px #bbc4d2 solid;
}

.tool-info-container{
	width: 60.5vw;
	height: 77.58vh;
	margin-top: 2.96vh;
	margin-left: 4.008vw;
}

.tool-confirm-container{
	width: 32.8vw;
	height: 77.58vh;
	margin-top: 2.96vh;
	margin-left: 1.197vw;
	border: 1px #bbc4d2 solid;
}
</style>