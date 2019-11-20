<template scoped>
	<div>
		<!-- 電腦排版 -->
		<div class="container-fluid d-none d-lg-block">
			<div class="row background-primary position-absolute">
				<!-- 側邊欄 -->
				<asideNav></asideNav>
				<!-- 刀具入庫 -->
				<div class="tool-storage background-white-transparent">
					<subtitle :subtitleInfo = "subtitle.toolStorage"></subtitle>
					<toolStorageContent type="computer"></toolStorageContent>
					<toolStorageButton :ShowToolRecordModal="ShowModal1" type="computer"></toolStorageButton>
				</div>
				<!-- 刀具追蹤 -->
				<div class="tool-track background-white-transparent">
					<subtitle :subtitleInfo = "subtitle.toolTrack"></subtitle>
					<div class="tool-track-content">
						<toolTrackSearch :ShowToolTable="ShowModal2"></toolTrackSearch>
						<toolTrackTable></toolTrackTable>
						<div class="d-flex justify-content-end" style="height:9.1vh;">
							<button class="align-self-center d-flex justify-content-center button-style-1 text-size-14 text-weight-normal"><img class="mr-2 align-self-center" src="@/assets/track/icon5.png" height="17" width="17" />出庫</button>
						</div>
					</div>
				</div>			
			</div>
		</div>
		<!-- 彈出視窗 - 刀具履歷 -->
		<toolRecordModal :Close="CloseModal1" :toggle="modal1"></toolRecordModal>
		<!-- 彈出視窗 - 領刀表 -->
		<toolTableModal :Close="CloseModal2" :toggle="modal2"></toolTableModal>
		
		<!-- 手機排版 -->
		<div class="container-fluid background-primary d-block d-lg-none" style="max-height:70vh; padding-bottom: 40vh; overflow-y: scroll;">
			<!-- 標題 -->
			<div v-for="(item,index) in tool_management" v-if="index < 2" class="row">
				<div class="col">
					<div class="card background-white mt-3 mb-3">
						<subtitlePhone :subtitleInfo = "item" :ToggleContent="Goto"></subtitlePhone>
					</div>
				</div>
			</div>	
			<div class="row">
				<!-- 刀具入庫 -->
				<div class="col">
					<div class="card background-white mt-3 mb-3">
						<subtitlePhone :subtitleInfo="subtitle.toolStorage" :ToggleContent="ToolStorageToggle"></subtitlePhone>
						<div v-if="toolStorageCollapse" class="card-body">
							<toolStorageContent type="phone"></toolStorageContent>
							<toolStorageButton :ShowToolRecordModal="ShowModal1" type="phone"></toolStorageButton>
						</div>
					</div>
				</div>
			</div>
			<div class="row">
				<!-- 刀具追蹤 -->
				<div class="col">
					<div class="card background-white mt-3 mb-3">
						<subtitlePhone :subtitleInfo="subtitle.toolTrack" :ToggleContent="ToolTrackToggle"></subtitlePhone>
						<div v-if="toolTrackCollapse" class="card-body">
							<toolTrackPhone></toolTrackPhone>
						</div>	
					</div>
				</div>
			</div>
			<!--標題-->
			<div v-for="(item,index) in tool_management" v-if="index > 3" class="row">
				<div class="col">
					<div class="card background-white mt-3 mb-3">
						<subtitlePhone :subtitleInfo="item" :ToggleContent="Goto"></subtitlePhone>
					</div>
				</div>
			</div>
		</div>
		<!-- 底部導覽列-手機版 -->
		<bottomNav :titleList = "tool_management"></bottomNav>
	</div>
</template>

<script>
import asideNav from '../tool/child/aside.vue';
import subtitle from '../tool/child/subtitle.vue';
import subtitlePhone from '../tool/child/subtitlePhone.vue';
import toolStorageContent from './child/toolStorageContent.vue';
import toolStorageButton from './child/toolStorageButton.vue';
import toolTrackSearch from './child/toolTrackSearch.vue';
import toolTrackTable from './child/toolTrackTable.vue';
import toolTrackPhone from './child/toolTrackPhone.vue';
import toolRecordModal from './child/toolRecordModal.vue';
import toolTableModal from './child/toolTableModal.vue';
import bottomNav from '../tool/child/bottomNav.vue';

export default{
	name: "toolTrack",
	components: {asideNav, subtitle, subtitlePhone, toolStorageContent, toolStorageButton, toolTrackSearch, toolTrackTable, toolTrackPhone, toolRecordModal, toolTableModal, bottomNav},
	data(){
		return{
			subtitle: {
				toolStorage: {
					iconSrc: require("@/assets/track/icon3.png"),
					text: "刀具入庫",
					type: "normal",
				},
				toolTrack: {
					iconSrc: require("@/assets/track/icon4.png"),
					text: "刀具追蹤",
					type: "normal",
				}
			},
			tool_management:[
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
			modal1: false,
			modal2: false,
			toolStorageCollapse: false,
			toolTrackCollapse: false,
		}
	},
	methods:{
		ShowModal1(){
			this.modal1 = true;
		},
		ShowModal2(){
			this.modal2 = true;
		},
		CloseModal1(){
			this.modal1 = false;
		},
		CloseModal2(){
			this.modal2 = false;
		},
		ToolStorageToggle(){
			this.toolStorageCollapse = !this.toolStorageCollapse;
		},
		ToolTrackToggle(){
			this.toolTrackCollapse = !this.toolTrackCollapse;
		},
		Goto(){
		
		}
	}
}
</script>

<style scoped src="./style.css">
</style>