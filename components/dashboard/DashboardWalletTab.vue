<template>
  <div class="wallet-tab py-2">
    <div class="d-flex justify-space-between pa-2">
      <div
        class="
          barcodeImg
          d-flex
          justify-center
          align-center
          white
          rounded-xl
          flex-shrink-0
          py-2
          px-4
        "
      >
        <v-img :src="barcodeImg" width="75%" height="75%"></v-img>
      </div>
      <div class="ml-3 flex-grow-1">
        <h6 class="text-subtitle-1 font-weight-bold font-italic">
          Donate {{ title }}
        </h6>
        <p class="text-body-2 grey--text text--darken-3 font-weight-medium">
          Send only {{ title }} to this deposit address.Sending any other coin
          or token to this address may result in the loss of your dontaion,
          Thanks!
        </p>
      </div>
    </div>
    <div class="d-flex align-center py-1 px-3 justify-space-between white mt-4">
      <p
        class="
          font-italic
          text-body-2
          font-weight-bold
          black--text
          flex-shrink-0
        "
      >
        Address
      </p>
      <p
        class="
          text-body-2
          purple--text
          ml-4
          font-italic font-weight-medium
          flex-grow-1
          addressWidth
          text-center
        "
      >
        {{ address }}
      </p>
      <v-btn
        class="
          ml-2
          d-flex
          align-center
          text-caption
          font-weight-bold font-italic
          flex-shrink-0
        "
        text
        @click="copyToClipBoard"
      >
        <v-icon class="mr-1" size="8">fas fa-plus</v-icon>
        Copy
      </v-btn>
      <v-snackbar v-model="showSnackbar" :timeout="3000">
        Copied!
        <template #action="{ attrs }">
          <v-btn
            text
            color="red"
            v-bind="attrs"
            class="font-weight-medium text-body-2"
            @click="showSnackbar = false"
            >close</v-btn
          >
        </template>
      </v-snackbar>
    </div>
    <v-form
      ref="myForm"
      v-model="isFormValid"
      class="pa-2 mt-2 d-flex align-center justify-space-between"
      @submit.prevent="submitHandler"
    >
      <div class="input">
        <p class="text-body-2 grey--text text--darken-1 font-italic">
          Deposit Value
        </p>
        <v-text-field
          v-model="depositVal"
          class="mt-2"
          outlined
          color="purple"
          :rules="[formRules.isRequired]"
          dense
        ></v-text-field>
      </div>
      <div class="input ml-2">
        <p class="text-body-2 grey--text text--darken-1 font-italic">
          Deposit Hash
        </p>
        <v-text-field
          v-model="depositHash"
          class="mt-2"
          outlined
          color="purple"
          :rules="[formRules.isRequired]"
          dense
        ></v-text-field>
      </div>
      <v-btn
        type="submit"
        class="primary ml-2 text-body-2 pa-3 pa-4 rounded-pill"
        elevation="5"
        dark
        :loading="isLoading"
        >submit</v-btn
      >
    </v-form>
  </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    barcodeImg: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      isFormValid: true,
      isLoading: false,
      depositVal: '',
      depositHash: '',
      showSnackbar: false,
    }
  },
  computed: {
    formRules() {
      return {
        isRequired: val => {
          if (!val || !val.trim().length) return 'field is required'
          return true
        },
      }
    },
  },
  methods: {
    submitHandler() {
      this.$refs.myForm.validate()
      if (this.isFormValid) {
        this.isLoading = true
        setTimeout(() => {
          this.isLoading = false
        }, 2000)
      }
    },
    async copyToClipBoard() {
      await navigator.clipboard.writeText(this.address)
      this.showSnackbar = true
    },
  },
}
</script>
<style lang="scss" scoped>
.input {
  width: 30em;
}
.barcodeImg {
  width: 10em;
  height: 10em;
}
.addressWidth {
  max-width: 50%;
}
</style>
