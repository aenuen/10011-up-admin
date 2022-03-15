const tagsView:any = {
  state: {
    visitedViews: [],
    cachedViews: []
  },
  mutations: {
    ADD_VISITED_VIEW: (state:any, view:any) => {
      if (state.visitedViews.some((v:Record<string, any>) => v.path === view.path)) return
      state.visitedViews.push(
        Object.assign({}, view, { title: view.meta.title || 'no-name' }) // 合并
      )
    },
    ADD_CACHED_VIEW: (state:any, view:any) => {
      if (state.cachedViews.includes(view.name)) return
      if (!view.meta.noCache) state.cachedViews.push(view.name)
    },
    DEL_VISITED_VIEW: (state:any, view:any) => {
      for (const [i, v] of state.visitedViews.entries()) {
        if (v.path === view.path) {
          state.visitedViews.splice(i, 1)
          break
        }
      }
    },
    DEL_CACHED_VIEW: (state:any, view:any) => {
      const index = state.cachedViews.indexOf(view.name)
      index > -1 && state.cachedViews.splice(index, 1)
    },
    DEL_OTHERS_VISITED_VIEWS: (state:any, view:any) => {
      state.visitedViews = state.visitedViews.filter((v:Record<string, any>) => v.meta.affix || v.path === view.path)
    },
    DEL_OTHERS_CACHED_VIEWS: (state:any, view:any) => {
      const index = state.cachedViews.indexOf(view.name)
      state.cachedViews = index > -1 ? state.cachedViews.slice(index, index + 1) : []
    },
    DEL_ALL_VISITED_VIEWS: (state:any) => {
      state.visitedViews = state.visitedViews.filter((tag:Record<string, any>) => tag.meta.affix) // 保留粘贴标签
    },
    DEL_ALL_CACHED_VIEWS: (state:any) => {
      state.cachedViews = []
    },
    UPDATE_VISITED_VIEW: (state:any, view:any) => {
      for (let v of state.visitedViews) {
        if (v.path === view.path) {
          v = Object.assign(v, view)
          break
        }
      }
    }
  },
  actions: {
    addView: {
      root: true,
      handler ({ dispatch }:any, view:any) {
        dispatch('addVisitedView', view).then()
        dispatch('addCachedView', view).then()
      }
    },
    addVisitedView: {
      root: true,
      handler ({ commit }:any, view:any) {
        commit('ADD_VISITED_VIEW', view)
      }
    },
    addCachedView: {
      root: true,
      handler ({ commit }:any, view:any) {
        commit('ADD_CACHED_VIEW', view)
      }
    },
    delView: {
      root: true,
      handler ({ dispatch, state }:any, view:any) {
        return new Promise(resolve => {
          dispatch('delVisitedView', view).then()
          dispatch('delCachedView', view).then()
          resolve({
            visitedViews: [...state.visitedViews],
            cachedViews: [...state.cachedViews]
          })
        })
      }
    },
    delVisitedView: {
      root: true,
      handler ({ commit, state }:any, view:any) {
        return new Promise(resolve => {
          commit('DEL_VISITED_VIEW', view)
          resolve([...state.visitedViews])
        })
      }
    },
    delCachedView: {
      root: true,
      handler ({ commit, state }:any, view:any) {
        return new Promise(resolve => {
          commit('DEL_CACHED_VIEW', view)
          resolve([...state.cachedViews])
        })
      }
    },
    delOthersViews: {
      root: true,
      handler ({ dispatch, state }:any, view:any) {
        return new Promise(resolve => {
          dispatch('delOthersVisitedViews', view).then()
          dispatch('delOthersCachedViews', view).then()
          resolve({
            visitedViews: [...state.visitedViews],
            cachedViews: [...state.cachedViews]
          })
        })
      }
    },
    delOthersVisitedViews: {
      root: true,
      handler ({ commit, state }:any, view:any) {
        return new Promise(resolve => {
          commit('DEL_OTHERS_VISITED_VIEWS', view)
          resolve([...state.visitedViews])
        })
      }
    },
    delOthersCachedViews: {
      root: true,
      handler ({ commit, state }:any, view:any) {
        return new Promise(resolve => {
          commit('DEL_OTHERS_CACHED_VIEWS', view)
          resolve([...state.cachedViews])
        })
      }
    },
    delAllViews: {
      root: true,
      handler ({ dispatch, state }:any, view:any) {
        return new Promise(resolve => {
          dispatch('delAllVisitedViews', view).then()
          dispatch('delAllCachedViews', view).then()
          resolve({
            visitedViews: [...state.visitedViews],
            cachedViews: [...state.cachedViews]
          })
        })
      }
    },
    delAllVisitedViews: {
      root: true,
      handler ({ commit, state }:any) {
        return new Promise(resolve => {
          commit('DEL_ALL_VISITED_VIEWS')
          resolve([...state.visitedViews])
        })
      }
    },
    delAllCachedViews: {
      root: true,
      handler ({ commit, state }:any) {
        return new Promise(resolve => {
          commit('DEL_ALL_CACHED_VIEWS')
          resolve([...state.cachedViews])
        })
      }
    },
    updateVisitedView: {
      root: true,
      handler ({ commit }:any, view:any) {
        commit('UPDATE_VISITED_VIEW', view)
      }
    }
  }
}

export default tagsView
