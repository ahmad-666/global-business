<template>
  <div class="dollarFeature" :class="{ reverse: dir === 'rtl' }">
    <div class="title">
      <img :src="imgSrc" :alt="imgSrc" />
      <h6>{{ title }}</h6>
    </div>
    <p class="txt">{{ txt }}</p>
  </div>
</template>
<script>
export default {
  props: {
    dir: {
      type: String,
      required: true,
    },
    imgSrc: {
      type: String,
      required: true,
    },
    txt: {
      type: String,
      required: true,
    },
  },
}
</script>
<style lang="scss" scoped>
@import '~/assets/styles/colors.scss';
@import '~/assets/styles/variables.scss';
.dollarFeature {
  width: 100%;
  .title {
    display: flex;
    align-items: center;
    img {
      max-width: 8em;
      height: 6em;
    }
    h6 {
      font-size: $fontL;
      color: $black_light;
      margin-left: 1em;
    }
  }
  .txt {
    margin-top: 0.5em;
    color: $grey_light;
    font-size: $fontM;
  }
}
.dollarFeature.reverse {
  .title {
    flex-direction: row-reverse;
    img {
      margin-left: 1em;
    }
    h6 {
      margin-left: 0;
    }
  }
  .txt {
    text-align: right;
  }
}
</style>
