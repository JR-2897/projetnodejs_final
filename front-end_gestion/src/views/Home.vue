<template>
  <div class="home">
    <Home msg="Bienvenue sur site de gestion de projet"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Home from '@/components/Home.vue'

export default {
  name: 'home',
  components: {
    Home
  }
}
</script>
