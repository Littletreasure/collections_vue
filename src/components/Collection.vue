<template>
<main>
  <h2>{{collection.toUpperCase()}} {{filter.toUpperCase()}}</h2>
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
      <td v-on:click="delItem(item.book_id)" style="border: none; color: red">x</td>
    </tr>
  </tbody>
  <tbody v-else>
    <tr  v-for="item in items" v-bind:key="item.film_id">
      <td>{{item.title}}</td>
      <td>{{item.format}}</td>
      <td v-on:click="delItem(item.film_id)" style="border: none; color: red">x</td>
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
import {mixin} from '../utils/mixin'

export default {
  mixins: [mixin],
  name: 'Collection',
  data() {
    return {
     filter: "Got",
     collType: 'books',
     items: [],
     loaded: false
    }
  },
  props: ['collection'],
  created: function() {
    console.log('created');
    this.$emit('showHeader');
    
  },
  mounted: function() {
    this.collType=this.collection;
    this.getItems(this.collection, this.filter)
    .then(res => {
      this.loaded=true;
      this.items= res[this.collection];
    })
  },
  updated() {
    if (this.collType != this.collection) {
      this.collType=this.collection;
      this.filter= 'Got';
      this.loaded=false;
      this.getItems(this.collection, this.filter)
      .then(res => {
        this.loaded=true;
        this.items= res[this.collection];
      })
      .catch(err => console.log(err))
    }
  },
  methods: {
    changeType: function(str) {
      this.loaded=false;
      this.filter=str;
      this.getItems(this.collection, this.filter)
      .then(res => {
        this.loaded=true;
        this.items= res[this.collection];
      })
      .catch(err => console.log(err))
    },
    delItem: function(id) {
      this.loaded=false;
      this.deleteItem(this.collection, this.filter, id)
      .then(res => {
        this.getItems(this.collection, this.filter)
        .then(res => {
          this.loaded=true;
          this.items = res[this.collection]
        })
      })
      .catch(err => console.log(err))
        
    }
  },
   
  
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