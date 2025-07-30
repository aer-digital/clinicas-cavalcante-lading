<script setup>
import { ref, computed, onMounted } from 'vue';
import U3Carousel from '../../components/UCarousel.vue';
import campanhas from '../../assets/data/campanhas.json';

onMounted(() => {
  form.value.token = Date.now(); // marca o tempo de renderização do formulário
  setTimeout(() => {
    $('#modalCampanha').modal('show');
  }, 1000);
});

// Pega a campanha correspondente ao mês atual
const mesAtualIndex = new Date().getMonth()
const campanhaDoMes = computed(() => campanhas[mesAtualIndex])

const slidesConsulta = [
  {
    title: 'Cardiologia',
    details: 'Na nossa clínica, o atendimento em cardiologia é focado no cuidado integral do coração e do sistema cardiovascular. Oferecemos consultas, exames preventivos e tratamentos de condições como hipertensão, insuficiência cardíaca, arritmias e doenças coronarianas. Estamos aqui para cuidar da sua saúde cardíaca de forma personalizada.',
  },
  {
    title: 'Psiquiatria',
    details: 'O atendimento em psiquiatria é centrado no bem-estar mental e emocional dos nossos pacientes. Nossos profissionais estão preparados para diagnosticar e tratar condições como depressão, ansiedade, transtorno bipolar e esquizofrenia, sempre com empatia e uma abordagem humanizada.',
  },
  {
    title: 'Otorrino<br>laringologia',
    details: 'Oferecemos atendimento especializado em otorrinolaringologia, cuidando de problemas no ouvido, nariz e garganta. Nossa equipe trata condições como sinusite, alergias respiratórias, perda auditiva e apneia do sono, garantindo diagnósticos precisos e tratamentos eficazes.',
  },
  {
    title: 'Pediatria',
    details: 'O atendimento pediátrico na nossa clínica é voltado para o cuidado integral de crianças e adolescentes. Nossos pediatras acompanham o desenvolvimento físico e emocional, oferecendo prevenção, diagnóstico e tratamento de diversas condições, sempre em um ambiente acolhedor.',
  },
  {
    title: 'Ortopedia',
    details: 'Na área de ortopedia, nossos especialistas cuidam de doenças e lesões musculoesqueléticas. Atendemos pacientes com fraturas, dores crônicas, lesões esportivas e doenças como artrose, oferecendo tratamentos modernos e individualizados.',
  },
  {
    title: 'Oftalmologia',
    details: 'Nosso serviço de oftalmologia é dedicado à saúde dos olhos. Realizamos consultas, exames e tratamentos para miopia, astigmatismo, glaucoma e outras condições oculares, garantindo um acompanhamento completo e eficaz para a melhor qualidade de visão.',
  },
  {
    title: 'Nutrição',
    details: 'Oferecemos atendimento nutricional personalizado para promover uma alimentação saudável e equilibrada. Nossos nutricionistas elaboram planos alimentares específicos para prevenção de doenças, controle de peso e melhoria do bem-estar geral.',
  },
  {
    title: 'Hematologia',
    details: 'Na hematologia, nosso atendimento abrange o diagnóstico e tratamento de condições relacionadas ao sangue, como anemias, leucemias e distúrbios de coagulação. Trabalhamos com equipamentos modernos e protocolos seguros para garantir o melhor cuidado.',
  },
  {
    title: 'Ginecologia',
    details: 'Nosso atendimento ginecológico é voltado para a saúde integral da mulher, abordando prevenção, diagnóstico e tratamento de condições relacionadas ao sistema reprodutor. Oferecemos orientação em todas as fases da vida, sempre com acolhimento e cuidado.',
  },
  {
    title: 'Gastren<br>terologia',
    details: 'Na área de gastrenterologia, cuidamos da saúde do sistema digestivo, tratando condições como gastrite, refluxo e doenças inflamatórias intestinais. Oferecemos consultas e exames especializados para garantir o melhor cuidado ao paciente.',
  },
  {
    title: 'Endocrinologia',
    details: 'O atendimento em endocrinologia na nossa clínica é focado em tratamentos para diabetes, obesidade, problemas hormonais e disfunções da tireoide. Priorizamos uma abordagem individualizada para melhorar a qualidade de vida dos nossos pacientes.',
  },
  {
    title: 'Dermatologia',
    details: 'Na dermatologia, cuidamos da saúde da pele, cabelos e unhas. Tratamos condições como acne, psoríase e alergias cutâneas, além de realizarmos procedimentos estéticos e preventivos para o bem-estar do paciente.',
  },
  {
    title: 'Clínico Geral',
    details: 'Nosso atendimento clínico geral é voltado para a avaliação inicial e o acompanhamento integral dos pacientes. Oferecemos diagnóstico, tratamento e, se necessário, encaminhamento para outras especialidades, sempre com foco na saúde preventiva.',
  },
  {
    title: 'Cirurgia Vascular',
    details: 'Na cirurgia vascular, oferecemos atendimento especializado para o diagnóstico e tratamento de condições como varizes, tromboses e aneurismas. Utilizamos técnicas modernas para garantir segurança e eficácia nos procedimentos.',
  },
];
const slidesExame = [
  {
    title: 'Laboratório de Analises Clínicas',
    details: '',
  },
  {
    title: 'Colposcopia',
    details: 'A colposcopia é um exame ginecológico que permite a visualização detalhada do colo',
  },
  {
    title: 'Vulvoscopia',
    details: '',
  },
  {
    title: 'Ultrasonografia',
    details: '',
  },
  {
    title: 'Papanicolau',
    details: '',
  },
  {
    title: 'Laringoscopia',
    details: '',
  },
  {
    title: 'Nasofibro<br>laringoscopia',
    details: '',
  },
];
const slidesEstetica = [
  {
    title: 'Estética Facial',
    details: '',
  },
  {
    title: 'Estética Corporal',
    details: '',
  },
  {
    title: 'Criolipólise',
    details: '',
  },
  {
    title: 'Tratamento Ozonio Terapia',
    details: '',
  },
];

