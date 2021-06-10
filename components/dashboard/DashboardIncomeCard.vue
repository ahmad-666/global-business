<template>
  <v-card dark class="secondary pa-0 py-4">
    <v-progress-circular
      class="mx-auto d-flex"
      rotate="270"
      size="140"
      width="10"
      color="orange darken-2"
      :value="progressValue"
    >
      <p class="text-h4 font-weight-bold">{{ progressValue }}%</p>
    </v-progress-circular>
    <v-card-title
      class="d-flex justify-center align-center secondary lighten-1 pa-2 mt-4"
    >
      <p class="font-weight-bold text-h3">{{ daysLeft }}</p>
      <p class="text-body-2 grey--text text--darken-1 mt-6 ml-1">days left</p>
    </v-card-title>
    <v-list dense class="transparent">
      <v-list-item
        v-for="feature in features"
        :key="feature.title"
        class="border-bottom-dark px-4"
      >
        <v-list-item-icon>
          <v-icon size="15" color="primary">{{ feature.icon }}</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title class="text--white font-weight-light text-body-2"
            >{{ feature.title }}: {{ feature.text }}</v-list-item-title
          >
        </v-list-item-content>
      </v-list-item>
    </v-list>
    <v-card-text
      class="py-2 px-4 text-center text-body-1 font-weight-light white--text"
    >
      Your Profit: {{ profit }} USD
    </v-card-text>
  </v-card>
</template>
<script>
export default {
  props: {
    finalProgress: {
      // [0,100]
      type: Number,
      required: true,
    },
    daysLeft: {
      type: Number,
      required: true,
    },
    features: {
      type: Array,
      default: () => [],
    },
    profit: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      progressValue: 0,
      timerId: null,
    }
  },
  mounted() {
    this.timerId = setInterval(() => {
      if (this.progressValue + 1 <= this.finalProgress) this.progressValue++
      else clearInterval(this.timerId)
    }, 40)
  },
  beforeDestroy() {
    clearInterval(this.timerId)
  },
}
</script>
<style lang="scss" scoped></style>
