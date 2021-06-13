<template>
  <div class="inputContainer" :class="{ ...typeClass, ...sizeClass }">
    <input
      :name="name"
      :placeholder="placeholder"
      :type="inputType"
      :value="modelValue"
      @input="inputHandler"
    />
  </div>
</template>
<script>
export default {
  props: {
    size: {
      type: String,
      default: 'm',
    },
    type: {
      type: String,
      required: true,
    },
    inputType: {
      type: String,
      default: 'text',
    },
    placeholder: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    modelValue: {
      type: [String, Number],
      required: true,
    },
  },
  emits: ['update:modelValue'],
  computed: {
    sizeClass() {
      const cssSizeClass = {}
      switch (true) {
        case this.size === 'xs':
          cssSizeClass.xs = true
          break
        case this.size === 's':
          cssSizeClass.s = true
          break
        case this.size === 'm':
          cssSizeClass.m = true
          break
        case this.size === 'l':
          cssSizeClass.l = true
          break
        case this.size === 'xl':
          cssSizeClass.xl = true
          break
      }
      return cssSizeClass
    },
    typeClass() {
      const typeClass = {}
      switch (this.type) {
        case 'white-bg':
          typeClass.whiteBg = true
          break
        case 'footer-elm':
          typeClass.footerElm = true
          break
      }
      return typeClass
    },
  },
  methods: {
    inputHandler(e) {
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
  background-color: white;
  border: 1px solid lighten(grey, 20%);
  input {
    color: lighten(black, 30%);
    background-color: inherit;
    &::placeholder {
      color: lighten(black, 50%);
    }
  }
}
.footerElm {
  background-color: rgba(15, 66, 105, 0.6);
  border: 1px solid darken(white, 30%);
  input {
    color: white;
    background-color: inherit;
    &::placeholder {
      color: darken(white, 20%);
    }
  }
}
.inputContainer {
  width: 100%;
  border-radius: 0.3em;
  overflow: hidden;
  input {
    width: 100%;
    height: 100%;
    padding: 0.75em;
    font-size: 1em;
  }
}
</style>
