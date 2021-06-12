<template>
  <v-navigation-drawer
    v-model="isDrawerOpen"
    app
    fixed
    bottom
    temporary
    dark
    color="secondary"
    class="py-6 px-3 d-flex flex-column"
    :width="getDrawerWidth"
    @input="drawerInputHandler"
  >
    <div class="user d-flex flex-column align-center">
      <v-avatar size="100">
        <v-img width="100%" height="100%" :src="avatarImgSrc"></v-img>
      </v-avatar>
      <v-menu>
        <template #activator="{ on, attrs }">
          <v-btn text dark class="mt-2 text-body-2" v-bind="attrs" v-on="on">
            {{ userId }}
            <v-icon size="12" class="ml-2">fas fa-chevron-down</v-icon>
          </v-btn>
        </template>
        <v-list dark color="secondary lighten-2" class="pa-0">
          <v-list-item
            v-for="avatarMenuItem in avatarMenuItems"
            :key="avatarMenuItem.text"
            class="pa-2 border-bottom-dark"
            @click="avatarMenuItem.onClick"
          >
            <v-list-item-content>
              <v-list-item-title
                class="white--text text-body-2 font-weight-light"
                >{{ avatarMenuItem.text }}</v-list-item-title
              >
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-menu>
      <p class="text-caption grey--text text--darken-1">{{ username }}</p>
      <div class="txts d-flex flex-column align-center d-md-none">
        <p class="text-caption grey--text text--darken-1">
          {{ navBarText1 }}
        </p>
        <p class="text-caption grey--text text--darken-1">
          {{ navBarText2 }}
        </p>
        <p class="text-caption grey--text text--darken-1">
          {{ navBarText3 }}
        </p>
      </div>
    </div>
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
              route: '/dashboard/roiIncome',
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
            // {
            //   txt: 'my tree',
            //   route: '/dashboard/myTree',
            // },
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
      avatarMenuItems: [
        {
          text: 'Profile',
          onClick: () => {
            this.$router.push('/dashboard/profile')
          },
        },
        {
          text: 'Logout',
          onClick: () => {
            // do logout
            this.$router.replace('/')
          },
        },
      ],
      navBarText1: 'SZRCMS',
      navBarText2: 'FTG886',
      navBarText3: 'ANNOUNCEMENT : NUMBER TWO',
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
    avatarImgSrc() {
      return this.$store.getters.avatarImgSrc
    },
    username() {
      return this.$store.getters.username
    },
    userId() {
      return this.$store.getters.userId
    },
    getDrawerWidth() {
      if (this.$vuetify.breakpoint.mdAndUp) return '290px'
      else return '100vw'
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
