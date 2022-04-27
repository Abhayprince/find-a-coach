import coachesMutations from "./coachesMutations.js";
import coachesGetters from "./coachesGetters.js";
import coachesActions from "./coachesActions.js";

export default {
  //    namespaced: true
  state() {
    return {
      coaches: [{ name: "Abhay Prince" }],
    };
  },
  mutations: coachesMutations,
  actions: coachesActions,
  getters: coachesGetters,
};
