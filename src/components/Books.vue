<template>
<main>
  <h2>Books</h2>
</main>
</template>

<script>
export default {
  name: 'Books',
  created: function() {
    this.$emit('showHeader')
  }
}
</script>

<style lang="scss" scoped>

</style>