<template>
  <div class="d-flex align-center flex-wrap justify-start justify-md-end">
    <v-tooltip light bottom>
      <template #activator="{ on, attrs }">
        <v-btn text v-bind="attrs" small @click="ticketHandler" v-on="on">
          <v-icon size="22" color="orange"
            >mdi-ticket-confirmation-outline</v-icon
          >
        </v-btn>
      </template>
      <p class="text-body-2">send Ticket</p>
    </v-tooltip>
    <v-tooltip light bottom>
      <template #activator="{ on, attrs }">
        <v-btn text v-bind="attrs" small @click="editHandler" v-on="on">
          <v-icon size="22" color="cyan">mdi-pencil-outline</v-icon>
        </v-btn>
      </template>
      <p class="text-body-2">Edit</p>
    </v-tooltip>
    <v-tooltip light bottom>
      <template #activator="{ on, attrs }">
        <v-btn small text v-bind="attrs" @click="changeAccessHandler" v-on="on">
          <v-icon size="22" color="pink">mdi-fingerprint</v-icon>
        </v-btn>
      </template>
      <p class="text-body-2">Change Access</p>
    </v-tooltip>
    <v-tooltip light bottom>
      <template #activator="{ on, attrs }">
        <v-btn small text v-bind="attrs" @click="deleteHandler" v-on="on">
          <v-icon size="22" color="red">mdi-close</v-icon>
        </v-btn>
      </template>
      <p class="text-body-2">Delete</p>
    </v-tooltip>
    <v-tooltip light bottom>
      <template #activator="{ on, attrs }">
        <v-btn small text v-bind="attrs" @click="exportExcelHandler" v-on="on">
          <v-icon size="22" color="light-blue darken-4"
            >mdi-file-excel-outline</v-icon
          >
        </v-btn>
      </template>
      <p class="text-body-2">Export Excel</p>
    </v-tooltip>
    <v-tooltip light bottom>
      <template #activator="{ on, attrs }">
        <v-btn small text v-bind="attrs" @click="exportPDFHandler" v-on="on">
          <v-icon size="22" color="light-blue darken-4"
            >mdi-file-pdf-outline</v-icon
          >
        </v-btn>
      </template>
      <p class="text-body-2">Export PDF</p>
    </v-tooltip>
    <v-tooltip light bottom>
      <template #activator="{ on, attrs }">
        <v-btn small text v-bind="attrs" @click="printHandler" v-on="on">
          <v-icon size="22" color="light-blue darken-4">mdi-printer</v-icon>
        </v-btn>
      </template>
      <p class="text-body-2">Print</p>
    </v-tooltip>
  </div>
</template>
<script>
export default {
  methods: {
    editHandler() {
      this.$emit('clicked:edit')
    },
    changeAccessHandler() {
      this.$emit('clicked:change-access')
    },
    deleteHandler() {
      this.$emit('clicked:delete')
    },
    exportExcelHandler() {
      this.$emit('clicked:export-excel')
    },
    exportPDFHandler() {
      this.$emit('clicked:export-pdf')
    },
    printHandler() {
      this.$emit('clicked:print')
    },
    ticketHandler() {
      this.$router.push('/profile/sendTicket')
    },
  },
}
</script>
<style lang="scss" scoped></style>
