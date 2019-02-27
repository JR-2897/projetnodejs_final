<template>
  <div>
    <div class="details">
      <DeleteProject/>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import DeleteProject from '@/components/DeleteProject.vue'

export default {
  name: 'details',
  components: {
    DeleteProject
  }
}
</script>
