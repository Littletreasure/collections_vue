<template>
<main>
  <h2>Films</h2>
</main>
</template>

<script>
export default {
  name: 'Films',
  created: function() {
    this.$emit('showHeader')
  }
}
</script>

<style lang="scss" scoped>

</style>