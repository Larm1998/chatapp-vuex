import { COMMIT_UPDATE_USERNAME, COMMIT_SET_STATUS } from '@/common/mutation-types.js'
import { getUser } from '@/api'

const module = {
  namespaced: true,
  state() {
    return {
        username: 'Luis.Rangel'
    }
  },
  getters: {
    firstName: (state, getters, rootSate) => (c) => {
        return rootSate.profile.username.split(' ').join(c)
    }
  },
  mutations: {
    [COMMIT_UPDATE_USERNAME](state, username) {
      state.username = username;
    }
  },
  actions: {
    async updateUsername({ commit, state, rootState }, username) {
      console.log('update, username: ', state.username, username)
      const user = await getUser(1)
      console.log(user)
      console.log('status', rootState.status )
      if(state.username) {
        commit(COMMIT_SET_STATUS, 'active', { root: true })
      }
      commit(COMMIT_UPDATE_USERNAME, user.username)
    }
  },
}

export default module