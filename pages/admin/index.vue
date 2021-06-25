<template>
  <div>
    <h6
      class="text-h6 font-weight-medium white--text text-capitalize mt-2 mb-4"
    >
      Dashboard
    </h6>
    <v-container>
      <v-row>
        <v-col cols="12" md="6">
          <capping-card
            :title="cappingCard.title"
            :percentage="cappingCard.percentage"
            :price="cappingCard.price"
            :sub-title="cappingCard.subTitle"
            :features="cappingCard.features"
            :profit="cappingCard.profit"
          ></capping-card>
        </v-col>
        <v-col cols="12" md="6">
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
    <v-container>
      <v-row align="stretch">
        <v-col
          v-for="infoCard in infoCards"
          :key="infoCard.id"
          cols="12"
          sm="6"
          md="4"
          lg="3"
        >
          <general-info-card
            :title="infoCard.title"
            :icon="infoCard.icon"
            :value="infoCard.value"
            :icon-gradient="infoCard.iconGradient"
            :action-icon="infoCard.actionIcon"
            :action-text="infoCard.actionText"
          ></general-info-card>
        </v-col>
      </v-row>
    </v-container>
    <v-container>
      <v-row>
        <v-col cols="12" lg="6">
          <v-card color="adminCardColor">
            <v-card-title class="d-flex align-center justify-space-between">
              <p class="text-subtitle-1 white--text font-weight-medium">
                Latest Users
              </p>
              <nuxt-link to="/admin/users">
                <v-btn color="primary" class="py-3 px-6" dark>All Users</v-btn>
              </nuxt-link>
            </v-card-title>
            <v-card-text :style="{ height: '40em' }" class="overflow-y-auto">
              <v-data-table
                dark
                class="transparent"
                :items="usersData"
                :headers="usersHeaders"
                hide-default-footer
              >
                <template #item.avatar="slotProps">
                  <v-avatar size="50" class="my-2">
                    <v-img
                      :src="slotProps.value"
                      width="100%"
                      height="100%"
                    ></v-img>
                  </v-avatar>
                </template>
              </v-data-table>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" lg="6">
          <v-card color="adminCardColor">
            <v-card-title class="d-flex align-center justify-space-between">
              <p class="text-subtitle-1 white--text font-weight-medium">
                Latest Invest History
              </p>
              <nuxt-link to="/admin/investHistory">
                <v-btn color="primary" class="py-3 px-6" dark
                  >All Transactions</v-btn
                >
              </nuxt-link>
            </v-card-title>
            <v-card-text :style="{ height: '40em' }" class="overflow-y-auto">
              <v-data-table
                dark
                class="transparent"
                :items="investHistoryData"
                :headers="investHeaders"
                hide-default-footer
              >
                <template #item.user="slotProps">
                  <p>{{ slotProps.value.split(' ')[0] }}</p>
                  <p>{{ slotProps.value.split(' ')[1] }}</p>
                </template>
                <template #item.status="slotProps">
                  <nuxt-link :to="`/admin/depositMessage/${slotProps.item.id}`">
                    <v-chip
                      v-if="slotProps.value === 'rejected'"
                      color="error"
                      class="cursor-pointer"
                      >rejected</v-chip
                    >
                    <v-chip
                      v-else-if="slotProps.value === 'accepted'"
                      color="success"
                      class="cursor-pointer"
                      >accepted</v-chip
                    >
                    <v-chip
                      v-else-if="slotProps.value === 'pending'"
                      color="warning"
                      class="cursor-pointer"
                      >pending</v-chip
                    >
                  </nuxt-link>
                </template>
              </v-data-table>
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
      usersData: [], // only 10 last user
      usersHeaders: [
        {
          text: 'AVATAR',
          value: 'avatar',
          sortable: false,
          align: 'start',
        },
        {
          text: 'USERNAME',
          value: 'username',
          sortable: false,
          align: 'start',
        },
        {
          text: 'PHONE',
          value: 'phone',
          sortable: false,
          align: 'start',
        },
        {
          text: 'EMAIL',
          value: 'email',
          sortable: false,
          align: 'start',
        },
      ],
      investHistoryData: [], // only 10 last tranactions
      investHeaders: [
        {
          text: 'VALUE',
          value: 'value',
          sortable: false,
          align: 'start',
        },
        {
          text: 'USER',
          value: 'user',
          sortable: false,
          align: 'start',
        },
        {
          text: 'DATE',
          value: 'date',
          sortable: false,
          align: 'start',
        },
        {
          text: 'STATUS',
          value: 'status',
          sortable: false,
          align: 'start',
        },
      ],
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
        icon: 'fas fa-money-check-alt',
        title: 'balance',
        value: '8.17$',
        iconGradient: 'linear-gradient(to bottom left,#ff8d72,#ff6491,#ff8d72)',
        actionIcon: 'fas fa-money-check-alt',
        actionText: 'short description about this card',
      },
      {
        id: 2,
        icon: 'fas fa-wallet',
        title: 'ib wallet',
        value: '124.74$',
        iconGradient: 'linear-gradient(to bottom left,#e14eca,#ba54f5,#e14eca)',
        actionIcon: 'fas fa-wallet',
        actionText: 'short description about this card',
      },
      {
        id: 3,
        icon: 'fas fa-wallet',
        title: 'roi wallet',
        value: '94.0$',
        iconGradient: 'linear-gradient(to bottom left,#1d8cf8,#3358f4,#1d8cf8)',
        actionIcon: 'fas fa-wallet',
        actionText: 'short description about this card',
      },
      {
        id: 4,
        icon: 'fas fa-users',
        title: 'Users',
        value: '94.0$',
        iconGradient: 'linear-gradient(to bottom left,#fd5d93,#ec250d,#fd5d93)',
        actionIcon: 'fas fa-users',
        actionText: 'short description about this card',
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
    for (let i = 0; i < 10; i++) {
      this.usersData[i] = {}
      this.usersData[i].avatar = '/imgs/default-avatar.png'
      this.usersData[i].phone = '+123 456 789'
      this.usersData[i].email = 'something@gmail.com'
      this.usersData[i].username = 'username'
    }
    for (let i = 0; i < 10; i++) {
      this.investHistoryData[i] = {}
      this.investHistoryData[i].id = i
      this.investHistoryData[i].value = `$${(Math.random() * 100).toFixed(2)}`
      this.investHistoryData[i].user = 'FTG10024 ft100'
      this.investHistoryData[i].date = new Date().toDateString()
      const randVal = Math.random()
      this.investHistoryData[i].status =
        randVal < 0.33
          ? 'accepted'
          : (randVal > 0.33) & (randVal < 0.66)
          ? 'rejected'
          : 'pending'
    }
  },
}
</script>
<style lang="scss" scoped>
.custom-fade-transition-enter,
.custom-fade-transition-leave-to {
  opacity: 0;
}
.custom-fade-transition-enter-active,
.custom-fade-transition-leave-active {
  transition: all 5s linear;
}
.custom-fade-transition-enter-to,
.custom-fade-transition-leave {
  opacity: 1;
}
</style>
