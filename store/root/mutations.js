export default {
  setInitData(state, payload) {
    const { tel, email, address, socials, footerPosts } = payload
    state.tel = tel
    state.email = email
    state.address = address
    state.socials = socials
    state.footerPosts = footerPosts
  },
}
