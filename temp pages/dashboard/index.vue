<template>
  <div class="page">
    <h6 class="text-h5 grey--text text--lighten-1 font-weight-regular">
      Dashboard
    </h6>
    <dashboard-bread-crumb :items="breadcrumbItems"></dashboard-bread-crumb>
    <div class="content d-flex flex-column flex-lg-row">
      <div class="left flex-shrink-1">
        <v-img
          src="imgs/sezar-themes/light-blue-ltr/images/photo_2020-12-31_22-03-42.jpg"
          width="100%"
          height="20em"
        />
        <div class="profitCard mt-4">
          <dashboard-profile-card
            :income-limit="incomeLimit"
            :roi-profit="roiProfit"
            :ib-profit="ibProfit"
            :binary-profit="binaryProfit"
            :packages-profit="packagesProfit"
            :max-profit="maxProfit"
            :percent="75"
          ></dashboard-profile-card>
        </div>
      </div>
      <div class="right flex-shrink-2 ml-0 ml-lg-6 flex-grow-1">
        <div
          class="cards d-flex flex-column flex-md-row align-stretch flex-wrap"
        >
          <div v-for="card in infoCards" :key="card.title" class="card">
            <dashboard-info-card
              :title="card.title"
              :icon="card.icon"
              :value="card.value"
              :sub-title="card.subTitle"
              :link="card.link"
            ></dashboard-info-card>
          </div>
        </div>
        <div class="archiveCard mt-4">
          <dashboard-archive-card
            :dates="archiveDates"
          ></dashboard-archive-card>
        </div>
      </div>
    </div>
    <div class="links d-flex flex-column flex-md-row mt-10">
      <v-card dark class="px-4 flex-grow-1" color="secondary">
        <v-card-title class="text-subtitle-1 font-weight-regular"
          >Your Left Binary Link</v-card-title
        >
        <v-text-field outlined :value="leftLink" dense disabled></v-text-field>
      </v-card>
      <v-card
        dark
        class="px-4 flex-grow-1 mt-4 mt-md-0 ml-0 ml-md-4"
        color="secondary"
      >
        <v-card-title class="text-subtitle-1 font-weight-regular"
          >Your Right Binary Link</v-card-title
        >
        <v-text-field outlined :value="rightLink" dense disabled></v-text-field>
      </v-card>
    </div>
    <div class="tables mt-4 d-flex">
      <v-card color="secondary" dark class="px-4 pb-4 flex-grow-1">
        <v-card-title class="text-h6">My Referral Statistics</v-card-title>
        <v-data-table
          class="secondary"
          :items="referralStatisticsItems"
          :headers="referralStatisticsHeaders"
          :hide-default-footer="true"
        ></v-data-table>
      </v-card>
    </div>
  </div>
</template>
<script>
import DashboardBreadCrumb from '~/components/dashboard/DashboardBreadCrumb.vue'
import DashboardInfoCard from '~/components/dashboard/DashboardInfoCard.vue'
import DashboardArchiveCard from '~/components/dashboard/DashboardArchiveCard.vue'
import DashboardProfileCard from '~/components/dashboard/DashboardProfitCard.vue'
export default {
  components: {
    DashboardBreadCrumb,
    DashboardInfoCard,
    DashboardArchiveCard,
    DashboardProfileCard,
  },
  layout: 'dashboard',
  data() {
    return {
      breadcrumbItems: [
        {
          text: 'Dashboard',
          disabled: false,
          to: '/dashboard',
        },
      ],
      infoCards: [],
      archiveDates: [],
      incomeLimit: 0,
      roiProfit: 0,
      ibProfit: 0,
      binaryProfit: 0,
      packagesProfit: 0,
      maxProfit: 0,
      referralStatisticsItems: [],
      referralStatisticsHeaders: [
        {
          text: 'UserID',
          value: 'id',
          align: 'start',
          sortable: false,
        },
        {
          text: 'UserName',
          value: 'name',
          align: 'start',
          sortable: false,
        },
        {
          text: 'UserEmail',
          value: 'email',
          align: 'start',
          sortable: false,
        },
        {
          text: 'Status',
          value: 'status',
          align: 'start',
          sortable: false,
        },
      ],
      leftLink: '',
      rightLink: '',
    }
  },
  fetch() {
    this.infoCards = [
      {
        title: 'Your Users',
        icon: 'fas fa-users',
        value: 0,
        subTitle: 'Your referral List',
        link: '/dashboard/referralCommision',
      },
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
        value: 94.0,
        subTitle: 'Account Balance',
        link: '/dashboard/deposit',
      },
    ]
    this.archiveDates = [
      '2021/01/01 08:57:08',
      '2021/01/02 08:57:08',
      '2021/01/03 08:57:08',
    ]
    this.incomeLimit = 855
    this.roiProfit = 58.05
    this.ibProfit = 87.0
    this.binaryProfit = 0.0
    this.packagesProfit = 145.05
    this.maxProfit = 1000
    this.referralStatisticsItems = [
      {
        id: 1,
        name: 'name1',
        email: 'something@gmail.com',
        status: 'status value',
      },
      {
        id: 2,
        name: 'name2',
        email: 'something@gmail.com',
        status: 'status value',
      },
      {
        id: 3,
        name: 'name3',
        email: 'something@gmail.com',
        status: 'status value',
      },
    ]
    this.leftLink = 'http://forex-tg.proregister.html?ref=886L'
    this.rightLink = 'http://forex-tg.proregister.html?ref=886R'
  },
}
</script>
<style lang="scss" scoped>
.card {
  width: calc((100% - (2 * 3em)) / 2);
  margin: 1.5em;
}
@media screen and (max-width: 750px) {
  .card {
    width: 100%;
    margin: 1.5em 0;
  }
}
</style>
