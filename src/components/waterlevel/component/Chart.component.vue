<template>
  <div class="example">
    <apexcharts width="1400" height="370" type="bar" :options="chartOptions" :series="series" :gradient="['#ffbe88', '#ff93df']" :barWidth="5" :growDuration="1"></apexcharts>
  </div>
</template>
<style>
	apexcharts{
	}
</style>
<script>
import VueApexCharts from 'vue-apexcharts'

export default {
  name: 'Chart',
  components: {
    apexcharts: VueApexCharts,
  },
  data: function() {
    return {
      chartOptions: {
        chart: {
          id: 'basic-bar'
        },
        xaxis: {
          categories: [1, 2, 3, 4, 5, 6,7, 8, 9,10,11,12]
        }
      },
      series: [{
        name: 'series-1',
        data: [10, 2, 3, 2, 3, 5, 6, 9,9,10,12,13]
      }]
    }
  },
}
</script>
