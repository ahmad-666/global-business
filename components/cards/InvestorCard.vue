<template>
  <div class="investorCard">
    <div class="img">
      <img :src="imgSrc" :alt="imgSrc" />
      <div class="filter"></div>
      <div class="info">
        <p v-if="tel" class="tel">{{ tel }}</p>
        <p v-if="email" class="email">{{ email }}</p>
        <div v-if="socials.length" class="socials">
          <nuxt-link
            v-for="social in socials"
            :key="social.icon"
            :to="social.link"
            class="social"
          >
            <font-awesome-icon
              class="icon"
              :icon="['fab', social.icon]"
            ></font-awesome-icon>
          </nuxt-link>
        </div>
      </div>
    </div>
    <div class="content">
      <p class="name">{{ name }}</p>
      <p class="rank">{{ rank }}</p>
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
    name: {
      type: String,
      required: true,
    },
    rank: {
      type: String,
      required: true,
    },
    tel: {
      type: [String, Number],
      default: null,
    },
    email: {
      type: String,
      default: '',
    },
    socials: {
      type: Array,
      default() {
        return []
      },
    },
  },
}
</script>
<style lang="scss" scoped>
@import '~/assets/styles/colors.scss';
@import '~/assets/styles/variables.scss';
.investorCard {
  width: 100%;
  overflow: hidden;
  .img {
    width: 100%;
    height: 35em;
    position: relative;
    &:hover {
      .filter {
        opacity: 1;
      }
      .info {
        opacity: 1;
        transform: translateY(0);
      }
    }
    img {
      width: 100%;
      height: 100%;
    }
    .filter {
      width: 100%;
      height: 100%;
      position: absolute;
      left: 0;
      top: 0;
      z-index: 1;
      background-color: rgba(0, 0, 0, 0.65);
      opacity: 0;
      transition: all 0.3s linear;
    }

    .info {
      opacity: 0;
      transform: translateY(2em);
      transition: all 0.3s linear;
      width: 100%;
      position: absolute;
      bottom: 2em;
      z-index: 2;
      display: flex;
      flex-direction: column;
      align-items: center;
      .tel,
      .email {
        font-size: $fontM;
        color: white;
      }
      .email {
        margin-top: 1em;
      }
      .socials {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        justify-content: center;
        align-content: center;
        margin-top: 2em;
        .social {
          .icon {
            font-size: $fontL;
            color: white;
            margin: 0 0.3em;
          }
        }
      }
    }
  }

  .content {
    .name,
    .rank {
      text-align: center;
    }
    .name {
      font-size: $fontL;
      font-weight: 700;
      color: $black;
      margin-top: 0.5em;
    }
    .rank {
      font-size: $fontM;
      color: $grey;
      margin-top: 0.5em;
    }
  }
}
</style>
