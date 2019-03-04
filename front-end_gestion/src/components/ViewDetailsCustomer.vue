<template>
  <div>
    <div class="customers-list">
      <table class="table">
        <tr>
          <th>Nom de l'entreprise</th>
          <th>Adresse</th>
          <th>Contact référent</th>
          <th>Secteur d'activité</th>
          <th>Modification</th>
          <th>Suppression</th>
        </tr>
        <tr>
          <td>{{customer.company}}</td>
          <td>{{customer.address.street + ' ' + customer.address.postal_code + ' ' + customer.address.city}}</td>
          <td>{{customer.contact.name + ' ' + customer.contact.first_name + ' ' + customer.contact.phone_number + ' ' + customer.contact.email_address}}</td>
          <td>{{customer.business_line}}</td>
          <td><router-link :to="{ name: 'UpdateCustomer', params: { id: this.$route.params.id}}"><input type="button"></router-link></td>
          <td><router-link :to="{ name: 'DeleteCustomer', params: { id: this.$route.params.id}}"><input type="button"></router-link></td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import CustomersService from '../services/CustomersService.vue'

export default {
  name: 'Home',
  props: {
    msg: String
  },
  data () {
    return {
      customer: []
    }
  },
  created (customer) {
    let id = this.$route.params.id
    console.log(id)
    CustomersService.getCustomer(id)
    .then((data) => {
      this.customer = data;
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
