<template>
  <div class="homeContactUs">
    <font-awesome-icon class="icon" icon="headset"></font-awesome-icon>
    <h6 class="title">Any Query? Contact Us</h6>
    <div class="infos">
      <div class="info">
        <p>{{ tel }}</p>
      </div>
      <div class="info">
        <p>{{ email }}</p>
      </div>
    </div>
    <p class="txt">
      Lorem Ipsum has been the industry's standard dummy text ever since the
      1500s, when an unknown printer took a galley of type and scrambled it to
      make a type specimen book.
    </p>
  </div>
</template>
<script>
export default {
  computed: {
    tel() {
      return this.$store.getters.tel
    },
    email() {
      return this.$store.getters.email
    },
  },
}
</script>
<style lang="scss" scoped>
@import '~/assets/styles/colors.scss';
@import '~/assets/styles/variables.scss';
.homeContactUs {
  width: 100%;
  background-color: $black;
  padding: 6em $header_padding;
  display: flex;
  flex-direction: column;
  align-items: center;
  .icon {
    font-size: $fontXL + 4em;
    color: white;
  }
  .title {
    margin-top: 0.5em;
    color: $primaryColor;
    font-size: $fontXL + 0.5em;
    font-weight: lighter;
  }
  .txt {
    max-width: 60%;
    text-align: center;
    font-size: $fontM;
    color: white;
    line-height: $line_height1_txt;
    margin-top: 1em;
  }
  .infos {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 2em;
    .info {
      padding: 0 2em;
      &:not(:last-child) {
        border-right: 1px solid white;
      }
      p {
        color: $primaryColor;
        font-size: $fontL;
      }
    }
  }
}
</style>
