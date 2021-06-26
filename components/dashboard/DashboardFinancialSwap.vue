<template>
  <v-form
    ref="myForm"
    v-model="isFormValid"
    class="swapContainer pa-4 cardColor"
    @submit.prevent="submitHandler"
  >
    <div
      class="
        d-flex
        flex-column flex-lg-row
        justify-lg-space-between
        align-lg-center
        section
      "
    >
      <div class="swapWallet flex-shrink-0">
        <p
          class="
            text-capitalize
            textColor--text
            text-subtitle-2
            font-weight-bold
          "
        >
          Swap from wallet:
        </p>
        <v-select
          v-model="selectedUnit"
          class="mt-3"
          :items="selectItems"
          outlined
          dense
          return-object
        ></v-select>
      </div>
      <div
        class="
          balance
          flex-grow-1
          mx-0 mx-lg-5 mx-xl-10
          primary
          py-1
          px-4 px-xl-15
          d-flex
          justify-space-between
          white--text
          text-body-2
          mt-0 mt-lg-2
        "
      >
        <p class="text-capitalize font-weight-light">wallet balance:</p>
        <p class="ml-2 font-weight-light">{{ convertedBalance }} USD</p>
      </div>
      <div class="valueSwap flex-shrink-0 mt-4 mt-lg-0">
        <p class="text-capitalize grey--text text-subtitle-2 font-weight-bold">
          Value of Swap:
        </p>
        <v-text-field
          v-model="swapValue"
          class="mt-3"
          type="number"
          outlined
          dense
          :rules="formRules.valueRule"
        ></v-text-field>
      </div>
    </div>
    <v-divider></v-divider>
    <v-list dense class="section py-6 transparent">
      <p class="titleColor--text font-weight-light text-body-2 text-capitalize">
        Swap Rules
      </p>
      <v-list-item v-for="swapRule in swapRules" :key="swapRule.id">
        <v-list-item-icon>
          <v-icon size="15" color="primary">mdi-check</v-icon>
        </v-list-item-icon>
        <v-list-item-content class="textColor--text text-body-2">
          <v-list-item-title>{{ swapRule.text }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
    <v-divider></v-divider>

    <div class="mt-6 d-flex flex-row-reverse">
      <v-btn
        type="submit"
        color="primary"
        dark
        class="pa-4 primary-gradient"
        :loading="isLoading"
      >
        Swap it
        <v-icon class="ml-2" size="15">mdi-chevron-right</v-icon>
      </v-btn>
    </div>
  </v-form>
</template>
<script>
export default {
  data() {
    return {
      selectItems: [
        { text: 'ROI', value: 'ROI', multiplier: 1 },
        { text: 'IB', value: 'IB', multiplier: 0.8 },
      ],
      selectedUnit: { text: 'ROI', value: 'ROI', multiplier: 1 },
      swapValue: null,
      balance: 0,
      formRules: {
        valueRule: [
          val => {
            if (!val) return 'enter value'
            else return true
          },
        ],
      },
      swapRules: [],
      isLoading: false,
      isFormValid: true,
    }
  },
  fetch() {
    this.balance = 100
    this.swapRules = [
      {
        id: 1,
        text: 'Before Swap your money, check all details about this transaction',
      },
      {
        id: 2,
        text: 'Before Swap your money, check all details about this transaction',
      },
      {
        id: 3,
        text: 'Before Swap your money, check all details about this transaction',
      },
    ]
  },
  computed: {
    convertedBalance() {
      return this.balance * this.selectedUnit.multiplier
    },
  },
  methods: {
    submitHandler() {
      this.$refs.myForm.validate()
      if (this.isFormValid) {
        this.isLoading = true

        setTimeout(() => {
          this.isLoading = false
          // this.$refs.myForm.reset()
        }, 2000)
      }
    },
  },
}
</script>
<style lang="scss" scoped>
.swapWallet {
  width: 15em;
}
.balance {
}
.valueSwap {
  width: 25em;
}
// .section {
//   border-bottom: 1px solid darken(white, 75%) !important;
// }
</style>
