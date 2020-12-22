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
      <td id="close" v-on:click="delItem(item.book_id)" >x</td>
    </tr>
  </tbody>
  <tbody v-else>
    <tr  v-for="item in items" v-bind:key="item.film_id">
      <td>{{item.title}}</td>
      <td>{{item.format}}</td>
      <td id="close" v-on:click="delItem(item.film_id)" >x</td>
    </tr>
  </tbody>
  </table>
  
  </div>
  <div v-else>
    <p class="loading">Loading ...</p>
  </div>
  <div class="addForm">
    <button v-on:click="showAdd" v-if="!addForm">Add {{collType.slice(0, -1)}}</button>
    <addItem v-else v-bind:collType="collType" v-bind:filter="filter" v-on:close="addForm=false" v-on:onAdd="addItem" />
  </div>
</main>
</template>

<script>
import {mixin} from '../utils/mixin'
import AddItem from './AddItem.vue'

export default {
  components: {
    'addItem': AddItem
  },
  mixins: [mixin],
  name: 'Collection',
  data() {
    return {
     filter: "Got",
     collType: 'books',
     items: [],
     loaded: false,
     addForm: false
    }
  },
  props: ['collection'],
  created: function() {
    this.$emit('showHeader');
    
  },
  mounted: function() {
    this.collType=this.collection;
    this.getItems(this.collection, this.filter)
    .then(res => {
      this.loaded=true;
      this.items= res[this.collection];
    }).catch(err => console.log(err))
  },
  updated() {
    if (this.collType != this.collection) {
      this.collType=this.collection;
      this.filter= 'Got';
      this.loaded=false;
      this.addForm=false;
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
      this.addForm=false;
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
        
    },
    showAdd: function() {
      this.addForm=true;
    },
    addItem: function(title, string) {
      this.loaded=false;
      this.addForm=false;
      this.postItem(this.collection, this.filter, title, string)
      .then(res => {
        this.loaded=true;
        this.items.push(res)
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
    text-align: center;
  }
  .loading {
    text-align: center;
    color: red;
  }
  nav {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin: 20px 0;
  } 
  .tableDiv {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  table {
    justify-content: center;
    border-spacing: 0;
    border-collapse: collapse;
    margin-bottom: 30px;

    #close {
      border: none;
      color: red;
      cursor: pointer;
    }
    th, td {
      text-align: left;
      border: 1px solid black;
      padding: 5px 20px 5px 5px;
    }
  }
  .addForm {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  }
  button {
    margin: 20px 0;
  }
}

</style>