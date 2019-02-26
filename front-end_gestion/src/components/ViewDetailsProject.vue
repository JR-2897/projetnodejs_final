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
    ProjectsService.getProject(id)
    .then((data) => {
      this.project = data;
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
