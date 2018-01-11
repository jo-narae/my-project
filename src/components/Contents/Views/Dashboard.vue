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
        <div class="card middle-area">
          <p class="title chart-title notice-title">Notice</p>
          <div class="table-area">
            <v-client-table :columns="tableColumns" :data="tableData" :options="tableOptions">
            </v-client-table>
          </div>
        </div>
      </div>
      <div class="col-md-3 col-xs-12">
        <div class="card middle-area">
          <chart-card :dataSet="jobKind" :defaultOption="JobKindOption" :chartTitle="jobKindTitle" :chartType="chartType[3]" />
        </div>
      </div>
      <div class="col-md-3 col-xs-12">
        <div class="card middle-area">
          <chart-card :dataSet="totalIssue" :defaultOption="totalIssueOption" :chartTitle="totalIssueTitle" :chartType="chartType[3]" />
        </div>
      </div>
    </div>

    <!-- ETC -->
    <div class="row">
      <div class="col-md-6 col-xs-12">
        <div class="card department-card">
          <p class="title chart-title department-title">Department Progress</p>
          <div style="padding-bottom: 10px;">
            <div v-for="item in department" >
              <span class="ellipsis department-name">{{item.name}}</span>
              <b-progress class="department-progress" :max="item.max">
                <b-progress-bar :value="item.value"
                            :variant="item.variant"
                            :key="item.variant"
                            :striped="striped"
                >{{item.value}} / {{item.max}}</b-progress-bar>
              </b-progress>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-6 col-xs-12">
        <div class="card member-card">
          <p class="title chart-title member-title">Members</p>
          <div class="member-list">
            <div v-for="(info, idx) in memberInfo" class="member-info">
              <div v-if="idx < 5" class="member-info-data">
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
    mounted () {
      $('.VuePagination').removeClass('row col-md-12')
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
          }
        ],
        striped: true,
        department: [
          {name: 'Plan', variant: 'success', max: 600, value: 523},
          {name: 'Design', variant: 'info', max: 600, value: 450},
          {name: 'Development', variant: 'warning', max: 600, value: 532},
          {name: 'Q & A', variant: 'danger', max: 600, value: 480}
        ],
        tableColumns: ['name', 'code', 'uri'],
        tableData: [
          {
            code: 'SB',
            name: 'Solomon Islands',
            created_at: '2015-04-24T01:46:50.360631',
            updated_at: '2015-04-24T01:46:50.360635',
            uri: 'http://api.lobbyfacts.eu/api/1/country/203',
            id: 203
          }, {
            code: 'SI',
            name: 'Slovenia',
            created_at: '2015-04-24T01:46:50.358394',
            updated_at: '2015-04-24T01:46:50.358399',
            uri: 'http://api.lobbyfacts.eu/api/1/country/202',
            id: 202
          }, {
            code: 'SK',
            name: 'Slovakia',
            created_at: '2015-04-24T01:46:50.356154',
            updated_at: '2015-04-24T01:46:50.356158',
            uri: 'http://api.lobbyfacts.eu/api/1/country/201',
            id: 201
          }, {
            code: 'SX',
            name: 'Sint Maarten',
            created_at: '2015-04-24T01:46:50.353807',
            updated_at: '2015-04-24T01:46:50.353811',
            uri: 'http://api.lobbyfacts.eu/api/1/country/200',
            id: 200
          }, {
            code: 'SG',
            name: 'Singapore',
            created_at: '2015-04-24T01:46:50.349354',
            updated_at: '2015-04-24T01:46:50.349358',
            uri: 'http://api.lobbyfacts.eu/api/1/country/199',
            id: 199
          }, {
            code: 'SL',
            name: 'Sierra Leone',
            created_at: '2015-04-24T01:46:50.347186',
            updated_at: '2015-04-24T01:46:50.347190',
            uri: 'http://api.lobbyfacts.eu/api/1/country/198',
            id: 198
          }, {
            code: 'SC',
            name: 'Seychelles',
            created_at: '2015-04-24T01:46:50.344980',
            updated_at: '2015-04-24T01:46:50.344984',
            uri: 'http://api.lobbyfacts.eu/api/1/country/197',
            id: 197
          }, {
            code: 'RS',
            name: 'Serbia',
            created_at: '2015-04-24T01:46:50.342496',
            updated_at: '2015-04-24T01:46:50.342501',
            uri: 'http://api.lobbyfacts.eu/api/1/country/196',
            id: 196
          }
        ],
        tableOptions: {
          sortable: ['name', 'code'],
          perPage: 2
        }
      }
    }
  }

</script>
<style scoped>
</style>
