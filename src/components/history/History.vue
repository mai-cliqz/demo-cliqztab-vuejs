<template>
  <div class="history">
    <span>{{ msg }}</span>
  </div>
</template>

<script>
export default {
  name: 'history',
  props: ['history'],
  data () {
    return {
      msg: 'History @_@'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.home {
  display: none !important;
}
</style>
