var div;
if(window.innerWidth>768){
	div = document.getElementById("barchart");
}else{
	div = document.getElementById("barchart-mobile");
}
var divH = div.offsetHeight;
var divW = div.offsetWidth;
var barW = 0.06;
var regular = 0;
var attention = 40;
var warring = 80;
// #7180b7 #61aea8 #db8b42
var regularColor = "#8695C2";
var attentionColor = "#18AFC6";
var warringColor = "#45AEA5";
var number = 8;
var index = 0;
var ratio = 5; // ratio = 100/maximum value
//select svg and set viewbox
var svg = d3.select('#'+div.id)
		.append('svg')
		.attr("preserveAspectRatio", "xMidYMid meet")
		.attr("viewBox", "0 0 "+divW+" "+divH+"")  
		
var tooltipDiv = d3.select('#'+div.id)
		.append("div")	
		.attr("class", "tooltip")				
		.style("opacity", 0);	
//長條圖data 0-100
var data = [
	{x:1,y:800/8/ratio*0.6,name:"DSA001",clr:1},
	{x:2,y:800/8/ratio*0.7,name:"DSA002",clr:3},
	{x:3,y:800/8/ratio*0.8,name:"DSA003",clr:2},
	{x:4,y:800/8/ratio*0.8,name:"DSA004",clr:1},
	{x:5,y:800/8/ratio*0.6,name:"DSA005",clr:3},
	{x:6,y:800/8/ratio*0.5,name:"DSA006",clr:2},
	{x:7,y:800/8/ratio*0.6,name:"DSA007",clr:1},
	{x:8,y:800/8/ratio*0.8,name:"DSA008",clr:3},
];
setInterval(function(){
	for(i=0; i<8; i++){
		data[i].y = Math.random()*20;
	}
	updateSVG();
},1000)

var ticksColor = "#caced1";
var datumline = 75;

function drawBarChart(x, y, width, height,radius) {
	var h = height - radius;
	var rx = radius, ry = radius;
	if(h<0){
		h = 0;
		ry = height;
	}	
  return "M" + x + "," + y
       + "h" + width
	   + "v" + -h
       + "a" + rx + "," + ry + " 0 0 0 " + -width + "," + 0
       + "v" + h
       + "z";
}
function axisline(value){
		return "M" + (divW*0.12) + "," + (divH-value)
			  +"h" + divW
			  +"v" + -1
			  +"h" + -divW
			  +"z";
}
function updateSVG(){
	// draw bar	chart
bar.remove();
xLabel.remove();
bar	= svg.selectAll('rect')
		 .data(data)
		 .enter()
		 .append('path')
		 .attr({
			 'fill':function(d){
				 if(d.clr==1)
				 {
					return regularColor;
				 }
				 else if(d.clr==2)
				 {
					return attentionColor;
				 }
				 else if(d.clr==3)
				 {
					return warringColor;
				 }
				 }
		 })
		 .attr({
			 "d":function(d){
				 return drawBarChart( ((d.x-1)*(0.76/7)+0.15)*divW, divH*0.9, divW*barW, d.y*0.01*0.75*divH*ratio, divW*barW*0.5);
			 }
		 })
		 .on('mouseover', function(d){
			var borderColor = d3.select(this).attr("fill");
			tooltipDiv.transition()		
				.duration(200)		
				.style("opacity", .9);
				tooltipDiv.html("<span>"+d.name+" : "+Math.round(d.y)+"次</span>")
				.style("left", (((d.x-1)*(0.76/7)+0.15)*divW-18 + "px"))		
				.style("top", (divH-d.y*0.01*0.75*divH*ratio+0.1*d.y*ratio-12) + "px")
				.style("border", borderColor + " 2px solid");
			})
		.on("mouseout", function(d) {		
				tooltipDiv.transition()		
					.duration(500)		
					.style("opacity", 0);	
			});
xLabel = svg.selectAll('div')
			.data(data)
			.enter()
			.append('text')
			.text(function(d){
				return d.name;
			})
			.attr({
				'fill':'#8898BC',
				'x': function(d){
					return ((d.x-1)*(0.76/7)+0.15)*divW;
				},
				'y':divH*0.97,
				'style':'font-size:8px;'
			})
			
}
		
//draw axis ticks 
	// y axis
svg.append('text')
	.attr({
		'fill':'#8898bc',
		'x':divW*0.02,
		'y':0.05*divH,
	})
	.attr("font-size",10)
	.attr("font-weight","bold")
	.style("font-family", "Microsoft JhengHei")
	.text('刀具耗損率')
var i =0
for(i=0,j=0;i<=100;i+=20,j+=20)
{
svg.append('path')
	.attr({
		"d":function(){
			return axisline(((i*0.01*0.75)+0.1)*divH);
		},
		"fill":ticksColor
	});	
svg.append('text')
	.text(function(){
		return j+'%';
	})
	.attr({
		'fill':'#8898BC',
		'x':divW*0.02,
		'y':divH-(((i*0.01*0.75)+0.1)*divH),
		'style':'font-size:14px'
	})
}

bar	= svg.selectAll('rect')
		 .data(data)
		 .enter()
		 .append('path')
		 .attr({
			 'fill':function(d){
				 if(d.clr==1)
				 {
					return regularColor;
				 }
				 else if(d.clr==2)
				 {
					return attentionColor;
				 }
				 else if(d.clr==3)
				 {
					return warringColor;
				 }
				 }
		 })
		 .attr({
			 "d":function(d){
				 return drawBarChart( ((d.x-1)*(0.76/7)+0.15)*divW, divH*0.9, divW*barW, d.y*0.01*0.75*divH*ratio, divW*barW*0.5);
			 }
		 })
		 .on('mouseover', function(d){
			var borderColor = d3.select(this).attr("fill");
			tooltipDiv.transition()		
				.duration(200)		
				.style("opacity", .9);
				tooltipDiv.html("<span>"+d.name+" : "+Math.round(d.y)+"次</span>")
				.style("left", (((d.x-1)*(0.76/7)+0.15)*divW-18 + "px"))		
				.style("top", (divH-d.y*0.01*0.75*ratio*divH+0.1*d.y*ratio-12) + "px")
				.style("border", borderColor + " 2px solid");
			})
		.on("mouseout", function(d) {		
				tooltipDiv.transition()		
					.duration(500)		
					.style("opacity", 0);	
			});	
xLabel = svg.selectAll('div')
			.data(data)
			.enter()
			.append('text')
			.text(function(d){
				return d.name;
			})
			.attr({
				'fill':'#8898BC',
				'x': function(d){
					return ((d.x-1)*(0.76/7)+0.15)*divW;
				},
				'y':divH*0.97,
				'style':'font-size:8px;'
			})

window.addEventListener('resize', function(event){
	location.reload();
});