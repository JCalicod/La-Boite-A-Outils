<template>
  <div class="home">
      <Category/>
  </div>
</template>

<script>
import Category from './Category.vue';

export default {
  name: 'Home',
  components: {
      Category
  }, 
  data: () => {
      return {
        title: 'Derniers jeux'
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    
</style>
