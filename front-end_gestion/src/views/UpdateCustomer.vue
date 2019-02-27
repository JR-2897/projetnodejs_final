<template>
  <div>
    <div class="details">
      <UpdateCustomer/>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import UpdateCustomer from '@/components/UpdateCustomer.vue'

export default {
  name: 'details',
  components: {
    UpdateCustomer
  }
}
</script>
