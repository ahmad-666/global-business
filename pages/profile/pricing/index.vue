<template>
  <div>
    <dashboard-bread-crumb :items="breadcrumbItems"></dashboard-bread-crumb>
    <h6 class="text-h6 titleColor--text font-weight-regular">Pricing</h6>
    <v-container>
      <v-row align="stretch">
        <v-col
          v-for="pricingCard in pricingCards"
          :key="pricingCard.id"
          cols="12"
          sm="6"
          md="4"
          lg="3"
        >
          <pricing-card
            :price="pricingCard.price"
            :max-price="pricingCard.maxPrice"
            :title="pricingCard.title"
            :title-gradient="pricingCard.titleGradient"
            :title-img="pricingCard.titleImg"
            :month="pricingCard.month"
            :total-profit="pricingCard.totalProfit"
            :referral-income="pricingCard.referralIncome"
            :binary-income="pricingCard.binaryIncome"
            :capping-monthly-limit="pricingCard.cappingMonthlyLimit"
            :avg-profit-month="pricingCard.avgProfitMonth"
            :tooltip-text="pricingCard.tooltipText"
          ></pricing-card>
        </v-col>
      </v-row>
    </v-container>
    <v-container>
      <v-row align="stretch">
        <v-col
          v-for="pricingCard in pricingCards2"
          :key="pricingCard.id"
          cols="12"
          sm="6"
          md="4"
          lg="3"
        >
          <pricing-card-2
            :price="pricingCard.price"
            :max-price="pricingCard.maxPrice"
            :title="pricingCard.title"
            :title-gradient="pricingCard.titleGradient"
            :title-img="pricingCard.titleImg"
            :month="pricingCard.month"
            :total-profit="pricingCard.totalProfit"
            :referral-income="pricingCard.referralIncome"
            :binary-income="pricingCard.binaryIncome"
            :capping-monthly-limit="pricingCard.cappingMonthlyLimit"
            :avg-profit-month="pricingCard.avgProfitMonth"
            :tooltip-text="pricingCard.tooltipText"
          ></pricing-card-2>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
import PricingCard from '~/components/profile/cards/PricingCard.vue'
import PricingCard2 from '~/components/profile/cards/PricingCard2.vue'

