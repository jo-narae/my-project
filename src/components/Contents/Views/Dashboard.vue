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
            icon: 'fa fa-pie-chart',
            title: 'Progress Rate',
            value: '23',
            sign: '%',
            footerText: 'Updated now',
            footerIcon: 'fa fa-refresh'
          },
          {
            type: 'danger',
            icon: 'fa fa-history',
            title: 'Delay Count',
            value: '30',
            footerText: 'Updated now',
            footerIcon: 'fa fa-refresh'
          },
          {
            type: 'success',
            icon: 'fa fa-calendar-check-o',
            title: 'Progress Date',
            value: '30',
            footerText: 'View calendar',
            footerIcon: 'fa fa-calendar'
          },
          {
            type: 'warning',
            icon: 'fa fa-users',
            title: 'Project Members',
            value: '5',
            footerText: 'View members',
            footerIcon: 'fa fa-search'
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
</style>
