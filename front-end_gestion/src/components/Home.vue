<template>
  <div>
    <h1>{{ msg }}</h1>
    <div class="projects-list">
      <table>
        <tr>
          <th>Name</th>
          <th>Description</th>
          <th>Begin date</th>
          <th>End date</th>
          <th>Total cost</th>
          <th>Status</th>
        </tr>
        <tr v-for="projet in projets">
          <td>{{projet.name}}</td>
          <td>{{projet.description}}</td>
          <td>{{projet.begin_date}}</td>
          <td>{{projet.end_date}}</td>
          <td>{{projet.total_cost}}</td>
          <td>{{projet.status}}</td>
        </tr>
      </table>
    </div>
    <div>
      <a href="/AddProjects">Ajouter un projet</a>
    </div>
  </div>
</template>

<script>
import ProjectsService from '../services/ProjectsService.vue';

export default {
  name: 'ListProjects',
  props: {
    msg: String
  },
  data() {
    return {
      projects:[]
    }
  },
  created(projects) {
    ProjectsService.getProjects()
    .then((data) => {
      this.projects = data;
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
