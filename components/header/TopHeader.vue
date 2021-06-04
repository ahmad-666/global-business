<template>
  <div class="topHeader">
    <div class="left">
      <div class="item">
        <font-awesome-icon icon="phone-alt" class="icon"></font-awesome-icon>
        <p>{{ tel }}</p>
      </div>
      <div class="line"></div>
      <div class="item">
        <font-awesome-icon icon="envelope" class="icon"></font-awesome-icon>
        <p>{{ email }}</p>
      </div>
    </div>
    <div class="right">
      <button class="btn" @click="showLogin">
        <font-awesome-icon icon="lock" class="icon"></font-awesome-icon>
        <p>login</p>
      </button>
      <div class="line"></div>
      <button class="btn" @click="showRegister">
        <font-awesome-icon icon="user" class="icon"></font-awesome-icon>
        <p>register</p>
      </button>
    </div>
  </div>
</template>
<script>
export default {
  inject: ['fireShowRegister', 'fireShowLogin'],
  computed: {
    tel() {
      return this.$store.getters.tel
    },
    email() {
      return this.$store.getters.email
    },
  },
  methods: {
    showLogin() {
      this.fireShowLogin()
    },
    showRegister() {
      this.fireShowRegister()
    },
  },
}
</script>
<style lang="scss" scoped>
@import '~/assets/styles/colors.scss';
@import '~/assets/styles/variables.scss';
.topHeader {
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 1em $header_padding;
  align-items: center;
  //   .left {
  //   }
  .right {
    .line {
      transform: rotate(25deg);
    }
    .item {
      p {
        text-transform: capitalize;
      }
    }
  }
  .left,
  .right {
    display: flex;
    align-items: center;
    .item {
      display: flex;
      align-items: center;
      color: white;
      margin: 0 1.5em;
      transition: all 0.3s linear;
      &:hover {
        color: $primaryColor;
      }
      .icon {
        font-size: $fontM;
      }
      p {
        font-size: $fontM;
        margin-left: 0.5em;
      }
    }
    .line {
      width: 0.1em;
      height: 2em;
      background-color: white;
    }
  }
  .btn {
    display: flex;
    align-items: center;
    color: white;
    font-size: $fontM;
    background-color: transparent;
    margin: 0 1em;
    p {
      margin-left: 0.5em;
      text-transform: capitalize;
    }
  }
}
@media screen and (max-width: 1000px) {
  .topHeader {
    padding: 1em $header_padding / 2;
  }
}
@media screen and (max-width: 500px) {
  .topHeader {
    padding: 1em $header_padding / 4;
    .left,
    .right {
      flex-direction: column;
      align-items: flex-start;
      .item {
        margin: 0.5em 0;
      }
      .line {
        display: none;
      }
    }
    .btn {
      margin: 0.5em 0;
    }
  }
}
</style>
