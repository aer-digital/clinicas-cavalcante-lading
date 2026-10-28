<script setup>
import { ref, computed, onMounted } from 'vue';
import U3Carousel from '../../components/UCarousel.vue';
import campanhas from '../../assets/data/campanhas.json';

const agora = new Date();
const mesAtualIndex = agora.getMonth();
const anoAtual = agora.getFullYear();
const meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
const campanhaDoMes = computed(() => campanhas.find((campanha) => campanha.mes === meses[mesAtualIndex]));
const campanhaEstaAtualizada = computed(() => Number(campanhaDoMes.value?.ano) === anoAtual);
const campanhaFallback = {
  titulo: 'Cuidado para todos os momentos',
  subtitulo: 'Sua saúde merece atenção durante o ano inteiro',
  texto: 'Conte com o Centro Médico Cavalcante para realizar consultas, exames e cuidar do seu bem-estar com uma equipe preparada para receber você.',
  imagem: '',
};
const campanhaExibida = computed(() => campanhaEstaAtualizada.value ? campanhaDoMes.value : campanhaFallback);
// Evita reservar uma coluna vazia quando a campanha não possui arte ou a imagem falha.
const campanhaTemImagem = ref(Boolean(campanhaExibida.value?.imagem?.trim()));

const CHAT_URL = 'https://wshort.me/OheW';
const CONVERSION_FORM_URL = 'https://forms.gle/4VbstHsMEsQSbMGc8';

const abrirChat = (event) => {
  const dominioOficial = /(^|\.)centromedicocavalcante\.com\.br$/.test(window.location.hostname);
  const widgetPronto = document.getElementById('h-widget-iframe') && window.hWidget?.show;

  if (dominioOficial && widgetPronto) {
    event.preventDefault();
    window.hWidget.show('overlay');
  }
};

onMounted(() => {
  form.value.token = Date.now(); // marca o tempo de renderização do formulário

  // gera números aleatórios entre 1 e 9
  captcha.value.a = Math.floor(Math.random() * 9) + 1;
  captcha.value.b = Math.floor(Math.random() * 9) + 1;

  setTimeout(() => {
    $('#modalConversao').modal('show');
  }, 1000);
});


