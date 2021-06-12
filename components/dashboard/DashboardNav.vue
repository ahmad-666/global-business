<template>
  <v-app-bar app color="primary" dense dark>
    <div class="left d-flex align-center flex-wrap">
      <v-app-bar-nav-icon @click="openDrawer"></v-app-bar-nav-icon>
      <div class="txts d-none d-md-flex align-center">
        <p class="text-button text-uppercase ml-6 font-weight-regular">
          {{ navBarText1 }}
        </p>
        <p class="text-button text-uppercase ml-6 font-weight-regular">
          {{ navBarText2 }}
        </p>
        <p class="text-button text-capitalize ml-6 font-weight-regular">
          {{ navBarText3 }}
        </p>
      </div>
    </div>

    <v-spacer></v-spacer>
    <div class="right">
      <v-menu class="mr-2" offset-y>
        <template #activator="{ on, attrs }">
          <v-btn icon v-bind="attrs" v-on="on">
            <v-icon color="white" size="17">fas fa-bell</v-icon>
          </v-btn>
        </template>
        <dashboard-ticket-notification></dashboard-ticket-notification>
      </v-menu>
    </div>
  </v-app-bar>
</template>
<script>
import DashboardTicketNotification from '~/components/dashboard/DashboardTicketNotification.vue'
export default {
  components: {
    DashboardTicketNotification,
  },
  data() {
    return {
      navBarText1: '',
      navBarText2: '',
      navBarText3: '',
    }
  },
  fetch() {
    this.navBarText1 = 'SZRCMS'
    this.navBarText2 = 'FTG886'
    this.navBarText3 = 'Announcement : Number Two'
  },
  computed: {
    // getNavBarHeight() {
    //   let height = null
    //   switch (true) {
    //     // case this.$vuetify.breakpoint.mdAndDown:
    //     //   height = '80px'
    //     //   break
    //     case this.$vuetify.breakpoint.smAndDown:
    //       height = '80px'
    //       break
    //     // case this.$vuetify.breakpoint.xsAndDown:
    //     //   height = '120px'
    //     //   break
    //     default:
    //       height = '50px'
    //   }
    //   return height
    // },
  },
  methods: {
    openDrawer() {
      this.$emit('openDrawer')
    },
  },
}
</script>
<style lang="scss" scoped></style>
