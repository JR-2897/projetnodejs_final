import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import AddProjects from './views/AddProjects.vue'
import AddEmployees from './views/AddEmployees.vue'
import AddCustomers from './views/AddCustomers.vue'
import ViewCustomer from './views/ViewCustomer.vue'
import ViewProject from './views/ViewProject.vue'
import ViewEmployee from './views/ViewEmployee.vue'
import UpdateEmployee from './views/UpdateEmployee.vue'
import UpdateCustomer from './views/UpdateCustomer.vue'
import UpdateProject from './views/UpdateProject.vue'
import DeleteEmployee from './views/DeleteEmployee.vue'
import DeleteCustomer from './views/DeleteCustomer.vue'
import DeleteProject from './views/DeleteProject.vue'

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
      path: '/ViewProject/:id',
      name: 'ViewProject',
      component: ViewProject
    },
    {
      path: '/ViewEmployee/:id',
      name: 'ViewEmployee',
      component: ViewEmployee
    },
    {
      path: '/UpdateEmployee/:id',
      name: 'UpdateEmployee',
      component: UpdateEmployee
    },
    {
      path: '/UpdateCustomer/:id',
      name: 'UpdateCustomer',
      component: UpdateCustomer
    },
    {
      path: '/UpdateProject/:id',
      name: 'UpdateProject',
      component: UpdateProject
    },
    {
      path: '/DeleteEmployee/:id',
      name: 'DeleteEmployee',
      component: DeleteEmployee
    },
    {
      path: '/DeleteCustomer/:id',
      name: 'DeleteCustomer',
      component: DeleteCustomer
    },
    {
      path: '/DeleteProject/:id',
      name: 'DeleteProject',
      component: DeleteProject
    }
  ]
})