const slidesConsulta = [
  {
    title: 'Cardiologia',
    details: 'Na nossa clínica, o atendimento em cardiologia é focado no cuidado integral do coração e do sistema cardiovascular. Oferecemos consultas, exames preventivos e tratamentos de condições como hipertensão, insuficiência cardíaca, arritmias e doenças coronarianas. Estamos aqui para cuidar da sua saúde cardíaca de forma personalizada.',
    photo: 'cardiologia.png',
  },
  {
    title: 'Psiquiatria',
    details: 'O atendimento em psiquiatria é centrado no bem-estar mental e emocional dos nossos pacientes. Nossos profissionais estão preparados para diagnosticar e tratar condições como depressão, ansiedade, transtorno bipolar e esquizofrenia, sempre com empatia e uma abordagem humanizada.',
    photo: 'psiquiatria.png',
  },
  {
    title: 'Otorrino<br>laringologia',
    details: 'Oferecemos atendimento especializado em otorrinolaringologia, cuidando de problemas no ouvido, nariz e garganta. Nossa equipe trata condições como sinusite, alergias respiratórias, perda auditiva e apneia do sono, garantindo diagnósticos precisos e tratamentos eficazes.',
    photo: 'otorrinolaringologista.png',
  },
  {
    title: 'Pediatria',
    details: 'O atendimento pediátrico na nossa clínica é voltado para o cuidado integral de crianças e adolescentes. Nossos pediatras acompanham o desenvolvimento físico e emocional, oferecendo prevenção, diagnóstico e tratamento de diversas condições, sempre em um ambiente acolhedor.',
    photo: 'pediatria.png',
  },
  {
    title: 'Ortopedia',
    details: 'Na área de ortopedia, nossos especialistas cuidam de doenças e lesões musculoesqueléticas. Atendemos pacientes com fraturas, dores crônicas, lesões esportivas e doenças como artrose, oferecendo tratamentos modernos e individualizados.',
    photo: 'ortopedia.png',
  },
  {
    title: 'Oftalmo<br>logia',
    details: 'Nosso serviço de oftalmologia é dedicado à saúde dos olhos. Realizamos consultas, exames e tratamentos para miopia, astigmatismo, glaucoma e outras condições oculares, garantindo um acompanhamento completo e eficaz para a melhor qualidade de visão.',
    photo: 'oftalmologia.png',
  },
  {
    title: 'Nutrição',
    details: 'Oferecemos atendimento nutricional personalizado para promover uma alimentação saudável e equilibrada. Nossos nutricionistas elaboram planos alimentares específicos para prevenção de doenças, controle de peso e melhoria do bem-estar geral.',
    photo: 'nutricao.png',
  },
  {
    title: 'Hematologia',
    details: 'Na hematologia, nosso atendimento abrange o diagnóstico e tratamento de condições relacionadas ao sangue, como anemias, leucemias e distúrbios de coagulação. Trabalhamos com equipamentos modernos e protocolos seguros para garantir o melhor cuidado.',
    photo: 'hematologia.png',
  },
  {
    title: 'Ginecologia',
    details: 'Nosso atendimento ginecológico é voltado para a saúde integral da mulher, abordando prevenção, diagnóstico e tratamento de condições relacionadas ao sistema reprodutor. Oferecemos orientação em todas as fases da vida, sempre com acolhimento e cuidado.',
    photo: 'ginecologia.png',
  },
  {
    title: 'Gastroen<br>terologia',
    details: 'Na área de gastroenterologia, cuidamos da saúde do sistema digestivo, tratando condições como gastrite, refluxo e doenças inflamatórias intestinais. Oferecemos consultas e exames especializados para garantir o melhor cuidado ao paciente.',
    photo: 'gastrenterologia.png',
  },
  {
    title: 'Endocrino<br>logia',
    details: 'O atendimento em endocrinologia na nossa clínica é focado em tratamentos para diabetes, obesidade, problemas hormonais e disfunções da tireoide. Priorizamos uma abordagem individualizada para melhorar a qualidade de vida dos nossos pacientes.',
    photo: 'endocrinologia.png',
  },
  {
    title: 'Dermato<br>logia',
    details: 'Na dermatologia, cuidamos da saúde da pele, cabelos e unhas. Tratamos condições como acne, psoríase e alergias cutâneas, além de realizarmos procedimentos estéticos e preventivos para o bem-estar do paciente.',
    photo: 'dermatologia.png',
  },
  {
    title: 'Clínico Geral',
    details: 'Nosso atendimento clínico geral é voltado para a avaliação inicial e o acompanhamento integral dos pacientes. Oferecemos diagnóstico, tratamento e, se necessário, encaminhamento para outras especialidades, sempre com foco na saúde preventiva.',
    photo: 'clinico_geral.png',
  },
  {
    title: 'Cirurgia Vascular',
    details: 'Na cirurgia vascular, oferecemos atendimento especializado para o diagnóstico e tratamento de condições como varizes, tromboses e aneurismas. Utilizamos técnicas modernas para garantir segurança e eficácia nos procedimentos.',
    photo: 'cirurgia_vascular.png',
  },
];
const slidesExame = [
  {
    title: 'Laboratório de Analises Clínicas',
    details: 'A análise clínica consiste no estudo de substâncias biológicas, como sangue e urina, para auxiliar no diagnóstico de doenças. Esses exames são solicitados por médicos e realizados em laboratórios por profissionais qualificados, como biomédicos, farmacêuticos ou médicos. A atuação segue normas da Anvisa e exige conhecimento técnico especializado.',
    photo: 'laboratorio_analises_clinicas.png',
  },
  {
    title: 'Colposcopia',
    details: 'Colposcopia é a técnica que consiste no exame de colo de útero, aplicando uma solução de 3% a 5% de ácido e lugol na área afetada. No exame, o médico ou enfermeiro mantém o colo do útero aberto e o banha com uma gaze embebida de ácido. Passado um minuto, as lesões pré-cancerosas aparecem tomando uma cor esbranquiçada, podendo ser vistas através do colposcópio.',
    photo: 'colposcopia.png',
  },
  {
    title: 'Vulvoscopia',
    details: 'O que é o exame de vulvoscopia? O exame de vulvoscopia analisa, com o auxílio de uma instrumento chamado colposcópio, a parte externa da vulva, que engloba: a região pubiana, clitóris, grandes lábios, sulcos interlabiais, pequenos lábios, introito e a região perineal. O exame permite a identificação de diversas lesões.',
    photo: 'vulvoscopia.png',
  },
  {
    title: 'Ultrasson<br>ografia',
    details: 'A ultrassonografia, ou ecografia, é um método diagnóstico por imagem que utiliza ondas sonoras de alta frequência para visualizar estruturas internas do corpo em tempo real. Quando associada ao Doppler, permite avaliar o fluxo sanguíneo em vasos. Embora tenha menor qualidade de imagem comparada a exames como ressonância magnética ou tomografia, destaca-se por ser rápida, acessível, segura (sem radiação), de baixo custo e realizável até mesmo à beira do leito. Sua aplicação é ampla, sendo ideal para estudar o funcionamento dos órgãos. <br><b>Exames disponíveis em nossas clínicas:</b><br>Ultrassons de abdome (inferior, superior, total), articulações, mamas, próstata, rins, vias urinárias, órgãos superficiais e ginecológicos (incluindo transvaginal e obstétrica com ou sem Doppler). Também realizamos diversos tipos de Doppler: arterial e venoso (membros superiores/inferiores), de carótidas, vertebrais e de órgãos/estruturas.',
    photo: 'ultrasonografia.png',
  },
  {
    title: 'Papanicolau',
    details: 'O exame de citologia oncótica conhecido também por exame preventivo do colo do útero, papanicolau ou PapTest, é, no Brasil, a principal estratégia escolhida para o rastreamento precoce do câncer de colo de útero e doenças sexualmente transmissíveis.',
    photo: 'papanicolau.png',
  },
  {
    title: 'Laringo<br>scopia',
    details: 'A laringoscopia é um exame feito com anestesia local para diagnosticar doenças da laringe, especialmente nas pregas vocais. É realizada pela boca com o paciente sentado e tem alta taxa de tolerância, acima de 95%. Quando não é bem tolerada, pode ser substituída pela fibronasofaringolaringoscopia.',
    photo: 'laringoscopia.png',
  },
  {
    title: 'Nasofibrola<br>ringoscopia',
    details: 'A nasofibrolaringoscopia é uma técnica realizada para fazer a investigação e o diagnóstico de problemas e doenças que acometem as vias digestivas e aéreas superiores. Permite analisar o nariz, a faringe e a laringe, onde se encontram as cordas vocais.',
    photo: 'nasofibrolaringoscopia.png',
  },
];
const slidesEstetica = [
  {
    title: 'Estética Facial',
    details: ' <b>Bioestimuladores de colágeno</b><br>O tratamento com bioestimuladores de colágeno é realizado através da aplicação de ativos na derme que estimulam a produção de colágeno pelo organismo e resulta em uma melhor aparência da pele, reduz o aspecto de envelhecimento e recupera o viço trazendo um semblante mais jovem.<br><br><b>Botox</b><br>A aplicação da toxina botulínica é muito conhecida e desejada por muitos pacientes, principalmente quando as linhas de expressão começam a incomodar.<br>A aplicação do botox é feita em regiões estratégicas da face de acordo com a intenção e necessidade do paciente, ela ameniza a aparência de linhas, rugas, pés de galinha (marcas de expressão na lateral dos olhos) e muitos outros resultados que deixam a aparência do rosto rejuvenescida.<br><br><b>Drenagem facial</b><br>Esta técnica é realizada por um conjunto de movimentos na região da face que estimulam a circulação, melhora a hidratação e reduzem o inchaço, além de relaxar os músculos e suavizar manchas.<br><br><b>Esfoliação enzimática</b><br>É um tipo de esfoliação composta por enzimas que removem as células mortas da pele deixando ela mais limpa e macia.<br><br><b>Limpeza de pele</b><br>Este tratamento é indicado para quem quer fazer uma limpeza profunda na pele e também para aquelas pessoas que sofrem com acne, removendo cravos e outras impurezas que ficam na região da face. Se for feita regularmente reduz a oleosidade e previne o envelhecimento precoce.<br><br><b>Microagulhamento</b><br>Este tratamento é feito com pequenas agulhas que são aplicadas na pele e é indicado para diminuir a aparência de cicatrizes, rugas, melasma etc.<br><br><b>Peeling</b><br>O peeling é um procedimento não evasivo que atua diretamente na renovação celular da pele podendo ser do tipo físico ou químico. A indicação é feita pela profissional de acordo com a necessidade do paciente e o tipo de pele. Ele auxilia no clareamento de manchas, reduz sinais de cicatriz e linhas de expressão deixando a aparência da pele mais bonita e viçosa.',
    photo: 'estetica_facial.png',
  },
  {
    title: 'Estética Corporal',
    details: '<b>Bumbum de milhões</b><br>Procedimento com bioestimuladores e equipamentos estéticos para modelar, firmar o glúteo e reduzir celulites.<br><br><b>Drenagem Linfática</b><br>Massagem que acelera a circulação da linfa, melhora a oxigenação e ajuda na eliminação de toxinas.<br><br><b>Drenagem pré e pós-operatório</b><br>Massagem que reduz inchaços, edemas, hematomas e tensões antes ou após cirurgias.<br><br><b>Endermologia</b><br>Tratamento com aparelho a vácuo que aumenta o fluxo sanguíneo, relaxa tecidos e reduz gordura localizada e inchaços.<br><br><b>Massagem modeladora</b><br>Técnica manual que ajuda a modelar o corpo, reduzir medidas, celulites e inchaços, estimulando a circulação.<br><br><b>Pump Up</b><br>Aplicação de ventosas nos glúteos para dar efeito empinado, modelado, firme e com menos celulite.<br><br><b>Radiofrequência</b><br>Terapia com aparelho que estimula a produção de colágeno, minimiza inchaço, sinais de envelhecimento e tonifica a pele.<br><br><b>Tratamento com injetáveis</b><br>Uso de bioestimuladores, enzimas e outros para melhorar o corpo, o bem-estar e a autoestima.<br><br><b>Ventosaterapia</b><br>Aplicação de vácuo em pontos estratégicos para aliviar dores, relaxar, estimular circulação e desintoxicar o organismo.',
    photo: 'estetica_corporal.png',
  },
  {
    title: 'Criolipólise',
    details: '<b>Criolipólise</b><br>Técnica não invasiva que utiliza o frio para destruir células de gordura, eliminadas naturalmente pelo corpo, reduzindo medidas.<br><br><b>Como funciona</b><br>- Congelamento seletivo: resfria as células adiposas sem lesionar outros tecidos.<br>- Apoptose: células congeladas passam por morte celular programada e são eliminadas.<br>- Redução de medidas: nas semanas seguintes, o corpo elimina a gordura morta, diminuindo a área tratada.<br><br><b>Benefícios</b><br>- Não invasivo, sem cortes ou anestesia.<br>- Seguro e eficaz.<br>- Resultados duradouros com hábitos saudáveis.<br>- Poucas sessões necessárias.<br>- Recuperação rápida.<br><br><b>Indicações</b><br>- Gordura localizada (abdômen, flancos, coxas, braços, papada).<br>- Gordura resistente à dieta e exercícios.<br>- Bom tônus muscular (não trata flacidez).<br><br><b>Contraindicações</b><br>- Gravidez e lactação.<br>- Doenças de pele na área tratada.<br>- Distúrbios circulatórios.<br>- Uso de anticoagulantes.<br>- Sensibilidade ao frio.<br><br><b>Importante</b><br>Deve ser realizado após avaliação médica para indicar o tratamento mais adequado.',
    photo: 'criolipolise.png',
  },
  {
    title: 'Tratamento Ozonio Terapia',
    details: '<b>O que é</b><br>A ozonioterapia estética é uma técnica que utiliza o ozônio (três átomos de oxigênio) para aumentar a oxigenação dos tecidos, estimular o sistema imunológico e promover a regeneração celular.<br><br><b>Como funciona</b><br>- Aumento da oxigenação: melhora a circulação e dá mais viço à pele.<br>- Estimulação do colágeno: reduz rugas e linhas de expressão.<br>- Ação antioxidante: combate radicais livres.<br>- Redução da inflamação: alivia vermelhidão e inchaço.<br>- Quebra de gordura localizada: ajuda na redução de gordura e celulite.<br><br><b>Formas de aplicação</b><br>- Injeções subcutâneas.<br>- Auto-hemoterapia (sangue ozonizado reinfundido).<br>- Banhos de ozônio.<br><br><b>Indicações</b><br>- Rejuvenescimento facial.<br>- Tratamento de acne.<br>- Redução de celulite.<br>- Atenuação de estrias.<br>- Melhora da flacidez.<br>- Queda de cabelo.<br><br><b>Benefícios</b><br>- Resultados rápidos.<br>- Não invasivo.<br>- Poucas contraindicações.<br>- Compatível com outros tratamentos.<br>- Melhora autoestima e qualidade de vida.<br><br><b>Importante</b><br>O tratamento deve ser feito por profissional qualificado, em ambiente adequado, e com avaliação médica prévia.',
    photo: 'ozonio.png',
  },
];

