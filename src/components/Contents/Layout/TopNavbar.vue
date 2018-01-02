<template>
  <nav class="navbar navbar-default">
    <div class="container-fluid">
      <div class="navbar-header">
        <button type="button" class="navbar-toggle" :class="{toggled: $sidebar.showSidebar}" @click="toggleSidebar">
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar bar1"></span>
          <span class="icon-bar bar2"></span>
          <span class="icon-bar bar3"></span>
        </button>
        <a class="navbar-brand">{{routeName}}</a>
      </div>
      <div class="navbar-right-menu">
        <ul class="nav navbar-nav navbar-right">
           <drop-down :title="noticeCount" icon="ti-bell" class="hand-cursor">
             <li v-for="item in noticeList"><a href="#">{{item.titleName}}</a></li>
           </drop-down>
          <li>
            <a href="#" class="btn-rotate">
              <i class="ti-settings"></i>
              <p>
                Settings
              </p>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<script>
  export default {
    computed: {
      routeName () {
        const {name} = this.$route
        return this.capitalizeFirstLetter(name)
      }
    },
    mounted: function () {
      this.initData()
    },
    data: function () {
      return {
        activeNotifications: false,
        noticeList: [],
        noticeCount: '0 Notifications'
      }
    },
    methods: {
      initData: function () {
        var noticeArr = [
          {titleName: 'Notification 1'},
          {titleName: 'Notification 2'},
          {titleName: 'Notification 3'},
          {titleName: 'Notification 4'}
        ]

        // 리스트 조회 후 값 변환
        this.noticeList = noticeArr
        this.noticeCount = this.noticeCount.replace('0', noticeArr.length)
      },
      capitalizeFirstLetter (string) {
        return string.charAt(0).toUpperCase() + string.slice(1)
      },
      toggleNotificationDropDown () {
        this.activeNotifications = !this.activeNotifications
      },
      closeDropDown () {
        this.activeNotifications = false
      },
      toggleSidebar () {
        this.$sidebar.displaySidebar(!this.$sidebar.showSidebar)
      },
      hideSidebar () {
        this.$sidebar.displaySidebar(false)
      }
    }
  }

</script>
<style scoped>
  .hand-cursor {
    cursor:pointer;
  }
</style>
