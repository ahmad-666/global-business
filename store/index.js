import rootGetters from './root/getters'
import rootMutations from './root/mutations'
import rootActions from './root/actions'
export const state = () => {
  return {
    tel: '',
    telTime: '',
    email: '',
    emailTime: '',
    address: '',
    socials: [],
    footerPosts: [],
    counterItems: [],
    comments: [],
  }
}

export const getters = rootGetters
export const mutations = rootMutations
export const actions = rootActions
