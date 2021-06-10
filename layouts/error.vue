<template>
  <div class="error">
    <p class="errorText">{{ error.message }}</p>

    <lottie-animation
      path="jsons/404.json"
      :loop="true"
      :auto-play="true"
      :speed="1"
      :width="500"
      :height="500"
    >
    </lottie-animation>
    <nuxt-link to="/" class="link">Home</nuxt-link>
  </div>
</template>
<script>
export default {
  layout: 'errorLayout',
  props: {
    error: {
      type: Object,
      default: () => {
        return {}
      },
    },
  },
}
</script>
<style lang="scss" scoped>
.error {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.link {
  margin-top: 0em;
  background-color: royalblue;
  color: white;
  font-size: 2em;
  padding: 0.5em 2em;
  border-radius: 0.75em;
  margin-bottom: 2em;
}
.errorText {
  font-size: 3em;
  color: crimson;
  margin-bottom: 2em;
}
</style>
