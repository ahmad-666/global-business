<template>
  <v-card color="adminCardColor" class="pa-4 rounded-lg">
    <v-card-text class="d-flex justify-space-between align-center pa-0">
      <div
        class="icon rounded-circle d-flex justify-center align-center"
        :style="{ backgroundImage: iconGradient }"
      >
        <v-icon size="20" color="white">{{ icon }}</v-icon>
      </div>
      <div class="d-flex flex-column align-end">
        <p
          class="
            text-caption
            grey--text
            text--lighten-1
            font-weight-light
            text-capitalize
          "
        >
          {{ title }}
        </p>
        <p class="text-h5 white--text">{{ value }}</p>
      </div>
    </v-card-text>
    <v-divider v-if="actionText" dark class="mt-6 mb-2"></v-divider>
    <v-card-actions v-if="actionText" class="pa-0">
      <v-btn text class="d-flex align-center grey--text text-lighten-1">
        <v-icon size="12">{{ actionIcon }}</v-icon>
        <p class="ml-2 text-caption text-capitalize">{{ actionText }}</p>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>
<script>
export default {
  props: {
    icon: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    value: {
      type: [Number, String],
      required: true,
    },
    iconGradient: {
      type: String,
      required: true,
    },
    actionIcon: {
      type: String,
      default: '',
    },
    actionText: {
      type: String,
      default: '',
    },
  },
}
</script>
<style lang="scss" scoped>
.icon {
  width: 3.5em;
  height: 3.5em;
}
</style>
