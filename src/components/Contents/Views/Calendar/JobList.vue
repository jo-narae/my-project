<template>
  <div class="card card-user">
    <div class="content">
      <div class="content-job-list">
        <a class="badge btn-job-add">Add</a>
        <div class="center-job-list">
          <span class="title-job-list"> JOB LIST </span>
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
</template>
<script>
  export default {
    props: {
      jobListData: Array
    },
    data () {
      return {
      }
    },
    methods: {
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
