<template>
  <div class="vue">
    <div class="vue_text">
      <div class="vue_title">
        <div class="vue_line">façade</div>
      </div>
      <div class="vue_text1">건국대학교 건축대학 월간 건축매거진</div>
      <div class="vue_text2">#ku_facade #architecture #magazine</div>
    </div>
    <Pacade />
  </div>
</template>

<script>
import Pacade from "../Pacade/Pacade1.vue";
export default {
  components: { Pacade },
};
</script>

<style lang="scss" scoped>
.vue {
  width: 50vw;
  margin: 5vw 0 5vw 5vw;
  overflow: hidden;
  border-radius: 5%;
  box-shadow: 2px 2px 2px 2px #e8ebf2;
}
.vue_text {
  background: linear-gradient(to left, #fff, #e8ebf2);
  padding-top: 1vw;
}
.vue_title {
  margin-left: 5vw;
  border-radius: 15%/40%;
  width: 12vw;
  height: 4vw;
  box-shadow: 1px 1px 1px 1px #d3d3d3;
  overflow: hidden;
  text-align: center;
  background-color: #fff;
}
.vue_line {
  font-size: 0.7rem;
  position: relative;
  color: #000;
  top: 50%;
  transform: translatey(-50%);
}
.vue_text1 {
  padding: 1vw 2vw;
  font-size: 0.5rem;
  font-weight: bold;
  color: #000;
}
.vue_text2 {
  padding-left: 2vw;
  font-size: 0.4rem;
  color: #d3d3d3;
}
</style>