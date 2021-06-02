<template>
  <div class="basePricing">
    <div class="topSection">
      <div class="title">
        <h6>Dollar Pricing</h6>
        <div class="line"></div>
        <p>
          Here is 3 Easy Steps to Busy & Sell Dollar. Lorem Ipsum has been the
          industry's standard dummy text ever since the 1500s, when an unknown
          printer took a galley of type and scrambled it to make a type specimen
          book.
        </p>
      </div>
      <div class="cards">
        <div v-for="plan in plans" :key="plan.planType" class="card">
          <pricing-card
            :plan-type="plan.planType"
            :price="plan.price"
            :features="plan.features"
            :link="plan.link"
          ></pricing-card>
        </div>
      </div>
      <div class="descContainer">
        <p class="desc">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
        <ul class="items">
          <li v-for="item in descItems" :key="item.id" class="item">
            <font-awesome-icon
              icon="hand-point-right"
              class="icon"
            ></font-awesome-icon>
            <p>{{ item.txt }}</p>
          </li>
        </ul>
      </div>
    </div>

    <div class="counterSection">
      <div class="items">
        <div v-for="item in counterItems" :key="item.id" class="item">
          <pricing-counter
            :icon="item.icon"
            :final-val="item.finalVal"
            :duration="item.duration"
            :label="item.label"
          ></pricing-counter>
        </div>
      </div>
    </div>
    <div class="bottomSection">
      <div class="comments">
        <base-comments :comments="comments"></base-comments>
      </div>
    </div>
  </div>
</template>
<script>
import PricingCard from '~/components/cards/PricingCard.vue'
import PricingCounter from '~/components/PricingCounter.vue'
import BaseComments from '~/components/comments/BaseComments.vue'
export default {
  components: {
    PricingCard,
    PricingCounter,
    BaseComments,
  },
  data() {
    return {
      plans: [],
      descItems: [],
      comments: [],
    }
  },
  fetch() {
    this.plans = [
      {
        planType: 'STANDARD',
        price: 9,
        features: [
          { id: 1, name: 'Photoshop', available: true },
          { id: 2, name: 'HTML5 & CSS 5', available: true },
          { id: 3, name: 'Wordpress', available: false },
          { id: 4, name: 'Javascript', available: false },
          { id: 5, name: 'Animation', available: false },
        ],
        link: '/',
      },
      {
        planType: 'MEDIUM',
        price: 29,
        features: [
          { id: 6, name: 'Photoshop', available: true },
          { id: 7, name: 'HTML5 & CSS 5', available: true },
          { id: 8, name: 'Wordpress', available: true },
          { id: 9, name: 'Javascript', available: false },
          { id: 10, name: 'Animation', available: false },
        ],
        link: '/',
      },
      {
        planType: 'PREMIUM',
        price: 59,
        features: [
          { id: 11, name: 'Photoshop', available: true },
          { id: 12, name: 'HTML5 & CSS 5', available: true },
          { id: 13, name: 'Wordpress', available: true },
          { id: 14, name: 'Javascript', available: true },
          { id: 15, name: 'Animation', available: false },
        ],
        link: '/',
      },
      {
        planType: 'ULTIMATE',
        price: 99,
        features: [
          { id: 16, name: 'Photoshop', available: true },
          { id: 17, name: 'HTML5 & CSS 5', available: true },
          { id: 18, name: 'Wordpress', available: true },
          { id: 19, name: 'Javascript', available: true },
          { id: 20, name: 'Animation', available: true },
        ],
        link: '/',
      },
    ]
    this.descItems = [
      {
        txt: 'Simply dummy text of the Lorem Ipsum is printing and type setting.',
        id: 1,
      },
      {
        txt: 'Text of the printing and typesetting industry Lorem Ipsum has been.',
        id: 2,
      },
      {
        txt: 'Dummy text of the printing and typesetting industry.',
        id: 3,
      },
      {
        txt: 'Ipsum has been the industrys standard dummy since the 1500s,',
        id: 4,
      },
      {
        txt: 'Text of the printing and typesetting industry Lorem Ipsum has been.',
        id: 5,
      },
      {
        txt: 'Dummy text of the printing and typesetting industry.',
        id: 6,
      },
    ]
    this.comments = [
      {
        id: 1,
        content:
          'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s.',
        username: 'Rinks Cooper',
        userRank: 'CEO, GlobalBusiness',
        userImgSrc: 'imgs/feedback/01.jpg',
      },
      {
        id: 2,
        content:
          'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s.',
        username: 'JD Scot',
        userRank: 'CEO, GlobalBusiness',
        userImgSrc: 'imgs/feedback/02.jpg',
      },
      {
        id: 3,
        content:
          'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s.',
        username: 'Haris Morgan',
        userRank: 'CEO, GlobalBusiness',
        userImgSrc: 'imgs/feedback/03.jpg',
      },
    ]
  },
  computed: {
    counterItems() {
      return this.$store.getters.counterItems
    },
  },
}
</script>
<style lang="scss" scoped>
@import '~/assets/styles/colors.scss';
@import '~/assets/styles/variables.scss';
.basePricing {
  width: 100%;
  .topSection,
  .bottomSection {
    width: 100%;
    background-color: white;
    padding: 5em $header_padding;
  }
  .title {
    display: flex;
    flex-direction: column;
    align-items: center;
    h6 {
      font-size: $fontXL + 0.5em;
      font-weight: lighter;
      color: $black_light;
    }
    .line {
      width: 8em;
      height: 0.3em;
      margin-top: 1em;
      background-color: $primaryColor;
    }
    p {
      font-size: $fontM;
      color: $grey;
      margin-top: 1em;
      text-align: center;
    }
  }
  .cards {
    width: 100%;
    margin-top: 8em;
    display: flex;
    flex-wrap: wrap;
    align-items: stretch;
    .card {
      width: calc((100% - (4 * 2em)) / 4);
      margin: 1em;
    }
  }
  .descContainer {
    width: 100%;
    margin-top: 3em;
    .desc {
      font-size: $fontM;
      color: $grey;
      line-height: 1.75em;
    }
    .items {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      margin-top: 2em;
      .item {
        width: calc((100% - (2 * 2em)) / 2);
        margin: 1em;
        display: flex;
        align-items: center;
        .icon {
          font-size: $fontL;
          color: $primaryColor;
        }
        p {
          margin-left: 1em;
          color: $grey;
          font-size: $fontM;
        }
      }
    }
  }
  .counterSection {
    width: 100%;
    padding: 4em $header_padding;
    display: flex;
    justify-content: center;
    align-items: center;
    background: url('/imgs/bg/bg-7.jpg') center center no-repeat;
    background-size: cover;
    background-attachment: fixed;
    position: relative;
    &::before {
      content: '';
      width: 100%;
      height: 100%;
      position: absolute;
      left: 0;
      top: 1;
      z-index: 1;
      background-color: rgba(0, 0, 0, 0.75);
    }
    .items {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      position: relative;
      z-index: 2;
      .item {
        width: calc((100% - (4 * 2em)) / 4);
        margin: 1em;
      }
    }
  }
  .comments {
    width: 100%;
    background-color: $section_bg_color;
  }
}
</style>
