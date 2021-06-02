<template>
  <div class="whyUs">
    <div class="left">
      <img
        src="imgs/about-us/about-img2.png"
        alt="imgs/about-us/about-img2.png"
      />
    </div>
    <div class="right">
      <h6 class="title">Why Choose Us</h6>
      <base-line width="8em"></base-line>
      <p class="txt">
        Lorem Ipsum has been the industry's standard dummy text ever since the
        1500s, when an unknown printer took a galley of type and scrambled it to
        make a type specimen book.
      </p>
      <div class="icons">
        <div v-for="icon in icons" :key="icon.id" class="icon">
          <why-us-icon
            :icon="icon.icon"
            :title="icon.title"
            :txt="icon.txt"
          ></why-us-icon>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import WhyUsIcon from '~/components/WhyUsIcon.vue'
export default {
  components: {
    WhyUsIcon,
  },
  data() {
    return {
      icons: [],
    }
  },
  fetch() {
    this.icons = [
      {
        id: 1,
        icon: 'globe-americas',
        title: 'No Central Authority',
        txt: 'Lorem ipsum madolor sit, consectetur adipisicing elit, eiusmod tempor sicing elit, eiusmod tempor.',
      },
      {
        id: 1,
        icon: 'layer-group',
        title: 'Completely Decentralized',
        txt: 'Lorem ipsum madolor sit, consectetur adipisicing elit, eiusmod tempor sicing elit, eiusmod tempor.',
      },
      {
        id: 3,
        icon: 'share-alt',
        title: 'Peer-to-Peer Network',
        txt: 'Lorem ipsum madolor sit, consectetur adipisicing elit, eiusmod tempor sicing elit, eiusmod tempor.',
      },
    ]
  },
}
</script>
<style lang="scss" scoped>
@import '~/assets/styles/colors.scss';
@import '~/assets/styles/variables.scss';
.whyUs {
  width: 100%;
  background-color: white;
  padding: 5em $header_padding 0 $header_padding;
  display: flex;
  justify-content: space-between;

  .left {
    flex-shrink: 0;
    width: 55em;
    img {
      width: 100%;
      height: 70em;
    }
  }
  .right {
    width: 100%;
    margin-left: 1em;
    .title {
      font-size: $fontXL + 1em;
      color: $black_light;
      font-weight: lighter;
    }
    .txt {
      margin-top: 2em;
      font-size: $fontM;
      color: $grey;
      text-align: center;
    }
    .icons {
      width: 100%;
      .icon {
        width: 100%;
        margin-top: 2em;
      }
    }
  }
}
</style>
