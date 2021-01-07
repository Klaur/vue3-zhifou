import { createStore } from 'vuex'
const store = createStore({
  state: {
    username: ''
  },
  mutations: {
    updateUsername(state) {
      state.username = 'klaur'
    }
  }
})
export default store
