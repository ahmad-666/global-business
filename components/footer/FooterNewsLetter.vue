<template>
  <div class="container">
    <div class="title">
      <h6>Newsletter</h6>
      <div class="line"></div>
    </div>
    <div class="newsletter">
      <p class="desc">
        Lorem Ipsum passages, and more recently with desktop publishing software
        like Aldus PageMaker including versions.
      </p>
      <form
        novalidate
        class="newsLetterForm"
        @submit.prevent="submitNewsLetters"
      >
        <div class="input">
          <base-input
            size="m"
            type="white-bg"
            input-type="email"
            placeholder="enter your email"
            name="email"
            :model-value="email"
            @update:modelValue="updateEmail"
          ></base-input>
          <button type="submit">{{ submitBtnText }}</button>
        </div>
        <error-message
          v-if="emailErrorMsg"
          :error-msg="emailErrorMsg"
        ></error-message>
      </form>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      emailErrorMsg: '',
      isLoading: false,
      email: '',
    }
  },
  computed: {
    submitBtnText() {
      if (!this.isLoading) return 'GO'
      else return 'Sending...'
    },
  },
  methods: {
    submitNewsLetters() {
      if (!this.email || !this.email.includes('@')) {
        this.emailErrorMsg = 'email is invalid'
        return null
      }
      this.emailErrorMsg = ''
      this.isLoading = true
      setTimeout(() => {
        this.isLoading = false
      }, 2000)
    },
    updateEmail(val) {
      this.email = val
    },
  },
}
</script>
<style lang="scss" scoped>
@import '~/assets/styles/colors.scss';
@import '~/assets/styles/variables.scss';
.container {
  width: 100%;
  .title {
    h6 {
      font-weight: 700;
      color: white;
      font-size: $fontL + 0.3em;
      text-transform: capitalize;
    }
    .line {
      margin-top: 1em;
      width: 6em;
      height: 0.35em;
      background-color: $primaryColor;
    }
  }
  .newsletter {
    margin-top: 2em;
    .desc {
      font-size: $fontM;
      color: white;
    }
    .newsLetterForm {
      width: 100%;
      margin-top: 2em;

      .input {
        width: 100%;
        display: flex;
        align-items: stretch;
      }
      button[type='submit'] {
        flex-shrink: 0;
        min-width: 4em;
        padding: 1em;
        color: white;
        background-color: $primaryColor;
        transition: all 0.3s liner;
        text-align: center;
        &:hover {
          background-color: #151d2e;
        }
      }
    }
  }
}
</style>
