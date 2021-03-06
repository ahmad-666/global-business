export default {
  setInitData(state, payload) {
    const {
      tel,
      email,
      address,
      socials,
      footerPosts,
      telTime,
      emailTime,
      referralId,
      username,
      avatarImgSrc,
      userId,
      identifierId,
    } = payload
    state.tel = tel
    state.telTime = telTime
    state.email = email
    state.emailTime = emailTime
    state.address = address
    state.socials = socials
    state.footerPosts = footerPosts
    state.referralId = referralId
    state.username = username
    state.avatarImgSrc = avatarImgSrc
    state.userId = userId
    state.identifierId = identifierId
  },
  setCounterItems(state, payload) {
    state.counterItems = payload.counterItems
  },
  setComments(state, payload) {
    state.comments = payload.comments
  },
}
