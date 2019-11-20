<template>
	<div v-if="collapse" class="card-body">
		<div class="d-flex flex-column">
			<div class="w-100 d-flex flex-column justify-content-around background-primary-transparent" style="height: 30vh;">
				<span class="align-self-center text-blue-1 text-size-14 text-weight-normal">加工工件</span>
				<input value="WDR604-A01-P001" class="align-self-center w-50 text-blue-1 text-weight-light text-size-11 text-center"></input>
				<span class="align-self-center text-blue-1 text-size-14 text-weight-normal">加工數量</span>
				<input value=100 class="align-self-center w-50 text-blue-1 text-weight-light text-size-11 text-center ml-2"></input>
				<span class="align-self-center text-blue-1 text-size-14 text-weight-normal">加工機床</span>
				<select class="align-self-center w-50 text-blue-1 text-weight-light text-size-11 ml-2" style="text-align-last: center;"><option>NXV-1020A</option></select>
			</div>
			<button class="w-100 align-self-center d-flex justify-content-center text-white button-darkblue background-darkblue-1 mt-4 text-weight-normal">
				<img class="mr-2 align-self-center" src="@/assets/tool/check_white.png" height="17" width="17"/>確認
			</button>
			<table class="w-100 mt-4 align-self-center">
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
					<tr v-for="item in toolConfirmData">
						<td>{{item.id}}</td><td>{{item.tool}}</td><td>{{item.require}}</td><td><img v-bind:src="item.correct" height="20" width="20" /></td>
					</tr>
				</tbody>
			</table>
			<button id="button1" class="w-100 align-self-center d-flex justify-content-center button-darkblue background-darkblue-1 mt-4 text-white text-weight-normal">
				<img class="mr-2 align-self-center" src="@/assets/tool/check_white.png" height="17" width="17"/>領刀表
			</button>
			<div class="mt-4 background-primary-transparent d-flex flex-column justify-content-around" style="height: 25vh; padding: 3vw;">
				<span class="text-blue-1 text-size-14 text-weight-normal">加工程式</span>
				<input class="w-100 text-blue-1 mt-4" style="border: 1px #697bb0 solid;"></input>
				<button class="w-100 button-darkblue background-darkblue-1 mt-4 text-white text-size-14 text-weight-light">選擇檔案</button>
				<button class="w-100 align-self-center d-flex justify-content-center button-darkblue background-darkblue-1 mt-3 text-white text-weight-normal">
					<img class="mr-2 align-self-center" src="@/assets/tool/upload.png" height="17" width="17"/>上傳
				</button>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		name: "toolConfirmPhone",
		props: {
			toolConfirmData: Array,
			collapse: Boolean,
		}
	}
</script>

<style>
.text-blue-1{
	color: #6a7cb1;
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