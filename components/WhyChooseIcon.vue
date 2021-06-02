<template>
  <div class="whyChooseIcon">
    <div class="iconParent">
      <font-awesome-icon class="icon" :icon="icon"></font-awesome-icon>
    </div>
    <div class="content">
      <h6>{{ title }}</h6>
      <p>{{ txt }}</p>
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
    width: 7em;
    height: 7em;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: $primaryColor;
    .icon {
      font-size: $fontXL;
      color: white;
    }
  }
  .content {
    .title {
      font-size: $fontXL;
      color: $black;
    }
    .txt {
      font-size: $fontM;
      color: $grey;
    }
  }
}
</style>
