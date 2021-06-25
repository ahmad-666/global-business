<template>
  <div>
    <dashboard-bread-crumb :items="breadcrumbItems"></dashboard-bread-crumb>
    <h6 class="text-h6 titleColor--text font-weight-regular">My Network</h6>
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
        :to="`/profile/network/${binarySummaries.leftSummary.id}`"
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
        :to="`/profile/network/${binarySummaries.rightSummary.id}`"
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
      color="primary"
      class="white--text py-3 px-5 mt-6 mx-auto d-flex"
      @click="goBack"
      >Go One Level Back</v-btn
    >
  </div>
</template>
<script>
// import BinaryTree from '~/components/profile/BinaryTree.vue'
import DashboardBinarySummary from '~/components/dashboard/DashsboardBinarySummary.vue'
export default {
  components: {
    // BinaryTree,
    DashboardBinarySummary,
  },
  layout: 'admin',
  data() {
    return {
      breadcrumbItems: [
        { text: 'Network', disabled: false, to: '/profile/network' },
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
    goBack() {
      this.$router.back()
    },
  },
}
</script>
<style lang="scss" scoped>
.item {
  width: 60%;
}
@media screen and (max-width: 1000px) {
  .item {
    width: 75%;
  }
}
@media screen and (max-width: 750px) {
  .item {
    width: 100%;
  }
}
</style>
