<template>
  <div class="page">
    <h6 class="text-h5 grey--text text--lighten-1 font-weight-regular">
      Dashboard
    </h6>
    <dashboard-bread-crumb :items="items"></dashboard-bread-crumb>
    <div class="content">
      <div class="left"></div>
      <div class="right">
        <div class="cards d-flex flex-row align-stretch flex-wrap">
          <div v-for="card in infoCards" :key="card.title" class="card">
            <dashboard-info-card
              :title="card.title"
              :icon="card.icon"
              :value="card.value"
              :sub-title="card.subTitle"
              :link="card.link"
            ></dashboard-info-card>
          </div>
        </div>
        <div class="archiveCard mt-4">
          <dashboard-archive-card
            :dates="archiveDates"
          ></dashboard-archive-card>
        </div>
        <dashboard-profile-card></dashboard-profile-card>
      </div>
    </div>
  </div>
</template>
<script>
import DashboardBreadCrumb from '~/components/dashboard/DashboardBreadCrumb.vue'
import DashboardInfoCard from '~/components/dashboard/DashboardInfoCard.vue'
import DashboardArchiveCard from '~/components/dashboard/DashboardArchiveCard.vue'
import DashboardProfileCard from '~/components/dashboard/DashboardProfitCard.vue'
export default {
  components: {
    DashboardBreadCrumb,
    DashboardInfoCard,
    DashboardArchiveCard,
    DashboardProfileCard
  },
  layout: 'dashboard',
  data() {
    return {
      items: [
        {
          text: 'Dashboard',
          disabled: false,
          to: '/dashboard',
        },
      ],
      infoCards: [],
      archiveDates: [],
    }
  },
  fetch() {
    this.infoCards = [
      {
        title: 'Your Users',
        icon: 'fas fa-users',
        value: 0,
        subTitle: 'Your referral List',
        link: '/dashboard/referralCommision',
      },
      {
        title: 'Balance',
        icon: 'fas fa-dollar-sign',
        value: 8.17,
        subTitle: 'Account Balance',
        link: '/dashboard/deposit',
      },
      {
        title: 'ROI Wallet',
        icon: 'fas fa-dollar-sign',
        value: 98.55,
        subTitle: 'Account Balance',
        link: '/dashboard/deposit',
      },
      {
        title: 'IB Wallet',
        icon: 'fas fa-dollar-sign',
        value: 94.0,
        subTitle: 'Account Balance',
        link: '/dashboard/deposit',
      },
    ]
    this.archiveDates = [
      '2021/01/01 08:57:08',
      '2021/01/01 08:57:08',
      '2021/01/01 08:57:08',
    ]
  },
}
</script>
<style lang="scss" scoped>
.card {
  width: calc((100% - (2 * 3em)) / 2);
  margin: 1.5em;
}
</style>
