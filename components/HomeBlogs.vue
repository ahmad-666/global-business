<template>
  <div class="homeBlogs">
    <h6 class="title">3 Easy Steps to Get Started</h6>
    <base-line width="12em"></base-line>
    <p class="txt">
      Here is 3 Easy Steps to Busy & Sell Dollar. Lorem Ipsum has been the
      industry's standard dummy text ever since the 1500s, when an unknown
      printer took a galley of type and scrambled it to make a type specimen
      book.
    </p>
    <div class="articles">
      <div v-for="article in articles" :key="article.id" class="article">
        <blog-card
          :img-src="article.imgSrc"
          :date="article.date"
          :label="article.label"
          :title="article.title"
          :desc="article.desc"
          :link="article.link"
        ></blog-card>
      </div>
    </div>
  </div>
</template>
<script>
import BlogCard from '~/components/cards/BlogCard.vue'
export default {
  components: {
    BlogCard,
  },
  data() {
    return {
      articles: [],
    }
  },
  fetch() {
    this.articles = [
      {
        id: 1,
        imgSrc: 'imgs/blog/img1.jpg',
        date: '12 Aug 2017',
        label: 'Dollar',
        title: 'News Post With Image',
        desc: 'Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions.',
        link: '/',
      },
      {
        id: 2,
        imgSrc: 'imgs/blog/img2.jpg',
        date: '12 Aug 2017',
        label: 'Exchange',
        title: 'News Post With Image',
        desc: 'Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions.',
        link: '/',
      },
      {
        id: 3,
        imgSrc: 'imgs/blog/img3.jpg',
        date: '12 Aug 2017',
        label: 'Wallet',
        title: 'News Post With Image',
        desc: 'Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions.',
        link: '/',
      },
    ]
  },
}
</script>
<style lang="scss" scoped>
@import '~/assets/styles/colors.scss';
@import '~/assets/styles/variables.scss';
.homeBlogs {
  width: 100%;
  background-color: white;
  padding: 5em $header_padding;
  display: flex;
  flex-direction: column;
  align-items: center;
  .title {
    font-size: $fontXL + 1em;
    color: $black_light;
    font-weight: lighter;
  }
  .txt {
    margin-top: 2em;
    font-size: $fontM;
    color: $grey;
    text-align: center;
  }
  .articles {
    width: 100%;
    margin-top: 4em;
    display: flex;
    flex-wrap: wrap;
    .article {
      width: calc((100% - (3 * 3em)) / 3);
      margin: 1.5em;
    }
  }
}
@media screen and (max-width: 1000px) {
  .homeBlogs {
    padding: 5em $header_padding / 2;
  }
}
@media screen and (max-width: 650px) {
  .homeBlogs {
    .articles {
      .article {
        width: 100%;
      }
    }
  }
}
@media screen and (max-width: 500px) {
  .homeBlogs {
    padding: 5em $header_padding / 4;
  }
}
</style>
