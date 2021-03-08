export default {
  state: {
    posts: [],
    favorites: [],
  },
  mutations: {
    setPosts(state, posts) {
      state.posts = posts;
    },
    newFavorite(state, post) {
      state.posts = [...state.posts.filter((element) => element.id !== post.id)];
      state.favorites = [...state.favorites, post];
    },
    removeFavorite(state, post) {
      state.favorites = [...state.favorites.filter((element) => element.id !== post.id)];
      state.posts = [...state.posts, post].sort((element1, element2) => element1.id - element2.id);
    },
  },
  actions: {
    async fetchPosts({ commit }) {
      const response = await (await fetch('https://jsonplaceholder.typicode.com/posts')).json();
      commit('setPosts', response);
    },
    favotiteAddHandler({ commit, dispatch }, post = {}) {
      if (!post.id) {
        throw new Error('Incorrect data');
      }
      dispatch('actions/newAction', { post, type: 'added' }, { root: true });
      commit('newFavorite', post);
    },
    favotiteRemoveHandler({ commit, dispatch }, post = {}) {
      if (!post.id) {
        throw new Error('Incorrect data');
      }
      dispatch('actions/newAction', { post, type: 'removed' }, { root: true });
      commit('removeFavorite', post);
    },
  },
  getters: {
    posts(state) {
      return state.posts;
    },
    favorites(state) {
      return state.favorites;
    },
  },
};
