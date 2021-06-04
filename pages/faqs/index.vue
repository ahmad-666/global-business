<template>
  <div class="faqsContainer">
    <div class="faqs">
      <div v-for="faq in faqs" :key="faq.id" class="faq">
        <base-faq :question="faq.question" :answer="faq.answer"></base-faq>
      </div>
    </div>
  </div>
</template>
<script>
import BaseFaq from '~/components/ui/BaseFaq.vue'
export default {
  components: {
    BaseFaq,
  },
  data() {
    return {
      faqs: [],
    }
  },
  fetch() {
    this.faqs = [
      {
        id: 1,
        question: 'Lorem Ipsum is simply dummy text of the printing?',
        answer:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
      },
      {
        id: 2,
        question: 'Lorem Ipsum is simply dummy text of the printing?',
        answer:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
      },
      {
        id: 3,
        question: 'Lorem Ipsum is simply dummy text of the printing?',
        answer:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
      },
      {
        id: 4,
        question: 'Ipsum is simply dummy text of the printing?',
        answer:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
      },
      {
        id: 5,
        question: 'Lorem Ipsum is simply dummy text of the printing?',
        answer:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
      },
      {
        id: 6,
        question: 'Ipsum is simply dummy text of the printing?',
        answer:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
      },
    ]
  },
}
</script>
<style lang="scss" scoped>
@import '~/assets/styles/variables.scss';
@import '~/assets/styles/colors.scss';
.faqsContainer {
  width: 100%;
  padding: 4em $header_padding;
  background-color: $section_bg_color;
  .faqs {
    width: 100%;
    .faq {
      width: 100%;
      margin-top: 2em;
    }
  }
}
@media screen and (max-width: 1000px) {
  .faqsContainer {
    padding: 4em $header_padding / 2;
  }
}
@media screen and (max-width: 500px) {
  .faqsContainer {
    padding: 4em $header_padding / 4;
  }
}
</style>
