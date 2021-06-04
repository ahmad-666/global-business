<template>
  <div class="marketContainer">
    <div class="infos">
      <h6 class="title">Recent Market</h6>
      <base-line width="8em"></base-line>
      <p class="desc">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. Lorem Ipsum is simply dummy
        text of the printing and typesetting industry. Lorem Ipsum has been the
        industry's standard dummy text ever since the 1500s, when an unknown
        printer took a galley of type and scrambled it to make a type specimen
        book.
      </p>
      <div class="btn">
        <base-button size="m" type="button" btn-type="white-bg">
          <p>Read More</p>
        </base-button>
      </div>
    </div>
    <div class="markets">
      <div v-for="market in markets" :key="market.id" class="market">
        <market-card
          :unit="market.unit"
          :percent="market.percent"
          :bid="market.bid"
          :ask="market.ask"
          :spread="market.spread"
        ></market-card>
      </div>
    </div>
  </div>
</template>
<script>
import MarketCard from '~/components/cards/MarketCard.vue'
export default {
  components: {
    MarketCard,
  },
  data() {
    return {
      markets: [],
    }
  },
  fetch() {
    this.markets = [
      {
        id: 1,
        unit: 'EURUSD',
        percent: -0.02,
        bid: {
          val1: 1.08,
          val2: 51,
          val3: 8,
        },
        ask: {
          val1: 1.08,
          val2: 51,
          val3: 8,
        },
        spread: 0.0,
      },
      {
        id: 2,
        unit: 'AUDUSD',
        percent: 0.54,
        bid: {
          val1: 0.63,
          val2: 15,
          val3: 0,
        },
        ask: {
          val1: 0.63,
          val2: 15,
          val3: 4,
        },
        spread: 0.4,
      },
      {
        id: 3,
        unit: 'GBPUSD',
        percent: -0.01,
        bid: {
          val1: 1.22,
          val2: 95,
          val3: 1,
        },
        ask: {
          val1: 1.22,
          val2: 95,
          val3: 5,
        },
        spread: 0.4,
      },
      {
        id: 4,
        unit: 'GBPUSD',
        percent: -0.01,
        bid: {
          val1: 1.22,
          val2: 95,
          val3: 1,
        },
        ask: {
          val1: 1.22,
          val2: 95,
          val3: 5,
        },
        spread: 0.4,
      },
    ]
  },
}
</script>
<style lang="scss" scoped>
@import '~/assets/styles/colors.scss';
@import '~/assets/styles/variables.scss';
.marketContainer {
  width: 100%;
  padding: 5em $header_padding;
  background: url('/imgs/banner-min.png') center center no-repeat;
  background-size: cover;
  background-attachment: fixed;
  display: flex;
  align-items: center;
  .infos {
    width: 100%;
    .title {
      font-size: $fontXL + 1em;
      color: white;
      font-weight: lighter;
    }
    .desc {
      font-size: $fontM;
      color: darken(white, 3%);
      margin-top: 1em;
      line-height: $line_height1_txt;
    }
    .btn {
      margin-top: 2em;
      p {
        color: $grey;
      }
    }
  }
  .markets {
    flex-shrink: 0;
    width: 60em;
    display: flex;
    align-items: stretch;
    flex-wrap: wrap;
    margin-left: 3em;
    .market {
      width: calc((100% - (2 * 2em)) / 2);
      margin: 1em;
    }
  }
}
@media screen and (max-width: 1000px) {
  .marketContainer {
    padding: 5em $header_padding / 2;
  }
}
@media screen and (max-width: 850px) {
  .marketContainer {
    flex-direction: column;
    justify-content: center;
    align-items: start;
    .infos {
      display: flex;
      flex-direction: column;
      align-items: center;
      .btn {
        margin-top: 0.5em;
      }
    }
    .markets {
      width: 100%;
      margin-left: 0;
      margin-top: 2em;
      .market {
        width: calc((100% - (2 * 2em)) / 2);
        margin: 1em;
      }
    }
  }
}
@media screen and (max-width: 500px) {
  .marketContainer {
    padding: 5em $header_padding / 4;

    .markets {
      .market {
        width: 100%;
      }
    }
  }
}
</style>
