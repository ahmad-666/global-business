<template>
  <v-card class="pa-0 secondary" dark>
    <v-card-title
      class="secondary lighten-1 pa-3 d-flex flex-column align-center"
    >
      <h6 class="text-subtitle-1 font-weight-bold text-uppercase">
        {{ type }}
      </h6>
      <div class="d-flex align-center mt-6">
        <p class="mt-n5 text-caption">$</p>
        <p class="text-h4 font-weight-black ml-2">{{ startPrice }}</p>
        <p class="mt-3 ml-0 text-body-2 secondary--text text--lighten-3">.00</p>
      </div>
      <div class="d-flex align-center text-subtitle-2">
        <p class="primary--text">to {{ endPrice }}</p>
        <p class="secondary--text text--lighten-3">.00</p>
      </div>
    </v-card-title>
    <v-list class="secondary" dense>
      <v-list-item
        v-for="item in items"
        :key="item.title"
        class="itemList px-4"
      >
        <v-list-item-icon>
          <v-icon color="primary" size="10">{{ item.icon }}</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title
            class="text-capitalize text-body-2 font-weight-light"
            >{{ item.title }} : {{ item.value }}</v-list-item-title
          >
        </v-list-item-content>
      </v-list-item>
    </v-list>
    <v-card-actions class="pa-2 pb-5 d-flex flex-column align-center secondary">
      <p class="text-body-2 font-weight-light text-center">{{ desc }}</p>
      <v-btn class="pa-5 mt-3" color="primary" dark>
        Invest
        <v-icon size="12" class="ml-2">fas fa-chevron-right</v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>
<script>
export default {
  props: {
    type: {
      type: String,
      required: true,
    },
    startPrice: {
      type: Number,
      required: true,
    },
    endPrice: {
      type: Number,
      required: true,
    },
    items: {
      type: Array,
      required: true,
    },
    desc: {
      type: String,
      default: '',
    },
  },
}
</script>
<style lang="scss" scoped>
.itemList {
  border-bottom: 1px solid darken(white, 75%);
}
</style>
