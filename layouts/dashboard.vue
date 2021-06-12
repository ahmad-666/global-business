<template>
  <v-app>
    <dashboard-nav @openDrawer="openDrawer"></dashboard-nav>
    <dashboard-sidebar
      :is-sidebar-open="isSidebarOpen"
      @drawerInput="drawerInputHandler"
    ></dashboard-sidebar>
    <v-main class="px-2 px-lg-4 px-xl-8 py-16">
      <Nuxt />
    </v-main>
  </v-app>
</template>
<script>
import DashboardNav from '~/components/dashboard/DashboardNav.vue'
import DashboardSidebar from '~/components/dashboard/DashboardSidebar.vue'
export default {
  components: {
    DashboardNav,
    DashboardSidebar,
  },
  data() {
    return {
      isSidebarOpen: false,
    }
  },
  methods: {
    openDrawer() {
      this.isSidebarOpen = true
    },
    drawerInputHandler(drawerIsOpen) {
      this.isSidebarOpen = drawerIsOpen
    },
  },
}
</script>
<style lang="scss" scoped>
@import '~/assets/styles/colors.scss';
@import '~/assets/styles/variables.scss';
</style>
