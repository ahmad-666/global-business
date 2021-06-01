<template>
  <div class="contactWrapper">
    <base-loader v-if="isLoading"></base-loader>
    <div class="contactContainer">
      <div class="left">
        <h6>Contact Info</h6>
        <div class="infos">
          <div
            v-for="contactInfo in contactInfos"
            :key="contactInfo.id"
            class="info"
          >
            <contact-info
              :icon="contactInfo.icon"
              :value="contactInfo.value"
              :desc="contactInfo.desc"
              :label="contactInfo.label"
            ></contact-info>
          </div>
        </div>
      </div>
      <form class="contactForm" novalidate @submit.prevent="contactSubmit">
        <h6>Contact Form</h6>
        <div class="input">
          <base-input
            size="m"
            type="white-bg"
            input-type="text"
            placeholder="Name*"
            name="name"
            :model-value="name"
            @update:modelValue="nameInputHandler"
          ></base-input>
          <error-message
            v-if="nameErrorMsg"
            :error-msg="nameErrorMsg"
          ></error-message>
        </div>
        <div class="input">
          <base-input
            size="m"
            type="white-bg"
            input-type="email"
            placeholder="Email*"
            name="email"
            :model-value="email"
            @update:modelValue="emailInputHandler"
          ></base-input>
          <error-message
            v-if="emailErrorMsg"
            :error-msg="emailErrorMsg"
          ></error-message>
        </div>
        <div class="input">
          <base-input
            size="m"
            type="white-bg"
            input-type="text"
            placeholder="Phone*"
            name="tel"
            :model-value="tel"
            @update:modelValue="telInputHandler"
          ></base-input>
          <error-message
            v-if="telErrorMsg"
            :error-msg="telErrorMsg"
          ></error-message>
        </div>
        <div class="textarea">
          <base-text-area
            size="m"
            type="white-bg"
            placeholder="Comment*"
            name="comment"
            :model-value="comment"
            height="10em"
            @update:modelValue="commentInputHandler"
          ></base-text-area>
          <error-message
            v-if="commentErrorMsg"
            :error-msg="commentErrorMsg"
          ></error-message>
        </div>
        <div class="btn">
          <base-button size="m" type="submit" btn-type="primary-hover">
            <p>send message</p>
          </base-button>
        </div>
        <div class="success">
          <success-message
            v-if="contactSuccessMsg"
            :success-msg="contactSuccessMsg"
          ></success-message>
        </div>
      </form>
    </div>

    <div class="mapContainer">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.840108181602!2d144.95373631539215!3d-37.8172139797516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d4c2b349649%3A0xb6899234e561db11!2sEnvato!5e0!3m2!1sen!2sin!4v1497005461921"
        allowfullscreen=""
      ></iframe>
    </div>
  </div>
</template>
<script>
import ContactInfo from '~/components/ContactInfo.vue'

import { validateEmail, validateRequired } from '~/utils/validation'
export default {
  components: {
    ContactInfo,
  },
  data() {
    return {
      contactInfos: [
        {
          id: 1,
          icon: 'map-marker-alt',
          label: 'address',
          value: this.$store.getters.address,
          desc: '',
        },
        {
          id: 2,
          icon: 'phone-alt',
          label: 'phone',
          value: this.$store.getters.tel,
          desc: this.$store.getters.telTime,
        },
        {
          id: 3,
          icon: 'envelope',
          label: 'email',
          value: this.$store.getters.email,
          desc: this.$store.getters.emailTime,
        },
      ],
      name: '',
      nameErrorMsg: '',
      email: '',
      emailErrorMsg: '',
      tel: '',
      telErrorMsg: '',
      comment: '',
      commentErrorMsg: '',
      isLoading: false,
      contactSuccessMsg: '',
    }
  },
  methods: {
    nameInputHandler(val) {
      this.name = val
    },
    emailInputHandler(val) {
      this.email = val
    },
    telInputHandler(val) {
      this.tel = val
    },
    commentInputHandler(val) {
      this.comment = val
    },
    contactSubmit() {
      this.contactSuccessMsg = ''
      this.nameErrorMsg = ''
      this.emailErrorMsg = ''
      this.telErrorMsg = ''
      this.commentErrorMsg = ''
      if (!validateRequired(this.name)) {
        this.nameErrorMsg = 'name is required'
        return null
      }
      if (!validateEmail(this.email)) {
        this.emailErrorMsg = 'email is not correct'
        return null
      }
      if (!validateRequired(this.tel)) {
        this.telErrorMsg = 'tel is required'
        return null
      }
      if (!validateRequired(this.comment)) {
        this.commentErrorMsg = 'comment is required'
        return null
      }
      this.isLoading = true
      setTimeout(() => {
        this.isLoading = false
        this.contactSuccessMsg = 'successfully sent'
      }, 2000)
    },
  },
}
</script>
<style lang="scss" scoped>
@import '~/assets/styles/colors.scss';
@import '~/assets/styles/variables.scss';
.contactWrapper {
  width: 100%;
  .contactContainer {
    width: 100%;
    padding: 4em $header_padding;
    background-color: white;
    display: flex;
    justify-content: space-between;
    .left {
      flex-shrink: 0;
      width: 50em;
      h6 {
        font-size: $fontXL;
        color: $black_light;
      }
      .infos {
        margin-top: 1em;
        .info {
          width: 100%;
          margin-top: 3em;
        }
      }
    }
    .contactForm {
      width: 100%;
      margin-left: 2em;
      h6 {
        font-size: $fontXL;
        color: $black_light;
      }
      .input,
      .textarea {
        width: 100%;
        margin-top: 2em;
      }
      .btn {
        text-align: right;
        margin-top: 1em;
        p {
          color: white;
          text-transform: capitalize;
        }
      }
      .success {
        text-align: center;
        margin-top: 1em;
      }
    }
  }
  .mapContainer {
    width: 100%;
    height: 50em;
    iframe {
      display: block;
      width: 100%;
      height: 100%;
    }
  }
}
</style>
