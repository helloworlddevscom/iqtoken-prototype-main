export default {
  namespaced: true,
  state: {
    loggedIn: false
  },
  getters: {
    loggedIn: (state) => state.loggedIn
  },
  mutations: {
    set_logged_in(state, loggedIn) {
      Object.assign(state, { loggedIn })
    }
  },
  actions: {
    login({commit, dispatch}, credentials = {}){
      commit('set_logged_in', true)
      
      dispatch('wallet/addWallet', {
        address: '0x00000000219ab540356cbb839cbe05303d7705fa',
        balance: +(Math.random() * 10000).toFixed(2)
      }, {
        root: true
      })
    }
  }
}