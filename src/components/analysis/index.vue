<template>
    <div class="sysanalyze">
        <!-- computer layout -->
        <div class="background-primary d-none d-lg-block w-100" style="height: 79vh; width:100vw;">
            <div class="d-flex justify-content-between spindleChart">
                <!-- 主軸轉速 -->
				<div class="spindleChart-div h-100">
					<linechart :lineChartData="speedChartData"></linechart>
				</div>	
                <!-- 主軸扭力 -->
                <div class="spindleChart-div h-100">
                    <linechart :lineChartData="torqueChartData"></linechart>
                </div>
                <!-- 主軸震動 -->
                <div class="spindleChart-div h-100">
					<linechart :lineChartData="vibrationChartData"></linechart>
                </div>
            </div>
            <div class="d-flex justify-content-between similarity">
                <!-- NXV1020A 相似度 -->
                <div class="similarity-div h-100">
					<ringchart :ringChartData="nxv1020similarityData"></ringchart>
                </div>
                <!-- NXV600A 相似度 -->
                <div class="similarity-div h-100">
					<ringchart :ringChartData="nxv600similarityData"></ringchart>
                </div>
            </div>
        </div>
        
        <!-- Mobile Device Layout -->
        <div class="container-fluid background-primary d-block d-lg-none" style="padding-bottom: 20vh;">
            <div class="row">
                <!-- 主軸轉速 -->
                <div class="col">
                    <div class="card background-white mt-3 mb-3">
                        <div id="collapse-link-1" class="card-header background-white d-flex">
                            <img src="./icon/icon2.png" height="23" width="23" class="align-self-center mr-3"/><span class="subtitle text-style-2 align-self-center">主軸轉速</span>
                        </div>
                        <div class="card-body" id="collapse-target-1" style="display: none;">
                            <div class="lineChartDiv text-style-1" id="speedChart-mobile" style="height:65vh;"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <!-- 主軸扭力 -->
                <div class="col">
                    <div class="card background-white mt-3 mb-3">
                        <div id="collapse-link-2" class="card-header background-white d-flex">
                            <img src="./icon/icon3.png" height="23" width="23" class="align-self-center mr-3"/><span class="subtitle text-style-2 align-self-center">主軸扭力</span>
                        </div>
                        <div class="card-body" id="collapse-target-2" style="display: none;">
                            <div class="lineChartDiv text-style-1" id="torqueChart-mobile" style="height:65vh;"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <!-- 主軸震動 -->
                <div class="col">
                    <div class="card background-white mt-3 mb-3">
                        <div id="collapse-link-3" class="card-header background-white d-flex">
                            <img src="./icon/icon4.png" height="23" width="23" class="align-self-center mr-3"/><span class="subtitle text-style-2 align-self-center">主軸震動</span>
                        </div>
                        <div class="card-body" id="collapse-target-3" style="display: none;">
                            <div class="lineChartDiv text-style-1" id="vibrationChart-mobile" style="height:65vh;"></div>
                        </div>
                    </div>				
                </div>
            </div>
            <div class="row">
                <!-- NXV1020A 相似度 -->
                <div class="col">
                    <div class="card background-white mt-3 mb-3">
                        <div id="collapse-link-4" class="card-header background-white d-flex">
                            <img src="./icon/icon1.png" height="20" width="20" class="align-self-center mr-3"/><span class="subtitle text-style-2 align-self-center">NXV1020A 加工相似度</span>
                        </div>
                        <div class="card-body p-3" id="collapse-target-4" style="display: none; padding:0;">
                            <div class="ringChartDiv-mobile" id="NXV1020AChart-mobile"></div>
                            <div class="diagnosisResult-mobile">
                                <span>診斷結果 : </span>
                                <input type="text" value="正常" readonly></input>
                            </div>
                            <div class="diagnosisDescribe-mobile">
                                <span>診斷說明 : </span><br>
                                <textarea class="" readonly></textarea>
                            </div>
                        </div>
                    </div>						
                </div>
            </div>
            <div class="row">
                <!-- NXV600A 相似度 -->
                <div class="col">
                    <div class="card background-white mt-3 mb-3">
                        <div id="collapse-link-5" class="card-header background-white d-flex">
                            <img src="./icon/icon1.png" height="20" width="20" class="align-self-center mr-3"/><span class="subtitle text-style-2 align-self-center">NXV600A 加工相似度</span>
                        </div>
                        <div class="card-body p-3" id="collapse-target-5" style="display: none; padding:0;">
                            <div class="ringChartDiv-mobile" id="NXV600AChart-mobile"></div>
                            <div class="diagnosisResult-mobile">
                                <span>診斷結果 : </span>
                                <input type="text" value="正常" readonly></input>
                            </div>
                            <div class="diagnosisDescribe-mobile">
                                <span>診斷說明 : </span><br>
                                <textarea class="" readonly></textarea>
                            </div>
                        </div>
                    </div>	
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import linechart from './child/linechart.vue'
import ringchart from './child/ringchart.vue'

