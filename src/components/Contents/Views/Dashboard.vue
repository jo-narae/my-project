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
            <p class="stats-title">{{stats.title}}</p>
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
      </div>

      <div class="col-md-6 col-xs-12">
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
            value: '5'
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
  .stats-title {
    text-overflow:ellipsis;
    white-space:nowrap;
    word-wrap:normal;
    overflow:hidden;
    max-width: 100%;
  }
</style>
