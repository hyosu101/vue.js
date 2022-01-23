<template>
  <div class="Pacade">
    <Carousel
      :navigation="true"
      :pagination="true"
      :startAuoPlay="true"
      :timeout="4000"
      class="carousel"
      v-slot="{ currentSlide }"
    >
      <Slide v-for="(slide, index) in carouselSlides" :key="index">
        <div v-show="currentSlide === index + 1" class="slide-info">
          <img :src="require(`../../assets/image/${slide}.jpg`)" alt="" />
        </div>
      </Slide>
    </Carousel>
  </div>
</template>

<script>
import Carousel from "./Carousel.vue";
import Slide from "./Slide.vue";

export default {
  components: { Carousel, Slide },
  setup() {
    const carouselSlides = ["slide0", "slide1", "slide2"];

    return { carouselSlides };
  },
};
</script>

<style lang="scss" scoped>
.Pacade {
  height: 100vw;

  .carousel {
    position: relative;
    max-width: 100vw;
    width: 100vw;

    .slide-info {
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      max-width: 100%;
      width: 100%;
      text-align: center;

      img {
        min-height: 100%;
        width: 100%;
        object-fit: cover;
      }
    }
  }
}
</style>