<template>
<div class="addItem">
  <div class="formContainer">
  <p v-on:click="$emit('close')" class="close">X</p>
  <form>
    <div>
      <label>Title: </label>
      <input type="text" v-model="title" />
    </div>
    <div v-if="collType=='books'">
      <label>Author: </label>
      <input type="text" v-model="author" />
    </div>
    <div v-else>
      <label>Format: </label>
      <input type="text" v-model="format" />
    </div>
  </form>
  <button v-on:click="onAddClick" class="addButton">Add</button>
  </div>
</div>
</template>

<script>
export default {
  name: 'AddItem',
  props: ['collType', 'filter'],
  data() {
    return {
      title: '',
      author: '',
      format: ''
    }
  },
  methods: {
    onAddClick: function() {
      if (this.collType == 'books') {
        this.$emit('onAdd', this.title, this.author)
      } else {
        this.$emit('onAdd', this.title, this.format)
      }
      this.title='';
      this.author='';
      this.format=''
    }
  }
}
</script>

<style lang="scss" scoped>
.addItem {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  .close {
    margin: 0;
    padding: 2px 5px;
    align-self: flex-end;
    cursor: pointer;
  }
  .formContainer {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 80%;
    border: 1px solid green;
    background: aqua;

  }
  form {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 100%;
  }
  .addButton {
    margin: 20px 0;
  }
  input {
    width: 250px;
    padding: 5px;
  }
  @media (max-width: 650px) {
    form {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    form div {
      padding: 10px 0;
    }
    input {
      width: 200px;
    }
  }
}
</style>
