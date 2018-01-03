<template>
  <div class="card card-user">
    <div class="content">
      <p class="title-job-list">JOB LIST</p>
      <div class="margin-job-list" v-for="work in jobListData">
        <b-button size="sm" class="ellipsis">{{work.text}}</b-button>
      </div>
      <div class="footer-job-list">+</div>
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        jobListData: [
          {text: 'design'},
          {text: 'implement'},
          {text: 'test'},
          {text: 'job event management'},
          {text: 'job event management job event managementjob event managementjob event managementjob event managementjob event managementjob event management'}
        ]
      }
    },
    methods: {
    }
  }

</script>
<style scoped>
  .ellipsis {
    max-width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .title-job-list {
    font-weight: bold;
    text-align: center;
    margin-bottom: 15px;
  }
  .footer-job-list {
    font-weight: bold;
    text-align: center;
    margin-top: 15px;
  }
  .margin-job-list {
    margin: 10px 0px 10px;
  }
</style>
