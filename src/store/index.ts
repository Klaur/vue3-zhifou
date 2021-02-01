import { createStore } from 'vuex'
import axios from '@/utils/axios'
import Cookies from 'js-cookie'
interface UserProp {
  username?: string
  avatar?: string
  id?: string
}
export interface GlobalDataProp {
  user: UserProp
  login: boolean
  loading: boolean
}
const store = createStore<GlobalDataProp>({
  state: {
    login: false,
    user: {
      username: '',
      avatar: '',
      id: ''
    },
    loading: false
  },
  getters: {},
  actions: {
    async login(store, params) {
      const res = await axios.post('/user/login', params)
      if (res) {
        store.commit('loginAndUpdate', res)
      }
      return res
    },
    async checkUser(store, toLoginPage: boolean) {
      const res = await axios.get('/user/check', { params: { onLoadingPage: toLoginPage } })
      if (res) {
        store.commit('updateUserInfo', res)
      }
      return res
    }
  },
  mutations: {
    loginAndUpdate(state: any, auth: any): void {
      // state.login = true
      Cookies.set('access-token', auth.token, { expires: auth.expires, path: '' })
    },
    updateUserInfo(state: any, info) {
      state.login = true
      state.user.username = info.username
    },
    setLoading(state, loading: boolean) {
      state.loading = loading
    },
    logout(state) {
      state.login = false
      Cookies.set('access-token', '', { expires: 0 })
    }
  }
})
export default store
