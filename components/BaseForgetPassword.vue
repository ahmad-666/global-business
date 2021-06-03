<template>
  <form novalidate class="form" @submit.prevent="submitForgetPassword">
    <div class="title">
      <p>Forget Password</p>
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
            input-type="email"
            placeholder="Email"
            name="email"
            :model-value="email"
            @update:modelValue="emailInputHandler"
          ></base-input>
          <error-message
            v-if="emailErrorMsg"
            :error-msg="emailErrorMsg"
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
          <p>{{ !isLoading ? 'Submit' : ' Sending...' }}</p>
        </base-button>
      </div>
    </div>

    <div class="bottom">
      <div class="link">
        <p>Already Have an Account?</p>
        <button @click="goToLogin">Login</button>
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
import { validateEmail } from '~/utils/validation'
export default {
  data() {
    return {
      isLoading: false,
      email: '',
      emailErrorMsg: '',
    }
  },
  computed: {
    socials() {
      return this.$store.getters.socials
    },
  },
  methods: {
    emailInputHandler(val) {
      this.email = val
    },

    submitForgetPassword() {
      this.isLoading = false
      this.emailErrorMsg = ''
      if (!validateEmail(this.email)) {
        this.emailErrorMsg = 'enter valid email'
        return null
      }

      this.isLoading = true
      setTimeout(() => {
        this.isLoading = false
        // this.$router.push('/'); //redirect to dashboard
      }, 2000)
    },
    closeForm() {
      this.$emit('closeForgetPassword')
    },
    goToLogin() {
      this.$emit('showLogin')
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
