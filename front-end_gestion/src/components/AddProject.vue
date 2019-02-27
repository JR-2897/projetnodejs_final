<template>
	<div>
		<h1>Formulaire ajout</h1>

		<form class="create-project">
			<div class="form-group">
				<label>Nom</label>
				<input type="text" v-model="name">
			</div>

			<div class="form-group">
				<label>Description</label>
				<input type="text" v-model="description">
			</div>

			<div class="form-group">
				<label>Date de début</label>
				<input type="date" v-model="begin_date">
			</div>

			<div class="form-group">
				<label>Date de fin</label>
				<input type="date" v-model="end_date">
			</div>

      <div class="form-group">
				<label>Coût total</label>
				<input type="number" v-model="total_cost">
			</div>

      <div class="form-group">
				<label>Statut</label>
        <br>
				<input type="radio" value="Annulé" v-model="status"> Annulé
        <input type="radio" value="Terminé" v-model="status"> Terminé
        <input type="radio" value="En cours de réalisation" v-model="status"> En cours de réalisation
        <input type="radio" value="Prospect" v-model="status"> Prospect
			</div>

			<button type="button" name="button" v-on:click="formData(name, description, begin_date, end_date, total_cost, status)">Envoyer</button>
		</form>
	</div>
</template>

<script>
import ProjectsService from '../services/ProjectsService.vue'

export default {
	name:'AddProject',
	data() {
		return {
			name: "",
			description: "",
			begin_date: "",
			end_date:"",
    	total_cost:"",
    	status:""
		}
	},
	methods: {
		formData: function (name, description, begin_date, end_date, total_cost, status) {
			ProjectsService.createProject(name, description, begin_date, end_date, total_cost, status)
		}
	}
}
</script>
