<template>
  <div>
    <div class="details">
      <UpdateProject/>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import UpdateProject from '@/components/UpdateProject.vue'

export default {
  name: 'details',
  components: {
    UpdateProject
  }
}
</script>
