<template>
  <div>
    <div class="details">
      <ViewDetailsProject/>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import ViewDetailsProject from '@/components/ViewDetailsProject.vue'

export default {
  name: 'details',
  components: {
    ViewDetailsProject
  }
}
</script>
