<template>
  <div class="container">
    <div class="loader">
      <span class="dot"></span>
      <span class="dot"></span>
      <span class="dot"></span>
    </div>
  </div>
</template>
<script>
export default {
  mounted() {
    document.body.classList.add('hide-scroll')
  },
  destroyed() {
    document.body.classList.remove('hide-scroll')
  },
}
</script>
<style lang="scss" scoped>
@import '~/assets/styles/colors.scss';
.container {
  width: 100%;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  background-color: rgba(255, 255, 255, 0.75);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 11;
  .loader {
    display: flex;
    align-items: center;
    .dot {
      width: 2.5em;
      height: 2.5em;
      border-radius: 50%;
      background-color: $primaryColor;
      animation: dotAnime 0.75s ease-in-out infinite alternate;
      transform: scale(0);
      margin: 0 1em;
      &:nth-child(1) {
        animation-delay: 0s;
      }
      &:nth-child(2) {
        animation-delay: 0.25s;
      }
      &:nth-child(3) {
        animation-delay: 0.5s;
      }
      @keyframes dotAnime {
        from {
          transform: scale(0);
        }
        to {
          transform: scale(1);
        }
      }
    }
  }
}
</style>
