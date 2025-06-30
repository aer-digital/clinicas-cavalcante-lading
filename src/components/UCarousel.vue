<template>
  <div style="width: 100%; height: 100%;">
    <swiper :slidesPerView="5" :spaceBetween="10" :freeMode="true" :pagination="{ clickable: true }" :modules="modules"
      class="mySwiper">
      <swiper-slide v-for="(slide, index) in slides" :key="index" @click="toggleSlide(index)">
        <div class="swiper-slide-in" :class="{ 'selected': selectedSlide === index }">
          <div v-if="selectedSlide === index">
            <p>{{ slide.details }}</p>
            <button @click.stop="closeSlide">Fechar</button>
          </div>
          <div v-else class="slide-title">
            <h4>{{ slide.title }}</h4>
          </div>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>



<script>
import { ref } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode, Pagination } from 'swiper/modules';

export default {
  components: { Swiper, SwiperSlide },
  setup() {
    const slides = [
      {
        title: 'Cardiologia',
        details: 'A Cardiologia é a especialidade médica dedicada ao diagnóstico e tratamento das doenças que acometem o coração e todo o sistema circulatório. Isso inclui problemas como hipertensão, insuficiência cardíaca, arritmias, infartos e cuidados preventivos para a saúde cardiovascular.',
      },
      {
        title: 'Psiquiatria',
        details: 'A Psiquiatria é a especialidade médica que se ocupa do diagnóstico, tratamento e prevenção de doenças mentais, emocionais e comportamentais. Entre as condições tratadas estão a ansiedade, depressão, transtorno bipolar, esquizofrenia e outros distúrbios psicológicos.',
      },
      {
        title: 'Otorrinolaringologia',
        details: 'A Otorrinolaringologia trata das condições que afetam o ouvido, nariz e garganta. Entre as áreas de atuação estão o tratamento de sinusite, amigdalite, problemas auditivos, distúrbios da voz e dificuldades respiratórias.',
      },
      {
        title: 'Pediatria',
        details: 'A Pediatria é a especialidade médica que cuida da saúde de crianças e adolescentes, desde o nascimento até a adolescência. Abrange o acompanhamento do crescimento, desenvolvimento, vacinação, prevenção e tratamento de doenças comuns da infância.',
      },
      {
        title: 'Ortopedia',
        details: 'A Ortopedia é a área médica responsável pelo estudo, diagnóstico e tratamento das doenças e lesões relacionadas ao sistema musculoesquelético, que inclui ossos, articulações, ligamentos, músculos e tendões. Ela trata desde fraturas até condições crônicas, como a artrose.',
      },
      {
        title: 'Oftalmologia',
        details: 'A Oftalmologia é a especialidade médica que cuida da saúde dos olhos. Engloba o diagnóstico e tratamento de doenças oculares, como catarata, glaucoma, problemas de refração (miopia, hipermetropia, astigmatismo) e doenças da retina.',
      },
      {
        title: 'Nutrição',
        details: 'A Nutrição é a ciência que estuda os alimentos e como eles impactam a saúde e o bem-estar. O nutricionista é responsável por planejar dietas, orientar mudanças alimentares e tratar condições relacionadas à alimentação, como obesidade, diabetes e intolerâncias alimentares.',
      },
      {
        title: 'Hematologista',
        details: 'A Hematologia é a especialidade médica que se dedica ao estudo do sangue, tecidos produtores e órgãos relacionados. Ela trata anemias, distúrbios de coagulação, leucemias, linfomas, doenças autoimunes do sangue e muito mais.',
      },
      {
        title: 'Ginecologia',
        details: 'A Ginecologia é a área da medicina voltada para a saúde da mulher. Inclui o diagnóstico e tratamento de doenças do sistema reprodutor feminino, cuidados com o ciclo menstrual, saúde hormonal, menopausa, prevenção de cânceres ginecológicos e planejamento familiar.',
      },
      {
        title: 'Gastrenterologia',
        details: 'A Gastrenterologia é a especialidade médica que estuda o sistema digestivo, tratando doenças que afetam o esôfago, estômago, intestino, fígado, pâncreas e vesícula biliar. Exemplos incluem gastrite, refluxo, úlceras, síndrome do intestino irritável e hepatite.',
      },
      {
        title: 'Endocrinologia',
        details: 'A Endocrinologia estuda as glândulas endócrinas e seus hormônios. Os endocrinologistas tratam condições como diabetes, obesidade, doenças da tireoide, alterações hormonais e distúrbios do crescimento.',
      },
      {
        title: 'Dermatologia',
        details: 'A Dermatologia é a especialidade médica que se ocupa do diagnóstico e tratamento das doenças da pele, cabelo e unhas. Inclui condições como acne, psoríase, dermatites, alopecia e câncer de pele, além de procedimentos estéticos.',
      },
      {
        title: 'Clínico Geral',
        details: 'O Clínico Geral é o médico que realiza consultas gerais, oferecendo diagnóstico inicial, orientação e tratamento de condições de saúde diversas. Ele também atua no encaminhamento para especialistas quando necessário.',
      },
      {
        title: 'Cirurgia Vascular',
        details: 'A Cirurgia Vascular trata de doenças dos vasos sanguíneos e linfáticos. Isso inclui varizes, trombose, aneurismas, má circulação e outras condições que afetam o sistema vascular.',
      },
    ];

    const selectedSlide = ref(null);

    function toggleSlide(index) {
      selectedSlide.value = selectedSlide.value === index ? null : index;
    }

    function closeSlide() {
      selectedSlide.value = null;
    }

    return {
      slides,
      selectedSlide,
      toggleSlide,
      closeSlide,
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
  background: #418e7147;
  height: 200px;

  /* Center slide text vertically */
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
}

.swiper-slide-in {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: start;
}

.swiper-slide-in.selected {
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
  padding-bottom: 40px;
  /* espaço para a paginação aparecer */
}

/* Força a paginação ficar no centro embaixo */
.mySwiper .swiper-pagination {
  bottom: 10px !important;
  text-align: center;
}

// Deep selector para penetrar o scoped e aplicar o estilo nos elementos filhos que estão fora do escopo
::v-deep(.swiper-pagination-bullet-active) {
  background-color: #418E71 !important;
  border-color: #fff !important;
}
</style>
