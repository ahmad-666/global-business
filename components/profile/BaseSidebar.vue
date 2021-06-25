<template>
  <div @mouseenter="showScroll = true" @mouseleave="showScroll = false">
    <v-navigation-drawer
      v-model="isShowSidebar"
      floating
      :hide-overlay="true"
      color="blue-grey darken-4"
      :app="isMobile"
      dark
      fixed
      :bottom="isMobile"
      width="30em"
      class="pa-4 mySidebar elevation-10 admin-side-bar"
      :class="{
        mySidebarPos: !isMobile,
        'ml-4': !isMobile,
        'rounded-lg': !isMobile,
        'show-scrollbar': isMobile ? true : showScroll,
      }"
      :mini-variant="!isShowSidebar"
      :expand-on-hover="!showSidebar && !isMobile"
      mini-variant-width="85"
    >
      <nuxt-link to="/profile" class="d-flex align-center my-2">
        <img src="/imgs/logo.png" alt="imgs/logo.png" class="logo" />
        <p class="text-body-1 white--text ml-4">GLOBAL BUSINESS</p>
      </nuxt-link>
      <v-divider class="my-6"> </v-divider>
      <v-list class="mt-n6">
        <template v-for="sidebarItem in sidebarItems">
          <v-list-item
            v-if="!sidebarItem.items"
            :key="sidebarItem.text"
            nuxt
            :to="sidebarItem.route"
            exact-active-class="activeClass"
          >
            <v-list-item-icon>
              <v-icon size="17">{{ sidebarItem.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-content class="ml-2">
              <v-list-item-title>
                <p class="font-weight-light text-uppercase text-caption">
                  {{ sidebarItem.text }}
                </p>
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item
            v-else
            :key="sidebarItem.text"
            exact-active-class="activeClass"
          >
            <v-list-item-icon>
              <v-icon
                size="17"
                :class="{
                  'blue-grey--text': isListOpen(sidebarItem.items),
                  'text--darken-2': isListOpen(sidebarItem.items),
                }"
                >{{ sidebarItem.icon }}</v-icon
              >
            </v-list-item-icon>
            <v-list-item-content class="ml-2">
              <v-list-item-title>
                <v-list-group
                  :value="isListOpen(sidebarItem.items)"
                  color="blue-grey darken-2"
                >
                  <template #activator>
                    <p
                      class="font-weight-light text-caption text-uppercase"
                      :style="{ width: '100%' }"
                      :class="{
                        'blue-grey--text': isListOpen(sidebarItem.items),
                        'text--darken-2': isListOpen(sidebarItem.items),
                      }"
                    >
                      {{ sidebarItem.text }}
                    </p>
                  </template>
                  <v-list>
                    <v-list-item
                      v-for="item in sidebarItem.items"
                      :key="item.text"
                      nuxt
                      :to="item.route"
                      exact-active-class="activeClass"
                    >
                      <v-list-item-content>
                        <v-list-item-title
                          class="font-weight-light text-caption text-uppercase"
                        >
                          {{ item.text }}
                        </v-list-item-title>
                      </v-list-item-content>
                    </v-list-item>
                  </v-list>
                </v-list-group>
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </template>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>
<script>
export default {
  props: {
    showSidebar: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      // sidebarModel: !this.$vuetify.breakpoint.mobile,
      sidebarItems: [
        {
          id: 1,
          text: 'dashboard',
          route: '/profile',
          icon: 'mdi-view-dashboard-outline',
        },
        {
          id: 2,
          text: 'my profile',
          route: '/profile/profile',
          icon: 'mdi-account-circle-outline',
        },
        {
          id: 3,
          text: 'investment',
          icon: 'mdi-credit-card-check-outline',
          items: [
            {
              text: 'my balance',
              route: '/profile/myBalance',
            },
            {
              text: 'deposit',
              route: '/profile/deposit',
            },
            // {
            //   text: 'reinvest',
            //   route: '/profile/pricing',
            // },
            {
              text: 'pricing & reinvest',
              route: '/profile/pricing',
            },
          ],
        },
        {
          id: 4,
          text: 'create bonus',
          icon: 'mdi-chart-multiple',
          items: [
            {
              text: 'transfer by roi & ib',
              route: '/profile/transferRoiIB',
            },
            {
              text: 'transfer user to user',
              route: '/profile/userToUser',
            },
          ],
        },
        {
          id: 5,
          text: 'transactions',
          icon: 'mdi-credit-card-multiple-outline',
          items: [
            {
              text: 'withdraw by roi & ib',
              route: '/profile/withdrawRoiIB',
            },
            {
              text: 'invest history',
              route: '/profile/investHistory',
            },
            {
              text: 'profit history',
              route: '/profile/profitHistory',
            },
            {
              text: 'transfers history',
              route: '/profile/transferHistory',
            },
          ],
        },

        {
          id: 6,
          text: 'my income',
          icon: 'mdi-credit-card-settings-outline',
          items: [
            {
              text: 'referral commission',
              route: '/profile/referralCommission',
            },
            {
              text: 'binary commission',
              route: '/profile/binaryCommission',
            },
            {
              text: 'roi income',
              route: '/profile/roiIncome',
            },
          ],
        },
        {
          id: 7,
          text: 'users',
          icon: 'mdi-account-group-outline',
          items: [
            {
              text: 'all users',
              route: '/profile/users',
            },
          ],
        },
        {
          id: 8,
          text: 'my network',
          icon: 'mdi-account-network-outline',
          route: '/profile/network',
        },
        {
          id: 9,
          text: 'settings',
          icon: 'mdi-cog-outline',
          route: '/profile/settings',
        },
        {
          id: 10,
          text: 'tickets',
          icon: 'mdi-ticket-confirmation-outline',
          items: [
            {
              text: 'all tickets',
              route: '/profile/tickets',
            },
            {
              text: 'send ticket',
              route: '/profile/sendTicket',
            },
          ],
        },
      ],
      showScroll: false,
      mobileShowSidebar: false,
    }
  },
  computed: {
    isMobile() {
      return this.$vuetify.breakpoint.mobile
    },
    isShowSidebar: {
      get() {
        if (!this.isMobile) return true
        return this.showSidebar
      },
      set(val) {
        return val
      },
    },
  },
  methods: {
    isListOpen(items) {
      return items.filter(item => item.route === this.$route.fullPath).length
    },
  },
}
</script>
<style scoped lang="scss">
.v-list-item__content {
  padding: 0 !important;
}
.mySidebar {
  // background: #212529 linear-gradient(180deg, #21242a, #212529) repeat-x !important;
  background-image: linear-gradient(
    to bottom,
    #ecab34,
    #e8a52c,
    #e39f24,
    #df991c,
    #da9311
  );
}
.mySidebarPos {
  top: 7em !important;
  height: calc(100% - 8em) !important;
}
.logo {
  width: 5em;
  height: 5em;
}
.activeClass {
  color: #455a64 !important;
  position: relative;
  &::before {
    display: none;
  }
}
.v-list-item--link:before {
  display: none;
}
</style>
