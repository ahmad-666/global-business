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
        'ml-15': !isMobile,
        'pl-15': !isMobile,
        'pr-4': !isMobile,
        'px-2': isMobile,
      }"
    >
      <Nuxt />
      <div class="d-flex align-center justify-end my-6 textColor--text">
        <p class="text-caption">@ {{ new Date().getFullYear() }}</p>
        <p class="text-caption primary--text ml-1">Global Business</p>
        <p class="text-caption ml-1">all rights reserved</p>
      </div>
    </v-main>
  </v-app>
</template>
<script>
import BaseNav from '~/components/profile/BaseNav.vue'
import BaseSidebar from '~/components/profile/BaseSidebar.vue'
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
      if (!this.$vuetify.theme.dark)
        return this.$vuetify.theme.themes.light.bgColor
      else return this.$vuetify.theme.themes.dark.bgColor
    },
    getUrl() {
      return this.$route.fullPath
    },
    isVuetifyDarkTheme() {
      return this.$vuetify.theme.dark
    },
    vuexTheme() {
      return this.$store.getters['theme/getTheme']
    },
  },
  watch: {
    getUrl() {
      this.showSidebar = false
    },
    isVuetifyDarkTheme(newVal) {
      if (newVal) this.$store.dispatch('theme/setTheme', 'dark')
      else this.$store.dispatch('theme/setTheme', 'light')
    },
    async vuexTheme(newVal) {
      if (!newVal || newVal === 'dark') {
        await this.$store.dispatch('theme/setTheme', 'dark')
        this.$vuetify.theme.dark = true
      } else {
        await this.$store.dispatch('theme/setTheme', 'light')
        this.$vuetify.theme.dark = false
      }
    },
  },
  mounted() {
    this.$store.dispatch('theme/autoTheme') // get stored theme inside localStorage
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
