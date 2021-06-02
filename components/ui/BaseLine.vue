<template>
  <div class="line" :style="{ width }"></div>
</template>
<script>
export default {
  props: {
    width: {
      type: String,
      default: '8em',
    },
  },
}
</script>
<style lang="scss" scoped>
@import '~/assets/styles/colors.scss';
.line {
  height: 0.2em;
  margin-top: 2em;
  background-color: $primaryColor;
}
</style>
