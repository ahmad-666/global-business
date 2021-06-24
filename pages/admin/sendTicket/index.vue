<template>
  <div class="mt-2">
    <h6
      class="text-h6 font-weight-medium white--text text-capitalize mt-2 mb-4"
    >
      Send Ticket
    </h6>
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
