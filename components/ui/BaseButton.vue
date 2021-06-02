<template>
  <button
    :type="type"
    class="btn"
    :class="{ ...cssTypeClass, ...cssSizeClass }"
    @click="clickHandler"
  >
    <slot></slot>
  </button>
</template>
<script>
export default {
  props: {
    type: {
      type: String,
      default: 'button',
    },
    btnType: {
      type: String,
      required: true,
    },
    size: {
      type: String,
      default: 'm',
    },
  },
  emits: ['clickHandler'],
  computed: {
    cssTypeClass() {
      const cssClass = {}
      switch (this.btnType) {
        case 'primary':
          cssClass.primary = true
          break
        case 'primary-hover':
          cssClass.primaryHover = true
          break
        case 'dark-blue':
          cssClass.darkBlue = true
          break
        case 'market-card':
          cssClass.marketCard = true
          break
      }
      return cssClass
    },
    cssSizeClass() {
      const cssClass = {}
      switch (this.size) {
        case 'xs':
          cssClass.xs = true
          break
        case 's':
          cssClass.s = true
          break
        case 'm':
          cssClass.m = true
          break
        case 'l':
          cssClass.l = true
          break
        case 'xl':
          cssClass.xl = true
          break
      }
      return cssClass
    },
  },
  methods: {
    clickHandler() {
      this.$emit('clickHandler')
    },
  },
}
</script>
<style lang="scss" scoped>
@import '~/assets/styles/variables.scss';
@import '~/assets/styles/colors.scss';
.xs {
  font-size: $fontXS;
}
.s {
  font-size: $fontS;
}
.m {
  font-size: $fontM;
}
.l {
  font-size: $fontL;
}
.xl {
  font-size: $fontXL;
}
.primary {
  background-color: $primaryColor;
}
.darkBlue {
  background-color: $dark-blue;
  color: white;
  transition: all 0.3s linear;
  &:hover {
    background-color: $primaryColor;
  }
}
.primaryHover {
  background-color: $primaryColor;
  transition: all 0.3s linear;
  &:hover {
    background-color: #151d2e;
    > * {
      color: white !important;
    }
  }
}
.marketCard {
  background-color: #444;
  border-radius: 1em;
}
.btn {
  padding: 0.75em 1.25em;
  border-radius: 0.25em;
}
</style>
