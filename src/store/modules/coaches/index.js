import coachesMutations from "./coachesMutations.js";
import coachesGetters from "./coachesGetters.js";
import coachesActions from "./coachesActions.js";

const initialCoaches = [
  {
    id: 1,
    name: "Abhay Prince",
    rate: 52,
    skills: ["Frontend", "Backend"],
  },
  { id: 2, name: "Krishna Prince", rate: 85, skills: ["Frontend"] },
  {
    id: 3,
    name: "Coach Singh",
    rate: 25,
    skills: ["Frontend", "Backend", "Career"],
  },
  {
    id: 4,
    name: "Prince Kumar",
    rate: 10,
    skills: ["Frontend", "Career"],
  },
  { id: 5, name: "Agam Kumar", rate: 18, skills: ["Backend"] },
];

export default {
  //    namespaced: true
  state() {
    return {
      skills: ["Frontend", "Backend", "Career"],
      coaches: initialCoaches,
      filteredCoaches: initialCoaches,
    };
  },
  mutations: coachesMutations,
  actions: coachesActions,
  getters: coachesGetters,
};
