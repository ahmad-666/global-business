import rootGetters from './root/getters'
import rootMutations from './root/mutations'
import rootActions from './root/actions'
export const state = () => {
  return {
    tel: '',
    email: '',
    address: '',
    socials: [],
    footerPosts: [],
  }
}

export const getters = rootGetters
export const mutations = rootMutations
export const actions = rootActions
