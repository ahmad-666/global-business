<template>
  <div>
    <dashboard-bread-crumb :items="breadcrumbItems"></dashboard-bread-crumb>
    <h6 class="text-h6 titleColor--text font-weight-regular">
      Deposit Message
    </h6>
    <v-card color="cardColor" class="mt-6">
      <v-card-title class="pa-0 position-relative">
        <img
          src="/imgs/deposit.jpg"
          :style="{ width: '100%', height: '10em', objectFit: 'cover' }"
        />
        <v-avatar size="100" class="mx-auto position-absolute avatar-img">
          <v-img
            src="/imgs/default-avatar.png"
            width="100%"
            height="100%"
          ></v-img>
        </v-avatar>
      </v-card-title>

      <v-card-text
        class="
          mt-15
          d-flex
          flex-column flex-md-row
          justify-space-between
          align-center align-md-start
        "
      >
        <div class="d-flex flex-column align-center align-md-start">
          <p class="text-body-2 textColor--text font-weight-light">
            Deposit Report from {{ userId }} ({{ planType }}) {{ date }}
          </p>
          <p class="text-h6 titleColor--text font-weight-bold">
            Value {{ value }} USD
          </p>
          <div class="d-flex align-center">
            <p class="text-subtitle-1 titleColor--text">Status:</p>
            <p
              class="ml-2 font-weight-bold text-body-2 text-uppercase pa-2"
              :class="{
                'warning--text': status === 'pending',
                'warning--border': status === 'pending',
                'error--text': status === 'reject',
                'error--border': status === 'reject',
                'success--text': status === 'accept',
                'success--border': status === 'accept',
              }"
            >
              {{ status }}
            </p>
          </div>
        </div>
        <div
          class="
            pt-0
            d-flex
            flex-column
            align-center
            titleColor--text
            text-subtitle-1
            mt-6 mt-md-0
          "
        >
          <p>According to this request:</p>
          <p>UserId {{ userId }}</p>
          <p>did send {{ value }} USD</p>
          <p>to address {{ address }}</p>
          <p>with hash {{ hash }}</p>
          <p>In Date & Time {{ date }}</p>
        </div>
      </v-card-text>

      <v-card-actions v-if="status === 'pending'">
        <v-form
          ref="depositForm"
          v-model="formIsValid"
          :style="{ width: '100%' }"
          @submit.prevent="submitHandler"
        >
          <div
            class="d-flex flex-column align-center align-md-start flex-md-row"
          >
            <div :style="{ width: '30em' }">
              <v-text-field
                v-model="valueModel"
                type="number"
                filled
                color="cardColor lighten-4"
                dense
                label="value"
                :rules="[formRules.required]"
              ></v-text-field>
            </div>

            <v-btn
              type="submit"
              class="py-6 white--text success mt-0 ml-md-6 mt-md-0"
              dark
              @click="tempStatus = 'accept'"
              >Accept</v-btn
            >

            <v-btn
              type="submit"
              class="py-6 white--text error mt-6 mt-md-0 ml-md-6"
              dark
              @click="tempStatus = 'reject'"
              >Reject</v-btn
            >
          </div>
        </v-form>
      </v-card-actions>
    </v-card>
  </div>
</template>
<script>
export default {
  components: {},
  layout: 'admin',
  data() {
    return {
      breadcrumbItems: [
        {
          text: 'Invest History',
          disabled: false,
          to: '/profile/investHistory',
        },
        {
          text: 'Deposit Message',
          disabled: false,
          to: `/profile/depositMessage/${this.$route.params.id}`,
        },
      ],
      formIsValid: true,
      userId: '',
      planType: '',
      date: '',
      value: 0,
      status: '',
      address: '',
      hash: '',
      valueModel: null,
      tempStatus: '',
    }
  },
  fetch() {
    this.userId = 'ftg00'
    this.planType = 'basic'
    this.date = new Date().toDateString()
    this.value = 12000
    this.status = 'pending'
    this.address = '<address-value>'
    this.hash = 'DAS34324DSV34g@#$4'
    this.valueModel = this.value
    this.tempStatus = this.status
  },
  computed: {
    formRules() {
      return {
        required: val => {
          if (!val || val <= 0) return 'enter something'
          return true
        },
      }
    },
  },

  methods: {
    submitHandler() {
      this.$refs.depositForm.validate()
      if (this.formIsValid) {
        if (this.tempStatus === 'accept') {
          // send accept request to server
          setTimeout(() => {
            this.status = 'accept'
          }, 2000)
        } else if (this.tempStatus === 'reject') {
          // send accept request to server
          setTimeout(() => {
            this.status = 'reject'
          }, 2000)
        }
      }
    },
  },
}
</script>
<style lang="scss" scoped>
.warning--border {
  border: 1px solid orange;
}
.error--border {
  border: 1px solid #db524b;
}
.success--border {
  border: 1px solid #0ea704;
}
.avatar-img {
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 50%);
}
</style>
