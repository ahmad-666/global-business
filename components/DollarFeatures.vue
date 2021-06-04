<template>
  <div class="dollarFeatures">
    <h6 class="title">Dollar Features</h6>
    <base-line width="10em"></base-line>
    <p class="txt">
      Lorem Ipsum has been the industry's standard dummy text ever since the
      1500s, when an unknown printer took a galley of type and scrambled it to
      make a type specimen book.
    </p>
    <div class="featuresContainer">
      <div class="imgs">
        <img
          src="imgs/particles.png"
          alt="imgs/particles.png"
          class="outer-img"
        />
        <img
          class="inner-img"
          src="imgs/feature/features-img1.png"
          alt="imgs/feature/features-img1.png"
        />
      </div>

      <div class="features">
        <div v-for="feature in features" :key="feature.id" class="feature">
          <dollar-feature
            :dir="feature.dir"
            :img-src="feature.imgSrc"
            :title="feature.title"
            :txt="feature.txt"
          ></dollar-feature>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import DollarFeature from '~/components/DollarFeature.vue'
export default {
  components: {
    DollarFeature,
  },
  data() {
    return {
      features: [],
    }
  },
  fetch() {
    this.features = [
      {
        id: 1,
        dir: 'rtl',
        imgSrc: 'imgs/services/icon/01.png',
        title: 'Fast Transaction',
        txt: 'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.',
      },
      {
        id: 2,
        dir: 'ltr',
        imgSrc: 'imgs/services/icon/02.png',
        title: 'Secure and Stable',
        txt: 'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.',
      },
      {
        id: 3,
        dir: 'rtl',
        imgSrc: 'imgs/services/icon/03.png',
        title: 'Coin Exchange',
        txt: 'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.',
      },
      {
        id: 4,
        dir: 'ltr',
        imgSrc: 'imgs/services/icon/04.png',
        title: 'Mobile Apps',
        txt: 'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.',
      },
      {
        id: 5,
        dir: 'rtl',
        imgSrc: 'imgs/services/icon/05.png',
        title: '24/7 Trading',
        txt: 'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.',
      },
      {
        id: 6,
        dir: 'ltr',
        imgSrc: 'imgs/services/icon/06.png',
        title: 'Free Consulting',
        txt: 'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.',
      },
    ]
  },
}
</script>
<style lang="scss" scoped>
@import '~/assets/styles/colors.scss';
@import '~/assets/styles/variables.scss';
.dollarFeatures {
  width: 100%;
  background-color: darken(white, 2.5%);
  padding: 5em $header_padding;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  .title {
    font-size: $fontXL + 1em;
    color: $black_light;
    font-weight: lighter;
    text-align: center;
  }
  .txt {
    margin-top: 2em;
    font-size: $fontM;
    color: $grey;
    text-align: center;
  }
  .featuresContainer {
    width: 100%;
    position: relative;
    height: 50em;
  }
  .imgs {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 1;
    .outer-img {
      width: auto;
      height: 100%;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%) rotate(0deg);
      animation: rotateAnime 60s linear infinite;
      @keyframes rotateAnime {
        from {
          transform: translate(-50%, -50%) rotate(0deg);
        }
        to {
          transform: translate(-50%, -50%) rotate(360deg);
        }
      }
    }
    .inner-img {
      width: auto;
      height: 20em;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
    }
  }
  .features {
    width: 100%;
    height: 100%;
    position: relative;
    z-index: 2;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    margin-top: 2em;
    .feature {
      width: calc((100% - (2 * 3em)) / 2);
      margin: 1.5em;
      &:nth-child(6n + 1) {
        transform: translateX(-4em);
      }
      &:nth-child(6n + 2) {
        transform: translateX(18em);
      }
      &:nth-child(6n + 3) {
        transform: translateX(-8em);
      }
      &:nth-child(6n + 4) {
        transform: translateX(22em);
      }
      &:nth-child(6n + 5) {
        transform: translateX(-4em);
      }
      &:nth-child(6n + 6) {
        transform: translateX(18em);
      }
    }
  }
}
@media screen and (max-width: 1000px) {
  .dollarFeatures {
    padding: 5em $header_padding / 2;
  }
}
@media screen and (max-width: 850px) {
  .dollarFeatures {
    .featuresContainer {
      height: auto;
    }
    .imgs {
      .outer-img {
        display: none;
      }
      .inner-img {
        left: initial;
        right: 0.5em;
        transform: translate(0, -50%);
      }
    }
    .features {
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      .feature {
        width: 100%;
        margin: 3em 0 0 0;
        transform: translateX(0em) !important;
      }
    }
  }
}
@media screen and (max-width: 500px) {
  .dollarFeatures {
    padding: 5em $header_padding / 4;
    .imgs {
      .inner-img {
        display: none;
      }
    }
  }
}
</style>
