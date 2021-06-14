<template>
  <footer>
    <!-- <div class="filter"></div>
    <img class="bg" src="imgs/bg/bg-13.jpg" alt="imgs/bg/bg-13.jpg" /> -->
    <div class="content">
      <div class="logos">
        <img
          src="imgs/footer logos/visa-card-logo.png"
          alt="imgs/footer logos/visa-card-logo.png"
          class="logo"
        />
        <img
          src="imgs/footer logos/mastercard__logo.png"
          alt="imgs/footer logos/mastercard__logo.png"
          class="logo"
        />
        <img
          src="imgs/footer logos/UnionPay_logo.png"
          alt="imgs/footer logos/UnionPay_logo.png"
          class="logo"
        />
        <img
          src="imgs/footer logos/bitcoin-logo.png"
          alt="imgs/footer logos/bitcoin-logo.png"
          class="logo"
        />
        <img
          src="imgs/footer logos/bank-concept-logo.png"
          alt="imgs/footer logos/bank-concept-logo.png"
          class="logo"
        />
      </div>
      <div class="flags">
        <div class="flag">
          <img src="imgs/flag/01.jpg" alt="imgs/flag/01.jpg" />
          <p>+44-161-694-8679 (US)</p>
        </div>
        <div class="flag">
          <img src="imgs/flag/02.jpg" alt="imgs/flag/01.jpg" />
          <p>+44-161-694-8679 (INDIA)</p>
        </div>
        <div class="flag">
          <img src="imgs/flag/03.jpg" alt="imgs/flag/01.jpg" />
          <p>+44-161-694-8679 (CHINA)</p>
        </div>
        <div class="flag">
          <img src="imgs/flag/04.jpg" alt="imgs/flag/01.jpg" />
          <p>+44-161-694-8679 (JAPAN)</p>
        </div>
        <div class="flag">
          <img src="imgs/flag/05.jpg" alt="imgs/flag/01.jpg" />
          <p>+44-161-694-8679 (UAE)</p>
        </div>
        <div class="flag">
          <img src="imgs/flag/06.jpg" alt="imgs/flag/01.jpg" />
          <p>+44-161-694-8679 (UK)</p>
        </div>
      </div>
      <div class="sections">
        <div class="section about">
          <h6 class="title">WHO ARE WE</h6>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
            accusamus facilis autem at voluptatibus, quod neque totam. Eum odio
            facilis error optio ea? Omnis ad fugiat aliquid ullam quisquam
            repellendus!
          </p>
        </div>
        <div class="section links">
          <h6 class="title">USEFUL LINKS</h6>
          <ul>
            <li>
              <nuxt-link to="/" class="link">Home</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/about" class="link">About Us</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/services" class="link">Services</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/faqs" class="link">Faqs </nuxt-link>
            </li>
            <li>
              <nuxt-link to="/contact" class="link">Contact Us</nuxt-link>
            </li>
          </ul>
        </div>
        <div class="section followUs">
          <h6 class="title">FOLLOW US</h6>
          <p class="desc">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur ad
            aliquid, placeat repellat harum
          </p>
          <p class="email">something@gmail.com</p>
          <div class="socials">
            <nuxt-link to="/" class="social">
              <font-awesome-icon
                class="icon"
                :icon="['fab', 'twitter']"
              ></font-awesome-icon>
            </nuxt-link>
            <nuxt-link to="/" class="social">
              <font-awesome-icon
                class="icon"
                :icon="['fab', 'facebook']"
              ></font-awesome-icon>
            </nuxt-link>
            <nuxt-link to="/" class="social">
              <font-awesome-icon
                class="icon"
                :icon="['fab', 'google']"
              ></font-awesome-icon>
            </nuxt-link>
            <nuxt-link to="/" class="social">
              <font-awesome-icon
                class="icon"
                :icon="['fab', 'github']"
              ></font-awesome-icon>
            </nuxt-link>
          </div>
        </div>
        <div class="section contact">
          <h6 class="title">CONTACT US</h6>
          <p class="desc">
            Your question and comments are important to us.We've got everything
            covered for your needs.
          </p>
          <form novalidate @submit.prevent="submitHandler">
            <div class="input">
              <base-input
                size="m"
                input-type="email"
                type="footer-elm"
                placeholder="enter email"
                name="email"
                :model-value="email"
                @update:modelValue="emailInputHandler"
              ></base-input>
              <error-message
                v-if="emailErrorMsg"
                error-msg="enter email"
              ></error-message>
            </div>
            <div class="textarea">
              <base-text-area
                size="m"
                type="footer-elm"
                placeholder="message"
                name="message"
                :model-value="message"
                height="5em"
                @update:modelValue="messageInputHandler"
              ></base-text-area>
              <error-message
                v-if="messageErrorMsg"
                error-msg="enter message"
              ></error-message>
            </div>
            <base-button type="submit" btn-type="primary" size="m">{{
              !isLoading ? 'Submit' : 'Sending...'
            }}</base-button>
            <success-message
              v-if="successMsg"
              success-msg="submit successfully"
            ></success-message>
          </form>
        </div>
      </div>
    </div>
  </footer>
