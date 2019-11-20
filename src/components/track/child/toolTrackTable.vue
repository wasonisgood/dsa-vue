<template>
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
				<td><label class="checkbox d-flex justify-content-center"><input type="checkbox" checked="checked"/><span class="checkmark align-self-center"></span></label></td> <td>009</td> <td>NXV1020A</td> <td>ER</td> <td>利銑刀</td> <td>5</td> <td>5</td> <td>5</td> <td>5</td> <td>026</td> <td>2019/09/25 10:33:25</td>
			</tr>
			<tr>
				<td><label class="checkbox d-flex justify-content-center"><input type="checkbox" checked="checked"/><span class="checkmark align-self-center"></span></label></td><td>056</td> <td>NXV600A</td> <td>平面銑刀</td> <td>鑽孔刀</td> <td>3</td> <td>3</td> <td>3</td> <td>3</td> <td>026</td> <td>2019/09/25 10:33:25</td>
			</tr>
			<tr>
				<td><label class="checkbox d-flex justify-content-center"><input type="checkbox"/><span class="checkmark align-self-center"></span></label></td> <td>123</td> <td>刀倉026</td> <td>鑽夾頭</td> <td>絞刀</td> <td>2</td> <td>2</td> <td>2</td> <td>2</td> <td>026</td> <td></td>
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
</template>

<script>
	export default{
		name: "toolTrackTable",
	}
</script>

<style scoped>
/* custom checkbox */
.checkbox {
	height:100%;
	margin:0;
	display: block;
	position: relative;
	-webkit-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	user-select: none;
}

.checkbox input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

.checkmark {
  position: relative;
  height: 1.8518518vh;
  width: 1.8518518vh;
  background-color: #fff;
  border: 1px #6a7cb1 solid;
  
}

.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

.checkbox input:checked ~ .checkmark:after {
  display: block;
}

.checkbox .checkmark:after {
  left: 0.5vh;
  top: 0.2vh;
  width: 8px;
  height: 10px;
  border: solid #6a7cb1;
  border-width: 0 3px 3px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}

/* table scroll bar style */
.tool-track-table tbody::-webkit-scrollbar{
	width: 1.375rem;
}

.tool-track-table tbody::-webkit-scrollbar-track{
	border-left: 1px solid #bbc4d2;
	border-right: 1px solid #bbc4d2;
	padding: 0 0;
	background-color: #fff;
}

.tool-track-table tbody::-webkit-scrollbar-button:single-button:vertical:decrement{
	border-left: 1px solid #bbc4d2;
	border-right: 1px solid #bbc4d2;
	border-top: 1px solid #bbc4d2;
	background-color: #fff;
	background-image: url("../../../assets/tool/scroll-uparrow.png");
	background-size: 8px 8px;
	background-repeat: no-repeat;
	background-position: 50% 50%;
}

.tool-track-table tbody::-webkit-scrollbar-button:single-button:vertical:increment{
	border-left: 1px solid #bbc4d2;
	border-right: 1px solid #bbc4d2;
	border-bottom: 1px solid #bbc4d2;
	background-color: #fff;
	background-image: url("../../../assets/tool/scroll-downarrow.png");
	background-size: 8px 8px;
	background-repeat: no-repeat;
	background-position: 50% 50%;
}

.background-darkblue{
	background-color: #8192b9;
}

.text-blue-1{
	color: #6a7cb1;
}

.text-white{
	color: #fff;
}

.text-size-14{
	font-size: 0.875rem;
}

.text-weight-bold{
	font-weight: 700;
}

.tool-track-table{
	width: 62vw;
	height: calc(42.05vh - 2px);
	margin-top: 3.8vh;
	border-collapse: collapse;
	text-align: center;
}

.tool-track-table tbody{
    display:block;
    overflow-y:scroll;
	max-height: 38.63vh;
}

.tool-track-table thead, .tool-track-table tbody tr {
	display: table;
	width: 100%;
	table-layout: fixed;
}

.tool-track-table thead{
	height: 3.425925vh;
}

.tool-track-table thead th:nth-last-child(1){
	width: 1.375rem;
}

.tool-track-table thead th:nth-last-child(2), .tool-track-table tbody tr td:nth-last-child(1){
	width: 16.38%;
}

.tool-track-table tbody tr{
	height: 3.92vh;
	border-bottom: 1px #bcc5d3 solid;
}

.tool-track-table tbody tr:nth-last-child(1){
	border-bottom: 2px #8092b8 solid;
}

.tool-track-table tbody tr td:nth-child(n+2){
	font-size: 0.6875rem;
	font-weight: 400;
}
</style>