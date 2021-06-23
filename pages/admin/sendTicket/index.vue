<template>
  <div class="mt-2">
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
