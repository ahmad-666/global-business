<template>
  <div class="page">
    <dashboard-bread-crumb :items="breadcrumbItems"></dashboard-bread-crumb>
    <h6 class="text-h6 titleColor--text font-weight-regular">Deposit</h6>

    <v-container class="mt-4">
      <v-row align="stretch">
        <v-col
          v-for="infoCard in infoCards"
          :key="infoCard.id"
          cols="12"
          sm="6"
          md="4"
          lg="3"
        >
          <general-info-card
            :title="infoCard.title"
            :icon="infoCard.icon"
            :value="infoCard.value"
            :icon-gradient="infoCard.iconGradient"
            :action-icon="infoCard.actionIcon"
            :action-text="infoCard.actionText"
          ></general-info-card>
        </v-col>
      </v-row>
    </v-container>
    <div
      class="content d-flex flex-column flex-lg-row align-center align-lg-start"
    >
      <div class="left flex-shrink-0 flex-lg-shrink-1">
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
                indigo
                darken-4
                primary--text
                px-8
                py-6
                mx-auto
                mt-12
                text-body-1
                font-weight-regular
                d-flex
              "
              @click="depositHandler"
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
      <div class="right flex-grow-0 flex-lg-grow-1 mt-4 ml-0 mt-lg-0 ml-lg-4">
        <v-card color="cardColor" class="px-4 pb-12">
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
              <div
                class="
                  topTable
                  d-flex
                  flex-column flex-md-row
                  justify-start justify-md-space-between
                  align-start align-md-center
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
                  flex-column flex-md-row
                  justify-start justify-md-space-between
                  align-start align-md-center
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
                  class="mt-4 mt-md-0 ml-0 ml-md-4"
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
                v-if="item.status === 'confirmed'"
                class="
                  text-caption
                  pa-1
                  text-center
                  rounded-l
                  white--text
                  success
                  statusText
                  success-gradient
                "
              >
                {{ item.status }}
              </p>
              <p
                v-else-if="item.status === 'unconfirmed'"
                class="
                  text-caption
                  pa-1
                  text-center
                  rounded-l
                  white--text
                  error
                  statusText
                  error-gradient
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
                  warning
                  statusText
                  warning-gradient
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
import GeneralInfoCard from '~/components/profile/cards/GeneralInfoCard.vue'
export default {
  components: {
    DashboardBreadCrumb,
    GeneralInfoCard,
  },
  layout: 'admin',
  data() {
    return {
      breadcrumbItems: [
        { text: 'Deposit', disabled: false, to: '/profile/deposit' },
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
          width: '16em',
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
        id: 1,
        icon: 'mdi-credit-card-check-outline',
        title: 'balance',
        value: '8.17$',
        iconGradient: 'linear-gradient(to bottom left,#ff8d72,#ff6491,#ff8d72)',
        actionIcon: 'mdi-credit-card-check-outline',
        actionText: 'short description about this card',
      },
      {
        id: 2,
        icon: 'mdi-wallet-plus-outline',
        title: 'ib wallet',
        value: '124.74$',
        iconGradient: 'linear-gradient(to bottom left,#e14eca,#ba54f5,#e14eca)',
        actionIcon: 'mdi-wallet-plus-outline',
        actionText: 'short description about this card',
      },
      {
        id: 3,
        icon: 'mdi-wallet-plus-outline',
        title: 'roi wallet',
        value: '94.0$',
        iconGradient: 'linear-gradient(to bottom left,#1d8cf8,#3358f4,#1d8cf8)',
        actionIcon: 'mdi-wallet-plus-outline',
        actionText: 'short description about this card',
      },
      {
        id: 4,
        icon: 'mdi-account-convert-outline',
        title: 'Users',
        value: '15',
        iconGradient: 'linear-gradient(to bottom left,#fd5d93,#ec250d,#fd5d93)',
        actionIcon: 'mdi-account-convert-outline',
        actionText: 'short description about this card',
      },
    ]
    for (let i = 0; i < 100; i++) {
      this.invoicesData[i] = {}
      this.invoicesData[i].id = i
      this.invoicesData[i].taxId = 'INVOICE_UH1580154401'
      this.invoicesData[i].price = +(Math.random() * 1000).toFixed(3)
      const randVal = Math.random()
      this.invoicesData[i].status =
        randVal < 0.33
          ? 'unconfirmed'
          : (randVal > 0.33) & (randVal < 0.66)
          ? 'confirmed'
          : 'pending'
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
  methods: {
    depositHandler() {
      this.$router.push('/profile/wallet')
    },
  },
}
</script>
<style lang="scss" scoped>
.content {
  .left {
    width: 45em;
  }
}
@media screen and (max-width: 1084px) {
  .content {
    .left,
    .right {
      width: 100%;
    }
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
    object-fit: cover;
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
// .pageSizeSelect {
//   width: 10em;
// }
// .filterInput {
//   width: 30em;
// }
// .tableFooter {
//   width: 100%;
// }
// .statusText {
//   max-width: 10em;
// }
</style>
