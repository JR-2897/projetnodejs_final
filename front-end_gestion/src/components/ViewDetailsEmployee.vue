<template>
  <div>
    <div class="employee-customer">
      <table class="table">
        <tr>
          <th>Nom</th>
          <th>Prenom</th>
          <th>Username</th>
          <th>Date de naissance</th>
          <th>Adresse</th>
          <th>Téléphone</th>
          <th>Adresse mail</th>
          <th>Poste</th>
          <th>Modification</th>
          <th>Suppression</th>
        </tr>
        <tr>
          <td>{{employee.name}}</td>
          <td>{{employee.first_name}}</td>
          <td>{{employee.username}}</td>
          <td>{{employee.birth_date}}</td>
          <td>{{employee.address.street + ' ' + employee.address.postal_code + ' ' + employee.address.city}}</td>
          <td>{{employee.phone_number}}</td>
          <td>{{employee.email_address}}</td>
          <td>{{employee.office}}</td>
          <td><router-link :to="{ name: 'UpdateEmployee', params: { id: this.$route.params.id}}"><input type="button"></router-link></td>
          <td><router-link :to="{ name: 'DeleteEmployee', params: { id: this.$route.params.id}}"><input type="button"></router-link></td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import EmployeesService from '../services/EmployeesService.vue';

export default {
  name: 'Home',
  props: {
    msg: String
  },
  data() {
    return {
      employee:[]
    }
  },
  created(employee) {
    let id = this.$route.params.id
    EmployeesService.getEmployee(id)
    .then((data) => {
      this.employee = data;
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
