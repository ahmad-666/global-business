<template>
  <div ref="slide2Elm" class="slide">
    <div class="night-sky"></div>
    <img
      src="imgs/revSlider/bebf9-11t.png"
      alt="imgs/revSlider/bebf9-11t.png"
      class="globe"
    />
    <div class="content">
      <h6 class="title">WHAT ARE FUTURE</h6>
      <p class="subTitle">Buy, Sell, Exchange dollar with Global Business</p>
      <div class="year">
        <p ref="firstLetter">2</p>
        <img
          ref="secondLetter"
          src="imgs/revSlider/e1b9a-10.png"
          alt="imgs/revSlider/e1b9a-10.png"
          class="logo"
        />
        <p ref="thirdLetter">2</p>
        <p ref="forthLetter">1</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      firstLetterMultiplier: 0.01,
      secondLetterMultiplier: 0.03,
      thirdLetterMultiplier: 0.02,
      forthLetterMultiplier: 0.025,
    }
  },
  mounted() {
    this.$refs.slide2Elm.addEventListener('mousemove', this.mouseMoveHandler)
  },
  beforeDestroy() {
    this.$refs.slide2Elm.removeEventListener('mousemove', this.mouseMoveHandler)
  },
  methods: {
    mouseMoveHandler(e) {
      const { x, y } = e
      this.$refs.firstLetter.style.transform = `translate(${
        x * this.firstLetterMultiplier
      }px,${y * this.firstLetterMultiplier}px)`
      this.$refs.secondLetter.style.transform = `translate(${
        x * this.secondLetterMultiplier
      }px,${y * this.secondLetterMultiplier}px)`
      this.$refs.thirdLetter.style.transform = `translate(${
        x * this.thirdLetterMultiplier
      }px,${y * this.thirdLetterMultiplier}px)`
      this.$refs.forthLetter.style.transform = `translate(${
        x * this.forthLetterMultiplier
      }px,${y * this.forthLetterMultiplier}px)`
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
    background: url('/imgs/revSlider/star.jpg') center center repeat-y;
    background-size: cover;
    animation: starAnime 60s linear infinite;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 1;
    @keyframes starAnime {
      from {
        background-position: 50% 0%;
      }
      to {
        background-position: 50% 100%;
      }
    }
  }
  .globe {
    width: 95%;
    height: 95%;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 2;
  }
  .content {
    width: 100%;
    position: relative;
    z-index: 3;
    top: 65%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    .title {
      font-weight: 700;
      color: white;
      font-size: 8em;
      opacity: 0;
      animation: titleAnime 0.5s ease-in-out forwards;
      animation-delay: 1s;
      @keyframes titleAnime {
        from {
          transform: translateY(-1.5em);
          opacity: 0;
        }
        to {
          transform: translateY(0);
          opacity: 1;
        }
      }
    }
    .subTitle {
      margin-top: 0.5em;
      font-size: 3em;
      color: white;
      font-weight: lighter;
      opacity: 0;
      animation: subtitleAnime 0.5s ease-in-out forwards;
      animation-delay: 1.5s;
      @keyframes subtitleAnime {
        from {
          transform: translateY(1.5em);
          opacity: 0;
        }
        to {
          transform: translateY(0);
          opacity: 1;
        }
      }
    }
    .year {
      width: 50%;
      margin-top: 1em;
      display: flex;
      justify-content: space-around;
      align-items: center;

      p {
        font-size: 25em;
        font-weight: 700;
        color: goldenrod;
        position: relative;
        opacity: 0;
        animation: yearAnime 0.5s ease-in-out forwards;
        @keyframes yearAnime {
          from {
            top: -1em;
            opacity: 0;
          }
          to {
            top: 0em;
            opacity: 1;
          }
        }
        &:nth-child(1) {
          animation-delay: 2s;
        }
        &:nth-child(3) {
          animation-delay: 2.5s;
        }
        &:nth-child(4) {
          animation-delay: 3.5s;
        }
      }
      .logo {
        width: 20em;
        height: 20em;
        opacity: 0;
        animation: logoAnime 0.5s ease-in-out forwards;
        animation-delay: 3s;
        @keyframes logoAnime {
          from {
            top: -1em;
            opacity: 0;
          }
          to {
            top: 0;
            opacity: 1;
          }
        }
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
    .globe {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    .content {
      top: 50%;
      left: 50%;
      .title {
        font-size: 6em;
      }
      .subTitle {
        font-size: 2em;
      }
      .year {
        width: 100%;

        p {
          font-size: 18em;
        }
        .logo {
          width: 16em;
          height: 16em;
        }
      }
    }
  }
}
@media screen and (max-width: 500px) {
  .slide {
    .content {
      .title {
        font-size: 4em;
      }

      .year {
        p {
          font-size: 15em;
        }
        .logo {
          width: 12em;
          height: 12em;
        }
      }
    }
  }
}
</style>
