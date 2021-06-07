<template>
  <div class="infoCard secondary lighten-1">
    <h6
      class="text-subtitle-2 white--text font-weight-bold text-capitalize pa-2"
    >
      {{ title }}
    </h6>
    <div class="section primary pa=3 d-flex align-center pa-2">
      <v-icon color="white" size="45">{{ icon }}</v-icon>
      <v-spacer></v-spacer>
      <div class="txts d-flex align-center">
        <p class="white--text text-h4">{{ value }}</p>
        <v-icon size="16" class="white--text mt-4 ml-2"
          >fas fa-dollar-sign</v-icon
        >
      </div>
    </div>
    <nuxt-link :to="link">
      <h6
        class="
          text-subtitle-2
          white--text
          font-weight-bold
          text-capitalize
          pa-2
        "
      >
        {{ subTitle }}
      </h6>
    </nuxt-link>
  </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
      required: true,
    },
    value: {
      type: Number,
      default: 0,
    },
    subTitle: {
      type: String,
      required: true,
    },
    link: {
      type: String,
      default: '/dashboard',
    },
  },
}
</script>
<style lang="scss" scoped></style>
