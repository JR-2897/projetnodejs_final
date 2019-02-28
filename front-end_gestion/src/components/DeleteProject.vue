<template>
  <div>

  </div>
</template>
<script>
import ProjectsService from '../services/ProjectsService.vue';

export default {
  name: 'Home',
  props: {
    msg: String
  },
  created() {
    let id = this.$route.params.id
    ProjectsService.deleteProject(id)
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
