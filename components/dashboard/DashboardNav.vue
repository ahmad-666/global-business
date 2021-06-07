<template>
  <v-app-bar app color="primary" dense dark>
    <v-app-bar-nav-icon @click="openDrawer"></v-app-bar-nav-icon>
    <p class="text-button text-uppercase ml-6 font-weight-regular">
      {{ navBarText1 }}
    </p>
    <p class="text-button text-uppercase ml-6 font-weight-regular">
      {{ navBarText2 }}
    </p>
    <p class="text-button text-capitalize ml-6 font-weight-regular">
      {{ navBarText3 }}
    </p>
    <v-spacer></v-spacer>
    <v-menu class="mr-2" offset-y>
      <template #activator="{ on, attrs }">
        <v-btn icon v-bind="attrs" v-on="on">
          <v-icon color="white" size="17">fas fa-bell</v-icon>
        </v-btn>
      </template>
      <dashboard-ticket-notification></dashboard-ticket-notification>
    </v-menu>
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
  methods: {
    openDrawer() {
      this.$emit('openDrawer')
    },
  },
}
</script>
<style lang="scss" scoped></style>
