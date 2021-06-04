<template>
  <div class="homeCounter">
    <div class="left">
      <div class="titles">
        <h6 class="title">Dollar is the best</h6>
        <h6 class="title">choice for you if:</h6>
      </div>
      <ul>
        <li v-for="list in lists" :key="list.id">{{ list.txt }}</li>
      </ul>
    </div>
    <div class="right">
      <h6 class="title">We're Fulfilled</h6>
      <base-line width="8em"></base-line>
      <p class="txt">
        Here is 3 Easy Steps to Busy & Sell Dollar. Lorem Ipsum has been the
        industry's standard dummy text ever since the 1500s, when an unknown.
      </p>
      <div class="counterItems">
        <div v-for="item in counterItems" :key="item.id" class="counterItem">
          <pricing-counter
            :icon="item.icon"
            :final-val="item.finalVal"
            :duration="item.duration"
            :label="item.label"
          ></pricing-counter>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import PricingCounter from '~/components/PricingCounter.vue'
export default {
  components: {
    PricingCounter,
  },
  data() {
    return {
      lists: [],
    }
  },
  fetch() {
    this.lists = [
      {
        id: 1,
        txt: 'Simply dummy text of the Lorem Ipsum is printing and type setting.',
      },
      {
        id: 2,
        txt: 'Dummy text of the printing and typesetting industry.',
      },
      {
        id: 3,
        txt: 'Text of the printing and typesetting industry Lorem Ipsum has been.',
      },
      {
        id: 4,
        txt: 'Ipsum has been the industrys standard dummy since the 1500s,',
      },
      {
        id: 5,
        txt: 'Dummy text of the printing and typesetting industry.',
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
@import '~/assets/styles/variables.scss';
@import '~/assets/styles/colors.scss';
.homeCounter {
  width: 100%;
  padding: 5em $header_padding;
  display: flex;
  //   align-items: center;
  background-color: $black;
  .left {
    flex: 1 1;
    .titles {
      .title {
        margin-top: 0em;
        font-size: $fontXL + 1em;
        font-weight: 700;
        &:nth-child(1) {
          color: white;
        }
        &:nth-child(2) {
          color: $primaryColor;
        }
      }
    }
    ul {
      width: 100%;
      margin-top: 4em;
      li {
        position: relative;
        padding-left: 1.5em;
        font-size: $fontM + 0.15em;
        color: white;
        margin-top: 1em;
        &::before {
          content: '';
          width: 1em;
          height: 1em;
          position: absolute;
          top: 50%;
          left: 0;
          transform: translateY(-50%);
          border-radius: 50%;
          border: 0.15em solid $primaryColor;
        }
      }
    }
  }
  .right {
    flex: 1 1;
    .title {
      font-size: $fontXL + 1em;
      font-weight: 700;
      color: white;
    }
    .txt {
      margin-top: 2em;
      font-size: $fontM;
      color: white;
    }
    .counterItems {
      width: 100%;
      margin-top: 2em;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      .counterItem {
        width: calc((100% - (2 * 3em)) / 2);
        margin: 1.5em;
        > * {
          justify-content: flex-start !important;
        }
      }
    }
  }
}
@media screen and (max-width: 1000px) {
  .homeCounter {
    padding: 5em $header_padding / 2;
  }
}
@media screen and (max-width: 900px) {
  .homeCounter {
    flex-direction: column;
    .left {
      display: flex;
      flex-direction: column;
      ul {
        margin-top: 0;
      }
    }
    .right {
      margin-top: 4em;
    }
  }
}
@media screen and (max-width: 500px) {
  .homeCounter {
    padding: 5em $header_padding / 4;
  }
}
</style>
