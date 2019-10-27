<template>
    <div class="sysanalyze">
        <!-- computer layout -->
        <div class="background-primary d-none d-lg-block w-100" style="height: 79vh; width:100vw;">
            <div class="d-flex justify-content-between spindleChart">
                <!-- 主軸轉速 -->
                <div class="spindleChart-div h-100">
                    <div class="background-white h-100">
                        <div class="subtitleDiv d-flex justify-content-between text-style-2" id="speedChartTitle">
                            <div class="align-self-center d-flex">
                                <img class="align-self-center mr-3" src="./icon/icon2.png" height="23" width="23" />
                                <span class="subtitle align-self-center text-style-2">主軸轉速</span>
                            </div>
                            <!-- <select id="opts" class="align-self-center chartselect" onchange="chartChange()"> -->
                                <!-- <option value="1020A">NXV1020A</option> -->
                                <!-- <option value="600A" >NXV600A</option> -->
                            <!-- </select> -->
                        </div>
                        <!-- 折線圖 - linechart-speed.js -->
                        <div class="lineChartDiv text-style-1" id="speedChart"></div>
                    </div>
                </div>
                <!-- 主軸扭力 -->
                <div class="spindleChart-div h-100">
                    <div class="background-white h-100">
                        <div class="subtitleDiv d-flex justify-content-between text-style-2" id="torqueChartTitle">
                            <div class="align-self-center d-flex">
                                <img class="align-self-center mr-3" src="./icon/icon3.png" height="23" width="23" />
                                <span class="subtitle align-self-center text-style-2">主軸扭力</span>
                            </div>
                            <!-- <select class="align-self-center chartselect" onchange=""> -->
                                <!-- <option value="1020A">NXV1020A</option> -->
                                <!-- <option value="600A" >NXV600A</option> -->
                            <!-- </select> -->
                        </div>
                        <!-- 折線圖 - linechart-torque.js -->
                        <div class="lineChartDiv text-style-1" id="torqueChart"></div>
                    </div>
                </div>
                <!-- 主軸震動 -->
                <div class="spindleChart-div h-100">
                    <div class="background-white h-100">
                        <div class="subtitleDiv d-flex justify-content-between text-style-2" id="vibrationChartTitle">
                            <div class="align-self-center d-flex">
                                <img class="align-self-center mr-3" src="./icon/icon4.png" height="23" width="23" />
                                <span class="subtitle align-self-center text-style-2">主軸震動</span>
                            </div>
                            <!-- <select class="align-self-center chartselect" onchange=""> -->
                                <!-- <option value="1020A">NXV1020A</option> -->
                                <!-- <option value="600A" >NXV600A</option> -->
                            <!-- </select> -->
                        </div>
                        <!-- 折線圖 - linechart-vibration.js -->
                        <div class="lineChartDiv text-style-1" id="vibrationChart"></div>
                    </div>
                </div>
            </div>
            <div class="d-flex justify-content-between similarity">
                <!-- NXV1020A 相似度 -->
                <div class="similarity-div h-100">
                    <div class="background-white h-100">
                        <div class="subtitleDiv d-flex">
                            <img src="./icon/icon1.png" height="20" width="20" class="align-self-center mr-3"/><span class="subtitle text-style-2 align-self-center">NXV1020A 加工相似度</span>
                        </div>
                        <!-- 圓餅圖 - ringchart-NXV1020A.js -->
                        <div class="ringChartDiv" id="NXV1020AChart">
                        </div>
                        <!-- 診斷 -->
                        <form class="diagnosisForm background-primary">
                            <div class="d-flex mt-1 ml-1" style="height: 15%;">
                                <span class="col-form-label text-left text-nowrap align-self-center text-style-1">診斷結果 :</span>
                                <input class="h-auto text-center align-self-center text-style-1" type="text" value="正常" readonly> </input>
                            </div>
                            <div class="d-flex h-75 ml-1">
                                <span class="col-form-label text-left text-nowrap align-self-start text-style-1">診斷說明 :</span>
                                <textarea class="h-100 align-self-center  text-style-1" readonly></textarea>
                            </div>
                        </form>
                    </div>
                </div>
                <!-- NXV600A 相似度 -->
                <div class="similarity-div h-100">
                    <div class="background-white h-100">
                        <div class="subtitleDiv d-flex">
                            <img src="./icon/icon1.png" height="20" width="20" class="align-self-center mr-3"/><span class="subtitle text-style-2 align-self-center">NXV600A 加工相似度</span>
                        </div>
                        <!-- 圓餅圖 - ringchart-NXV600A.js-->
                        <div class="ringChartDiv" id="NXV600AChart">
                        </div>
                        <!-- 診斷 -->
                        <form class="diagnosisForm background-primary">
                            <div class="d-flex mt-1 ml-1" style="height: 15%;">
                                <span class="col-form-label text-left text-nowrap align-self-center text-style-1">診斷結果 :</span>
                                <input class="h-auto text-center align-self-center text-style-1" type="text" value="正常" readonly> </input>
                            </div>
                            <div class="d-flex h-75 ml-1">
                                <span class="col-form-label text-left text-nowrap align-self-start text-style-1">診斷說明 :</span>
                                <textarea class="h-100 align-self-center text-style-1" readonly></textarea>
                            </div>
                        </form>
                    </div>
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
import * as d3 from 'd3'
import Highcharts from 'highcharts';
export default {
    mounted() {
        //NO JQUERY VERSION
        // declare parameters and initialize data
        var height, width;
        var titleH;
        var number = 300, maximum = 300;

        var linedata = [
                {speed:[], torque:[], vibration:[]},
                {speed:[], torque:[], vibration:[]}
            ];
        // random line chart data	
        for(var i=0; i<number; i++){
            linedata[0].speed.push( Math.random()*60+100 );
            linedata[1].speed.push( Math.random()*60+150 );
            linedata[0].torque.push( Math.random()*60+150 );
            linedata[1].torque.push( Math.random()*60+150 );
            linedata[0].vibration.push( Math.random()*60+150 );
            linedata[1].vibration.push( Math.random()*60+150 );
        }
            
        // line opacity, set 0 to hide line chart
        var lineopacity = [
            {speed:1, torque:1, vibration:1},
            {speed:0, torque:0, vibration:0},
            ];


        function draw(chartid){
            var titleID = chartid+"Title";
            var chartName;
            // element width、height and offset
            var div = document.getElementById(chartid);
            var divH = div.offsetHeight;
            var divW = div.offsetWidth;
            var margin;
            if(chartid.includes("mobile")){
                margin = {hor: 0.1*divW, ver: 0.18*divH};
                width = 0.85*divW;
                height = 0.75*divH;
            }
            else{
                margin = {hor: 0.1*divW, ver: 0.12*divH};
                width = 0.85*divW;
                height = 0.78*divH;
            }
            
            // bind data
            var dataset1= [], dataset2, label1, label2;
            if(chartid=="speedChart"||chartid=="speedChart-mobile"){
                chartName = "speed";
                label1 = "NVX1020A主軸轉速";
                label2 = "NVX600A主軸轉速";
            }
            if(chartid=="torqueChart"||chartid=="torqueChart-mobile"){
                chartName = "torque";
                label1 = "NVX1020A主軸扭力";
                label2 = "NVX600A主軸扭力";
            }
            if(chartid=="vibrationChart"||chartid=="vibrationChart-mobile"){
                chartName = "vibration";
                label1 = "NVX1020A主軸震動";
                label2 = "NVX600A主軸震動";
            }
            dataset1 = linedata[0][chartName];
            dataset2 = linedata[1][chartName];
            
            //判斷是否已經畫上圖表
            if(div.getElementsByTagName('svg').length == 0){
                var line1svg,line2svg;
                // X,Y domain and range
                var xScale = d3.scaleLinear()
                                .domain([0, number])
                                .range([0, width]);
                                
                var yScale = d3.scaleLinear()
                                .domain([0, maximum])
                                .range([height, 0]);
                                
                // d3's line generator,  curveMonotoneX for smoothing the line
                var line = d3.line()
                                .x(function(d, i) { return xScale(i); })
                                .y(function(d) { return yScale(d); })
                                
                // Add SVG element			
                var svg = d3.select("#"+chartid)
                        .append('svg')
                        .attr("width", divW)
                        .attr("height", divH)
                        .append("g")
                        .attr("transform", "translate("+margin.hor+","+margin.ver+")")
                
                //畫上圖例
                if(chartid.includes("mobile")){
                    svg.append("path")
                        .attr("d", Legend(-divH*0.16))
                        .attr("fill", "#8598c1")
                        .on("click", function(){
                            line1svg.style("opacity", 1);
                            line2svg.style("opacity", 0);
                        });
                    svg.append("text")
                        .text(label1)
                        .attr("x", width*0.08)
                        .attr("y", -divH*0.15)
                        .attr("fill", "#8598c1")
                        .style("font-size", "11px")
                        .on("click", function(){
                            line1svg.style("opacity", 1);
                            line2svg.style("opacity", 0);
                        });
                    svg.append("path")
                        .attr("d", Legend(-divH*0.09))
                        .attr("fill", "#23afc7")
                        .on("click", function(){
                            line1svg.style("opacity", 0);
                            line2svg.style("opacity", 1);
                        });
                    svg.append("text")
                        .text(label2)
                        .attr("x", width*0.08)
                        .attr("y", -divH*0.08)
                        .attr("fill", "#23afc7")
                        .style("font-size", "11px")
                        .on("click", function(){
                            line1svg.style("opacity", 0);
                            line2svg.style("opacity", 1);
                        });
                }
                // select option 選擇要顯示的折線圖
                else{
                    // titleH = document.getElementById(titleID).offsetHeight;
                    // var titleW = document.getElementById(titleID).offsetWidth;
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
                                                lineopacity[0][chartName] = 1;
                                                lineopacity[1][chartName] = 0;
                                                dropDown.style("color", "#8598c1");
                                                // options.style("color", "#8598c1");
                                            }
                                            else if(this.value=="NXV600A"){
                                                lineopacity[0][chartName] = 0;
                                                lineopacity[1][chartName] = 1;
                                                dropDown.style("color", "#23afc7");
                                                // optinos.style("color", "#23afc7");
                                            }
                                                line1svg.style("opacity", lineopacity[0][chartName]);
                                                line2svg.style("opacity", lineopacity[1][chartName]);
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
                            
                }
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
                        .style("fill", "none")
                        .style("stroke", "#8598c1")
                        .style("opacity", lineopacity[0][chartName]);
                
                line2svg = svg.append("path")
                        .datum(dataset2)
                        .attr("d", line)
                        .style("fill", "none")
                        .style("stroke", "#23afc7")
                        .style("opacity", lineopacity[1][chartName]);
            }
            setInterval(function(){
                linedata[0][chartName].shift();
                linedata[1][chartName].shift();
                linedata[0][chartName].push(Math.random()*60+150);
                linedata[1][chartName].push(Math.random()*60+150);
                line1svg.remove();
                line2svg.remove()
                line1svg = svg.append("path")
                            .datum(linedata[0][chartName])
                            .attr("d", line)
                            .style("fill", "none")
                            .style("stroke", "#8598c1")
                            .style("opacity", lineopacity[0][chartName]);
                line2svg = svg.append("path")
                            .datum(linedata[1][chartName])
                            .attr("d", line)
                            .style("fill", "none")
                            .style("stroke", "#23afc7")
                            .style("opacity", lineopacity[1][chartName]);					
            }, 1000);
        }

        //Y軸格線	
        function YAxisGird(value){
            return "M" + (0) + "," + (height*(1-value/maximum))
                +"h" + width
                +"v" + -0.5
                +"h" + -width
                +"z";
        }
        //圖例
        function Legend_ver1(x){
            return "M" + x + "," + titleH/2
                +"h" + 15
                +"a" + 14 + "," + 5 + " 0 0 0 " + -30 + "," + 0
                +"a" + 14 + "," + 5 + " 0 0 0 " + 30 + "," + 0
                +"z";
        }
        function Legend(y){
            return "M" + -width*0.03 + "," + y
                +"h" + 15
                +"a" + 14 + "," + 5 + " 0 0 0 " + -30 + "," + 0
                +"a" + 14 + "," + 5 + " 0 0 0 " + 30 + "," + 0
                +"z";
        }

        //click event for collapse header
        var headers = document.getElementsByClassName("card-header");
        for(var i=0; i<headers.length; i++){
            headers[i].addEventListener('click', function(){
                var targetID, chartID = null, type;
                var Yoffset = this.parentElement.parentElement.parentElement.offsetHeight; //調整捲動的高度
                switch(this.id){
                    case "collapse-link-1":
                        targetID = "collapse-target-1";
                        chartID = "speedChart-mobile";
                        Yoffset = 0;
                        break;
                    case "collapse-link-2":
                        targetID = "collapse-target-2";
                        chartID = "torqueChart-mobile";
                        break;
                    case "collapse-link-3":
                        targetID = "collapse-target-3";
                        chartID = "vibrationChart-mobile";
                        Yoffset *= 2;
                        break;
                    case "collapse-link-4":
                        targetID = "collapse-target-4";
                        Yoffset *= 3;
                        break;
                    case "collapse-link-5":
                        targetID = "collapse-target-5";
                        Yoffset *= 4;
                        break;
                }		
                var target = document.getElementById(targetID);
                var accordion = document.getElementsByClassName("card-body");
                for(var i=0; i<accordion.length; i++){
                    //先將其他元素收合
                    if(accordion[i].id != targetID){
                        var collapse_element = document.getElementById(accordion[i].id);
                        collapse_element.style.display = "none";
                    }
                }
                window.scrollBy(0, 0);
                //開展->收合; 收合->展開
                if(target.style.display == "none"){
                    target.style.display = "block";
                    if(chartID != null){ draw(chartID); }
                    window.scrollBy(0, Yoffset);
                }
                else{
                    target.style.display = "none";
                }
            })
        }

        // click event for bottom navigator
        var navitems = document.getElementsByClassName("bottom-navitem");
        for(var i=0; i<navitems.length; i++){
            navitems[i].addEventListener('click', function(){
                var targetID, chartID = null;
                var temp = document.getElementsByClassName("card-header")
                var Yoffset;
                switch(this.id){
                    case "navitem-1":
                        targetID = "collapse-target-1";
                        chartID = "speedChart-mobile";
                        Yoffset = 0;
                        break;
                    case "navitem-2":
                        targetID = "collapse-target-2";
                        chartID = "torqueChart-mobile";
                        Yoffset = temp[1].parentElement.parentElement.parentElement.offsetHeight; //調整捲動的高度
                        break;
                    case "navitem-3":
                        targetID = "collapse-target-3";
                        chartID = "vibrationChart-mobile";
                        Yoffset = temp[2].parentElement.parentElement.parentElement.offsetHeight; //調整捲動的高度
                        Yoffset *= 2;
                        break;
                    case "navitem-4":
                        targetID = "collapse-target-4";
                        Yoffset = temp[3].parentElement.parentElement.parentElement.offsetHeight; //調整捲動的高度
                        Yoffset *= 3;
                        break;
                    case "navitem-5":
                        targetID = "collapse-target-5";
                        Yoffset = temp[4].parentElement.parentElement.parentElement.offsetHeight; //調整捲動的高度
                        Yoffset *= 4;
                        break;
                }		
                var target = document.getElementById(targetID);
                var accordion = document.getElementsByClassName("card-body");
                for(var i=0; i<accordion.length; i++){
                    //先將其他元素收合
                    if(accordion[i].id != targetID){
                        var collapse_element = document.getElementById(accordion[i].id);
                        collapse_element.style.display = "none";
                    }
                }
                window.scrollBy(0, 0);
                //開展->收合; 收合->展開
                if(target.style.display == "none"){
                    target.style.display = "block";
                    if(chartID != null){ draw(chartID); }
                    window.scrollBy(0, Yoffset);
                }
                else{
                    target.style.display = "none";
                }	
            })
        }

        // comter ver. render at initial
        draw("speedChart");
        draw("torqueChart");
        draw("vibrationChart");
        //expand first item
        document.getElementById("collapse-target-1").style.display = "block";
        draw("speedChart-mobile");

        window.addEventListener('resize', function(event){
            // if(window.screen.availWidth > 992){
            // }
            location.reload();
        });

        // chartChange() use draw to set line chart opcity, so change draw func to 2 parameter, (id, selectedIndex)

        //ringchart.js 

        //圓餅圖title根據rem調整offset
        var html = document.getElementsByTagName("html")
        var style = window.getComputedStyle(html[0], null).getPropertyValue('font-size');
        var fontSize = parseFloat(style);
        //圓餅圖data
        var nav1020a_value = Math.floor(Math.random()*100);
        var nvx600a_value = Math.floor(Math.random()*100);

        //refersh per sec
        setInterval(function(){
            nav1020a_value = Math.floor(Math.random()*100);
            nvx600a_value = Math.floor(Math.random()*100);
            for(var i=0; i<2 ;i++){
                var y ='';
                NXV1020A.series[i].data[0].update(y = nav1020a_value);
                NXV1020A_mobile.series[i].data[0].update(y = nav1020a_value);
                NXV600A.series[i].data[0].update(y = nvx600a_value);
                NXV600A_mobile.series[i].data[0].update(y = nvx600a_value);
                
                NXV1020A.series[i].data[1].update(y = 100 - nav1020a_value);
                NXV1020A_mobile.series[i].data[1].update(y = 100 - nav1020a_value);
                NXV600A.series[i].data[1].update(y = 100 - nvx600a_value);
                NXV600A_mobile.series[i].data[1].update(y = 100 - nvx600a_value);
            }
            NXV1020A.setTitle({text:nav1020a_value+'%'})
            NXV1020A_mobile.setTitle({text:nav1020a_value+'%'})
            NXV600A.setTitle({text:nvx600a_value+'%'})
            NXV600A_mobile.setTitle({text:nvx600a_value+'%'})
        }, 1000);

        var NXV1020A = Highcharts.chart('NXV1020AChart',
        {
            chart: {
                type: 'pie'
            },
            credits: {
                enabled: false,  //remove highchart.com logo
            }, 
            series: [
                //圓餅圖外圈
                {
                    type: 'pie',
                    data: [{
                        y:nav1020a_value, color: '#8598c1'
                    },{
                        y:100-nav1020a_value, color: '#ebf0f8'
                    }],
                    size: '100%',
                    innerSize: '75%',
                    animation: false,
                    enableMouseTracking: false,
                    dataLabels: false,
                    borderWidth: 0,
                },
                //圓餅圖內圈(灰色部分)
                {
                    type: 'pie',
                    data: [{
                        y:nav1020a_value, color: '#cdd4e7'
                    },{
                        y:100-nav1020a_value, color: '#ebf0f8'
                    }],
                    size: '75%',
                    innerSize: '85%',
                    animation: false,
                    enableMouseTracking: false,
                    dataLabels: false,
                    borderWidth: 0,
                }
            ],
            title: {
                text: nav1020a_value+'%',
                verticalAlign: 'middle',
                align: 'center',
                margin: 0,
                y: fontSize*3.25,
                floating: true,
                style: {
                    fontWeight: 'bold',
                    fontSize: '3.25rem',
                    color: '#8598c1'
                }
            },
        });

        var NXV1020A_mobile = Highcharts.chart('NXV1020AChart-mobile',
        {
            chart: {
                type: 'pie'
            },
            credits: {
                enabled: false,  //remove highchart.com logo
            }, 
            series: [
                //圓餅圖外圈
                {
                    type: 'pie',
                    data: [{
                        y:nav1020a_value, color: '#8598c1'
                    },{
                        y:100-nav1020a_value, color: '#ebf0f8'
                    }],
                    size: '100%',
                    innerSize: '75%',
                    animation: false,
                    enableMouseTracking: false,
                    dataLabels: false,
                    borderWidth: 0,
                },
                //圓餅圖內圈(灰色部分)
                {
                    type: 'pie',
                    data: [{
                        y:nav1020a_value, color: '#cdd4e7'
                    },{
                        y:100-nav1020a_value, color: '#ebf0f8'
                    }],
                    size: '75%',
                    innerSize: '85%',
                    animation: false,
                    enableMouseTracking: false,
                    dataLabels: false,
                    borderWidth: 0,
                }
            ],
            title: {
                text: nav1020a_value+'%',
                verticalAlign: 'middle',
                align: 'center',
                margin: 0,
                y: fontSize*3.25,
                floating: true,
                style: {
                    fontWeight: 'bold',
                    fontSize: '3.25rem',
                    color: '#8598c1'
                }
            },
        });

        var NXV600A = Highcharts.chart('NXV600AChart',
        {
            chart: {
                type: 'pie'
            },
            credits: {
                enabled: false,
            }, 
            series: [
                {
                    type: 'pie',
                    data: [{
                        y:nvx600a_value, color: '#23afc7'
                    },{
                        y:100-nvx600a_value, color: '#ebf0f8'
                    }],
                    size: '100%',
                    innerSize: '75%',
                    animation: false,
                    enableMouseTracking: false,
                    dataLabels: false,
                    borderWidth: 0,
                },
                {
                    type: 'pie',
                    data: [{
                        y:nvx600a_value, color: '#cdd4e7'
                    },{
                        y:100-nvx600a_value, color: '#ebf0f8'
                    }],
                    size: '75%',
                    innerSize: '85%',
                    animation: false,
                    enableMouseTracking: false,
                    dataLabels: false,
                    borderWidth: 0,
                }
            ],
            title: {
                text: nvx600a_value+'%',
                verticalAlign: 'middle',
                align: 'center',
                margin: 0,
                y: fontSize*3.25,
                floating: true,
                style: {
                    fontWeight: 'bold',
                    fontSize: '3.25rem',
                    color: '#23afc7'
                }
            },
        });			   

        var NXV600A_mobile = Highcharts.chart('NXV600AChart-mobile',
        {
            chart: {
                type: 'pie'
            },
            credits: {
                enabled: false,
            }, 
            series: [
                {
                    type: 'pie',
                    data: [{
                        y:nvx600a_value, color: '#23afc7'
                    },{
                        y:100-nvx600a_value, color: '#ebf0f8'
                    }],
                    size: '100%',
                    innerSize: '75%',
                    animation: false,
                    enableMouseTracking: false,
                    dataLabels: false,
                    borderWidth: 0,
                },
                {
                    type: 'pie',
                    data: [{
                        y:nvx600a_value, color: '#cdd4e7'
                    },{
                        y:100-nvx600a_value, color: '#ebf0f8'
                    }],
                    size: '75%',
                    innerSize: '85%',
                    animation: false,
                    enableMouseTracking: false,
                    dataLabels: false,
                    borderWidth: 0,
                }
            ],
            title: {
                text: nvx600a_value+'%',
                verticalAlign: 'middle',
                align: 'center',
                margin: 0,
                y: fontSize*3.25,
                floating: true,
                style: {
                    fontWeight: 'bold',
                    fontSize: '3.25rem',
                    color: '#23afc7'
                }
            },
        });	
    },
}
</script>
<style scoped>
@import "style.css";   
.sysanalyze{
    height:100%;
    
}
@media only screen and (max-width: 769px){
    .sysanalyze{
        height:100%;
        overflow-y: scroll;
    }
}
    

</style>