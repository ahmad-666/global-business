<template>
  <div class="whyChooseIcon">
    <div class="iconParent">
      <font-awesome-icon class="icon" :icon="icon"></font-awesome-icon>
    </div>
    <div class="content">
      <h6 class="title">{{ title }}</h6>
      <p class="txt">{{ txt }}</p>
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
    title: {
      type: String,
      required: true,
    },
    txt: {
      type: String,
      required: true,
    },
  },
}
</script>
<style lang="scss" scoped>
@import '~/assets/styles/colors.scss';
@import '~/assets/styles/variables.scss';
.whyChooseIcon {
  width: 100%;
  display: flex;
  align-items: center;
  .iconParent {
    flex-shrink: 0;
    width: 6em;
    height: 6em;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: $primaryColor;
    .icon {
      font-size: $fontL + 0.5em;
      color: white;
    }
  }
  .content {
    margin-left: 1em;
    .title {
      font-size: $fontL + 0.35em;
      color: $black_light;
      font-weight: lighter;
    }
    .txt {
      font-size: $fontM;
      color: $grey;
      margin-top: 0.5em;
    }
  }
}
</style>
