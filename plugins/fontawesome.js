import Vue from 'vue'
import { library, config } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
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
} from '@fortawesome/free-solid-svg-icons'
import {
  faTwitter,
  faFacebook,
  faGoogle,
  faGithub,
} from '@fortawesome/free-brands-svg-icons'
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
  faLayerGroup
)
Vue.component('FontAwesomeIcon', FontAwesomeIcon)
