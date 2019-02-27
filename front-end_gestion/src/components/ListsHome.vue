<template>
  <div>
    <h1>{{ msg }}</h1>
    <div class="projects-list">
      <table>
        <tr>
          <th>Nom</th>
          <th>Détails</th>
        </tr>
        <tr v-for="project in projects">
          <td>{{project.name}}</td>
          <td><a href="/ViewProject">Voir les détails du projet</a></td>
        </tr>
      </table>
    </div>
    <div>
      <a href="/AddProjects">Ajouter un projet</a>
    </div>
    <div class="employees-list">
      <table>
        <tr>
          <th>Nom</th>
          <th>Détails</th>
        </tr>
        <tr v-for="employee in employees">
          <td>{{employee.name}}</td>
          <td><a href="/ViewEmployee">Voir les détails du salarié</a></td>
        </tr>
      </table>
    </div>
    <div>
      <a href="/AddCustomers">Ajouter un client</a>
    </div>
    <div class="customers-list">
      <table>
        <tr>
          <th>Nom de l'entreprise</th>
          <th>Détails</th>
        </tr>
        <tr v-for="customer in customers">
          <td>{{customer.company}}</td>
          <td><a href="/ViewCustomer/5c73edb82ac8168ba87dc18a">Voir les détails du client</a></td>
        </tr>
      </table>
    </div>
    <div>
      <a href="/AddCustomers">Ajouter un client</a>
    </div>
  </div>
</template>

<script>
import ProjectsService from '../services/ProjectsService.vue';
import EmployeesService from '../services/EmployeesService.vue';
import CustomersService from '../services/CustomersService.vue';

export default {
  name: 'Home',
  props: {
    msg: String
  },
  data() {
    return {
      projects:[],
      employees:[],
      customers:[]
    }
  },
  created(projects, employees, customers) {
    ProjectsService.getProjects()
    .then((data) => {
      this.projects = data;
    })
    EmployeesService.getEmployees()
    .then((data) => {
      this.employees = data;
    })
    CustomersService.getCustomers()
    .then((data) => {
      this.customers = data;
    })
    .catch(error => {console.log(error)});
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  table {
    width: 100%;
  }
</style>
