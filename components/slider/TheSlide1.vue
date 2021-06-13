<template>
  <div ref="slide1Elm" class="slide">
    <div class="night-sky"></div>
    <img
      src="imgs/revSlider/b78ec-04t.png"
      alt="imgs/revSlider/b78ec-04t.png"
      class="bg"
    />

    <div class="content">
      <div class="txts">
        <div class="top-title">
          <p class="primary">7</p>
          <p>DAYS OF WEEK</p>
          <p class="primary">24</p>
          <p>HOURS OF DAY WITH</p>
          >
        </div>
        <p class="title">GLOBAL BUSINESS</p>
        <p class="subTitle">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui officia
          mollitia nemo minus ipsa ducimus ex assumenda unde repellendus
          exercitationem! Excepturi, laudantium reprehenderit ea labore nesciunt
          nisi quibusdam debitis autem!
        </p>
        <button>View More</button>
      </div>
      <img
        ref="missleElm"
        src="imgs/revSlider/04c8d-05.png"
        alt="imgs/revSlider/04c8d-05.png"
        class="right-img"
      />
    </div>

    <img
      ref="topSparkleElm"
      src="imgs/revSlider/0dd17-06.png"
      alt="imgs/revSlider/0dd17-06.png"
      class="sparkle top"
    />
    <img
      ref="leftSparkleElm"
      src="imgs/revSlider/0dd17-06.png"
      alt="imgs/revSlider/0dd17-06.png"
      class="sparkle left"
    />
    <img
      ref="rightSprakleElm"
      src="imgs/revSlider/0dd17-06.png"
      alt="imgs/revSlider/0dd17-06.png"
      class="sparkle right"
    />
  </div>
</template>
<script>
export default {
  data() {
    return {
      missleMultiplier: -0.035,
      topSparkleMultiplier: -0.06,
      leftSparkleMultiplier: 0.09,
      rightSparkleMultiplier: -0.075,
    }
  },
  mounted() {
    this.$refs.slide1Elm.addEventListener('mousemove', this.moveMoveHandler)
  },
  beforeDestroy() {
    this.$refs.slide1Elm.removeEventListener('mousemove', this.moveMoveHandler)
  },
  methods: {
    moveMoveHandler(e) {
      const { x, y } = e
      this.$refs.missleElm.style.transform = `translate(${
        x * this.missleMultiplier
      }px,${y * this.missleMultiplier}px)`
      this.$refs.topSparkleElm.style.transform = `translate(${
        x * this.topSparkleMultiplier
      }px,${y * this.topSparkleMultiplier}px)`
      this.$refs.leftSparkleElm.style.transform = `translate(${
        x * this.leftSparkleMultiplier
      }px,${y * this.leftSparkleMultiplier}px)`
      this.$refs.rightSprakleElm.style.transform = `translate(${
        x * this.topSparkleMultiplier
      }px,${y * this.topSparkleMultiplier}px)`
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
  overflow: hidden;
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
    animation: starsAnime 60s linear infinite;
    @keyframes starsAnime {
      from {
        background-position: 50% 0%;
      }
      to {
        background-position: 50% 100%;
      }
    }
  }
  .bg {
    width: 100%;
    height: auto;
    position: absolute;
    z-index: 2;
    left: 0;
    bottom: 0;
    object-fit: cover;
  }

  .content {
    width: 75%;
    height: 75%;
    position: relative;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 4;
    display: flex;
    justify-content: center;
    align-items: center;
    .txts {
      width: 100%;
      .top-title {
        display: flex;
        align-items: center;
        p {
          font-size: 4em;
          //   font-weight: 700;
          margin-left: 0.25em;
        }
        .primary {
          color: goldenrod;
        }
        p {
          &:not(.primary) {
            color: white;
          }
        }
      }
      .title {
        font-size: 7em;
        font-weight: 700;
        color: goldenrod;
        margin-top: 0em;
      }
      .subTitle {
        margin-top: 1em;
        color: white;
        line-height: 1.5em;
        font-size: 1.7em;
      }
      button {
        color: white;
        background-color: goldenrod;
        border-radius: 0.5em;
        padding: 0.8em 2em;
        font-size: 1.8em;
        margin-top: 1em;
      }
    }
    .right-img {
      flex-shrink: 0;
      width: auto;
      height: 35em;
      margin-left: 2em;
      opacity: 0;
      animation: missleAnime 1s ease-in-out forwards;
      animation-delay: 1s;
      position: relative;
      @keyframes missleAnime {
        from {
          opacity: 0;
          left: 15em;
          top: 15em;
        }
        to {
          opacity: 1;
          left: 0em;
          top: 0em;
        }
      }
    }
  }
  .sparkle {
    width: 10em;
    height: auto;
    position: absolute;
    z-index: 3;
    opacity: 0;
    animation: sparkleAnime 1s ease-in-out forwards;

    @keyframes sparkleAnime {
      from {
        opacity: 0;
        transform: translate(10em, -10em);
      }
      to {
        opacity: 1;
        transform: translate(0em, 0em) l;
      }
    }
  }
  .sparkle.top {
    top: 15%;
    left: 50%;
    animation-delay: 1.5s;
  }
  .sparkle.left {
    left: 5%;
    top: 60%;
    animation-delay: 2s;
  }
  .sparkle.right {
    right: 10%;
    top: 70%;
    animation-delay: 2.5s;
  }
}
@media screen and (max-width: 750px) {
  .slide {
    .night-sky {
      background-size: 100% 90%;
      animation: starsAnime 10s linear infinite;
      @keyframes starsAnime {
        from {
          background-position: 50% 0%;
        }
        to {
          background-position: 50% 100%;
        }
      }
    }
    .content {
      width: 95%;
      flex-direction: column;
      top: 60%;
      .txts {
        display: flex;
        flex-direction: column;
        align-items: center;
        p {
          text-align: center;
        }
        .top-title {
          p {
            font-size: 3em;
          }
        }
        .title {
          font-size: 5em;
        }
        .subTitle {
          font-size: 1.7em;
        }
      }
    }
    .sparkle.top {
      top: 10%;
    }
    .sparkle.left {
      left: 5%;
      top: 70%;
    }
    .sparkle.right {
      right: 5%;
      top: 80%;
    }
  }
}
@media screen and (max-width: 420px) {
  .slide {
    .content {
      .txts {
        .top-title {
          p {
            font-size: 2.2em;
          }
        }
      }
    }
  }
}
</style>
