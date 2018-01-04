import Sidebar from './SideBar.vue'

const SidebarStore = {
  showSidebar: false,
  sidebarLinks: [
    {
      name: 'Overview',
      icon: 'ti-blackboard',
      path: '/admin/overview'
    },
    {
      name: 'My Work',
      icon: 'ti-files',
      path: '/admin/mywork'
    },
    {
      name: 'Calendar',
      icon: 'fa fa-calendar',
      path: '/admin/calendar'
    },
    {
      name: 'Dashboard',
      icon: 'ti-pie-chart',
      path: '/admin/dashboard'
    },
    {
      name: 'User Profile',
      icon: 'fa fa-user',
      path: '/admin/stats'
    },
    {
      name: 'Icons',
      icon: 'ti-pencil-alt2',
      path: '/admin/icons'
    }
  ],
  displaySidebar (value) {
    this.showSidebar = value
  }
}

const SidebarPlugin = {

  install (Vue) {
    Vue.mixin({
      data () {
        return {
          sidebarStore: SidebarStore
        }
      }
    })

    Object.defineProperty(Vue.prototype, '$sidebar', {
      get () {
        return this.$root.sidebarStore
      }
    })
    Vue.component('side-bar', Sidebar)
  }
}

export default SidebarPlugin
