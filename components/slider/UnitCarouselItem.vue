<template>
  <div class="slide">
    <div class="left">
      <img :src="imgSrc" :alt="imgSrc" class="img" />
      <div class="txts">
        <p class="name">{{ name }}</p>
        <p class="shortName">{{ shortName }}</p>
      </div>
    </div>
    <div class="right">
      <p class="price">Fr{{ price }}</p>
      <p class="percent" :class="{ red: percent < 0 }">
        <font-awesome-icon
          class="icon"
          :icon="percent < 0 ? 'chevron-down' : 'chevron-up'"
        ></font-awesome-icon>
        {{ percent }}%
      </p>
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
    shortName: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    percent: {
      type: Number,
      required: true,
    },
  },
}
</script>
<style lang="scss" scoped>
@import '~/assets/styles/variables.scss';
@import '~/assets/styles/colors.scss';
.slide {
  width: 100%;
  padding: 1em;
  display: flex;
  justify-content: space-between;
  .left {
    flex-grow: 1;
    display: flex;
    .img {
      width: 2em;
      height: 2em;
    }
    .txts {
      margin-left: 0.5em;
      .name {
        font-size: $fontS + 0.2em;
        color: white;
        font-weight: 700;
      }
      .shortName {
        font-size: $fontS;
        color: darken(white, 30%);
      }
    }
  }
  .right {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    .price {
      font-size: $fontS + 0.2em;
      font-weight: 700;
      color: white;
    }
    .percent {
      font-size: $fontM;
      color: $success_color;
      display: flex;
      align-items: center;
      .icon {
        color: inherit;
        font-size: $fontS;
        margin-right: 0.2em;
      }
    }
    .percent.red {
      color: $error_color;
    }
  }
}
</style>
