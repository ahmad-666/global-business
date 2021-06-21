<template>
  <v-app :style="{ backgroundColor: getBackgroundColor }">
    <base-nav @event:toggleShowSidebar="toggleShowSidebar"></base-nav>
    <base-sidebar :show-sidebar="showSidebar"></base-sidebar>
    <v-overlay
      v-if="isMobile && showSidebar"
      color="rgb(0,0,0)"
      opacity=".65"
      @click.native="hideOverlay"
    ></v-overlay>
    <v-main
      class="mt-2"
      :class="{
        moveLeft: showSidebar && !isMobile,
        'ml-6': !isMobile,
        'pl-15': !isMobile,
        'pr-4': !isMobile,
        'px-2': isMobile,
      }"
    >
      <Nuxt />
      <div class="d-flex align-center justify-end my-6">
        <p class="text-caption white--text">@ {{ new Date().getFullYear() }}</p>
        <p class="text-caption primary--text ml-1">Global Business</p>
        <p class="text-caption white--text ml-1">all rights reserved</p>
      </div>
    </v-main>
  </v-app>
</template>
<script>
import BaseNav from '~/components/admin/BaseNav.vue'
import BaseSidebar from '~/components/admin/BaseSidebar.vue'
export default {
  components: {
    BaseNav,
    BaseSidebar,
  },
  data() {
    return {
      showSidebar: false,
    }
  },
  computed: {
    isMobile() {
      return this.$vuetify.breakpoint.mobile
    },
    getBackgroundColor() {
      return this.$vuetify.theme.themes.light.adminBackgroundColor
    },
  },
  methods: {
    toggleShowSidebar() {
      this.showSidebar = !this.showSidebar
    },
    hideOverlay() {
      this.showSidebar = false
    },
  },
}
</script>
<style lang="scss" scoped>
.moveLeft {
  margin-left: 27em !important;
}
</style>
