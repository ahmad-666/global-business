<template>
  <div class="homeSteps">
    <h6 class="title">3 Easy Steps to Get Started</h6>
    <base-line width="12em"></base-line>
    <p class="txt">
      Here is 3 Easy Steps to Busy & Sell Dollar. Lorem Ipsum has been the
      industry's standard dummy text ever since the 1500s, when an unknown
      printer took a galley of type and scrambled it to make a type specimen
      book.
    </p>
    <div class="cards">
      <div v-for="(card, i) in cards" :key="card.id" class="card">
        <home-steps-card
          :index-num="i + 1"
          :icon="card.icon"
          :title="card.title"
          :desc="card.desc"
          :link="card.link"
        ></home-steps-card>
      </div>
    </div>
  </div>
</template>
<script>
import HomeStepsCard from '~/components/cards/HomeStepCard'
export default {
  components: {
    HomeStepsCard,
  },
  data() {
    return {
      cards: [],
    }
  },
  fetch() {
    this.cards = [
      {
        id: 1,
        icon: ['far', 'edit'],
        title: 'Fill Up Your Form',
        desc: 'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.',
        link: '/',
      },
      {
        id: 2,
        icon: ['far', 'money-bill-alt'],
        title: 'Payment',
        desc: 'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.',
        link: '/',
      },
      {
        id: 3,
        icon: ['far', 'credit-card'],
        title: 'Buy or Sell Coin',
        desc: 'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.',
        link: '/',
      },
    ]
  },
}
</script>
<style lang="scss" scoped>
@import '~/assets/styles/colors.scss';
@import '~/assets/styles/variables.scss';
.homeSteps {
  width: 100%;
  background-color: white;
  padding: 5em $header_padding;
  display: flex;
  flex-direction: column;
  align-items: center;
  .title {
    font-size: $fontXL + 1em;
    color: $black_light;
    font-weight: lighter;
    text-align: center;
  }
  .txt {
    margin-top: 2em;
    font-size: $fontM;
    color: $grey;
    text-align: center;
  }
  .cards {
    width: 100%;
    margin-top: 2em;
    display: flex;
    align-items: stretch;
    flex-wrap: wrap;
    .card {
      width: calc((100% - (3 * 4em)) / 3);
      margin: 2em;
    }
  }
}
@media screen and (max-width: 1000px) {
  .homeSteps {
    padding: 5em $header_padding / 2;
    .cards {
      .card {
        width: 100%;
        margin: 2em 0 0 0;
      }
    }
  }
}
@media screen and (max-width: 500px) {
  .homeSteps {
    padding: 5em $header_padding / 4;
  }
}
</style>
