export default {
  setInitData(state, payload) {
    const { tel, email, address, socials, footerPosts, telTime, emailTime } =
      payload
    state.tel = tel
    state.telTime = telTime
    state.email = email
    state.emailTime = emailTime
    state.address = address
    state.socials = socials
    state.footerPosts = footerPosts
  },
  setCounterItems(state, payload) {
    state.counterItems = payload.counterItems
  },
}