</template>
<script>
import BaseTextArea from '../form/BaseTextArea.vue'
import SuccessMessage from '../form/SuccessMessage.vue'
import { validateEmail, validateRequired } from '~/utils/validation'
export default {
  components: { BaseTextArea, SuccessMessage },
  data() {
    return {
      email: '',
      message: '',
      isLoading: false,
      emailErrorMsg: '',
      messageErrorMsg: '',
      successMsg: '',
    }
  },
  methods: {
    emailInputHandler(val) {
      this.email = val
    },
    messageInputHandler(val) {
      this.message = val
    },
    submitHandler() {
      this.isLoading = false
      this.emailErrorMsg = ''
      this.messageErrorMsg = ''
      this.successMsg = ''
      if (!validateEmail(this.email)) {
        this.emailErrorMsg = true
        return null
      }
      if (!validateRequired(this.message)) {
        this.messageErrorMsg = true
        return null
      }
      this.isLoading = true
      setTimeout(() => {
        this.isLoading = false
        this.successMsg = true
      }, 2000)
    },
  },
}
</script>
<style lang="scss" scoped>
@import '~/assets/styles/variables.scss';
@import '~/assets/styles/colors.scss';

footer {
  width: 100%;
  position: relative;
  background-color: $footer_index_bg;
  // .bg {
  //   width: 100%;
  //   height: 100%;
  //   position: absolute;
  //   left: 0;
  //   top: 0;
  //   z-index: 1;
  //   object-fit: cover;
  // }
  // .filter {
  //   width: 100%;
  //   height: 100%;
  //   position: absolute;
  //   left: 0;
  //   top: 0;
  //   z-index: 2;
  //   background-color: rgba(0, 0, 0, 0.75);
  // }
  .content {
    width: 100%;
    padding: 4em;
    z-index: 3;
    display: flex;
    flex-direction: column;
    align-items: center;
    .logos {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
      .logo {
        width: auto;
        height: 3em;
        margin: 0.5em;
      }
    }
    .flags {
      width: 75%;
      margin-top: 4em;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
      .flag {
        width: calc((100% - (3 * 3em)) / 3);
        margin: 1.5em;
        border-bottom: 1px solid $grey;
        padding-bottom: 0.5em;
        display: flex;
        align-items: center;
        img {
          width: 3em;
          height: auto;
        }
        p {
          margin-left: 0.5em;
          font-size: $fontM;
          color: darken(white, 5%);
          font-weight: 700;
        }
      }
    }
    .sections {
      display: flex;
      justify-content: space-between;
      position: relative;
      margin-top: 4em;
    }

    .section {
      width: 25%;
      &:not(:first-child) {
        margin-left: 5em;
      }
      .title {
        font-weight: 700;
        color: $primaryColor;
        font-size: $fontL;
        position: relative;
        &::before {
          content: '';
          width: 0.15em;
          height: 1.5em;
          position: absolute;
          left: -0.5em;
          top: 50%;
          transform: translateY(-50%);
          background-color: $primaryColor;
        }
      }
      * {
        &:nth-child(2) {
          margin-top: 1em;
        }
      }
    }
    .section.about {
      p {
        font-size: $fontM;
        color: white;
        line-height: 1.75em;
      }
    }
    .section.links {
      ul {
        li {
          margin-top: 1em;
          border-bottom: 1px solid darken(white, 20%);
          padding: 0.5em;

          .link {
            color: white;
            font-size: $fontM;
            transition: all 0.3s linear;
            &:hover {
              color: $primaryColor;
            }
          }
        }
      }
    }
    .section.followUs {
      .desc {
        font-size: $fontM;
        line-height: 1.75em;
        color: white;
      }
      .email {
        margin-top: 0.5em;
        color: darken($primaryColor, 5%);
        font-size: $fontM;
      }
      .socials {
        margin-top: 1em;
        width: 100%;
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        .social {
          width: 5em;
          height: 5em;
          margin: 0.5em;
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
          border: 1px solid $primaryColor;
          transition: all 0.3s linear;
          background-color: lighten(black, 15%);
          &:hover {
            background-color: $primaryColor;
            border: 1px solid transparent;
            .icon {
              color: white;
            }
          }
          .icon {
            font-size: 1.8em;
            color: $primaryColor;
          }
        }
      }
    }
    .section.contact {
      .desc {
        color: white;
        font-size: $fontM;
        line-height: 1.75em;
      }
      form {
        margin-top: 1em;
        .input,
        .textarea {
          margin-top: 1em;
          width: 100%;
        }
      }
      button[type='submit'] {
        margin-top: 1em;
      }
    }
  }
}
@media screen and (max-width: 850px) {
  footer {
    .content {
      .flags {
        width: 100%;
        .flag {
          width: calc((100% - (2 * 3em)) / 2);
        }
      }
      .sections {
        flex-wrap: wrap;
      }
      .section {
        width: calc((100% - (2 * 3em)) / 2);
        margin: 1.5em !important;
      }
    }
  }
}
@media screen and (max-width: 500px) {
  footer {
    .content {
      .logos {
        .logo {
          height: 3em;
        }
      }
      .flags {
        .flag {
          width: 100%;
        }
      }
      padding: 2em;
      .section {
        width: 100%;
      }
    }
  }
}
</style>
