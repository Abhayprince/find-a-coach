import { createStore } from "vuex";
import coachesModule from "./modules/coaches/index.js";
import rootMutations from "./rootMutations.js";
import rootActions from "./rootActions.js";
import rootGetters from "./rootGetters.js";

const store = createStore({
  modules: { coachesModule },
  state() {
    return {};
  },
  mutations: rootMutations,
  actions: rootActions,
  getters: rootGetters,
});

export default store;
