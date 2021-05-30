<template>
  <p class="error">{{ errorMsg }}</p>
</template>
<script>
export default {
  props: {
    errorMsg: {
      type: String,
      required: true,
    },
  },
}
</script>
<style lang="scss" scoped>
@import '~/assets/styles/colors.scss';
@import '~/assets/styles/variables.scss';
.error {
  margin-top: 0.5em;
  font-size: $fontM;
  color: $error_color;
}
</style>
