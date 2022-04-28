const getters = {
  coaches(state, getters) {
    console.log({ getters });
    return state.coaches;
  },
  skills: ({ skills }) => skills,
  filteredCoaches: ({ filteredCoaches }) => {
    console.log("getters");
    console.log(filteredCoaches);
    return filteredCoaches;
  },
};
export default getters;
