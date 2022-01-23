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

<style lang="sass">
*
  font-family: "Noto Sans KR", sans-serif
  margin: 0px
  padding: 0px
  text-decoration: none
  border-collapse: collapse
  color: red; /* 수정시 눈에 띄기 위해*/
  list-style: none
</style>