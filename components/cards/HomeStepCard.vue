<template>
  <div class="stepCard">
    <p class="indexNum">{{ indexNum }}</p>
    <font-awesome-icon :icon="icon" class="icon"></font-awesome-icon>
    <h6 class="title">{{ title }}</h6>
    <p class="desc">{{ desc }}</p>
    <nuxt-link :to="link" class="link">
      <p>Read More</p>
      <font-awesome-icon class="arrow" icon="chevron-right"></font-awesome-icon>
    </nuxt-link>
  </div>
</template>
<script>
export default {
  props: {
    indexNum: {
      type: Number,
      required: true,
    },
    icon: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    link: {
      type: String,
      default: '/',
    },
  },
}
</script>
<style lang="scss" scoped>
@import '~/assets/styles/colors.scss';
@import '~/assets/styles/variables.scss';
.stepCard {
  width: 100%;
  position: relative;
  padding: 4em 2em;
  background-color: darken(white, 5%);
  .indexNum {
    width: 5em;
    height: 5em;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    background-color: $primaryColor;
    font-weight: 700;
    font-size: $fontXL;
    position: absolute;
    left: 0;
    top: 50%;
    transform: translate(-50%, -50%);
  }
  .icon {
    color: $black_light;
    font-size: $fontL;
  }
  .title {
    margin-top: 2em;
    font-size: $fontL + 0.5em;
    color: $black_light;
  }
  .desc {
    margin-top: 1em;
    color: $grey;
    font-size: $fontM;
  }
  .link {
    font-size: $fontM;
    color: $grey;

    .arrow {
      margin-left: 1em;
    }
  }
}
</style>
