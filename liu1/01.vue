<template></template>

<script>
export default {
  data () {
    return {
      timer: null
    }
  },
  mouted () {
    this.timer = setInterval(() => { }, 1000)
    this.$once('hook:beforeDestory', () => { clearInterval(this.timer) })
  }
}
</script>

<style>
</style>