const formElement = ref(null);
const captcha = ref({ a: 0, b: 0 });
const captchaInput = ref(null);
const form = ref({
  name: '',
  cidade: '',
  estado: '',
  email: '',
  option: '',
  empresa: '', // campo honeypot para evitar spam
  token: '',
});
const toBase64 = (file) => new Promise((resolve, reject) => {
  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = () => resolve(reader.result); // inclui o data:mimetype;base64,...
  reader.onerror = (error) => reject(error);
});

const file = ref(null)
const fileInput = ref(null)

const itemsPerGroup = 2;

const convenioImages = [
  '0.jpg', '1.jpg', '2.jpg', '3.jpg', '5.jpg', '6.png', '7.jpg',
  '8.jpg', '9.jpg', '10.jpg', '11.jpg', '12.jpg', '13.jpg', '15.jpg',
  '16.jpg', '17.jpg', '18.jpg', '19.jpg', '20.jpg', '21.jpg', '23.png',
];

const sindicatoImages = [
  '0.jpg', '1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg',
  '6.jpg', '7.jpg', '8.jpg', '9.jpg', '10.jpg',
];

const groupPartnerImages = (images, category, directory) => {
  const projects = images.map((image) => ({
    title: `${category} parceiro`,
    category,
    image: `/assets/img/${directory}/${image}`,
  }));

  return Array.from(
    { length: Math.ceil(projects.length / itemsPerGroup) },
    (_, index) => projects.slice(index * itemsPerGroup, (index + 1) * itemsPerGroup),
  );
};

const grouped = computed(() => {
  return [
    ...groupPartnerImages(convenioImages, 'Convênio', 'convenios'),
    ...groupPartnerImages(sindicatoImages, 'Sindicato', 'sindicatos'),
  ];
});
const pacoteSelecionado = ref('');


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

const emailSended = ref(false);

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
      to_email: 'centromedicocavalcante@gmail.com',
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
    emailSended.value = true;
  } catch (err) {
    console.error("Erro ao enviar email:", err);
    alert("Erro ao enviar email.");
  }
};

function validateCaptcha() {
  if (!captchaInput.value) return;

  const expected = captcha.value.a + captcha.value.b;
  if (form.value.captcha === "") {
    captchaInput.value.setCustomValidity("Por favor, responda a conta.");
  } else if (parseInt(form.value.captcha, 10) !== expected) {
    captchaInput.value.setCustomValidity("Resposta incorreta, tente novamente.");
  } else {
    captchaInput.value.setCustomValidity(""); // válido
  }

  captchaInput.value.reportValidity(); // força exibir mensagem
};

