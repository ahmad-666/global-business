<template>
  <v-card color="adminCardColor" class="rounded-lg pb-4" dark>
    <v-card-title
      class="
        text-caption text-capitalize
        grey--text
        text--lighten-1
        font-weight-light
      "
      >{{ title }}</v-card-title
    >
    <div class="d-flex justify-space-between mx-4">
      <v-progress-circular
        color="primary"
        :value="percentage"
        width="10"
        size="70"
        rotate="270"
      ></v-progress-circular>
      <v-spacer></v-spacer>
      <v-card-text class="pa-0 ml-2 d-flex flex-column capping-card-text">
        <p class="text-h6 white--text font-weight-regular">{{ price }} USD</p>
        <p class="text-caption grey--text text--lighten-1">{{ subTitle }}</p>
        <v-list color="transparent" class="mt-2">
          <v-list-item
            v-for="feature in features"
            :key="feature.title"
            class="capping-card-list-item"
          >
            <v-list-item-icon>
              <v-icon size="4" color="cyan accent-2" class="my-2 list-icon"
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
                  text--accent-2
                "
                >{{ feature.title }} :
                {{ feature.value }} USD</v-list-item-title
              >
            </v-list-item-content>
          </v-list-item>
        </v-list>
        <p class="mt-2 text-body-2 pink--text text--lighten-1">
          Maximum Profit: {{ profit }}USD
        </p>
      </v-card-text>
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
