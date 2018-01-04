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
            <div class="margin-job-list" v-for="work in jobListData">
              <button type="submit" class="btn btn-sm ellipsis full-job-list"
                      draggable="true">
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
          {text: 'Design'},
          {text: 'Implement'},
          {text: 'Verification'},
          {text: 'Meeting'}
        ],
        jobEvents: [
          {
            id: 1,
            title: 'All Day Event',
            start: '2017-12-01',
            end: '2017-12-17',
            color: 'info'
          },
          {
            id: 2,
            title: 'Long Event',
            start: '2017-12-07',
            end: '2017-12-10',
            color: 'primary'
          },
          {
            id: 3,
            title: 'Repeating Event',
            start: '2017-12-09T16:00:00',
            color: 'success'
          },
          {
            id: 4,
            title: 'Repeating Event',
            start: '2017-12-16T16:00:00',
            color: 'warning'
          },
          {
            id: 5,
            title: 'Conference',
            start: '2017-12-11',
            end: '2017-12-13',
            color: 'danger'
          },
          {
            id: 6,
            title: 'Meeting',
            start: '2017-12-12T10:30:00',
            end: '2017-12-12T12:30:00'
          },
          {
            id: 7,
            title: 'Lunch',
            start: '2017-12-12T12:00:00'
          },
          {
            id: 8,
            title: 'Meeting',
            start: '2017-12-12T14:30:00'
          },
          {
            id: 9,
            title: 'Happy Hour',
            start: '2017-12-12T17:30:00'
          },
          {
            id: 10,
            title: 'Dinner',
            start: '2017-12-12T20:00:00'
          },
          {
            id: 11,
            title: 'Birthday Party',
            start: '2017-12-13T07:00:00'
          },
          {
            id: 12,
            title: 'Click for Google',
            url: 'http://google.com/',
            start: '2017-12-28'
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
          defaultDate: '2017-12-12',
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
