<template>
	<div v-if="collapse" class="card-body">
		<div class="health-title d-flex background-primary">
			<img :src="toolHealthState.iconSrc" height="20" width="20" class="align-self-center ml-2"/>
			<span class="align-self-center ml-2 text-blue-1 text-size-14 text-weight-normal">健康狀態</span>
		</div>
		<div class="d-flex flex-column">
			<!-- select change event -> collapse.js -->
			<select @change="SelectToolInfo($event)" class="w-100"><option>NXV 1020 A</option><option>NXV 600 A</option></select>
			<img class="align-self-center" :src="toolHealthInfoData.imgSrc" style="width: 60vw; height: 60vw; margin-top: 10vh;" />
			<div class="d-flex justify-content-between">
				<span class="d-flex flex-column">
					<span class="align-self-center d-flex" style="border-bottom: 1px #bac3d1 solid; line-height: 2rem;">
						<span class="text-weight-light text-blue-1 text-size-28">◎</span>
						<span class="text-weight-light text-blue-1 text-size-11">{{toolHealthInfoData.normal}}</span>
					</span>
					<span class="align-self-center text-weight-bold text-blue-1 text-size-21">10</span>
				</span>
				<span class="d-flex flex-column">
					<span class="align-self-center d-flex" style="border-bottom: 1px #bac3d1 solid; line-height: 2rem;">
						<span class="text-weight-light text-blue-1 text-size-28">◎</span>
						<span class="text-weight-light text-blue-1 text-size-11" >{{toolHealthInfoData.warning}}</span>
					</span>
					<span class="align-self-center text-weight-bold text-blue-1 text-size-21">10</span>
				</span>
				<span class="d-flex flex-column">
					<span class="align-self-center d-flex" style="border-bottom: 1px #bac3d1 solid; line-height: 2rem;">
						<span class="text-weight-light text-blue-1 text-size-28">◎</span>
						<span class="text-weight-light text-blue-1 text-size-11" >{{toolHealthInfoData.error}}</span>
					</span>
					<span class="align-self-center text-weight-bold text-blue-1 text-size-21">4</span>
				</span>
			</div>
			<table class="mt-4">
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
					<tr v-for="item in toolHealthTableData">
						<td class="text-size-28">{{item.id}}</td>
						<td>{{item.tool}}</td>
						<td>{{item.life}}</td>
						<td>{{item.times}}</td>
						<td v-bind:style="{color:item.remark}" class="text-size-24">●</td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>
</template>

<script>
	export default{
		name: "toolInfoPhone",
		props: {
			toolHealthTableData: Array, 
			toolHealthState: Object,
			toolHealthInfoData: Object,
			collapse: Boolean,
			SelectToolInfo: Function,
		},
		mounted() {
		}
	}
</script>

<style>
.background-primary{
	background-color: #eaeff8;
}

.health-title{
	width: 5.83vw;
	height: 3.15vh;
	position: absolute;
	top: 1.5vh;
	left: 1vw;
	border: 1px #8092b8 solid;
	border-radius: 1.575vh;
}
.text-family-1{
	font-family: Microsoft JhengHei;
}

.text-blue-1{
	color: #6a7cb1;
}

.text-white-1{
	color: #fff;
}

.text-size-11{
	font-size: 0.73125rem;
}

.text-size-13{
	font-size: 0.8125rem;
}

.text-size-14{
	font-size: 0.875rem;
}

.text-size-18{
	font-size: 1.125rem;
}

.text-size-21{
	font-size: 1.3125rem;
}

.text-size-24{
	font-size: 1.5rem;
}

.text-size-28{
	font-size: 1.75rem;
}

.text-weight-bold{
	font-weight: 700;
}

.text-weight-light{
	font-weight: 300;
}

.text-weight-normal{
	font-weight: 400;
}
</style>