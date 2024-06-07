import { createStore } from 'vuex'

export default createStore({
  state: {
  },
  getters: {
  },
  mutations: {
    expandCursor() {
      document.getElementById('cursor').classList.add('scale-cursor')
    },
    expandCursorLeave() {
      document.getElementById('cursor').classList.remove('scale-cursor')
    }
  },
  actions: {
  },
  modules: {
  }
})
