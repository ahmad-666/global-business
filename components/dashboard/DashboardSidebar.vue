<template>
  <v-navigation-drawer
    v-model="isDrawerOpen"
    app
    absolute
    bottom
    temporary
    dark
    color="secondary"
    class="py-6 px-3 d-flex flex-column"
    @input="drawerInputHandler"
  >
    <div class="items">
      <v-list class="mt-4">
        <v-list-item v-for="sidebarItem in sidebarItems" :key="sidebarItem.txt">
          <v-list-item-icon class="mr-1">
            <v-icon size="15" color="textColor">{{ sidebarItem.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content class="py-0">
            <nuxt-link
              v-if="!sidebarItem.innerItems.length"
              :to="sidebarItem.route"
            >
              <v-list-item-title
                class="textColor--text text-body-2 text-capitalize"
                >{{ sidebarItem.txt }}</v-list-item-title
              >
            </nuxt-link>

            <v-list-item-title v-else>
              <v-list-group>
                <template #activator>
                  <v-list-item-content>
                    <v-list-item-title
                      class="textColor--text text-body-2 text-capitalize px-0"
                      >{{ sidebarItem.txt }}</v-list-item-title
                    >
                  </v-list-item-content>
                </template>
                <v-list-item
                  v-for="innerItem in sidebarItem.innerItems"
                  :key="innerItem.txt"
                >
                  <nuxt-link :to="innerItem.route">
                    <v-list-item-content>
                      <v-list-item-title
                        class="text-body-2 textColor--text text-capitalize"
                        :to="innerItem.route"
                        >{{ innerItem.txt }}</v-list-item-title
                      >
                    </v-list-item-content>
                  </nuxt-link>
                </v-list-item>
              </v-list-group>
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </div>
  </v-navigation-drawer>
</template>
<script>
export default {
  props: {
    isSidebarOpen: {
      required: true,
      type: Boolean,
    },
  },
  data() {
    return {
      sidebarItems: [
        {
          txt: 'dashboard',
          route: '/dashboard',
          icon: 'fas fa-border-all',
          innerItems: [],
        },
        {
          txt: 'invest',
          route: '',
          icon: 'fas fa-chart-line',
          innerItems: [
            {
              txt: 'deposit by cryptoCurrnecy',
              route: '/dashboard/deposit',
            },
            {
              txt: 'packages',
              route: '/dashboard/packages',
            },
            {
              txt: 'reinvent',
              route: '/dashboard/reinvent',
            },
          ],
        },
        {
          txt: 'create bounce',
          route: '',
          icon: 'fas fa-money-bill-alt',
          innerItems: [
            {
              txt: 'transfer by ROI & IB',
              route: '/dashboard/transferRoiIB',
            },
            {
              txt: 'transfer user to user',
              route: '/dashboard/transferUser',
            },
          ],
        },
        {
          txt: 'transaction',
          route: '',
          icon: 'fas fa-dollar-sign',
          innerItems: [
            {
              txt: 'withdraw by ROI & IB',
              route: '/dashboard/withdraw',
            },
          ],
        },
        {
          txt: 'transaction history',
          route: '',
          icon: 'fas fa-history',
          innerItems: [
            {
              txt: 'invest history',
              route: '/dashboard/investHistory',
            },
            {
              txt: 'profit history',
              route: '/dashboard/profitHistory',
            },
            {
              txt: 'transfer history',
              route: '/dashboard/transferHistory',
            },
          ],
        },
        {
          txt: 'my income',
          route: '',
          icon: 'fas fa-credit-card',
          innerItems: [
            {
              txt: 'referral commision',
              route: '/dashboard/referralCommision',
            },
            {
              txt: 'binary history',
              route: '/dashboard/binaryHistory',
            },
            {
              txt: 'RIO income',
              route: '/dashboard/incomeHistory',
            },
          ],
        },
        {
          txt: 'my network',
          route: '',
          icon: 'fas fa-sitemap',
          innerItems: [
            {
              txt: 'binary summery',
              route: '/dashboard/binarySummery',
            },
            {
              txt: 'my tree',
              route: '/dashboard/myTree',
            },
          ],
        },
        {
          txt: 'my profile',
          route: '/dashboard/profile',
          icon: 'fas fa-edit',
          innerItems: [],
        },
        {
          txt: 'support',
          route: '',
          icon: 'fas fa-ticket-alt',
          innerItems: [
            {
              txt: 'tickets',
              route: '/dashboard/tickets',
            },
            {
              txt: 'send ticket',
              route: '/dashboard/sendTicket',
            },
          ],
        },
      ],
    }
  },
  computed: {
    // isDrawerOpen() {
    //   return this.isSidebarOpen
    // },
    isDrawerOpen: {
      get() {
        return this.isSidebarOpen
      },
      set(val) {
        return val
      },
    },
  },
  methods: {
    drawerInputHandler(darwerIsOpen) {
      this.$emit('drawerInput', darwerIsOpen)
    },
  },
}
</script>
<style lang="scss" scoped></style>
