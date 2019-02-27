import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import AddProjects from './views/AddProjects.vue'
import AddEmployees from './views/AddEmployees.vue'
import AddCustomers from './views/AddCustomers.vue'
import ViewCustomer from './views/ViewCustomer.vue'
import ViewProject from './views/ViewProject.vue'
import ViewEmployee from './views/ViewEmployee.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/addProjects',
      name: 'addProjects',
      component: AddProjects
    },
    {
      path: '/addEmployees',
      name: 'addEmployees',
      component: AddEmployees
    },
    {
      path: '/addCustomers',
      name: 'addCustomers',
      component: AddCustomers
    },
    {
      path: '/ViewCustomer/:id',
      name: 'ViewCustomer',
      component: ViewCustomer
    },
    {
      path: '/ViewProject',
      name: 'ViewProject',
      component: ViewProject
    },
    {
      path: '/ViewEmployee',
      name: 'ViewEmployee',
      component: ViewEmployee
    }
  ]
})
