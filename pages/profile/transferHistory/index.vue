<template>
  <div class="page">
    <dashboard-bread-crumb :items="breadcrumbItems"></dashboard-bread-crumb>

    <h6 class="text-h6 textColor--text font-weight-regular">Financial</h6>
    <v-card color="cardColor lighten-1" class="mt-6">
      <v-card-title
        class="
          primary
          d-flex
          justify-center
          align-center
          white--text
          pa-3
          text-subtitle-2
          font-weight-bold
        "
      >
        TRANSFERS HISTORY
      </v-card-title>
      <div class="tables px-4 pb-8 d-flex flex-column flex-lg-row">
        <div class="table pa-6 cardColor mt-4 mt-lg-0">
          <p
            class="
              pa-2
              text-center
              white--text
              text-body-1
              font-weight-regular
              accent
            "
          >
            SENT
          </p>
          <v-data-table
            :items="sendItems"
            :headers="sendHeaders"
            class="transparent grey--text"
            :hide-default-footer="true"
          >
          </v-data-table>
        </div>
        <v-spacer></v-spacer>
        <div class="table pa-6 cardColor mt-4 mt-lg-0">
          <p
            class="
              pa-2
              text-center
              white--text
              text-body-1
              font-weight-regular
              accent
            "
          >
            Received
          </p>
          <v-data-table
            :items="receiveItems"
            :headers="receiveHeaders"
            :hide-default-footer="true"
            class="transparent grey--text"
          >
          </v-data-table>
        </div>
      </div>
    </v-card>
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
          text: 'Transfer History ',
          disabled: false,
          to: '/profile/transferHistory',
        },
      ],
      sendItems: [],
      sendHeaders: [
        {
          text: 'Value',
          value: 'value',
          align: 'start',
          sortable: false,
        },
        {
          text: 'Sent To',
          value: 'sentTo',
          align: 'start',
          sortable: false,
        },
        {
          text: 'From Wallet',
          value: 'fromWallet',
          align: 'start',
          sortable: false,
        },
        {
          text: 'Date',
          value: 'date',
          align: 'start',
          sortable: false,
        },
      ],
      receiveItems: [],
      receiveHeaders: [
        {
          text: 'Value',
          value: 'value',
          align: 'start',
          sortable: false,
        },
        {
          text: 'Sent From',
          value: 'sentFrom',
          align: 'start',
          sortable: false,
        },
        {
          text: 'From Wallet',
          value: 'fromWallet',
          align: 'start',
          sortable: false,
        },
        {
          text: 'Date',
          value: 'date',
          align: 'start',
          sortable: false,
        },
      ],
    }
  },
  fetch() {
    for (let i = 0; i < 6; i++) {
      this.sendItems[i] = {}
      this.sendItems[i].value = `${(Math.random() * 1000).toFixed(3)} USD`
      this.sendItems[i].sentTo = 'FTG894'
      this.sendItems[i].fromWallet = 'Main Wallet'
      this.sendItems[i].date = new Date().toDateString()
    }
    for (let i = 0; i < 6; i++) {
      this.receiveItems[i] = {}
      this.receiveItems[i].value = `${(Math.random() * 1000).toFixed(3)} USD`
      this.receiveItems[i].sentFrom = 'FTG884'
      this.receiveItems[i].fromWallet = 'Main Wallet'
      this.receiveItems[i].date = new Date().toDateString()
    }
  },
}
</script>
<style lang="scss" scoped>
.table {
  width: 49%;
}
@media screen and (max-width: 1084px) {
  .table {
    width: 100%;
  }
}
</style>
