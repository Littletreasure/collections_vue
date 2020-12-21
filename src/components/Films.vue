<template>
<main>
  <h2>Films</h2>
  <nav>
    <p v-on:click="type='Got'">Got</p>
    <p v-on:click="type='Wanted'">Wanted</p>
  </nav>
  <table>
    <thead>
      <tr>
        <th>Title</th>
        <th>Format</th>
      </tr>
    </thead>
  <tbody >
    <tr v-for="film in films" v-bind:key="film.film_id">
      <td>{{film.title}}</td>
      <td>{{film.format}}</td>
    </tr>
  </tbody>
  </table>
</main>
</template>

<script>
export default {
  name: 'Films',
  data() {
    return {
     type: "Got",
     films: []
    }
  },
  created: function() {
    this.$emit('showHeader')
  },
  mounted: function() {
    this.axios.get('https://ruths-collection-app.herokuapp.com/api/films' 
    + this.type)
    .then(res => {
      this.films = res.data.films
    })
  },
  updated: function() {
    this.axios.get('https://ruths-collection-app.herokuapp.com/api/films' 
    + this.type)
    .then(res => {
      this.films = res.data.films
    })
  },
  
}
</script>

<style lang="scss" scoped>

</style>