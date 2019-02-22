<template>
	<div>
  	<div class="formulaire">
    		<AddEmployee/>
 		</div>
  </div>
</template>

<script>
// @ is an alias to /src
import AddProject from '@/components/AddProject.vue'
import AddEmployee from '@/components/AddEmployee.vue'

export default {
  name: 'formulaire',
  components: {
    AddEmployee
  }
}
</script>