const estaDentroDoHorarioComercial = computed(() => {
  const agora = new Date();
  const diaSemana = agora.getDay(); // 0 = domingo, 1 = segunda, ..., 6 = sábado
  const hora = agora.getHours();
  const minuto = agora.getMinutes();

  const ehDiaUtil = diaSemana >= 1 && diaSemana <= 5;
  const ehHorarioUtil = (hora > 8 && hora < 18) || (hora === 8 && minuto >= 0) || (hora === 18 && minuto === 0);
  const ehSabadoComercial = (diaSemana == 6) && (hora > 8 && hora < 12);

  return (ehDiaUtil && ehHorarioUtil) || ehSabadoComercial;
});;

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
              <li class="scroll-to-section"><a href="#nossa-clinica">Nossa clínica</a></li>
              <li class="scroll-to-section"><a href="#via-saude">Via saúde</a></li>
              <li class="scroll-to-section"><a href="#plans">Planos</a></li>
              <li class="scroll-to-section"><a href="#portfolio">Parceiros</a></li>
              <li class="scroll-to-section"><a href="#contact">Fale conosco</a></li>
              <li class="scroll-to-section">
                <div class="main-blue-button">
                  <a :href="CHAT_URL" target="_blank" rel="noopener noreferrer" @click="abrirChat">Chat</a>
                </div>
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

  <section class="clinic-hero" id="top" aria-labelledby="clinic-hero-title">
    <div class="container">
      <div class="row align-items-center clinic-hero-row">
        <div class="col-lg-6">
          <div class="clinic-hero-content header-text wow fadeInLeft" data-wow-duration="0.8s">
            <span class="clinic-hero-eyebrow"><span aria-hidden="true"></span>Cuidado médico perto de você</span>
            <h1 id="clinic-hero-title">Sua saúde merece cuidado completo.</h1>
            <p>Consultas, exames e diferentes especialidades em um só lugar, com atendimento humano para você e sua família.</p>
            <div class="clinic-hero-actions">
              <a :href="CHAT_URL" target="_blank" rel="noopener noreferrer" class="clinic-hero-primary" @click="abrirChat">
                Agendar atendimento
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" /></svg>
              </a>
              <a href="#nossa-clinica" class="clinic-hero-secondary">Conheça nossa clínica</a>
            </div>
            <ul class="clinic-hero-trust" aria-label="Diferenciais do Centro Médico Cavalcante">
              <li><strong>Desde 2011</strong><span>cuidando de você</span></li>
              <li><strong>Consultas e exames</strong><span>em um só lugar</span></li>
              <li><strong>Guarujá e Praia Grande</strong><span>na Baixada Santista</span></li>
            </ul>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="clinic-hero-visual wow fadeInRight" data-wow-duration="0.8s">
            <div class="clinic-hero-shape" aria-hidden="true"></div>
            <img src="/assets/img/medic.png" alt="Equipe médica do Centro Médico Cavalcante" width="500" height="500">
            <div class="clinic-hero-note">
              <span class="clinic-hero-note-icon" aria-hidden="true"><svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M12 21s7-4.35 7-11V5l-7-3-7 3v5c0 6.65 7 11 7 11Z" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" /><path d="m9 11 2 2 4-4" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" /></svg></span>
              <span><strong>Atendimento humanizado</strong>Saúde com acolhimento e confiança</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section id="campanha-atual" class="campaign-highlight" aria-labelledby="campaign-highlight-title">
    <div class="container">
      <article class="campaign-highlight-card">
        <div class="row align-items-center g-0">
          <div :class="campanhaTemImagem ? 'col-12 col-lg-7' : 'col-12'" class="campaign-highlight-content">
            <!-- <span class="campaign-highlight-label">
              {{ campanhaEstaAtualizada ? `Campanha de ${campanhaDoMes.mes}` : 'Cuidado contínuo' }}
            </span> -->
            <h2 id="campaign-highlight-title">{{ campanhaExibida.titulo }}</h2>
            <h3>{{ campanhaExibida.subtitulo }}</h3>
            <div class="campaign-highlight-text" v-html="campanhaExibida.texto"></div>
            <a :href="CHAT_URL" target="_blank" rel="noopener noreferrer" class="campaign-highlight-cta"
              @click="abrirChat">Saiba mais</a>
          </div>
          <div v-if="campanhaTemImagem" class="col-12 col-lg-5 campaign-highlight-image">
            <img :src="campanhaExibida.imagem" :alt="`Arte da campanha ${campanhaExibida.titulo}`"
              @error="campanhaTemImagem = false" />
          </div>
        </div>
      </article>
    </div>
  </section>

  <div id="nossa-clinica" class="our-services section">
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
            <p style="font-size: 1.1rem;">Com médicos especializados,
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

  <div id="via-saude" class="about-us section">
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
          <div class="main-green-button"><a href="/via-saude" target="_blank"
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

        <div class="col-lg-3" data-bs-toggle="modal" data-bs-target="#modalPacotes" style="cursor: pointer;"
          @click="pacoteSelecionado = 'clinico'">
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
                  <h2>R$39,60</h2>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="col-lg-3" data-bs-toggle="modal" data-bs-target="#modalPacotes" style="cursor: pointer;"
          @click="pacoteSelecionado = 'endocrinologia'">
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
                  <p>10x</p>
                  <h2>R$48,40</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-3" data-bs-toggle="modal" data-bs-target="#modalPacotes" style="cursor: pointer;"
          @click="pacoteSelecionado = 'ginecologia'">
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
                  <p>Apartir de 10x</p>
                  <h2>R$63,30</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-3" data-bs-toggle="modal" data-bs-target="#modalPacotes" style="cursor: pointer;"
          @click="pacoteSelecionado = 'pediatria'">
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
                  <p>10x</p>
                  <h2>R$46,70</h2>
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
              <div v-for="project in group" :key="project.image" class="portfolio-item">
                <div class="thumb">
                  <img :src="project.image" :alt="project.title" />
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
                <p>Sábado das <b>8h00</b> às <b>12h00</b></p>
              </div>

              <div style="display: flex; flex-direction: column;">
                <a target="_blank" href="tel:+551333045401"><i class="fa fa-phone" aria-hidden="true"
                    style="margin-right: 20px;"></i><span>(13)</span> 3304 - 5401</a>
                <a :href="CHAT_URL" target="_blank" rel="noopener noreferrer" class="chat-contact"
                  @click="abrirChat"><i class="fa fa-comments" aria-hidden="true"
                    style="margin-right: 20px;"></i>Fale pelo chat</a>
              </div>
            </div>

            <div id="social">
              <a target="_blank" href="https://www.instagram.com/centromedicocavalcante/"><i class="fa fa-instagram" aria-hidden="true"
                  style="margin-right: 20px;"></i></a>
              <a target="_blank" href="https://www.facebook.com/centromedicocavalcante"><i class="fa fa-facebook" aria-hidden="true"
                  style="margin-right: 20px;"></i></a>

            </div>
          </div>

          <div id="location" class="col-md-4">
            <div class="title">
              <h3>Nossas clínicas <span style="font-size: 1.4rem; color: #52b38d; font-weight: bold;">(SP)</span></h3>
            </div>
            <div class="mt-4">
              <h5><b>Guarujá</b></h5>
              <a href="" target="_blank" style="pointer-events: none; cursor: default;">
                <p class="mt-1"><b>Unidade I</b> - Rua Montenegro, 169 – Sala 11, Vila Maia</p>
              </a>
              <a href="" target="_blank" style="pointer-events: none; cursor: default;">
                <p><b>Unidade II</b> - Rua Whashington,140 - Mezanino, Vila Maia</p>
              </a>
              <a href="" target="_blank" style="pointer-events: none; cursor: default;">
                <p class="mt-1"><b>Unidade III</b> - Rua Buenos Aires, 611, - Sala 85, Vila Maia</p>
              </a>
            </div>
            <div class="mt-4">
              <h5><b>Praia Grande</b></h5>
              <a href="" target="_blank" style="pointer-events: none; cursor: default;">
                <p class="mt-1">Avenida Brasil nº 600 - 906, Ed. Beatrix, Boqueirão</p>
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
                <div class="col-lg-8">
                  <select name="option" class="form-select mb-3" v-model="form.option" required>
                    <option disabled value="">Selecione uma opção</option>
                    <option>Auxiliar de limpeza</option>
                    <option>Enfermagem</option>
                    <option>Médicos</option>
                    <option>Recepção</option>
                  </select>
                </div>

                <!-- Conta simples -->
                <div class="col-lg-4">
                  <input
                    type="number"
                    :placeholder="captcha.a + '+' + captcha.b + ' = ?'"
                    id="captcha"
                    v-model="form.captcha"
                    class="form-control mb-3"
                    required
                    ref="captchaInput"
                    @input="validateCaptcha"
                  />
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
                  <button id="btn-send" class="btn" type="submit" :disabled="emailSended">Enviar 🚀</button>
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
          <p>Copyright © 2026 A&R All Rights Reserved.

            <!-- <br>Web Designed by <a rel="nofollow" href="https://templatemo.com"
              title="free CSS templates">TemplateMo</a> -->
          </p>
        </div>
      </div>
    </div>
  </footer>

  <a :href="CHAT_URL" target="_blank" rel="noopener noreferrer" class="chat-floating-link"
    aria-label="Abrir chat de atendimento" title="Fale conosco pelo chat" @click="abrirChat">
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d="M20 2H4a2 2 0 0 0-2 2v14l4-4h14a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2Zm0 10H5.17L4 13.17V4h16v8Zm-3 4H8a2 2 0 0 0 2 2h8l4 4v-7.17A3.97 3.97 0 0 1 20 16h-3Z"/>
    </svg>
  </a>

  <!-- Modal -->
  <div class="modal fade" id="modalConsulta" tabindex="-1" aria-labelledby="modalConsultaLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-xl">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
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
        <div class="modal-header">
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>

        <div class="modal-body">
          <U3Carousel :slides="slidesExame"></U3Carousel>
        </div>

      </div>
    </div>
  </div>

  <div class="modal fade" id="modalEstetica" tabindex="-3" aria-labelledby="modalEsteticaLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-xl">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>

        <div class="modal-body">
          <U3Carousel :slides="slidesEstetica"></U3Carousel>
        </div>

      </div>
    </div>
  </div>

  <div class="modal fade" id="modalPacotes" tabindex="-3" aria-labelledby="modalEsteticaLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-xl">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>

        <div class="modal-body" v-if="pacoteSelecionado == 'clinico'">
          <div class="img col-12 col-lg-3">
            <div class="">
              <div class="">
                <div class="icon">
                  <img src="/assets/img/clinico.png" alt="">
                </div>
              </div>
              <div class="values">
                <div class="mx-3">
                  <!-- <h4>Clinico Geral</h4> -->
                  <h2>R$396,00</h2>
                  <span>10x sem juros ou 10% de desconto no Dinheiro ou PIX</span>
                </div>
              </div>
            </div>
          </div>

          <div class="description col-12 col-lg-9 px-4">
            <h2>Pacote Clínico Geral</h2>
            <p>Consultas com clínico geral, ideal para quem busca um acompanhamento contínuo e preventivo.</p>
            <hr>
            <h4>Procedimentos inclusos no pacote</h4>
            <p>
              Hemograma completo, colesterol total e frações, triglicerídeos, glicemia, hemoglobina glicosada, ácido úrico, ureia, creatinina, TSH, urina I, TGO, TGP, sódio, potássio, vitamina B12, vitamina D e consulta com médico clínico geral.
            </p>
            <h4>Indicação</h4>
            <p>
              Este pacote é indicado para pessoas de 14 à 64 anos. Nele contém exames essenciais de rotina para analisar e prevenir as disfunções da sua saúde.
            </p>

            <div class="contact-buttons mt-4">
              <a class="btn btn-phone" href="tel:+551333045401">Agende por telefone</a>
              <a :href="CHAT_URL" target="_blank" rel="noopener noreferrer" class="btn btn-chat"
                @click="abrirChat">Fale pelo chat</a>
            </div>
          </div>
        </div>

        <div class="modal-body" v-if="pacoteSelecionado == 'endocrinologia'">
          <div class="img col-12 col-lg-3">
            <div class="">
              <div class="">
                <div class="icon">
                  <img src="/assets/img/endocrino.png" alt="">
                </div>
              </div>
              <div class="values">
                <div class="mx-3">
                  <!-- <h4>Clinico Geral</h4> -->
                  <h2>R$484,00</h2>
                  <span>10x sem juros ou 10% de desconto no Dinheiro ou PIX</span>
                </div>
              </div>
            </div>
          </div>

          <div class="description col-12 col-lg-9 px-4">
            <h2>Pacote Endocrinologia</h2>
            <p>Consultas com endocrinologista, ideal para quem busca acompanhamento de condições hormonais, metabólicas e prevenção de doenças como diabetes, obesidade.</p>
            <hr>
            <h4>Procedimentos inclusos no pacote</h4>
            <p>
              Hemograma completo, glicemia, hemoglobina glicosada, triglicerídeos, TSH, T4 LIVRE, colesterol total e frações, vitamina B12, vitamina D, TGO, TGP, ácido úrico e consulta com médico endocrinologista.
            </p>
            <h4>Indicação</h4>
            <p>
              Este pacote é indicado para identificar doenças como: gordura no fígado, distúrbios da tireoide, diabetes, síndrome metabólica e disfunções do colesterol visando tratar e zelar pela saúde e qualidade de vida.
            </p>

            <div class="contact-buttons mt-4">
              <a class="btn btn-phone" href="tel:+551333045401">Agende por telefone</a>
              <a :href="CHAT_URL" target="_blank" rel="noopener noreferrer" class="btn btn-chat"
                @click="abrirChat">Fale pelo chat</a>
            </div>
          </div>
        </div>

        <div class="modal-body" v-if="pacoteSelecionado == 'ginecologia'">
          <div class="img col-12 col-lg-3">
            <div class="">
              <div class="">
                <div class="icon">
                  <img src="/assets/img/ginecologia.png" alt="">
                </div>
              </div>
              <div class="values">
                <div class="mx-3">
                  <!-- <h4>Clinico Geral</h4> -->
                  <span>Até 39 anos</span>
                  <h2 style="margin-bottom: 15px;">R$633,00</h2>
                  <span>+40 anos</span>
                  <h2>R$755,00</h2>
                  <hr>
                  <span>10x sem juros ou 10% de desconto no Dinheiro ou PIX</span>
                </div>
              </div>
            </div>
          </div>

          <div class="description col-12 col-lg-9 px-4">
            <h2>Pacote Ginecologia</h2>
            <p>Consultas com endocrinologista, ideal para quem busca acompanhamento de condições hormonais, metabólicas e prevenção de doenças como diabetes, obesidade.</p>
            <hr>
            <h4>Procedimentos inclusos no pacote</h4>
            <p>
              Glicemia, urina I, DHEA, FSH, LH, TSH, prolactina, estrogênio, estradiol, cálcio, vitamina B12, vitamina D, citologia oncótica (preventivo), ultrassom de mamas, ultrassom transvaginal e consulta com ginecologia com retorno.
            </p>
            <h4>Indicação</h4>
            <p>
              Este pacote é indicado para mulheres a partir de 40 anos. Nele contém exames essenciais para tratamento de menopausa, miomas, climatério e diversas patologias ginecológicas.
            </p>

            <div class="contact-buttons mt-4">
              <a class="btn btn-phone" href="tel:+551333045401">Agende por telefone</a>
              <a :href="CHAT_URL" target="_blank" rel="noopener noreferrer" class="btn btn-chat"
                @click="abrirChat">Fale pelo chat</a>
            </div>
          </div>
        </div>

        <div class="modal-body" v-if="pacoteSelecionado == 'pediatria'">
          <div class="img col-12 col-lg-3">
            <div class="">
              <div class="">
                <div class="icon">
                  <img src="/assets/img/pediatria.png" alt="">
                </div>
              </div>
              <div class="values">
                <div class="mx-3">
                  <!-- <h4>Clinico Geral</h4> -->
                  <h2>R$467,00</h2>
                  <span>10x sem juros ou 10% de desconto no Dinheiro ou PIX</span>
                </div>
              </div>
            </div>
          </div>

          <div class="description col-12 col-lg-9 px-4">
            <h2>Pacote Pediatria</h2>
            <p>Consultas com pediatra, ideal para o acompanhamento do crescimento e desenvolvimento de crianças e adolescentes.</p>
            <hr>
            <h4>Procedimentos inclusos no pacote</h4>
            <p>
              Hemograma completo, glicemia, colesterol total e frações, ureia, creatinina, TSH, T4 LIVRE, vitamina B12, vitamina D, parasitológico de fezes, TGO, TGP, ferro, ferritina, urina I, urocultura e consulta com médico pediatra.
            </p>
            <h4>Indicação</h4>
            <p>
              Este pacote é indicado para pacientes de 0 à 13 anos. Nele contém exames que visam acompanhar a saúde e desenvolvimento da criança.
            </p>

            <div class="contact-buttons mt-4">
              <a class="btn btn-phone" href="tel:+551333045401">Agende por telefone</a>
              <a :href="CHAT_URL" target="_blank" rel="noopener noreferrer" class="btn btn-chat"
                @click="abrirChat">Fale pelo chat</a>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>

  <div class="modal fade" id="modalConversao" tabindex="-1" aria-labelledby="modalConversaoLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
      <div class="modal-content conversion-modal">
        <div class="modal-header">
          <span class="conversion-modal-eyebrow">Benefício especial</span>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Fechar"></button>
        </div>
        <div class="modal-body conversion-modal-body">
          <div class="conversion-modal-icon" aria-hidden="true">R$ 0</div>
          <h2 id="modalConversaoLabel">E se sua próxima consulta médica saísse por R$ 0,00?</h2>
          <p class="conversion-modal-lead">Parece bom demais? Mas existe uma forma de aproveitar esse benefício! 👀</p>
          <p>O Centro Médico Cavalcante tem uma condição especial para você cuidar da sua saúde de um jeito diferente.</p>
          <p>Quer descobrir como funciona e quem pode aproveitar?</p>
          <a :href="CONVERSION_FORM_URL" target="_blank" rel="noopener noreferrer" class="conversion-modal-cta">
            Preencha o formulário
          </a>
          <small>Um de nossos agentes entrará em contato com você.</small>
        </div>
      </div>
    </div>
  </div>

