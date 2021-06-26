<template>
  <v-card color="cardColor" class="pa-4">
    <v-card-title class="text-h6 font-weight-regular titleColor--text pa-0"
      >Two-Factor Authentication
    </v-card-title>
    <v-form @submit.prevent="submitHandler">
      <div class="d-flex align-center mt-2">
        <p class="font-weight-bold text-body-1">Status:</p>
        <p
          v-if="!twoFactorEnabled"
          class="ml-4 error--text text-body-1 font-weight-light text--lighten-1"
        >
          Disabled
        </p>
        <p v-else class="ml-4 success--text text-body-1 font-weight-light">
          Enabled
        </p>
      </div>
      <div class="select d-flex align-center mt-4">
        <p class="text-body-2 font-weight-bold textColor--text">Mode</p>
        <div class="select ml-2">
          <v-select v-model="mode" :items="modeItems" dense outlined></v-select>
        </div>
      </div>
      <div class="d-flex flex-row-reverse">
        <v-btn
          dark
          color="primary"
          type="submit"
          class="text-body-2 pa-3 mt-8 mt-lg-2 primary-gradient"
          :loading="isLoading"
          >Save</v-btn
        >
      </div>
    </v-form>
  </v-card>
</template>
<script>
export default {
  data() {
    return {
      isLoading: false,
      twoFactorEnabled: null,
      mode: 'disabled',
      modeItems: [
        {
          text: 'Disabled',
          value: 'disabled',
        },
        {
          text: 'OTP',
          value: 'otp',
        },
      ],
    }
  },
  fetch() {
    this.twoFactorEnabled = false
  },
  methods: {
    submitHandler() {
      this.isLoading = true
      setTimeout(() => {
        this.isLoading = false
      }, 2000)
    },
  },
}
</script>
<style lang="scss" scoped>
.select {
  width: 30em;
  height: 4em;
}
</style>
