<template>
  <div class="wrapper d-flex flex-column align-center justify-center">
    <v-card light class="grey lighten-3 pa-0" width="60em">
      <v-card-title class="cardTitle pa-0">
        <v-img src="/imgs/shop/02.jpg" cover width="100%" height="100%"></v-img>
        <div class="cardInfo d-flex justify-space-between align-center">
          <div class="d-flex align-center">
            <v-avatar size="80" class="myAvatar elevation-5">
              <v-img
                src="/imgs/sezar-themes/light-blue-ltr/images/default-avatar.png"
                width="100%"
                height="100%"
              ></v-img>
            </v-avatar>
            <div class="txts ml-2">
              <p
                class="
                  text-body-1
                  font-weight-bold
                  white--text
                  font-weight-italic
                "
              >
                {{ userId }}
              </p>
              <p class="grey--text font-italic font-weight-bold text-body-2">
                {{ identifierId }}
              </p>
            </div>
          </div>
          <v-btn
            class="
              primary
              rounded-pill
              text-body-2
              font-italic font-weight-medium
              pa-2 pa-3
            "
            dark
            :elevation="5"
            @click="backToPanel"
            >Back to Panel</v-btn
          >
        </div>
      </v-card-title>
      <v-card-text class="mt-15 pa-0">
        <v-tabs
          v-model="tabs"
          fixed-tabs
          background-color="grey lighten-2"
          class="font-italic font-weight-bold"
        >
          <v-tabs-slider color="primary"></v-tabs-slider>
          <v-tab
            v-for="tabData in tabsData"
            :key="tabData.id"
            class="text-body-2 font-weight-bold"
          >
            {{ tabData.title }}
          </v-tab>
        </v-tabs>
        <v-tabs-items v-model="tabs" class="grey lighten-3">
          <v-tab-item v-for="tabData in tabsData" :key="tabData.id">
            <dashboard-wallet-tab
              :title="tabData.title"
              :address="tabData.address"
              :barcode-img="tabData.barcodeImg"
            ></dashboard-wallet-tab>
          </v-tab-item>
        </v-tabs-items>
      </v-card-text>
    </v-card>
  </div>
</template>
<script>
import DashboardWalletTab from '~/components/dashboard/DashboardWalletTab.vue'
export default {
  components: {
    DashboardWalletTab,
  },
  layout: 'dashboard',
  data() {
    return {
      tabs: null,
      tabsData: [],
    }
  },
  fetch() {
    this.tabsData = [
      {
        id: 1,
        title: 'USDT(ERC20)',
        barcodeImg: '/imgs/qrcode.png',
        address: 'some random address',
      },
      {
        id: 2,
        title: 'USDT(TRC20)',
        barcodeImg: '/imgs/qrcode.png',
        address: 'some random address',
      },
    ]
  },
  computed: {
    identifierId() {
      return this.$store.getters.identifierId
    },
    userId() {
      return this.$store.getters.userId
    },
  },
  mounted() {
    document.body.style.backgroundColor = 'rgb(30,30,30)'
  },
  methods: {
    backToPanel() {
      this.$router.back()
    },
  },
}
</script>
<style lang="scss" scoped>
.cardTitle {
  height: 7em;
  position: relative;
  .cardInfo {
    width: 95%;
    position: absolute;
    left: 50%;
    bottom: 0%;
    transform: translate(-50%, 50%);
    z-index: 1;
  }
}
.myAvatar {
  border: 3px solid white;
}
</style>
