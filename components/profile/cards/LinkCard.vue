<template>
  <v-card color="adminCardColor">
    <v-card-title class="d-flex justify-space-between align-center pa-2">
      <p class="grey--text text--lighten-1 text-caption">Referral Link</p>
      <v-btn text @click="closeCard">
        <v-icon size="16" color="red lighten-3">fas fa-times</v-icon>
      </v-btn>
    </v-card-title>
    <v-card-text class="d-flex flex-column align-center">
      <p class="text-h6 white--text font-weight-regular">{{ title }}</p>
      <div class="mt-6 d-flex align-stretch width-100">
        <v-text-field
          :value="link"
          outlined
          readonly
          dark
          background-color="adminCardColor darken-1"
          class="text-caption rounded-l-lg rounded-r-0"
          dense
        ></v-text-field>
        <v-btn
          dark
          class="py-5 px-2 adminCardColor lighten-2 rounded-r-lg rounded-l-0"
          @click="copyLink"
        >
          <v-icon color="white" size="16">fas fa-copy</v-icon>
        </v-btn>
      </div>
      <v-btn class="mt-2 py-4 px-8 rounded-md" dark color="primary">
        <v-icon size="16" color="white">fas fa-share-alt</v-icon>
        <p class="ml-2 text-subtitle-1 font-weight-medium white--text">Share</p>
      </v-btn>
    </v-card-text>
    <v-snackbar v-model="showSnackBar" dark :timeout="4000">
      <p class="text-subtitle-1 white--text">Copied</p>
      <template #action="{ attrs, on }">
        <v-btn v-bind="attrs" text v-on="on" @click="closeSnackBar">
          <v-icon color="red" size="16">fas fa-times</v-icon>
        </v-btn>
      </template>
    </v-snackbar>
  </v-card>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    link: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      showSnackBar: false,
    }
  },
  methods: {
    closeCard() {
      this.$emit('close:card')
    },
    async copyLink() {
      await navigator.clipboard.writeText(this.link)
      this.showSnackBar = true
    },
    closeSnackBar() {
      this.showSnackBar = false
    },
  },
}
</script>
<style lang="scss" scoped></style>
