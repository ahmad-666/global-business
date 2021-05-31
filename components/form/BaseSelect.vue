<template>
  <div class="select" :class="{ ...cssTypeClass, ...cssSizeClass }">
    <select :value="modelValue" @change="changeHandler">
      <option v-for="opt in options" :key="opt.value" :value="opt.value">
        {{ opt.displayValue }}
      </option>
    </select>
  </div>
</template>
<script>
export default {
  props: {
    options: {
      type: Array,
      required: true,
    },
    modelValue: {
      type: String,
      required: true,
    },
    size: {
      type: String,
      default: 'm',
    },
    type: {
      type: String,
      required: true,
    },
  },
  emits: ['update:modelValue'],
  computed: {
    cssTypeClass() {
      const cssClass = {}
      switch (this.type) {
        case 'white-bg': {
          cssClass.whiteBg = true
          break
        }
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
    changeHandler(e) {
      this.$emit('update:modelValue', e.target.value)
    },
  },
}
</script>
<style lang="scss" scoped>
@import '~/assets/styles/colors.scss';
@import '~/assets/styles/variables.scss';
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
.whiteBg {
  select,
  option {
    background-color: white;
    color: lighten(black, 30%);
    font-weight: lighter;
  }
  select {
    border: 1px solid lighten(grey, 20%);
  }
}
.select {
  width: 100%;
  select,
  option {
    width: 100%;
    padding: 0.5em;
  }
  select {
    font-size: $fontS + 0.2em;
  }
  option {
    font-size: $fontS;
    margin: 1em;
  }
}
</style>
