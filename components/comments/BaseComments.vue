<template>
  <div class="commentsContainer">
    <img src="imgs/speack.png" alt="imgs/speak.png" />
    <div class="comments">
      <base-slider
        :config="sliderConfig"
        :slides-num="comments.length"
        :show-bullets="false"
        :show-arrows="false"
        @createGlideIns="setGlideInstance"
      >
        <li v-for="comment in comments" :key="comment.id" class="glide__slide">
          <p class="txt">{{ comment.content }}</p>
          <p class="username">{{ comment.username }}</p>
          <p class="rank">{{ comment.userRank }}</p>
        </li>
      </base-slider>
    </div>
    <div class="users">
      <div
        v-for="(user, i) in users"
        :key="user.username"
        class="user"
        :class="{ active: activeUserIndex === i }"
        @click="setActiveUser(i)"
      >
        <img :src="user.imgSrc" :alt="user.imgSrc" />
      </div>
    </div>
  </div>
</template>
<script>
import BaseSlider from '~/components/ui/BaseSlider.vue'
import { commentsSliderConfig } from '~/configs/slider'
export default {
  components: {
    BaseSlider,
  },
  props: {
    comments: {
      type: Array,
      default() {
        return []
      },
    },
  },
  data() {
    return {
      activeUserIndex: 0,
      sliderInstance: null,
      sliderConfig: commentsSliderConfig,
    }
  },
  computed: {
    users() {
      return this.comments.map(comment => {
        return {
          username: comment.username,
          imgSrc: comment.userImgSrc,
        }
      })
    },
  },
  methods: {
    setActiveUser(index) {
      this.activeUserIndex = index
      this.sliderInstance.go(`=${index}`)
    },
    setGlideInstance(instance) {
      this.sliderInstance = instance
      this.sliderInstance.on('run.after', () => {
        this.activeUserIndex = this.sliderInstance.index
      })
    },
  },
}
</script>
<style lang="scss" scoped>
@import '~/assets/styles/colors.scss';
@import '~/assets/styles/variables.scss';
.commentsContainer {
  width: 100%;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  > img {
    width: 8em;
    height: 7em;
  }
  .comments {
    width: 100%;
    margin-top: 2em;
    .glide__slide {
      display: flex;
      flex-direction: column;
      align-items: center;
      .txt {
        max-width: 75%;
        color: $grey_light;
        font-size: $fontM + 0.2em;
      }
      .username {
        margin-top: 1em;
        font-weight: 700;
        color: $black;
        font-size: $fontL + 0.3em;
      }
      .rank {
        margin-top: 0.5em;
        color: $grey;
        font-size: $fontM;
      }
    }
  }
  .users {
    width: 100%;
    margin-top: 4em;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    align-content: center;
    .user {
      cursor: pointer;
      width: 8em;
      height: 8em;
      margin: 1em;
      border-radius: 50%;
      overflow: hidden;
      img {
        width: 100%;
        height: 100%;
        border-radius: inherit;
      }
    }
    .user.active {
      border: 5px solid $primaryColor;
    }
  }
}
</style>
