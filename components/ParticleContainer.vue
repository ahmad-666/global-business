<template>
  <div class="particleContainer">
    <div class="slider">
      <base-slider
        :config="sliderConfig"
        :slides-num="slides.length"
        :show-bullets="false"
        :show-arrows="false"
      >
        <li v-for="slide in slides" :key="slide.id" class="glide__slide">
          <img :src="slide.imgSrc" :alt="slide.imgSrc" />
        </li>
      </base-slider>
    </div>
    <div class="particlesContainer">
      <particles-canvas :config-path="particlesConfigPath"></particles-canvas>
    </div>
  </div>
</template>
<script>
import BaseSlider from '~/components/ui/BaseSlider.vue'
import ParticlesCanvas from '~/components/ParticlesCanvas.vue'
import { particleSliderConfig } from '~/configs/slider'
export default {
  components: {
    BaseSlider,
    ParticlesCanvas,
  },
  data() {
    return {
      slides: [],
      sliderConfig: particleSliderConfig,
      particlesConfigPath: 'particles.json',
    }
  },
  fetch() {
    this.slides = [
      {
        id: 1,
        imgSrc: 'imgs/clients/white/01.png',
      },
      {
        id: 2,
        imgSrc: 'imgs/clients/white/02.png',
      },
      {
        id: 3,
        imgSrc: 'imgs/clients/white/03.png',
      },
      {
        id: 4,
        imgSrc: 'imgs/clients/white/04.png',
      },
      {
        id: 5,
        imgSrc: 'imgs/clients/white/05.png',
      },
      {
        id: 6,
        imgSrc: 'imgs/clients/white/06.png',
      },
    ]
  },
}
</script>
<style lang="scss" scoped>
@import '~/assets/styles/colors.scss';
@import '~/assets/styles/variables.scss';
.particleContainer {
  width: 100%;
  background-color: $primaryColor;
  position: relative;
  padding: 2em $header_padding;
  .slider {
    position: relative;
    width: 100%;
    z-index: 2;
    .glide__slide {
      height: 10em;
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        width: 100%;
        height: auto;
      }
    }
  }
  .particlesContainer {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 1;
  }
}
@media screen and (max-width: 1000px) {
  .particleContainer {
    padding: 2em $header_padding / 2;
  }
}
@media screen and (max-width: 500px) {
  .particleContainer {
    padding: 2em $header_padding / 4;
  }
}
</style>
