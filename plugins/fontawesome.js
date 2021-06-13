import Vue from 'vue'
// import Vuetify from 'vuetify/lib'
import { library, config } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import '@fortawesome/fontawesome-free/css/all.css'
import {
  faPhoneAlt,
  faEnvelope,
  faLock,
  faUser,
  faMapMarkerAlt,
  faCalendar,
  faTimes,
  faCheck,
  faHandPointRight,
  faFolder,
  faCopy,
  faStar,
  faPlus,
  faMinus,
  faChevronRight,
  faChevronDown,
  faChevronUp,
  faGlobeAmericas,
  faShareAlt,
  faLayerGroup,
  // faEdit,
  faShoppingCart,
  faHeadset,
  faArrowUp,
  faBars,
  faChevronLeft,
} from '@fortawesome/free-solid-svg-icons'
import {
  faTwitter,
  faFacebook,
  faGoogle,
  faGithub,
} from '@fortawesome/free-brands-svg-icons'
import {
  // faCopy,
  faMoneyBillAlt,
  faEdit,
  faCreditCard,
} from '@fortawesome/free-regular-svg-icons'
config.autoAddCss = false
library.add(
  faPhoneAlt,
  faEnvelope,
  faLock,
  faUser,
  faMapMarkerAlt,
  faTwitter,
  faFacebook,
  faGoogle,
  faGithub,
  faCalendar,
  faTimes,
  faCheck,
  faHandPointRight,
  faFolder,
  faCopy,
  faStar,
  faPlus,
  faMinus,
  faChevronRight,
  faChevronDown,
  faChevronUp,
  faGlobeAmericas,
  faShareAlt,
  faLayerGroup,
  faEdit,
  faShoppingCart,
  faCreditCard,
  faHeadset,
  faMoneyBillAlt,
  faArrowUp,
  faBars,
  faChevronLeft
)
Vue.component('FontAwesomeIcon', FontAwesomeIcon)
