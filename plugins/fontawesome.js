import Vue from 'vue'
import { library, config } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {
  faPhoneAlt,
  faEnvelope,
  faLock,
  faUser,
} from '@fortawesome/free-solid-svg-icons'
config.autoAddCss = false
library.add(faPhoneAlt, faEnvelope, faLock, faUser)
Vue.component('FontAwesomeIcon', FontAwesomeIcon)
