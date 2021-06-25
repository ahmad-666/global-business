<template>
  <div class="page">
    <dashboard-bread-crumb :items="breadcrumbItems"></dashboard-bread-crumb>

    <h6 class="text-h6 titleColor--text font-weight-regular">
      Transfer User To User
    </h6>
    <v-container>
      <v-row align="stretch">
        <v-col
          v-for="financialCard in financialCards"
          :key="financialCard.title"
          cols="12"
          sm="6"
          md="4"
        >
          <dashboard-financial-card
            :title="financialCard.title"
            :price="financialCard.price"
          ></dashboard-financial-card>
        </v-col>
      </v-row>
    </v-container>
    <v-container>
      <v-row>
        <v-col cols="12" lg="4">
          <dashboard-transfer-history
            :items="historyItems"
          ></dashboard-transfer-history>
        </v-col>
        <v-col cols="12" lg="8">
          <dashboard-transfer-user></dashboard-transfer-user>
        </v-col>
      </v-row>
    </v-container>
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
  layout: 'admin',
  data() {
    return {
      breadcrumbItems: [
        {
          text: 'Transfer User to User',
          disabled: false,
          to: '/admin/userToUser',
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
      {
        title: 'IB WALLET',
        price: 94,
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
<style lang="scss" scoped></style>
