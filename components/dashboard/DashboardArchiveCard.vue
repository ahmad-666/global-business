<template>
  <div class="archiveCard secondary lighten-1">
    <h6 class="white--text text-subtitle-2 font-weight-bold pa-2">Archive</h6>
    <div
      class="archivesContainer primary pa-2 d-flex justify-center align-center"
    >
      <div class="archives secondary pa-1 d-flex flex-column align-center">
        <p
          v-for="date in dates"
          :key="date"
          class="white--text text-body-2 mt-2"
        >
          Archive uploaded on {{ date }}
        </p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    dates: {
      type: Array,
      default() {
        return []
      },
    },
  },
}
</script>
<style lang="scss" scoped>
.archives {
  width: 90%;
}
</style>
