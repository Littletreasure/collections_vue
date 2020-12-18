<template>
  <div id="app">
    <AppHeader />
    <div id="content">
      
      
    <router-view/>
    </div>
  </div>
</template>

<script>
import Header from './components/Header.vue';


export default {
  components: {
    'AppHeader': Header
  },
  data() {
    return {
     
    }
    
  },
  
};
</script>


<style lang="scss" scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}


</style>
