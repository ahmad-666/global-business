<template>
  <div class="faq">
    <div class="question" :class="{ active: isOpen }" @click="toggleOpen">
      <p>{{ question }}</p>
      <font-awesome-icon
        :icon="!isOpen ? 'plus' : 'minus'"
        class="icon"
      ></font-awesome-icon>
    </div>
    <transition name="faq-anime">
      <div v-if="isOpen" class="answer">
        <p>{{ answer }}</p>
      </div>
    </transition>
  </div>
</template>
<script>
export default {
  props: {
    question: {
      type: String,
      required: true,
    },
    answer: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      isOpen: false,
    }
  },
  methods: {
    toggleOpen() {
      this.isOpen = !this.isOpen
    },
  },
}
</script>
<style lang="scss" scoped>
@import '~/assets/styles/colors.scss';
@import '~/assets/styles/variables.scss';
.faq {
  border: 1px solid darken(white, 10%);
  width: 100%;
  border-radius: 0.5em;
  overflow: hidden;
  .question {
    width: 100%;
    background-color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2em;
    cursor: pointer;
    transition: all 0.3s linear;
    &:hover {
      background-color: $primaryColor;
      p,
      .icon {
        color: white;
      }
    }
    p {
      width: 100%;
      font-size: $fontM;
      color: $grey;
    }
    .icon {
      flex-shrink: 0;
      margin-left: 1em;
      font-size: $fontM;
      color: $grey_light;
    }
  }
  .question.active {
    background-color: $primaryColor;
    p,
    .icon {
      color: white;
    }
  }
  .answer {
    width: 100%;
    padding: 2em;
    background-color: white;
    p {
      font-size: $fontM;
      color: $grey;
      line-height: 1.75em;
    }
  }
}

.faq-anime-enter,
.faq-anime-leave-to {
  opacity: 0;
}
.faq-anime-enter-to,
.faq-anime-leave {
  opacity: 1;
}
.faq-anime-enter-active,
.faq-anime-leave-active {
  transition: all 0.3s ease-in-out;
}
</style>
