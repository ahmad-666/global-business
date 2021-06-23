<template>
  <div class="d-flex align-center flex-wrap justify-start justify-md-end">
    <v-tooltip light>
      <template #activator="{ on, attrs }">
        <v-btn text v-bind="attrs" small @click="ticketHandler" v-on="on">
          <v-icon size="16" color="orange">fas fa-ticket-alt</v-icon>
        </v-btn>
      </template>
      <p class="text-body-2">send Ticket</p>
    </v-tooltip>
    <v-tooltip light>
      <template #activator="{ on, attrs }">
        <v-btn text v-bind="attrs" small @click="editHandler" v-on="on">
          <v-icon size="16" color="cyan">fas fa-pen</v-icon>
        </v-btn>
      </template>
      <p class="text-body-2">Edit</p>
    </v-tooltip>
    <v-tooltip light>
      <template #activator="{ on, attrs }">
        <v-btn small text v-bind="attrs" @click="changeAccessHandler" v-on="on">
          <v-icon size="16" color="pink">fas fa-fingerprint</v-icon>
        </v-btn>
      </template>
      <p class="text-body-2">Change Access</p>
    </v-tooltip>
    <v-tooltip light>
      <template #activator="{ on, attrs }">
        <v-btn small text v-bind="attrs" @click="deleteHandler" v-on="on">
          <v-icon size="16" color="red">fas fa-times</v-icon>
        </v-btn>
      </template>
      <p class="text-body-2">Delete</p>
    </v-tooltip>
    <v-tooltip light>
      <template #activator="{ on, attrs }">
        <v-btn small text v-bind="attrs" @click="exportExcelHandler" v-on="on">
          <v-icon size="16" color="light-blue darken-4"
            >fas fa-file-excel</v-icon
          >
        </v-btn>
      </template>
      <p class="text-body-2">Export Excel</p>
    </v-tooltip>
    <v-tooltip light>
      <template #activator="{ on, attrs }">
        <v-btn small text v-bind="attrs" @click="exportPDFHandler" v-on="on">
          <v-icon size="16" color="light-blue darken-4">fas fa-file-pdf</v-icon>
        </v-btn>
      </template>
      <p class="text-body-2">Export PDF</p>
    </v-tooltip>
    <v-tooltip light>
      <template #activator="{ on, attrs }">
        <v-btn small text v-bind="attrs" @click="printHandler" v-on="on">
          <v-icon size="16" color="light-blue darken-4">fas fa-print</v-icon>
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
      this.$router.push('/admin/sendTicket')
    },
  },
}
</script>
<style lang="scss" scoped></style>
