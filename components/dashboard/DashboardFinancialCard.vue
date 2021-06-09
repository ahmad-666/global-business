<template>
  <v-card class="pa-0" dark>
    <v-card-title
      class="
        py-1
        px-4
        text-center
        primary
        text-subtitle-1
        font-weight-bold
        text-capitalize
        d-flex
        justify-center
        align-center
      "
      >{{ title }}</v-card-title
    >
    <v-card-text
      class="pa-4 d-flex justify-center align-center secondary white--text"
    >
      <p class="text-caption mt-n5">$</p>
      <p class="text-h4 font-weight-bold ml-2">{{ price }}</p>
    </v-card-text>
  </v-card>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
  },
}
</script>
<style lang="scss" scoped></style>
