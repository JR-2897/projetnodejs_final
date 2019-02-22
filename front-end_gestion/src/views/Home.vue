<template>
  <div class="home">
    <ListsHome msg="Bienvenue sur site de gestion de projet"/>
  </div>
</template>

<script>
// @ is an alias to /src
import ListsHome from '@/components/ListsHome.vue'

export default {
  name: 'home',
  components: {
    ListsHome
  }
}
</script>
