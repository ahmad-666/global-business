<template>
  <v-card color="cardColor" class="price-edit-form pb-4">
    <v-card-title class="d-flex justify-space-between align-center">
      <p class="text-caption titleColor--text">Package</p>
      <v-btn text color="transparent" @click="closeCard">
        <v-icon size="20" color="red lighten-2">mdi-close</v-icon>
      </v-btn>
    </v-card-title>
    <v-form
      ref="editForm"
      v-model="editFormIsValid"
      @submit.prevent="submitHandler"
    >
      <v-card-text class="py-0">
        <v-container>
          <v-row justify="space-between" align="center">
            <v-col cols="12" md="6">
              <v-text-field
                v-model="startPriceModel"
                outlined
                dense
                class="text-body-2"
                label="Start Price*"
                color="primary"
                :rules="[formRules.required]"
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="6">
              <v-text-field
                v-model="endPriceModel"
                outlined
                dense
                class="text-body-2"
                label="End Price*"
                color="primary"
                :rules="[formRules.required]"
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="6">
              <v-text-field
                v-model="validityModel"
                outlined
                dense
                class="text-body-2"
                label="Validity*"
                color="primary"
                :rules="[formRules.required]"
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="6">
              <v-text-field
                v-model="totalProfitModel"
                outlined
                dense
                class="text-body-2"
                color="primary"
                label="Total Profit*"
                :rules="[formRules.required]"
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="6">
              <v-text-field
                v-model="referralIncomeModel"
                outlined
                dense
                class="text-body-2"
                color="primary"
                label="Referral Income*"
                :rules="[formRules.required]"
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="6">
              <v-text-field
                v-model="cappingMonthlyLimitModel"
                outlined
                dense
                color="primary"
                class="text-body-2"
                label="Capping Monthly Limit*"
                :rules="[formRules.required]"
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="6">
              <v-text-field
                v-model="avgProfitMonthModel"
                outlined
                dense
                color="primary"
                class="text-body-2"
                label="Avg Profit Month*"
                :rules="[formRules.required]"
              ></v-text-field>
            </v-col>
          </v-row>
        </v-container>
        <div>
          <p class="text-body-2 textColor--text">Description</p>
          <p class="mt-1 text-caption titleColor--text">
            the last package and the best choice for a worthwhile investment.
          </p>
        </div>
      </v-card-text>
      <v-card-actions
        class="mt-4 px-4 d-flex justify-space-between align-center"
      >
        <v-btn
          type="button"
          dark
          color="adminCardColor darken-1"
          class="px-6"
          @click="closeCard"
          >Cancel</v-btn
        >
        <v-btn
          type="submit"
          dark
          color="primary"
          class="px-6"
          :loading="isLoading"
          >Submit</v-btn
        >
      </v-card-actions>
    </v-form>
  </v-card>
</template>
<script>
export default {
  props: {
    startPrice: {
      type: String,
      default: '',
    },
    endPrice: {
      type: String,
      default: '',
    },
    validity: {
      type: String,
      default: '',
    },
    totalProfit: {
      type: String,
      default: '',
    },
    referralIncome: {
      type: String,
      default: '',
    },
    binaryIncome: {
      type: String,
      default: '',
    },
    cappingMonthlyLimit: {
      type: String,
      default: '',
    },
    avgProfitMonth: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      editFormIsValid: true,
      startPriceModel: this.startPrice,
      endPriceModel: this.endPrice,
      validityModel: this.validity,
      totalProfitModel: this.totalProfit,
      referralIncomeModel: this.referralIncome,
      cappingMonthlyLimitModel: this.cappingMonthlyLimit,
      avgProfitMonthModel: this.avgProfitMonth,
      isLoading: false,
    }
  },
  computed: {
    formRules() {
      return {
        required: val => {
          if (!val || !val.trim().length) return 'field is required'
          return true
        },
      }
    },
  },
  methods: {
    closeCard() {
      this.$emit('close:editForm')
    },
    submitHandler() {
      this.$refs.editForm.validate()
      if (this.editFormIsValid) {
        this.isLoading = true
        setTimeout(() => {
          this.isLoading = false
        }, 2000)
      }
    },
  },
}
</script>
<style lang="scss" scoped></style>
