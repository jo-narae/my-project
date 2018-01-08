<template>
  <div>

    <!--Stats cards-->
    <div class="row">
      <div class="col-lg-3 col-sm-6" v-for="stats in statsCards">
        <stats-card>
          <div class="icon-big text-center" :class="`icon-${stats.type}`" slot="header">
            <i :class="stats.icon"></i>
          </div>
          <div class="numbers" slot="content">
            <p class="ellipsis">{{stats.title}}</p>
            <span>{{stats.value}}</span>
            <span class="dashboard-sign">{{stats.sign}}</span>
          </div>
          <div class="stats" slot="footer">
            <i :class="stats.footerIcon"></i> {{stats.footerText}}
          </div>
        </stats-card>
      </div>
    </div>

    <!--Charts-->
    <div class="row">
      <div class="col-md-6 col-xs-12">
        <div class="card">
          최근 피드
        </div>
      </div>
      <div class="col-md-3 col-xs-12">
        <div class="card">
          <chart-card :dataSet="jobKind" :defaultOption="JobKindOption" :chartTitle="jobKindTitle" :chartType="chartType[3]" />
        </div>
      </div>
      <div class="col-md-3 col-xs-12">
        <div class="card">
          <chart-card :dataSet="totalIssue" :defaultOption="totalIssueOption" :chartTitle="totalIssueTitle" :chartType="chartType[3]" />
        </div>
      </div>
    </div>

    <!-- ETC -->
    <div class="row">
      <div class="col-md-9 col-xs-12">
        <div class="card">
          <chart-card :dataSet="jobComplete" :defaultOption="jobCompleteOption" :chartTitle="jobCompleteTitle" :chartType="chartType[1]" />
        </div>
      </div>
      <div class="col-md-3 col-xs-12">
        <div class="card">
          <div  style="padding-top: 10px; padding-left: 7%;">
          <div v-for="info in memberInfo" style="display: inline-block;">
            <div>
              <img class="avatar dashboard-avatar" :src="info.image" alt="avatar">
              <p class="ellipsis avatar-name">{{info.name}}</p>
            </div>
          </div>
          </div>
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
        statsCards: [
          {
            type: 'info',
            icon: 'fa fa-inbox',
            title: 'Total Issue Count',
            value: '300'
          },
          {
            type: 'success',
            icon: 'fa fa-pie-chart',
            title: 'Progress Date',
            value: '23',
            sign: '%'
          },
          {
            type: 'danger',
            icon: 'fa fa-history',
            title: 'Total Delay Count',
            value: '30'
          },
          {
            type: 'primary',
            icon: 'fa fa-users',
            title: 'Project Members',
            value: '50'
          }
        ],
        jobKindTitle: 'Issue Kind Ratio',
        jobKind: {
          datasets: [{
            data: [60, 60, 30, 30, 20],
            backgroundColor: ['#0288D1', '#388E3C', '#00838F', '#FFAB00', '#BF360C'],
            hoverBackgroundColor: ['#0288D1', '#388E3C', '#00838F', '#FFAB00', '#BF360C']
          }],
          // These labels appear in the legend and in the tooltips when hovering different arcs
          labels: ['Design', 'Implement', 'Verification', 'Report', 'Meeting']
        },
        JobKindOption: {
          maintainAspectRatio: false
        },
        totalIssueTitle: 'Total Issue Count',
        totalIssue: {
          datasets: [{
            data: [70, 40, 70, 14, 200],
            backgroundColor: ['#0288D1', '#388E3C', '#00838F', '#FFAB00', '#BF360C'],
            hoverBackgroundColor: ['#0288D1', '#388E3C', '#00838F', '#FFAB00', '#BF360C']
          }],
          // These labels appear in the legend and in the tooltips when hovering different arcs
          labels: ['Stay', 'Working', 'Complete', 'Reject', 'Close']
        },
        totalIssueOption: {
          maintainAspectRatio: false
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
        },
        memberInfo: [
          { image: 'static/img/faces/face-4.jpg',
            name: 'Alexander Pierce'
          },
          { image: 'static/img/faces/face-5.jpg',
            name: 'Norman'
          },
          { image: 'static/img/faces/face-6.jpg',
            name: 'Jane'
          },
          { image: 'static/img/faces/face-7.jpg',
            name: 'John'
          },
          { image: 'static/img/faces/face-8.jpg',
            name: 'Alexander'
          },
          { image: 'static/img/faces/face-9.jpg',
            name: 'Sarah'
          },
          { image: 'static/img/faces/face-10.jpg',
            name: 'Nora'
          },
          { image: 'static/img/faces/face-11.jpg',
            name: 'Nadia'
          }
        ]
      }
    }
  }

</script>
<style scoped>
  .dashboard-sign {
    font-size: 0.7em;
  }
  .ellipsis {
    text-overflow:ellipsis;
    white-space:nowrap;
    word-wrap:normal;
    overflow:hidden;
    max-width: 80px;
  }
  .avatar-name {
    margin-left: 5px;
    text-align: center !important;
  }
  .member-info {
    margin: 0 5px 0 5px;
  }
  .dashboard-avatar {
    width: 60px !important;
    height: 60px !important;
    margin-left: 10px;
  }
</style>
