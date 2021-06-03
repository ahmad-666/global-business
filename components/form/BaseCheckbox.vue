<template>
  <div class="checkboxes" :class="{ ...cssSize, ...cssType }">
    <div v-for="checkbox in checkboxes" :key="checkbox.value" class="checkbox">
      <label>
        <input
          :checked="modelValue.includes(checkbox.value)"
          type="checkbox"
          :name="name"
          :value="checkbox.value"
          @change="checkboxHandler(checkbox.value)"
        />
        <p>{{ checkbox.displayValue }}</p>
      </label>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    checkboxes: {
      type: Array,
      required: true,
    },
    modelValue: {
      type: Array,
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
    name: {
      type: String,
      required: true,
    },
  },
  emits: ['update:modelValue'],
  computed: {
    cssSize() {
      const cssClass = {}
      switch (this.size) {
        case 'xl':
          cssClass.xl = true
          break
        case 'l':
          cssClass.l = true
          break
        case 'm':
          cssClass.m = true
          break
        case 's':
          cssClass.s = true
          break
        case 'xs':
          cssClass.xs = true
          break
      }
      return cssClass
    },
    cssType() {
      const cssClass = {}
      switch (this.type) {
        case 'simple-col':
          cssClass.simpleCol = true
          break
      }
      return cssClass
    },
  },
  methods: {
    checkboxHandler(val) {
      const finalModelValue = [...this.modelValue]
      if (!finalModelValue.includes(val))
        this.$emit('update:modelValue', finalModelValue.concat(val))
      else
        this.$emit(
          'update:modelValue',
          finalModelValue.filter(mVal => mVal !== val)
        )
    },
  },
}
</script>
<style lang="scss" scoped>
@import '~/assets/styles/colors.scss';
@import '~/assets/styles/variables.scss';
.xl {
  font-size: $fontXL;
}
.l {
  font-size: $fontL;
}
.m {
  font-size: $fontM;
}
.s {
  font-size: $fontS;
}
.xs {
  font-size: $fontXS;
}
.simpleCol {
  display: flex;
  flex-direction: column;
  .checkbox {
    &:not(:first-child) {
      margin-top: 1.5em;
    }
  }
}
.checkboxes {
  width: 100%;
  .checkbox {
    width: 100%;
    label {
      width: 100%;
      display: flex;
      align-items: center;
      cursor: pointer;
      //   input[type='checkbox'] {
      //   }
      p {
        font-size: $fontS;
        color: $grey;
        margin-left: 0.5em;
      }
    }
  }
}
</style>
