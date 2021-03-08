import Vue from 'vue';
import Vuex from 'vuex';
import posts from './modules/posts';
import actions from './modules/actions';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    posts,
    actions,
  },
});
