<template>
  <div>
    <dashboard-bread-crumb :items="breadcrumbItems"></dashboard-bread-crumb>
    <h6 class="text-h6 titleColor--text font-weight-regular">My Network</h6>
    <v-card color="cardColor" class="mt-6 pb-4 d-flex flex-column align-center">
      <v-card-title class="d-flex flex-column align-center">
        <v-img
          width="6em"
          height="6em"
          class="rounded-circle border-primary"
          :src="imgSrc"
        ></v-img>
        <p class="text-subtitle-1 font-weight-medium mt-2 titleColor--text">
          {{ getUserId }}
        </p>
      </v-card-title>
      <v-container>
        <v-row>
          <v-col cols="12" md="5">
            <p class="text-subtitle-1 titleColor--text font-weight-regular">
              Left Link
            </p>
            <div class="mt-2 d-flex align-stretch width-100">
              <v-text-field
                :value="leftLink"
                outlined
                readonly
                class="text-caption rounded-l-lg rounded-r-0"
                dense
              ></v-text-field>
              <v-btn
                dark
                class="py-5 px-2 indigo rounded-r-lg rounded-l-0"
                @click="showSnack('left')"
              >
                <v-icon size="22">mdi-content-copy</v-icon>
              </v-btn>
            </div>
          </v-col>
          <v-col cols="12" md="2" class="d-flex align-center justify-center">
            <v-icon size="22" class="mx-5" color="primary"
              >mdi-link-variant</v-icon
            >
          </v-col>
          <v-col cols="12" md="5">
            <p class="text-subtitle-1 titleColor--text font-weight-regular">
              Right Link
            </p>
            <div class="mt-2 d-flex align-stretch width-100">
              <v-text-field
                :value="rightLink"
                outlined
                readonly
                class="text-caption rounded-l-lg rounded-r-0"
                dense
              ></v-text-field>
              <v-btn
                dark
                class="py-5 px-2 indigo rounded-r-lg rounded-l-0"
                @click="showSnack('right')"
              >
                <v-icon size="22">mdi-content-copy</v-icon>
              </v-btn>
            </div>
          </v-col>
          <v-snackbar v-model="showLeftSnackBar" dark :timeout="2000">
            <p class="text-subtitle-1 white--text">Copied</p>
          </v-snackbar>
          <v-snackbar v-model="showRightSnackBar" dark :timeout="2000">
            <p class="text-subtitle-1 white--text">Copied</p>
          </v-snackbar>
        </v-row>
      </v-container>
      <v-card-text>
        <v-container>
          <v-row>
            <v-col cols="12" md="6">
              <div>
                <h6
                  class="
                    text-caption
                    grey--text
                    text--lighten-1
                    font-weight-light
                  "
                >
                  Your Left Branch Investment
                </h6>
                <p class="white--text font-weight-medium text-h5 mt-2 mb-5">
                  <v-icon size="22" color="primary" class="mr-2"
                    >mdi-chart-bell-curve-cumulative</v-icon
                  >
                  ${{ leftInvestVal }}
                </p>
                <line-chart
                  :gradient1="leftBranchChartConfig.gradient1"
                  :gradient2="leftBranchChartConfig.gradient12"
                  :labels="leftBranchChartConfig.labels"
                  :datasets="leftBranchChartConfig.datasets"
                  :y-min="leftBranchChartConfig.yMin"
                  :y-max="leftBranchChartConfig.yMax"
                  :show-legend="false"
                ></line-chart>
              </div>
            </v-col>
            <v-col cols="12" md="6">
              <div>
                <h6
                  class="
                    text-caption
                    grey--text
                    text--lighten-1
                    font-weight-light
                  "
                >
                  Your Right Branch Investment
                </h6>
                <p class="white--text font-weight-medium text-h5 mt-2 mb-5">
                  <v-icon size="22" color="primary" class="mr-2"
                    >mdi-chart-bell-curve-cumulative</v-icon
                  >
                  ${{ rightInvestVal }}
                </p>
                <line-chart
                  :gradient1="rightBranchChartConfig.gradient1"
                  :gradient2="rightBranchChartConfig.gradient12"
                  :labels="rightBranchChartConfig.labels"
                  :datasets="rightBranchChartConfig.datasets"
                  :y-min="rightBranchChartConfig.yMin"
                  :y-max="rightBranchChartConfig.yMax"
                  :show-legend="false"
                ></line-chart>
              </div>
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>
    </v-card>
    <!-- <div class="mt-6">
      <h6
        class="
          text-h5
          grey--text
          font-weight-medium
          text--lighten-1 text-center
        "
      >
        Your Network Tree
      </h6>
      <v-container>
        <v-row justify="center" align="center" dense>
          <v-col cols="10" md="8" class="mx-auto">
            <binary-tree :left="nodes.left" :right="nodes.right"></binary-tree>
          </v-col>
        </v-row>
      </v-container>
    </div> -->
    <div class="summery mt-6 d-flex justify-center">
      <nuxt-link
        :to="`/profile/network/${rootBinarySummary.id}`"
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
// import LinkCard from '~/components/profile/cards/LinkCard.vue'
import LineChart from '~/components/profile/charts/LineChart.vue'
// import BinaryTree from '~/components/profile/BinaryTree.vue'
import DashboardBinarySummary from '~/components/dashboard/DashsboardBinarySummary.vue'

