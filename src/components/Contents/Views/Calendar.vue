<template>
  <div class="row">
    <div class="col-lg-2 col-md-3">
      <job-list>

      </job-list>
    </div>
    <div class="col-lg-10 col-md-9">
      <job-calendar>

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
    }
  }

</script>
<style>

</style>
