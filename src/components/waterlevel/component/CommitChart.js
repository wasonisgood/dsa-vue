import Chart from 'chart.js';
import { generateChart } from 'vue-chartjs/es/BaseCharts';
Chart.defaults.LineWithLine = Chart.defaults.line;
Chart.controllers.LineWithLine = Chart.controllers.line.extend({
  draw: function draw(ease) {
    Chart.controllers.line.prototype.draw.call(this, ease);

    if (this.chart.tooltip._active && this.chart.tooltip._active.length) {
      var activePoint = this.chart.tooltip._active[0];
      var ctx = this.chart.ctx;
      var x = activePoint.tooltipPosition().x;
      var topY = this.chart.scales['y-axis-0'].top;
      var bottomY = this.chart.scales['y-axis-0'].bottom;
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(x, topY);
      ctx.lineTo(x, bottomY);
      ctx.lineWidth = 1;
      ctx.strokeStyle = '#07C';
      ctx.stroke();
      ctx.restore();
    }
  }
});
var LineWithLine = generateChart('line-with-chart', 'LineWithLine');
export default {
  extends: LineWithLine,
  mounted: function mounted() {
    this.renderChart({
      labels: ['1', '2', '3', '4', '5', '6', '7','8','9','10','11','12'],
      datasets: [{
        label: 'Data One',
        backgroundColor: '#f87979',
        data: [40, 39, 10, 40, 39, 80, 40,40, 39, 10, 40, 39, 80]
      }]
    }, {
      responsive: true,
      maintainAspectRatio: false,
      tooltips: {
        intersect: false
      }
    });
  }
};
