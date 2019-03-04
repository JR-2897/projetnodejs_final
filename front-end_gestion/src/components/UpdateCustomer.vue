<template>
	<div>
		<h1>Formulaire modification</h1>

		<form class="create-employee">
			<div class="form-group">
				<label>Nom de l'entreprise</label>
				<input type="text" v-model="company">
			</div>

      <div class="form-group">
				<label>Rue</label>
				<input type="text" v-model="address.street">
        <label>Ville</label>
				<input type="text" v-model="address.city">
        <label>Code Postal</label>
				<input type="number" v-model="address.postal_code">
			</div>

      <div class="form-group">
				<label>Nom</label>
				<input type="text" v-model="contact.name">
        <label>Prénom</label>
				<input type="text" v-model="contact.first_name">
        <label>Téléphone</label>
				<input type="text" v-model="contact.phone_number">
        <label>Mail</label>
				<input type="text" v-model="contact.email_address">
			</div>

			<div class="form-group">
				<label>Secteur d'activité</label>
				<input type="text" v-model="business_line">
			</div>

			<button type="button" name="button" v-on:click="formData(company, address.street, address.city, address.postal_code, contact.name, contact.first_name, contact.phone_number, contact.email_address, business_line)">Envoyer</button>
		</form>
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
			company: '',
      address: {
        street: '',
        city: '',
        postal_code: ''
      },
      contact: {
        name: '',
        first_name: '',
        phone_number: '',
        email_address: ''
      },
      business_line: ''
		}
	},
  methods: {
		formData: function (company, street, city, postal_code, name, first_name, phone_number, email_address, business_line) {
      let id = this.$route.params.id
			CustomersService.createCustomer(id, company, street, city, postal_code, name, first_name, phone_number, email_address, business_line)
		}
	}
}
</script>
