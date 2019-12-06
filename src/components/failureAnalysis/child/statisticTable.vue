<template>
	<table class="text-center">
		<thead>
			<tr>
				<th>設備</th>
				<th>故障次數</th>
				<th v-if="showItem==0" class="d-flex justify-content-around">
					<span class="align-self-center" v-on:click="previousItem">◄</span>
					<span class="align-self-center">MTTR</span>
					<span class="align-self-center" v-on:click="posteriorItem">►</span>
				</th>
				<th v-else-if="showItem==1" class="d-flex justify-content-around">
					<span class="align-self-center" v-on:click="previousItem">◄</span>
					<span class="align-self-center">MTBF</span>
					<span class="align-self-center" v-on:click="posteriorItem">►</span>
				</th>
				<th v-else class="d-flex justify-content-around">
					<span class="align-self-center" v-on:click="previousItem">◄</span>
					<span class="align-self-center">MTTF</span>
					<span class="align-self-center" v-on:click="posteriorItem">►</span>
				</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>NXV1020A</td>
				<td>85</td>
				<td v-if="showItem==0">30h 20m 26s</td>
				<td v-else-if="showItem==1">34h 26m 55s</td>
				<td v-else>25h 17m 19s</td>
			</tr>
			<tr>
				<td>NXV1020A</td>
				<td>85</td>
				<td v-if="showItem==0">30h 20m 26s</td>
				<td v-else-if="showItem==1">34h 26m 55s</td>
				<td v-else>25h 17m 19s</td>
			</tr>
		</tbody>
	</table>
</template>

<script>
	export default{
		name: 'statisticTable',
		props:{
			tableData: {type: Object}
		},
		data(){
			return{
				showItem: 0
			}
		},
		methods:{
			previousItem: function(){
				this.showItem -= 1;
				if(this.showItem<0){ this.showItem = 2}
			},
			posteriorItem: function(){
				this.showItem += 1;
				this.showItem %= 3;
			}
		}
	}
</script>

<style scoped>
	table{
		border: 1px #9BA6C6 solid;
		table-layout: fixed;
		border-spacing: 0;
	}
	th{
		color: #FFF;
		font-size: 14px;
		font-family: 'Microsoft JhengHei Bold', sans-serif;
	}
	td{
		color: #8898bd;
		font-size: 14px;
		font-family: 'Microsoft JhengHei Light', sans-serif;	
	}
	thead{
		background-color: #879CC7;
		height: 45px;
	}
	thead tr{
		height: 45px;
		background-color: #879CC7;
	}
	thead tr th{
		background-color: #879CC7;
		height: 45px;
	}
	tbody tr{
		height: 46px;
	}
	tbody >tr:nth-child(even){
		background-color: #D9DBE8;
	}
	tbody >tr >td:nth-child(3){
		width: 40%;
	}
</style>