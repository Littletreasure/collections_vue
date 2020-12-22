<template>
  <div class="home">
    <h1>Welcome to Ruth's Collection App</h1>
    <p>An app to keep track of my books and films!</p>
    <div class="buttons">
      <router-link to="/books" class="button">
        <p>Books</p>
        <img src="../assets/books.png" />
      </router-link>
      <router-link to="/films" class="button">
        <p>Films</p>
        <img src="../assets/cd_dvd.png" />
      </router-link>
  </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  created() {
    this.$emit('hideHeader');
  }
}

</script>

<style lang="scss" scoped>
.home {
  text-align: center;
}
.buttons {
  display: flex;
  flex-direction: row;
  justify-content: center;
}
.button {
  width: 100px;
  background: rgb(203, 202, 202);
  margin: 20px;
  text-decoration: none;
  img {
    width: 50px;
    padding-bottom: 20px;
  }
  
}
</style>