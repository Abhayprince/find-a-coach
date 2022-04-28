<template>
  <h1>Coaches</h1>
  <label v-for="skill in skills" :key="skill" :for="skill">
    <input
      type="checkbox"
      name="skill-chk"
      :value="skill"
      v-model="selectedSkills"
      :id="skill"
    />
    {{ skill }}
  </label>
  <button @click="filterCoaches()">Filter</button>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  props: [],
  emits: [],
  data: function () {
    return {
      selectedSkills: [],
    };
  },
  methods: {
    //...mapMutations(['filterCoaches'])
    filterCoaches() {
      console.log(this.selectedSkills);
      this.$store.commit("filterCoaches", this.selectedSkills || []);
    },
  },
  computed: {
    ...mapGetters(["skills"]),
  },
  watch: {},
};
</script>

<style scoped>
</style>
