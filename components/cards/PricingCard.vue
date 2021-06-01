<template>
  <div class="cardContainer">
    <div class="content">
      <div class="circle"></div>
      <h6 class="planType">{{ planType }}</h6>
      <h6 class="price">{{ price }}$</h6>
      <ul class="features">
        <li v-for="feature in features" :key="feature.id" class="feature">
          <font-awesome-icon
            :icon="!feature.available ? 'times' : 'check'"
            class="icon"
          ></font-awesome-icon>
          <p>{{ feature.name }}</p>
        </li>
      </ul>
      <nuxt-link :to="link" class="btn">
        <base-button size="m" btn-type="primary-hover" type="button">
          <p>Read More</p>
        </base-button>
      </nuxt-link>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    planType: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    features: {
      type: Array,
      default() {
        return []
      },
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
.cardContainer {
  width: 100%;
  height: auto;
  position: relative;
  border: 2px solid darken(white, 10%);
  &:hover {
    &::before {
      opacity: 1;
      transform: perspective(100em) rotateY(0deg);
    }
    .planType {
      color: white;
    }
    .price {
      color: white;
    }
    .features {
      .feature {
        .icon {
          color: white;
        }
        p {
          color: white;
        }
      }
    }
  }
  &::before {
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 1;
    background-color: lighten($primaryColor, 15%);
    transition: all 0.3s ease-in-out;
    opacity: 0;
    transform: perspective(100em) rotateY(90deg);
  }
  .content {
    position: relative;
    z-index: 2;
    padding: 6em 1em 3em 1em;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .circle {
    width: 8em;
    height: 8em;
    border-radius: 50%;
    position: absolute;
    left: 50%;
    top: 0;
    transform: translate(-50%, -50%);
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
    border: 2px solid darken(white, 10%);
  }
  .planType {
    color: $black;
    font-size: $fontL - 0.2em;
    font-weight: 700;
    text-transform: uppercase;
  }
  .price {
    color: $black_light;
    font-size: $fontXL + 0.5em;
    font-weight: 700;
    margin-top: 0.5em;
  }
  .features {
    margin-top: 2em;
    display: flex;
    flex-direction: column;
    align-items: center;
    .feature {
      margin-top: 2em;
      display: flex;
      align-items: center;
      .icon {
        font-size: $fontS + 0.2em;
        color: #444;
      }
      p {
        color: $grey;
        font-size: $fontM + 0.1em;
        margin-left: 1em;
      }
    }
  }
  .btn {
    margin-top: 2em;
    display: inline-block;
    p {
      color: white;
      font-size: $fontS;
    }
  }
}
</style>
