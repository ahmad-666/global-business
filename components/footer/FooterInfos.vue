<template>
  <div class="container">
    <img src="imgs/logo.png" alt="imgs/logo.png" class="logo" />
    <div class="infos">
      <div class="info">
        <font-awesome-icon icon="phone-alt" class="icon"></font-awesome-icon>
        <ul>
          <li>{{ tel }}</li>
        </ul>
      </div>
      <div class="info">
        <font-awesome-icon icon="envelope" class="icon"></font-awesome-icon>
        <ul>
          <li>{{ email }}</li>
        </ul>
      </div>
      <div class="info">
        <font-awesome-icon
          icon="map-marker-alt"
          class="icon"
        ></font-awesome-icon>
        <ul>
          <li>{{ address }}</li>
        </ul>
      </div>
    </div>
    <div class="socials">
      <nuxt-link
        v-for="social in socials"
        :key="social.id"
        :to="social.url"
        class="social"
      >
        <font-awesome-icon
          :icon="['fab', socialIcon(social.type)]"
          class="icon"
        ></font-awesome-icon>
      </nuxt-link>
    </div>
  </div>
</template>
<script>
export default {
  computed: {
    tel() {
      return this.$store.getters.tel
    },
    email() {
      return this.$store.getters.email
    },
    address() {
      return this.$store.getters.address
    },
    socials() {
      return this.$store.getters.socials
    },
  },
  methods: {
    socialIcon(type) {
      let icon = ''
      switch (type) {
        case 'facebook':
          icon = 'facebook'
          break
        case 'google':
          icon = 'google'
          break
        case 'github':
          icon = 'github'
          break
        case 'twitter':
          icon = 'twitter'
          break
      }
      return icon
    },
  },
}
</script>
<style lang="scss" scoped>
@import '~/assets/styles/colors.scss';
@import '~/assets/styles/variables.scss';
.container {
  width: 100%;
  .logo {
    width: 7em;
    height: 7em;
  }
  .infos {
    .info {
      margin-top: 2em;
      display: flex;
      align-items: center;
      .icon {
        color: $primaryColor;
        font-size: $fontL + 0.5em;
      }
      ul {
        margin-left: 2em;
        color: white;
        li {
          font-size: $fontM;
        }
      }
    }
  }
  .socials {
    margin-top: 2em;
    width: 100%;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    align-items: center;
    .social {
      width: 5em;
      height: 5em;
      border-radius: 50%;
      border: 1px solid darken(white, 20%);
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: transparent;
      transition: all 0.3s linear;
      margin: 0.5em;
      &:hover {
        background-color: $primaryColor;
      }
      .icon {
        font-size: $fontM + 0.3em;
        color: white;
      }
    }
  }
}
</style>
