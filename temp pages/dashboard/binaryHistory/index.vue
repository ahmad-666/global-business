<template>
  <div class="page">
    <h6 class="text-h5 grey--text text--lighten-1 font-weight-regular">
      My Income
    </h6>
    <dashboard-bread-crumb :items="breadcrumbItems"></dashboard-bread-crumb>
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
  layout: 'dashboard',
  data() {
    return {
      breadcrumbItems: [
        {
          text: 'Binary Commision',
          disabled: false,
          to: '/dashboard/binaryHistory',
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
