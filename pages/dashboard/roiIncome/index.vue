<template>
  <div class="page">
    <h6 class="text-h5 grey--text text--lighten-1 font-weight-regular">
      My Income
    </h6>
    <dashboard-bread-crumb :items="breadcrumbItems"></dashboard-bread-crumb>
    <div class="mt-6 cards d-flex flex-wrap">
      <div v-for="card in incomeCards" :key="card.id" class="card">
        <dashboard-income-card
          :days-left="card.daysLeft"
          :features="card.features"
          :final-progress="card.finalProgress"
          :profit="card.profit"
        ></dashboard-income-card>
      </div>
    </div>
  </div>
</template>
<script>
import DashboardIncomeCard from '~/components/dashboard/DashboardIncomeCard.vue'
export default {
  components: {
    DashboardIncomeCard,
  },
  layout: 'dashboard',
  data() {
    return {
      breadcrumbItems: [
        {
          text: 'ROI Income',
          disabled: false,
          to: '/dashboard/roiIncome',
        },
      ],
      incomeCards: [],
    }
  },
  fetch() {
    this.incomeCards = [
      {
        id: 1,
        finalProgress: 54,
        daysLeft: 338,
        profit: 106.11,
        features: [
          {
            icon: 'fas fa-archive',
            title: 'Package Name',
            text: 'Basic',
          },
          {
            icon: 'fas fa-dollar-sign',
            title: 'Your Value',
            text: '100',
          },
          {
            icon: 'fas fa-star',
            title: 'Submit Date',
            text: '12/12/2019',
          },
          {
            icon: 'fas fa-star',
            title: 'Expire Date',
            text: '11/12/2021',
          },
        ],
      },
    ]
  },
}
</script>
<style lang="scss">
.card {
  width: calc((100% - (4 * 3em)) / 4);
  margin: 1.5em;
}
</style>
