export default {
  namespaced: true,
  state: {
    actions: [],
  },
  mutations: {
    setAction(state, action) {
      state.actions = [action, ...state.actions];
    },
  },
  actions: {
    newAction({ commit }, params) {
      const action = {
        post_id: params.post.id,
        post_title: params.post.title,
        type: params.type,
        updated_at: new Date().toLocaleString(),
      };
      commit('setAction', action);
    },
  },
  getters: {
    actions(state) {
      return state.actions;
    },
  },
};
