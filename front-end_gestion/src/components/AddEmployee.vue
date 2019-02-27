<template>
  <div>
    <h1>Formulaire ajout</h1>

    <form class="create-employee">
      <div class="form-group">
        <label>Nom</label>
        <input type="text" v-model="name">
      </div>

      <div class="form-group">
        <label>Prénom</label>
        <input type="text" v-model="first_name">
      </div>

      <div class="form-group">
        <label>Username</label>
        <input type="text" v-model="username">
      </div>

      <div class="form-group">
        <label>Date de naissance</label>
        <input type="date" v-model="birth_date">
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
        <label>Téléphone</label>
        <input type="text" v-model="phone_number">
      </div>

      <div class="form-group">
        <label>Adresse mail</label>
        <input type="text" v-model="email_address">
      </div>

      <div class="form-group">
        <label>Poste</label>
        <input type="radio" value="Chef de projet" v-model="office"> Chef de projet
        <input type="radio" value="Développeur" v-model="office"> Développeur
        <input type="radio" value="Commercial" v-model="office"> Commercial
        <input type="radio" value="Intégrateur" v-model="office"> Intégrateur
      </div>

      <button type="button" name="button" v-on:click="formData(name, first_name, username, street, city, postal_code, phone_number, email_address, office)">Envoyer</button>
    </form>
  </div>
</template>

<script>
import EmployeesService from '../services/EmployeesService.vue'

export default {
  name: 'AddEmployee',
  data () {
    return {
      name: '',
      first_name: '',
      username: '',
      address: {
        street: '',
        city: '',
        postal_code: ''
      },
      phone_number: '',
      email_address: '',
      office: ''
    }
  },
  methods: {
    formData: function (name, first_name, username, street, city, postal_code, phone_number, email_address, office) {
      EmployeesService.createEmployee(name, first_name, username, street, city, postal_code, phone_number, email_address, office)
    }
  }
}
</script>
