<template>
  <div class="breadcrumb d-flex align-center">
    <nuxt-link to="/profile">
      <v-icon color="primary" size="22">mdi-home-outline</v-icon>
    </nuxt-link>
    <v-icon class="ml-3" size="16" color="textColor">mdi-slash-forward</v-icon>
    <v-breadcrumbs :items="items" class="pl-3"></v-breadcrumbs>
  </div>
</template>
<script>
export default {
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
}
</script>
<style lang="scss" scoped>
.slash {
  transform: rotate(90deg);
}
</style>
