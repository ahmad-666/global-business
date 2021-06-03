<template>
  <div>
    <base-header
      :title="title"
      :sub-title="subTitle"
      :bread-crumb-layers="breadCrumbLayers"
    ></base-header>
    <Nuxt />
    <particle-container></particle-container>
    <base-footer></base-footer>
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
import BaseHeader from '~/components/header/BaseHeader.vue'
import BaseFooter from '~/components/footer/BaseFooter.vue'
import FooterBottom from '~/components/footer/FooterBottom.vue'
import ParticleContainer from '~/components/ParticleContainer.vue'
import BaseRegister from '~/components/BaseRegister.vue'
import BaseLogin from '~/components/BaseLogin.vue'
import BaseForgetPassword from '~/components/BaseForgetPassword.vue'
export default {
  components: {
    BaseHeader,
    BaseFooter,
    FooterBottom,
    ParticleContainer,
    BaseRegister,
    BaseLogin,
    BaseForgetPassword,
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
  computed: {
    title() {
      let title = ''
      const fullPath = this.$route.fullPath
      switch (true) {
        case fullPath.includes('support'):
          title = 'CUSTOMER SUPPORT'
          break
        case fullPath.includes('pricing'):
          title = 'PRICING'
          break
        case fullPath.includes('faqs'):
          title = 'FAQS'
          break
        case fullPath.includes('contact'):
          title = 'CONTACT US'
          break
        default:
          title = 'Home'
      }
      return title
    },
    subTitle() {
      let subTitle = ''
      const fullPath = this.$route.fullPath
      switch (true) {
        case fullPath.includes('support'):
          subTitle =
            'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
          break
        case fullPath.includes('pricing'):
          subTitle =
            'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
          break
        case fullPath.includes('faqs'):
          subTitle =
            'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
          break
        case fullPath.includes('contact'):
          subTitle =
            'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
          break
        default:
          subTitle =
            'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
      }
      return subTitle
    },
    breadCrumbLayers() {
      let breadCrumbLayers = null
      const fullPath = this.$route.fullPath
      switch (true) {
        case fullPath.includes('support'):
          breadCrumbLayers = [
            { name: 'home', route: '/' },
            { name: 'customer support', route: '/support', active: true },
          ]
          break
        case fullPath.includes('pricing'):
          breadCrumbLayers = [
            { name: 'home', route: '/' },
            { name: 'pricing', route: '/pricing', active: true },
          ]
          break
        case fullPath.includes('faqs'):
          breadCrumbLayers = [
            { name: 'home', route: '/' },
            { name: 'faqs', route: '/faqs', active: true },
          ]
          break
        case fullPath.includes('contact'):
          breadCrumbLayers = [
            { name: 'home', route: '/' },
            { name: 'contact', route: '/contact', active: true },
          ]
          break
        default:
          breadCrumbLayers = [{ name: 'home', route: '/', active: true }]
      }
      return breadCrumbLayers
    },
  },
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
