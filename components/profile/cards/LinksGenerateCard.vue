<template>
  <v-card color="adminCardColor pb-4">
    <v-card-title class="d-flex justify-space-between align-start">
      <div>
        <p
          class="
            text-caption
            grey--text
            text--lighten-1 text-capitalize
            font-weight-light
          "
        >
          {{ title }}
        </p>
        <p class="text-h5 white--text">{{ value }}</p>
      </div>
      <v-img max-width="6em" height="auto" :src="icon"></v-img>
    </v-card-title>
    <v-card-actions class="d-flex justify-space-around align-center mt-n4">
      <v-dialog width="60em" max-width="90vw">
        <template #activator="{ on, attrs }">
          <v-btn
            light
            class="
              primary--text
              text-body-2
              font-weight-medium
              rounded-lg
              py-3
              px-3 px-md-10
              text-capitalize
            "
            v-bind="attrs"
            v-on="on"
            @click="visibleLink('left')"
            >Left Link</v-btn
          >
        </template>
        <template #default="dialog">
          <link-card
            title="Your Left Link"
            :link="leftLink"
            @close:card="dialog.value = false"
          ></link-card>
        </template>
      </v-dialog>
      <v-dialog width="60em" max-width="90vw">
        <template #activator="{ on, attrs }">
          <v-btn
            light
            class="
              primary--text
              text-body-2
              font-weight-medium
              rounded-lg
              py-3
              px-3 px-md-10
              text-capitalize
            "
            v-bind="attrs"
            v-on="on"
            @click="visibleLink('left')"
            >Right Link</v-btn
          >
        </template>
        <template #default="dialog">
          <link-card
            title="Your Right Link"
            :link="rightLink"
            @close:card="dialog.value = false"
          ></link-card>
        </template>
      </v-dialog>
    </v-card-actions>
  </v-card>
</template>
<script>
import LinkCard from '~/components/profile/cards/LinkCard.vue'
export default {
  components: {
    LinkCard,
  },
  props: {
    title: {
      type: String,
      required: true,
    },
    value: {
      type: Number,
      default: 0,
    },
    leftLink: {
      type: String,
      required: true,
    },
    rightLink: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      currentLink: null,
    }
  },
  methods: {
    visibleLink(type) {
      this.currentLink = type === 'left' ? this.leftLink : this.rightLink
    },
  },
}
</script>
<style lang="scss" scoped></style>
