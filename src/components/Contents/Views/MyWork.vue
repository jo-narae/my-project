<template>
  <div class="row">
    <vue-tabs
      active-tab-color="#66615B" active-text-color="white">
      <v-tab icon="fa fa-laptop" class="tab-content" title="Work">
        <feed></feed>
        <feed></feed>
        <feed></feed>
      </v-tab>

      <v-tab icon="fa fa-check" class="tab-content" title="Inspect">
        <feed></feed>
        <feed></feed>
      </v-tab>

      <v-tab icon="fa fa-history" class="tab-content" title="Delay">
        <feed></feed>
      </v-tab>

      <v-tab icon="fa fa-ban" class="tab-content" title="Close">
        <feed></feed>
      </v-tab>
    </vue-tabs>
<!--    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
      <feed></feed>
      <feed></feed>
      <feed></feed>
    </div>-->
  </div>
</template>
<script>
  import Feed from './MyWork/Feed.vue'
  export default {
    components: {
      Feed
    },
    data () {
      return {
      }
    },
    mounted () {
    },
    methods: {
    }
  }

</script>
<style scoped>
  .tab-content {
    margin: 10px;
  }
</style>
