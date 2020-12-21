<template>
<main>
  <h2>{{collection.toUpperCase()}}</h2>
  <p>{{filter}}</p>
  <nav>
    <button v-on:click="changeType('Got')">Got</button>
    <button v-on:click="changeType('Wanted')">Wanted</button>
  </nav>
  <div class="tableDiv" v-if="loaded">
  <table>
    <thead>
      <tr>
        <th>Title</th>
        <th v-if="collType == 'books'">Author</th>
        <th v-else>Format</th>
      </tr>
    </thead>
  <tbody v-if="collType == 'books'">
    <tr  v-for="item in items" v-bind:key="item.book_id">
      <td>{{item.title}}</td>
      <td>{{item.author}}</td>
    </tr>
  </tbody>
  <tbody v-else>
    <tr  v-for="item in items" v-bind:key="item.film_id">
      <td>{{item.title}}</td>
      <td>{{item.format}}</td>
    </tr>
  </tbody>
  </table>
  </div>
  <div v-else>
    <p>Loading</p>
  </div>
</main>
</template>

<script>
export default {
  name: 'Collection',
  data() {
    return {
     filter: "Got",
     collType: 'books',
     items: [],
     loaded: true,
     update: false
    }
  },
  props: ['collection'],
  created: function() {
    console.log('created');
    this.$emit('showHeader');
    
  },
  mounted: function() {
    console.log('mounted');
    this.collType=this.collection;
    this.axios.get('https://ruths-collection-app.herokuapp.com/api/' + this.collection 
    + this.filter)
    .then(res => {
      console.log(res.data)
      // this.loaded=true
      this.items = res.data[this.collection];
    })
  },
  updated: function() {
    if (this.update || this.collType != this.collection) {
    console.log('updated');
    if (this.collType != this.collection) {
      this.filter = 'Got'
    };
    this.collType=this.collection;
    // this.loaded=false;
    this.axios.get('https://ruths-collection-app.herokuapp.com/api/' + this.collection 
    + this.filter)
    .then(res => {
      console.log(res.data)
      // this.loaded=true;
      this.update=false;
      this.items = res.data[this.collection];
    })
  }
  },
  methods: {
    changeType: function(str) {
      this.filter=str;
      this.update=true;
    }
  }
}
</script>

<style lang="scss" scoped>
main {
  background: rgb(247, 142, 142);
  min-height: 100vh;
  h2 {
    margin: 0;
    padding-top: 20px;
  }
  nav {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin: 20px 0;
  } 
  .tableDiv {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
  table {
    justify-content: center;
    border-spacing: 0;
    border-collapse: collapse;
    
    th, td {
      text-align: left;
      border: 1px solid black;
      padding: 5px 20px 5px 5px;
    }
  }
}

</style>