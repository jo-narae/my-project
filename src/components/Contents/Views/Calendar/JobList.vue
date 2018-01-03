<template>
  <div class="card card-user">
    <div class="content">
      <md-list>
        <md-list-item>1</md-list-item>
        <md-list-item>1</md-list-item>
        <md-list-item>1</md-list-item>
      </md-list>
    </div>
  </div>
</template>
<script scoped>
  import VueMaterial from 'vue-material'
  export default {
    components: {
      VueMaterial
    },
    data () {
      return {
        details: [
          {
            title: '12',
            subTitle: 'Files'
          },
          {
            title: '2GB',
            subTitle: 'Used'
          },
          {
            title: '24,6$',
            subTitle: 'Spent'
          }
        ]
      }
    },
    methods: {
      getClasses (index) {
        var remainder = index % 3
        if (remainder === 0) {
          return 'col-md-3 col-md-offset-1'
        } else if (remainder === 2) {
          return 'col-md-4'
        } else {
          return 'col-md-3'
        }
      }
    }
  }

</script>
<style>

</style>
