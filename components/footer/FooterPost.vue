<template>
  <nuxt-link :to="link" class="post">
    <img :src="imgSrc" :alt="imgSrc" />
    <div class="content">
      <h6>{{ title }}</h6>
      <div class="date">
        <font-awesome-icon icon="calendar" class="icon"></font-awesome-icon>
        <p>{{ date }}</p>
      </div>
    </div>
  </nuxt-link>
</template>
<script>
export default {
  props: {
    imgSrc: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    date: {
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
.post {
  width: 100%;
  display: flex;
  img {
    flex-shrink: 0;
    width: 7em;
    height: 7em;
  }
  .content {
    width: 100%;
    padding: 0.5em;
    margin-left: 1em;
    h6 {
      color: white;
      font-size: $fontM;
      font-weight: lighter;
    }
    .date {
      display: flex;
      align-items: center;
      margin-top: 0.5em;
      .icon {
        color: $primaryColor;
        font-size: $fontM;
      }
      p {
        font-size: $fontS + 0.2em;
        color: $primaryColor;
        margin-left: 0.5em;
      }
    }
  }
}
</style>
