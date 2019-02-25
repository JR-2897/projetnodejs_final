<template>
  <div>
    <div class="details">
      <ViewDetailsEmp/>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import ViewEmployee from '@/components/ViewDetailsEmployee.vue'

export default {
  name: 'details',
  components: {
    ViewEmployee
  }
}
</script>
