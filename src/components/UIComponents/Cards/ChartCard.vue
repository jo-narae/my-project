<template>
  <div class="card">
    <div class="content">
      <div class="row">
        <div class="col-xs-12 col-md-12">
          <p class="title chart-title" slot="title" v-if="chartTitle" >{{chartTitle}}</p>
          <bar-chart v-if="chartType == 'BAR'" :data="dataSet" :options="defaultOption" />
          <horizontal-bar-chart v-if="chartType == 'HORIZONTAL'" :data="dataSet" :options="defaultOption" :height="300" />
          <line-chart v-if="chartType == 'LINE'" :data="dataSet" :options="defaultOption" />
          <pie-chart v-if="chartType == 'PIE'" :data="dataSet" :options="defaultOption" :height="300" />
        </div>
      </div>
    </div>

  </div>
</template>
<script>
  import LineChart from '../Charts/LineChart'
  import BarChart from '../Charts/BarChart'
  import PieChart from '../Charts/PieChart'
  import HorizontalBarChart from '../Charts/HorizontalBarChart'
  export default {
    components: {
      HorizontalBarChart,
      BarChart,
      LineChart,
      PieChart
    },
    props: {
      chartTitle: String,
      chartType: String,
      dataSet: Object,
      defaultOption: Object
    }
  }
</script>
<style scoped>
</style>
