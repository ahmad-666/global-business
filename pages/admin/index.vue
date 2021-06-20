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
          <link-generator-card
            :title="linkGenerator.title"
            :value="linkGenerator.value"
            :icon="linkGenerator.icon"
            :left-link="linkGenerator.leftLink"
            :right-link="linkGenerator.rightLink"
          ></link-generator-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
import CappingCard from '~/components/admin/cards/CappingCard.vue'
import GeneralInfoCard from '~/components/admin/cards/GeneralInfoCard.vue'
import LinkGeneratorCard from '~/components/admin/cards/LinksGenerateCard.vue'
export default {
  components: {
    CappingCard,
    GeneralInfoCard,
    LinkGeneratorCard,
  },
  layout: 'admin',
  data() {
    return {
      cappingCard: {},
      infoCards: [],
      linkGenerator: {},
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
    this.linkGenerator = {
      title: 'target user',
      value: 0,
      icon: '/imgs/target-users.png',
      leftLink: 'http://globalbusiness724.com/page/signup?ref=rlwlvXSA',
      rightLink: 'http://globalbusiness724.com/page/signup?ref=rlwlvXSA',
    }
  },
}
</script>
