const errorLog:any = {
  namespaced: true,
  state: {
    logs: []
  },
  mutations: {
    ADD_ERROR_LOG: (state:any, log:object) => {
      state.logs.push(log)
    },
    CLEAR_ERROR_LOG: (state:any) => {
      state.logs.splice(0)
    }
  },
  actions: {
    ADD_ERROR_LOG ({ commit }:any, log:object) {
      commit('ADD_ERROR_LOG', log)
    },
    CLEAR_ERROR_LOG ({ commit }:any) {
      commit('CLEAR_ERROR_LOG')
    }
  }
}

export default errorLog
