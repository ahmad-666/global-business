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
    height: 25em;
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
        margin-left: 0.5em;
      }
    }
  }
  .content {
    background-color: darken(white, 7%);
    padding: 2em;
    .label {
      font-size: $fontM;
      color: $primaryColor;
    }
    .title {
      margin-top: 0.2em;
      font-size: $fontL;
      color: $black_light;
    }
    .desc {
      margin-top: 0.5em;
      font-size: $fontM;
      color: $grey;
    }
    .readMore {
      display: flex;
      align-items: center;
      margin-top: 1em;
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
@media screen and (max-width: 650px) {
  .blogCard {
    display: flex;
    align-items: stretch;

    .img {
      flex-shrink: 0;
      width: 30em;
      height: auto;
    }
    .content {
      width: 100%;
    }
  }
}
@media screen and (max-width: 450px) {
  .blogCard {
    display: block;

    .img {
      width: 100%;
      height: 34em;
    }
    .content {
      width: 100%;
    }
  }
}
</style>
