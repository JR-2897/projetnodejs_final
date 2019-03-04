<template>
  <div>
    <h1>Liste des projets</h1>
    <div class="projects-list">
      <table class="table">
        <tr>
          <th>Nom</th>
          <th>Détails</th>
        </tr>
        <tr v-for="project in projects">
          <td>{{project.name}}</td>
          <td><router-link :to="{ name: 'ViewProject', params: { id: project._id}}">Voir les détails du projet</router-link></td>
        </tr>
      </table>
    </div>
    <div>
      <a href="/AddProjects">Ajouter un projet</a>
    </div>
  </div>
</template>
<script>
import ProjectsService from '../services/ProjectsService.vue'

export default {
  data () {
    return {
      projects: []
    }
  },
  created (projects) {
    ProjectsService.getProjects()
    .then((data) => {
      this.projects = data
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
