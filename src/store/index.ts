import { createStore } from 'vuex'
interface UserProp {
  login: boolean
  username?: string
  avatar?: string
  id?: string
}
export interface GlobalDataProp {
  user: UserProp
}
const store = createStore<GlobalDataProp>({
  state: {
    user: {
      login: false,
      username: '',
      avatar: '',
      id: ''
    }
  },
  getters: {
    welcomeContent(state) {
      return `你好，${state.user.username}`
    }
  },
  mutations: {
    login(state, userInfo: object) {
      state.user = { ...state.user, ...userInfo }
    }
  }
})
export default store
