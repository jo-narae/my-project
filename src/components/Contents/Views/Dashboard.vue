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
      <div class="col-md-6 col-xs-12">
        <div class="card">
        </div>
      </div>
      <div class="col-md-6 col-xs-12">
        <div class="card">
          <div class="member-list">
            <p class="title chart-title" slot="title" >Members</p>
            <div v-for="info in memberInfo" class="member-info">
              <div class="member-info-data">
                <img class="avatar dashboard-avatar" :src="info.image" alt="avatar">
                <p class="ellipsis avatar-name">{{info.name}}</p>
              </div>
            </div>
          </div>
          <hr>
          <div class="text-center">
            <button class="btn btn-member-info"><i class="fa fa-address-book-o"></i> more member info </button>
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
          }
        ]
      }
    }
  }

</script>
<style scoped>
</style>
