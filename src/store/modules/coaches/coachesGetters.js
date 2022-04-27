const getters = {
  coaches(state, getters) {
    console.log({ getters });
    return state.coaches;
  },
};
export default getters;
