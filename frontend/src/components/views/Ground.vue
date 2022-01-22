<template>
  <div class="ground">
    <Header />
    <Memo />
    <Footer />
  </div>
</template>

<script>
import Header from "../layout/Header.vue";
import Footer from "../layout/Footer.vue";
import Memo from "../Memo.vue";

export default {
  components: { Header, Footer, Memo },
};
</script>