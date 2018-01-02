import ContentsLayout from '../components/Contents/Layout/ContentLayout.vue'
// GeneralViews
import NotFound from '../components/GeneralViews/NotFoundPage.vue'

// Admin pages
import Overview from 'src/components/Contents/Views/Overview.vue'
import Dashboard from 'src/components/Contents/Views/Dashboard.vue'
import UserProfile from 'src/components/Contents/Views/UserProfile.vue'
import Notifications from 'src/components/Contents/Views/Notifications.vue'
import Icons from 'src/components/Contents/Views/Icons.vue'
import Maps from 'src/components/Contents/Views/Maps.vue'
import Typography from 'src/components/Contents/Views/Typography.vue'
import TableList from 'src/components/Contents/Views/TableList.vue'

const routes = [
  {
    path: '/',
    component: ContentsLayout,
    redirect: '/admin/overview'
  },
  {
    path: '/admin',
    component: ContentsLayout,
    redirect: '/admin/stats',
    children: [
      {
        path: 'overview',
        name: 'Overview',
        component: Overview
      },
      {
        path: 'mywork',
        name: 'My Work',
        component: Dashboard
      },
      {
        path: 'calendar',
        name: 'Calendar',
        component: Dashboard
      },
      {
        path: 'dashboard',
        name: 'Dashboard',
        component: Dashboard
      },
      {
        path: 'stats',
        name: 'User Profile',
        component: UserProfile
      },
      {
        path: 'notifications',
        name: 'Notifications',
        component: Notifications
      },
      {
        path: 'icons',
        name: 'Icons',
        component: Icons
      },
      {
        path: 'maps',
        name: 'Maps',
        component: Maps
      },
      {
        path: 'typography',
        name: 'Typography',
        component: Typography
      },
      {
        path: 'table-list',
        name: 'Table List',
        component: TableList
      }
    ]
  },
  { path: '*', component: NotFound }
]

/**
 * Asynchronously load view (Webpack Lazy loading compatible)
 * The specified component must be inside the Views folder
 * @param  {string} name  the filename (basename) of the view to load.
function view(name) {
   var res= require('../components/Contents/Views/' + name + '.vue');
   return res;
};**/

export default routes
