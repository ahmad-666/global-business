<template>
  <div class="pricingCounter">
    <font-awesome-icon :icon="icon" class="icon"></font-awesome-icon>
    <div class="content">
      <p class="val">{{ currVal }}</p>
      <p class="label">{{ label }}</p>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    icon: {
      type: String,
      required: true,
    },
    finalVal: {
      type: Number,
      required: true,
    },
    duration: {
      type: Number,
      default: 4000,
    },
    label: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      currVal: 0,
      stepTimer: 50, // 50ms , in each 50ms we increase currVal
    }
  },
  created() {
    const repeatCount = this.duration / this.stepTimer
    const step = Math.round((this.finalVal - 0) / repeatCount)
    const timerId = setInterval(() => {
      this.currVal += step
      if (this.currVal >= this.finalVal) clearInterval(timerId)
    }, this.stepTimer)
  },
}
</script>
<style lang="scss" scoped>
@import '~/assets/styles/variables.scss';
@import '~/assets/styles/colors.scss';
.pricingCounter {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  .icon {
    font-size: $fontXL + 2em;
    color: $primaryColor;
  }
  .content {
    margin-left: 1em;
    .val {
      color: white;
      font-size: $fontXL + 0.5em;
      font-weight: 700;
    }
    .label {
      margin-top: 0.5em;
      font-size: $fontM + 0.2em;
      color: white;
      text-transform: uppercase;
    }
  }
}
</style>
