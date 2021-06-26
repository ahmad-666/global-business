<template>
  <div class="users-table">
    <dashboard-bread-crumb :items="breadcrumbItems"></dashboard-bread-crumb>

    <h6 class="text-h6 textColor--text font-weight-regular">Users</h6>
    <v-card color="cardColor" class="pa-4 mt-4">
      <v-data-table
        v-model="selectedUsers"
        :items="users"
        :headers="usersHeaders"
        :search="tableFilter"
        :items-per-page="pageSize"
        :hide-default-footer="true"
        :page="page"
        class="transparent"
        show-select
      >
        >
        <template #top>
          <v-container>
            <v-row>
              <v-col cols="12" md="3" lg="2">
                <v-text-field
                  v-model="tableFilter"
                  outlined
                  label="filter table rows"
                  dense
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="3" lg="2">
                <v-select
                  v-model="pageSize"
                  :items="pages"
                  outlined
                  dense
                ></v-select>
              </v-col>
              <v-spacer></v-spacer>
              <v-col cols="12" md="5" lg="4">
                <table-interaction></table-interaction>
              </v-col>
            </v-row>
          </v-container>
        </template>
        <template #footer>
          <v-container>
            <v-row align="center">
              <v-col cols="12" md="4" lg="3">
                <p class="font-weight-light text-body-2 flex-shrink-0">
                  Showing
                  {{ startText }}
                  to
                  {{ endText }}
                  of {{ totalEntries }} entries
                </p>
              </v-col>
              <v-spacer></v-spacer>
              <v-col cols="12" md="4" lg="3">
                <v-pagination
                  v-model="page"
                  class="mt-4 mt-md-0"
                  :length="totalPages"
                  :total-visible="5"
                ></v-pagination>
              </v-col>
            </v-row>
          </v-container>
        </template>
        <template #header.data-table-select>
          <div></div>
        </template>
        <template #item.data-table-select="slotProps">
          <v-checkbox
            v-model="selectedUsers"
            color="cyan"
            :value="slotProps.item"
          ></v-checkbox>
        </template>
        <template #item.avatar="slotProps">
          <v-img
            width="3em"
            height="3em"
            class="rounded-circle"
            :src="slotProps.value"
          ></v-img>
        </template>
        <template #item.remainingDays="slotProps">
          <p class="textColor--text">{{ slotProps.value }}</p>
          <div
            class="rounded-xl cardColor darken-1"
            :style="{
              width: '90px',
              padding: '.25em',
              ...getRangerParentStyle(parseFloat(slotProps.value)),
            }"
          >
            <div
              class="rounded-pill"
              :class="getRangerClasses(parseFloat(slotProps.value))"
              :style="{
                'transform-origin': 'left center',
                transform: `scaleX(${parseFloat(slotProps.value) / 100})`,
                height: '.5em',
              }"
            ></div>
          </div>
        </template>
      </v-data-table>
    </v-card>
  </div>
</template>
<script>
import TableInteraction from '~/components/profile/tables/TableInteraction.vue'
export default {
  components: {
    TableInteraction,
  },
  layout: 'admin',
  data() {
    return {
      breadcrumbItems: [
        {
          text: 'Users',
          disabled: false,
          to: '/profile/users',
        },
      ],
      selectedUsers: [],
      tableFilter: '',
      page: 1,
      pageSize: 10,
      pages: [10, 25, 50, 100],
      users: [],
      usersHeaders: [
        {
          text: 'AVATAR',
          value: 'avatar',
          sortable: true,
          align: 'start',
        },
        {
          text: 'USERNAME',
          value: 'username',
          sortable: true,
          align: 'start',
        },
        {
          text: 'PHONE',
          value: 'phone',
          sortable: true,
          align: 'start',
        },
        {
          text: 'EMAIL',
          value: 'email',
          sortable: true,
          align: 'start',
        },
        {
          text: 'REGDATE',
          value: 'regDate',
          sortable: true,
          align: 'start',
        },
        {
          text: 'Remaining Days',
          value: 'remainingDays',
          sortable: false,
          align: 'start',
        },
      ],
    }
  },
  fetch() {
    for (let i = 0; i < 100; i++) {
      this.users[i] = {}
      this.users[i].id = i
      this.users[i].avatar = '/imgs/default-avatar.png'
      this.users[i].phone = '+123 456 789'
      this.users[i].username = 'gb714580'
      this.users[i].email = 'something@gmail.com'
      this.users[i].regDate = new Date().toDateString()
      this.users[i].remainingDays = `${Math.floor(Math.random() * 100)}%`
    }
  },
  computed: {
    totalEntries() {
      return this.users.length
    },
    totalPages() {
      return Math.ceil(this.users.length / this.pageSize)
    },
    startText() {
      return (this.page - 1) * this.pageSize + 1
    },
    endText() {
      return (this.page - 1) * this.pageSize + this.pageSize
    },
  },
  methods: {
    getRangerClasses(val) {
      if (val >= 50) {
        return {
          teal: true,
          'accent-4': true,
        }
      } else {
        return {
          red: true,
          'accent-3': true,
        }
      }
    },
    getRangerParentStyle(val) {
      if (val >= 50) {
        return {
          'box-shadow': '0 0 .2em .1em teal',
        }
      } else {
        return {
          'box-shadow': '0 0 .2em .1em crimson',
        }
      }
    },
  },
}
</script>
<style lang="scss" scoped>
.filter-input {
  width: 30em;
}
.page-size-select {
  width: 15em;
}
</style>
