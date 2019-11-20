<template>
	<div>
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
</template>

<style scoped>
</style>