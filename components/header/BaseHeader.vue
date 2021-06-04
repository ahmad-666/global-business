<template>
  <header>
    <img src="imgs/bg/bg-2.jpg" alt="imgs/header-bg.jpg" class="bg" />
    <div class="filter"></div>
    <div class="content">
      <div class="topHeader">
        <top-header></top-header>
      </div>
      <div class="navBar">
        <nav-bar></nav-bar>
      </div>
      <div class="txts">
        <h3>{{ title }}</h3>
        <div class="line"></div>
        <p>
          {{ subTitle }}
        </p>
      </div>
    </div>
    <div class="breadcrumb">
      <base-bread-crumb :layers="breadCrumbLayers"></base-bread-crumb>
    </div>
  </header>
</template>
<script>
import NavBar from '~/components/header/NavBar.vue'
import TopHeader from '~/components/header/TopHeader.vue'
export default {
  components: {
    NavBar,
    TopHeader,
  },
  props: {
    title: {
      required: true,
      type: String,
    },
    subTitle: {
      required: false,
      default: '',
      type: String,
    },
    breadCrumbLayers: {
      type: Array,
      required: true,
    },
  },
}
</script>
<style lang="scss" scoped>
@import '~/assets/styles/variables.scss';
@import '~/assets/styles/colors.scss';
header {
  width: 100%;
  position: relative;
  .bg {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 1;
    object-fit: cover;
  }
  .filter {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 2;
    background-color: rgba(0, 0, 0, 0.75);
  }
  .content {
    width: 100%;
    position: relative;
    z-index: 3;
    .topHeader {
      width: 100%;
    }
    .navBar {
      width: 100%;
      margin-top: 2em;
    }
    .txts {
      width: 100%;
      margin-top: 2em;
      display: flex;
      flex-direction: column;
      align-items: center;
      h3 {
        color: $header_color;
        font-size: $fontXL * 1.25;
        font-weight: 700;
      }
      .line {
        width: 10em;
        height: 0.2em;
        background-color: $primaryColor;
        margin-top: 1em;
      }
      p {
        max-width: 50%;
        margin-top: 2em;
        font-size: $fontM + 0.1em;
        color: $header_color;
        text-align: center;
      }
    }
  }
  .breadcrumb {
    width: 100%;
    margin-top: 12em;
    position: relative;
    z-index: 2;
  }
}
@media screen and (max-width: 850px) {
  header {
    .content {
      .txts {
        p {
          max-width: 90%;
        }
      }
    }
  }
}
</style>
