<template>
  <div class="page">
    <p
      class="error white--text text-body-2 font-weight-regular pa-3 rounded-lg"
    >
      You can withdraw from your wallets just every first day of month.
    </p>
    <h6 class="text-h5 grey--text text--lighten-1 font-weight-regular mt-10">
      Withdraw Unit
    </h6>
    <dashboard-bread-crumb :items="breadcrumbItems"></dashboard-bread-crumb>
    <div class="mt-6">
      <dashboard-withdraw-card></dashboard-withdraw-card>
    </div>
    <v-card dark color="secondary" class="pa-4 mt-12">
      <v-data-table
        :items="withdrawItems"
        :headers="withdrawHeaders"
        class="transparent"
        :search="tableFilter"
        :items-per-page="pageSize"
        :hide-default-footer="true"
        :page="page"
      >
        <template #top>
          <div
            class="
              topTable
              d-flex
              flex-column flex-md-row
              justify-md-space-between
              align-md-center
            "
          >
            <div class="pageSizeSelect">
              <v-select
                v-model="pageSize"
                :items="pages"
                outlined
                dense
              ></v-select>
            </div>

            <div class="filterInput mt-2 mt-md-0">
              <v-text-field
                v-model="tableFilter"
                outlined
                label="filter table rows"
                dense
              ></v-text-field>
            </div>
          </div>
        </template>
        <template #footer>
          <div
            class="
              tableFooter
              d-flex
              flex-column flex-md-row
              justify-md-space-between
              align-md-center
              mt-4
            "
          >
            <p class="font-weight-light text-body-2 flex-shrink-0">
              Showing
              {{ startText }}
              to
              {{ endText }}
              of {{ totalEntries }} entries
            </p>
            <v-spacer></v-spacer>
            <v-pagination
              v-model="page"
              :length="totalPages"
              :total-visible="5"
              class="mt-2 mt-md-0"
            ></v-pagination>
          </div>
        </template>
        <template #[`item.value`]="{ item }">
          <p class="primary--text">{{ item.value }}</p>
        </template>
        <template #[`item.status`]="{ item }">
          <p
            v-if="item.status === 'confirmed payment'"
            class="
              text-caption
              pa-1
              text-center
              rounded-l
              white--text
              success
              statusText
            "
          >
            {{ item.status }}
          </p>
          <p
            v-else
            class="
              text-caption
              pa-1
              text-center
              rounded-l
              white--text
              error
              statusText
            "
          >
            {{ item.status }}
          </p>
        </template>
      </v-data-table>
    </v-card>
  </div>
</template>
<script>
import DashboardWithdrawCard from '~/components/dashboard/DashboardWithdrawCard.vue'
export default {
  components: {
    DashboardWithdrawCard,
  },
  layout: 'dashboard',
  data() {
    return {
      breadcrumbItems: [
        {
          text: 'Withdraw',
          disabled: false,
          to: '/dashboard/withdraw',
        },
      ],
      withdrawItems: [],
      withdrawHeaders: [
        {
          text: 'ID',
          value: 'id',
          sortable: true,
          align: 'start',
        },
        {
          text: 'VALUE',
          value: 'value',
          sortable: true,
          align: 'start',
        },
        {
          text: 'DATE',
          value: 'date',
          sortable: true,
          align: 'start',
        },
        {
          text: 'Status',
          value: 'status',
          sortable: true,
          align: 'start',
          width: '15em',
        },
      ],
      pageSize: 10, // set init value for v-model
      pages: [10, 25, 50, 100],
      page: 1,
      tableFilter: '',
      withdrawItemsTotalLength: 0, // this will come from server
    }
  },
  fetch() {
    for (let i = 0; i < 100; i++) {
      this.withdrawItems[i] = {}
      this.withdrawItems[i].id = i
      this.withdrawItems[i].value = +(Math.random() * 1000).toFixed(3)
      this.withdrawItems[i].date = new Date().toDateString()

      this.withdrawItems[i].status =
        Math.random() < 0.5 ? 'confirmed payment' : 'unconfirmed'
    }
    this.withdrawItemsTotalLength = this.withdrawItems.length
  },
  computed: {
    totalEntries() {
      return this.withdrawItems.length
    },
    totalPages() {
      return Math.ceil(this.withdrawItems.length / this.pageSize)
    },
    startText() {
      return (this.page - 1) * this.pageSize + 1
    },
    endText() {
      return (this.page - 1) * this.pageSize + this.pageSize
    },
  },
}
</script>
<style lang="scss" scoped></style>
