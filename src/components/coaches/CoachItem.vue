<template>
  <div>
    <h2>{{ coach.name }}</h2>
    <label>${{ coach.rate }}/hour</label>
    <span class="skill" v-for="s in coach.skills" :key="s">{{ s }}</span>
    <hr />
    <button>Contact</button>
    <button>View Details</button>
  </div>
  <hr />
</template>

<script>
export default {
  props: {
    coach: {
      type: Object,
      required: true,
    },
  },
  emits: [],
  data: function () {
    return {};
  },
  methods: {},
  computed: {},
  watch: {},
};
</script>

<style scoped>
</style>
