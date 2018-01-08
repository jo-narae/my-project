<template>
  <div class="card">
    <div class="content">
      <div class="row">
        <div class="col-xs-12 col-md-12">
          <p class="title" slot="title" style="text-align: center; font-size: 14pt; margin-bottom: 10px;">Total Issue Count of This Week</p>
          <bar-chart v-if="chartType == 'BAR'" :data="dataSet" :options="defaultOption" />
          <line-chart v-if="chartType == 'LINE'" :data="dataSet" :options="defaultOption" />
        </div>
      </div>
    </div>

  </div>
</template>
<script>
  import LineChart from '../Charts/LineChart'
  import BarChart from '../Charts/BarChart'
  export default {
    components: {
      BarChart,
      LineChart},
    props: {
      chartType: String,
      dataSet: Object,
      defaultOption: Object
    }
  }
</script>
<style scoped>
</style>
