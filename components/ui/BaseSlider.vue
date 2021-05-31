<template>
  <div ref="slider" class="glide">
    <div class="glide__track" data-glide-el="track">
      <ul class="glide__slides">
        <slot></slot>
      </ul>
    </div>
    <div v-if="showArrows" class="glide__arrows" data-glide-el="controls">
      <button class="glide__arrow glide__arrow--left" data-glide-dir="<">
        &lt;
      </button>
      <button class="glide__arrow glide__arrow--right" data-glide-dir=">">
        &gt;
      </button>
    </div>
    <div
      v-if="showBullets"
      class="glide__bullets"
      data-glide-el="controls[nav]"
    >
      <button
        v-for="num in slidesNum"
        :key="num"
        class="glide__bullet"
        :data-glide-dir="`=${num}`"
      ></button>
    </div>
  </div>
</template>
<script>
import Glide from '@glidejs/glide'
export default {
  props: {
    config: {
      type: Object,
      required: true,
    },
    slidesNum: {
      type: Number,
      default: 0,
    },
    showBullets: {
      type: Boolean,
      default: false,
    },
    showArrows: {
      type: Boolean,
      default: false,
    },
  },
  emits: ['createGlideIns'],
  mounted() {
    const glide = new Glide(this.$refs.slider, this.config)
    glide.mount()
    this.$emit('createGlideIns', glide)
  },
}
</script>
<style lang="scss" scoped>
@import '@glidejs/glide/dist/css/glide.core.min.css';
@import '@glidejs/glide/dist/css/glide.theme.min.css';
@import '~/assets/styles/colors.scss';
.glide {
  width: 100%;
  .glide__track {
  }
  .glide__arrows {
    .glide__arrow {
      background-color: rgba(255, 255, 255, 0.5);
      padding: 0.7em 1.2em;
      color: lighten(black, 20%);
    }
  }
  .glide__bullets {
    align-items: center;
    .glide__bullet {
      width: 1.2em;
      height: 1.2em;
      background-color: rgba(255, 255, 255, 0.5);
    }
    .glide__bullet--active {
      width: 1.7em;
      height: 1.7em;
      background-color: $primaryColor;
    }
  }
}
</style>
