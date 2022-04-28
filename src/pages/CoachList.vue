<template>
  <div>
    <coach-list-header></coach-list-header>
  </div>
  <ul>
    <li v-for="c in filteredCoaches" :key="c.name">
      <CoachItem :coach="c" />
    </li>
  </ul>
</template>

<script>
import { mapGetters } from "vuex";
import CoachItem from "../components/coaches/CoachItem.vue";
import CoachListHeader from "../components/coaches/CoachListHeader.vue";

export default {
  components: { CoachItem, CoachListHeader },
  props: [],
  emits: [],
  data: function () {
    return {};
  },
  methods: {},
  computed: {
    ...mapGetters(["filteredCoaches", "skills"]),
  },
  watch: {},
};
</script>

<style scoped>
</style>