export default {
    name: "Analysis",
	components: {linechart, ringchart},
	data() {
		return{
			speedChartData: {
				title: "主軸轉速",
				iconSrc: require("@/assets/analysis/icon2.png"),
				titleID: "speedChartTitle",
				chartID: "speedChart",
				data: {
					nxv1020: [],
					nxv600: []
				},
			},
			torqueChartData: {
				title: "主軸扭力",
				iconSrc: require("@/assets/analysis/icon3.png"),
				titleID: "torqueChartTitle",
				chartID: "torqueChart",
				data: {
					nxv1020: [],
					nxv600: []
				},
			},
			vibrationChartData: {
				title: "主軸震動",
				iconSrc: require("@/assets/analysis/icon4.png"),
				titleID: "vibrationChartTitle",
				chartID: "vibrationChart",
				data: {
					nxv1020: [],
					nxv600: []
				},
			},
			nxv1020similarityData: {
				title: "NXV1020A 加工相似度",
				iconSrc: require("@/assets/analysis/icon1.png"),
				chartID: "NXV1020AChart",
				value: 55,
			},
			nxv600similarityData: {
				title: "NXV600A 加工相似度",
				iconSrc: require("@/assets/analysis/icon1.png"),
				chartID: "NXV600AChart",
				value: 55,
			}
		}
	},
	mounted() {
		for(var i=0; i<290; i++){
			this.speedChartData.data.nxv1020.push(178);
		}
		setInterval(()=>{
			if(this.speedChartData.data.nxv1020.length == 300){this.speedChartData.data.nxv1020.shift();}
			if(this.torqueChartData.data.nxv1020.length == 300){this.torqueChartData.data.nxv1020.shift();}
			if(this.vibrationChartData.data.nxv1020.length == 300){this.vibrationChartData.data.nxv1020.shift();}
			if(this.speedChartData.data.nxv600.length == 300){this.speedChartData.data.nxv600.shift();}
			if(this.torqueChartData.data.nxv600.length == 300){this.torqueChartData.data.nxv600.shift();}
			if(this.vibrationChartData.data.nxv600.length == 300){this.vibrationChartData.data.nxv600.shift();}
			this.speedChartData.data.nxv1020.push(Math.random()*50+100);
			this.torqueChartData.data.nxv1020.push(Math.random()*50+120);
			this.vibrationChartData.data.nxv1020.push(Math.random()*50+140);
			this.speedChartData.data.nxv600.push(Math.random()*50+160);
			this.torqueChartData.data.nxv600.push(Math.random()*50+180);
			this.vibrationChartData.data.nxv600.push(Math.random()*50+200);
		}, 1000);
		
		setInterval(() => {
			this.$set(this.nxv1020similarityData, 'value', Math.round(Math.random()*100) );
			this.$set(this.nxv600similarityData, 'value', Math.round(Math.random()*100) );
        }, 1000);
	},
}
</script>

<style scoped>
 
.sysanalyze{
    height:100%;
    
}

@media only screen and (max-width: 769px){
    .sysanalyze{
        height:80%;
        overflow-y: scroll;
    }
}

body {
    background-color: #eaeff7;
}

.background-primary {
    background-color: #eaeff8cc;
}

.background-white {
    background-color: rgb(255, 255, 255, 0.8);
}

.bottom-navbar {
    position: fixed;
    width: 100%;
    height: 10%;
    bottom: 0px;
}

.bottom-navitem {
    width: 20%;
    height: 100%;
}

.card-header {
    height: 12%;
}

.similarity {
    margin-top: 1.5vh;
    height: calc(50% - 1.33vh);
    width: 96.4583vw;
    margin-left: 1.77083vw;
}

.similarity-div {
    width: 47.8645vw;
    border: 1px #bbc4d2 solid;
}

.spindleChart {
    margin-top: 1.5vh;
    height: 50%;
    width: 96.4583vw;
    margin-left: 1.77083vw;
}

.spindleChart-div {
    width: 31.66vw;
    border: 1px #bbc4d2 solid;
}
</style>