export default {
  components: {
    // LinkCard,
    LineChart,
    // BinaryTree,
    DashboardBinarySummary,
  },
  layout: 'admin',
  data() {
    return {
      breadcrumbItems: [
        { text: 'Network', disabled: false, to: '/profile/network' },
      ],
      showLeftSnackBar: false,
      showRightSnackBar: false,
      imgSrc: '',
      leftLink: null,
      rightLink: null,
      leftInvestVal: 0,
      rightInvestVal: 0,
      leftBranchData: [],
      rightBranchData: [],
      leftBranchChartConfig: {
        gradient1: `${this.$vuetify.theme.themes.light.primary}55`,
        gradient2: 'transparent',
      },
      rightBranchChartConfig: {
        gradient1: `${this.$vuetify.theme.themes.light.primary}55`,
        gradient2: 'transparent',
      },
      nodes: {},
      rootBinarySummary: {},
    }
  },
  fetch() {
    this.imgSrc = '/imgs/default-avatar.png'
    this.leftLink = 'http://globalbusiness724.com/page/signup?ref=rlvox0qw'
    this.rightLink = 'http://globalbusiness724.com/page/signup?ref=rlwlvXSA'
    this.leftInvestVal = 750000
    this.rightInvestVal = 50000
    this.leftBranchData = [80, 100, 70, 80, 110, 80]
    this.rightBranchData = [80, 100, 70, 80, 110, 80]
    this.leftBranchChartConfig = {
      ...this.leftBranchChartConfig,
      datasets: [
        {
          label: '',
          borderColor: this.$vuetify.theme.themes.light.primary,
          data: this.leftBranchData,
          fill: 'start',
          borderWidth: 2,
        },
      ],
      labels: ['JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'],
      yMin: Math.min(...this.leftBranchData) - 20,
      yMax: Math.max(...this.leftBranchData) + 20,
    }
    this.rightBranchChartConfig = {
      ...this.rightBranchChartConfig,
      datasets: [
        {
          label: '',
          borderColor: this.$vuetify.theme.themes.light.primary,
          data: this.rightBranchData,
          fill: 'start',
          borderWidth: 2,
        },
      ],
      labels: ['JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'],

      yMin: Math.min(...this.rightBranchData) - 20,
      yMax: Math.max(...this.rightBranchData) + 20,
    }
    // this.nodes = {
    //   left: {
    //     id: 1,
    //     name: 'name#1',
    //     imgSrc: '/imgs/default-avatar.png',
    //     tooltip: 'no packages',
    //   },
    //   right: {
    //     id: 2,
    //     name: 'name#2',
    //     imgSrc: '/imgs/default-avatar.png',
    //     tooltip: 'no packages',
    //   },
    // }
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
  computed: {
    getUserId() {
      return this.$store.getters.userId
    },
  },
  methods: {
    showSnack(type) {
      if (type === 'left') this.showLeftSnackBar = true
      else if (type === 'right') this.showRightSnackBar = true
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
