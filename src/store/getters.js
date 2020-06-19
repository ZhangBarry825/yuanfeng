const getters = {
  sidebar: state => state.app.sidebar,
  device: state => state.app.device,
  token: state => state.user.token,
  avatar: state => state.user.avatar,
  name: state => state.user.name,
  isMobile: state => state.window.isMobile,
  screenWidth: state => state.window.screenWidth,
}
export default getters
