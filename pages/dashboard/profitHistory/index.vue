<template>
  <div class="page">
    <h6 class="text-h5 grey--text text--lighten-1 font-weight-regular">
      Profit
    </h6>
    <dashboard-bread-crumb :items="breadcrumbItems"></dashboard-bread-crumb>
    <div class="border-bottom mt-6 pb-10">
      <p class="text-h5 font-weight-regular grey--text text--lighten-1">
        IB Wallets Logs
      </p>
      <dashboard-table
        class="mt-4"
        :items="profitIBItems"
        :headers="profitIBHeaders"
        :available-page-sizes="[10, 25, 50, 100]"
      ></dashboard-table>
    </div>
    <div class="border-bottom mt-6 pb-10">
      <p class="text-h5 font-weight-regular grey--text text--lighten-1">
        Binary Wallets Logs
      </p>
      <dashboard-table
        class="mt-4"
        :items="profitBinaryItems"
        :headers="profitBinaryHeaders"
        :available-page-sizes="[10, 25, 50, 100]"
      ></dashboard-table>
    </div>
    <div class="mt-6">
      <p class="text-h5 font-weight-regular grey--text text--lighten-1">
        ROI Wallets Logs
      </p>
      <dashboard-table
        class="mt-4"
        :items="profitROIItems"
        :headers="profitROIHeaders"
        :available-page-sizes="[10, 25, 50, 100]"
      ></dashboard-table>
    </div>
  </div>
</template>
<script>
import DashboardTable from '~/components/dashboard/DashboardTable.vue'
export default {
  components: {
    DashboardTable,
  },
  layout: 'dashboard',
  data() {
    return {
      breadcrumbItems: [
        {
          text: 'Profits List',
          disabled: false,
          to: '/dashboard/profitHistory',
        },
      ],
      profitIBItems: [],
      profitIBHeaders: [
        {
          text: 'ID',
          value: 'id',
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
          text: 'WALLET',
          value: 'wallet',
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
      profitBinaryItems: [],
      profitBinaryHeaders: [
        {
          text: 'ID',
          value: 'id',
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
          text: 'WALLET',
          value: 'wallet',
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
      profitROIItems: [],
      profitROIHeaders: [
        {
          text: 'ID',
          value: 'id',
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
          text: 'WALLET',
          value: 'wallet',
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
    for (let i = 0; i < 100; i++) {
      this.profitIBItems[i] = {}
      this.profitIBItems[i].id = i
      this.profitIBItems[i].value = `${+(Math.random() * 1000).toFixed(3)} USD`
      this.profitIBItems[i].wallet = 'IB Wallet'
      this.profitIBItems[i].date = new Date().toDateString()
    }
    for (let i = 0; i < 100; i++) {
      this.profitBinaryItems[i] = {}
      this.profitBinaryItems[i].id = i
      this.profitBinaryItems[i].value = `${+(Math.random() * 1000).toFixed(
        3
      )} USD`
      this.profitBinaryItems[i].wallet =
        Math.random() < 0.5 ? 'IB Wallet' : 'ROI Wallet'
      this.profitBinaryItems[i].date = new Date().toDateString()
    }
    for (let i = 0; i < 100; i++) {
      this.profitROIItems[i] = {}
      this.profitROIItems[i].id = i
      this.profitROIItems[i].value = `${+(Math.random() * 1000).toFixed(3)} USD`
      this.profitROIItems[i].wallet = 'ROI Wallet'
      this.profitROIItems[i].date = new Date().toDateString()
    }
  },
}
</script>
<style lang="scss" scoped>
.border-bottom {
  border-bottom: 1px solid darken(white, 20%);
}
</style>
