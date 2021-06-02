<template>
  <div class="marketCard" :class="{ negative: percent < 0 }">
    <div class="title">
      <h6>{{ unit }}</h6>
      <div class="percent">
        <p>{{ percent }}</p>
        <font-awesome-icon
          class="icon"
          :icon="percent >= 0 ? 'fa-chevronUp' : 'fa-chevronDown'"
        ></font-awesome-icon>
      </div>
    </div>
    <div class="content">
      <div class="sections">
        <div class="section">
          <div class="left">
            <p class="subTitle">Bid</p>
            <p class="val1">{{ bid.val1 }}</p>
          </div>
          <div class="right">
            <p class="val2">{{ bid.val2 }}</p>
            <p class="val3">{{ bid.val3 }}</p>
          </div>
        </div>
        <div class="section">
          <div class="left">
            <p class="subTitle">Ask</p>
            <p class="val1">{{ ask.val1 }}</p>
          </div>
          <div class="right">
            <p class="val2">{{ ask.val2 }}</p>
            <p class="val3">{{ ask.val3 }}</p>
          </div>
        </div>
      </div>
      <div class="info">
        <div class="spread">
          <p class="spreadTitle">Spread</p>
          <p class="spreadVal">{{ spread }}</p>
        </div>
        <div class="btns">
          <div class="btn-buy">
            <base-button
              type="button"
              btn-type="market-card"
              size="s"
              @clickHandler="buyHandler"
            >
              <p>Buy</p>
            </base-button>
          </div>
          <div class="btn-sell">
            <base-button
              type="button"
              btn-type="market-card"
              size="s"
              @clickHandler="SellHandler"
            >
              <p>Sell</p>
            </base-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    unit: {
      type: String,
      required: true,
    },
    percent: {
      type: Number,
      required: true,
    },
    bid: {
      type: Object,
      required: true,
    },
    ask: {
      type: Object,
      required: true,
    },
    spread: {
      type: Number,
      required: true,
    },
  },
}
</script>
<style lang="scss" scoped>
@import '~/assets/styles/colors.scss';
@import '~/assets/styles/variables.scss';
.marketCard {
  width: 100%;
  overflow: hidden;
  border-top-left-radius: 1.5em;
  border-top-right-radius: 1.5em;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;

  .title {
    width: 100%;
    padding: 1em;
    background-color: #3e4143;
    display: flex;
    justify-content: space-between;
    align-items: center;
    h6 {
      font-size: $fontM;
      color: white;
      font-weight: 700;
    }
    .percent {
      display: flex;
      align-items: center;
      p {
        font-size: $fontM;
        color: $success_color;
      }
      .icon {
        font-size: $fontM;
        margin-left: 1em;
        color: $success_color;
      }
    }
  }
  .content {
    .sections {
      width: 100%;
      background-color: $black;
      opacity: 0.85;
      padding: 2em 0;
      display: flex;
      align-items: stretch;
      .section {
        padding: 0 1em;
        display: flex;
        align-items: center;
        &:first-child {
          border-right: 1px solid $grey;
        }
        .left {
          flex: 1 1;
          .subTitle {
            color: $grey;
            font-size: $fontS;
            font-weight: 700;
          }
          .val1 {
            margin-top: 2em;
            font-size: $fontM;
            color: $success_color;
          }
        }
        .right {
          flex: 1 1;
          display: flex;
          align-items: center;

          .val2 {
            font-size: $fontXL;
            color: $success_color;
          }
          .val3 {
            margin-left: 1.5em;
            font-size: $fontM;
            color: $success_color;
          }
        }
      }
    }
    .info {
      width: 100%;
      color: $black;
      padding: 0.5em 1em;
      display: flex;
      align-items: center;
      .spread {
        background-color: $black_light;
        padding: 0.5em;
        display: flex;
        align-items: center;
        border-radius: 1em;
        .spreadTitle {
          color: $grey;
          font-size: $fontM;
          font-weight: 700;
        }
        .spreadVal {
          color: white;
          font-weight: 700;
        }
      }
      .btns {
        display: flex;
        .btn-buy,
        .btn-sell {
          p {
            font-size: $fontM;
          }
        }
        .btn-buy {
          p {
            color: $success_color;
          }
        }
        .btn-sell {
          color: $error_color;
        }
      }
    }
  }
}
.marketCard.negative {
  .title {
    .percent {
      p {
        color: $error_color;
      }
      .icon {
        color: $error_color;
      }
    }
  }
  .content {
    .sections {
      .section {
        .left {
          .val1 {
            color: $error_color;
          }
        }
        .right {
          .val2 {
            color: $error_color;
          }
          .val3 {
            color: $error_color;
          }
        }
      }
    }
  }
}
</style>
