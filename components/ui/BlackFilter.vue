<template>
  <div class="blackFilter" @click="removeBlackFilter"></div>
</template>
<script>
export default {
  methods: {
    removeBlackFilter() {
      this.$emit('removeBlackFilter')
    },
  },
}
</script>
<style lang="scss" scoped>
@import '~/assets/styles/colors.scss';
.blackFilter {
  width: 100%;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 10;
  background-color: $black_filter;
}
</style>
