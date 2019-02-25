<template>
  <div>
    <div class="customer-details">
      <table>
        <tr>
          <th>Nom</th>
          <th>Description</th>
          <th>Date de début</th>
          <th>Date de fin</th>
          <th>Coût total</th>
          <th>Status</th>
          <th>Détails</th>
        </tr>
        <tr>
          <td>{{project.name}}</td>
          <td>{{project.description}}</td>
          <td>{{project.begin_date}}</td>
          <td>{{project.end_date}}</td>
          <td>{{project.total_cost}}</td>
          <td>{{project.status}}</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import CustomersService from '../services/CustomersService.vue';

export default {
  name: 'Home',
  props: {
    msg: String
  },
  data() {
    return {
      customer:[]
    }
  },
  created(customer) {
    CustomersService.getCustomer(id)
    .then((data) => {
      this.customer = data;
    })
    .catch(error => {console.log(error)});
  }
}
</script>
