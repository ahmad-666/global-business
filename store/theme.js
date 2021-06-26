import themeGetters from './theme/getters'
import themeMutations from './theme/mutations'
import themeActions from './theme/actions'
export const state = () => {
  return {
    theme: '', // 'dark','light'
  }
}
export const getters = themeGetters
export const mutations = themeMutations
export const actions = themeActions
