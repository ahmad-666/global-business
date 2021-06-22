<template>
  <v-card color="adminCardColor">
    <v-card-title>
      <v-avatar size="100" class="mx-auto">
        <v-img
          src="/imgs/default-avatar.png"
          width="100%"
          height="100%"
        ></v-img>
      </v-avatar>
    </v-card-title>

    <v-card-text>
      <p class="text-body-2 grey--text text--lighten-1 font-weight-light">
        Deposit Report from {{ userId }} ({{ planType }}) {{ date }}
      </p>
      <p class="text-h6 white--text font-weight-bold">Value {{ value }} USD</p>
      <div class="d-flex align-center">
        <p class="text-subtitle-1 white--text">Status:</p>
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
    </v-card-text>
    <v-card-text
      class="pt-0 d-flex flex-column align-center white--text text-subtitle-1"
    >
      <p>According to this request:</p>
      <p>UserId {{ userId }}</p>
      <p>did send {{ value }} USD</p>
      <p>to address {{ address }}</p>
      <p>with hash {{ hash }}</p>
      <p>In Date & Time {{ date }}</p>
    </v-card-text>
    <v-card-actions v-if="status === 'pending'">
      <v-form
        ref="depositForm"
        v-model="formIsValid"
        :style="{ width: '100%' }"
        @submit.prevent="submitHandler"
      >
        <v-container>
          <v-row>
            <v-col cols="12" md="4">
              <v-text-field
                v-model="valueModel"
                type="number"
                filled
                color="adminCardColor lighten-4"
                dense
                label="value"
                dark
                :rules="[formRules.required]"
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="4">
              <v-btn
                type="submit"
                class="py-6 white--text info"
                dark
                :style="{ width: '100%' }"
                @click="tempStatus = 'accept'"
                >Accept</v-btn
              >
            </v-col>
            <v-col cols="12" md="4">
              <v-btn
                type="submit"
                class="py-6 white--text error"
                dark
                :style="{ width: '100%' }"
                @click="tempStatus = 'reject'"
                >Reject</v-btn
              >
            </v-col>
          </v-row>
        </v-container>
      </v-form>
    </v-card-actions>
  </v-card>
</template>
<script>
export default {
  components: {},
  layout: 'admin',
  data() {
    return {
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
</style>
