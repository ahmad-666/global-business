<template>
  <div>
    <v-container>
      <v-row>
        <v-col cols="12" sm="6" lg="4">
          <capping-card
            :title="cappingCard.title"
            :percentage="cappingCard.percentage"
            :price="cappingCard.price"
            :sub-title="cappingCard.subTitle"
            :features="cappingCard.features"
            :profit="cappingCard.profit"
          ></capping-card>
        </v-col>
        <v-col cols="12" sm="6" lg="4">
          <general-info-card
            v-for="(infoCard, i) in infoCards"
            :key="infoCard.id"
            :title="infoCard.title"
            :icon="infoCard.icon"
            :value="infoCard.value"
            :icon-gradient="infoCard.iconGradient"
            :class="{ 'mt-4': i > 0 }"
          ></general-info-card>
        </v-col>
        <v-col cols="12" sm="6" lg="4">
          <v-card color="adminCardColor">
            <v-card-title class="white--text text-subtitle-1"
              >Investments</v-card-title
            >
            <v-card-text>
              <line-chart
                :gradient1="chartConfig.gradient1"
                :gradient2="chartConfig.gradient2"
                :labels="chartConfig.labels"
                :datasets="chartConfig.datasets"
                :y-min="chartConfig.yMin"
                :y-max="chartConfig.yMax"
                :show-legend="false"
              ></line-chart>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
import CappingCard from '~/components/admin/cards/CappingCard.vue'
import GeneralInfoCard from '~/components/admin/cards/GeneralInfoCard.vue'
// import LinkGeneratorCard from '~/components/admin/cards/L//inksGenerateCard.vue'
import LineChart from '~/components/admin/charts/LineChart.vue'
export default {
  components: {
    CappingCard,
    GeneralInfoCard,
    // LinkGeneratorCard,
    LineChart,
  },
  layout: 'admin',
  data() {
    return {
      cappingCard: {},
      infoCards: [],
      // linkGenerator: {},
      investmentsData: [],
      chartConfig: {},
    }
  },
  fetch() {
    this.cappingCard.title = 'capping card'
    this.cappingCard.percentage = 65
    this.cappingCard.price = 829
    this.cappingCard.subTitle = 'until income limit'
    this.cappingCard.features = [
      {
        title: 'roi profit',
        value: 84.24,
      },
      {
        title: 'ib profit',
        value: 87.0,
      },
      {
        title: 'binary profit',
        value: 0.0,
      },
      {
        title: 'package profit',
        value: 171.24,
      },
    ]
    this.cappingCard.profit = 1000
    this.infoCards = [
      {
        id: 1,
        icon: 'fas fa-chart-line',
        title: 'balance',
        value: '8.17$',
        iconGradient: 'linear-gradient(to bottom left,#00f2c3,#0098f0,#00f2c3)',
      },
      {
        id: 2,
        icon: 'fas fa-chart-line',
        title: 'ib wallet',
        value: '124.74$',
        iconGradient: 'linear-gradient(to bottom left,#00f2c3,#0098f0,#00f2c3)',
      },
      {
        id: 3,
        icon: 'fas fa-chart-line',
        title: 'roi wallet',
        value: '94.0$',
        iconGradient: 'linear-gradient(to bottom left,#00f2c3,#0098f0,#00f2c3)',
      },
    ]
    // this.linkGenerator = {
    //   title: 'target user',
    //   value: 0,
    //   icon: '/imgs/target-users.png',
    //   leftLink: 'http://globalbusiness724.com/page/signup?ref=rlwlvXSA',
    //   rightLink: 'http://globalbusiness724.com/page/signup?ref=rlwlvXSA',
    // }
    this.investmentsData = [80, 100, 70, 80, 110, 80]
    this.chartConfig = {
      gradient1: `${this.$vuetify.theme.themes.light.primary}55`,
      gradient2: 'transparent',
      datasets: [
        {
          label: '',
          borderColor: this.$vuetify.theme.themes.light.primary,
          data: this.investmentsData,
          fill: 'start',
          borderWidth: 2,
        },
      ],
      labels: ['JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'],
      yMin: Math.min(...this.investmentsData) - 10,
      yMax: Math.max(...this.investmentsData) + 10,
    }
  },
}
</script>
