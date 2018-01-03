<template>
  <div class="card">
    <div class="content">
      <div id='calendar'></div>
    </div>
  </div>
</template>
<script>
  /* eslint-disable padded-blocks,quotes */

  export default {
    name: 'app',
    props: {
      jobEvents: Array
    },
    data () {
      return {
        events: []
      }
    },
    watch: {
      events: function (after) {
        console.log(after)
      }
    },
    mounted: function () {
      this.initCalendar()
    },
    methods: {
      initCalendar () {
        var me = this
        me.events = me.jobEvents
        $('#calendar').fullCalendar({
          header: {
            left: 'prev,next today',
            center: 'title',
            right: 'month,agendaWeek,agendaDay,listWeek'
          },
          defaultDate: '2017-12-12',
          navLinks: true, // can click day/week names to navigate views
          eventLimit: true, // allow "more" link when too many events
          events: me.events,
          editable: true,
          eventDrop: function (event, delta, revertFunc) {
            alert(event.start.format())
            if (!confirm("Are you sure about this change?")) {
              revertFunc()
            }
          }
        })
      }
    }
  }
</script>
<style>

</style>
