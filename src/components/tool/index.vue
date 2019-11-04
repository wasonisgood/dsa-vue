<template scoped>
	<div>
		<!-- 電腦排版 -->
		<div class="d-none d-lg-block">
			<div class="background-primary d-flex w-100">
				<!-- 側邊欄 -->
				<div id="hide" class="aside d-flex flex-column">
					<router-link to="tool"><img src="@/assets/tool/aside_1.png" height="30" class="align-self-center"/></router-link> 
					<router-link to="track"><img src="@/assets/tool/aside_2.png" height="30" class="align-self-center"/></router-link> 
					<router-link to="waterlevel"><img src="@/assets/tool/aside_3.png" height="30" class="align-self-center"/></router-link> 
					<router-link to="parameter"><img src="@/assets/tool/aside_4.png" height="30" class="align-self-center"/></router-link> 
				</div>
				<div id="menu1" class="hidden-menu"><div class="h-100 d-flex justify-content-center" onclick="javascript:location.href='index.html'"><i class="material-icons align-self-center mr-2">◎</i><span class="align-self-center">刀具資訊</span></div></div>
				<div id="menu2" class="hidden-menu"><div class="h-100 d-flex justify-content-center" onclick="javascript:location.href='../track/index.html'"><i class="material-icons align-self-center mr-2">◎</i><span class="align-self-center">刀具追蹤</span></div></div>
				<div id="menu3" class="hidden-menu"><div class="h-100 d-flex justify-content-center" onclick="javascript:location.href='../waterlevel/#/waterlevel/'"><i class="material-icons align-self-center mr-2">◎</i><span class="align-self-center">水位分析</span></div></div>
				<div id="menu4" class="hidden-menu"><div class="h-100 d-flex justify-content-center" onclick="javascript:location.href='../parameter/index.html'"><i class="material-icons align-self-center mr-2">◎</i><span class="align-self-center">訂單管理</span></div></div>
				<!-- 左側欄位(刀具資訊) -->
				<div class="tool-info-container d-flex flex-column justify-content-between">
					<!-- 刀塔刀具資訊 (NVX1020A) -->
					<div class="tool-info background-white">
						<!-- title -->
						<div class="subtitle d-flex justify-content-between">
							<span class="h-100 d-flex">
								<img class="align-self-center" src="@/assets/tool/info.png" height="23" width="23" />
								<span class="align-self-center ml-2 text-family-1 text-size-18 text-weight-bold text-black-1">刀塔刀具資訊</span>
							</span>
							<input class="align-self-center background-primary text-center text-blue-1 text-weight-light text-size-13" value="NVX 1020 A"></input>
						</div>
						<!-- content -->
						<div class="d-flex justify-content-between position-relative">
							<div class="health-title d-flex background-primary">
								<img src="@/assets/tool/Run.png" height="20" width="20" class="align-self-center ml-2"/><span class="align-self-center ml-2 text-family-1 text-blue-1 text-size-14 text-weight-normal">健康狀態</span>
							</div>
							<div class="tool-info-left d-flex">
								<img class="align-self-center" src="@/assets/tool/ui-01.png"/>
								<div class="d-flex flex-column text-blue-1 justify-content-between">
									<span class="d-flex flex-column">
										<span class="align-self-center d-flex" style="border-bottom: 1px #bac3d1 solid; line-height: 2rem;"><span class="text-family-1 text-weight-light text-blue-1 text-size-28">◎</span><span class="text-family-1 text-weight-light text-blue-1 text-size-13" >刀具壽命正常合計</span></span>
										<span class="align-self-center text-family-1 text-weight-bold text-blue-1 text-size-21">10</span>
									</span>
									<span class="d-flex flex-column">
										<span class="align-self-center d-flex" style="border-bottom: 1px #bac3d1 solid; line-height: 2rem;"><span class="text-family-1 text-weight-light text-blue-1 text-size-28">◎</span><span class="text-family-1 text-weight-light text-blue-1 text-size-13" >刀具壽命警告合計</span></span>
										<span class="align-self-center text-family-1 text-weight-bold text-blue-1 text-size-21">10</span>
									</span>
									<span class="d-flex flex-column">
										<span class="align-self-center d-flex" style="border-bottom: 1px #bac3d1 solid; line-height: 2rem;"><span class="text-family-1 text-weight-light text-blue-1 text-size-28">◎</span><span class="text-family-1 text-weight-light text-blue-1 text-size-13" >刀具壽命異常合計</span></span>
										<span class="align-self-center text-family-1 text-weight-bold text-blue-1 text-size-21">4</span>
									</span>
								</div>
							</div>
							<table class="tool-info-table text-family-1">
								<thead class="background-darkblue-1 text-center text-white text-weight-bold text-size-13">
									<tr>
										<th>刀塔編號</th>
										<th>加工刀具</th>
										<th>刀具壽命</th>
										<th>使用次數</th>
										<th>備註</th>
										<th></th>
									</tr>
								</thead>
								<tbody class="text-center text-blue-1 text-weight-light text-size-14">
									<tr v-for="item in tool_info_1020A">
										<td class="text-size-28">{{item.id}}</td><td>{{item.tool}}</td><td>{{item.life}}</td><td>{{item.times}}</td><td v-bind:style="{color:item.remark}" class="text-size-24">●</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
					<!-- 刀塔刀具資訊 (NVX600A)-->
					<div class="tool-info background-white">
						<!-- title -->
						<div class="subtitle d-flex justify-content-between">
							<span class="h-100 d-flex">
								<img class="align-self-center" src="@/assets/tool/info.png" height="23" width="23" />
								<span class="align-self-center ml-2 text-family-1 text-size-18 text-weight-bold text-black-1">刀塔刀具資訊</span>
							</span>
							<input class="align-self-center background-primary text-center text-blue-1 text-weight-light text-size-13" value="NVX 600 A"></input>
						</div>
						<!-- content -->
						<div class="d-flex justify-content-between position-relative">
							<div class="health-title d-flex background-primary">
								<img src="@/assets/tool/Run.png" height="20" width="20" class="align-self-center ml-2"/><span class="align-self-center ml-2 text-family-1 text-blue-1 text-size-14 text-weight-normal">健康狀態</span>
							</div>
							<div class="tool-info-left d-flex">
								<img class="align-self-center" src="@/assets/tool/ui-02.png" style="width: 14vw; height: 25vh; margin-left: 0.625vw;" />
								<div class="d-flex flex-column text-blue-1 justify-content-between" style="margin-left: 1vw;">
									<span class="d-flex flex-column">
										<span class="align-self-center d-flex" style="border-bottom: 1px #bac3d1 solid; line-height: 2rem;"><span class="text-family-1 text-weight-normal text-blue-1 text-size-28">◎</span><span class="text-family-1 text-weight-normal text-blue-1 text-size-13" >刀具壽命正常合計</span></span>
										<span class="align-self-center text-family-1 text-weight-bold text-blue-1 text-size-21">10</span>
									</span>
									<span class="d-flex flex-column">
										<span class="align-self-center d-flex" style="border-bottom: 1px #bac3d1 solid; line-height: 2rem;"><span class="text-family-1 text-weight-normal text-blue-1 text-size-28">◎</span><span class="text-family-1 text-weight-normal text-blue-1 text-size-13" >刀具壽命警告合計</span></span>
										<span class="align-self-center text-family-1 text-weight-bold text-blue-1 text-size-21">10</span>
									</span>
									<span class="d-flex flex-column">
										<span class="align-self-center d-flex" style="border-bottom: 1px #bac3d1 solid; line-height: 2rem;"><span class="text-family-1 text-weight-normal text-blue-1 text-size-28">◎</span><span class="text-family-1 text-weight-normal text-blue-1 text-size-13" >刀具壽命異常合計</span></span>
										<span class="align-self-center text-family-1 text-weight-bold text-blue-1 text-size-21">4</span>
									</span>
								</div>
							</div>
							<table class="tool-info-table text-family-1">
								<thead class="background-darkblue-1 text-center text-white text-weight-bold text-size-13">
									<tr>
										<th>刀塔編號</th>
										<th>加工刀具</th>
										<th>刀具壽命</th>
										<th>使用次數</th>
										<th>備註</th>
										<th></th>
									</tr>
								</thead>
								<tbody class="text-center text-blue-1 text-weight-normal text-size-14">
									<tr v-for="item in tool_info_600A">
										<td class="text-size-28">{{item.id}}</td><td>{{item.tool}}</td><td>{{item.life}}</td><td>{{item.times}}</td><td v-bind:style="{color:item.remark}" class="text-size-24">●</td>
									</tr>
								</tbody>
							</table>
						</div>						
					</div>
				</div>
				<!-- 刀具確認 -->
				<div class="tool-confirm-container background-white">
					<div class="subtitle d-flex">
						<img class="align-self-center" src="@/assets/tool/sure.png" height="23" width="23" />
						<span class="align-self-center ml-2 text-family-1 text-weight-bold text-black-1 text-size-18">刀具確認</span>
					</div>
					<div class="d-flex flex-column">
						<div class="tool-confirm-content-1 align-self-center d-flex flex-column background-primary-transparent text-family-1">
							<span class="tool-confirm-content-1-item"><span class="text-blue-1 text-size-14 text-weight-normal">加工工件 : </span><input value="WDR604-A01-P001" class="text-blue-1 text-weight-light text-size-11 text-center ml-2"></input></span>
							<span class="tool-confirm-content-1-item"><span class="text-blue-1 text-size-14 text-weight-normal">加工數量 : </span><input value=100 class="text-blue-1 text-weight-light text-size-11 text-center ml-2"></input></span>
							<span class="tool-confirm-content-1-item"><span class="text-blue-1 text-size-14 text-weight-normal">加工機床 : </span><select class="text-blue-1 text-weight-light text-size-11 ml-2" style="text-align-last: center;"><option>NXV-1020A</option></select></span>
							<div class="d-flex mt-2"><div class="align-self-center hor-line"></div><button class="align-self-center d-flex justify-content-center text-white button-darkblue background-darkblue-1 ml-4 text-family-1 text-weight-normal"><img class="mr-2 align-self-center" src="icon/circle_check.png" height="17" width="17"/>確認</button></div>
						</div>
						<table class="tool-confirm-content-2 align-self-center text-family-1">
							<thead class="background-darkblue-2 text-center text-white text-weight-bold text-size-14">
								<tr>
									<th>編號</th>
									<th>加工刀具</th>
									<th>需求次數</th>
									<th>正確</th>
									<th></th>
								</tr>
							</thead>
							<tbody class="text-center text-blue-1 text-size-13 text-weight-normal">
								<tr v-for="item in tool_confirm">
									<td>{{item.id}}</td><td>{{item.tool}}</td><td>{{item.require}}</td><td><img v-bind:src="item.correct" height="20" width="20" /></td>
								</tr>
							</tbody>
						</table>
						<div class="tool-confirm-content-3 d-flex align-self-center text-family-1">
							<div class="align-self-center hor-line-2"></div>
							<button @click="GetTable()" id="button1" class="align-self-center d-flex justify-content-center button-darkblue background-darkblue-1 ml-4 text-white text-family-1 text-family-1 text-weight-normal">
								<img class="mr-2 align-self-center" src="@/assets/tool/document_white.png" height="17" width="17"/>領刀表
							</button>
						</div>
						<div class="tool-confirm-content-4 align-self-center background-primary-transparent d-flex flex-column text-family-1">
							<div class="d-flex">
								<span class="text-blue-1 text-size-14 text-weight-normal">加工程式 : </span><input class="text-blue-1 ml-4" style="width: 14.53vw; border: 1px #697bb0 solid;"></input>
								<button class="selectbtn ml-4 text-blue-1 text-size-14 text-weight-light">選擇檔案</button>
							</div>
							<div class="tool-confirm-content-3 d-flex align-self-center">
								<div class="align-self-center hor-line"></div>
								<button class="align-self-center d-flex justify-content-center button-darkblue background-darkblue-1 ml-3 text-white text-family-1 text-weight-normal">
									<img class="mr-2 align-self-center" src="@/assets/tool/upload.png" height="17" width="17"/>上傳
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<!-- 領刀表modal -->
		<div v-if="tool_table_modal" class="modal-2 modal-background">
			<div class="modal-header d-flex justify-content-end"><button @click="CloseToolTableModal()" class="align-self-center closebtn"><img src="@/assets/tool/close.png" width="23" height="23"/></button></div>
			<div class="modal-body">
				<div class="subtitle d-flex">
					<img class="align-self-center mr-2" src="@/assets/tool/info.png" height="23" width="23" />
					<span class="align-self-center text-family-1 text-size-18 text-weight-bold text-black-1">領刀表</span>
				</div>
				<table class="modal-2-table">
					<thead class="background-darkblue-2 text-center text-white text-weight-bold text-size-14">
						<tr>
							<th>編號</th>
							<th>加工刀具</th>
							<th>數量</th>
							<th>刀具壽命</th>
							<th></th>
						</tr>
					</thead>
					<tbody class="text-blue-1 text-center">
							<tr v-for="item in tool_table">
								<td>{{item.id}}</td><td>{{item.tool}}</td><td>{{item.number}}</td><td>{{item.life}}</td>
							</tr>
					</tbody>
				</table>
				<div class="d-flex justify-content-end" style="height: 5.8vh;">
					<button @click="GetSerialNumber()" class="align-self-center d-flex justify-content-center button-darkblue background-darkblue-1 ml-3 text-white text-family-1 text-family-1 text-weight-normal closebtn">
						<img class="mr-2 align-self-center" src="@/assets/tool/document_white.png" height="17" width="17"/>產生序號
					</button>
				</div>
			</div>
		</div>
		<!-- 領刀表序號modal -->
		<div v-if="serial_number_modal" class="modal-1 background-primary">
			<div class="d-flex flex-column">
				<div class="sn-modal-title d-flex justify-content-center">
					<span class="text-blue-1 text-family-1 align-self-center">領刀表序號</span>
				</div>
				<div class="d-flex">
					<input value="10800001" class="text-blue-1 text-center align-self-center"></input>
					<button @click="ConfirmSerialNumber()" class="align-self-center d-flex justify-content-center text-white button-darkblue background-darkblue-1 ml-3 text-family-1 text-weight-normal">
						<img class="mr-2 align-self-center" src="@/assets/tool/check_white.png" height="17" width="17"/>確認
					</button>
				</div>
			</div>
		</div>

		<!-- 手機排版 -->
		<div class="container-fluid background-primary d-block d-lg-none" style="max-height:70vh; padding-bottom: 40vh; overflow-y: scroll;">
			<div class="row">
				<!-- 刀具資訊 -->
				<div class="col">
					<div class="card background-white mt-3 mb-3">
						<!-- 收合標題 -->
						<div @click="ToggleContent1()" class="card-header background-white d-flex">
							<img class="align-self-center" src="@/assets/tool/info.png" height="23" width="23" />
							<span class="align-self-center ml-3">刀塔刀具資訊</span>
						</div>
						<!-- 收合內容1() -->
						<div v-if="collapse_content_1" class="card-body">
							<div class="health-title d-flex background-primary">
								<img src="@/assets/tool/Run.png" height="20" width="20" class="align-self-center ml-2"/><span class="align-self-center ml-2 text-family-1 text-blue-1 text-size-14 text-weight-normal">健康狀態</span>
							</div>
							<div class="d-flex flex-column">
								<!-- select change event -> collapse.js -->
								<select @change="SelectToolInfo($event)" class="w-100 tool-info-selector"><option>NXV 1020 A</option><option>NXV 600 A</option></select>
								<img class="align-self-center" src="@/assets/tool/ui-01.png" style="width: 60vw; height: 60vw; margin-top: 10vh;" />
								<div class="d-flex justify-content-between">
									<span class="d-flex flex-column">
										<span class="align-self-center d-flex" style="border-bottom: 1px #bac3d1 solid; line-height: 2rem;"><span class="text-family-1 text-weight-light text-blue-1 text-size-28">◎</span><span class="text-family-1 text-weight-light text-blue-1 text-size-11">刀具壽命正常合計</span></span>
										<span class="align-self-center text-family-1 text-weight-bold text-blue-1 text-size-21">10</span>
									</span>
									<span class="d-flex flex-column">
										<span class="align-self-center d-flex" style="border-bottom: 1px #bac3d1 solid; line-height: 2rem;"><span class="text-family-1 text-weight-light text-blue-1 text-size-28">◎</span><span class="text-family-1 text-weight-light text-blue-1 text-size-11" >刀具壽命警告合計</span></span>
										<span class="align-self-center text-family-1 text-weight-bold text-blue-1 text-size-21">10</span>
									</span>
									<span class="d-flex flex-column">
										<span class="align-self-center d-flex" style="border-bottom: 1px #bac3d1 solid; line-height: 2rem;"><span class="text-family-1 text-weight-light text-blue-1 text-size-28">◎</span><span class="text-family-1 text-weight-light text-blue-1 text-size-11" >刀具壽命異常合計</span></span>
										<span class="align-self-center text-family-1 text-weight-bold text-blue-1 text-size-21">4</span>
									</span>
								</div>
								<table class="text-family-1 mt-4">
									<thead class="background-darkblue-1 text-center text-white text-weight-bold text-size-13">
										<tr>
											<th>刀塔編號</th>
											<th>加工刀具</th>
											<th>刀具壽命</th>
											<th>使用次數</th>
											<th>備註</th>
											<th></th>
										</tr>
									</thead>
									<tbody class="text-center text-blue-1 text-weight-light text-size-14">
										<tr v-for="item in tool_info_1020A">
											<td class="text-size-28">{{item.id}}</td><td>{{item.tool}}</td><td>{{item.life}}</td><td>{{item.times}}</td><td v-bind:style="{color:item.remark}" class="text-size-24">●</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
						<!-- 收合內容2() -->
						<div v-if="collapse_content_1_2" class="card-body">
							<div class="health-title d-flex background-primary">
								<img src="@/assets/tool/Run.png" height="20" width="20" class="align-self-center ml-2"/><span class="align-self-center ml-2 text-family-1 text-blue-1 text-size-14 text-weight-normal">健康狀態</span>
							</div>
							<div class="d-flex flex-column">
								<!-- select change event -> collapse.js -->
								<select @change="SelectToolInfo($event)" class="w-100 tool-info-selector"><option>NXV 1020 A</option><option>NXV 600 A</option></select>
								<img class="align-self-center" src="@/assets/tool/ui-02.png" style="width: 60vw; height: 60vw;" />
								<div class="d-flex justify-content-between">
									<span class="d-flex flex-column">
										<span class="align-self-center d-flex" style="border-bottom: 1px #bac3d1 solid; line-height: 2rem;"><span class="text-family-1 text-weight-light text-blue-1 text-size-28">◎</span><span class="text-family-1 text-weight-light text-blue-1 text-size-13">刀具壽命正常合計</span></span>
										<span class="align-self-center text-family-1 text-weight-bold text-blue-1 text-size-21">5</span>
									</span>
									<span class="d-flex flex-column">
										<span class="align-self-center d-flex" style="border-bottom: 1px #bac3d1 solid; line-height: 2rem;"><span class="text-family-1 text-weight-light text-blue-1 text-size-28">◎</span><span class="text-family-1 text-weight-light text-blue-1 text-size-13" >刀具壽命警告合計</span></span>
										<span class="align-self-center text-family-1 text-weight-bold text-blue-1 text-size-21">5</span>
									</span>
									<span class="d-flex flex-column">
										<span class="align-self-center d-flex" style="border-bottom: 1px #bac3d1 solid; line-height: 2rem;"><span class="text-family-1 text-weight-light text-blue-1 text-size-28">◎</span><span class="text-family-1 text-weight-light text-blue-1 text-size-13" >刀具壽命異常合計</span></span>
										<span class="align-self-center text-family-1 text-weight-bold text-blue-1 text-size-21">5</span>
									</span>
								</div>
								<table class="text-family-1 mt-4">
									<thead class="background-darkblue-1 text-center text-white text-weight-bold text-size-13">
										<tr>
											<th>刀塔編號</th>
											<th>加工刀具</th>
											<th>刀具壽命</th>
											<th>使用次數</th>
											<th>備註</th>
											<th></th>
										</tr>
									</thead>
									<tbody class="text-center text-blue-1 text-weight-light text-size-14">
										<tr v-for="item in tool_info_600A">
											<td class="text-size-28">{{item.id}}</td><td>{{item.tool}}</td><td>{{item.life}}</td><td>{{item.times}}</td><td v-bind:style="{color:item.remark}" class="text-size-24">●</td>
										</tr>
									</tbody>
								</table>
							</div>	
						</div>
					</div>
				</div>
			</div>
			<div class="row">
				<!-- 刀具確認 -->
				<div class="col">
					<div class="card background-white mt-3 mb-3">
						<!-- 收合標題 -->
						<div @click="ToggleContent2()" class="card-header background-white d-flex">
							<img class="align-self-center" src="@/assets/tool/sure.png" height="23" width="23" />
							<span class="ml-3 align-self-center">刀具確認</span>
						</div>
						<!-- 收合內容 -->
						<div v-if="collapse_content_2" class="card-body">
							<div class="d-flex flex-column">
								<div class="w-100 d-flex flex-column justify-content-around background-primary-transparent text-family-1" style="height: 30vh;">
									<span class="align-self-center text-blue-1 text-size-14 text-weight-normal">加工工件</span>
									<input value="WDR604-A01-P001" class="align-self-center w-50 text-blue-1 text-weight-light text-size-11 text-center"></input>
									<span class="align-self-center text-blue-1 text-size-14 text-weight-normal">加工數量</span>
									<input value=100 class="align-self-center w-50 text-blue-1 text-weight-light text-size-11 text-center ml-2"></input>
									<span class="align-self-center text-blue-1 text-size-14 text-weight-normal">加工機床</span>
									<select class="align-self-center w-50 text-blue-1 text-weight-light text-size-11 ml-2" style="text-align-last: center;"><option>NXV-1020A</option></select>
								</div>
								<button class="w-100 align-self-center d-flex justify-content-center text-white button-darkblue background-darkblue-1 mt-4 text-family-1 text-weight-normal">
									<img class="mr-2 align-self-center" src="@/assets/tool/check_white.png" height="17" width="17"/>確認
								</button>
								<table class="w-100 mt-4 align-self-center text-family-1">
									<thead class="background-darkblue-2 text-center text-white text-weight-bold text-size-14">
										<tr>
											<th>編號</th>
											<th>加工刀具</th>
											<th>需求次數</th>
											<th>正確</th>
											<th></th>
										</tr>
									</thead>
									<tbody class="text-center text-blue-1 text-size-13 text-weight-normal">
										<tr v-for="item in tool_confirm">
											<td>{{item.id}}</td><td>{{item.tool}}</td><td>{{item.require}}</td><td><img v-bind:src="item.correct" height="20" width="20" /></td>
										</tr>
									</tbody>
								</table>
								<button id="button1" class="w-100 align-self-center d-flex justify-content-center button-darkblue background-darkblue-1 mt-4 text-white text-family-1 text-family-1 text-weight-normal">
									<img class="mr-2 align-self-center" src="@/assets/tool/check_white.png" height="17" width="17"/>領刀表
								</button>
								<div class="mt-4 background-primary-transparent d-flex flex-column justify-content-around text-family-1" style="height: 25vh; padding: 3vw;">
									<span class="text-blue-1 text-size-14 text-weight-normal">加工程式</span>
									<input class="w-100 text-blue-1 mt-4" style="border: 1px #697bb0 solid;"></input>
									<button class="w-100 button-darkblue background-darkblue-1 mt-4 text-white text-size-14 text-weight-light">選擇檔案</button>
									<button class="w-100 align-self-center d-flex justify-content-center button-darkblue background-darkblue-1 mt-3 text-white text-family-1 text-weight-normal">
										<img class="mr-2 align-self-center" src="@/assets/tool/upload.png" height="17" width="17"/>上傳
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<!-- 只有標題，點擊跳轉至其他刀具頁面 -->
			<div v-for="(item,index) in tool_management" v-if="index > 1" class="row">
				<div class="col">
					<div class="card background-white mt-3 mb-3">
						<div id="collapse-link-3" class="card-header background-white d-flex">
							<img v-bind:src="item.image" class="align-self-center" height="23" width="23" />
							<span class="ml-3 align-self-center">{{item.title}}</span>
						</div>
					</div>
				</div>
			</div>
		</div>
		<!-- 底部導覽列-手機版 -->
		<div class="bottom-navbar d-flex background-white d-block d-lg-none">
			<a v-for="(item,index) in tool_management" class="bottom-navitem d-flex flex-column">
				<img v-bind:src="item.image" height="20" width="20" class="align-self-center mt-3"/>
				<span class="align-self-center text-size-13">{{item.navtitle}}</span>
			</a>
		</div>
	</div>
