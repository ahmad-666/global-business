<template>
  <div class="page">
    <h6 class="text-h5 grey--text text--lighten-1 font-weight-regular">
      My Network
    </h6>
    <dashboard-bread-crumb :items="breadcrumbItems"></dashboard-bread-crumb>
  </div>
</template>
<script>
export default {
  components: {},
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
    }
  },

  methods: {},
}
</script>
<style lang="scss" scoped></style>
