<template>
  <v-card class="pa-3 px-md-5 pt-md-10 pb-md-5" color="cardColor">
    <v-form ref="myForm" v-model="isFormValid" @submit.prevent="submitHandler">
      <div class="select d-flex align-center">
        <div class="left">
          <p class="textColor--text text-body-2 font-weight-bold">Wallet :</p>
          <v-select
            v-model="wallet"
            label="Choose Your Wallet"
            :items="walletItems"
            dense
            outlined
            :rules="formRules.required"
            class="mt-2"
            @input="fetchBalance"
          ></v-select>
        </div>
        <div v-if="balance" class="right ml-8">
          <p class="titleColor--text text-body-2 font-weight-regular">
            Your Balance in ROI wallet : {{ balance }} USD
          </p>
        </div>
      </div>
      <div
        class="
          inputs
          d-flex
          flex-column flex-md-row
          align-md-center
          justify-md-space-between
          mt-0 mt-md-3
        "
      >
        <div class="input">
          <p class="text-body-2 font-weight-bold textColor--text">Value</p>
          <v-text-field
            v-model="value"
            dense
            outlined
            :rules="formRules.required"
            class="mt-2"
          ></v-text-field>
        </div>
        <div class="input ml-0 ml-md-6">
          <p class="text-body-2 font-weight-bold textColor--text">
            Type Your USDT Wallet
          </p>
          <v-text-field
            v-model="usdtWallet"
            dense
            :rules="formRules.required"
            outlined
            class="mt-2"
          ></v-text-field>
        </div>
        <v-btn
          :loading="isLoading"
          color="primary"
          dark
          class="py-3 py-md-6 px-6 px-md-15 text-subtitle-1 primary-gradient"
          type="submit"
          >SUBMIT</v-btn
        >
      </div>
    </v-form>
    <v-list class="mt-2 transparent">
      <v-list-item v-for="rule in rules" :key="rule.id" class="mt-n4">
        <v-list-item-icon>
          <v-icon size="15" color="primary">mdi-check</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title
            class="textColor--text text-body-2 font-weight-light"
            >{{ rule.text }}</v-list-item-title
          >
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-card>
</template>
<script>
export default {
  data() {
    return {
      wallet: null,
      walletItems: [],
      balance: null,
      isLoading: false,
      isFormValid: true,
      value: '',
      usdtWallet: '',
      rules: [
        {
          id: 1,
          text: 'In case of withdraw from ROI wallet to your external wallet, 9.99% commission will calculate.',
        },
        {
          id: 2,
          text: 'In case of withdraw from IB wallet to your external wallet, 12.99% commission will calculate.',
        },
        {
          id: 3,
          text: 'A 9-digit confirmation code will be sent to your email as soon as you submit your withdrawal request, which you will need to enter in the confirmation form to confirm the payment request.',
        },
        {
          id: 4,
          text: 'If you do not receive an email in your Inbox folder, check your spam folder.',
        },
        {
          id: 5,
          text: 'You can only use the code that sent to your email within 6 hours after the withdrawal request.',
        },
        {
          id: 6,
          text: 'Attention: Time to transfer money to your wallet is between 5 and 7 days.',
        },
        {
          id: 7,
          text: 'Attetion: You are responsible for providing the wrong wallet, except USDT( TRC20 ), and for losing your credit.',
        },
      ],
    }
  },
  fetch() {
    this.walletItems = [
      {
        text: 'ROI',
        value: 'ROI',
      },
    ]
  },
  computed: {
    formRules() {
      return {
        required: [
          val => {
            if (!val || !val.trim().length) return 'this field is required'
            return true
          },
        ],
      }
    },
  },
  methods: {
    fetchBalance() {
      if (this.walletItem === 'ROI') {
        setTimeout(() => {
          this.balance = 1000
        }, 2000)
      }
    },
    submitHandler() {
      this.$refs.myForm.validate()
      if (this.isFormValid) {
        this.isLoading = true
        setTimeout(() => {
          this.isLoading = false
        }, 2000)
      }
    },
  },
}
</script>
<style lang="scss" scoped>
.input {
  width: 35em;
}
</style>
