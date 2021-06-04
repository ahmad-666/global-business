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
    title: {
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
  // width: 100%;
  width: 75%;
  .title {
    display: flex;
    align-items: center;
    img {
      width: 6em;
      height: 6em;
    }
    h6 {
      font-size: $fontL + 0.5em;
      color: $black_light;
      margin-left: 0.2em;
      font-weight: lighter;
    }
  }
  .txt {
    margin-top: 0.5em;
    color: $grey;
    font-size: $fontM;
    max-width: 90%;
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
@media screen and (max-width: 850px) {
  .dollarFeature {
    width: 100%;

    .txt {
      max-width: 100%;
    }
  }
  .dollarFeature.reverse {
    .title {
      flex-direction: row;
      img {
        margin-left: 0em;
      }
      h6 {
        margin-left: 0.5em;
      }
    }
    .txt {
      text-align: left;
    }
  }
}
</style>
