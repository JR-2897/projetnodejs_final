<template>
  <div>
    <div class="details">
      <DeleteEmployee/>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import DeleteEmployee from '@/components/DeleteEmployee.vue'

export default {
  name: 'details',
  components: {
    DeleteEmployee
  }
}
</script>
