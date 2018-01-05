import Sidebar from './SideBar.vue'

const SidebarStore = {
  showSidebar: false,
  sidebarLinks: [
    {
      name: 'Dashboard',
      icon: 'fa fa-tachometer',
      path: '/admin/dashboard'
    },
    {
      name: 'My Work',
      icon: 'fa fa-files-o',
      path: '/admin/mywork'
    },
    {
      name: 'Calendar',
      icon: 'fa fa-calendar',
      path: '/admin/calendar'
    },
    {
      name: 'Chart',
      icon: 'fa fa-pie-chart',
      path: '/admin/dashboard'
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
