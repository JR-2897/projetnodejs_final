<template>
  <div>

  </div>
</template>
<script>
import EmployeesService from '../services/EmployeesService.vue';

export default {
  name: 'Home',
  props: {
    msg: String
  },
  created() {
    let id = this.$route.params.id
    EmployeesService.deleteEmployee(id)
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
