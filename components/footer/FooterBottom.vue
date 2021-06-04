<template>
  <div class="bottom">
    <p class="left">Copyright {{ year }}</p>
    <nuxt-link to="/" class="middle">GlobalBusiness</nuxt-link>
    <p class="right">All Rights Reserved</p>
  </div>
</template>
<script>
export default {
  computed: {
    year() {
      return new Date().getFullYear()
    },
  },
}
</script>
<style lang="scss" scoped>
@import '~/assets/styles/colors.scss';
@import '~/assets/styles/variables.scss';
.bottom {
  background-color: $footer_bottom_color;
  padding: 2em;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  .left,
  .right {
    font-size: $fontM + 0.2em;
    color: white;
  }
  .right {
    margin-left: 0.5em;
  }
  .middle {
    color: $primaryColor;
    font-size: $fontM + 0.2em;
    margin-left: 0.5em;
  }
}
</style>
