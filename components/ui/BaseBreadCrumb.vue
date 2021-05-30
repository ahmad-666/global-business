<template>
  <div class="breadcrumb">
    <ul>
      <li v-for="(layer, i) in layers" :key="layer.name">
        <nuxt-link :to="layer.route" :class="{ active: layer.active }">{{
          layer.name
        }}</nuxt-link>
        <div v-if="i < layers.length - 1" class="line"></div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  props: {
    layers: {
      type: Array,
      required: true,
    },
  },
}
</script>
<style lang="scss" scoped>
@import '~/assets/styles/colors.scss';
@import '~/assets/styles/variables.scss';
.breadcrumb {
  width: 100%;
  padding: 1.5em;
  background-color: rgba(255, 255, 255, 0.35);
  display: flex;
  justify-content: center;
  align-items: center;
  ul {
    display: flex;
    align-items: center;
    li {
      display: flex;
      align-items: center;
      a {
        font-size: $fontM;
        color: white;
        transition: all 0.3s linear;
        text-transform: capitalize;
        &:hover {
          color: $primaryColor;
        }
      }
      a.active {
        color: $primaryColor;
      }
      .line {
        width: 0.15em;
        height: 2em;
        background-color: white;
        transform: rotate(25deg);
        margin-left: 1.5em;
        margin-right: 1.5em;
      }
    }
  }
}
</style>
