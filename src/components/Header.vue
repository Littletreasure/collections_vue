<template>
<header>
  <nav>
  <ul>
  <li><router-link to="/">Home</router-link></li>
  <li><router-link to="/books">Books</router-link></li>
  <li><router-link to="/films">Films</router-link></li>
  </ul>
  </nav>
</header>
</template>

<script>
export default {
  name: 'Header',
  
}
</script>

<style lang="scss" scoped>
header {
  background: gray;
  width: 100%;
  padding: 10px 0;
  ul{
    list-style-type: none;
    text-align: center;
    margin: 0;
    padding: 0;
  }
  li{
    display: inline-block;
    margin: 0 10px;
  }
  a{
    color: white;
    text-decoration: none;
    padding: 6px 8px;
    border-radius: 10px;
  }
  a:hover {
      color: black;
    }
}

</style>