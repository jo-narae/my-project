<template>
  <div class="wrapper">
    <side-bar type="sidebar" :sidebar-links="$sidebar.sidebarLinks">

    </side-bar>
    <notifications>

    </notifications>
    <div class="main-panel" @click="onDomClick">
      <top-navbar :isClicked="isClicked"></top-navbar>

      <contents-content @click.native="toggleSidebar">

      </contents-content>

      <content-footer></content-footer>
    </div>
  </div>
</template>
<style lang="scss">

</style>
<script>
  import TopNavbar from './TopNavbar.vue'
  import ContentFooter from './ContentFooter.vue'
  import ContentsContent from './Content.vue'
  export default {
    components: {
      TopNavbar,
      ContentFooter,
      ContentsContent
    },
    data: function () {
      return {
        isClicked: false
      }
    },
    methods: {
      toggleSidebar () {
        if (this.$sidebar.showSidebar) {
          this.$sidebar.displaySidebar(false)
        }
      },
      onDomClick (e) {
        if (e.target.className === 'notification') {
          this.isClicked = true
        } else {
          this.isClicked = false
        }
      }
    }
  }

</script>