// Antigo código comentado para conveniosSindicatos - portfolio carousel
// const conveniosSindicatos = [
//   { title: "Awesome Project 101", category: "Marketing", image: "../../assets/images/portfolio-01.jpg", link: "#" },
//   { title: "Awesome Project 102", category: "Branding", image: "../../assets/images/portfolio-04.jpg", link: "#" },
//   { title: "Awesome Project 103", category: "Consulting", image: "../../assets/images/portfolio-02.jpg", link: "#" },
//   { title: "Awesome Project 104", category: "Artwork", image: "../../assets/images/portfolio-05.jpg", link: "#" },
//   { title: "Awesome Project 105", category: "Branding", image: "../../assets/images/portfolio-03.jpg", link: "#" },
//   { title: "Awesome Project 106", category: "Artwork", image: "../../assets/images/portfolio-06.jpg", link: "#" },
// ];
// const grouped = computed(() => {
//   const groups = [];
//   for (let i = 0; i < conveniosSindicatos.length; i += itemsPerGroup) {
//     groups.push(conveniosSindicatos.slice(i, i + itemsPerGroup));
//   }
//   return groups;
// });

const formElement = ref(null)
const form = ref({
  name: '',
  cidade: '',
  estado: '',
  email: '',
  option: '',
  empresa: '', // campo honeypot para evitar spam
  token: '',
})
const toBase64 = (file) => new Promise((resolve, reject) => {
  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = () => resolve(reader.result); // inclui o data:mimetype;base64,...
  reader.onerror = (error) => reject(error);
});

const file = ref(null)
const fileInput = ref(null)

const itemsPerGroup = 2;
const grouped = computed(() => {
  const groups = [];
  for (let i = 0; i < 22; i += itemsPerGroup) {
    groups.push(
      [{ title: `Project ${i}`, category: "Convênio", image: `assets/img/convenios/${i}.jpg`, link: "#" },
      { title: `Project ${i + 1}`, category: "Convênio", image: `assets/img/convenios/${i + 1}.jpg`, link: "#" }]
    );
  }
  for (let i = 0; i < 12; i += itemsPerGroup) {
    groups.push(
      [{ title: `Project ${i}`, category: "Sindicato", image: `assets/img/sindicatos/${i}.jpg`, link: "#" },
      { title: `Project ${i + 1}`, category: "Sindicato", image: `assets/img/sindicatos/${i + 1}.jpg`, link: "#" }]
    );
  }

  return groups;
});


const handleDrop = (e) => {
  const droppedFile = e.dataTransfer.files[0]
  if (droppedFile.size > 10 * 1024 * 1024) {
    alert('Arquivo excede 10MB.')
    return
  }
  file.value = droppedFile
}

