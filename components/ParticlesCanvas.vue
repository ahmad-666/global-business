<template>
  <div id="particles"></div>
</template>
<script>
export default {
  props: {
    configPath: {
      type: String,
      required: true,
    },
  },
  mounted() {
    require('particles.js')
    // eslint-disable-next-line no-undef
    particlesJS.load('particles', this.configPath)
  },
}
</script>
<style lang="scss" scoped>
#particles {
  width: 100%;
  height: 100%;
}
</style>
