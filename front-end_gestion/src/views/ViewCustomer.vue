<template>
  <div>
    <div class="details">
      <ViewDetailsCustomer/>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import ViewDetailsCustomer from '@/components/ViewDetailsCustomer.vue'

export default {
  name: 'details',
  components: {
    ViewDetailsCustomer
  }
}
</script>
