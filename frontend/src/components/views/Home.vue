<template>
  <div class="home">
    <Header />
    <router-link to="/Pacade">
      <Pacade />
    </router-link>
    <Footer />
  </div>
</template>

<script>
import Header from "../layout/Header.vue";
import Pacade from "../layout/Hmpacade.vue";
import Footer from "../layout/Footer.vue";

export default {
  components: { Header, Pacade, Footer },
};
</script>