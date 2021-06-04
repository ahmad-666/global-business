<template>
  <div class="ourInvestors">
    <h6 class="title">Our Investors</h6>
    <base-line width="12em"></base-line>
    <p class="txt">
      Here is 3 Easy Steps to Busy & Sell Dollar. Lorem Ipsum has been the
      industry's standard dummy text ever since the 1500s, when an unknown
      printer took a galley of type and scrambled it to make a type specimen
      book.
    </p>
    <div class="investors">
      <div v-for="investor in investors" :key="investor.id" class="investor">
        <investor-card
          :img-src="investor.imgSrc"
          :name="investor.name"
          :rank="investor.rank"
          :socials="investor.socials"
          :tel="investor.tel"
          :email="investor.email"
        ></investor-card>
      </div>
    </div>
  </div>
</template>
<script>
import InvestorCard from '~/components/cards/InvestorCard.vue'
export default {
  components: {
    InvestorCard,
  },
  data() {
    return {
      investors: [],
    }
  },
  fetch() {
    this.investors = [
      {
        id: 1,
        imgSrc: 'imgs/team/01.jpg',
        name: 'Rinks Cooper',
        rank: 'CEO, Global Business',
        tel: '+123 456 789',
        email: 'something@gmail.com',
        socials: [
          {
            icon: 'facebook',
            link: '/',
          },
          {
            icon: 'google',
            link: '/',
          },
          {
            icon: 'twitter',
            link: '/',
          },
          {
            icon: 'github',
            link: '/',
          },
        ],
      },
      {
        id: 2,
        imgSrc: 'imgs/team/02.jpg',
        name: 'JD Scot',
        rank: 'CEO, Global Business',
        tel: '+123 456 789',
        email: 'something@gmail.com',
        socials: [
          {
            icon: 'facebook',
            link: '/',
          },
          {
            icon: 'google',
            link: '/',
          },
          {
            icon: 'twitter',
            link: '/',
          },
          {
            icon: 'github',
            link: '/',
          },
        ],
      },
      {
        id: 3,
        imgSrc: 'imgs/team/03.jpg',
        name: 'Haris Morgan',
        rank: 'CEO, Global Business',
        tel: '+123 456 789',
        email: 'something@gmail.com',
        socials: [
          {
            icon: 'facebook',
            link: '/',
          },
          {
            icon: 'google',
            link: '/',
          },
          {
            icon: 'twitter',
            link: '/',
          },
          {
            icon: 'github',
            link: '/',
          },
        ],
      },
      {
        id: 4,
        imgSrc: 'imgs/team/04.jpg',
        name: 'Nik Jorden',
        rank: 'CEO, Global Business',
        tel: '+123 456 789',
        email: 'something@gmail.com',
        socials: [
          {
            icon: 'facebook',
            link: '/',
          },
          {
            icon: 'google',
            link: '/',
          },
          {
            icon: 'twitter',
            link: '/',
          },
          {
            icon: 'github',
            link: '/',
          },
        ],
      },
    ]
  },
}
</script>
<style lang="scss" scoped>
@import '~/assets/styles/colors.scss';
@import '~/assets/styles/variables.scss';
.ourInvestors {
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
  }
  .txt {
    margin-top: 2em;
    font-size: $fontM;
    color: $grey;
    text-align: center;
  }
  .investors {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    margin-top: 4em;
    .investor {
      width: calc((100% - (4 * 3em)) / 4);
      margin: 1.5em;
    }
  }
}
@media screen and (max-width:1000px){
  .ourInvestors {
  padding: 5em $header_padding;
  display: flex;
  flex-direction: column;
  align-items: center;
  .title {
    font-size: $fontXL + 1em;
    color: $black_light;
    font-weight: lighter;
  }
  .txt {
    margin-top: 2em;
    font-size: $fontM;
    color: $grey;
    text-align: center;
  }
  .investors {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    margin-top: 4em;
    .investor {
      width: calc((100% - (4 * 3em)) / 4);
      margin: 1.5em;
    }
  }
}
}
</style>
