<template>
  <div class="card card-user">
    <div class="content">
      <div class="content-job-list">
        <p class="title-job-list">JOB LIST</p>
        <div class="margin-job-list" v-for="work in jobListData">
          <button type="submit" class="btn btn-sm ellipsis full-job-list">
            {{work.text}}
          </button>
        </div>
      </div>
      <hr />
      <div class="footer-job-list">
        <button type="submit" class="btn btn-sm btn-fill full-job-list">
          <i class="fa fa-plus"></i>
        </button>
      </div>
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
  hr {
    margin-left: 0px !important;
    min-width: 100% !important;
  }

  .content-job-list {
    margin-bottom: 20px;
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
