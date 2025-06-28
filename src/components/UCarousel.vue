<template>
  <div style="width: 100%; height: 100%;">
    <swiper
      :slidesPerView="3"
      :spaceBetween="30"
      :freeMode="true"
      :pagination="{
        clickable: true,
      }"
      :modules="modules"
      class="mySwiper"
    >
      <swiper-slide>Slide 1</swiper-slide>
      <swiper-slide>Slide 2</swiper-slide><swiper-slide>Slide 3</swiper-slide>
      <swiper-slide>Slide 4</swiper-slide><swiper-slide>Slide 5</swiper-slide>
      <swiper-slide>Slide 6</swiper-slide><swiper-slide>Slide 7</swiper-slide>
      <swiper-slide>Slide 8</swiper-slide><swiper-slide>Slide 9</swiper-slide>
    </swiper>
  </div>
</template>
<script>
  // Import Swiper Vue.js components
  import { Swiper, SwiperSlide } from 'swiper/vue';

  // Import Swiper styles
  import 'swiper/css';

  import 'swiper/css/free-mode';
  import 'swiper/css/pagination';

  // import required modules
  import { FreeMode, Pagination } from 'swiper/modules';

  export default {
    components: {
      Swiper,
      SwiperSlide,
    },
    setup() {
      return {
        modules: [FreeMode, Pagination],
      };
    },
  };
</script>

<style scoped lang="scss">

.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #f5eaea;
  height: 200px;

  /* Center slide text vertically */
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.mySwiper {
  width: 100%;
  /* deixe a altura automática para caber slides + paginação */
  height: auto; 
  padding-bottom: 40px; /* espaço para a paginação aparecer */
}

/* Força a paginação ficar no centro embaixo */
.mySwiper .swiper-pagination {
  bottom: 10px !important;
  text-align: center;
}

// Deep selector para penetrar o scoped e aplicar o estilo nos elementos filhos que estão fora do escopo
::v-deep(.swiper-pagination-bullet-active) {
  background-color: #e73700 !important;
  border-color: #fff !important;
}

</style>
