<template>
  <v-card class="notification pa-4">
    <p class="primary--text text-capitalize text-body-2">
      {{ ticketNum }} open ticket
    </p>
    <nuxt-link to="/dashboard/tickets">
      <p
        class="textColor--text text--darken-2 text-capitalize text-body-2 mt-4"
      >
        <v-icon size="11"> fa-chevron-left </v-icon>
        show all open tickets
      </p>
    </nuxt-link>
  </v-card>
</template>
<script>
export default {
  data() {
    return {
      ticketNum: 0,
    }
  },
  fetch() {
    this.ticketNum = 0
  },
}
</script>
<style lang="scss" scoped>
// .notification {
//   width: 80em;
// }
</style>
