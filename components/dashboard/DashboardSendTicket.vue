<template>
  <v-form ref="myForm" v-model="isFormValid" @submit.prevent="submitHandler">
    <v-text-field
      v-model="subject"
      dense
      :rules="[formRules.required]"
      placeholder="Subject"
      background-color="secondary lighten-1"
      dark
      outlined
      class="pa-2"
    ></v-text-field>
    <v-textarea
      v-model="desc"
      class="mt-0"
      dark
      outlined
      dense
      :rules="[formRules.required]"
      placeholder="Your Ticket Message..."
      background-color="secondary lighten-1"
      height="20em"
    ></v-textarea>
    <div class="d-flex flex-row-reverse">
      <v-btn
        :loading="isLoading"
        color="primary"
        dark
        class="pa-3 text-body-2"
        type="submit"
        >Submit</v-btn
      >
    </div>
  </v-form>
</template>
<script>
export default {
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
