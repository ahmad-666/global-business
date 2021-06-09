<template>
  <div class="page">
    <h6 class="text-h5 grey--text text--lighten-1 font-weight-regular">
      Financial
    </h6>
    <dashboard-bread-crumb :items="breadcrumbItems"></dashboard-bread-crumb>
    <div class="d-flex content">
      <div class="left flex-shrink-0">
        <div class="cards">
          <div
            v-for="financialCard in financialCards"
            :key="financialCard.title"
            class="card mt-4"
          >
            <dashboard-financial-card
              :title="financialCard.title"
              :price="financialCard.price"
            ></dashboard-financial-card>
          </div>
        </div>
        <div class="mt-4">
          <dashboard-transfer-history
            :items="historyItems"
          ></dashboard-transfer-history>
        </div>
      </div>
      <div class="right ml-5 mt-4 flex-grow-1">
        <dashboard-transfer-user></dashboard-transfer-user>
      </div>
    </div>
  </div>
</template>
<script>
import DashboardFinancialCard from '~/components/dashboard/DashboardFinancialCard.vue'
import DashboardTransferHistory from '~/components/dashboard/DashboardTransferHistory.vue'
import DashboardTransferUser from '~/components/dashboard/DashboardTransferUser.vue'
export default {
  components: {
    DashboardFinancialCard,
    DashboardTransferHistory,
    DashboardTransferUser,
  },
  layout: 'dashboard',
  data() {
    return {
      breadcrumbItems: [
        {
          text: 'Swap Balances',
          disabled: false,
          to: '/dashboard/transferUser',
        },
      ],
      financialCards: [],
      historyItems: [],
    }
  },
  fetch() {
    this.financialCards = [
      {
        title: 'MAIN WALLET',
        price: 8.17,
      },
      {
        title: 'ROI WALLET',
        price: 98.55,
      },
    ]
    this.historyItems = [
      {
        id: 1,
        senderId: 'FTG886 ',
        value: 562,
        receiverId: 'FTG894',
        date: new Date().toDateString(),
      },
      {
        id: 2,
        senderId: 'FTG886',
        value: 95,
        receiverId: 'FTG894',
        date: new Date().toDateString(),
      },
      {
        id: 3,
        senderId: 'FTG884',
        value: 95,
        receiverId: 'FTG886',
        date: new Date().toDateString(),
      },
    ]
  },
}
</script>
<style lang="scss" scoped>
.content {
  .left {
    width: 35em;
  }
}
</style>
