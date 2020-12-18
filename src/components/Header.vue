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
ul{
    list-style-type: none;
    text-align: center;
    margin: 0;
}
li{
    display: inline-block;
    margin: 0 10px;
}
a{
    color: black;
    text-decoration: none;
    padding: 6px 8px;
    border-radius: 10px;
}
</style>