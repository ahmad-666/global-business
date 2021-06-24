<template>
  <div>
    <h6
      class="text-h6 font-weight-medium white--text text-capitalize mt-2 mb-4"
    >
      My Network
    </h6>
    <v-card color="adminCardColor" class="pb-4 d-flex flex-column align-center">
      <v-card-title class="d-flex flex-column align-center">
        <v-img
          width="6em"
          height="6em"
          class="rounded-circle border-primary"
          :src="imgSrc"
        ></v-img>
        <p class="text-subtitle-1 font-weight-medium mt-2 white--text">
          {{ getUserId }}
        </p>
      </v-card-title>
      <v-card-actions class="d-flex mx-auto align-center mt-2">
        <v-dialog width="50em" max-width="95vw">
          <template #activator="{ on, attrs }">
            <v-btn
              light
              class="py-3 px-6 text-body-2 primary--text"
              v-bind="attrs"
              v-on="on"
              >Left Link</v-btn
            >
          </template>
          <template #default="dialog">
            <link-card
              title="Your left link"
              :link="leftLink"
              @close:card="dialog.value = false"
            ></link-card>
          </template>
        </v-dialog>
        <v-icon size="18" class="mx-5" color="white">fas fa-link</v-icon>
        <v-dialog width="50em" max-width="95vw">
          <template #activator="{ on, attrs }">
            <v-btn
              light
              class="py-3 px-6 text-body-2 primary--text"
              v-bind="attrs"
              v-on="on"
              >Right Link</v-btn
            >
          </template>
          <template #default="dialog">
            <link-card
              title="Your right link"
              :link="rightLink"
              @close:card="dialog.value = false"
            ></link-card>
          </template>
        </v-dialog>
      </v-card-actions>
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
    <div class="mt-6">
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
    </div>
  </div>
</template>
<script>
import LinkCard from '~/components/admin/cards/LinkCard.vue'
import LineChart from '~/components/admin/charts/LineChart.vue'
import BinaryTree from '~/components/admin/BinaryTree.vue'
export default {
  components: {
    LinkCard,
    LineChart,
    BinaryTree,
  },
  layout: 'admin',
  data() {
    return {
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
    this.nodes = {
      left: {
        id: 1,
        name: 'name#1',
        imgSrc: '/imgs/default-avatar.png',
        tooltip: 'no packages',
      },
      right: {
        id: 2,
        name: 'name#2',
        imgSrc: '/imgs/default-avatar.png',
        tooltip: 'no packages',
      },
    }
  },
  computed: {
    getUserId() {
      return this.$store.getters.userId
    },
  },
}
</script>