</template>

<style lang="scss">
// Estilos globais do Home – separados aqui pois afetam elementos fora do escopo do componente
// (body, modais Bootstrap, utilitários usados inline no template).
@use '../../style.scss' as *;

body {
  color: $base;
  // background-color: $base;
}

#nossa-clinica > div:nth-child(2) > div > div > div > p {
  color: $dark;
  font-weight: 100;
}

.modal-content {
  backdrop-filter: blur(5px) saturate(90%);
  -webkit-backdrop-filter: blur(5px) saturate(90%);
  background-color: rgba(255, 255, 255, 0.7);
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.125);
}

#contact {
  * { color: $base; }

  .atendimento a,
  .atendimento button {
    font-size: 1.5rem;
    font-weight: bolder;

    span {
      font-size: 1.1rem;
      font-weight: 100;
    }
  }

  .atendimento .chat-contact {
    align-self: flex-start;
    padding: 0;
    border: 0;
    background: transparent;
    cursor: pointer;
  }

  #location p { line-height: 1.4; }

  #map {
    margin-top: 20px;
    display: flex;
    justify-content: center;
    aspect-ratio: 3;
    position: relative;
    overflow: hidden;
    border-radius: 30px;
    width: 90%;

    img {
      opacity: .9;
      object-fit: cover;
      object-position: right 65%;
      width: 100%;
      transform: scale(1.1);
      transform-origin: 75% center;
    }
  }
}

