<template>
  <div class="card">
    <div class="content">
      <div class="row">
        <div class="col-xs-12 col-md-12">
          <p class="title chart-title" slot="title" v-if="chartTitle" >{{chartTitle}}</p>
          <bar-chart v-if="chartType == 'BAR'" :data="dataSet" :options="defaultOption" />
          <line-chart v-if="chartType == 'LINE'" :data="dataSet" :options="defaultOption" />
          <pie-chart v-if="chartType == 'PIE'" :data="dataSet" :options="defaultOption" />
        </div>
      </div>
    </div>

  </div>
</template>
<script>
  import LineChart from '../Charts/LineChart'
  import BarChart from '../Charts/BarChart'
  import PieChart from '../Charts/PieChart'
  export default {
    components: {
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
