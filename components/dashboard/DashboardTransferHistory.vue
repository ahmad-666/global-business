<template>
  <v-card class="pa-0" color="cardColor">
    <v-card-title
      class="
        font-weight-bold
        text-subtitle-1 text-center
        primary
        pa-2
        d-flex
        justify-center
        align-center
        white--text
      "
      >TRANSFERS HISTORY
    </v-card-title>
    <v-card-text class="pa-2">
      <v-list class="transparent">
        <v-list-item v-for="item in items" :key="item.id" class="mt-4">
          <v-list-item-content>
            <v-list-item-title class="d-flex flex-column align-center">
              <div
                class="
                  historyInfo
                  d-flex
                  align-center
                  justify-center
                  flex-wrap
                  font-weight-medium
                "
              >
                <p class="primary--text text-body-2 ml-0">
                  {{ item.senderId }}
                </p>
                <p class="titleColor--text text-body-2 ml-1">Send</p>
                <p class="textColor--text text-body-2 ml-1">{{ item.value }}</p>
                <p class="titleColor--text text-body-2 ml-1">USD to User</p>
                <p class="textColor--text text-body-2 ml-1">
                  {{ item.receiverId }}
                </p>
                <p class="titleColor--text text-body-2 ml-1">
                  From Main Wallet in
                </p>
              </div>
              <p class="date mt-2 font-weight-normal text-body-2">
                {{ item.date }}
              </p>
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-card-text>
  </v-card>
</template>
<script>
export default {
  props: {
    items: {
      type: Array,
      default: () => [],
    },
  },
}
</script>
<style lang="scss" scoped></style>
