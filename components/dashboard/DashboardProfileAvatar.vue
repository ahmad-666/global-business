<template>
  <v-card color="secondary pa-0" dark>
    <v-card-title>
      <v-avatar size="200" class="mx-auto borderAround position-relative">
        <v-img width="100%" height="100%" :src="avatarImgSrc"></v-img>
        <v-file-input
          prepend-icon="fas fa-camera"
          hide-input
          dark
          class="position-absolute absolute-bottom-center file-input"
        >
        </v-file-input>
      </v-avatar>
    </v-card-title>
    <v-card-text class="d-flex flex-column align-center pa-4">
      <p class="font-weight-light text-body-1 white--text">{{ userId }}</p>
      <p class="font-weight-light text-body-1 mt-2 white--text">
        Passport ID: {{ passportId }}
      </p>
      <p class="font-weight-light text-body-1 mt-2 white--text">
        {{ username }}
      </p>
      <p class="font-weight-light text-body-1 mt-2 primary--text">
        {{ email }}
      </p>
    </v-card-text>
  </v-card>
</template>
<script>
export default {
  data() {
    return {
      avatarImgSrc: '',
      passportId: '',
      userId: '',
    }
  },
  fetch() {
    this.avatarImgSrc =
      '/imgs/sezar-themes/light-blue-ltr/images/default-avatar.png'
    this.passportId = '1752256548'
    this.userId = 'FTG886 - fxtg4'
  },
  computed: {
    email() {
      return this.$store.getters.email
    },
    username() {
      return this.$store.getters.username
    },
  },
}
</script>
<style lang="scss" scoped>
.borderAround {
  border: 0.3em solid #d1a316;
}
</style>
