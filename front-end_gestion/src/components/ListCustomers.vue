<template>
  <div>
    <h1>Liste des clients</h1>
    <div class="customers-list">
      <table>
        <tr>
          <th>Nom de l'entreprise</th>
          <th>Détails</th>
        </tr>
        <tr v-for="customer in customers">
          <td>{{customer.company}}</td>
          <td><router-link :to="{ name: 'ViewCustomer', params: { id: customer._id}}">Voir les détails du client</router-link></td>
        </tr>
      </table>
    </div>
    <div>
      <a href="/AddCustomers">Ajouter un client</a>
    </div>
  </div>
</template>
<script>
import CustomersService from '../services/CustomersService.vue'

export default {
  data () {
    return {
      customers: []
    }
  },
  created (customers) {
    CustomersService.getCustomers()
    .then((data) => {
      this.customers = data
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
