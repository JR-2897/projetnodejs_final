<template>
	<div>
  	<div class="formulaire">
    		<AddProject/>
 		</div>
  </div>
</template>

<script>
// @ is an alias to /src
import AddProject from '@/components/AddProject.vue'

export default {
  name: 'formulaire',
  components: {
    AddProject
  }
}
</script>
