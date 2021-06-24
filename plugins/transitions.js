import Vue from 'vue'
import { createSimpleTransition } from 'vuetify/lib/components/transitions/createTransition'
const customFadeTransition = createSimpleTransition('custom-fade-transition')
Vue.component('CustomFadeTransition', customFadeTransition)
