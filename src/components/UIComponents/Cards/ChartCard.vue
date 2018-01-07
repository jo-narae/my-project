<template>
  <div class="card">
    <div class="content">
      <div class="row">
        <div class="col-xs-12 col-md-12">
          <line-chart :data="dataSet" />
        </div>
      </div>
    </div>

  </div>
</template>
<script>
  import LineChart from '../Charts/LineChart'
  export default {
    components: {LineChart},
    data () {
      return {
        dataSet: {
          labels: ['January', 'February'],
          datasets: [
            {
              label: 'GitHub Commits',
              backgroundColor: '#f87979cc',
              data: [40, 20]
            },
            {
              label: 'NaRae Commits',
              backgroundColor: '#8db1f8cc',
              data: [30, 50]
            }
          ]
        }
      }
    }
  }
</script>
<style>

</style>
