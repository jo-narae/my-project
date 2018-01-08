<template>
  <div>

    <!--Stats cards-->
    <div class="row">
      <div class="col-md-12 col-xs-12">
        <div class="card">
          <chart-card :dataSet="IssueCount" :defaultOption="IssueCountOption" :chartType="chartType[0]" />
        </div>
      </div>
    </div>

  </div>
</template>
<script>
  import StatsCard from 'components/UIComponents/Cards/StatsCard.vue'
  import ChartCard from 'components/UIComponents/Cards/ChartCard.vue'
  export default {
    components: {
      StatsCard,
      ChartCard
    },
    /**
     * Chart data used to render stats, charts. Should be replaced with server data
     */
    data () {
      return {
        chartType: ['BAR', 'LINE'],
        IssueCount: {
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
        IssueCountOption: {
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
<style>

</style>
