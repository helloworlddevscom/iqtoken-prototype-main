import selectn from 'selectn'

export default {
  namespaced: true,
  state: {
    wallets: [],
    currentWallet: 0
  },
  getters: {
    current: (state) => state.wallets[state.currentWallet],
    wallets: (state) => state.wallets,
    address: (state) => selectn('address', state.wallets[state.currentWallet]),
    balance: (state) => selectn('balance', state.wallets[state.currentWallet])
  },
  mutations: {
    set_wallet(state, index) {
      if (!state.wallets[index]) {
        return
      }
      state.currentWallet = index
    },
    add_wallet(state, wallet) {
      state.wallets.push(wallet)
      state.currentWallet = state.wallets.indexOf(wallet)
    },
    remove_wallet(state, index) {
      if (index == state.currentWallet) {
        return
      }
      const current = state.wallets[state.currentWallet]

      state.wallets.splice(index, 1)

      state.currentWallet = state.wallets.indexOf(current)
    },
    credit_wallet(state, credit) {
      state.wallets[state.currentWallet].balance += credit
    }
  },
  actions: {
    addWallet({commit}, wallet){
      commit('add_wallet', wallet)
    },
    setWallet({commit}, index) {
      commit('set_wallet', index)
    },
    removeWallet({commit}, index) {
      commit('remove_wallet', index)
    },
    creditBalance({commit}, credit) {
      commit('credit_wallet', credit)
    }
  }
}