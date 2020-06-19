
const state = {
  isMobile: false,
  screenWidth: 0,
}

const mutations = {
  CHANGE_SHOW: (state, data) => {
    state.isMobile=data.isMobile
  },
  CHANGE_WIDTH:(state, data)=>{
    state.screenWidth=data.screenWidth
    if(data.screenWidth>1200){
      state.isMobile=false
    }else {
      state.isMobile=true
    }
  }

}

const actions = {
  changeWindow({ commit }, data) {
    commit('CHANGE_SHOW', data)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}

