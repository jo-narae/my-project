<template>
  <div class="card">
    <div class="content">
      <div class="row">
        <div class="col-xs-12 col-md-12">
          <p class="title" slot="title" style="text-align: center; font-size: 14pt; margin-bottom: 10px;">Total Issue Count of This Week</p>
          <bar-chart :data="dataSet" :options="defaultOption" />
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
    data () {
      return {
        dataSet: {
          labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
          datasets: [
            {
              label: 'Stay',
              backgroundColor: '#427C89',
              borderColor: '#fff',
              hoverBackgroundColor: '#427C89',
              data: [10, 20, 30, 40, 50, 60, 70]
            },
            {
              label: 'Working',
              backgroundColor: '#41B883',
              borderColor: '#fff',
              hoverBackgroundColor: '#41B883',
              data: [5, 10, 15, 20, 25, 30, 40]
            },
            {
              label: 'Complete',
              backgroundColor: '#3091B2',
              borderColor: '#fff',
              hoverBackgroundColor: '#3091B2',
              data: [10, 20, 30, 40, 50, 60, 70]
            },
            {
              label: 'Reject',
              backgroundColor: '#F3BB45',
              borderColor: '#fff',
              hoverBackgroundColor: '#F3BB45',
              data: [2, 4, 6, 8, 10, 12, 14]
            },
            {
              label: 'Close',
              backgroundColor: '#B33C12',
              borderColor: '#fff',
              hoverBackgroundColor: '#B33C12',
              data: [100, 110, 130, 140, 160, 180, 200]
            }
          ]
        },
        defaultOption: {
          maintainAspectRatio: false,
          padding: {
            left: 10,
            right: 10,
            top: 50,
            bottom: 100
          },
          scales: {
            xAxes: [{
              stacked: true
            }],
            yAxes: [{
              stacked: true
            }]
          }
        }
      }
    }
  }
</script>
<style scoped>
</style>
