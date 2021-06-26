<template>
  <v-form ref="myForm" v-model="isFormValid" @submit.prevent="submitHandler">
    <v-text-field
      v-model="subject"
      dense
      :rules="[formRules.required]"
      placeholder="Subject"
      :background-color="getBgColor"
      outlined
      class="pa-2"
    ></v-text-field>
    <v-textarea
      v-model="desc"
      class="mt-0"
      outlined
      dense
      :rules="[formRules.required]"
      placeholder="Your Ticket Message..."
      :background-color="getBgColor"
      height="20em"
    ></v-textarea>
    <div :style="{ width: '40em' }" class="file-input">
      <v-file-input
        label="attach file"
        accept="image/*"
        dense
        :light="!isDark"
        :dark="isDark"
        outlined
        background-color="teal"
        color="white"
        show-size
        chips
        clearable
      ></v-file-input>
    </div>

    <div class="d-flex flex-row-reverse">
      <v-btn
        :loading="isLoading"
        color="primary"
        dark
        class="pa-3 text-body-2 primary-gradient"
        type="submit"
        >Submit</v-btn
      >
    </div>
  </v-form>
</template>
<script>
export default {
  props: {
    isDark: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      isLoading: false,
      isFormValid: true,
      subject: '',
      desc: '',
    }
  },
  computed: {
    formRules() {
      return {
        required: val => {
          if (!val || !val.trim().length) return 'field is required'
        },
      }
    },
    getBgColor() {
      if (!this.isDark) return 'secondary lighten-1'
      else return 'adminCardColor'
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
  },
}
</script>
<style lang="scss" scoped></style>