</template>

<script>
export default {
	data(){
		return{
			tool_info_1020A:[
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
			],
			tool_info_600A:[
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
			],
			tool_confirm:[
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
			tool_table:[
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
			tool_management:[
				{
					title:"刀塔刀具資訊",
					navtitle:"刀具資訊",
					image:require("@/assets/tool/info.png")
				},
				{
					title:"刀具確認",
					navtitle:"刀具確認",
					image:require("@/assets/tool/sure.png")
				},
				{
					title:"刀具入庫",
					navtitle:"刀具入庫",
					image:require("@/assets/tool/calendar.png")
				},
				{
					title:"刀具追蹤",
					navtitle:"刀具追蹤",
					image:require("@/assets/tool/search.png")
				},
				{
					title:"刀具水位分析",
					navtitle:"水位分析",
					image:require("@/assets/tool/search.png")
				},
				{
					title:"刀具水位",
					navtitle:"刀具水位",
					image:require("@/assets/tool/search.png")
				},
				{
					title:"加工程式",
					navtitle:"加工程式",
					image:require("@/assets/tool/search.png")
				},
				{
					title:"加工資訊",
					navtitle:"加工資訊",
					image:require("@/assets/tool/search.png")
				},
			],
			tool_table_modal: false,
			serial_number_modal: false,
			collapse_content_1: false,
			collapse_content_1_2: false,
			collapse_content_2: false,
			now_tool_info: "NXV 1020 A",
		}
	},
	methods:{
		GetTable(){
			this.tool_table_modal = true;
		},
		GetSerialNumber(){
			this.serial_number_modal = true;
		},
		CloseToolTableModal(){
			this.tool_table_modal = false;
		},
		ConfirmSerialNumber(){
			this.serial_number_modal = false;
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

<style scoped src="./style.css">
</style>