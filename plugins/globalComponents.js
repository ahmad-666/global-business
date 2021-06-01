import Vue from 'vue'
import BaseButton from '~/components/ui/BaseButton.vue'
import BaseBreadCrumb from '~/components/ui/BaseBreadCrumb.vue'
import BaseInput from '~/components/form/BaseInput.vue'
import ErrorMessage from '~/components/form/ErrorMessage.vue'
import BaseLoader from '~/components/ui/BaseLoader.vue'
import BaseSelect from '~/components/form/BaseSelect.vue'
import BaseTextArea from '~/components/form/BaseTextArea.vue'
import SuccessMessage from '~/components/form/SuccessMessage.vue'
Vue.component('BaseButton', BaseButton)
Vue.component('BaseInput', BaseInput)
Vue.component('BaseBreadCrumb', BaseBreadCrumb)
Vue.component('ErrorMessage', ErrorMessage)
Vue.component('SuccessMessage', SuccessMessage)
Vue.component('BaseLoader', BaseLoader)
Vue.component('BaseSelect', BaseSelect)
Vue.component('BaseTextArea', BaseTextArea)
