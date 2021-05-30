<template>
  <div class="container">
    <div class="title">
      <h6>Popular Posts</h6>
      <div class="line"></div>
    </div>
    <div class="posts">
      <div
        v-for="(footerPost, i) in footerPosts"
        :key="footerPost.id"
        class="post"
      >
        <footer-post
          :img-src="footerPost.imgSrc"
          :title="footerPost.title"
          :date="footerPost.date"
          :link="footerPost.link"
        ></footer-post>
        <div v-if="i < footerPosts.length - 1" class="line"></div>
      </div>
    </div>
  </div>
</template>
<script>
import FooterPost from '~/components/footer/FooterPost.vue'
export default {
  components: {
    FooterPost,
  },
  computed: {
    footerPosts() {
      return this.$store.getters.footerPosts
    },
  },
}
</script>
<style lang="scss" scoped>
@import '~/assets/styles/colors.scss';
@import '~/assets/styles/variables.scss';
.container {
  width: 100%;
  .title {
    h6 {
      font-weight: 700;
      color: white;
      font-size: $fontL + 0.3em;
      text-transform: capitalize;
    }
    .line {
      margin-top: 1em;
      width: 6em;
      height: 0.35em;
      background-color: $primaryColor;
    }
  }
  .posts {
    width: 100%;
    .post {
      width: 100%;
      margin-top: 2em;
    }
    .line {
      width: 100%;
      height: 0.1em;
      margin: 2em auto;
      background-color: lighten(black, 30%);
    }
  }
}
</style>
