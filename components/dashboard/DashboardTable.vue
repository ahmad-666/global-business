<template>
  <v-card color="cardColor" class="pa-4">
    <v-data-table
      :items="items"
      :headers="headers"
      class="transparent mt-4"
      :search="tableFilter"
      :items-per-page="pageSize"
      :hide-default-footer="true"
      :page="page"
    >
      <template #top>
        <div
          class="
            topTable
            d-flex
            flex-column flex-md-row
            justify-md-space-between
            align-md-center
          "
        >
          <div class="pageSizeSelect">
            <v-select
              v-model="pageSize"
              :items="availablePageSizes"
              outlined
              dense
            ></v-select>
          </div>

          <div class="filterInput">
            <v-text-field
              v-model="tableFilter"
              outlined
              label="filter table rows"
              dense
            ></v-text-field>
          </div>
        </div>
      </template>
      <template #footer>
        <div
          class="
            tableFooter
            d-flex
            flex-column flex-md-row
            justify-md-space-between
            align-md-center
            mt-4
          "
        >
          <p class="font-weight-light text-body-2 flex-shrink-0">
            Showing
            {{ startText }}
            to
            {{ endText }}
            of {{ totalEntries }} entries
          </p>
          <v-spacer></v-spacer>
          <v-pagination
            v-model="page"
            :length="totalPages"
            :total-visible="5"
            class="d-flex justify-start mt-4 mt-md-0"
          ></v-pagination>
        </div>
      </template>
    </v-data-table>
  </v-card>
</template>
<script>
export default {
  props: {
    items: {
      type: Array,
      required: true,
    },
    headers: {
      type: Array,
      required: true,
    },
    availablePageSizes: {
      type: Array,
      default: () => [10, 20, 50],
    },
  },
  data() {
    return {
      tableFilter: '',
      page: 1,
      pageSize: this.availablePageSizes[0],
    }
  },
  computed: {
    totalEntries() {
      return this.items.length
    },
    totalPages() {
      return Math.ceil(this.items.length / this.pageSize)
    },
    startText() {
      return (this.page - 1) * this.pageSize + 1
    },
    endText() {
      return (this.page - 1) * this.pageSize + this.pageSize
    },
  },
}
</script>
<style lang="scss" scoped></style>
