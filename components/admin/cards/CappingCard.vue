<template>
  <v-card
    color="cardColor"
    class="rounded-lg pa-2 d-flex flex-column align-center fill-height"
    dark
  >
    <v-card-title
      class="
        pa-0
        text-caption text-capitalize
        textColor--text
        font-weight-light
      "
      >{{ title }}</v-card-title
    >
    <div
      class="d-flex flex-column align-center mt-2"
      :style="{ width: '100%' }"
    >
      <v-progress-circular
        color="primary"
        :value="percentage"
        width="10"
        size="100"
        rotate="270"
      ></v-progress-circular>
      <div
        :style="{ width: '100%' }"
        class="pa-0 d-flex flex-column align-center"
      >
        <p class="text-h6 titleColor--text font-weight-regular">
          {{ price }} USD
        </p>
        <p class="text-caption textColor--text">{{ subTitle }}</p>
        <div class="d-flex justify-space-between mt-2 width-100">
          <v-list color="transparent" class="pa-0">
            <v-list-item
              v-for="feature in features"
              :key="feature.title"
              class="capping-card-list-item"
            >
              <v-list-item-icon>
                <v-icon size="4" color="cyan accent-4" class="my-2 list-icon"
                  >fas fa-circle</v-icon
                >
              </v-list-item-icon>
              <v-list-item-content class="ml-n2 py-0">
                <v-list-item-title
                  class="
                    text-caption
                    font-weight-light
                    text-capitalize
                    cyan--text
                    text--accent-4
                  "
                  >{{ feature.title }} :
                  {{ feature.value }} USD</v-list-item-title
                >
              </v-list-item-content>
            </v-list-item>
          </v-list>
          <p class="text-body-2 pink--text text--lighten-1 mt-2">
            Maximum Profit: {{ profit }}USD
          </p>
        </div>
      </div>
    </div>
  </v-card>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    percentage: {
      type: Number,
      default: 0,
    },
    price: {
      type: Number,
      required: true,
    },
    subTitle: {
      type: String,
      default: '',
    },
    features: {
      type: Array,
      default: () => [],
    },
    profit: {
      type: Number,
      required: true,
    },
  },
}
</script>
<style lang="scss" scoped>
.capping-card-text {
  width: initial !important;
}
.capping-card-list-item {
  min-height: initial !important;
}
.list-icon {
  margin-top: 0 !important;
  margin-bottom: 0 !important;
}
</style>
