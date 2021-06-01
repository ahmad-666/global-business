<template>
  <div
    :style="{ height }"
    class="textAreaContainer"
    :class="{ ...typeClass, ...sizeClass }"
  >
    <textarea
      :name="name"
      :placeholder="placeholder"
      :value="modelValue"
      @input="inputHandler"
    >
    </textarea>
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
    height: {
      type: String,
      default: '20em',
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
  textarea {
    color: lighten(black, 30%);
    background-color: inherit;
    &::placeholder {
      color: lighten(black, 50%);
    }
  }
}
.textAreaContainer {
  width: 100%;
  textarea {
    width: 100%;
    height: 100%;
    padding: 0.75em;
    font-size: 1em;
    resize: none;
  }
}
</style>