.pass    { color: $pass    !important; }
.notPass { color: $notPass !important; }

.chat-floating-link {
  position: fixed;
  right: calc(22px + env(safe-area-inset-right));
  bottom: calc(22px + env(safe-area-inset-bottom));
  z-index: 1040;
  display: inline-flex;
  width: 64px;
  height: 64px;
  align-items: center;
  justify-content: center;
  color: $white;
  background: #183d30;
  border-radius: 50%;
  box-shadow: 0 8px 24px rgba(21, 128, 61, .32);
  transition: transform .2s ease, background-color .2s ease, box-shadow .2s ease;

  svg {
    width: 32px;
    height: 32px;
    fill: currentColor;
  }

  &:hover {
    color: $white;
    background: #116b33;
    box-shadow: 0 10px 28px rgba(21, 128, 61, .4);
    transform: translateY(-2px);
  }

  &:focus-visible {
    outline: 3px solid $white;
    outline-offset: 3px;
    box-shadow: 0 0 0 6px rgba(21, 128, 61, .45);
  }
}

@media (prefers-reduced-motion: reduce) {
  .chat-floating-link { transition: none; }
}

#plans {
  h2, p {
    font-weight: bold;
    line-height: 1;
    color: $primary-dark-2;
  }
}

#modalPacotes .modal-body {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: start;
  justify-content: center;
  color: $dark2;

  .contact-buttons {
    display: flex;
    gap: 20px;

    a,
    button { padding: .7rem 1.5rem; }

    .btn-phone,
    .btn-chat {
      background-color: $primary;
      color: $white;
    }

    .btn-chat { font-weight: 600; }
  }

  .img .values {
    h2 {
      color: $primary-dark-2;
      font-weight: 600;
      line-height: .8;
      margin-bottom: 1rem;
    }

    span {
      font-size: 1.1rem;
      font-weight: 600;
    }
  }

  .description {
    margin: 1rem 0;

    h2 { font-weight: 600; }
    h4 { margin-top: 1rem; }
    p  { color: $dark2; line-height: 1.4; }
  }
}

