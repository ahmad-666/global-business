<template>
  <div ref="slide3Elm" class="slide">
    <div class="night-sky"></div>
    <div class="content">
      <div ref="imgsElm" class="imgs">
        <img
          src="imgs/revSlider/57b4d-13.png"
          alt="imgs/revSlider/57b4d-13.png"
          class="particles"
        />
        <img
          src="imgs/revSlider/e1b9a-10.png"
          alt="imgs/revSlider/57b4d-13.png"
          class="logo"
        />
      </div>
      <div class="txts">
        <h6 class="title-white">YOUR BEST MOVES NOW!</h6>
        <h6 class="title-gold">EASY AND SECURE.</h6>
        <p class="desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, at ea
          rem accusamus, vitae quam ut sed vero error consequatur commodi
          cupiditate optio expedita doloremque odio sequi aliquid laboriosam
          itaque.
        </p>
        <button>View More</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      particleMultiplier: 0.04,
    }
  },
  mounted() {
    this.$refs.slide3Elm.addEventListener('mousemove', this.mouseMoveHandler)
  },
  beforeDestroy() {
    this.$refs.slide3Elm.removeEventListener('mousemove', this.mouseMoveHandler)
  },
  methods: {
    mouseMoveHandler(e) {
      const { x, y } = e
      this.$refs.imgsElm.style.left = `${x * this.particleMultiplier}px`
      this.$refs.imgsElm.style.top = `${y * this.particleMultiplier}px`
    },
  },
}
</script>
<style lang="scss" scoped>
@import '~/assets/styles/variables.scss';
@import '~/assets/styles/colors.scss';
.slide {
  width: 100%;
  height: 100%;
  position: relative;

  .night-sky {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 1;
    background: url('/imgs/revSlider/star.jpg') center center repeat-y;
    background-size: cover;
    animation: starAnime 60s linear infinite;
    @keyframes starAnime {
      from {
        background-position: 50% 0%;
      }
      to {
        background-origin: 50% 100%;
      }
    }
  }
  .content {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    z-index: 2;
    .imgs {
      flex-shrink: 0;
      width: 55em;
      height: 55em;
      position: relative;
      opacity: 0;
      animation: imgsAnime 1s ease-in-out forwards;
      animation-delay: 1s;
      @keyframes imgsAnime {
        from {
          opacity: 0;
          transform: translateX(6em);
        }
        to {
          opacity: 1;
          transform: translateX(0);
        }
      }
      .particles {
        width: 50em;
        height: 50em;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        animation: rotateAnime 40s linear infinite;
        @keyframes rotateAnime {
          from {
            transform: translate(-50%, -50%) rotate(0deg);
          }
          to {
            transform: translate(-50%, -50%) rotate(360deg);
          }
        }
      }
      .logo {
        widows: 20em;
        height: 20em;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
      }
    }
    .txts {
      width: 100%;
      margin-left: 4em;
      opacity: 0;
      animation: txtsAnime 1s ease-in-out forwards;
      animation-delay: 2s;
      @keyframes txtsAnime {
        from {
          opacity: 0;
          transform: translateX(-6em);
        }
        to {
          opacity: 1;
          transform: translateX(0);
        }
      }
      .title-white {
        font-size: 5em;
        color: white;
      }
      .title-gold {
        font-size: 5em;
        font-weight: 700;
        color: goldenrod;
        margin-top: 0.2em;
      }
      .desc {
        color: white;
        font-size: 1.8em;
        line-height: 1.8em;
        margin-top: 1em;
      }
      button {
        margin-top: 2em;
        padding: 0.8em 2em;
        background-color: goldenrod;
        color: white;
        border-radius: 0.5em;
        font-size: 1.6em;
      }
    }
  }
}
@media screen and (max-width: 750px) {
  .slide {
    .night-sky {
      background-size: 100% 90%;
      animation: starAnime 10s linear infinite;
    }
    .content {
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      position: relative;
      top: 10%;

      .txts {
        margin-left: 0em;
        margin-top: 2em;
        display: flex;
        flex-direction: column;
        align-items: center;
        p {
          text-align: center;
        }
      }
    }
  }
}
@media screen and (max-width: 500px) {
  .slide {
    .content {
      .imgs {
        width: 90%;
        .particles {
          width: 40em;
          height: 40em;
        }
        .logo {
          width: 20em;
          height: 20em;
        }
      }
      .txts {
        margin-top: 0;
        .title-white {
          font-size: 4em;
        }
        .title-gold {
          font-size: 4em;
        }
      }
    }
  }
}
</style>
