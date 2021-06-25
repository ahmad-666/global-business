<template>
  <v-card class="pa-4" color="cardColor">
    <v-form ref="myForm" v-model="formIsValid" @submit.prevent="submitHandler">
      <div
        class="
          wallet
          primary
          d-flex
          justify-space-around
          white--text
          align-center
          py-1
          px-1 px-md-16
        "
      >
        <p class="text-body-1">Wallet Ballance:</p>
        <p class="text-body-1">{{ balance }} USD</p>
      </div>
      <div class="inputs mt-4 d-flex flex-column flex-md-row align-md-center">
        <div class="input">
          <p class="font-weight-bold textColor--text text-body-2">
            Transfer from wallet :
          </p>
          <v-select
            v-model="selectedTransferOption"
            :items="transferOptions"
            class="mt-2"
            outlined
            dense
          ></v-select>
        </div>
        <div class="input ml-0 mt-0 ml-md-5">
          <p class="font-weight-bold textColor--text text-body-2">
            Value of Transfer :
          </p>
          <v-text-field
            v-model="transferValue"
            class="mt-2"
            outlined
            :rules="formRules.required"
            type="number"
            dense
          ></v-text-field>
        </div>
        <div class="input ml-0 mt-0 ml-md-5">
          <p class="font-weight-bold textColor--text text-body-2">
            Transfer to User: :
          </p>
          <div class="d-flex align-stretch">
            <p
              class="
                ftgText
                text--grey text-body-2
                font-weight-light
                accent
                darken-1
                outline
                d-flex
                justify-center
                align-center
                py-0
                px-4
                white--text
              "
            >
              FTG
            </p>
            <v-text-field
              v-model="transferToUser"
              class="mt-2 flex-grow-1"
              outlined
              :rules="formRules.required"
              dense
            ></v-text-field>
          </div>
        </div>
      </div>
      <v-divider></v-divider>
      <v-list class="py-6 transparent twoBorder">
        <p class="text-body-1 font-weight-light titleColor--text">
          Transfer Rules:
        </p>
        <v-list-item v-for="rule in transferRules" :key="rule.id">
          <v-list-item-icon>
            <v-icon size="15" color="primary">mdi-check</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title
              class="text-body-2 grey--text text--darken font-weight-light"
            >
              {{ rule.text }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <v-divider></v-divider>

      <div class="d-flex flex-row-reverse pt-6">
        <v-btn type="submit" :loading="isLoading" dark color="primary">
          transfer
          <v-icon class="ml-2" size="15">mdi-chevron-right</v-icon>
        </v-btn>
      </div>
    </v-form>
  </v-card>
</template>
<script>
export default {
  data() {
    return {
      isLoading: false,
      formIsValid: true,
      balance: 0,
      transferOptions: [
        { text: 'Main', value: 'main' },
        { text: 'ROI', value: 'ROI' },
      ],
      selectedTransferOption: 'main',
      transferValue: null,
      transferToUser: '',
      transferRules: [],
    }
  },
  fetch() {
    this.balance = 100
    this.transferRules = [
      {
        id: 1,
        text: 'Attention: You only can send money to your up and down line members from Main Wallet.',
      },
      {
        id: 2,
        text: 'Before transfer your money, check all details about this transaction',
      },
      {
        id: 3,
        text: 'The amount specified for transfer to the user will be deducted from your original wallet',
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
    submitHandler() {
      this.$refs.myForm.validate()
      if (this.formIsValid) {
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
.outline {
  border: 1px solid darken(white, 75%);
}
.ftgText {
  height: 3em;
  margin-top: 0.5em;
}
// .twoBorder {
//   border-top: 1px solid darken(white, 75%) !important;
//   border-bottom: 1px solid darken(white, 75%) !important;
// }
</style>
