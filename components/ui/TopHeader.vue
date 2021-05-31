<template>
  <div class="topHeader">
    <div class="left">
      <div class="item">
        <font-awesome-icon icon="phone-alt" class="icon"></font-awesome-icon>
        <p>+0123 456 789</p>
      </div>
      <div class="line"></div>
      <div class="item">
        <font-awesome-icon icon="envelope" class="icon"></font-awesome-icon>
        <p>info@GlobalBusiness.com</p>
      </div>
    </div>
    <div class="right">
      <div class="item">
        <font-awesome-icon icon="lock" class="icon"></font-awesome-icon>
        <p>login</p>
      </div>
      <div class="line"></div>
      <div class="item">
        <font-awesome-icon icon="user" class="icon"></font-awesome-icon>
        <p>register</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {}
</script>
<style lang="scss" scoped>
.topHeader {
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 1em 15%;
  align-items: center;
  //   .left {
  //   }
  .right {
    .line {
      transform: rotate(25deg);
    }
  }
  .left,
  .right {
    display: flex;
    align-items: center;
    .item {
      display: flex;
      align-items: center;
      color: red;
      margin: 0 1.5em;
      .icon {
        font-size: 1.2em;
      }
      p {
        font-size: 1.5em;
        margin-left: 0.5em;
      }
    }
    .line {
      width: 0.1em;
      height: 2em;
      background-color: red;
    }
  }
}
</style>
