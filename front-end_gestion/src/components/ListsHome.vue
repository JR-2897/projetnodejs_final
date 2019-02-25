<template>
  <div>
    <h1>{{ msg }}</h1>
    <div class="projects-list">
      <table>
        <tr>
          <th>Nom</th>
          <th>Description</th>
          <th>Date de début</th>
          <th>Date de fin</th>
          <th>Coût total</th>
          <th>Status</th>
        </tr>
        <tr v-for="project in projects">
          <td>{{project.name}}</td>
          <td>{{project.description}}</td>
          <td>{{project.begin_date}}</td>
          <td>{{project.end_date}}</td>
          <td>{{project.total_cost}}</td>
          <td>{{project.status}}</td>
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
          <th>Prenom</th>
          <th>Username</th>
          <th>Date de naissance</th>
          <th>Adresse</th>
          <th>Téléphone</th>
          <th>Adresse mail</th>
          <th>Poste</th>
        </tr>
        <tr v-for="employee in employees">
          <td>{{employee.name}}</td>
          <td>{{employee.first_name}}</td>
          <td>{{employee.birth_date}}</td>
          <td>{{employee.address.street + employee.address.postal_code + employee.address.city}}</td>
          <td>{{employe.phone_number}}</td>
          <td>{{employee.email_address}}</td>
          <td>{{employee.office}}</td>
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
          <th>Adresse</th>
          <th>Contact référent</th>
          <th>Secteur d'activité</th>
        </tr>
        <tr v-for="customer in customers">
          <td>{{customer.company}}</td>
          <td>{{customer.address.street + customer.address.postal_code + customer.address.city}}</td>
          <td>{{customer.contact.name + customer.contact.first_name + customer.contact.phone_number + customer.contact.email_address}}</td>
          <td>{{customer.business_line}}</td>
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
    EmployeesService.getEmployees()
    CustomersService.getCustomers()
    .then((data) => {
      this.projects = data;
      this.employees = data;
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
