<template>
  <div class="page">
    <h6 class="text-h5 grey--text text--lighten-1 font-weight-regular">
      Users
    </h6>
    <dashboard-bread-crumb :items="breadcrumbItems"></dashboard-bread-crumb>
    <div class="content d-flex">
      <div class="left flex-shrink-0">
        <dashboard-profile-avatar></dashboard-profile-avatar>
      </div>
      <div class="right ml-5 flex-grow-1">
        <dashboard-change-password></dashboard-change-password>
        <div class="mt-6">
          <dashboard-2-f-a></dashboard-2-f-a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import DashboardProfileAvatar from '~/components/dashboard/DashboardProfileAvatar.vue'
import DashboardChangePassword from '~/components/dashboard/DashboardChangePassword.vue'
import Dashboard2FA from '~/components/dashboard/Dashboard2FA.vue'
export default {
  components: {
    DashboardProfileAvatar,
    DashboardChangePassword,
    Dashboard2FA,
  },
  layout: 'dashboard',
  data() {
    return {
      breadcrumbItems: [
        {
          text: 'Your Profile',
          disabled: false,
          to: '/dashboard/profile',
        },
      ],
    }
  },
  fetch() {},
}
</script>
<style lang="scss" scoped>
.content {
  .left {
    width: 40em;
  }
}
</style>
