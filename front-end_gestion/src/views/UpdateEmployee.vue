<template>
  <div>
    <div class="details">
      <UpdateEmployee/>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import UpdateEmployee from '@/components/UpdateEmployee.vue'

export default {
  name: 'details',
  components: {
    UpdateEmployee
  }
}
</script>
