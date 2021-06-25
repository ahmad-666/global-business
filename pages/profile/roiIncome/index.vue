<template>
  <div class="page">
    <dashboard-bread-crumb :items="breadcrumbItems"></dashboard-bread-crumb>

    <h6 class="text-h6 textColor--text font-weight-regular">ROI Income</h6>
    <div class="mt-6 cards d-flex flex-wrap">
      <div v-for="card in incomeCards" :key="card.id" class="card">
        <dashboard-income-card
          :days-left="card.daysLeft"
          :features="card.features"
          :final-progress="card.finalProgress"
          :profit="card.profit"
          :type="card.type"
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
  layout: 'admin',
  data() {
    return {
      breadcrumbItems: [
        {
          text: 'ROI Income',
          disabled: false,
          to: '/profile/roiIncome',
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
        type: 'green',
        features: [
          {
            icon: 'mdi-package-variant-closed',
            title: 'Package Name',
            text: 'Basic',
          },
          {
            icon: 'mdi-currency-usd',
            title: 'Your Value',
            text: '100',
          },
          {
            icon: 'mdi-star-outline',
            title: 'Submit Date',
            text: '12/12/2019',
          },
          {
            icon: 'mdi-calendar-blank-outline',
            title: 'Expire Date',
            text: '11/12/2021',
          },
        ],
      },
      {
        id: 2,
        finalProgress: 54,
        daysLeft: 338,
        profit: 106.11,
        type: 'red',
        features: [
          {
            icon: 'mdi-package-variant-closed',
            title: 'Package Name',
            text: 'Basic',
          },
          {
            icon: 'mdi-currency-usd',
            title: 'Your Value',
            text: '100',
          },
          {
            icon: 'mdi-star-outline',
            title: 'Submit Date',
            text: '12/12/2019',
          },
          {
            icon: 'mdi-calendar-blank-outline',
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
@media screen and (max-width: 1084px) {
  .card {
    width: calc((100% - (3 * 3em)) / 3);
    margin: 1.5em;
  }
}
@media screen and (max-width: 750px) {
  .card {
    width: calc((100% - (2 * 3em)) / 2);
    margin: 1.5em;
  }
}
@media screen and (max-width: 500px) {
  .card {
    width: 100%;
    margin: 1.5em;
  }
}
</style>
