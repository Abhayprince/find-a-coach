const existsInArray = (arr1, arr2) => arr1.some((a1) => arr2.includes(a1));

const mutations = {
  addCoach(state, payload) {
    state.coaches.push(payload);
  },
  filterCoaches(state, skillsToFilterBy) {
    // console.log(
    //   JSON.stringify(skillsToFilterBy),
    //   skillsToFilterBy,
    //   !skillsToFilterBy,
    //   typeof skillsToFilterBy,
    //   skillsToFilterBy == {},
    //   skillsToFilterBy == []
    // );
    if (
      !skillsToFilterBy ||
      (typeof skillsToFilterBy === "object" &&
        (skillsToFilterBy === {} ||
          skillsToFilterBy === [] ||
          JSON.stringify(skillsToFilterBy) === "[]"))
    ) {
      state.filteredCoaches = [...state.coaches];
    } else {
      state.filteredCoaches = state.coaches.filter((c) =>
        existsInArray(c.skills, skillsToFilterBy)
      );
    }
  },
};

export default mutations;
