import { createStore } from 'vuex'
import profile from '@/store/modules/profile'
import { COMMIT_UPDATE_USERNAME } from '@/common/mutation-types.js'
import { getUser } from '@/api'

const store = createStore({
  state() {
    return {}
  },
  getters: {
    firstName: (state, getters, rootSate) => (c) => {
        return rootSate.profile.username.split(' ').join(c)
    }
  },
  mutations: {},
  actions: {},
  modules: {
    profile
  }
})

export default store