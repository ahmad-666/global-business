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
      type: [String, Array],
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
  padding: 4em;
  background-color: darken(white, 5%);
  transition: all 0.3s linear;
  &:hover {
    background-color: $black;
    transform: translateY(-1em);
    .icon {
      color: white;
    }
    .title {
      color: white;
    }
    .desc {
      color: white;
    }
    .link {
      color: white;
    }
  }
  .indexNum {
    width: 2.5em;
    height: 2.5em;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    background-color: $primaryColor;
    font-weight: 700;
    font-size: $fontL;
    position: absolute;
    left: 0;
    transform: translate(-50%, 0%);
  }
  .icon {
    color: $grey;
    font-size: $fontXL + 1em;
  }
  .title {
    margin-top: 1em;
    font-size: $fontL + 0.5em;
    color: $black_light;
    font-weight: lighter;
  }
  .desc {
    margin-top: 1em;
    color: $grey;
    font-size: $fontM;
    line-height: 1.75em;
  }
  .link {
    font-size: $fontM;
    color: $grey;
    margin-top: 2em;
    display: flex;
    align-items: center;
    .arrow {
      margin-left: 1em;
    }
  }
}
</style>
