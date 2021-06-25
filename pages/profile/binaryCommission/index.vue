<template>
  <div class="page">
    <dashboard-bread-crumb :items="breadcrumbItems"></dashboard-bread-crumb>

    <h6 class="text-h6 textColor--text font-weight-regular">
      Binary Commission
    </h6>
    <div class="mt-6">
      <dashboard-table
        :items="binaryItems"
        :headers="binaryHeaders"
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
  layout: 'admin',
  data() {
    return {
      breadcrumbItems: [
        {
          text: 'Binary Commission',
          disabled: false,
          to: '/profile/binaryCommission',
        },
      ],
      binaryItems: [],
      binaryHeaders: [
        {
          text: 'ID',
          value: 'id',
          sortable: false,
          align: 'start',
        },
        {
          text: 'VALUE',
          value: 'value',
          sortable: false,
          align: 'start',
        },
        {
          text: 'DATE',
          value: 'date',
          sortable: false,
          align: 'start',
        },
      ],
    }
  },
  fetch() {
    for (let i = 0; i < 100; i++) {
      this.binaryItems[i] = {}
      this.binaryItems[i].id = i
      this.binaryItems[i].value = `${(Math.random() * 1000).toFixed(2)} $`
      this.binaryItems[i].date = new Date().toDateString()
    }
  },
}
</script>
<style lang="scss">
.referralTable {
  table {
    thead {
      tr {
        th {
          padding: 0 0 !important;
        }
      }
    }
  }
}
</style>