const handleFileChange = (e) => {
  const selectedFile = e.target.files[0]
  if (selectedFile.size > 10 * 1024 * 1024) {
    alert('Arquivo excede 10MB.')
    return
  }
  file.value = selectedFile
}

const sendEmail = async () => {
  try {
    const rawFile = file.value; // ou só `file` se for uma variável normal
    if (!rawFile) {
      throw new Error("Arquivo não selecionado");
    }

    console.log("file:", rawFile);
    console.log("name:", rawFile.name);
    console.log("type:", rawFile.type);

    const fileBase64 = await toBase64(rawFile);

    const payload = {
      from_name: form.value.name,
      from_email: form.value.email,
      option: form.value.option,
      cidade: form.value.cidade,
      estado: form.value.estado,
      file: fileBase64,
      filename: file.value.name,
      mimetype: file.value.type,
      empresa: form.value.empresa, // honeypot
      token: form.value.token,     // timestamp
    };

    console.log("Payload final:", payload);

    await fetch("https://us-central1-aer-hosting-landings.cloudfunctions.net/sendEmail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    alert("Email enviado com sucesso!");
  } catch (err) {
    console.error("Erro ao enviar email:", err);
    alert("Erro ao enviar email.");
  }
};

const estaDentroDoHorarioComercial = computed(() => {
  const agora = new Date();
  const diaSemana = agora.getDay(); // 0 = domingo, 1 = segunda, ..., 6 = sábado
  const hora = agora.getHours();
  const minuto = agora.getMinutes();

  const ehDiaUtil = diaSemana >= 1 && diaSemana <= 5;
  const ehHorarioUtil = (hora > 8 && hora < 18) || (hora === 8 && minuto >= 0) || (hora === 18 && minuto === 0);

  return ehDiaUtil && ehHorarioUtil;
});

</script>


<template>
  <!-- ***** Preloader Start ***** -->
  <div id="js-preloader" class="js-preloader">
    <div class="preloader-inner">
      <span class="dot"></span>
      <div class="dots">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  </div>
  <!-- ***** Preloader End ***** -->

  <!-- ***** Header Area Start ***** -->
  <header class="header-area header-sticky wow slideInDown" data-wow-duration="0.75s" data-wow-delay="0s">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <nav class="main-nav">
            <!-- ***** Logo Start ***** -->
            <a href="index.html" class="logo">
              <img src="../../assets/images/logo.png" alt="">
            </a>
            <!-- ***** Logo End ***** -->
            <!-- ***** Menu Start ***** -->
            <ul class="nav">
              <li class="scroll-to-section"><a href="#top" class="active">Home</a></li>
              <li class="scroll-to-section"><a href="#service">Serviços</a></li>
              <li class="scroll-to-section"><a href="#about">Nossa clínica</a></li>
              <li class="scroll-to-section"><a href="#plans">Planos</a></li>
              <li class="scroll-to-section"><a href="#portfolio">Portfólio</a></li>
              <li class="scroll-to-section"><a href="#contact">Fale conosco</a></li>
              <li class="scroll-to-section">
                <div class="main-blue-button"><a href="#wa.me/+551333045401" target="_blank">Whats App</a></div>
              </li>
            </ul>
            <a class='menu-trigger'>
              <span>Menu</span>
            </a>
            <!-- ***** Menu End ***** -->
          </nav>
        </div>
      </div>
    </div>
  </header>
  <!-- ***** Header Area End ***** -->

  <div class="main-banner wow fadeIn" id="top" data-wow-duration="1s" data-wow-delay="0.5s">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="row">
            <div class="col-lg-6 align-self-center">
              <div class="left-content header-text wow fadeInLeft" data-wow-duration="1s" data-wow-delay="1s">
                <div class="row">
                  <!-- <div class="col-lg-4 col-sm-4">
                    <div class="info-stat">
                      <h6>Agency Status:</h6>
                      <h4>Ready Work</h4>
                    </div>
                  </div>
                  <div class="col-lg-4 col-sm-4">
                    <div class="info-stat">
                      <h6>Price:</h6>
                      <h4>$720/Month</h4>
                    </div>
                  </div>
                  <div class="col-lg-4 col-sm-4">
                    <div class="info-stat">
                      <h6>Schedules</h6>
                      <h4>$450/Meeting</h4>
                    </div>
                  </div> -->
                  <div class="col-lg-12">
                    <h2>Centro de Especialidades Médicas</h2>
                  </div>
                  <div class="col-lg-12">
                    <div class="main-green-button scroll-to-section">
                      <a href="#contact">Fale com nossos atendentes</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="right-image wow fadeInRight" data-wow-duration="1s" data-wow-delay="0.5s">
                <img src="../../assets/images/doctor_green.png" alt="">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div id="services" class="our-services section">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-9">
          <div class="section-heading wow bounceIn" data-wow-duration="1s" data-wow-delay="0.2s">
            <h6>Cuidando de você, com qualidade e coração</h6>
            <h2>Desde 2011, o Centro Médico <span>Cavalcante</span> cuida da <em>saúde</em> da nossa região</h2>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="section-heading wow bounceIn" data-wow-duration="1s" data-wow-delay="0.2s">
            <p>Com médicos especializados,
              exames de ponta e muita dedicação ao bem-estar e à prevenção da saúde dos nossos pacientes. Aqui, todo
              mundo é tratado com respeito e acolhimento.<br /><br />

              Além de atender vários convênios, fomos os pioneiros no Guarujá a oferecer consultas populares. Isso
              facilita para quem não tem plano de saúde, mas precisa de um médico de confiança.

              Em maio de 2017, abrimos nossa segunda unidade em Praia Grande, com 14 médicos atendendo em diferentes
              especialidades. Hoje, temos uma parceria com a Prefeitura e cuidamos de muitos pacientes do SUS.

              Já em 2021, inauguramos nossa segunda unidade no Guarujá para atender ainda mais pessoas, gerar empregos e
              trazer novos médicos para a cidade.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="container-fluid">
      <div class="row">
        <div class="col-lg-4" data-bs-toggle="modal" data-bs-target="#modalConsulta" style="cursor: pointer;">
          <div class="service-item wow bounceInUp" data-wow-duration="1s" data-wow-delay="0.3s">
            <div class="row">
              <div class="col-lg-4">
                <div class="icon">
                  <img src="../../assets/images/service-icon-01.png" alt="">
                </div>
              </div>
              <div class="col-lg-8">
                <div class="right-content">
                  <h4>Consultas Médicas</h4>
                  <p>Consultas com profissionais qualificados e prontos para cuidar de você.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-4" data-bs-toggle="modal" data-bs-target="#modalExame" style="cursor: pointer;">
          <div class="service-item wow bounceInUp" data-wow-duration="1s" data-wow-delay="0.4s">
            <div class="row">
              <div class="col-lg-4">
                <div class="icon">
                  <img src="../../assets/images/service-icon-02.png" alt="">
                </div>
              </div>
              <div class="col-lg-8">
                <div class="right-content">
                  <h4>Exames Laboratoriais</h4>
                  <p>Exames laboratoriais completos para diagnósticos seguros e precisos.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-4" data-bs-toggle="modal" data-bs-target="#modalEstetica" style="cursor: pointer;">
          <div class="service-item wow bounceInUp" data-wow-duration="1s" data-wow-delay="0.5s">
            <div class="row">
              <div class="col-lg-4">
                <div class="icon">
                  <img src="../../assets/images/service-icon-03.png" alt="">
                </div>
              </div>
              <div class="col-lg-8">
                <div class="right-content">
                  <h4>Estética</h4>
                  <p>Serviços de estética para realçar sua beleza e promover bem-estar.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- <div id="features" class="features section">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="features-content">
            <div class="row">
              <div class="col-lg-3">
                <div class="features-item first-feature wow fadeInUp" data-wow-duration="1s" data-wow-delay="0s">
                  <div class="first-number number">
                    <h6>01</h6>
                  </div>
                  <div class="icon"></div>
                  <h4>Reach Out</h4>
                  <div class="line-dec"></div>
                  <p>This HTML5 template is based on Bootstrap 5 CSS. You are free to customize anything.</p>
                </div>
              </div>
              <div class="col-lg-3">
                <div class="features-item second-feature wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.2s">
                  <div class="second-number number">
                    <h6>02</h6>
                  </div>
                  <div class="icon"></div>
                  <h4>Develop a Strategy</h4>
                  <div class="line-dec"></div>
                  <p>Lorem ipsum dolor sit ameter consectetur adipiscing li elit sed do eiusmod.</p>
                </div>
              </div>
              <div class="col-lg-3">
                <div class="features-item first-feature wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.4s">
                  <div class="third-number number">
                    <h6>03</h6>
                  </div>
                  <div class="icon"></div>
                  <h4>Implementation</h4>
                  <div class="line-dec"></div>
                  <p>If this template is useful for your website, please consider to <a rel="nofollow" href="https://www.paypal.me/templatemo" target="_blank">support us</a> a little.</p>
                </div>
              </div>
              <div class="col-lg-3">
                <div class="features-item second-feature last-features-item wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.6s">
                  <div class="fourth-number number">
                    <h6>04</h6>
                  </div>
                  <div class="icon"></div>
                  <h4>Analyze the result</h4>
                  <div class="line-dec"></div>
                  <p>Below circular progress bar animation supports those CSS values 10, 20, 30, till 100.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-12">
          <div class="skills-content">
            <div class="row">
              <div class="col-lg-3">
                <div class="skill-item wow fadeIn" data-wow-duration="1s" data-wow-delay="0s">
                  <div class="progress" data-percentage="80">
                    <span class="progress-left">
                      <span class="progress-bar"></span>
                    </span>
                    <span class="progress-right">
                      <span class="progress-bar"></span>
                    </span>
                    <div class="progress-value">
                      <div>
                        80%<br>
                        <span>HTML/CSS/JS</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-3">
                <div class="skill-item wow fadeIn" data-wow-duration="1s" data-wow-delay="0.2s">
                  <div class="progress" data-percentage="60">
                    <span class="progress-left">
                      <span class="progress-bar"></span>
                    </span>
                    <span class="progress-right">
                      <span class="progress-bar"></span>
                    </span>
                    <div class="progress-value">
                      <div>
                        60%<br>
                        <span>Wordpress</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-3">
                <div class="skill-item wow fadeIn" data-wow-duration="1s" data-wow-delay="0.4s">
                  <div class="progress" data-percentage="90">
                    <span class="progress-left">
                      <span class="progress-bar"></span>
                    </span>
                    <span class="progress-right">
                      <span class="progress-bar"></span>
                    </span>
                    <div class="progress-value">
                      <div>
                        90%<br>
                        <span>Marketing</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-3">
                <div class="skill-item last-skill-item wow fadeIn" data-wow-duration="1s" data-wow-delay="0.6s">
                  <div class="progress" data-percentage="70">
                    <span class="progress-left">
                      <span class="progress-bar"></span>
                    </span>
                    <span class="progress-right">
                      <span class="progress-bar"></span>
                    </span>
                    <div class="progress-value">
                      <div>
                        70%<br>
                        <span>Photoshop</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div> -->

  <div id="about" class="about-us section">
    <div class="container">
      <div class="row">
        <div class="col-lg-6">
          <div class="left-image wow fadeInLeft" data-wow-duration="1s" data-wow-delay="0.5s">
            <img src="/assets/img/via_saude_bg.png" alt="">
          </div>
        </div>
        <div class="col-lg-6 align-self-center wow fadeInRight" data-wow-duration="1s" data-wow-delay="0.5s">
          <div class="section-heading">
            <h6>VIA SAÚDE</h6>
            <h2>Cartão de Descontos Familiar<br><em>Economia</em> &amp; <span>Benefícios</span> em um só lugar</h2>
          </div>
          <div class="row">
            <div class="col-lg-4 col-sm-4 about-div">
              <div class="about-item">
                <h4><span>R$</span><br>29,90</h4>
                <h6>Planos a partir</h6>
              </div>
            </div>
            <div class="col-lg-4 col-sm-4 about-div">
              <div class="about-item">
                <h4>500+</h4>
                <h6>Beneficiados ativos</h6>
              </div>
            </div>
            <div class="col-lg-4 col-sm-4 about-div">
              <div class="about-item">
                <h4>20+</h4>
                <h6>Especialidades</h6>
              </div>
            </div>
          </div>
          <p>Através do cartão de benefícios o cliente tem descontos em consultas e exames dentro da rede credenciada,
            sendo a principal rede o centro médico Cavalcante.
          </p>
          <div class="main-green-button"><a href="https://via-saude.web.app/" target="_blank"
              style="background: #596fa5; font-weight: bolder;">Saiba mais</a></div>
        </div>
      </div>
    </div>
  </div>

  <div id="plans" class="our-services section">
    <div class="container">
      <div class="row">
        <div class="col-lg-6 offset-lg-3">
          <div class="section-heading wow bounceIn" data-wow-duration="1s" data-wow-delay="0.2s">
            <h6>Nossos pacotes</h6>
            <h2>Pensados para <span>cuidar</span> da sua saúde sem pesar no <em>bolso</em>.</h2>
          </div>
        </div>
      </div>
    </div>
    <div class="container-fluid">
      <div class="row" style="justify-content: center;">

        <div class="col-lg-3">
          <div class="service-item wow bounceInUp" data-wow-duration="1s" data-wow-delay="0.3s">
            <div class="">
              <div class="">
                <div class="icon">
                  <img src="/assets/img/clinico.png" alt="">
                </div>
              </div>
              <div class="">
                <div class="right-content">
                  <h4>Clinico Geral</h4>
                  <p>10x</p>
                  <h2>R$36</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-3">
          <div class="service-item wow bounceInUp" data-wow-duration="1s" data-wow-delay="0.4s">
            <div class="">
              <div class="">
                <div class="icon">
                  <img src="/assets/img/endocrino.png" alt="">
                </div>
              </div>
              <div class="">
                <div class="right-content">
                  <h4>Endocrinologia</h4>
                  <p>10x R$44</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-3">
          <div class="service-item wow bounceInUp" data-wow-duration="1s" data-wow-delay="0.5s">
            <div class="">
              <div class="">
                <div class="icon">
                  <img src="/assets/img/ginecologia.png" alt="">
                </div>
              </div>
              <div class="">
                <div class="right-content">
                  <h4>Ginecologia</h4>
                  <p>10x R$53</p>
                  <p>10x R$64</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-3">
          <div class="service-item wow bounceInUp" data-wow-duration="1s" data-wow-delay="0.6s">
            <div class="">
              <div class="">
                <div class="icon">
                  <img src="/assets/img/pediatria.png" alt="">
                </div>
              </div>
              <div class="">
                <div class="right-content">
                  <h4>Pediatria</h4>
                  <p>10x R$42,50</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div id="portfolio" class="our-portfolio section">
    <div class="container">
      <div class="row">
        <div class="col-lg-5">
          <div class="section-heading wow fadeInLeft" data-wow-duration="1s" data-wow-delay="0.3s">
            <h6>Parceiros</h6>
            <h2>Use o seu <em>Convênio</em> ou <span>Sindicato</span></h2>
          </div>
        </div>
      </div>
    </div>
    <div class="container-fluid wow fadeIn" data-wow-duration="1s" data-wow-delay="0.7s">
      <div class="row">
        <div class="col-lg-12">
          <div class="loop owl-carousel">
            <div v-for="(group, groupIndex) in grouped" :key="groupIndex" class="item">
              <div v-for="(project, projectIndex) in group" :key="projectIndex" class="portfolio-item">
                <div class="thumb">
                  <img :src="project.image" :alt="project.title"
                    @error="e => e.target.src = project.image.replace('.jpg', '.png')" />
                  <div class="hover-content">
                    <div class="inner-content">
                      <!-- <h4>{{ project.title }}</h4> -->
                      <!-- <a :href="project.link">
                        <h4>{{ project.title }}</h4>
                      </a> -->
                      <span>{{ project.category }}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div id="contact" class="contact-us section">
    <div class="container">
      <div class="row">
        <div class="row col-lg-12 wow fadeInUp" data-wow-duration="0.5s" data-wow-delay="0.25s">

          <div class="col-md-4">
            <div class="row atendimento">
              <div class="title">

                <h3>Atendimento <b :class="estaDentroDoHorarioComercial ? 'pass' : 'notPass'">({{
                  estaDentroDoHorarioComercial ? 'Aberto' : 'Fechado' }})</b></h3>
                <p>Segunda à Sexta das <b>8h00</b> às <b>18h00</b></p>
              </div>

              <div style="display: flex; flex-direction: column;">
                <a target="_blank" href="tel:+551333045401"><i class="fa fa-phone" aria-hidden="true"
                    style="margin-right: 20px;"></i><span>(13)</span> 3304 - 5401</a>
                <a target="_blank" href="wa.me/+551333045401"><i class="fa fa-whatsapp" aria-hidden="true"
                    style="margin-right: 20px;"></i><span>(13)</span> 99175 - 1190</a>
              </div>
            </div>

            <div id="social">
              <a target="_blank" href="tel:+551333045401"><i class="fa fa-instagram" aria-hidden="true"
                  style="margin-right: 20px;"></i></a>
              <a target="_blank" href="tel:+551333045401"><i class="fa fa-facebook" aria-hidden="true"
                  style="margin-right: 20px;"></i></a>

            </div>
          </div>

          <div id="location" class="col-md-4">
            <div class="title">
              <h3>Nossas clínicas <span style="font-size: 1.4rem; color: #52b38d; font-weight: bold;">(SP)</span></h3>
            </div>
            <div class="mt-4">
              <h5><b>Guarujá</b></h5>
              <a href="" target="_blank">
                <p class="mt-1"><b>Unidade I</b> - Rua Montenegro, 18 – Sala 05/10, Vila Maia</p>
              </a>
              <a href="" target="_blank">
                <p><b>Unidade II</b> - Rua Whashington,140 - Mezanino, Vila Maia</p>
              </a>
            </div>
            <div class="mt-4">
              <h5><b>Praia Grande</b></h5>
              <a href="" target="_blank">
                <p class="mt-1"><b>Unidade III</b> - Avenida Brasil nº 600 - 906, Ed. Beatrix, Boqueirão</p>
              </a>
            </div>
            <a href="https://maps.app.goo.gl/h7EuCZ9rfEio7zKr8" target="_blank">
              <div id="map">
                <img src="/assets/img/mapa.png" alt="">
              </div>
            </a>
          </div>

          <div class="col-md-4">
            <h3 style="margin-bottom: 15px; color: #d9d9d9;">Trabalhe conosco</h3>
            <form id="contact-form" ref="formElement" @submit.prevent="sendEmail">
              <!-- Campos normais -->
              <div class="row">
                <!-- Honeypot: campo invisível para bots -->
                <input type="text" name="empresa" v-model="form.empresa" style="display:none;" tabindex="-1"
                  autocomplete="off" />

                <div class="col-lg-12">
                  <input type="text" name="from_name" v-model="form.name" class="form-control mb-3"
                    placeholder="Nome Completo" required />
                </div>
                <div class="col-lg-8">
                  <input type="text" name="city" v-model="form.cidade" class="form-control mb-3" placeholder="Cidade"
                    required />
                </div>
                <div class="col-lg-4">
                  <input type="text" name="state" v-model="form.estado" class="form-control mb-3" placeholder="Estado"
                    required />
                </div>
                <div class="col-lg-12">
                  <input type="email" name="from_email" v-model="form.email" class="form-control mb-3"
                    placeholder="Email" required />
                </div>
                <!-- <div class="col-lg-12">
                  <textarea v-model="form.message" class="form-control mb-3" rows="4" placeholder="Mensagem"
                    required></textarea>
                </div> -->

                <!-- Dropdown -->
                <div class="col-lg-12">
                  <select name="option" class="form-select mb-3" v-model="form.option" required>
                    <option disabled value="">Selecione uma opção</option>
                    <option>Auxiliar de limpeza</option>
                    <option>Enfermagem</option>
                    <option>Médicos</option>
                    <option>Recepção</option>
                  </select>
                </div>

                <!-- Drag & drop -->
                <div class="col-lg-12">
                  <div class="border rounded p-4 text-center mb-3" @dragover.prevent @drop.prevent="handleDrop">
                    <p v-if="!file">Arraste um arquivo aqui (máx. 10MB)</p>
                    <p v-else>{{ file.name }}</p>
                    <input type="file" name="attachment" @change="handleFileChange" hidden ref="fileInput" />
                    <button class="btn btn-outline-secondary mt-2" @click.prevent="$refs.fileInput.click()">Selecionar
                      Arquivo</button>
                  </div>
                </div>

                <!-- Botão -->
                <div class="col-lg-12">
                  <button class="btn btn-primary" type="submit">Enviar mensagem</button>
                </div>
              </div>
            </form>
          </div>

          <!-- <form id="contact" action="" method="post">
            <div class="row">
              <div class="col-lg-6 offset-lg-3">
                <div class="section-heading">
                  <h6>Fale conosco</h6>
                  <h2>Fill Out The Form Below To <span>Get</span> In <em>Touch</em> With Us</h2>
                </div>
              </div>
              <div class="col-lg-6">
                <h2>Faça parte da equipe</h2>
                <div class="row">
                  <div class="col-lg-6">
                    <fieldset>
                      <input type="name" name="name" id="name" placeholder="Name" autocomplete="on" required>
                    </fieldset>
                  </div>
                  <div class="col-lg-6">
                    <fieldset>
                      <input type="surname" name="surname" id="surname" placeholder="Surname" autocomplete="on"
                        required>
                    </fieldset>
                  </div>
                  <div class="col-lg-6">
                    <fieldset>
                      <input type="text" name="email" id="email" pattern="[^ @]*@[^ @]*" placeholder="Your Email"
                        required="">
                    </fieldset>
                  </div>
                  <div class="col-lg-6">
                    <fieldset>
                      <input type="subject" name="subject" id="subject" placeholder="Subject" autocomplete="on">
                    </fieldset>
                  </div>
                  <div class="col-lg-12">
                    <fieldset>
                      <textarea name="message" type="text" class="form-control" id="message" placeholder="Message"
                        required=""></textarea>
                    </fieldset>
                  </div>
                  <div class="col-lg-12">
                    <fieldset>
                      <button type="submit" id="form-submit" class="main-button ">Send Message Now</button>
                    </fieldset>
                  </div>
                </div>
              </div>
              <div class="col-lg-6">
                <div class="contact-info">
                  <ul>
                    <li>
                      <div class="icon">
                        <img src="../../assets/images/contact-icon-01.png" alt="email icon">
                      </div>
                      <a href="#">info@company.com</a>
                    </li>
                    <li>
                      <div class="icon">
                        <img src="../../assets/images/contact-icon-02.png" alt="phone">
                      </div>
                      <a href="#">+001-002-0034</a>
                    </li>
                    <li>
                      <div class="icon">
                        <img src="../../assets/images/contact-icon-03.png" alt="location">
                      </div>
                      <a href="#">26th Street, Digital Villa</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </form> -->
        </div>
      </div>
    </div>
  </div>

  <footer>
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <p>Copyright © 2025 A&R All Rights Reserved.

            <!-- <br>Web Designed by <a rel="nofollow" href="https://templatemo.com"
              title="free CSS templates">TemplateMo</a> -->
          </p>
        </div>
      </div>
    </div>
  </footer>

  <!-- Modal -->
  <div class="modal fade" id="modalConsulta" tabindex="-1" aria-labelledby="modalConsultaLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-xl">
      <div class="modal-content">
        <!-- <div class="modal-header">
          <h5 class="modal-title" id="modalConsultaLabel">Consultas Médicas</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div> -->
        <div class="modal-body">
          <U3Carousel :slides="slidesConsulta"></U3Carousel>
        </div>
        <!-- <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
          <button type="button" class="btn btn-primary">Salvar mudanças</button>
        </div> -->
      </div>
    </div>
  </div>

  <div class="modal fade" id="modalExame" tabindex="-2" aria-labelledby="modalExameLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-xl">
      <div class="modal-content">

        <div class="modal-body">
          <U3Carousel :slides="slidesExame"></U3Carousel>
        </div>

      </div>
    </div>
  </div>

  <div class="modal fade" id="modalEstetica" tabindex="-3" aria-labelledby="modalEsteticaLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-lg">
      <div class="modal-content">

        <div class="modal-body">
          <U3Carousel :slides="slidesEstetica"></U3Carousel>
        </div>

      </div>
    </div>
  </div>

  <div class="modal fade" id="modalCampanha" tabindex="-3" aria-labelledby="modalCampanhaLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-lg">
      <div class="modal-content">

        <div id="campanha" class="modal-body" v-if="campanhaDoMes">
          <div>
            <h1 class="mb-2" style="line-height: 1.1; font-weight: 600;">{{ campanhaDoMes.titulo }}</h1>
            <h4 style="line-height: 1.1;">{{ campanhaDoMes.subtitulo }}</h4>
            <p v-html="campanhaDoMes.texto"></p>
            <p v-html="campanhaDoMes.conversao"></p>
            <a :href="campanhaDoMes.telefone">
              <button class="btn">Saiba +</button>
            </a>
          </div>
          <div id="campanha-img">
            <img :src="campanhaDoMes.imagem" :alt="campanhaDoMes.titulo" />
          </div>
        </div>

      </div>
    </div>
  </div>

</template>

<style scoped lang="scss">
@use '../../style.scss';

.about-us {

  h4 {
    line-height: 1.7rem;

    span {
      font-size: 1.2rem;
    }
  }

  h6 {
    margin-top: 10px;
  }

  .section-heading {
    h6 {
      color: #596fa5;
    }


    h2 {
      color: #45423E;

      em,
      span {
        color: #596fa5;
        ;
      }
    }
  }

  .about-div {
    align-content: end;
  }

}

#contact-form {

  input,
  select {
    background-color: #d9d9d945;
    color: #d9d9d9;

    &::placeholder {
      color: #d9d9d9;
    }
  }
}
</style>
