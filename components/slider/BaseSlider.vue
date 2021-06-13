<template>
  <div class="sliderContainer">
    <div class="slider">
      <div class="slides">
        <transition name="fade" mode="out-in">
          <div v-if="activeIndex === 0" key="1" class="slide">
            <the-slide-1></the-slide-1>
          </div>
          <div v-else-if="activeIndex === 1" key="2" class="slide">
            <the-slide-2></the-slide-2>
          </div>
          <div v-else key="3" class="slide">
            <the-slide-3></the-slide-3>
          </div>
        </transition>
      </div>
    </div>
    <div class="btns">
      <button class="btn" @click="prevSlide">
        <font-awesome-icon icon="chevron-left" class="icon"></font-awesome-icon>
      </button>
      <button class="btn" @click="nextSlide">
        <font-awesome-icon
          icon="chevron-right"
          class="icon"
        ></font-awesome-icon>
      </button>
    </div>
  </div>
</template>
<script>
import TheSlide1 from '~/components/slider/TheSlide1.vue'
import TheSlide2 from '~/components/slider/TheSlide2.vue'
import TheSlide3 from '~/components/slider/TheSlide3.vue'
export default {
  components: {
    TheSlide1,
    TheSlide2,
    TheSlide3,
  },
  data() {
    return {
      activeIndex: 0,
      totalSlides: 3,
      autoTimer: 16000,
      timerId: null,
    }
  },
  mounted() {
    this.initTimer()
  },
  beforeDestroy() {
    clearInterval(this.timerId)
  },
  methods: {
    nextSlide() {
      clearInterval(this.timerId)
      this.activeIndex = (this.activeIndex + 1) % this.totalSlides
      this.initTimer()
    },
    prevSlide() {
      clearInterval(this.timerId)

      this.activeIndex =
        this.activeIndex - 1 >= 0 ? this.activeIndex - 1 : this.totalSlides - 1
      this.initTimer()
    },
    initTimer() {
      this.timerId = setInterval(() => {
        this.nextSlide()
      }, this.autoTimer)
    },
  },
}
</script>
<style lang="scss" scoped>
@import '~/assets/styles/variables.scss';
@import '~/assets/styles/colors.scss';
.sliderContainer {
  width: 100%;
  height: 100%;
  position: relative;
}
.btns {
  width: 95%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  z-index: 5;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  .btn {
    padding: 1.5em;
    border: 1px solid white;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(255, 255, 255, 0.75);
    transition: all 0.3s linear;
    &:hover {
      background-color: rgba(0, 0, 0, 0.75);
      .icon {
        color: white;
      }
    }
    .icon {
      color: rgb(40, 40, 40);
      font-size: 1.2em;
    }
  }
}
.slider {
  width: 100%;
  height: 100%;
  position: relative;
  .slides {
    width: 100%;
    height: 100%;
    position: relative;
    .slide {
      width: 100%;
      height: 100%;
      position: absolute;
      left: 0;
      top: 0;
    }
  }
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s linear;
}
.fade-enter-to,
.fade-leave {
  opacity: 1;
}
</style>
