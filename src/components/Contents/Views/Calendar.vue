<template>
  <div class="row">
    <div class="col-lg-2 col-md-3">
      <job-list :jobListData="jobListData">
      </job-list>
    </div>
    <div class="col-lg-10 col-md-9">
      <job-calendar :jobEvents="jobEvents">
      </job-calendar>
    </div>
  </div>
</template>
<script>
  import JobList from './Calendar/JobList.vue'
  import JobCalendar from './Calendar/JobCalendar.vue'
  export default {
    components: {
      JobList,
      JobCalendar
    },
    data () {
      return {
        jobListData: [
          {text: 'design'},
          {text: 'implement'},
          {text: 'test'},
          {text: 'job event management'},
          {text: 'job event management job event managementjob event managementjob event managementjob event managementjob event managementjob event management'}
        ],
        jobEvents: [
          {
            id: 1,
            title: 'All Day Event',
            start: '2017-12-01',
            end: '2017-12-01'
          },
          {
            id: 2,
            title: 'Long Event',
            start: '2017-12-07',
            end: '2017-12-10'
          },
          {
            id: 3,
            title: 'Repeating Event',
            start: '2017-12-09T16:00:00'
          },
          {
            id: 4,
            title: 'Repeating Event',
            start: '2017-12-16T16:00:00'
          },
          {
            id: 5,
            title: 'Conference',
            start: '2017-12-11',
            end: '2017-12-13'
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
    }
  }

</script>
<style>

</style>
