<template>
  <div id="app">
    <appHeader v-if="header"  />
    <div id="content">
    <router-view v-on:showHeader="showHeader($event)" v-on:hideHeader="hideHeader($event)" />
    </div>
  </div>
</template>

<script>
import Header from './components/Header.vue';


export default {
  components: {
    'appHeader': Header
  },
  data() {
    return {
     header: false
    }
    
  },
  methods: {
    showHeader: function() {
      this.header=true;
    },
    hideHeader: function() {
      this.header=false;
    }
  }
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
