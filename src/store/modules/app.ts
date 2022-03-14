import Cookies from 'js-cookie'

const app:any = {
  namespaced: true,
  state: {
    sidebar: {
      opened: () => Cookies.get('sidebarStatus') ? !!Number(Cookies.get('sidebarStatus')) : true,
      withoutAnimation: false
    },
    device: 'desktop',
    size: Cookies.get('size') || 'medium'
  },
  mutations: {
    TOGGLE_SIDEBAR: (state:any) => {
      state.sidebar.opened = !state.sidebar.opened
      state.sidebar.withoutAnimation = false
      if (state.sidebar.opened) {
        Cookies.set('sidebarStatus', '1')
      } else {
        Cookies.set('sidebarStatus', '0')
      }
    },
    CLOSE_SIDEBAR: (state:any, withoutAnimation:number) => {
      Cookies.set('sidebarStatus', '0')
      state.sidebar.opened = false
      state.sidebar.withoutAnimation = withoutAnimation
    },
    TOGGLE_DEVICE: (state:any, device:string) => {
      state.device = device
    },
    SET_SIZE: (state:any, size:string) => {
      state.size = size
      Cookies.set('size', size)
    }
  },
  actions: {
    toggleSideBar ({ commit }:any) {
      commit('TOGGLE_SIDEBAR')
    },
    closeSideBar ({ commit }:any, { withoutAnimation }:any) {
      commit('CLOSE_SIDEBAR', withoutAnimation)
    },
    toggleDevice ({ commit }:any, { device }:any) {
      commit('TOGGLE_DEVICE', device)
    },
    handler ({ commit }:any, size:string) {
      commit('SET_SIZE', size)
    }
  }
}

export default app
