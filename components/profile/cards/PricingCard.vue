<template>
  <v-tooltip dark color="grey darken-3" max-width="15em">
    <template #activator="{ on, attrs }">
      <v-card color="cardColor" class="pa-0" v-bind="attrs" v-on="on">
        <v-card-title class="pa-4 position-relative">
          <div
            :style="{ zIndex: 3 }"
            class="width-100 d-flex flex-column align-center"
          >
            <v-dialog width="60em" max-width="95vw">
              <template #activator="{ on, attrs }">
                <v-btn
                  small
                  fab
                  class="ml-auto"
                  :style="{
                    backgroundImage:
                      'linear-gradient(to bottom left,#00f2c3,#0098f0,#00f2c3)',
                  }"
                  v-bind="attrs"
                  v-on="on"
                >
                  <v-icon size="20" color="white">mdi-pencil-outline</v-icon>
                </v-btn>
              </template>
              <template #default="dialog">
                <edit-price-card
                  :start-price="`${price}`"
                  :end-price="`${maxPrice}`"
                  :validity="`${month}`"
                  :total-profit="totalProfit"
                  :referral-income="referralIncome"
                  :binary-income="binaryIncome"
                  :capping-monthly-limit="cappingMonthlyLimit"
                  :avg-profit-month="avgProfitMonth"
                  @close:editForm="dialog.value = false"
                ></edit-price-card>
              </template>
            </v-dialog>
            <div class="d-flex align-center justify-center">
              <p class="text-h4 titleColor--text font-weight-medium">
                ${{ price }}
              </p>
              <p class="text-subtitle-1 titleColor--text mt-4">.00</p>
            </div>
            <div
              class="
                d-flex
                align-center
                justify-center
                text-caption
                titleColor--text
              "
            >
              <p>to</p>
              <p class="ml-1 titleColor--text">${{ maxPrice }}</p>
              <p class="ml-0">.00</p>
            </div>
            <div class="d-flex align-center mt-5 text-uppercase">
              <p class="primary--text font-weight-bold text-h5">
                {{ titleFirstSegment }}
              </p>
              <p class="titleColor--text font-weight-regular text-h6">
                {{ titleSecondSegment }}
              </p>
            </div>
          </div>
          <v-img
            class="position-absolute left-0 top-0"
            width="75%"
            height="auto"
            min-height="8em"
            :style="{ zIndex: 1 }"
            :src="titleImg"
          ></v-img>
          <!-- 
          <v-overlay
            color="rgb(0,0,0)"
            :opacity="0.65"
            absolute
            :z-index="2"
          ></v-overlay> -->
        </v-card-title>
        <v-card-text class="py-0 px-4 mt-4">
          <v-list class="transparent">
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title
                  class="d-flex justify-center align-center text-subtitle-1"
                >
                  <p class="font-weight-bold">{{ month }}</p>
                  <p class="ml-1 titleColor--text text-body-2">month</p>
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-divider class="my-3"></v-divider>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title class="d-flex justify-center align-center">
                  <p class="text-body-2 font-weight-regular textColor--text">
                    Total Profit:
                  </p>
                  <p class="text-body-1 font-weight-bold titleColor--text ml-2">
                    {{ totalProfit }}
                  </p>
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-divider class="my-3"></v-divider>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title class="d-flex justify-center align-center">
                  <p class="text-body-2 font-weight-regular textColor--text">
                    Referral Income:
                  </p>
                  <p class="text-body-1 font-weight-bold titleColor--text ml-2">
                    {{ referralIncome }}
                  </p>
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-divider class="my-3"></v-divider>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title class="d-flex justify-center align-center">
                  <p class="text-body-2 font-weight-regular textColor--text">
                    Binary Income:
                  </p>
                  <p class="text-body-1 font-weight-bold titleColor--text ml-2">
                    {{ binaryIncome }}
                  </p>
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-divider class="my-3"></v-divider>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title class="d-flex justify-center align-center">
                  <p class="text-body-2 font-weight-regular textColor--text">
                    Capping Monthly Limit:
                  </p>
                  <p class="text-body-1 font-weight-bold titleColor--text ml-2">
                    {{ cappingMonthlyLimit }}
                  </p>
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-divider class="my-3"></v-divider>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title class="d-flex justify-center align-center">
                  <p class="text-body-2 font-weight-regular textColor--text">
                    Avg Profit Month:
                  </p>
                  <p class="text-body-1 font-weight-bold titleColor--text ml-2">
                    {{ avgProfitMonth }}
                  </p>
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-divider class="my-3"></v-divider>
          </v-list>
        </v-card-text>
        <v-card-actions class="pb-4">
          <v-btn
            class="
              primary
              white--text
              text-body-2
              font-weight-bold
              rounded-pill
              mx-auto
              py-5
              px-8
            "
            >Get Started</v-btn
          >
        </v-card-actions>
      </v-card>
    </template>
    <p class="text-caption">{{ tooltipText }}</p>
  </v-tooltip>
</template>
<script>
import EditPriceCard from '~/components/profile/forms/EditPriceCard.vue'
export default {
  components: {
    EditPriceCard,
  },
  props: {
    price: {
      type: Number,
      required: true,
    },
    maxPrice: {
      type: Number,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    titleGradient: {
      type: String,
      default:
        'linear-gradient(to right, #6a9ce7, #6a9dea, #6a9eec, #6a9fef, #6aa0f2)',
    },
    titleImg: {
      type: String,
      required: true,
    },
    month: {
      type: Number,
      required: true,
    },
    totalProfit: {
      type: String,
      required: true,
    },
    referralIncome: {
      type: String,
      required: true,
    },
    binaryIncome: {
      type: String,
      required: true,
    },
    cappingMonthlyLimit: {
      type: String,
      required: true,
    },
    avgProfitMonth: {
      type: String,
      required: true,
    },

    tooltipText: {
      type: String,
      default: '',
    },
    validity: {
      type: [String, Number],
      default: null,
    },
  },
  computed: {
    titleFirstSegment() {
      return `${this.title[0]}`
    },
    titleSecondSegment() {
      return this.title.slice(1, this.title.length)
    },
  },
}
</script>
<style lang="scss" scoped>
.v-list-item {
  min-height: initial !important;
}
.v-list-item__content {
  padding: 0 0 !important;
}
</style>
