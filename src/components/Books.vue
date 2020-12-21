<template>
<main>
  <h2>Books</h2>
  <nav>
    <p v-on:click="type='Got'">Got</p>
    <p v-on:click="type='Wanted'">Wanted</p>
  </nav>
  <table>
    <thead>
      <tr>
        <th>Title</th>
        <th>Author</th>
      </tr>
    </thead>
  <tbody >
    <tr v-for="book in books" v-bind:key="book.book_id">
      <td>{{book.title}}</td>
      <td>{{book.author}}</td>
    </tr>
  </tbody>
  </table>
</main>
</template>

<script>
export default {
  name: 'Books',
  data() {
    return {
     type: "Got",
     books: []
    }
  },
  created: function() {
    this.$emit('showHeader')
  },
  mounted: function() {
    this.axios.get('https://ruths-collection-app.herokuapp.com/api/books' 
    + this.type)
    .then(res => {
      this.books = res.data.books
    })
  },
  updated: function() {
    this.axios.get('https://ruths-collection-app.herokuapp.com/api/books' 
    + this.type)
    .then(res => {
      this.books = res.data.books
    })
  },
  methods: {
    
  }
}
</script>

<style lang="scss" scoped>

</style>