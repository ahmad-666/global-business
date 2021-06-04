<template>
  <div class="supportForm">
    <img src="imgs/about-us/help.png" alt="imgs/about-us/help.png" />
    <form novalidate class="form" @submit.prevent="submitHandler">
      <div class="title">
        <h6>Need You Support?</h6>
        <h6>Contact Our Support Team</h6>
      </div>
      <p class="subTitle">I Would Like to Discuss With You</p>
      <div class="inputs">
        <div class="input">
          <base-input
            size="m"
            type="white-bg"
            input-type="text"
            placeholder="enter firstname"
            name="firstName"
            :model-value="firstName"
            @update:modelValue="firstNameInputHandler"
          ></base-input>
          <error-message
            v-if="firstNameErrorMsg"
            :error-msg="firstNameErrorMsg"
          >
          </error-message>
        </div>
        <div class="input">
          <base-input
            size="m"
            type="white-bg"
            input-type="text"
            placeholder="enter lastname"
            name="lastName"
            :model-value="lastName"
            @update:modelValue="lastNameInputHandler"
          ></base-input>
          <error-message v-if="lastNameErrorMsg" :error-msg="lastNameErrorMsg">
          </error-message>
        </div>
        <div class="input">
          <base-input
            size="m"
            type="white-bg"
            input-type="email"
            placeholder="enter email"
            name="email"
            :model-value="email"
            @update:modelValue="emailInputHandler"
          ></base-input>
          <error-message
            v-if="emailErrorMsg"
            :error-msg="emailErrorMsg"
            >{{
          }}</error-message>
        </div>
        <div class="select">
          <base-select
            :model-value="subject"
            type="white-bg"
            size="m"
            :options="subjects"
            @update:modelValue="subjectHandler"
          ></base-select>
        </div>
      </div>
      <div class="btn">
        <base-button type="submit" btn-type="primary" size="m">
          <p class="btnTxt">submit</p>
        </base-button>
      </div>
      <div class="success">
        <success-message
          v-if="successMsg"
          :success-msg="successMsg"
        ></success-message>
      </div>

      <base-loader v-if="isLoading"></base-loader>
    </form>
  </div>
</template>
<script>
import {
  validateEmail,
  validateFirstName,
  validateLastName,
} from '~/utils/validation'
export default {
  data() {
    return {
      firstName: '',
      lastName: '',
      email: '',
      subjects: [],
      subject: '',
      firstNameErrorMsg: '',
      lastNameErrorMsg: '',
      emailErrorMsg: '',
      subjectErrorMsg: '',
      isLoading: false,
      successMsg: '',
    }
  },
  fetch() {
    this.subjects = [
      { value: 'subject1', displayValue: 'subject1' },
      { value: 'subject2', displayValue: 'subject2' },
      { value: 'subject3', displayValue: 'subject3' },
      { value: 'subject4', displayValue: 'subject4' },
      { value: 'subject5', displayValue: 'subject5' },
    ]
  },
  mounted() {
    this.subject = this.subjects[0].value
  },
  methods: {
    firstNameInputHandler(val) {
      this.firstName = val
    },
    lastNameInputHandler(val) {
      this.lastName = val
    },
    emailInputHandler(val) {
      this.email = val
    },
    subjectHandler(val) {
      this.subject = val
    },
    submitHandler() {
      this.firstNameErrorMsg = ''
      this.lastNameErrorMsg = ''
      this.emailErrorMsg = ''
      this.successMsg = ''
      if (!validateFirstName(this.firstName)) {
        this.firstNameErrorMsg = 'enter firstname'
        return null
      }
      if (!validateLastName(this.lastName)) {
        this.lastNameErrorMsg = 'enter lastname'
        return null
      }
      if (!validateEmail(this.email)) {
        this.emailErrorMsg = 'enter valid email'
        return null
      }
      this.isLoading = true
      setTimeout(() => {
        this.isLoading = false
        this.successMsg = 'successfully sent'
      }, 2000)
    },
  },
}
</script>
<style lang="scss" scoped>
@import '~/assets/styles/variables.scss';
@import '~/assets/styles/colors.scss';
.supportForm {
  width: 100%;
  display: flex;
  align-items: center;
  > img {
    flex-shrink: 0;
    width: 45em;
    height: auto;
  }
  .form {
    width: 100%;
    margin-left: 2em;
    .title {
      // display: flex;
      // align-items: center;

      h6 {
        font-size: $fontXL;
        font-weight: lighter;
        &:nth-child(1) {
          color: lighten(black, 20%);
        }
        &:nth-child(2) {
          color: $primaryColor;
        }
      }
    }
    .subTitle {
      margin-top: 0.5em;
      color: lighten(black, 30%);
      font-size: $fontL;
    }
    .inputs {
      margin-top: 4em;
    }
    .input,
    .select {
      width: 100%;
      margin-top: 2em;
    }
    .btn {
      margin-top: 0.5em;
      .btnTxt {
        color: white;
        font-size: $fontM - 0.2em;
      }
    }
    .success {
      text-align: center;
      margin-top: 1em;
    }
  }
}
@media screen and (max-width: 650px) {
  .supportForm {
    flex-direction: column-reverse;

    .form {
      margin-left: 0em;
    }
  }
}
</style>
