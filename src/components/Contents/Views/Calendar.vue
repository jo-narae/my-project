<template>
  <div class="row">
    <div class="col-lg-2 col-md-3">
      <div class="card card-user">
        <div class="content">
          <div class="content-job-list">
            <a class="badge btn-job-add">Add</a>
            <div class="center-job-list">
              <span class="title-job-list"> Event Filter </span>
            </div>
            <div class="margin-job-list">
              <button type="submit" class="btn btn-sm btn-fill ellipsis full-job-list">
                ALL
              </button>
            </div>
            <div class="margin-job-list" v-for="work in jobListData">
              <button type="submit" class="btn btn-sm btn-fill ellipsis full-job-list"
                      :class="{ 'job-event-primary' : work.color == 'primary', 'job-event-success' : work.color == 'success', 'job-event-info' : work.color == 'info',
                                'job-event-warning' : work.color == 'warning', 'job-event-danger' : work.color == 'danger' }">
                {{work.text}}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-lg-10 col-md-9">
      <div class="card">
        <div class="content">
          <div id='calendar'></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        jobListData: [
          {text: 'Design', color: 'primary'},
          {text: 'Implement', color: 'success'},
          {text: 'Verification', color: 'info'},
          {text: 'Report', color: 'warning'},
          {text: 'Meeting', color: 'danger'}
        ],
        jobEvents: [
          {
            id: 1,
            title: 'All Day Event',
            start: '2018-01-01',
            end: '2018-01-17',
            color: 'info'
          },
          {
            id: 2,
            title: 'Long Event',
            start: '2018-01-07',
            end: '2018-01-10',
            color: 'primary'
          },
          {
            id: 3,
            title: 'Repeating Event',
            start: '2018-01-09T16:00:00',
            color: 'success'
          },
          {
            id: 4,
            title: 'Repeating Event',
            start: '2018-01-16T16:00:00',
            color: 'warning'
          },
          {
            id: 5,
            title: 'Conference',
            start: '2018-01-11',
            end: '2018-01-13',
            color: 'danger'
          },
          {
            id: 6,
            title: 'Meeting',
            start: '2018-01-12T10:30:00',
            end: '2018-01-12T12:30:00'
          },
          {
            id: 7,
            title: 'Lunch',
            start: '2018-01-12T12:00:00'
          },
          {
            id: 8,
            title: 'Meeting',
            start: '2018-01-12T14:30:00'
          },
          {
            id: 9,
            title: 'Happy Hour',
            start: '2018-01-12T17:30:00'
          },
          {
            id: 10,
            title: 'Dinner',
            start: '2018-01-12T20:00:00'
          },
          {
            id: 11,
            title: 'Birthday Party',
            start: '2018-01-13T07:00:00'
          },
          {
            id: 12,
            title: 'Click for Google',
            url: 'http://google.com/',
            start: '2018-01-28'
          }
        ]
      }
    },
    mounted: function () {
      this.initCalendar()
    },
    methods: {
      initCalendar () {
        var me = this
        jQuery('#calendar').fullCalendar({
          header: {
            left: 'prev,next today',
            center: 'title',
            right: 'month,agendaWeek,agendaDay,listWeek'
          },
          navLinks: true, // can click day/week names to navigate views
          eventLimit: true, // allow "more" link when too many events
          events: me.jobEvents,
          editable: true,
          eventDrop: function (event, delta, revertFunc) {
            alert(event.start.format() + event.id + event.color)
            if (!confirm('Are you sure about this change?')) {
              revertFunc()
            }
          }
        })
      }
    }
  }

</script>
<style scoped>
  .center-job-list {
    text-align: center !important;
  }
  .full-job-list {
    min-width: 100%;
  }
  .ellipsis {
    max-width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .title-job-list {
    font-weight: bold;
    margin-bottom: 15px;
  }
  .margin-job-list {
    margin: 10px 0px 10px;
  }
  .btn-job-add {
    position: absolute;
    font-size: 10px;
    margin-left: 65%;
  }
</style>
