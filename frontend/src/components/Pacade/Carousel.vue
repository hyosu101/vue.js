<template>
  <div class="carousel">
    <slot :currentSlide="currentSlide" />

    <!-- navigation -->
    <div v-if="navEnabled" class="navigate">
      <div class="toggle-page left">
        <i @click="prevSlide" class="fas fa-chevron-left"></i>
      </div>
      <div class="toggle-page right">
        <i @click="nextSlide" class="fas fa-chevron-right"></i>
      </div>
    </div>

    <!-- Pagination -->
    <div v-if="paginationEnabled" class="pagination">
      <span
        @click="GoToSlide(index)"
        v-for="(slide, index) in getSlideCount"
        :key="index"
        :class="{ active: index + 1 === currentSlide }"
      >
      </span>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";

export default {
  props: ["startAuoPlay", "timeout", "navigation", "pagination"],
  setup(props) {
    const currentSlide = ref(1);
    const getSlideCount = ref(null);
    const autoPlayEnabled = ref(
      props.startAuoPlay === undefined ? true : props.startAuoPlay
    );
    const timeoutDuration = ref(
      props.timeout === undefined ? 4000 : props.timeout
    );
    const paginationEnabled = ref(
      props.pagination === undefined ? true : props.pagination
    );
    const navEnabled = ref(
      props.navigation === undefined ? true : props.navigation
    );

    //next slide
    const nextSlide = () => {
      if (currentSlide.value === getSlideCount.value) {
        currentSlide.value = 1;
        return;
      }
      currentSlide.value += 1;
    };

    //prev slide
    const prevSlide = () => {
      if (currentSlide.value === 1) {
        currentSlide.value = 1;
        return;
      }
      currentSlide.value -= 1;
    };

    const GoToSlide = (index) => {
      currentSlide.value = index + 1;
    };

    //autoplay
    const autoPlay = () => {
      setInterval(() => {
        nextSlide();
      }, timeoutDuration.value);
    };

    if (autoPlayEnabled.value) {
      autoPlay();
    }

    onMounted(() => {
      getSlideCount.value = document.querySelectorAll(".slide").length;
    });

    return {
      currentSlide,
      nextSlide,
      prevSlide,
      getSlideCount,
      GoToSlide,
      paginationEnabled,
      navEnabled,
    };
  },
};
</script>

<style lang="scss">
.navigate {
  padding: 0 1vw;
  height: 100%;
  width: 100%;
  top: 22.5vh;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;

  .toggle-page {
    display: flex;
    flex: 1;
  }

  .right {
    justify-content: flex-end;
  }

  i {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    background: #e07e66;
    color: #fff;
  }
}

.pagination {
  position: absolute;
  top: 44vh;
  width: 100%;
  display: flex;
  gap: 16px;
  text-align: center;
  justify-content: center;

  span {
    cursor: pointer;
    width: 4vw;
    height: 4vw;
    border-radius: 50%;
    background-color: #fff;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  }

  .active {
    background-color: #e07e66;
  }
}
</style>