#social {
  margin-top: 30px;
  font-size: 3rem;
}

.campaign-highlight {
  position: relative;
  padding: 0 0 60px;
  margin-top: -10px;
  z-index: 2;
}

.campaign-highlight-card {
  overflow: hidden;
  background: linear-gradient(135deg, #f3faf7 0%, #ffffff 62%);
  border: 1px solid rgba(65, 142, 113, .2);
  border-radius: 1rem;
  box-shadow: 0 18px 45px rgba(36, 76, 61, .11);
}

.campaign-highlight .campaign-highlight-content {
  padding: clamp(28px, 5vw, 56px);
}

.campaign-highlight-label,
.conversion-modal-eyebrow {
  display: inline-flex;
  color: $primary-dark-2;
  font-size: .76rem;
  font-weight: 800;
  letter-spacing: .12em;
  text-transform: uppercase;
}

.campaign-highlight-content {
  h2 {
    max-width: 760px;
    margin: 10px 0 8px;
    color: $primary-dark-2;
    font-size: clamp(2rem, 4vw, 3.3rem);
    font-weight: 800;
    line-height: 1.05;
  }

  h3 {
    max-width: 700px;
    color: $primary;
    font-size: clamp(1.05rem, 2vw, 1.35rem);
    font-weight: 600;
    line-height: 1.3;
  }
}

.campaign-highlight-text {
  max-width: 720px;
  margin-top: 16px;
  color: $dark2;
  font-size: 1rem;
  line-height: 1.55;
}

.campaign-highlight-cta,
.conversion-modal-cta {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 48px;
  margin-top: 22px;
  padding: 12px 24px;
  color: $white;
  font-weight: 700;
  background: $primary;
  border-radius: 999px;
  transition: background-color .2s ease, transform .2s ease;

  &:hover {
    color: $white;
    background: $primary-dark-2;
    transform: translateY(-1px);
  }

  &:focus-visible {
    outline: 3px solid rgba(65, 142, 113, .35);
    outline-offset: 3px;
  }
}

.campaign-highlight-image {
  align-self: stretch;
  min-height: 320px;

  img {
    width: 100%;
    height: 100%;
    min-height: 320px;
    object-fit: cover;
  }
}

.modal-content.conversion-modal {
  overflow: hidden;
  background: #fff;
  border: 0;
  border-radius: 24px;
  box-shadow: 0 24px 70px rgba(20, 55, 43, .24);

  .modal-header {
    align-items: center;
    padding: 20px 24px 0;
    border: 0;
  }
}

.conversion-modal .conversion-modal-body {
  padding: 12px 32px 34px;
  text-align: center;

  h2 {
    margin: 16px 0 14px;
    color: $primary-dark-2;
    font-size: clamp(1.8rem, 5vw, 2.5rem);
    font-weight: 800;
    line-height: 1.08;
  }

  p {
    margin: 10px auto 0;
    color: $dark2;
    font-size: 1rem;
    line-height: 1.5;
  }

  .conversion-modal-lead {
    color: $primary-dark-2;
    font-size: 1.08rem;
    font-weight: 700;
  }

  small {
    display: block;
    margin-top: 12px;
    color: $dark2;
    line-height: 1.4;
  }
}

.conversion-modal-icon {
  display: inline-flex;
  width: 78px;
  height: 78px;
  align-items: center;
  justify-content: center;
  color: $white;
  font-size: 1.35rem;
  font-weight: 800;
  background: $primary;
  border-radius: 50%;
  box-shadow: 0 10px 24px rgba(65, 142, 113, .28);
}

@media (max-width: 991.98px) {
  .campaign-highlight {
    padding-bottom: 40px;
    margin-top: 0;
  }

  .campaign-highlight-image {
    min-height: 240px;

    img { min-height: 240px; }
  }
}

@media (max-width: 575.98px) {
  .campaign-highlight-card,
  .modal-content.conversion-modal { border-radius: 18px; }

  .conversion-modal .conversion-modal-body { padding: 10px 22px 28px; }
}

@media (prefers-reduced-motion: reduce) {
  .campaign-highlight-cta,
  .conversion-modal-cta { transition: none; }
}
</style>

<style scoped lang="scss">
.clinic-hero {
  position: relative;
  overflow: hidden;
  padding: 190px 0 96px;
  background: radial-gradient(circle at 8% 15%, rgba(65, 142, 113, .13), transparent 25%), linear-gradient(115deg, #f7fbf9 0%, #fff 58%, #edf6f2 100%);

  &::after {
    content: '';
    position: absolute;
    right: -100px;
    bottom: -230px;
    width: 510px;
    height: 510px;
    border: 1px solid rgba(65, 142, 113, .15);
    border-radius: 50%;
    box-shadow: 0 0 0 54px rgba(65, 142, 113, .035), 0 0 0 108px rgba(65, 142, 113, .025);
    pointer-events: none;
  }
}

.clinic-hero-row { min-height: 510px; }
.clinic-hero-content { position: relative; z-index: 2; max-width: 620px; }

.clinic-hero-eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 20px;
  color: #285b49;
  font-size: .83rem;
  font-weight: 700;
  letter-spacing: .09em;
  text-transform: uppercase;

  > span { width: 28px; height: 2px; background: #d68c45; }
}

.clinic-hero h1 {
  max-width: 600px;
  margin: 0 0 22px;
  color: #183d30;
  font-size: clamp(2.8rem, 5vw, 4.7rem);
  font-weight: 800;
  letter-spacing: -.055em;
  line-height: .98;
}

.clinic-hero-content > p {
  max-width: 570px;
  margin: 0 0 32px;
  color: #52655e;
  font-size: 1.08rem;
  line-height: 1.75;
}

.clinic-hero-actions {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 14px 24px;
  margin-bottom: 42px;
}

.clinic-hero-primary,
.clinic-hero-secondary {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 52px;
  font-weight: 700;
  transition: transform .2s ease, box-shadow .2s ease, color .2s ease;
}

.clinic-hero-primary {
  gap: 12px;
  padding: 0 24px;
  border-radius: 12px;
  background: #285b49;
  color: #fff;
  box-shadow: 0 12px 28px rgba(40, 91, 73, .22);

  &:hover { color: #fff; transform: translateY(-2px); box-shadow: 0 16px 34px rgba(40, 91, 73, .28); }
}

.clinic-hero-secondary {
  color: #285b49;
  text-decoration: underline;
  text-decoration-color: rgba(40, 91, 73, .3);
  text-underline-offset: 5px;
  &:hover { color: #d07937; }
}

.clinic-hero-primary:focus-visible,
.clinic-hero-secondary:focus-visible { outline: 3px solid rgba(214, 140, 69, .55); outline-offset: 4px; }

.clinic-hero-trust {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  max-width: 610px;
  margin: 0;
  padding: 22px 0 0;
  border-top: 1px solid rgba(40, 91, 73, .16);
  list-style: none;

  li { display: flex; flex-direction: column; padding: 0 18px; border-left: 1px solid rgba(40, 91, 73, .14); }
  li:first-child { padding-left: 0; border-left: 0; }
  strong { color: #23483b; font-size: .92rem; line-height: 1.35; }
  span { margin-top: 4px; color: #73817c; font-size: .76rem; line-height: 1.35; }
}

.clinic-hero-visual {
  position: relative;
  z-index: 1;
  width: min(100%, 560px);
  min-height: 510px;
  margin-left: auto;

  > img {
    position: absolute;
    z-index: 2;
    right: 12px;
    bottom: 0;
    width: min(100%, 500px);
    height: auto;
    object-fit: contain;
    filter: drop-shadow(0 24px 28px rgba(25, 67, 52, .15));
  }
}

.clinic-hero-shape {
  position: absolute;
  z-index: 1;
  inset: 12px 0 24px 44px;
  border-radius: 48% 48% 22% 48%;
  background: linear-gradient(145deg, #bcd9cf 0%, #76aa97 100%);
  transform: rotate(3deg);

  &::before { content: ''; position: absolute; inset: 18px; border: 1px solid rgba(255, 255, 255, .5); border-radius: inherit; }
}

.clinic-hero-note {
  position: absolute;
  z-index: 3;
  left: 4px;
  bottom: 35px;
  display: flex;
  align-items: center;
  gap: 12px;
  max-width: 280px;
  padding: 14px 18px;
  border: 1px solid rgba(40, 91, 73, .1);
  border-radius: 14px;
  background: rgba(255, 255, 255, .94);
  box-shadow: 0 16px 36px rgba(29, 65, 52, .16);
  backdrop-filter: blur(8px);

  > span:last-child { display: flex; flex-direction: column; color: #6c7c76; font-size: .72rem; line-height: 1.4; }
  strong { color: #285b49; font-size: .83rem; }
}

.clinic-hero-note-icon {
  display: grid;
  flex: 0 0 42px;
  width: 42px;
  height: 42px;
  place-items: center;
  border-radius: 50%;
  background: #e5f2ed;
  color: #285b49;
}

@media (max-width: 991px) {
  .clinic-hero { padding: 145px 0 70px; }
  .clinic-hero-row { min-height: 0; }
  .clinic-hero-content { max-width: 720px; margin: 0 auto; text-align: center; }
  .clinic-hero h1, .clinic-hero-content > p, .clinic-hero-trust { margin-left: auto; margin-right: auto; }
  .clinic-hero-eyebrow, .clinic-hero-actions { justify-content: center; }
  .clinic-hero-visual { min-height: 470px; margin: 48px auto 0; }
}

@media (max-width: 575px) {
  .clinic-hero { padding: 125px 0 54px; }
  .clinic-hero h1 { font-size: clamp(2.45rem, 12vw, 3.2rem); }
  .clinic-hero-content > p { font-size: .98rem; line-height: 1.65; }
  .clinic-hero-actions { align-items: stretch; flex-direction: column; margin-bottom: 32px; }
  .clinic-hero-primary, .clinic-hero-secondary { width: 100%; }
  .clinic-hero-trust { display: none; }
  .clinic-hero-visual { min-height: 350px; margin-top: 36px; }
  .clinic-hero-shape { inset: 5px 4px 20px 22px; }
  .clinic-hero-visual > img { right: 0; }
  .clinic-hero-note { left: 0; bottom: 16px; padding: 11px 13px; }
}

@media (prefers-reduced-motion: reduce) {
  .clinic-hero-primary, .clinic-hero-secondary { transition: none; }
}

.about-us {
  margin-top: 10%;

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

  #btn-send {
    background-color: #285B49;
  }
}

@media (max-width: 470px) {
  .main-banner .left-content h2{
    font-size: 2.4rem;
  }

  .our-services{
    padding-top: 2rem;
  }

  .our-services .container-fluid{
    padding: 0px 20px;
  }
}

@media (max-width: 991px){
  .main-banner{
    padding-top: 40%;
  }

  .main-banner .left-content h2{
    border-top: 0;
  }

  .img-doctors{
    position: absolute;
    z-index: -1;
    opacity: .4;
    top: 65%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}

/* Chrome, Safari, Edge, Opera */
input[type=number]::-webkit-inner-spin-button,
input[type=number]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type=number] {
  -moz-appearance: textfield;
}

</style>
