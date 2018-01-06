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
            <p>{{stats.title}}</p>
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
        <chart-card :chart-data="preferencesChart.data"  chart-type="Pie">
          <h4 class="title" slot="title">Email Statistics</h4>
          <span slot="subTitle"> Last campaign performance</span>
          <span slot="footer">
            <i class="ti-timer"></i> Campaign set 2 days ago</span>
          <div slot="legend">
            <i class="fa fa-circle text-info"></i> Design
            <i class="fa fa-circle text-danger"></i> Implement
            <i class="fa fa-circle text-warning"></i> Verification
            <i class="fa fa-circle text-warning"></i> Report
            <i class="fa fa-circle text-warning"></i> Meeting
          </div>
        </chart-card>
      </div>

      <div class="col-md-6 col-xs-12">
        <chart-card :chart-data="activityChart.data" :chart-options="activityChart.options">
          <h4 class="title" slot="title">2015 Sales</h4>
          <span slot="subTitle"> All products including Taxes</span>
          <span slot="footer">
            <i class="ti-check"></i> Data information certified</span>
          <div slot="legend">
            <i class="fa fa-circle text-info"></i> Tesla Model S
            <i class="fa fa-circle text-warning"></i> BMW 5 Series
          </div>
        </chart-card>
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
        statsCards: [
          {
            type: 'info',
            icon: 'fa fa-inbox',
            title: 'Total Event',
            value: '23',
            footerText: 'Updated now',
            footerIcon: 'fa fa-refresh'
          },
          {
            type: 'success',
            icon: 'fa fa-pie-chart',
            title: 'Progress Date',
            value: '23',
            sign: '%',
            footerText: 'Updated now',
            footerIcon: 'fa fa-refresh'
          },
          {
            type: 'danger',
            icon: 'fa fa-history',
            title: 'Total Delay',
            value: '30',
            footerText: 'Updated now',
            footerIcon: 'fa fa-refresh'
          },
          {
            type: 'warning',
            icon: 'fa fa-users',
            title: 'Project Members',
            value: '5',
            footerText: 'View members',
            footerIcon: 'fa fa-search'
          }
        ],
        preferencesChart: {
          data: {
            labels: ['30%', '30%', '20%', '10%', '10%'],
            series: [30, 30, 20, 10, 10]
          },
          options: {}
        },
        activityChart: {
          data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            series: [
              [542, 543, 520, 680, 653, 753, 326, 434, 568, 610, 756, 895],
              [230, 293, 380, 480, 503, 553, 600, 664, 698, 710, 736, 795]
            ]
          },
          options: {
            seriesBarDistance: 10,
            axisX: {
              showGrid: false
            },
            height: '245px'
          }
        }
      }
    }
  }

</script>
<style scoped>
  .dashboard-sign {
    font-size: 0.7em;
  }
</style>
