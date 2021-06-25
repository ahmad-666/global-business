<template>
  <div class="page">
    <dashboard-bread-crumb :items="breadcrumbItems"></dashboard-bread-crumb>

    <h6 class="text-h6 textColor--text font-weight-regular">Referrals</h6>
    <v-card class="pa-4 mt-6" color="cardColor">
      <v-card-title class="d-flex justify-center align-center"
        >Your Referral ID is : {{ referralId }}</v-card-title
      >
      <v-data-table
        :hide-default-footer="true"
        :items="referralItems"
        :headers="referralHeaders"
        class="referralTable transparent"
      >
        <template #[`header.id`]="{ header }">
          <p class="pa-2 white--text text-body-2 font-weight-bold blue">
            {{ header.text }}
          </p>
        </template>
        <template #[`header.username`]="{ header }">
          <p class="pa-2 white--text text-body-2 font-weight-bold blue">
            {{ header.text }}
          </p>
        </template>
      </v-data-table>
      <p class="mt-4 text-body-1 font-weight-light">
        Total Count: {{ totalReferrals }}
      </p>
    </v-card>
    <div class="mt-6">
      <dashboard-table
        :items="referralsTransactionItems"
        :headers="referralTransactionHeaders"
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
          text: 'Referrals Commission',
          disabled: false,
          to: '/profile/referralCommission',
        },
      ],
      referralItems: [],
      referralHeaders: [
        {
          text: 'ID',
          value: 'id',
          sortable: false,
          align: 'start',
        },
        {
          text: 'Username',
          value: 'username',
          sortable: false,
          align: 'start',
        },
      ],
      referralsTransactionItems: [],
      referralTransactionHeaders: [
        {
          text: 'ID',
          value: 'id',
          sortable: true,
          align: 'start',
        },
        {
          text: 'UserID',
          value: 'userId',
          sortable: true,
          align: 'start',
        },
        {
          text: 'FullName',
          value: 'fullName',
          sortable: true,
          align: 'start',
        },
        {
          text: 'Email',
          value: 'email',
          sortable: true,
          align: 'start',
        },
        {
          text: 'Amount',
          value: 'amount',
          sortable: true,
          align: 'start',
        },
        {
          text: 'Date',
          value: 'date',
          sortable: true,
          align: 'start',
        },
      ],
    }
  },
  fetch() {
    for (let i = 0; i < 5; i++) {
      this.referralItems[i] = {}
      this.referralItems[i].id = i
      this.referralItems[i].username = 'username value'
    }
    for (let i = 0; i < 100; i++) {
      this.referralsTransactionItems[i] = {}
      this.referralsTransactionItems[i].id = i
      this.referralsTransactionItems[i].userId = 'FTG894'
      this.referralsTransactionItems[i].fullName = 'ali mousaei joo'
      this.referralsTransactionItems[i].email = 'example@gmail.com'
      this.referralsTransactionItems[i].amount = `${(
        Math.random() * 1000
      ).toFixed(2)} $`
      this.referralsTransactionItems[i].date = new Date().toDateString()
    }
  },
  computed: {
    referralId() {
      return this.$store.getters.referralId
    },
    totalReferrals() {
      return this.referralItems.length
    },
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
