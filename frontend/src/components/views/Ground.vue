<template>
  <div class="ground">
    <MHeader />
    <Memo />
    <Footer />
  </div>
</template>

<script>
import MHeader from "../layout/MHeader.vue";
import Footer from "../layout/Footer.vue";
import Memo from "../layout/Memo.vue";

export default {
  components: { MHeader, Footer, Memo },
};
</script>