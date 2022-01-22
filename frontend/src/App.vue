<template>
  <div class="app">
    <router-view />
    <Bar />
  </div>
</template>

<script>
import Bar from "./components/layout/Bar.vue";

export default {
  components: {
    Bar,
  },
};
</script>