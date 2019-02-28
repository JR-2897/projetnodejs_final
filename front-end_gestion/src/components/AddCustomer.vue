<template>
	<div>
		<h1>Formulaire ajout</h1>

		<form class="create-employee">
			<div class="form-group">
				<label>Nom de l'entreprise</label>
				<input type="text" v-model="company">
			</div>

      <div class="form-group">
				<label>Rue</label>
				<input type="text" v-model="street">
        <label>Ville</label>
				<input type="text" v-model="city">
        <label>Code Postal</label>
				<input type="number" v-model="postal_code">
			</div>

      <div class="form-group">
				<label>Nom</label>
				<input type="text" v-model="name">
        <label>Prénom</label>
				<input type="text" v-model="first_name">
        <label>Téléphone</label>
				<input type="text" v-model="phone_number">
        <label>Mail</label>
				<input type="text" v-model="email_address">
			</div>

			<div class="form-group">
				<label>Secteur d'activité</label>
				<input type="text" v-model="business_line">
			</div>

			<button type="button" name="button" v-on:click="formData(company, street, city, postal_code, name, first_name, phone_number, email_address, business_line)">Envoyer</button>
		</form>
	</div>
</template>

<script>
import CustomersService from '../services/CustomersService.vue'

export default {
	name:'AddCustomer',
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
			CustomersService.createCustomer(company, street, city, postal_code, name, first_name, phone_number, email_address, business_line)
		}
	}
}
</script>
