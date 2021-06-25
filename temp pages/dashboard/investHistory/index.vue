<template>
  <div class="page">
    <h6 class="text-h5 grey--text text--lighten-1 font-weight-regular">
      Investment
    </h6>
    <dashboard-bread-crumb :items="breadcrumbItems"></dashboard-bread-crumb>
    <div class="mt-6">
      <dashboard-table
        :items="investItems"
        :headers="investHeaders"
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
          text: 'Invests List',
          disabled: false,
          to: '/dashboard/investHistory',
        },
      ],
      investItems: [],
      investHeaders: [
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
          text: 'PROFIT(Monthly)',
          value: 'profit',
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
      this.investItems[i] = {}
      this.investItems[i].id = i
      this.investItems[i].value = `${+(Math.random() * 1000).toFixed(3)} USD`
      this.investItems[i].profit = `${+(Math.random() * 12).toFixed(2)} %`
      this.investItems[i].date = new Date().toDateString()
    }
  },
}
</script>
<style lang="scss" scoped></style>
