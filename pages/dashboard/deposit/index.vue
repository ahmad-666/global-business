<template>
  <div class="page">
    <h6 class="text-h5 grey--text text--lighten-1 font-weight-regular">
      Wallet
    </h6>
    <dashboard-bread-crumb :items="breadcrumbItems"></dashboard-bread-crumb>
    <div class="cards d-flex align-stretch flex-wrap">
      <div v-for="info in infoCards" :key="info.title" class="card">
        <dashboard-info-card
          :title="info.title"
          :link="info.link"
          :sub-title="info.subTitle"
          :icon="info.icon"
          :value="info.value"
        ></dashboard-info-card>
      </div>
    </div>
    <div class="content d-flex">
      <div class="left flex-shrink-0">
        <div class="customCard pa-4">
          <img
            src="/imgs/sezar-themes/light-blue-ltr/images/1.jpg"
            alt="/imgs/sezar-themes/light-blue-ltr/images/1.jpg"
          />
          <div class="content">
            <p class="text-body-1 white--text">Deposit</p>
            <v-btn
              dark
              class="
                secondary
                primary--text
                px-8
                py-6
                mx-auto
                mt-12
                text-body-1
                font-weight-regular
                myBtn
                d-flex
              "
              >Deposit</v-btn
            >
          </div>
        </div>
        <p
          class="
            pa-2
            text-center
            indigo
            darken-4
            blue--text
            text--lighten-1
            mt-4
            text-body-2
          "
        >
          The Gateway is ACTIVE
        </p>
      </div>
      <div class="right flex-grow-1 ml-4">
        <v-card dark color="secondary" class="px-4 pb-12">
          <v-card-title class="font-weight-regular text-body-1"
            >Your Invoices</v-card-title
          >
          <v-data-table
            :items="invoicesData"
            :headers="invoicesDataHeaders"
            class="transparent mt-4"
            :search="tableFilter"
            :items-per-page="pageSize"
            :hide-default-footer="true"
            :page="page"
          >
            <template #top>
              <div class="topTable d-flex justify-space-between align-center">
                <div class="pageSizeSelect">
                  <v-select
                    v-model="pageSize"
                    :items="pages"
                    outlined
                    dense
                  ></v-select>
                </div>

                <div class="filterInput">
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
                  justify-space-between
                  align-center
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
                ></v-pagination>
              </div>
            </template>
            <template #[`item.taxId`]="{ item }">
              <p class="primary--text">{{ item.taxId }}</p>
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
    </div>
  </div>
</template>
<script>
import DashboardBreadCrumb from '~/components/dashboard/DashboardBreadCrumb.vue'
import DashboardInfoCard from '~/components/dashboard/DashboardInfoCard.vue'
export default {
  components: {
    DashboardBreadCrumb,
    DashboardInfoCard,
  },
  layout: 'dashboard',
  data() {
    return {
      breadcrumbItems: [
        { text: 'My Wallet', disabled: false, to: '/dashboard/deposit' },
      ],
      infoCards: [],
      invoicesData: [],
      invoicesDataHeaders: [
        {
          text: 'ID',
          value: 'id',
          sortable: true,
          align: 'start',
        },
        {
          text: 'TaxID',
          value: 'taxId',
          sortable: true,
          align: 'start',
        },
        {
          text: 'Price/USD',
          value: 'price',
          sortable: true,
          align: 'start',
        },
        {
          text: 'Status',
          value: 'status',
          sortable: true,
          align: 'start',
        },
      ],
      pageSize: 10, // set init value for v-model
      pages: [10, 25, 50, 100],
      page: 1,
      tableFilter: '',
      invoicesTotalLength: 0, // this will come from server
    }
  },
  fetch() {
    this.infoCards = [
      {
        title: 'Balance',
        icon: 'fas fa-dollar-sign',
        value: 8.17,
        subTitle: 'Account Balance',
        link: '/dashboard/deposit',
      },
      {
        title: 'ROI Wallet',
        icon: 'fas fa-dollar-sign',
        value: 98.55,
        subTitle: 'Account Balance',
        link: '/dashboard/deposit',
      },
      {
        title: 'IB Wallet',
        icon: 'fas fa-dollar-sign',
        value: 8.17,
        subTitle: 'Account Balance',
        link: '/dashboard/deposit',
      },
    ]
    for (let i = 0; i < 100; i++) {
      this.invoicesData[i] = {}
      this.invoicesData[i].id = i
      this.invoicesData[i].taxId = 'INVOICE_UH1580154401'
      this.invoicesData[i].price = +(Math.random() * 1000).toFixed(3)
      this.invoicesData[i].status =
        Math.random() < 0.5 ? 'confirmed payment' : 'unconfirmed'
    }
    this.invoicesTotalLength = this.invoicesData.length
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
<style lang="scss" scoped>
.card {
  width: calc((100% - (3 * 3em)) / 3);
  margin: 1.5em;
}
.content {
  .left {
    width: 45em;
  }
}
.customCard {
  height: 25em;
  position: relative;
  img {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 1;
  }
  .content {
    position: relative;
    z-index: 2;
    width: 100%;
    height: 100%;
  }
  .myBtn {
    outline: 1px solid royalblue;
  }
}
.pageSizeSelect {
  width: 10em;
}
.filterInput {
  width: 30em;
}
.tableFooter {
  width: 100%;
}
.statusText {
  max-width: 10em;
}
</style>
