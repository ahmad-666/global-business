<template>
  <div class="contactInfoContainer">
    <div class="title">
      <font-awesome-icon class="icon" :icon="icon"></font-awesome-icon>
      <p>{{ label }}</p>
    </div>
    <div class="info">
      <p class="value">{{ value }}</p>
      <p v-if="desc" class="desc">({{ desc }})</p>
      <p></p>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    icon: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
    value: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      default: '',
    },
  },
}
</script>
<style lang="scss" scoped>
@import '~/assets/styles/colors.scss';
@import '~/assets/styles/variables.scss';
.contactInfoContainer {
  width: 100%;
  .title {
    width: 100%;
    display: flex;
    align-items: center;
    .icon {
      font-size: $fontL + 0.5em;
      color: $grey_light;
    }
    p {
      font-size: $fontL;
      font-weight: 700;
      color: $primaryColor;
      text-transform: uppercase;
      margin-left: 0.5em;
    }
  }
  .info {
    display: flex;
    align-items: center;
    margin-top: 0.5em;
    .value {
      font-size: $fontM;
      color: $grey;
    }
    .desc {
      font-size: $fontM + 0.2em;
      font-weight: 700;
      color: $grey;
      margin-left: 0.5em;
    }
  }
}
</style>
