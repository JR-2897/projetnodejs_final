<template>
  <div>
    <h1>Liste des salariés</h1>
    <div class="employees-list">
      <table class="table">
        <tr>
          <th>Nom</th>
          <th>Détails</th>
        </tr>
        <tr v-for="employee in employees">
          <td>{{employee.name}}</td>
          <td><router-link :to="{ name: 'ViewEmployee', params: { id: employee._id}}">Voir les détails du salarié</router-link></td>
        </tr>
      </table>
    </div>
    <div>
      <a href="/AddEmployees">Ajouter un salarié</a>
    </div>
  </div>
</template>
<script>
import EmployeesService from '../services/EmployeesService.vue'

export default {
  data () {
    return {
      employees: []
    }
  },
  created (employees) {
    EmployeesService.getEmployees()
    .then((data) => {
      this.employees = data
    })
    .catch(error => { console.log(error) })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  table {
    width: 100%;
  }
</style>
