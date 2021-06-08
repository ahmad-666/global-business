<template>
  <v-card color="secondary" dark class="d-flex flex-column align-center pa-4">
    <v-progress-circular
      size="120"
      width="8"
      color="orange accent-3"
      :value="currPercent"
      rotate="270"
    >
      <p
        class="text-h4 orange--text text--accent-4 font-weight-bold text-center"
      >
        {{ currPercent }}
      </p>
    </v-progress-circular>
    <v-card-title class="font-weight-regular"
      >Until income limit : {{ incomeLimit }} USD</v-card-title
    >
    <v-card-text
      class="text-body-2 text-center light-green--text text--accent-4"
      >Your Profit of your ROI : {{ roiProfit }} USD</v-card-text
    >
    <v-card-text
      class="text-body-2 text-center light-green--text text--accent-4"
      >Your Profit of your IB : {{ ibProfit }} USD</v-card-text
    >
    <v-card-text
      class="text-body-2 text-center light-green--text text--accent-4"
      >Your Profit of your Binary : {{ binaryProfit }} USD</v-card-text
    >
    <v-card-text
      class="text-body-2 text-center light-green--text text--accent-4"
      >Your Profit of your packages : {{ packagesProfit }} USD</v-card-text
    >
    <v-card-text class="text-body-1 text-center red--text"
      >Maximum Profit of your invests is : {{ maxProfit }} USD</v-card-text
    >
  </v-card>
</template>
<script>
export default {
  props: {
    percent: {
      // between [0,100]
      type: Number,
      default: 0,
    },
    incomeLimit: {
      type: Number,
      default: 0,
    },
    roiProfit: {
      type: Number,
      default: 0,
    },
    ibProfit: {
      type: Number,
      default: 0,
    },
    binaryProfit: {
      type: Number,
      default: 0,
    },
    packagesProfit: {
      type: Number,
      default: 0,
    },
    maxProfit: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      currPercent: 0,
      timerId: null,
      time: 3000, // total time 3000ms,
      stepTime: 25, // each step in 25ms
    }
  },
  mounted() {
    this.timerId = setInterval(() => {
      if (this.currPercent + 1 <= this.percent) this.currPercent++
      else clearInterval(this.timerId)
    }, this.stepTime)
  },
  beforeDestroy() {
    clearInterval(this.timerId)
  },
}
</script>
<style lang="scss" scoped></style>
