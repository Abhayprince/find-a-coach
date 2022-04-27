<template>
  <div>CoachList</div>
  <ul>
    <li v-for="c in coaches" :key="c.name">
      {{ c.name }}
    </li>
  </ul>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  props: [],
  emits: [],
  data: function () {
    return {};
  },
  methods: {},
  computed: {
    ...mapGetters(["coaches"]),
  },
  watch: {},
};
</script>

<style scoped>
</style>
