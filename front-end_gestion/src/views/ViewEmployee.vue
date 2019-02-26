<template>
  <div>
    <div class="details">
      <ViewDetailsEmployee/>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import ViewDetailsEmployee from '@/components/ViewDetailsEmployee.vue'

export default {
  name: 'details',
  components: {
    ViewDetailsEmployee
  }
}
</script>
