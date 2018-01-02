<template>
  <div :class="{'nav-open': $sidebar.showSidebar}">
    <router-view></router-view>
    <!--This sidebar appears only for screens smaller than 992px-->
    <side-bar type="navbar" :sidebar-links="$sidebar.sidebarLinks">
      <ul class="nav navbar-nav">
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
        <li class="divider"></li>
      </ul>
    </side-bar>
  </div>
</template>

<script>
  export default {
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
      }
    }
  }
</script>

<style lang="scss" scoped>
  .hand-cursor {
    cursor:pointer;
  }
</style>
