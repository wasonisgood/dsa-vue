<template scoped>
	<div>
		<!-- body - computer ver. layout -->
		<div class="container-fluid d-none d-lg-block">
			<div class="row background-primary position-absolute">
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
				<!-- content -->
				<!-- 刀具入庫 -->
				<div class="tool-storage background-white-transparent">
					<div class="subtitle-div d-flex">
						<img class="align-self-center" src="@/assets/track/icon3.png" height="23" width="23" />
						<span class="subtitle align-self-center ml-2">刀具入庫</span>
					</div>
					<div class="tool-storage-content scroll text-blue-1 background-primary-transparent50 d-flex flex-column" style="padding: 3vh 3.1vw;">
						<div class="align-self-center d-flex justify-content-between w-100">
							<span class="text-size-16 text-blue-1 text-weight-normal">刀桿種類 :</span>
							<select class="ts-select text-size-14 text-blue-1 text-weight-normal"><option class="text-size-11 text-blue-1 text-weight-normal">ER</option></select>
						</div>
						<div class="align-self-center d-flex justify-content-between w-100">
							<span class="text-size-16 text-blue-1 text-weight-normal">刀具種類 :</span>
							<select class="ts-select text-size-14 text-blue-1 text-weight-normal"><option class="text-size-11 text-blue-1 text-weight-normal">圓柱銑刀</option></select>
						</div>
						<div class="align-self-center d-flex justify-content-between w-100">
							<span class="text-size-16 text-blue-1 text-weight-normal">刀具長度 :</span>
							<input class="text-size-14 text-blue-1 text-weight-normal text-center" value=150></input>
						</div>
						<div class="align-self-center d-flex justify-content-between w-100">
							<span class="text-size-16 text-blue-1 text-weight-normal">刀長補正 :</span>
							<input class="text-size-14 text-blue-1 text-weight-normal text-center" value=20></input>
						</div>
						<div class="align-self-center d-flex justify-content-between w-100">
							<span class="text-size-16 text-blue-1 text-weight-normal">刀長磨耗補正 :</span>
							<input class="text-size-14 text-blue-1 text-weight-normal text-center" value=20></input>
						</div>
						<div class="align-self-center d-flex justify-content-between w-100">
							<span class="text-size-16 text-blue-1 text-weight-normal">刀長直徑 :</span>
							<input class="text-size-14 text-blue-1 text-weight-normal text-center" value=10></input>
						</div>
						<div class="align-self-center d-flex justify-content-between w-100">
							<span class="text-size-16 text-blue-1 text-weight-normal">刀徑磨耗補正 :</span>
							<input class="text-size-14 text-blue-1 text-weight-normal text-center" value=20></input>
						</div>
						<div class="align-self-center d-flex justify-content-between w-100">
							<span class="text-size-16 text-blue-1 text-weight-normal">刀具額定壽命 :</span>
							<input class="text-size-14 text-blue-1 text-weight-normal text-center" value=100></input>
						</div>
						<div class="align-self-center d-flex justify-content-between w-100">
							<span class="text-size-16 text-blue-1 text-weight-normal">刀具使用次數 :</span>
							<input class="text-size-14 text-blue-1 text-weight-normal text-center" value=100></input>
						</div>
					</div>
					<div class="tool-storage-button d-flex justify-content-between">
						<img @click="ShowModal1()" id="searchbtn" class="align-self-center" src="@/assets/track/button-05.png">
						<img id="searchbtn" class="align-self-center" src="@/assets/track/button-06.png">
						<img id="searchbtn" class="align-self-center" src="@/assets/track/button-07.png">
					</div>
				</div>
				<!-- 刀具追蹤 -->
				<div class="tool-track background-white-transparent">
					<div class="subtitle-div d-flex">
						<img class="align-self-center" src="@/assets/track/icon4.png" height="23" width="23" />
						<span class="subtitle ml-2 align-self-center">刀具追蹤</span>
					</div>
					<div class="tool-track-content">
						<div class="tool-track-search background-primary">
							<div class="tool-track-search-title text-blue-1 d-flex">
								<img class="align-self-center" src="@/assets/track/icon6.png" height="23" width="23" />
								<span class="align-self-center ml-2 text-size-16">刀具查詢</span>
							</div>
							<div class="d-flex">
								<div class="align-self-center d-flex flex-column"><span class="align-self-center text-blue-1 text-size-14 text-weight-light">刀具位置</span><input class="text-center text-blue-2 text-size-11-7 text-weight-light" readonly></input>
								</div>
								<div class="align-self-center d-flex flex-column"><span class="align-self-center text-blue-1 text-size-14 text-weight-light">刀桿種類</span><input class="text-center text-blue-2 text-size-11-7 text-weight-light" readonly></input>
								</div>
								<div class="align-self-center d-flex flex-column"><span class="align-self-center text-blue-1 text-size-14 text-weight-light">刀具種類</span><input value=2 class="text-center text-blue-2 text-size-11-7 text-weight-light" readonly></input>
								</div>
								<div class="align-self-center d-flex flex-column"><span class="align-self-center text-blue-1 text-size-14 text-weight-light">領刀人員</span><input value=026 class="text-center text-blue-2 text-size-11-7 text-weight-light" eadonly></input>
								</div>
								<div class="align-self-center d-flex flex-column"><span class="align-self-center text-blue-1 text-size-14 text-weight-light">領刀日期</span><input value="2019/09/25" class="text-center text-blue-2 text-size-11-7 text-weight-light" readonly></input>
								</div>
								<div class="align-self-center d-flex">
									<button class="mt-4 d-flex justify-content-center button-style-1 text-size-14 text-weight-normal"><img class="mr-4 align-self-center" src="@/assets/track/icon1.png" height="17" width="17" />查詢</button>
									<button @click="ShowModal2()" class="mt-4 d-flex justify-content-center button-style-1 text-size-14 text-weight-normal">
										<img class="mr-4 align-self-center" src="@/assets/track/icon2.png" height="17" width="17" />領刀表
									</button>
								</div>
							</div>
						</div>
						<table class="tool-track-table">
							<thead class="background-darkblue text-white text-center text-size-14 text-weight-bold">
								<tr>
									<th>出庫</th>
									<th>刀具號碼</th>
									<th>刀具位置</th>
									<th>刀桿種類</th>
									<th>刀具種類</th>
									<th>刀長補正</th>
									<th>刀具直徑</th>
									<th>刀具壽命</th>
									<th>剩餘壽命</th>
									<th>領刀人員</th>
									<th>領刀日期</th>
									<th></th>
								</tr>
							</thead>
							<tbody class="text-blue-1 text-center">
								<tr>
									<td><img src="@/assets/track/checkbox.png" height="20" width="20" /></td> <td>009</td> <td>NXV1020A</td> <td>ER</td> <td>利銑刀</td> <td>5</td> <td>5</td> <td>5</td> <td>5</td> <td>026</td> <td>2019/09/25 10:33:25</td>
								</tr>
								<tr>
									<td><img src="@/assets/track/checkbox.png" height="20" width="20" /></td> <td>056</td> <td>NXV600A</td> <td>平面銑刀</td> <td>鑽孔刀</td> <td>3</td> <td>3</td> <td>3</td> <td>3</td> <td>026</td> <td>2019/09/25 10:33:25</td>
								</tr>
								<tr>
									<td><img src="@/assets/track/empty_checkbox.png" height="20" width="20" /></td> <td>123</td> <td>刀倉026</td> <td>鑽夾頭</td> <td>絞刀</td> <td>2</td> <td>2</td> <td>2</td> <td>2</td> <td>026</td> <td></td>
								</tr>
								<tr>
									<td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td>
								</tr>
								<tr>
									<td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td>
								</tr>
								<tr>
									<td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td>
								</tr>
								<tr>
									<td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td>
								</tr>
								<tr>
									<td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td>
								</tr>
								<tr>
									<td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td>
								</tr>
								<tr>
									<td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td>
								</tr>
							</tbody>
						</table>
						<div class="d-flex justify-content-end" style="height:9.1vh;">
							<button class="align-self-center d-flex justify-content-center button-style-1 text-size-14 text-weight-normal"><img class="mr-2 align-self-center" src="@/assets/track/icon5.png" height="17" width="17" />出庫</button>
						</div>
					</div>
				</div>			
			</div>
		</div>
		
		<!-- 彈出視窗 - 刀具履歷 -->
		<div v-if="modal1" class="modal-1 modal-background">
			<div class="modal-header d-flex justify-content-end"><button @click="CloseModal1()" class="align-self-center closebtn"><img class="align-self-center" src="@/assets/track/close.png" height="23" width="23" /></button></div>
			<div class="modal-body" style="height: 44.09vh;">
				<div class="subtitle-div d-flex">
					<img class="align-self-center" src="@/assets/track/icon11.png" height="23" width="23" />
					<span class="align-self-center ml-3 text-size-16 text-weight-bold">刀具履歷</span>
				</div>
				<div class="d-flex justify-content-around">
					<div class="modal-1-selector background-primary">
						<div class="d-flex modal-1-selector-header">
							<span class="align-self-center text-blue-1 text-size-14 text-weight-bold">刀具選擇</span>
						</div>
						<div class="d-flex flex-column">
							<div class="d-flex flex-column justify-content-around">
								<span class="align-self-center text-black-1 text-size-12 text-weight-normal">刀具種類</span>
								<select class="modal-select align-self-center w-75 text-blue-1 text-size-11 text-weight-normal"><option>D6鑽頭</option></select>
								<button class="d-flex justify-content-center align-self-center w-75 button-style-1">
									<img class="mr-3 align-self-center" src="@/assets/track/icon1.png" height="17" width="17" />
									<span class="text-size-14 text-weight-normal">查詢</span>
								</button>
							</div>
							<div class="d-flex flex-column justify-content-around">
								<span class="align-self-center text-black-1 text-size-12 text-weight-normal">刀具壽命</span>
								<input value=100 class="align-self-center w-75 text-center text-blue-1 text-size-11 text-weight-normal"/>
								<button class="d-flex justify-content-center align-self-center w-75 button-style-1">
									<img class="mr-3 align-self-center" src="@/assets/track/modify.png" height="19" width="19" />
									<span class="text-size-14 text-weight-normal">修改</span>
								</button>
							</div>
						</div>
					</div>
					<table class="modal-1-table">
						<thead class="background-darkblue text-white text-center text-size-14 text-weight-bold">
							<tr>
								<th>編號</th>
								<th>加工工件</th>
								<th>工件材質</th>
								<th>使用次數</th>
								<th>加工時間</th>
								<th></th>
							</tr>
						</thead>
						<tbody class="scroll text-blue-1 text-center bg-white">
								<tr>
									<td>001</td> <td>WDR604-A01-P001</td> <td>AL6061</td> <td>50</td> <td>00:24:35</td>
								</tr>
								<tr>
									<td>002</td> <td>WDR604-A01-P001</td> <td>AL6061</td> <td>50</td> <td>00:24:35</td>
								</tr>
								<tr>
									<td>003</td> <td>WDR604-A01-P001</td> <td>AL6061</td> <td>50</td> <td>00:24:35</td>
								</tr>
								<tr>
									<td>004</td> <td>WDR604-A01-P001</td> <td>AL6061</td> <td>50</td> <td>00:24:35</td>
								</tr>
								<tr>
									<td>005</td> <td>WDR604-A01-P001</td> <td>AL6061</td> <td>50</td> <td>00:24:35</td>
								</tr>
								<tr>
									<td>006</td> <td>WDR604-A01-P001</td> <td>AL6061</td> <td>50</td> <td>00:24:35</td>
								</tr>
								<tr>
									<td>007</td> <td>WDR604-A01-P001</td> <td>AL6061</td> <td>50</td> <td>00:24:35</td>
								</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>
		<!-- 彈出視窗 - 領刀表 -->
		<div v-if="modal2" class="modal-2 modal-background">
			<div class="modal-header d-flex justify-content-end"><button @click="CloseModal2()" class="align-self-center closebtn"><img class="align-self-center" src="@/assets/track/close.png" height="23" width="23" /></button></div>
			<div class="modal-body">
				<div class="subtitle-div-modal d-flex">
					<img class="align-self-center" src="@/assets/track/icon12.png" height="23" width="23" />
					<span class="align-self-center ml-3 text-size-16 text-weight-bold">領刀表</span>
					<input value=10800001 readonly class="align-self-center ml-4 text-center text-blue-1 text-size-13 text-weight-light"/>
					<button class="d-flex align-self-center justify-content-center button-style-1">
						<img class="mr-3 align-self-center" src="@/assets/track/icon1.png" height="15" width="15" />
						<span class="align-self-center text-size-14 text-weight-normal">查詢</span>
					</button>
				</div>
				<table class="modal-2-table">
					<thead class="background-darkblue text-white text-center text-center text-size-14 text-weight-bold">
						<tr>
							<th>編號</th>
							<th>加工刀具</th>
							<th>數量</th>
							<th>刀具壽命</th>
							<th></th>
						</tr>
					</thead>
					<tbody class="text-blue-1 text-center bg-white">
							<tr>
								<td>001</td> <td>D6鑽頭</td> <td>1</td> <td>50</td>
							</tr>
							<tr>
								<td>002</td> <td>D6鑽頭</td> <td>4</td> <td>50</td>
							</tr>
							<tr>
								<td>003</td> <td>D6鑽頭</td> <td>1</td> <td>50</td>
							</tr>
							<tr>
								<td>004</td> <td>D6鑽頭</td> <td>4</td> <td>50</td>
							</tr>
							<tr>
								<td>005</td> <td>D6鑽頭</td> <td>1</td> <td>50</td>
							</tr>
							<tr>
								<td>006</td> <td>D6鑽頭</td> <td>4</td> <td>50</td>
							</tr>
							<tr>
								<td>007</td> <td>D6鑽頭</td> <td>1</td> <td>50</td>
							</tr>
					</tbody>
				</table>
				<div class="d-flex justify-content-end" style="height: 6vh;">
					<button class="align-self-center d-flex justify-content-center button-style-1">
						<img class="mr-3 align-self-center" src="@/assets/track/icon5.png" height="15" width="15" />
						<span class="align-self-center text-size-14 text-weight-normal">出庫</span>
					</button>
				</div>
			</div>
		</div>
		
		<!-- 手機排版 -->
		<div class="container-fluid background-primary d-block d-lg-none" style="max-height:70vh; padding-bottom: 40vh; overflow-y: scroll;">
			<!-- 只有標題，點擊跳轉至其他刀具頁面 -->
			<div v-for="(item,index) in tool_management" v-if="index < 2" class="row">
				<div class="col">
					<div class="card background-white mt-3 mb-3">
						<div id="collapse-link-3" class="card-header background-white d-flex">
							<img v-bind:src="item.image" class="align-self-center" height="23" width="23" />
							<span class="subtitle ml-3 align-self-center">{{item.title}}</span>
						</div>
					</div>
				</div>
			</div>	
			<div class="row">
				<!-- 刀具入庫 - 收合標題 -->
				<div class="col">
					<div class="card background-white mt-3 mb-3">
						<div id="collapse-link-3" class="card-header background-white d-flex">
							<img class="align-self-center" src="@/assets/track/icon3.png" height="23" width="23" />
							<span class="subtitle align-self-center ml-3">刀具入庫</span>
						</div>
						<div class="card-body" id="collapse-target-3" style="display: none;">
							<div class="text-blue-1 background-primary-transparent50 d-flex flex-column" style="padding: 3vh 3.2vw;">
								<div class="align-self-center d-flex flex-column justify-content-between w-100">
									<span class="align-self-center text-size-16 text-blue-1 text-weight-normal">刀桿種類 :</span>
									<select class="align-self-center text-size-14 text-blue-1 text-weight-normal w-100" style="text-align-last:center;"><option class="text-size-11 text-blue-1 text-weight-normal">ER</option></select>
								</div>
								<div class="align-self-center d-flex flex-column justify-content-between w-100">
									<span class="align-self-center text-size-16 text-blue-1 text-weight-normal">刀具種類 :</span>
									<select class="align-self-center text-size-14 text-blue-1 text-weight-normal w-100" style="text-align-last:center;"><option class="text-size-11 text-blue-1 text-weight-normal">圓柱銑刀</option></select>
								</div>
								<div class="align-self-center d-flex flex-column justify-content-between w-100">
									<span class="align-self-center text-size-16 text-blue-1 text-weight-normal">刀具長度 :</span>
									<input class="align-self-center text-size-14 text-blue-1 text-weight-normal text-center w-100" value=150></input>
								</div>
								<div class="align-self-center d-flex flex-column justify-content-between w-100">
									<span class="align-self-center text-size-16 text-blue-1 text-weight-normal">刀長補正 :</span>
									<input class="align-self-center text-size-14 text-blue-1 text-weight-normal text-center w-100" value=20></input>
								</div>
								<div class="align-self-center d-flex flex-column justify-content-between w-100">
									<span class="align-self-center text-size-16 text-blue-1 text-weight-normal">刀長磨耗補正 :</span>
									<input class="align-self-center text-size-14 text-blue-1 text-weight-normal text-center w-100" value=20></input>
								</div>
								<div class="align-self-center d-flex flex-column justify-content-between w-100">
									<span class="align-self-center text-size-16 text-blue-1 text-weight-normal">刀長直徑 :</span>
									<input class="align-self-center text-size-14 text-blue-1 text-weight-normal text-center w-100" value=10></input>
								</div>
								<div class="align-self-center d-flex flex-column justify-content-between w-100">
									<span class="align-self-center text-size-16 text-blue-1 text-weight-normal">刀徑磨耗補正 :</span>
									<input class="align-self-center text-size-14 text-blue-1 text-weight-normal text-center w-100" value=20></input>
								</div>
								<div class="align-self-center d-flex flex-column justify-content-between w-100">
									<span class="align-self-center text-size-16 text-blue-1 text-weight-normal">刀具額定壽命 :</span>
									<input class="align-self-center text-size-14 text-blue-1 text-weight-normal text-center w-100" value=100></input>
								</div>
								<div class="align-self-center d-flex flex-column justify-content-between w-100">
									<span class="align-self-center text-size-16 text-blue-1 text-weight-normal">刀具使用次數 :</span>
									<input class="align-self-center text-size-14 text-blue-1 text-weight-normal text-center w-100" value=100></input>
								</div>						
							</div>
							<div class="d-flex flex-column justify-content-between">
								<button class="align-self-center text-size-16 text-black-1 text-weight-normal w-100" id="searchbtn">刀具履歷</button>
								<button class="align-self-center text-size-16 text-black-1 text-weight-normal w-100">資訊修改</button>
								<button class="align-self-center text-size-16 text-black-1 text-weight-normal w-100">刀具入庫</button>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="row">
				<!-- 刀具追蹤 - 收合標題 -->
				<div class="col">
					<div class="card background-white mt-3 mb-3">
						<div id="collapse-link-4" class="card-header background-white d-flex">
							<img class="align-self-center" src="@/assets/track/icon4.png" height="23" width="23" />
							<span class="subtitle ml-3 align-self-center">刀具追蹤</span>
						</div>
						<!-- 可展開內容 -->
						<div class="card-body" id="collapse-target-4" style="display: none;">
							<!-- 刀具查詢 -->
							<div class="background-primary">
								<div class="tool-track-search-title text-blue-1 d-flex p-3">
									<img class="align-self-center" src="@/assets/track/icon6.png" height="23" width="23" />
									<span class="align-self-center ml-2 text-size-16">刀具查詢</span>
								</div>
								<div class="d-flex flex-column p-4">
									<span class="align-self-start mr-3 text-blue-1 text-size-14 text-weight-light">刀具位置</span><input class="text-blue-2 text-size-11-7 text-weight-light" readonly></input>
									<span class="align-self-start mr-3 text-blue-1 text-size-14 text-weight-light">刀桿種類</span><input class="text-blue-2 text-size-11-7 text-weight-light" readonly></input>
									<span class="align-self-start mr-3 text-blue-1 text-size-14 text-weight-light">刀具種類</span><input value=2 class="text-blue-2 text-size-11-7 text-weight-light" readonly></input>
									<span class="align-self-start mr-3 text-blue-1 text-size-14 text-weight-light">領刀人員</span><input value=026 class="text-blue-2 text-size-11-7 text-weight-light" eadonly></input>
									<span class="align-self-start mr-3 text-blue-1 text-size-14 text-weight-light">領刀日期</span><input value="2019/09/25" class="text-blue-2 text-size-11-7 text-weight-light" readonly></input>
									<button class="d-flex justify-content-center text-size-14 text-weight-normal mt-4 w-100">
										<img class="mr-4 align-self-center" src="@/assets/track/icon1.png" height="17" width="17" />查詢
									</button>
									<button id="gettoolstable" class="d-flex justify-content-center text-size-14 text-weight-normal mt-3 w-100">
										<img class="mr-4 align-self-center" src="@/assets/track/icon2.png" height="17" width="17" />領刀表
									</button>
								</div>
							</div>
							<!-- 刀具表格 -->
							<table class="mt-5 tool-track-table-mobile">
								<thead class="background-darkblue text-white text-center text-size-14 text-weight-bold">
									<tr>
										<th>出庫</th>
										<th>刀具號碼</th>
										<th>刀具位置</th>
										<th>刀桿種類</th>
										<th>刀具種類</th>
										<th>刀長補正</th>
										<th>刀具直徑</th>
										<th>刀具壽命</th>
										<th>剩餘壽命</th>
										<th>領刀人員</th>
										<th>領刀日期</th>
										<th></th>
									</tr>
								</thead>
								<tbody class="tool-track-table-body text-blue-1 text-center">
									<tr>
										<td><img src="@/assets/track/checkbox.png" height="20" width="20" /></td> <td>009</td> <td>NXV1020A</td> <td>ER</td> <td>利銑刀</td> <td>5</td> <td>5</td> <td>5</td> <td>5</td> <td>026</td> <td>2019/09/25 10:33:25</td>
									</tr>
									<tr>
										<td><img src="@/assets/track/checkbox.png" height="20" width="20" /></td> <td>056</td> <td>NXV600A</td> <td>平面銑刀</td> <td>鑽孔刀</td> <td>3</td> <td>3</td> <td>3</td> <td>3</td> <td>026</td> <td>2019/09/25 10:33:25</td>
									</tr>
									<tr>
										<td><img src="@/assets/track/empty_checkbox.png" height="20" width="20" /></td> <td>123</td> <td>刀倉026</td> <td>鑽夾頭</td> <td>絞刀</td> <td>2</td> <td>2</td> <td>2</td> <td>2</td> <td>026</td> <td></td>
									</tr>
									<tr>
										<td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td>
									</tr>
									<tr>
										<td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td>
									</tr>
									<tr>
										<td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td>
									</tr>
									<tr>
										<td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td>
									</tr>
									<tr>
										<td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td>
									</tr>
									<tr>
										<td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td>
									</tr>
									<tr>
										<td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>
			<!-- 只有標題，點擊跳轉至其他刀具頁面 -->
			<div v-for="(item,index) in tool_management" v-if="index > 3" class="row">
				<div class="col">
					<div class="card background-white mt-3 mb-3">
						<div id="collapse-link-3" class="card-header background-white d-flex">
							<img v-bind:src="item.image" class="align-self-center" height="23" width="23" />
							<span class="subtitle ml-3 align-self-center">{{item.title}}</span>
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
export default{
	data(){
		return{
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
			modal1: false,
			modal2: false,
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
		}
	}
}
</script>

<style scoped src="./style.css">
</style>