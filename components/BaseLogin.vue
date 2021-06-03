<template>
  <form novalidate class="form" @submit.prevent="submitLogin">
    <div class="title">
      <p>Login</p>
      <font-awesome-icon
        icon="times"
        class="close"
        @click="closeForm"
      ></font-awesome-icon>
    </div>
    <div class="content">
      <div class="inputs">
        <div class="input">
          <base-input
            size="m"
            type="white-bg"
            input-type="text"
            placeholder="Username or Email"
            name="usernameEmail"
            :model-value="usernameEmail"
            @update:modelValue="usernameEmailInputHandler"
          ></base-input>
          <error-message
            v-if="usernameEmailErrorMsg"
            :error-msg="usernameEmailErrorMsg"
          ></error-message>
        </div>
        <div class="input">
          <base-input
            size="m"
            type="white-bg"
            input-type="password"
            placeholder="Password"
            name="password"
            :model-value="password"
            @update:modelValue="passwordInputHandler"
          ></base-input>
          <error-message
            v-if="passwordErrorMsg"
            :error-msg="passwordErrorMsg"
          ></error-message>
        </div>
      </div>

      <div class="btn">
        <base-button
          :disabled="isLoading"
          type="submit"
          btn-type="primary-hover"
          size="m"
        >
          <p>{{ !isLoading ? 'Sign In' : ' Sending...' }}</p>
        </base-button>
      </div>
      <div class="rememberForget">
        <div class="checkbox">
          <base-checkbox
            :checkboxes="checkboxes"
            :model-value="rememberMe"
            size="m"
            type="simple-col"
            name="rememberMe"
            @update:modelValue="rememberMeChangeHandler"
          ></base-checkbox>
        </div>
        <button class="forgetBtn" @click="showForgetPassword">
          Forget Password ?
        </button>
      </div>
    </div>

    <div class="bottom">
      <div class="link">
        <p>Don't Have an Account?</p>
        <button @click="goToRegister">Register Now</button>
      </div>
      <div class="socials">
        <nuxt-link
          v-for="social in socials"
          :key="social.id"
          :to="social.url"
          class="social"
        >
          <font-awesome-icon
            class="icon"
            :icon="['fab', social.type]"
          ></font-awesome-icon>
        </nuxt-link>
      </div>
    </div>
  </form>
</template>
<script>
import { validateRequired } from '~/utils/validation'
export default {
  data() {
    return {
      isLoading: false,
      usernameEmail: '',
      usernameEmailErrorMsg: '',
      password: '',
      passwordErrorMsg: '',
      rememberMe: [],
      checkboxes: [
        {
          value: 'rememberMe',
          displayValue: 'Remember Me',
        },
      ],
    }
  },
  computed: {
    socials() {
      return this.$store.getters.socials
    },
  },
  methods: {
    usernameEmailInputHandler(val) {
      this.usernameEmail = val
    },
    passwordInputHandler(val) {
      this.password = val
    },
    rememberMeChangeHandler(val) {
      this.rememberMe = val
    },
    submitLogin() {
      this.isLoading = false
      this.usernameEmailErrorMsg = ''
      this.passwordErrorMsg = ''
      if (!validateRequired(this.usernameEmail)) {
        this.usernameEmailErrorMsg = 'enter username or email'
        return null
      }

      if (!validateRequired(this.password)) {
        this.passwordErrorMsg = 'enter password'
        return null
      }

      this.isLoading = true
      setTimeout(() => {
        this.isLoading = false
        // this.$router.push('/'); //redirect to dashboard
      }, 2000)
    },
    closeForm() {
      this.$emit('closeLogin')
    },
    goToRegister() {
      this.$emit('showRegister')
    },
    showForgetPassword() {
      this.$emit('showForgetPassword')
    },
  },
}
</script>
<style lang="scss" scoped>
@import '~/assets/styles/colors.scss';
@import '~/assets/styles/variables.scss';
.form {
  width: 100%;
  background-color: white;
  .title {
    width: 100%;
    padding: 2em;
    display: flex;
    justify-content: space-between;
    align-items: center;
    p {
      font-size: $fontXL;
      color: $black_light;
    }
    .close {
      cursor: pointer;
      color: $grey_light;
      font-size: $fontM;
    }
    border-bottom: 1px solid darken(white, 10%);
  }
  .content {
    width: 100%;
    padding: 2em;
  }
  .inputs {
    width: 100%;

    .input {
      &:not(:first-child) {
        margin-top: 2em;
      }
      width: 100%;
    }
  }

  .btn {
    width: 100%;
    margin-top: 0.5em;
    display: flex;
    justify-content: center;
    p {
      color: white;
      font-size: $fontS;
    }
  }
  .rememberForget {
    margin-top: 2em;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .checkbox {
    }
    .forgetBtn {
      white-space: nowrap;
      background-color: transparent;
      font-size: $fontM - 0.1em;
      color: $grey;
    }
  }
  .bottom {
    width: 100%;
    padding: 2em;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-top: 1px solid darken(white, 10%);
    .link {
      display: flex;
      align-items: center;
      p {
        font-size: $fontM;
        color: $grey;
      }
      button {
        // margin-top: 0.5em;
        color: $primaryColor;
        background-color: transparent;
        font-size: $fontM;
        margin-left: 0.5em;
      }
    }
    .socials {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
      margin-top: 1em;
      .social {
        width: 4em;
        height: 4em;
        margin: 0 0.5em;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        border: 1px solid $primaryColor;
        transition: all 0.3s linear;
        color: $primaryColor;
        &:hover {
          background-color: $primaryColor;
          color: white;
        }
        .icon {
          font-size: $fontM;
        }
      }
    }
  }
}
</style>
