<template>
  <div>
    <h1>Projet {{project.name}}</h1>
    <div class="project-details">
      <table class="table">
        <tr>
          <th>Nom</th>
          <th>Description</th>
          <th>Date de début</th>
          <th>Date de fin</th>
          <th>Coût total</th>
          <th>Status</th>
          <th>Modification</th>
          <th>Suppression</th>
        </tr>
        <tr>
          <td>{{project.name}}</td>
          <td>{{project.description}}</td>
          <td>{{project.begin_date}}</td>
          <td>{{project.end_date}}</td>
          <td>{{project.total_cost}}</td>
          <td>{{project.status}}</td>
          <td><router-link :to="{ name: 'UpdateProject', params: { id: this.$route.params.id}}"><input type="button"></router-link></td>
          <td><router-link :to="{ name: 'DeleteProject', params: { id: this.$route.params.id}}"><input type="button"></router-link></td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import ProjectsService from '../services/ProjectsService.vue';

export default {
  name: 'Home',
  props: {
    msg: String
  },
  data() {
    return {
      project:[]
    }
  },
  created(project) {
    let id = this.$route.params.id
    ProjectsService.getProject(id)
    .then((data) => {
      this.project = data;
    })
    .catch(error => {console.log(error)});
  }
}
</script>
