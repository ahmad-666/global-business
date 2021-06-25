<template>
  <div class="mt-2">
    <dashboard-bread-crumb :items="breadcrumbItems"></dashboard-bread-crumb>

    <h6 class="text-h6 textColor--text font-weight-regular">Send Ticket</h6>
    <dashboard-send-ticket :is-dark="true"></dashboard-send-ticket>
  </div>
</template>
<script>
import DashboardSendTicket from '~/components/dashboard/DashboardSendTicket.vue'
export default {
  components: {
    DashboardSendTicket,
  },
  layout: 'admin',
  data() {
    return {
      breadcrumbItems: [
        {
          text: 'Send Ticket',
          disabled: false,
          to: `/profile/sendTicket`,
        },
      ],
    }
  },

  methods: {},
}
</script>
<style lang="scss" scoped></style>
