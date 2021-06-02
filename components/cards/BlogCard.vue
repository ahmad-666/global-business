<template>
  <div class="blogCard">
    <div class="img">
      <img :src="imgSrc" :alt="imgSrc" />
      <div class="date">
        <font-awesome-icon class="icon" icon="calendar"></font-awesome-icon>
        <p>{{ date }}</p>
      </div>
    </div>
    <div class="content">
      <p class="label">{{ label }}</p>
      <h1 class="title">{{ title }}</h1>
      <p class="desc">{{ desc }}</p>
      <nuxt-link class="readMore" :to="link">
        <p>Read More</p>
        <font-awesome-icon
          class="icon"
          icon="chevron-right"
        ></font-awesome-icon>
      </nuxt-link>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    imgSrc: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    link: {
      type: String,
      required: true,
    },
  },
}
</script>
<style lang="scss" scoped>
@import '~/assets/styles/colors.scss';
@import '~/assets/styles/variables.scss';
.blogCard {
  width: 100%;

  .img {
    width: 100%;
    height: 20em;
    position: relative;
    img {
      width: 100%;
      height: 100%;
    }
    .date {
      position: absolute;
      left: 0;
      bottom: 0;
      background-color: $primaryColor;
      display: flex;
      align-items: center;
      padding: 0.5em;
      color: white;
      .icon {
        font-size: $fontM;
      }
      p {
        font-size: $fontM;
      }
    }
  }
  .content {
    background-color: darken(white, 7%);
    padding: 3em 2em;
    .label {
      font-size: $fontM;
      color: $primaryColor;
    }
    .title {
      margin-top: 1em;
      font-size: $fontL;
      color: $black_light;
    }
    .desc {
      margin-top: 1em;
      font-size: $fontM;
      color: $grey;
    }
    .readMore {
      display: flex;
      align-items: center;
      margin-top: 2em;
      color: $grey;
      font-size: $fontM;
      p {
      }
      .icon {
        margin-left: 1em;
      }
    }
  }
}
</style>
