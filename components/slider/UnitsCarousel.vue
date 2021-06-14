<template>
  <div class="carousel">
    <base-slider
      :config="homeUnitsCarouselConfig"
      :slides-num="units.length"
      :show-bullets="false"
      :show-arrows="false"
    >
      <li v-for="unit in units" :key="unit.id" class="glide__slide">
        <nuxt-link :to="unit.link">
          <unit-carousel-item
            :img-src="unit.imgSrc"
            :name="unit.name"
            :short-name="unit.shortName"
            :price="unit.price"
            :percent="unit.percent"
          ></unit-carousel-item>
        </nuxt-link>
      </li>
    </base-slider>
  </div>
</template>
<script>
import BaseSlider from '~/components/ui/BaseSlider.vue'
import { homeUnitsCarouselConfig } from '~/configs/slider'
import UnitCarouselItem from '~/components/slider/UnitCarouselItem.vue'
export default {
  components: {
    BaseSlider,
    UnitCarouselItem,
  },
  data() {
    return {
      homeUnitsCarouselConfig,
      units: [],
    }
  },
  fetch() {
    this.units = [
      {
        id: 1,
        link: '/',
        imgSrc: 'imgs/units/unit1.png',
        name: 'Tether',
        shortName: 'USDT',
        price: +(Math.random() * 100000000).toFixed(3),
        percent:
          (Math.random() < 0.5 ? 1 : -1) * +(Math.random() * 100).toFixed(2),
      },
      {
        id: 2,
        link: '/',

        imgSrc: 'imgs/units/unit2.png',
        name: 'Ethereum',
        shortName: 'ETH',
        price: +(Math.random() * 100000000).toFixed(3),
        percent:
          (Math.random() < 0.5 ? 1 : -1) * +(Math.random() * 100).toFixed(2),
      },
      {
        id: 3,
        link: '/',

        imgSrc: 'imgs/units/unit3.png',
        name: 'Waves',
        shortName: 'WAVES',
        price: +(Math.random() * 100000000).toFixed(3),
        percent:
          (Math.random() < 0.5 ? 1 : -1) * +(Math.random() * 100).toFixed(2),
      },
      {
        id: 4,
        link: '/',

        imgSrc: 'imgs/units/unit4.png',
        name: 'Binance Coin',
        shortName: 'BNB',
        price: +(Math.random() * 100000000).toFixed(3),
        percent:
          (Math.random() < 0.5 ? 1 : -1) * +(Math.random() * 100).toFixed(2),
      },
      {
        id: 5,
        link: '/',

        imgSrc: 'imgs/units/unit5.png',
        name: 'Cardano',
        shortName: 'ADA',
        price: +(Math.random() * 100000000).toFixed(3),
        percent:
          (Math.random() < 0.5 ? 1 : -1) * +(Math.random() * 100).toFixed(2),
      },
      {
        id: 6,
        link: '/',

        imgSrc: 'imgs/units/unit6.png',
        name: 'SwissBorg',
        shortName: 'CHSB',
        price: +(Math.random() * 100000000).toFixed(3),
        percent:
          (Math.random() < 0.5 ? 1 : -1) * +(Math.random() * 100).toFixed(2),
      },
      {
        id: 7,
        link: '/',

        imgSrc: 'imgs/units/unit7.png',
        name: 'Wrapped Bitcoin',
        shortName: 'WBTC',
        price: +(Math.random() * 100000000).toFixed(3),
        percent:
          (Math.random() < 0.5 ? 1 : -1) * +(Math.random() * 100).toFixed(2),
      },
      {
        id: 8,
        link: '/',

        imgSrc: 'imgs/units/unit8.png',
        name: 'SushiSwap',
        shortName: 'SUSHI',
        price: +(Math.random() * 100000000).toFixed(3),
        percent:
          (Math.random() < 0.5 ? 1 : -1) * +(Math.random() * 100).toFixed(2),
      },
      {
        id: 9,
        link: '/',

        imgSrc: 'imgs/units/unit9.png',
        name: 'XRP',
        shortName: 'XRP',
        price: +(Math.random() * 100000000).toFixed(3),
        percent:
          (Math.random() < 0.5 ? 1 : -1) * +(Math.random() * 100).toFixed(2),
      },
      {
        id: 10,
        link: '/',

        imgSrc: 'imgs/units/unit10.png',
        name: 'DodgeCoin',
        shortName: 'DODGE',
        price: +(Math.random() * 100000000).toFixed(3),
        percent:
          (Math.random() < 0.5 ? 1 : -1) * +(Math.random() * 100).toFixed(2),
      },
      {
        id: 11,
        link: '/',

        imgSrc: 'imgs/units/unit11.png',
        name: 'Bitcoin',
        shortName: 'BtC',
        price: +(Math.random() * 100000000).toFixed(3),
        percent:
          (Math.random() < 0.5 ? 1 : -1) * +(Math.random() * 100).toFixed(2),
      },
    ]
  },
}
</script>
<style lang="scss" scoped>
@import '~/assets/styles/colors.scss';
.carousel {
  background: $home_carousel_bg;
  .glide__slide {
    position: relative;
    padding-left: 1em;
    padding-right: 1em;
    &::before {
      content: '';
      width: 1px;
      height: 2.5em;
      background: darken(white, 50%);
      position: absolute;
      right: -1em;
      top: 50%;
      transform: translateY(-50%);
    }
  }
}
</style>
