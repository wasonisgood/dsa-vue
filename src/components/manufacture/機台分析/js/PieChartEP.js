var total = 50;
var pieData = [{
	name: 'NXV1020A',
	y: 10,
	z: 50,
	label: "總計:20次"
}, {
	name: 'NXV600A',
	y: 10,
	z: 50,
	label: "總計:10次"
}
]
var pieSize = $(document).width() >= 1280 ? 350 : 230;

let ReSet = (num) => {
	clearInterval(window.AutoStart)
	for (let i = 0; i < PieChart.series[0].data.length; i++) {
		PieChart.series[2].data[i].sliced = false
		PieChart.series[2].data[i].selected = false
		PieChart.series[2].data[i].color = 'rgb(255,255,255,0)'
	}
	PieChart.series[2].data[pieView].color = PieChart.series[0].data[pieView].color
	PieChart.series[2].data[pieView].sliced = true
	PieChart.series[2].data[pieView].selected = true
	let series = PieChart.series[0];
	list = series.data
	PieChart.series[2].setData(PieChart.series[2].data, true);
	PieChart.setTitle({
		text:
			`<div style="color: #6B7BAE;text-align: center;"> 
                <div style="font-size: 1.5rem; margin-top:-2rem;">${list[pieView].name}</div>
                <div style="font-weight:bold; font-size: 2rem; margin-top:-0.3rem;">${list[pieView].z}%</div>
                <hr style="text-align: center; margin:0rem; border-top: 1px solid #6B7BAE; width: 8rem;">
                <div style="font-size:1.5rem;">${list[pieView].label}</div>
		    </div>`}, false, true)
	window.AutoStart = setInterval(window.pieCarousel, 3000);
}
let pieDatas = [...pieData]
var PieChart = Highcharts.chart('container-speed', {
	chart: {
		spacing: [0, 0, 0, 0],
		type: 'pie',
		events: {
			render: function () {
				let data = this.series[0].data[0]

				this.setTitle({
					text:
						`<div style="color: #6B7BAE;text-align: center;"> 
                <div style="font-size: 1.5rem; margin-top:-2rem;">${data.name}</div>
                <div style="font-weight:bold; font-size: 2rem; margin-top:-0.3rem;">${data.z}%</div>
                <hr style="text-align: center; margin:0rem; border-top: 1px solid #6B7BAE; width: 8rem;">
                <div style="font-size:1.5rem;">${data.label}</div>
		    </div>`, y: 190
				}, false, false)
			}
		}
	},
	title: {
		useHTML: true,
		floating: true,
		title: "",
		style: { color: '#A8ACC2', fontSize: 14 }
	},
	credits: {
		enabled: false
	},
	tooltip: {
		enabled: false,
		pointFormat: '<br>{point.y}次 {point.z}%'
	},
	plotOptions: {
		series: {
			states: {
				inactive: {
					opacity: 0.9
				},
			},
		},
		pie: {
			slicedOffset: 0,
			size: pieSize,
			innerSize: '70%',
			shadow: false,
			allowPointSelect: true,
			cursor: 'pointer',
			colors: ['#8695C2', '#18AFC6', '#45AEA5', '#5cb0d4'],
			legend: {
				enabled: false
			},
			states: {
				hover: {
					brightness: 0
				}
			},
			dataLabels: {
				enabled: false,
				useHTML: true,
				formatter: function () {
					return '<div class="text-center h6 font"><b>' + this.point.name + '   <span>' +
						this.point.y + ' %</span></b><hr style="margin-top:5px;margin-bottom:5px;">' + '總計 : ' +
						this.point.z + '小時' + this.point.x + '分</div>'
				},
				distance: 10,
				connectorWidth: 0,
				style: {
					color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || '#A8ACC2',
					fontSize: 16,
					fontFamily: '微軟正黑體'
				}
			},

		}
	},
	series: [{
		data: pieData,
		events: {
			click: (e) => {
				pieView = e.point.index
				ReSet(pieView)
			},
		}
	},
	{
		type: 'pie',
		data: [{
			name: '',
			y: 10,
			color: 'rgb(255,255,255,0.3)'
		}],
		dataLabels: {
			enabled: false
		},
		credits: { enabled: false },
		tooltip: {
			enabled: false,
			style: {
				pointerEvents: 'none'
			}
		},
		allowPointSelect: false,
		plotOptions: {
			pie: {
				allowPointSelect: false,
				size: '100%',
			},
			series: {
				states: {
					hover: {
						enabled: false
					},
				}
			}
		},
		size: 215,
		innerSize: 180
	},
	{
		type: 'pie',
		data: pieDatas,
		dataLabels: {
			enabled: false
		},
		credits: { enabled: false },
		tooltip: {
			enabled: false,
			style: {
				pointerEvents: 'none'
			}
		},
		plotOptions: {
			pie: {
				allowPointSelect: true,
				size: '100%',
			},

		},
		size: 175,
		innerSize: 167.5
	},
	]
}, function (c) { // 图表初始化完毕后的会掉函数
	// 环形图圆心
	var centerY = c.series[0].center[1],
		titleHeight = parseInt(c.title.styles.fontSize);
	// 动态设置标题位置
	c.setTitle({
		y: centerY + titleHeight / 2
	});
});


let pieView = 0
window.pieCarousel = () => {
	pieDatas = [...pieData]
	let series = PieChart.series[0];
	list = series.data
	num = pieView++ % pieData.length;
	total = 0
	for (let i = 0; i < series.data.length; i++) {
		list[i].selected = false
		list[i].sliced = false
		// list[i].borderColor = 'rgb(255,255,255,0)'
		list[i].color = series.options.colors[i]
		total += list[i].y
		PieChart.series[2].data[i].sliced = false
		PieChart.series[2].data[i].selected = false
		PieChart.series[2].data[i].color = 'rgb(255,255,255,0)'
	}
	for (let i = 0; i < series.data.length; i++) {
		list[i].z = Math.round(list[i].y / total * 100)
	}

	// list[num].selected = true
	// list[num].sliced = true
	PieChart.series[2].data[num].color = PieChart.series[0].data[num].color
	PieChart.series[2].data[num].selected = false
	PieChart.series[2].data[num].sliced = false
	PieChart.series[2].setData(PieChart.series[2].data, true);
	PieChart.series[0].setData(list, true);

	PieChart.setTitle({
		text:
			`<div style="color: #6B7BAE;text-align: center;"> 
                <div style="font-size: 1.5rem; margin-top:-2rem;">${list[num].name}</div>
                <div style="font-weight:bold; font-size: 2rem; margin-top:-0.3rem;">${list[num].z}%</div>
                <hr style="text-align: center; margin:0rem; border-top: 1px solid #6B7BAE; width: 8rem;">
                <div style="font-size:1.5rem;">${list[num].label}</div>
		    </div>`
	}, false, false)
}
window.AutoStart = setInterval(window.pieCarousel, 3000);