export default {
  components: {
    PricingCard,
    PricingCard2,
  },
  layout: 'admin',
  data() {
    return {
      breadcrumbItems: [
        { text: 'Pricing & Reinvest', disabled: false, to: '/profile/pricing' },
      ],
      pricingCards: [],
      pricingCards2: [],
    }
  },
  fetch() {
    this.pricingCards = [
      {
        id: 1,
        price: 10000,
        maxPrice: 49000,
        title: 'moon package',
        titleGradient:
          'linear-gradient(to right, #6a9ce7, #6a9dea, #6a9eec, #6a9fef, #6aa0f2)',
        titleImg: '/imgs/cards/card-danger.png',
        month: 36,
        totalProfit: '180%',
        referralIncome: '0%',
        binaryIncome: '10%',
        cappingMonthlyLimit: '$0.00',
        avgProfitMonth: '0%',

        tooltipText:
          'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum',
      },
      {
        id: 2,
        price: 1000,
        maxPrice: 9000,
        title: 'earth package',
        titleGradient:
          'linear-gradient(to right, #6a9ce7, #6a9dea, #6a9eec, #6a9fef, #6aa0f2)',
        titleImg: '/imgs/cards/card-primary.png',
        month: 36,
        totalProfit: '150%',
        referralIncome: '0%',
        binaryIncome: '10%',
        cappingMonthlyLimit: '$0.00',
        avgProfitMonth: '0%',

        tooltipText:
          'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum',
      },
      {
        id: 3,
        price: 50000,
        maxPrice: 99000,
        title: 'sun package',
        titleGradient:
          'linear-gradient(to right, #6a9ce7, #6a9dea, #6a9eec, #6a9fef, #6aa0f2)',
        titleImg: '/imgs/cards/card-success.png',
        month: 48,
        totalProfit: '280%',
        referralIncome: '0%',
        binaryIncome: '10%',
        cappingMonthlyLimit: '$0.00',
        avgProfitMonth: '0%',
        tooltipText:
          'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum',
      },
      {
        id: 4,
        price: 100000,
        maxPrice: 500000,
        title: 'star package',
        titleGradient:
          'linear-gradient(to right, #6a9ce7, #6a9dea, #6a9eec, #6a9fef, #6aa0f2)',
        titleImg: '/imgs/cards/card-warning.png',
        month: 48,
        totalProfit: '320%',
        referralIncome: '0%',
        binaryIncome: '10%',
        cappingMonthlyLimit: '$0.00',
        avgProfitMonth: '0%',
        tooltipText:
          'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum',
      },
      {
        id: 5,
        price: 100000,
        maxPrice: 500000,
        title: 'star package',
        titleGradient:
          'linear-gradient(to right, #6a9ce7, #6a9dea, #6a9eec, #6a9fef, #6aa0f2)',
        titleImg: '/imgs/cards/nEW6.png',
        month: 48,
        totalProfit: '320%',
        referralIncome: '0%',
        binaryIncome: '10%',
        cappingMonthlyLimit: '$0.00',
        avgProfitMonth: '0%',
        tooltipText:
          'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum',
      },
    ]
    this.pricingCards2 = [
      {
        id: 1,
        price: 10000,
        maxPrice: 49000,
        title: 'moon package',
        titleGradient:
          'linear-gradient(to right, #6a9ce7, #6a9dea, #6a9eec, #6a9fef, #6aa0f2)',
        titleImg: '/imgs/moon.png',
        month: 36,
        totalProfit: '180%',
        referralIncome: '0%',
        binaryIncome: '10%',
        cappingMonthlyLimit: '$0.00',
        avgProfitMonth: '0%',
        tooltipText:
          'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum',
      },
      {
        id: 2,
        price: 1000,
        maxPrice: 9000,
        title: 'earth package',
        titleGradient:
          'linear-gradient(to right, #6a9ce7, #6a9dea, #6a9eec, #6a9fef, #6aa0f2)',
        titleImg: '/imgs/earth.png',
        month: 36,
        totalProfit: '150%',
        referralIncome: '0%',
        binaryIncome: '10%',
        cappingMonthlyLimit: '$0.00',
        avgProfitMonth: '0%',
        tooltipText:
          'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum',
      },
      {
        id: 3,
        price: 50000,
        maxPrice: 99000,
        title: 'sun package',
        titleGradient:
          'linear-gradient(to right, #6a9ce7, #6a9dea, #6a9eec, #6a9fef, #6aa0f2)',
        titleImg: '/imgs/sun.png',
        month: 48,
        totalProfit: '280%',
        referralIncome: '0%',
        binaryIncome: '10%',
        cappingMonthlyLimit: '$0.00',
        avgProfitMonth: '0%',
        tooltipText:
          'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum',
      },
      {
        id: 4,
        price: 100000,
        maxPrice: 500000,
        title: 'star package',
        titleGradient:
          'linear-gradient(to right, #6a9ce7, #6a9dea, #6a9eec, #6a9fef, #6aa0f2)',
        titleImg: '/imgs/science-earth-layers1.png',
        month: 48,
        totalProfit: '320%',
        referralIncome: '0%',
        binaryIncome: '10%',
        cappingMonthlyLimit: '$0.00',
        avgProfitMonth: '0%',
        tooltipText:
          'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum',
      },
      {
        id: 5,
        price: 100000,
        maxPrice: 500000,
        title: 'star package',
        titleGradient:
          'linear-gradient(to right, #6a9ce7, #6a9dea, #6a9eec, #6a9fef, #6aa0f2)',
        titleImg: '/imgs/Rocket-amico1.png',
        month: 48,
        totalProfit: '320%',
        referralIncome: '0%',
        binaryIncome: '10%',
        cappingMonthlyLimit: '$0.00',
        avgProfitMonth: '0%',
        tooltipText:
          'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum',
      },
    ]
  },
}
</script>
