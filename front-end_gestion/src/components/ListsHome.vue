<template>
  <div>
    <h1>{{ msg }}</h1>
    <div>
      <table class="table">
        <tr>
          <th>Nombre de Projets</th>
        </tr>
        <tr>
          <td>{{projects.length}}</td>
        </tr>
      </table>
    </div>
    <div>
      <a href="/ListProjects">Liste des projets</a>
    </div>
    <div>
      <table class="table">
        <tr>
          <th>Nombre de Clients</th>
        </tr>
        <tr>
          <td>{{customers.length}}</td>
        </tr>
      </table>
    </div>
    <div>
      <a href="/ListCustomers">Liste des clients</a>
    </div>
    <div>
      <table class="table">
        <tr>
          <th>Nombre de salariés</th>
        </tr>
        <tr>
          <td>{{employees.length}}</td>
        </tr>
      </table>
    </div>
    <div>
      <a href="/ListEmployees">Liste des salariés</a>
    </div>
  </div>
</template>

<script>
import ProjectsService from '../services/ProjectsService.vue'
import EmployeesService from '../services/EmployeesService.vue'
import CustomersService from '../services/CustomersService.vue'

export default {
  name: 'Home',
  props: {
    msg: String
  },
  data () {
    return {
      projects: [],
      employees: [],
      customers: []
    }
  },
  created (projects, employees, customers) {
    ProjectsService.getProjects()
    .then((data) => {
      this.projects = data
    })
    EmployeesService.getEmployees()
    .then((data) => {
      this.employees = data
    })
    CustomersService.getCustomers()
    .then((data) => {
      this.customers = data
    })
    .catch(error => { console.log(error) })
  }
}
</script>
