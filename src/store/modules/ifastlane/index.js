import { formatDuration, intervalToDuration } from 'date-fns'

function pad(input, placeholder = '0', length = 2) {
  return (Array(length).fill(placeholder).join('')+input).slice(-length)
}

export default {
  state: {
    connected: false,
    application: null,
    currentRate: 0.231,
    connectTime: 0,
    duration: '00:00:00',
    durationInterval: null,
    applications: [{
      id: 0,
      name: 'Call of Duty'
    }, {
      id: 1,
      name: 'Fortnite'
    }, {
      id: 2,
      name: 'Zoom'
    }, {
      id: 3,
      name: 'Netflix'
    }]
  },
  getters: {
    connected: (state) => state.connected,
    duration: (state) => state.duration,
    currentRate: (state) => state.currentRate
  },
  mutations: {
    set_application(state, index) {
      state.application = index
    },
    toggle_connected(state, toggle) {
      state.connected = toggle
    },
    set_connection(state, fn) {
      state.connection = fn
      state.connectTime = Date.now()
    },
    clear_connection(state) {
      clearInterval(state.connection)
      clearInterval(state.durationInterval)
      state.connection = null
      state.duration = '00:00:00'
    },
    set_duration(state, fn) {
      const duration = intervalToDuration({
        start: state.connectTime,
        end: Date.now()
      })

      let hours = duration.hours + (duration.years * 8760) + (duration.months * 730.001) + (duration.days * 24)

      state.duration = `${pad(hours)}:${pad(duration.minutes)}:${pad(duration.seconds)}`

      if (fn) {
        state.durationInterval = fn
      }
    }
  },
  actions: {
    setApplication({commit}, index) {
      commit('set_application', index)
    },
    toggleConnected({state, commit, dispatch}, toggle) {
      commit('toggle_connected', toggle)

      if (!toggle) {
        commit('clear_connection')
        return
      }

      commit('set_connection', setInterval(() => {  
        dispatch('wallet/creditBalance', -(state.currentRate), {
          root: true
        })
      }, 5000))

      commit('set_duration', setInterval(() => {
        commit('set_duration')
      }, 1000))
    }
  }
}