<template>
  <div>

    <!--Charts-->
    <div class="row">
      <div class="col-md-12 col-xs-12">
        <div class="card">
          <chart-card :dataSet="issueCount" :defaultOption="issueCountOption" :chartType="chartType[0]"
                      :chartTitle="issueCountTitle"/>
        </div>
      </div>
      <div class="col-md-12 col-xs-12">
        <div class="card">
          <chart-card :dataSet="jobComplete" :defaultOption="jobCompleteOption" :chartTitle="jobCompleteTitle"
                      :chartType="chartType[1]"/>
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
        chartType: ['BAR', 'HORIZONTAL', 'LINE', 'PIE'],
        issueCountTitle: 'Total Issue Count of This Week',
        issueCount: {
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
        issueCountOption: {
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
        },
        jobCompleteTitle: 'Activity Rate of Department',
        jobComplete: {
          labels: ['first week', 'second week', 'third week', 'fourth week'],
          datasets: [
            {
              data: [60, 40, 0, 0],
              backgroundColor: '#0288D1',
              hoverBackgroundColor: '#0288D1',
              label: 'Plan'
            },
            {
              data: [25, 30, 0, 0],
              backgroundColor: '#FFAB00',
              hoverBackgroundColor: '#FFAB00',
              label: 'Design'
            },
            {
              data: [15, 30, 0, 0],
              backgroundColor: '#BF360C',
              hoverBackgroundColor: '#BF360C',
              label: 'Development'
            }
          ]
        },
        jobCompleteOption: {
          maintainAspectRatio: false,
          scales: {
            xAxes: [{
              stacked: true,
              ticks: {
                min: 0,
                max: 100,
                stepSize: 10
              }
            }],
            yAxes: [{
              barThickness: 25,
              barPercentage: 1.0,
              categoryPercentage: 1.0,
              gridLines: {
                display: false,
                color: '#fff',
                zeroLineColor: '#fff',
                zeroLineWidth: 0
              },
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
