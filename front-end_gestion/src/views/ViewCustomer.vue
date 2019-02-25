<template>
  <div>
    <div class="details">
      <ViewCustomer/>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import ViewCustomer from '@/components/ViewDetailsCustomer.vue'

export default {
  name: 'details',
  components: {
    ViewCustomer
  }
}
</script>
