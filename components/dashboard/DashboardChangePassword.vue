<template>
  <v-card class="cardColor pa-4">
    <v-card-title class="mt-0 pa-0 font-weight-regular text-h6 titleColor--text"
      >Change Password</v-card-title
    >
    <v-form ref="myForm" v-model="isFormValid" @submit.prevent="submitHandler">
      <v-list class="transparent" dense>
        <v-list-item v-for="step in steps" :key="step.id" class="mt-n2">
          <v-list-item-icon>
            <v-icon size="12" color="textColor darken-1">fas fa-check</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title class="d-flex align-center">
              <p class="text-body-2 textColor--text font-weight-light">
                {{ step.title }} : {{ step.text }}
              </p>
              <v-btn
                v-if="step.hasBtn"
                color="primary"
                class="ml-4 pa-3 text-body-2"
                dark
                type="button"
              >
                Request Code
              </v-btn>
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <div class="input">
        <p class="font-weight-bold text-body-2 textColor--text">
          Security Code
        </p>
        <v-text-field
          v-model="securityCode"
          outlined
          dense
          class="mt-2"
          :rules="[formRules.required]"
        ></v-text-field>
      </div>
      <div class="inputs d-flex flex-column flex-md-row align-md-center">
        <div class="input">
          <p class="font-weight-bold text-body-2 textColor--text">
            New Password
          </p>
          <v-text-field
            v-model="newPassword"
            outlined
            dense
            class="mt-2"
            :rules="[formRules.required, formRules.minLength]"
          ></v-text-field>
        </div>
        <div class="input ml-0 ml-md-6">
          <p class="font-weight-bold text-body-2 textColor--text">
            Confirm Password
          </p>
          <v-text-field
            v-model="confirmNewPassword"
            outlined
            dense
            class="mt-2"
            :rules="[formRules.required, formRules.samePassword]"
          ></v-text-field>
        </div>
      </div>
      <v-divider></v-divider>
      <div class="d-flex flex-row-reverse py-5">
        <v-btn
          type="submit"
          class="pa-3 text-body-2"
          dark
          color="primary"
          :loading="isLoading"
          >SUBMIT</v-btn
        >
      </div>
    </v-form>
  </v-card>
</template>
<script>
export default {
  data() {
    return {
      isFormValid: true,
      isLoading: false,
      securityCode: '',
      newPassword: '',
      confirmNewPassword: '',
      steps: [
        {
          id: 1,
          title: 'Step 1',
          text: 'Click on "Request Code" button =>',
          hasBtn: true,
        },
        {
          id: 2,
          title: 'Step 2',

          text: 'Go to your mail box and check "Change Password Request" Email',
        },
        {
          id: 3,
          title: 'Step 3',
          text: 'Type the "Change Password Security Code" in Security Code field',
        },
        {
          id: 4,
          title: 'Step 4',
          text: 'Type Your New Password in right field after Security Code field',
        },
        {
          id: 5,
          title: 'Step 5',

          text: 'Click on submit',
        },
      ],
    }
  },
  computed: {
    formRules() {
      return {
        required: val => {
          if (!val || !val.trim().length) return 'field is require'
          return true
        },
        minLength: val => {
          if (val.trim().length < 6) return 'min length for password is 6'
          return true
        },
        samePassword: val => {
          if (val !== this.newPassword) return 'entered password is not same'
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
          // this.$refs.myForm.reset()
        }, 2000)
      }
    },
  },
}
</script>
<style lang="scss" scoped>
.input {
  width: 30em;
}
</style>
