<template>
  <div>
    <top-header></top-header>
    <nav-bar></nav-bar>
    <Nuxt />
  </div>
</template>
<script>
import TopHeader from '~/components/ui/TopHeader.vue'
import NavBar from '~/components/ui/NavBar.vue'
export default {
  components: {
    TopHeader,
    NavBar,
  },
}
</script>
<style>
.c {
  color: red;
}
</style>
