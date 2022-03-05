import { createStore } from 'vuex'

interface UserInfo {
  _id:string;
  name?:string;
  pic?:string;
  isVip?:number;
}

export default createStore({
  state: {
    sid: '',
    isLogin: false,
    token: '',
    userInfo: {} as UserInfo,
    isHide: false,
    num: 0
  },
  mutations: {
    SetSid (state, value) {
      state.sid = value
    },
    SetToken (state, value) {
      state.token = value
      localStorage.setItem('token', value)
    },
    SetUserInfo (state, value) {
      if (value === '') return
      state.userInfo = value
      localStorage.setItem('userInfo', JSON.stringify(value))
    },
    SetIsLogin (state, value) {
      state.isLogin = value
    },
    SetHide (state, value) {
      state.isHide = value
    },
    SetMessage (state, value) {
      state.num = value
    }
  },
  getters: {
    token: (state) => state.token,
    uid: (state) => state.userInfo ? state.userInfo._id : ''
  },
  actions: {
    message ({ commit }, msg) {
      commit('setMessage', msg)
    }
  }
})
