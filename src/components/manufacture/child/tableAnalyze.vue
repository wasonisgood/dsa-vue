<template>
	<table class="table-analyze">
		<thead>
			<tr>
				<th id="tableTitle">兩段式</th>
				<th>用電量</th>
				<th>百分比</th>
				<th>電費</th>
			</tr>
		</thead>
		<tbody id="powerTable">
			<tr>
				<td>尖峰</td>
				<td>900 kW</td>
				<td>50</td>
				<td>50 NT</td>
			</tr>
			<tr id="dyn_tr">
				<td>半尖峰</td>
				<td>450 kW</td>
				<td>25</td>
				<td>25 NT</td>
			</tr>
			<tr>
				<td>離峰</td>
				<td>450 kW</td>
				<td>25</td>
				<td>25 NT</td>
			</tr>
		</tbody>
	</table>
</template>

<style scoped>
thead tr{
	background-color: #879CC7;
}

.table-analyze {
    font-size: 14px;
    table-layout: fixed;
    width: 87.5%;
    height: 151px;
    text-align: center;
    border-spacing: 0;
}

.table-analyze th {
    color: #fff;
    background-color: #879CC7;
    padding: .75rem 0;
    font-family: "Microsoft JhengHei", sans-serif;
}

.table-analyze tr {
    height: 35px;
}

.table-analyze td {
    color: #949dc1;
    font-family: "Microsoft JhengHei Light", sans-serif;
}

.table-analyze td:nth-child(1),
.table-analyze td:nth-child(2),
.table-analyze td:nth-child(3) {
    border-right: 1px #E5E6EA solid;
}

.table-analyze tr:last-child td {
    border-bottom: 1px #E5E6EA solid;
}
</style>