<template>
	<div>
  	<div class="formulaire">
    		<AddCustomer/>
 		</div>
  </div>
</template>

<script>
// @ is an alias to /src
import AddCustomer from '@/components/AddCustomer.vue'

export default {
  name: 'formulaire',
  components: {
    AddCustomer
  }
}
</script>
