<template>
  <div class="container">
    <support-form></support-form>
  </div>
</template>
<script>
import SupportForm from '~/components/SupportForm.vue'

export default {
  components: { SupportForm },
}
</script>
<style lang="scss" scoped>
@import '~/assets/styles/variables.scss';
.container {
  padding: 5em $header_padding 0 $header_padding;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
