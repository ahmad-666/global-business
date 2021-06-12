<template>
  <div class="page">
    <h6 class="text-h5 grey--text text--lighten-1 font-weight-regular">
      Financial
    </h6>
    <dashboard-bread-crumb :items="breadcrumbItems"></dashboard-bread-crumb>
    <div class="d-flex flex-column flex-lg-row content">
      <div
        class="
          left
          flex-shrink-1 flex-lg-shrink-0
          d-flex
          flex-row flex-wrap
          d-lg-block
        "
      >
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
      <div class="right flex-grow-1 ml-0 mt-4 ml-lg-5 mt-lg-4">
        <dashboard-financial-swap></dashboard-financial-swap>
      </div>
    </div>
    <div class="mt-5">
      <dashboard-table
        :items="transferItems"
        :headers="transferHeaders"
        :available-page-sizes="[10, 25, 50, 100]"
      ></dashboard-table>
    </div>
  </div>
</template>
<script>
import DashboardFinancialCard from '~/components/dashboard/DashboardFinancialCard.vue'
import DashboardFinancialSwap from '~/components/dashboard/DashboardFinancialSwap.vue'
import DashboardTable from '~/components/dashboard/DashboardTable.vue'
export default {
  components: {
    DashboardFinancialCard,
    DashboardFinancialSwap,
    DashboardTable,
  },
  layout: 'dashboard',
  data() {
    return {
      breadcrumbItems: [
        {
          text: 'Swap Balances',
          disabled: false,
          to: '/dashboard/transferRoiIB',
        },
      ],
      financialCards: [],
      transferItems: [],
      transferHeaders: [
        {
          text: 'ID',
          value: 'id',
          align: 'start',
          sortable: true,
        },
        {
          text: 'FROM WALLET',
          value: 'fromWallet',
          align: 'start',
          sortable: true,
        },
        {
          text: 'VALUE',
          value: 'value',
          align: 'start',
          sortable: true,
        },
        {
          text: 'DATE',
          value: 'date',
          align: 'start',
          sortable: true,
        },
      ],
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
    for (let i = 0; i < 100; i++) {
      this.transferItems[i] = {}
      this.transferItems[i].id = i
      this.transferItems[i].fromWallet = Math.random() < 0.5 ? 'ROI' : 'IB'
      this.transferItems[i].value = +(Math.random() * 1000).toFixed(3)
      this.transferItems[i].date = new Date().toDateString()
    }
  },
}
</script>
<style lang="scss" scoped>
.content {
  .left {
    width: 35em;
  }
}
@media screen and (max-width: 1084px) {
  .content {
    .left {
      width: 100%;
      .card {
        width: calc((100% - (3 * 3em)) / 3);
        margin: 1.5em;
      }
    }
  }
}
@media screen and (max-width: 750px) {
  .content {
    .left {
      .card {
        width: 100%;
      }
    }
  }
}
</style>
