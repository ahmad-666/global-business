<template>
  <form novalidate class="unitCalculator">
    <h5 class="title">Dollar</h5>
    <h6 class="subTitle">to Currency Calculator</h6>
    <p class="desc">
      Lorem Idivsum is simply dummy text of the printing and typesetting
      industry. Lorem Ipsum has been the industry's.
    </p>
    <div class="formElmContainer">
      <p class="inputTitle">Enter amount</p>
      <div class="inputContainer">
        <div class="input">
          <base-input
            size="s"
            type="white-bg"
            input-type="number"
            placeholder=""
            name="bitcoin"
            :model-value="cryptoAmount"
            @update:modelValue="cryptoAmountInputHandler"
          ></base-input>
        </div>

        <div class="select">
          <base-select
            :options="cryptoOptions"
            :model-value="preselect"
            size="s"
            type="white-bg"
            @update:modelValue="selectedCryptoInputHandler"
          ></base-select>
        </div>
      </div>
    </div>
    <div class="formElmContainer">
      <p class="inputTitle">Enter amount to get</p>
      <div class="inputContainer">
        <div class="input">
          <base-input
            size="s"
            type="white-bg"
            input-type="number"
            placeholder=""
            name="money"
            :model-value="moneyAmount"
            @update:modelValue="moneyAmountInputHandler"
          ></base-input>
        </div>

        <div class="select">
          <base-select
            :options="moneyOptions"
            :model-value="selectedMoney"
            size="s"
            type="white-bg"
            @update:modelValue="selectedMoneyInputHandler"
          ></base-select>
        </div>
      </div>
    </div>
    <div class="btn">
      <base-button
        type="button"
        btn-type="dark-blue"
        size="m"
        @clickHandler="clickHandler"
      >
        <p>Buy Now!</p>
      </base-button>
    </div>
  </form>
</template>
<script>
export default {
  props: {
    cryptoUnits: {
      //   [
      //       {
      //           code: 'bitcoin',
      //           displayVal: 'BTC',
      //           multipliers: [
      //               {code:'usd',val:70000} //1 bitcoin === 70000$
      //           ]
      //       }
      //   ]
      type: Array,
      required: true,
    },
    moneyUnits: {
      // [
      //     {
      //         code: 'usd',displayVal: 'USD'
      //     }
      // ]
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      cryptoAmount: null,
      selectedCrypto: this.cryptoUnits[0].code,
      moneyAmount: null,
      selectedMoney: this.moneyUnits[0].code,
    }
  },
  computed: {
    cryptoOptions() {
      return this.cryptoUnits.map(crypto => {
        return {
          value: crypto.code,
          displayValue: crypto.displayVal,
        }
      })
    },
    moneyOptions() {
      return this.moneyUnits.map(money => {
        return {
          value: money.code,
          displayValue: money.displayVal,
        }
      })
    },
    currentMultiplier() {
      const targetCrypto = this.cryptoUnits.find(
        crypto => crypto.code === this.selectedCrypto
      )
      const targetMultiplier = targetCrypto.multipliers.find(
        mul => mul.code === this.selectedMoney
      ).val
      return targetMultiplier
    },
  },
  methods: {
    cryptoAmountInputHandler(val) {
      this.cryptoAmount = parseFloat(val)
      this.moneyAmount = val * this.currentMultiplier
    },
    selectedCryptoInputHandler(val) {
      this.selectedCrypto = val
      this.moneyAmount = this.cryptoAmount * this.currentMultiplier
    },
    moneyAmountInputHandler(val) {
      this.moneyAmount = parseFloat(val)
      this.cryptoAmount = val / this.currentMultiplier
    },
    selectedMoneyInputHandler(val) {
      this.selectedMoney = val
      this.cryptoAmount = this.moneyAmount / this.currentMultiplier
    },
    clickHandler() {},
  },
}
</script>
<style lang="scss" scoped>
@import '~/assets/styles/colors.scss';
@import '~/assets/styles/variables.scss';
.unitCalculator {
  width: 100%;
  background-color: white;
  border-radius: 0.5em;
  padding: 4em 2em;

  .title {
    font-size: $fontXL;
    color: $primaryColor;
  }
  .subTitle {
    margin-top: 0.5em;
    font-size: $fontL;
    color: $black_light;
  }
  .desc {
    margin-top: 0.5em;
    color: $grey_light;
    font-size: $fontM;
  }
  .formElmContainer {
    width: 100%;
    margin-top: 2em;
    .inputTitle {
      font-size: $fontM;
      color: $grey;
    }
    .inputContainer {
      margin-top: 1em;
      display: flex;
      align-items: stretch;
      .input {
        width: 100%;
      }
      .select {
        flex-shrink: 0;
        width: 15em;
      }
    }
  }
  .btn {
    margin-top: 1em;
    p {
      color: white;
      font-size: $fontM;
    }
  }
}
</style>
