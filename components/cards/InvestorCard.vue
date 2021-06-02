<template>
  <div class="investorCard">
    <div class="img">
      <img :src="imgSrc" :alt="imgSrc" />
      <transition name="opacity">
        <div v-if="showDetails" class="filter"></div>
      </transition>
      <transition name="opacity-mode">
        <div v-if="showDetails" class="info">
          <p v-if="tel" class="tel">{{ tel }}</p>
          <p v-if="email" class="email">{{ email }}</p>
          <div v-if="socials.length" class="socials">
            <nuxt-link
              v-for="social in socials"
              :key="social.type"
              :to="social.link"
              class="social"
            >
              <font-awesome-icon
                class="icon"
                :icon="['fab', social.type]"
              ></font-awesome-icon>
            </nuxt-link>
          </div>
        </div>
      </transition>
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
    height: 30em;
    position: relative;
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
    }
    .opacity-enter,
    .opacity-leave-to {
      opacity: 0;
    }
    .opacity-enter-active,
    .opacity-leave-active {
      transition: all 0.3s linear;
    }
    .opacity-enter-to,
    .opacity-leave {
      opacity: 1;
    }
    .info {
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
        font-weight: 700;
      }
      .socials {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        justify-content: center;
        align-content: center;
        .social {
          .icon {
            font-size: $fontL;
            color: $grey;
          }
        }
      }
    }
  }
  .opacity-move-enter,
  .opacity-move-leave-to {
    opacity: 0;
    transform: translateY(3em);
  }
  .opacity-move-enter-active,
  .opacity-move-leave-active {
    transition: all 0.3s linear;
  }
  .opacity-move-enter-to,
  .opacity-move-leave {
    opacity: 1;
    transform: translateY(0);
  }
  .content {
    .name {
      font-size: $fontL;
      font-weight: 700;
      color: $black;
    }
    .rank {
      font-size: $fontM;
      color: $grey;
      margin-top: 1em;
    }
  }
}
</style>
