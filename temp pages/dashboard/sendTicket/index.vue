<template>
  <div class="page">
    <h6 class="text-h5 grey--text text--lighten-1 font-weight-regular">
      Tickets
    </h6>
    <dashboard-bread-crumb :items="breadcrumbItems"></dashboard-bread-crumb>
    <div class="mt-6">
      <dashboard-send-ticket></dashboard-send-ticket>
    </div>
  </div>
</template>
<script>
import DashboardSendTicket from '~/components/dashboard/DashboardSendTicket.vue'
export default {
  components: {
    DashboardSendTicket,
  },
  layout: 'dashboard',
  data() {
    return {
      breadcrumbItems: [
        {
          text: 'Send Support Ticket',
          disabled: false,
          to: '/dashboard/sendTicket',
        },
      ],
    }
  },

  methods: {},
}
</script>
<style lang="scss" scoped></style>
