<template>
  <div class="breadcrumb d-flex align-center">
    <nuxt-link to="/dashboard">
      <v-icon color="primary" size="17">fas fa-home</v-icon>
    </nuxt-link>
    <v-icon class="ml-3 slash" size="12" color="grey lighten-2"
      >fas fa-slash</v-icon
    >
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
