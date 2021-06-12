<template>
  <div class="page">
    <h6 class="text-h5 grey--text text--lighten-1 font-weight-regular">
      My Network
    </h6>
    <dashboard-bread-crumb :items="breadcrumbItems"></dashboard-bread-crumb>
    <div
      class="
        items
        mt-6
        d-flex
        flex-column flex-lg-row
        justify-space-between
        align-center
        flex-nowrap
      "
      :class="{ 'flex-row-reverse': !binarySummaries.leftSummary }"
    >
      <nuxt-link
        v-if="binarySummaries.leftSummary"
        class="item d-block"
        :to="`/dashboard/binarySummery/${binarySummaries.leftSummary.id}`"
      >
        <dashboard-binary-summary
          :user-id="binarySummaries.leftSummary.userId"
          :total-members="binarySummaries.leftSummary.totalMembers"
          :left="binarySummaries.leftSummary.left"
          :right="binarySummaries.leftSummary.right"
        ></dashboard-binary-summary>
      </nuxt-link>
      <nuxt-link
        v-if="binarySummaries.rightSummary"
        class="item d-block"
        :to="`/dashboard/binarySummery/${binarySummaries.rightSummary.id}`"
      >
        <dashboard-binary-summary
          :user-id="binarySummaries.rightSummary.userId"
          :total-members="binarySummaries.rightSummary.totalMembers"
          :left="binarySummaries.rightSummary.left"
          :right="binarySummaries.rightSummary.right"
        ></dashboard-binary-summary>
      </nuxt-link>
    </div>
    <v-btn
      class="pa-4 primary rounded-lg mt-8 mx-auto d-flex"
      dark
      @click="oneLevelBack"
    >
      <v-icon size="12" class="mr-2">fas fa-chevron-left</v-icon>
      go one level back
    </v-btn>
  </div>
</template>
<script>
import DashboardBinarySummary from '~/components/dashboard/DashsboardBinarySummary.vue'
export default {
  components: {
    DashboardBinarySummary,
  },
  layout: 'dashboard',
  data() {
    return {
      breadcrumbItems: [
        {
          text: 'Binary Summery',
          disabled: false,
          to: '/dashboard/binarySummery',
          exact: true,
        },
      ],
      binarySummaries: [],
    }
  },
  fetch() {
    if (this.$route.params.id === '1') {
      this.binarySummaries = {
        leftSummary: {
          id: 2,
          userId: 'FTG886',
          totalMembers: 2,
          left: {
            totalMembers: 0,
            monthInvest: 0,
            totalInvest: 0,
          },
          right: {
            totalMembers: 0,
            monthInvest: 0,
            totalInvest: 0,
          },
        },
        // rightSummary: null,
        rightSummary: {
          id: 3,
          userId: 'FTG886',
          totalMembers: 2,
          left: {
            totalMembers: 0,
            monthInvest: 0,
            totalInvest: 0,
          },
          right: {
            totalMembers: 0,
            monthInvest: 0,
            totalInvest: 0,
          },
        },
      }
    } else {
      this.binarySummaries = {
        // leftSummary: null,
        leftSummary: {
          id: 4,
          userId: 'FTG886',
          totalMembers: 0,
          left: {
            totalMembers: 0,
            monthInvest: 0,
            totalInvest: 0,
          },
          right: {
            totalMembers: 0,
            monthInvest: 0,
            totalInvest: 0,
          },
        },
        rightSummary: {
          id: 5,
          userId: 'FTG886',
          totalMembers: 0,
          left: {
            totalMembers: 0,
            monthInvest: 0,
            totalInvest: 0,
          },
          right: {
            totalMembers: 0,
            monthInvest: 0,
            totalInvest: 0,
          },
        },
      }
    }
  },
  methods: {
    oneLevelBack() {
      this.$router.back()
    },
  },
}
</script>
<style lang="scss" scoped>
.item {
  width: 50%;
  margin-left: 2em;
  margin-right: 2em;
}
@media screen and (max-width: 1084px) {
  .item {
    width: 90%;
    margin-left: 0em;
    margin-right: 2em;
  }
}
</style>
