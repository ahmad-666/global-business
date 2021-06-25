<template>
  <div class="page">
    <h6 class="text-h5 grey--text text--lighten-1 font-weight-regular">
      My Network
    </h6>
    <dashboard-bread-crumb :items="breadcrumbItems"></dashboard-bread-crumb>
    <div class="summery mt-6 ml-n3 d-flex justify-center">
      <nuxt-link
        :to="`/dashboard/binarySummery/${rootBinarySummary.id}`"
        class="item d-block"
      >
        <dashboard-binary-summary
          :user-id="rootBinarySummary.userId"
          :total-members="rootBinarySummary.totalMembers"
          :left="rootBinarySummary.left"
          :right="rootBinarySummary.right"
        ></dashboard-binary-summary>
      </nuxt-link>
    </div>
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
        },
      ],
      rootBinarySummary: {},
    }
  },
  fetch() {
    this.rootBinarySummary = {
      id: 1,
      userId: 'FTG886',
      totalMembers: 6,
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
    }
  },
  methods: {},
}
</script>
<style lang="scss" scoped>
.item {
  width: 50%;
}
@media screen and (max-width: 1084px) {
  .item {
    width: 90%;
  }
}
</style>
