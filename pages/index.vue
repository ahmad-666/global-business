<template>
  <div>
    <div class="homeSteps">
      <home-steps></home-steps>
    </div>
    <div class="dollarFeatures">
      <dollar-features></dollar-features>
    </div>
    <div class="baseMarket">
      <base-market></base-market>
    </div>
    <div class="whyUs">
      <why-us></why-us>
    </div>
    <!-- <div class="contactUs">
      <home-contact-us></home-contact-us>
    </div> -->
    <div class="homeCounter">
      <home-counter></home-counter>
    </div>
  </div>
</template>

<script>
import HomeSteps from '~/components/HomeSteps.vue'
import DollarFeatures from '~/components/DollarFeatures.vue'
import BaseMarket from '~/components/BaseMarket.vue'
import WhyUs from '~/components/WhyUs.vue'
// import HomeContactUs from '~/components/HomeContactUs.vue'
import HomeCounter from '~/components/HomeCounter.vue'
export default {
  components: {
    HomeSteps,
    DollarFeatures,
    BaseMarket,
    WhyUs,
    // HomeContactUs,
    HomeCounter,
  },
}
</script>

<style>
.container {
  color: red;
}
</style>
