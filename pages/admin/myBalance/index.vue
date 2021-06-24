<template>
  <div>
    <h6
      class="text-h6 font-weight-medium white--text text-capitalize mt-2 mb-4"
    >
      My Balance
    </h6>
    <v-container>
      <v-row>
        <v-col
          v-for="infoCard in infoCards"
          :key="infoCard.id"
          cols="12"
          sm="6"
          lg="4"
        >
          <general-info-card
            :icon="infoCard.icon"
            :value="infoCard.value"
            :icon-gradient="infoCard.iconGradient"
            :title="infoCard.title"
            :action-icon="infoCard.actionIcon"
            :action-text="infoCard.actionText"
          ></general-info-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
import GeneralInfoCard from '~/components/admin/cards/GeneralInfoCard.vue'

export default {
  components: {
    GeneralInfoCard,
  },
  layout: 'admin',
  data() {
    return {
      infoCards: [],
    }
  },
  fetch() {
    this.infoCards = [
      {
        id: 1,
        icon: 'fas fa-dollar-sign',
        title: 'number',
        value: '150GB',
        iconGradient: 'linear-gradient(to bottom left,#ff8d72,#ff6491,#ff8d72)',
        actionIcon: 'fas fa-redo',
        actionText: 'update now',
      },
    ]
  },
}
</script>
