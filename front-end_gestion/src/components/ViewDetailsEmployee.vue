<template>
  <div>
    <div class="employee-customer">
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
        <tr>
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
    EmployeesService.getEmployee(id)
    .then((data) => {
      this.employee = data;
    })
    .catch(error => {console.log(error)});
  }
}
</script>
