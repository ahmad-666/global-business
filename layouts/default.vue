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
  </div>
</template>
<script>
import BaseHeader from '~/components/header/BaseHeader.vue'
import BaseFooter from '~/components/footer/BaseFooter.vue'
import FooterBottom from '~/components/footer/FooterBottom.vue'
import ParticleContainer from '~/components/ParticleContainer.vue'
export default {
  components: {
    BaseHeader,
    BaseFooter,
    FooterBottom,
    ParticleContainer,
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
      }
      return breadCrumbLayers
    },
  },
}
</script>
