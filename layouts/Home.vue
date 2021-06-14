<template>
  <div>
    <header>
      <div class="slider">
        <base-slider></base-slider>
      </div>

      <div class="content">
        <div class="topHeader">
          <top-header></top-header>
        </div>
        <div class="navBar">
          <nav-bar></nav-bar>
        </div>
      </div>
    </header>
    <div class="carousel">
      <units-carousel></units-carousel>
    </div>
    <Nuxt />
    <particle-container></particle-container>
    <!-- <base-footer></base-footer> -->
    <index-footer></index-footer>
    <footer-bottom></footer-bottom>
    <div v-if="showRegister" class="signup">
      <base-register
        @closeReg="fireCloseRegister"
        @showLogin="fireShowLogin"
      ></base-register>
    </div>
    <div v-if="showLogin" class="signin">
      <base-login
        @closeLogin="fireCloseLogin"
        @showRegister="fireShowRegister"
        @showForgetPassword="fireShowForgetPassword"
      ></base-login>
    </div>
    <div v-if="showForgetPassword" class="forgetPassword">
      <base-forget-password
        @closeForgetPassword="fireCloseForgetPassword"
        @showLogin="fireShowLogin"
      ></base-forget-password>
    </div>
    <black-filter
      v-if="showRegister || showLogin || showForgetPassword"
      @removeBlackFilter="removeBlackFilter"
    ></black-filter>
    <div class="scrollTop" @click="scrollTop">
      <font-awesome-icon class="icon" icon="arrow-up"></font-awesome-icon>
    </div>
  </div>
</template>
<script>
import BaseSlider from '~/components/slider/BaseSlider.vue'
// import BaseFooter from '~/components/footer/BaseFooter.vue'
import FooterBottom from '~/components/footer/FooterBottom.vue'
import ParticleContainer from '~/components/ParticleContainer.vue'
import BaseRegister from '~/components/BaseRegister.vue'
import BaseLogin from '~/components/BaseLogin.vue'
import BaseForgetPassword from '~/components/BaseForgetPassword.vue'
import NavBar from '~/components/header/NavBar.vue'
import TopHeader from '~/components/header/TopHeader.vue'
import IndexFooter from '~/components/footer/IndexFooter.vue'
import UnitsCarousel from '~/components/slider/UnitsCarousel.vue'
export default {
  components: {
    // BaseFooter,
    IndexFooter,
    FooterBottom,
    ParticleContainer,
    BaseRegister,
    BaseLogin,
    BaseForgetPassword,
    BaseSlider,
    NavBar,
    TopHeader,
    UnitsCarousel,
  },
  provide() {
    return {
      fireShowRegister: this.fireShowRegister,
      fireShowLogin: this.fireShowLogin,
    }
  },
  data() {
    return {
      showRegister: false,
      showLogin: false,
      showForgetPassword: false,
    }
  },
  computed: {},
  methods: {
    fireShowRegister() {
      this.showRegister = true
      this.showLogin = false
      this.showForgetPassword = false
    },
    fireCloseRegister() {
      this.showRegister = false
    },
    fireShowLogin() {
      this.showLogin = true
      this.showRegister = false
      this.showForgetPassword = false
    },
    fireCloseLogin() {
      this.showLogin = false
    },
    removeBlackFilter() {
      this.showRegister = false
      this.showLogin = false
      this.showForgetPassword = false
    },
    fireShowForgetPassword() {
      this.showForgetPassword = true
      this.showRegister = false
      this.showLogin = false
    },
    fireCloseForgetPassword() {
      this.showForgetPassword = false
    },
    scrollTop() {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth',
      })
    },
  },
}
</script>
<style lang="scss" scoped>
@import '~/assets/styles/colors.scss';
@import '~/assets/styles/variables.scss';
header {
  width: 100%;
  height: 100vh;
  position: relative;
  .slider {
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 1;
  }
  .content {
    width: 100%;
    position: relative;
    z-index: 3;
    .topHeader {
      width: 100%;
    }
    .navBar {
      width: 100%;
      margin-top: 2em;
    }
  }
}
@media screen and (max-width: 850px) {
  header {
    .content {
      .txts {
        p {
          max-width: 90%;
        }
      }
    }
  }
}
.signup,
.signin,
.forgetPassword {
  width: 40em;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 11;
}
.scrollTop {
  width: 5em;
  height: 5em;
  border-radius: 50%;
  background-color: #333;
  cursor: pointer;
  transition: all 0.3s linear;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  right: 2vw;
  bottom: 2vh;
  z-index: 9;
  &:hover {
    background-color: $primaryColor;
  }
  .icon {
    font-size: $fontL;
    color: white;
  }
}
</style>
