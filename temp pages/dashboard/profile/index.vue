<template>
  <div class="page">
    <h6 class="text-h5 grey--text text--lighten-1 font-weight-regular">
      Users
    </h6>
    <dashboard-bread-crumb :items="breadcrumbItems"></dashboard-bread-crumb>
    <div
      class="content d-flex flex-column flex-lg-row align-center align-lg-start"
    >
      <div class="left flex-shrink-1 flex-lg-shrink-0">
        <dashboard-profile-avatar></dashboard-profile-avatar>
      </div>
      <div class="right ml-0 ml-lg-5 mt-5 mt-lg-0 flex-grow-1">
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
@media screen and (max-width: 1084px) {
  .content {
    .left {
      width: 100%;
    }
    .right {
      width: 100%;
    }
  }
}
</style>
