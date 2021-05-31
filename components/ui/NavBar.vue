<template>
  <nav>
    <nuxt-link to="/" class="logo">
      <img src="imgs/logo.png" alt="imgs/logo.png" />
    </nuxt-link>

    <ul class="items">
      <li v-for="navItem in navItems" :key="navItem.name">
        <nuxt-link :to="navItem.route">{{ navItem.name }}</nuxt-link>
      </li>
    </ul>
  </nav>
</template>
<script>
export default {
  data() {
    return {
      navItems: [
        { name: 'home', route: '/' },
        { name: 'services', route: '/services' },
        { name: 'support', route: '/support' },
        { name: 'pricing', route: '/pricing' },
        { name: 'faqs', route: '/faqs' },
        { name: 'contact', route: '/contact' },
      ],
    }
  },
}
</script>
<style lang="scss" scoped>
@import '~/assets/styles/colors.scss';
nav {
  width: 100%;
  padding: 1em 15%;
  display: flex;
  align-items: center;
  .logo {
    width: 6em;
    height: 6em;
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
      margin-left: 2em;
      cursor: pointer;
      text-transform: uppercase;
      a {
        font-size: 2em;
        font-weight: 700;
        transition: all 0.3s linear;
        color: red;
        &:hover {
          color: $primaryColor;
        }
      }
    }
  }
}
</style>
