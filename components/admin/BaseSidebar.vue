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
      class="py-2 pl-4 mySidebar elevation-10 admin-side-bar"
      :class="{
        mySidebarPos: !isMobile,
        'ml-4': !isMobile,
        'rounded-lg': !isMobile,
        'show-scrollbar': showScroll,
      }"
      :expand-on-hover="!showSidebar && !isMobile"
    >
      <nuxt-link to="/admin" class="d-flex align-center">
        <img src="/imgs/logo.png" alt="imgs/logo.png" class="logo" />
        <p class="text-body-1 white--text ml-4">GLOBAL BUSINESS</p>
      </nuxt-link>
      <v-list>
        <template v-for="sidebarItem in sidebarItems">
          <v-list-item
            v-if="!sidebarItem.items"
            :key="sidebarItem.text"
            nuxt
            :to="sidebarItem.route"
            exact-active-class="activeClass"
          >
            <v-list-item-icon>
              <v-icon size="15">{{ sidebarItem.icon }}</v-icon>
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
                size="15"
                :class="{ 'primary--text': isListOpen(sidebarItem.items) }"
                >{{ sidebarItem.icon }}</v-icon
              >
            </v-list-item-icon>
            <v-list-item-content class="ml-2">
              <v-list-item-title>
                <v-list-group :value="isListOpen(sidebarItem.items)">
                  <template #activator>
                    <p
                      class="font-weight-light text-caption text-uppercase"
                      :style="{ width: '100%' }"
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
          route: '/admin',
          icon: 'fas fa-columns',
        },
        {
          id: 2,
          text: 'my profile',
          route: '/admin/profile',
          icon: 'fas fa-user',
        },
        {
          id: 3,
          text: 'investment',
          icon: 'fas fa-dollar-sign',
          items: [
            {
              text: 'my balance',
              route: '/admin/myBalance',
            },
            {
              text: 'deposit',
              route: '/admin/deposit',
            },
            {
              text: 'reinvest',
              route: '/admin/reinvest',
            },
            {
              text: 'pricing',
              route: '/admin/pricing',
            },
          ],
        },
        {
          id: 4,
          text: 'create bonus',
          icon: 'fas fa-coins',
          items: [
            {
              text: 'transfer by roi & ib',
              route: '/admin/transferRoiIB',
            },
            {
              text: 'transfer user to user',
              route: '/admin/transfer/userToUser',
            },
          ],
        },
        {
          id: 5,
          text: 'transactions',
          icon: 'fas fa-credit-card',
          items: [
            {
              text: 'withdraw by roi & ib',
              route: '/admin/withdrawRoiIB',
            },
            {
              text: 'invest history',
              route: '/admin/investHistory',
            },
            {
              text: 'profit history',
              route: '/admin/profitHistory',
            },
            {
              text: 'transfers history',
              route: '/admin/transferHistory',
            },
          ],
        },

        {
          id: 6,
          text: 'my income',
          icon: 'fas fa-money-check-alt',
          items: [
            {
              text: 'referral commission',
              route: '/admin/referralCommission',
            },
            {
              text: 'binary commission',
              route: '/admin/binaryCommission',
            },
            {
              text: 'roi income',
              route: '/admin/roiIncome',
            },
          ],
        },
        {
          id: 7,
          text: 'users',
          icon: 'fas fa-users',
          items: [
            {
              text: 'all users',
              route: '/admin/users',
            },
          ],
        },
        {
          id: 8,
          text: 'my network',
          icon: 'fas fa-network-wired',
          route: '/admin/network',
        },
        {
          id: 9,
          text: 'settings',
          icon: 'fas fa-cog',
          route: '/admin/settings',
        },
        {
          id: 10,
          text: 'tickets',
          icon: 'fas fa-ticket-alt',
          items: [
            {
              text: 'all tickets',
              route: '/admin/tickets',
            },
            {
              text: 'send ticket',
              route: '/admin/sendTicket',
            },
          ],
        },
        {
          id: 10,
          text: 'tickets',
          icon: 'fas fa-ticket-alt',
          items: [
            {
              text: 'all tickets',
              route: '/admin/tickets',
            },
            {
              text: 'send ticket',
              route: '/admin/sendTicket',
            },
          ],
        },
        {
          id: 10,
          text: 'tickets',
          icon: 'fas fa-ticket-alt',
          items: [
            {
              text: 'all tickets',
              route: '/admin/tickets',
            },
            {
              text: 'send ticket',
              route: '/admin/sendTicket',
            },
          ],
        },
        {
          id: 10,
          text: 'tickets',
          icon: 'fas fa-ticket-alt',
          items: [
            {
              text: 'all tickets',
              route: '/admin/tickets',
            },
            {
              text: 'send ticket',
              route: '/admin/sendTicket',
            },
          ],
        },
        {
          id: 10,
          text: 'tickets',
          icon: 'fas fa-ticket-alt',
          items: [
            {
              text: 'all tickets',
              route: '/admin/tickets',
            },
            {
              text: 'send ticket',
              route: '/admin/sendTicket',
            },
          ],
        },
        {
          id: 10,
          text: 'tickets',
          icon: 'fas fa-ticket-alt',
          items: [
            {
              text: 'all tickets',
              route: '/admin/tickets',
            },
            {
              text: 'send ticket',
              route: '/admin/sendTicket',
            },
          ],
        },
        {
          id: 10,
          text: 'tickets',
          icon: 'fas fa-ticket-alt',
          items: [
            {
              text: 'all tickets',
              route: '/admin/tickets',
            },
            {
              text: 'send ticket',
              route: '/admin/sendTicket',
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
    #ffa500,
    #fca711,
    #f8a91c,
    #f5aa25,
    #f2ac2d
  );
}
.mySidebarPos {
  top: 7em !important;
  height: calc(100% - 8em) !important;
}
.logo {
  width: 3em;
  height: 3em;
}
.activeClass {
  color: #d1a316 !important;
  position: relative;
  &::before {
    display: none;
  }
}
.v-list-item--link:before {
  display: none;
}
</style>
