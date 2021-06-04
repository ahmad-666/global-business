<template>
  <nav ref="navElm" :class="{ fixed: scrollPassed, mobile: isMobile }">
    <nuxt-link to="/" class="logo">
      <img src="imgs/logo.png" alt="imgs/logo.png" />
    </nuxt-link>

    <ul v-if="!isMobile" class="items">
      <li v-for="navItem in navItems" :key="navItem.name">
        <nuxt-link :to="navItem.route" :class="{ active: navItem.active }">{{
          navItem.name
        }}</nuxt-link>
      </li>
    </ul>
    <div v-else class="mobileMenu">
      <div class="bar" @click="toggleMobileMenu">
        <p>Menu</p>
        <font-awesome-icon class="icon" icon="bars"></font-awesome-icon>
      </div>
      <transition name="menu-fade">
        <ul v-if="isMobileMenuOpen" class="mobileItems">
          <li v-for="navItem in navItems" :key="navItem.name">
            <nuxt-link
              :to="navItem.route"
              :class="{ active: navItem.active }"
              >{{ navItem.name }}</nuxt-link
            >
          </li>
        </ul>
      </transition>
    </div>
  </nav>
</template>
<script>
export default {
  data() {
    return {
      scrollPassed: false,
      isMobile: false,
      isMobileMenuOpen: false,
      navItems: [
        { name: 'home', route: '/', active: true },
        { name: 'services', route: '/services' },
        { name: 'support', route: '/support' },
        { name: 'pricing', route: '/pricing' },
        { name: 'faqs', route: '/faqs' },
        { name: 'contact', route: '/contact' },
      ],
    }
  },
  mounted() {
    this.scrollHandler()
    this.resizeHandler()
    window.addEventListener('scroll', this.scrollHandler)
    window.addEventListener('resize', this.resizeHandler)
    window.addEventListener('click', this.hideMobileMenu)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.scrollHandler)
    window.removeEventListener('resize', this.resizeHandler)
    window.removeEventListener('click', this.hideMobileMenu)
  },
  methods: {
    scrollHandler() {
      if (window.scrollY > this.$refs.navElm.getBoundingClientRect().top)
        this.scrollPassed = true
      else this.scrollPassed = false
    },
    resizeHandler() {
      if (window.innerWidth > 650) this.isMobile = false
      else this.isMobile = true
    },
    toggleMobileMenu(e) {
      e.stopPropagation()
      this.isMobileMenuOpen = !this.isMobileMenuOpen
    },
    hideMobileMenu() {
      this.isMobileMenuOpen = false
    },
  },
}
</script>
<style lang="scss" scoped>
@import '~/assets/styles/colors.scss';
@import '~/assets/styles/variables.scss';
nav {
  width: 100%;
  padding: 1em $header_padding;
  display: flex;
  align-items: center;
  transition: all 0.3s linear;
  background-color: transparent;
  .logo {
    width: 7em;
    height: 7em;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .items {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    li {
      margin-left: 3em;
      cursor: pointer;
      text-transform: uppercase;
      a {
        font-size: $fontL;
        transition: all 0.3s linear;
        color: white;
        &:hover {
          color: $primaryColor;
        }
      }
      a.active {
        color: $primaryColor;
      }
    }
  }
  .mobileMenu {
    position: relative;
    .bar {
      display: flex;
      align-items: center;
      cursor: pointer;
      p {
        font-size: $fontL;
        font-weight: 700;
        color: white;
      }
      .icon {
        margin-left: 0.5em;
        font-size: $fontL;
        color: white;
      }
    }
    .menu-fade-enter,
    .menu-fade-leave-to {
      opacity: 0;
    }
    .menu-fade-enter-active,
    .menu-fade-leave-active {
      transition: all 0.3s linear;
    }
    .menu-fade-enter-to,
    .menu-fade-leave {
      opacity: 1;
    }
    .mobileItems {
      width: 30em;
      position: absolute;
      right: 0;
      top: calc(100% + 3em);
      box-shadow: 0 1em 1em 0 rgba(0, 0, 0, 0.3);

      li {
        width: 100%;
        padding: 1.5em 1.5em;
        transition: all 0.3s linear;
        background-color: lighten($mobile_nav_bg_color, 8%);

        a {
          display: block;
          width: 100%;
          color: white;
          font-size: $fontL + 0.25em;
          text-transform: capitalize;
        }
        &:hover {
          background-color: $primaryColor;
        }
      }
    }
  }
}
nav.fixed {
  position: fixed;
  left: 0;
  top: 0;
  background-color: $mobile_nav_bg_color;
  z-index: 9;
}
nav.mobile {
  justify-content: space-between;
}
@media screen and (max-width: 1000px) {
  nav {
    padding: 1em $header_padding / 2;
  }
}
@media screen and (max-width: 500px) {
  nav {
    padding: 1em $header_padding / 4;
  }
}
</style>
