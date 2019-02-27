<template>
  <div>

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
      customer:[]
    }
  },
  /*created(employee) {
    let id = this.$route.params.id
    EmployeesService.getEmployee(id)
    .then((data) => {
      this.employee = data;
    })
    .catch(error => {console.log(error)});
  }*/
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  table {
    width: 100%;
  }
</style>
