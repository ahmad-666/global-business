<template>
  <footer>
    <div class="infosContainer">
      <footer-infos></footer-infos>
    </div>
    <div class="postsContainer">
      <footer-posts></footer-posts>
    </div>
    <div class="linksContainer">
      <footer-links></footer-links>
    </div>
    <div class="newsletterContainer">
      <footer-news-letters></footer-news-letters>
    </div>
  </footer>
</template>
<script>
import FooterInfos from '~/components/footer/FooterInfos.vue'
import FooterPosts from '~/components/footer/FooterPosts.vue'
import FooterLinks from '~/components/footer/FooterLinks.vue'
import FooterNewsLetters from '~/components/footer/FooterNewsLetter.vue'
export default {
  components: {
    FooterInfos,
    FooterPosts,
    FooterLinks,
    FooterNewsLetters,
  },
}
</script>
<style lang="scss" scoped>
@import '~/assets/styles/colors.scss';
@import '~/assets/styles/variables.scss';
footer {
  width: 100%;
  background-color: $footer_bg;
  padding: 8em $footer_padding;
  display: flex;
  justify-content: center;
  align-items: center;
  .infosContainer,
  .postsContainer,
  .linksContainer,
  .newsletterContainer {
    &:not(:first-child) {
      margin-left: 3em;
    }
  }
  .infosContainer {
    width: 25em;
    flex-shrink: 0;
  }
  .postsContainer {
    flex-shrink: 0;
    width: 35em;
  }
  .linksContainer {
    flex-shrink: 0;
    width: 15em;
  }
  .newsletterContainer {
    flex-shrink: 0;
    width: 30em;
  }
}
</style>
