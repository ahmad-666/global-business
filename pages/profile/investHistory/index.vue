<template>
  <div>
    <dashboard-bread-crumb :items="breadcrumbItems"></dashboard-bread-crumb>
    <h6 class="text-h6 titleColor--text font-weight-regular">Invest History</h6>
    <v-container>
      <v-row>
        <v-col cols="12" md="6" lg="4">
          <v-card color="cardColor">
            <v-card-text
              class="
                d-flex
                flex-column
                align-center
                titleColor--text
                font-weight-bold
              "
            >
              <p class="text-h6">This Month Invoices</p>
              <p class="text-h6">${{ monthInvoices }}</p>
              <p class="text-h6">Last Month Invoices</p>
              <p class="text-h6">${{ lastMonthInvoices }}</p>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" lg="8">
          <v-card color="cardColor" class="pa-4">
            <v-card-title
              class="
                pa-0
                white--text
                text-subtitle-1
                font-weight-bold
                text-capitalize
              "
              >Invoices</v-card-title
            >
            <v-data-table
              :items="invoicesData"
              :headers="invoicesHeaders"
              :search="tableFilter"
              :items-per-page="pageSize"
              :hide-default-footer="true"
              :page="page"
              class="mt-4 transparent"
            >
              <template #top>
                <div
                  class="
                    topTable
                    d-flex
                    flex-column flex-md-row
                    justify-md-space-between
                  "
                >
                  <div class="page-size-select">
                    <v-select
                      v-model="pageSize"
                      :items="pages"
                      outlined
                      dense
                    ></v-select>
                  </div>

                  <div class="filter-input">
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
                    class="mt-4 mt-md-0"
                    :length="totalPages"
                    :total-visible="5"
                  ></v-pagination>
                </div>
              </template>
              <template #item.user="slotProps">
                <div class="my-2">
                  <p>{{ slotProps.value.split(' ')[0] }}</p>
                  <p>{{ slotProps.value.split(' ')[1] }}</p>
                </div>
              </template>
              <template #item.status="slotProps">
                <nuxt-link
                  v-if="slotProps.value === 'accepted'"
                  :to="`/profile/depositMessage/${slotProps.item.id}`"
                >
                  <v-chip color="success" class="cursor-pointer"
                    >Accepted</v-chip
                  >
                </nuxt-link>
                <nuxt-link
                  v-else-if="slotProps.value === 'rejected'"
                  :to="`/profile/depositMessage/${slotProps.item.id}`"
                >
                  <v-chip color="error" class="cursor-pointer">Rejected</v-chip>
                </nuxt-link>

                <nuxt-link
                  v-else
                  :to="`/profile/depositMessage/${slotProps.item.id}`"
                >
                  <v-chip color="warning" class="cursor-pointer"
                    >Pending</v-chip
                  >
                </nuxt-link>
              </template>
            </v-data-table>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
export default {
  components: {},
  layout: 'admin',
  data() {
    return {
      breadcrumbItems: [
        {
          text: 'Invest History',
          disabled: false,
          to: '/profile/investHistory',
        },
      ],
      tableFilter: '',
      page: 1,
      pageSize: 10,
      pages: [10, 25, 50, 100],
      monthInvoices: 0,
      lastMonthInvoices: 0,
      invoicesData: [],
      invoicesHeaders: [
        {
          text: 'ID',
          value: 'id',
          sortable: true,
          align: 'start',
        },
        {
          text: 'ADDRESS',
          value: 'address',
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
          text: 'USER',
          value: 'user',
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
          text: 'STATUS',
          value: 'status',
          sortable: true,
          align: 'start',
        },
      ],
    }
  },
  fetch() {
    this.monthInvoices = 3500037
    this.lastMonthInvoices = 3466880
    for (let i = 0; i < 100; i++) {
      this.invoicesData[i] = {}
      this.invoicesData[i].id = i
      this.invoicesData[i].address = 'address of user'
      this.invoicesData[i].value = `$${(Math.random() * 1000).toFixed(2)}`
      this.invoicesData[i].user = 'FTG100200 ftgx50'
      this.invoicesData[i].date = new Date().toDateString()
      const randVal = Math.random()
      this.invoicesData[i].status =
        randVal < 0.33
          ? 'rejected'
          : randVal > 0.33 && randVal < 0.66
          ? 'accepted'
          : 'pending'
    }
  },
  computed: {
    totalEntries() {
      return this.invoicesData.length
    },
    totalPages() {
      return Math.ceil(this.invoicesData.length / this.pageSize)
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
