import { GetterTree, ActionTree, MutationTree } from 'vuex'

export const state = () => ({
  theme: 'light' as string,
})

export type RootState = ReturnType<typeof state>

export const getters: GetterTree<RootState, RootState> = {
  getTheme({ theme }): String {
    return theme
  },
}

export const actions: ActionTree<RootState, RootState> = {
  setTheme({ commit }, payload) {
    commit('SET_THEME', payload)
  },
}

export const mutations: MutationTree<RootState> = {
  SET_THEME(state, payload) {
    state.theme = payload
  },
}
