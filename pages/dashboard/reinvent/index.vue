<template>
  <div class="page">
    <h6 class="text-h5 grey--text text--lighten-1 font-weight-regular">
      Investment Packages
    </h6>
    <dashboard-bread-crumb :items="breadcrumbItems"></dashboard-bread-crumb>
    <div class="cards d-flex align-stretch flex-wrap">
      <div
        v-for="packageCard in packageCards"
        :key="packageCard.title"
        class="card d-flex"
      >
        <dashboard-package-card
          :type="packageCard.type"
          :start-price="packageCard.startPrice"
          :end-price="packageCard.endPrice"
          :items="packageCard.items"
          :desc="packageCard.desc"
        ></dashboard-package-card>
      </div>
    </div>
  </div>
</template>
<script>
import DashboardPackageCard from '~/components/dashboard/DashboardPackageCard.vue'
export default {
  components: {
    DashboardPackageCard,
  },
  layout: 'dashboard',
  data() {
    return {
      breadcrumbItems: [
        { text: 'Packages List', disabled: false, to: '/dashboard/packages' },
      ],
      packageCards: [],
    }
  },
  fetch() {
    this.packageCards = [
      {
        type: 'basic',
        startPrice: 100,
        endPrice: 999,
        items: [
          { icon: 'fas fa-tag', title: 'Validity ', value: '24 Months' },
          { icon: 'fas fa-star', title: 'Total Profit', value: '200%' },
          { icon: 'fas fa-star', title: 'Referral Income', value: '7%' },
          { icon: 'fas fa-star', title: 'Binary Income', value: '10%' },
          {
            icon: 'fas fa-star',
            title: 'Capping Monthly Limit',
            value: '5000$',
          },
          { icon: 'fas fa-star', title: 'Avg Profit Month', value: '15.73%' },
        ],
        desc: 'an appropriate opportunity for beginners starting their own business.Find suitable investment with Basic.',
      },
      {
        type: 'ALPHA',
        startPrice: 1000,
        endPrice: 9999,
        items: [
          { icon: 'fas fa-tag', title: 'Validity ', value: '24 Months' },
          { icon: 'fas fa-star', title: 'Total Profit', value: '220%' },
          { icon: 'fas fa-star', title: 'Referral Income', value: '8%' },
          { icon: 'fas fa-star', title: 'Binary Income', value: '10%' },
          {
            icon: 'fas fa-star',
            title: 'Capping Monthly Limit',
            value: '10000$',
          },
          { icon: 'fas fa-star', title: 'Avg Profit Month', value: '18.9%' },
        ],
        desc: 'for those who have experienced investing before and have started a new way towards a more prosperous investment.',
      },
      {
        type: 'SAVER',
        startPrice: 10000,
        endPrice: 24999,
        items: [
          { icon: 'fas fa-tag', title: 'Validity ', value: '24 Months' },
          { icon: 'fas fa-star', title: 'Total Profit', value: '240%' },
          { icon: 'fas fa-star', title: 'Referral Income', value: '9%' },
          { icon: 'fas fa-star', title: 'Binary Income', value: '10%' },
          {
            icon: 'fas fa-star',
            title: 'Capping Monthly Limit',
            value: '20000$',
          },
          { icon: 'fas fa-star', title: 'Avg Profit Month', value: '22.03%' },
        ],
        desc: 'an appropriate chance for more profits with more potential facilities.',
      },
      {
        type: 'INVESTOR',
        startPrice: 100,
        endPrice: 999,
        items: [
          { icon: 'fas fa-tag', title: 'Validity ', value: '24 Months' },
          { icon: 'fas fa-star', title: 'Total Profit', value: '260%' },
          { icon: 'fas fa-star', title: 'Referral Income', value: '10%' },
          { icon: 'fas fa-star', title: 'Binary Income', value: '10%' },
          {
            icon: 'fas fa-star',
            title: 'Capping Monthly Limit',
            value: '999999999$',
          },
          { icon: 'fas fa-star', title: 'Avg Profit Month', value: '25.17%' },
        ],
        desc: 'the last package and the best choice for a worthwhile investment.',
      },
    ]
  },
}
</script>
<style lang="scss" scoped>
.card {
  width: calc((100% - (4 * 3em)) / 4);
  margin: 1.5em;
}
</style>
