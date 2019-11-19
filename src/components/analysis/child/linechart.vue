<template>
		<div class="background-white h-100">
			<div class="subtitleDiv d-flex justify-content-between text-style-2" :id="lineChartData.titleID">
				<div class="align-self-center d-flex">
					<img class="align-self-center mr-3" :src="lineChartData.iconSrc" height="23" width="23" />
					<span class="subtitle align-self-center subtitle">{{lineChartData.title}}</span>
				</div>
			</div>
			<!-- 折線圖 - linechart-speed.js -->
			<div :id="lineChartData.chartID" class="lineChartDiv text-style-1"></div>
		</div>	
</template>

<script>
	import * as d3 from 'd3';
	export default{
		name: "linechart",
		props: {
			lineChartData: Object,
		},
		data() {
			return {
			}
		},
		mounted() {
			// declare parameters and initialize data
			var dataset1 = this.lineChartData.data.nxv1020;
			var dataset2 = this.lineChartData.data.nxv600;
			var chartid = this.lineChartData.chartID;
			var height, width;
			var number = 300, maximum = 300;			
			// line opacity, set 0 to hide line chart
			var lineopacity = [1,0];
			
			function draw(){
				var titleID = chartid+"Title";
				var svg, line, line1svg, line2svg;
				// element width、height and offset
				var div = document.getElementById(chartid);
				var divH = div.offsetHeight;
				var divW = div.offsetWidth;
				var margin;
				margin = {hor: 0.1*divW, ver: 0.12*divH};
				width = 0.85*divW;
				height = 0.78*divH;			
				//判斷是否已經畫上圖表
				if(div.getElementsByTagName('svg').length == 0){
					// X,Y domain and range
					var xScale = d3.scaleLinear()
									.domain([0, number])
									.range([0, width]);
									
					var yScale = d3.scaleLinear()
									.domain([0, maximum])
									.range([height, 0]);
									
					// d3's line generator,  curveMonotoneX for smoothing the line
					line = d3.line()
							.x(function(d, i) { return xScale(i); })
							.y(function(d) { return yScale(d); })
									
					// Add SVG element			
					svg = d3.select("#"+chartid)
							.append('svg')
							.attr("width", divW)
							.attr("height", divH)
							.append("g")
							.attr("transform", "translate("+margin.hor+","+margin.ver+")")
					// select option 選擇要顯示的折線圖
					var data = ["NXV1020A", "NXV600A"];
					var dropDown = d3.select("#"+titleID).append("select")
										.attr("name", "name-list")
										.attr("class", "align-self-center")
										.style("text-align-last", "center")
										.style("background-color", "#fff")
										.style("color", "#8598c1")
										.style("height", "50%")
										.style("width", "25%")
										.on("change", function(){
											if(this.value=="NXV1020A"){
												lineopacity[0] = 1;
												lineopacity[1] = 0;
												dropDown.style("color", "#8598c1");
											}
											else if(this.value=="NXV600A"){
												lineopacity[0] = 0;
												lineopacity[1] = 1;
												dropDown.style("color", "#23afc7");
											}
											line1svg.style("opacity", lineopacity[0]);
											line2svg.style("opacity", lineopacity[1]);
										});
					var options = dropDown.selectAll("option")
											.data(data)
											.enter()
											.append("option")		  
					options.text(function(d){
								return d;
							})
							.style("color", function(d, i){
								if(i==0){
									return "#8598c1";
								}
								else{
									return "#23afc7";
								}
							})
					// axis and grid
					for(var i=0; i<=maximum; i+=50){
						//horizontal grid
						svg.append("path")
							.attr("d", YAxisGird(i))
							.attr("fill", "#bbc4d2");
						//y-axis value	
						svg.append("text")
							.text(i)
							.attr("x", -divW*0.08)
							.attr("y", (height*(1-i/maximum)))
							.attr("fill", "#bbc4d2")
							.style("font-size", "0.75rem");
					}
					for(var i=25; i<=100; i+=25){
						//x-axis value
						svg.append("text")
							.text(i+"%")
							.attr("x", i*0.01*width-15)
							.attr("y", height+divH*0.06)
							.attr("fill", "#bbc4d2")
							.style("font-size", "0.75rem")
					}					
					// line chart
					line1svg = svg.append("path")
							.datum(dataset1)
							.attr("d", line)
							.attr("class", "line1")
							.style("fill", "none")
							.style("stroke", "#8598c1")
							.style("opacity", lineopacity[0]);
					
					line2svg = svg.append("path")
							.datum(dataset2)
							.attr("d", line)
							.attr("class", "line2")
							.style("fill", "none")
							.style("stroke", "#23afc7")
							.style("opacity", lineopacity[1]);
				}
			}
			//Y軸格線	
			function YAxisGird(value){
				return "M" + (0) + "," + (height*(1-value/maximum))
					  +"h" + width
					  +"v" + -0.5
					  +"h" + -width
					  +"z";
			}
			// comter ver. render at initial
			draw();
			window.addEventListener('resize', function(event){
				location.reload();
			});		
		},
		watch: {
			lineChartData: {
				deep: true,
				handler (){
					var div = document.getElementById(this.lineChartData.chartID);
					var divH = div.offsetHeight;
					var divW = div.offsetWidth;
					var xScale = d3.scaleLinear()
											.domain([0, 300])
											.range([0, 0.85*divW]);								
					var yScale = d3.scaleLinear()
									.domain([0, 300])
									.range([0.78*divH, 0]);							
					// d3's line generator,  curveMonotoneX for smoothing the line
					var line = d3.line()
							.x(function(d, i) { return xScale(i); })
							.y(function(d) { return yScale(d); })
							
					var svg = d3.select("#"+this.lineChartData.chartID).transition()
					svg.select(".line1")
						.duration(0)
						.attr("d", line(this.lineChartData.data.nxv1020) )
					svg.select(".line2")
						.duration(0)
						.attr("d", line(this.lineChartData.data.nxv600) )
				}
			},
		}
	};
</script>
	
<style>
.background-white {
    background-color: rgb(255, 255, 255, 0.8);
}
.subtitle {
	font-family: arial,"Microsoft JhengHei","微軟正黑體",sans-serif !important;
    font-size: 1.125rem;
    font-weight: bold;
    color: #434b5d;
}
.subtitleDiv {
    width: 94%;
    height: 13%;
    margin: 0 3%;
    color: #000;
    border-bottom: 2px #bbc4d2 solid;
}
.text-style-2 {
    font-family: Microsoft JhengHei;
    font-weight: bold;
}
.text-style-1 {
    font-family: Microsoft JhengHei;
    font-weight: normal;
}
.lineChartDiv {
    width: 94%;
    height: 86%;
    margin: 0 3%;
}
</style>