<template>
  <div>
    <h6
      class="text-h5 grey--text font-weight-medium text--lighten-1 text-center"
    >
      Your Network Tree
    </h6>
    <v-container>
      <v-row justify="center" align="center" dense>
        <v-col cols="10" md="8" class="mx-auto">
          <binary-tree :left="nodes.left" :right="nodes.right"></binary-tree>
        </v-col>
      </v-row>
    </v-container>
    <v-btn
      color="primary"
      class="white--text py-3 px-5 mt-6 mx-auto d-flex"
      @click="goBack"
      >Go One Level Back</v-btn
    >
  </div>
</template>
<script>
import BinaryTree from '~/components/admin/BinaryTree.vue'
export default {
  components: {
    BinaryTree,
  },
  layout: 'admin',
  data() {
    return {
      nodes: {},
    }
  },
  fetch() {
    this.nodes = {
      left: {
        id: 3,
        name: 'name#3',
        imgSrc: '/imgs/default-avatar.png',
        tooltip: 'no packages',
      },
      right: {
        id: 4,
        name: 'name#4',
        imgSrc: '/imgs/default-avatar.png',
        tooltip: 'no packages',
      },
    }
  },
  methods: {
    goBack() {
      this.$router.back()
    },
  },
}
</script>
