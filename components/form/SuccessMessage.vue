<template>
  <p class="success">{{ successMsg }}</p>
</template>
<script>
export default {
  props: {
    successMsg: {
      type: String,
      required: true,
    },
  },
}
</script>
<style lang="scss" scoped>
@import '~/assets/styles/colors.scss';
@import '~/assets/styles/variables.scss';
.success {
  display: inline-block;
  margin-top: 0.5em;
  font-size: $fontM + 0.2em;
  background-color: $success_color;
  color: white;
  padding: 0.35em 1.5em;
  text-align: center;
  border-radius: 0.5em;
}
</style>
