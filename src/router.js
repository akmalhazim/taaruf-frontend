import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Show from './components/view'
import Create from './components/create'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'Show Profile',
      component: Show,
      props: {
        backend: 'http://taaruf-backend.test'
      }
    },
    {
      path: '/profile/new',
      name: "Create Profile",
      component: Create,
      props: {
          backend: 'http://taaruf-backend.test'
      }
    }
  ]
})
