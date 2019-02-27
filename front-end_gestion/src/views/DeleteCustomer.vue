<template>
  <div>
    <div class="details">
      <DeleteCustomer/>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import DeleteCustomer from '@/components/DeleteCustomer.vue'

export default {
  name: 'details',
  components: {
    DeleteCustomer
  }
}
</script>
