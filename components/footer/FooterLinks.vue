<template>
  <div class="container">
    <div class="title">
      <h6>Useful Links</h6>
      <div class="line"></div>
    </div>
    <div class="links">
      <nuxt-link
        v-for="link in links"
        :key="link.id"
        :to="link.route"
        class="link"
        >{{ link.name }}</nuxt-link
      >
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      links: [
        { id: 1, name: 'home', route: '/' },
        { id: 2, name: 'about us', route: '/about' },
        { id: 3, name: 'services', route: '/services' },
        { id: 4, name: 'faqs', route: '/faqs' },
        { id: 5, name: 'contact us', route: '/contact' },
      ],
    }
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
  .links {
    .link {
      display: block;
      margin-top: 1em;
      transition: all 0.3s linear;
      color: white;
      font-size: $fontM + 0.15em;
      font-weight: lighter;
      text-transform: capitalize;
      padding: 0.25em 0;
      &:hover {
        color: $primaryColor;
        background-color: rgba(255, 255, 255, 0.5);
        padding-left: 2em;
      }
    }
  }
}
</style>
