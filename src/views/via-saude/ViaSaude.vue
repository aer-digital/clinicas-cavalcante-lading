<script setup>
import { ref } from 'vue'

const openFaq = ref(null)
function toggleFaq(i) {
  openFaq.value = openFaq.value === i ? null : i
}

const planType = ref('individual')

const showAllFaq = ref(false)

const openPreviewFaq = ref(null)
function togglePreviewFaq(i) {
  openPreviewFaq.value = openPreviewFaq.value === i ? null : i
}

const previewFaq = [
  { q: 'O cartão é plano de saúde?', a: 'Não. O Via Saúde é um cartão de benefícios que oferece descontos e condições especiais em serviços de saúde, sem ser um plano de saúde regulamentado.' },
  { q: 'Posso incluir dependentes?', a: 'Sim. O titular pode incluir até 5 dependentes sem acréscimo na mensalidade.' },
  { q: 'Existe carência?', a: 'Não. Não existe carência para utilização dos benefícios — o acesso é imediato após a contratação.' },
  { q: 'Como funciona o cancelamento?', a: 'O Via Saúde não possui fidelidade. O cancelamento pode ser solicitado a qualquer momento pelos canais de atendimento, desde que não existam mensalidades pendentes.' },
  { q: 'Como agendar consultas e exames?', a: 'O agendamento é feito pelos canais de atendimento das unidades credenciadas, tendo o Centro Médico Cavalcante como principal referência.' },
  { q: 'Como funciona a consulta cortesia?', a: 'A partir dos planos Prata e Ouro você tem 1 consulta gratuita por mês nas especialidades previstas no seu plano.' },
]

const faqGroups = [
  {
    category: 'Contratação e Adesão',
    items: [
      { q: 'O que é o Cartão de Benefícios Via Saúde?', a: 'É um programa de descontos em saúde que oferece acesso a consultas, exames e benefícios odontológicos por uma mensalidade acessível.' },
      { q: 'O Via Saúde é um plano de saúde?', a: 'Não. É um cartão de benefícios que oferece descontos e condições especiais em serviços de saúde.' },
      { q: 'Quais documentos são necessários para contratar?', a: 'Para o titular: RG, CPF ou CNH e comprovante de residência atualizado. Para dependentes: RG, CPF ou CNH.' },
      { q: 'Existe taxa de adesão?', a: 'Sim. Na contratação é cobrada a primeira mensalidade mais uma taxa de adesão equivalente ao valor da mensalidade do plano escolhido.' },
      { q: 'Posso mudar de plano depois de contratar?', a: 'Sim. Nossa equipe poderá orientar sobre a migração para outro plano.' },
      { q: 'Posso usar o cartão logo após contratar?', a: 'Sim. Não existe carência para utilização dos benefícios.' },
    ]
  },
  {
    category: 'Titular e Dependentes',
    items: [
      { q: 'Quantas pessoas podem utilizar o cartão?', a: 'O titular pode incluir até 5 dependentes sem acréscimo na mensalidade.' },
      { q: 'Quem pode ser dependente?', a: 'Cônjuge, filhos e outros familiares, conforme as regras do contrato.' },
      { q: 'Os dependentes também têm direito aos benefícios?', a: 'Sim. Todos os dependentes cadastrados podem utilizar os benefícios previstos no plano contratado.' },
      { q: 'Existe acréscimo na mensalidade devido à idade?', a: 'Não. O valor da mensalidade é fixo de acordo com o plano escolhido e não sofre alteração em função da idade do titular ou dos dependentes cadastrados.' },
      { q: 'Há limite de idade para contratar o cartão?', a: 'Não. O Cartão Via Saúde pode ser contratado por pessoas de qualquer faixa etária, conforme as condições cadastrais estabelecidas pela empresa.' },
      { q: 'O valor aumenta ao incluir dependentes?', a: 'Não. O titular pode incluir até 5 dependentes sem acréscimo no valor da mensalidade do plano contratado.' },
    ]
  },
  {
    category: 'Consultas Médicas',
    items: [
      { q: 'Como faço para agendar uma consulta?', a: 'O agendamento pode ser realizado pelos canais de atendimento das unidades credenciadas.' },
      { q: 'Como funciona a consulta cortesia?', a: 'Os planos que possuem esse benefício oferecem 1 consulta gratuita por mês em especialidades específicas do plano.' },
      { q: 'Posso escolher qualquer especialidade para a consulta cortesia?', a: 'Não. As especialidades disponíveis variam conforme o plano contratado.' },
      { q: 'Como funciona o retorno médico?', a: 'As consultas possuem retorno em até 30 dias corridos, conforme a especialidade e as regras do profissional.' },
      { q: 'A consulta com nutricionista possui retorno?', a: 'Não. As consultas de Nutrição não possuem retorno incluso.' },
      { q: 'Onde posso utilizar as consultas?', a: 'Em toda a rede credenciada, tendo como principal referência o Centro Médico Cavalcante.' },
    ]
  },
  {
    category: 'Exames e Odontologia',
    items: [
      { q: 'Quais descontos tenho nos exames laboratoriais?', a: 'Bronze: 30% | Prata: 30% | Ouro: 30% | Diamante: 35% de desconto nos exames laboratoriais.' },
      { q: 'Posso realizar exames sem pedido médico?', a: 'Alguns exames podem exigir solicitação médica. Consulte nossa equipe para orientações.' },
      { q: 'Todos os planos possuem benefícios odontológicos?', a: 'Os planos Prata, Ouro e Diamante oferecem benefícios odontológicos. O plano Bronze não inclui odontologia.' },
      { q: 'Os dependentes têm direito aos benefícios odontológicos?', a: 'Sim. Os benefícios odontológicos contemplam titular e dependentes conforme o plano contratado.' },
    ]
  },
  {
    category: 'Pagamentos e Cancelamento',
    items: [
      { q: 'Quais formas de pagamento são aceitas?', a: 'Cartão de crédito recorrente, boleto bancário e plano pré-pago (3, 6 ou 12 meses).' },
      { q: 'Posso escolher a data de vencimento?', a: 'Sim. Para pagamento via boleto, o cliente escolhe a data de vencimento.' },
      { q: 'O que acontece se eu atrasar uma mensalidade?', a: 'Os benefícios ficam indisponíveis até a regularização dos pagamentos.' },
      { q: 'Existe fidelidade contratual?', a: 'Não. O Via Saúde não possui fidelidade. O cancelamento pode ser solicitado a qualquer momento pelos canais de atendimento.' },
      { q: 'Existe alguma condição para cancelamento?', a: 'Sim. É necessário que não existam mensalidades pendentes em aberto.' },
    ]
  },
]
</script>

<template>
  <div class="vs-page">

    <!-- Header -->
    <header class="vs-header">
      <div class="vs-topbar">
        <div class="vs-container">
          <div class="vs-topbar-inner">
            <div class="vs-topbar-links">
              <a href="https://planoonline.com.br/portal/redirect/viasaude/rede-credenciada" target="_blank">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
                Rede credenciada
              </a>
              <a href="https://planoonline.com.br/portal/redirect/viasaude/segunda-via" target="_blank">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/></svg>
                Segunda Via
              </a>
            </div>
            <div class="vs-topbar-contacts">
              <a href="https://wa.me/+551321912391" target="_blank">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
                +55 13 2191-2391
              </a>
              <a href="mailto:cartaoviasaude@gmail.com">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
                cartaoviasaude@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="vs-header-main">
        <div class="vs-container">
          <div class="vs-header-inner">
            <a href="#inicio" class="vs-logo">
              <img src="/assets/img/via_saude.png" alt="Via Saúde" />
            </a>
            <nav class="vs-nav">
              <a href="#inicio">Início</a>
              <a href="#planos">Planos</a>
              <a href="#como-funciona">Como funciona</a>
              <a href="https://planoonline.com.br/portal/redirect/viasaude/rede-credenciada" target="_blank">Rede credenciada</a>
              <a href="#faq">FAQ</a>
            </nav>
            <a href="https://wa.me/+551321912391" class="vs-btn vs-btn-wpp" target="_blank">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </header>

    <!-- Hero -->
    <section id="inicio" class="vs-hero">
      <div class="vs-container">
        <div class="vs-hero-grid">
          <div class="vs-hero-content">
            <h1>Mais saúde para você. <span>Mais economia</span> para o seu dia a dia.</h1>
            <p>Consultas, exames e procedimentos com descontos em uma ampla rede credenciada na Baixada Santista.</p>
            <div class="vs-hero-checks">
              <span><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg> Sem carência</span>
              <span><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg> Sem burocracia</span>
              <span><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg> Uso imediato</span>
            </div>
            <div class="vs-hero-btns">
              <a href="https://wa.me/+551321912391?text=Oi.%20%0AQueria%20contratar%20um%20plano%20do%20via%20sa%C3%BAde." class="vs-btn" style="background-color: var(--vs-accent); color: white;" target="_blank">Quero contratar</a>
              <a href="#planos" class="vs-btn vs-btn-outline">Ver planos</a>
            </div>
          </div>
          <div class="vs-hero-media">

            <div class="vs-hero-stats">
              <div class="vs-hero-stat">
                <span class="vs-hero-stat-icon">🩺</span>
                <div><b>9+</b><p>Especialidades</p></div>
              </div>
              <div class="vs-hero-stat">
                <span class="vs-hero-stat-icon">💰</span>
                <div><b>Até 35%</b><p>de desconto</p></div>
              </div>
              <div class="vs-hero-stat">
                <span class="vs-hero-stat-icon">👨‍👩‍👧‍👦</span>
                <div><b>5</b><p>dependentes sem custo extra</p></div>
              </div>
              <div class="vs-hero-stat">
                <span class="vs-hero-stat-icon">📍</span>
                <div><b>Baixada</b><p>Santista</p></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Features -->
    <section class="vs-features">
      <div class="vs-container">
        <div class="vs-section-title">
          <h2>Benefícios que fazem a <b>diferença</b></h2>
        </div>
        <div class="vs-features-grid">
          <div class="vs-feature-card">
            <div class="vs-feature-icon">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor"><path d="M20 6h-2.18c.07-.44.18-.86.18-1.3C18 2.12 15.88 0 13.3 0c-1.3 0-2.4.52-3.27 1.38L9 2.41 7.96 1.38C7.09.52 6 0 4.7 0 2.12 0 0 2.12 0 4.7c0 .44.11.86.18 1.3H1.99C.89 6 0 6.89 0 8v12c0 1.11.89 2 2 2h18c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zM13.3 2c1.49 0 2.7 1.21 2.7 2.7 0 .29-.06.56-.12.82-.2.79-.59 1.52-1.1 2.15L13.3 9.42l-1.47-1.73c-.52-.64-.92-1.37-1.12-2.17-.05-.25-.11-.52-.11-.82C10.6 3.21 11.81 2 13.3 2zM4.7 2c1.49 0 2.7 1.21 2.7 2.7 0 .3-.06.57-.11.82C7.09 6.32 6.69 7.05 6.17 7.69L4.7 9.42 3.22 7.67C2.71 7.04 2.31 6.31 2.11 5.52 2.06 5.27 2 5 2 4.7 2 3.21 3.21 2 4.7 2zm15.3 18H2V8h3.93l3.57 4.2 3.57-4.2H20v12z"/></svg>
            </div>
            <h4>Consultas médicas</h4>
            <p>Diversas especialidades com preços acessíveis.</p>
          </div>
          <div class="vs-feature-card">
            <div class="vs-feature-icon">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor"><path d="M19.5 12c0-1.93-1.57-3.5-3.5-3.5H13V6.5c0-1.93-1.57-3.5-3.5-3.5S6 4.57 6 6.5v.5H4.5C2.57 7 1 8.57 1 10.5S2.57 14 4.5 14H6v.5C6 16.43 7.57 18 9.5 18s3.5-1.57 3.5-3.5V14h2.5c1.93 0 3.5-1.57 3.5-3.5zM9.5 16C8.67 16 8 15.33 8 14.5V14h3v.5c0 .83-.67 1.5-1.5 1.5zM8 8v-.5C8 6.67 8.67 6 9.5 6S11 6.67 11 7.5V8H8zm3 4H4.5C3.67 12 3 11.33 3 10.5S3.67 9 4.5 9H11v3zm2 0V9h2.5c.83 0 1.5.67 1.5 1.5S16.33 12 15.5 12H13z"/></svg>
            </div>
            <h4>Exames laboratoriais</h4>
            <p>Descontos de até 35% em centenas de exames.</p>
          </div>
          <div class="vs-feature-card">
            <div class="vs-feature-icon">🦷</div>
            <h4>Odontologia</h4>
            <p>Procedimentos odontológicos com valores especiais a partir do plano Prata.</p>
          </div>
          <div class="vs-feature-card">
            <div class="vs-feature-icon">♀</div>
            <h4>Ginecologia</h4>
            <p>Cuide da sua saúde com quem entende de mulher.</p>
          </div>
          <div class="vs-feature-card">
            <div class="vs-feature-icon">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
            </div>
            <h4>Procedimentos Estéticos</h4>
            <p>Realce sua beleza com tratamentos modernos e personalizados, realizados por especialistas.</p>
          </div>
          <div class="vs-feature-card">
            <div class="vs-feature-icon">➕</div>
            <h4>E muito mais</h4>
            <p>Ortopedia, Nutrição, Oftalmologia, Endocrinologia, Geriatria e Otorrinolaringologia.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Como funciona -->
    <section id="como-funciona" class="vs-how">
      <div class="vs-container">
        <div class="vs-section-title">
          <h2>Como <b>funciona</b></h2>
        </div>
        <div class="vs-how-steps">
          <div class="vs-how-step">
            <div class="vs-how-num">1</div>
            <div class="vs-how-icon">📋</div>
            <h5>Escolha seu plano</h5>
            <p>Selecione o plano que melhor atende você e sua família.</p>
          </div>
          <div class="vs-how-arrow">→</div>
          <div class="vs-how-step">
            <div class="vs-how-num">2</div>
            <div class="vs-how-icon">💬</div>
            <h5>Faça sua adesão</h5>
            <p>Fale com nossa equipe pelo WhatsApp e finalize sem burocracia.</p>
          </div>
          <div class="vs-how-arrow">→</div>
          <div class="vs-how-step">
            <div class="vs-how-num">3</div>
            <div class="vs-how-icon">💳</div>
            <h5>Receba seu acesso</h5>
            <p>Sem carência: seu cartão já pode ser utilizado.</p>
          </div>
          <div class="vs-how-arrow">→</div>
          <div class="vs-how-step">
            <div class="vs-how-num">4</div>
            <div class="vs-how-icon">📅</div>
            <h5>Agende consultas e exames</h5>
            <p>Escolha o profissional ou clínica da rede credenciada e agende.</p>
          </div>
          <div class="vs-how-arrow">→</div>
          <div class="vs-how-step">
            <div class="vs-how-num">5</div>
            <div class="vs-how-icon">❤️</div>
            <h5>Economize em toda a rede</h5>
            <p>Aproveite os descontos exclusivos do seu plano.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Plans -->
    <section id="planos" class="vs-plans">
      <div class="vs-container">
        <div class="vs-section-title">
          <h2>Cartão de Descontos Familiar: <b>Economia</b> e <b>Benefícios</b> em Um Só Plano</h2>
          <p>Somos um cartão benefício que oferece descontos exclusivos através de uma mensalidade única para você e sua família</p>
        </div>

        <!-- Toggle Individual / Empresarial -->
        <div class="vs-plans-toggle">
          <button :class="{ active: planType === 'individual' }" @click="planType = 'individual'">
            Individual
          </button>
          <button :class="{ active: planType === 'empresarial' }" @click="planType = 'empresarial'">
            Empresarial
          </button>
        </div>

        <!-- Individual plans -->
        <div v-if="planType === 'individual'" class="vs-plans-grid">

          <!-- Bronze -->
          <div class="vs-plan-card">
            <div class="vs-plan-badge">🥉</div>
            <h4 class="vs-plan-name">Plano Bronze</h4>
            <div class="vs-plan-price">R$29,90<span>/mês</span></div>
            <ul class="vs-plan-list">
              <li>Descontos em consultas e exames na rede credenciada</li>
              <li>30% de desconto em exames laboratoriais</li>
            </ul>
            <div class="vs-plan-btn" style="margin-top: auto;">
              <a class="vs-btn" href="https://wa.me/551321912391?text=Oi.%20%0AQueria%20saber%20mais%20sobre%20o%20Plano%20Bronze%20do%20via%20sa%C3%BAde." target="_blank">Escolher Bronze</a>
            </div>
          </div>

          <!-- Prata -->
          <div class="vs-plan-card">
            <div class="vs-plan-badge">🥈</div>
            <h4 class="vs-plan-name">Plano Prata</h4>
            <div class="vs-plan-price">R$49,90<span>/mês</span></div>
            <ul class="vs-plan-list">
              <li>Descontos em consultas e exames na rede credenciada</li>
              <li>1 consulta gratuita por mês:</li>
              <li>Clínico geral</li>
              <li>Ginecologista</li>
            </ul>
            <div class="vs-plan-dental">
              <h5>🦷 Benefícios Odontológicos</h5>
              <ul>
                <li>Consulta inicial com especialista</li>
                <li>Limpeza odontológica a cada 6 meses (titular e dependentes)</li>
                <li>30% de desconto nos demais procedimentos odontológicos</li>
              </ul>
            </div>
            <div class="vs-plan-btn">
              <a class="vs-btn" href="https://wa.me/551321912391?text=Oi.%20%0AQueria%20saber%20mais%20sobre%20o%20Plano%20Prata%20do%20via%20sa%C3%BAde." target="_blank">Escolher Prata</a>
            </div>
          </div>

          <!-- Ouro -->
          <div class="vs-plan-card">
            <div class="vs-plan-badge">🥇</div>
            <h4 class="vs-plan-name">Plano Ouro</h4>
            <div class="vs-plan-price">R$59,90<span>/mês</span></div>
            <ul class="vs-plan-list">
              <li>Descontos em consultas e exames na rede credenciada</li>
              <li>Benefícios do plano Prata</li>
              <li>Pediatra</li>
              <li>Ortopedista</li>
              <li>Nutrição</li>
              <li>Oftalmologista</li>
            </ul>
            <div class="vs-plan-dental">
              <h5>🦷 Benefícios Odontológicos</h5>
              <ul>
                <li>Consulta inicial com especialista</li>
                <li>Limpeza odontológica a cada 6 meses (titular e dependentes)</li>
                <li>RX periapical</li>
                <li>30% de desconto nos demais procedimentos odontológicos</li>
              </ul>
            </div>
            <div class="vs-plan-btn">
              <a class="vs-btn" href="https://wa.me/551321912391?text=Oi.%20%0AQueria%20saber%20mais%20sobre%20o%20Plano%20Ouro%20do%20via%20sa%C3%BAde." target="_blank">Escolher Ouro</a>
            </div>
          </div>
          
          <!-- Diamante -->
          <div class="vs-plan-card vs-plan-card--featured">
            <div class="vs-plan-ribbon">Mais escolhido</div>
            <div class="vs-plan-badge">💎</div>
            <h4 class="vs-plan-name">Plano Diamante</h4>
            <div class="vs-plan-price">R$99,90<span>/mês</span></div>
            <ul class="vs-plan-list">
              <li>Benefícios do plano Ouro</li>
              <li>35% de desconto em exames laboratoriais</li>
              <li>Endocrinologista</li>
              <li>Geriatria</li>
              <li>Otorrinolaringologista</li>
              <li>E muito mais...</li>
            </ul>
            <div class="vs-plan-dental">
              <h5>🦷 Benefícios Odontológicos</h5>
              <ul>
                <li>Consulta inicial com especialista</li>
                <li>Limpeza odontológica a cada 6 meses (titular e dependentes)</li>
                <li>RX periapical</li>
                <li>1 restauração (remoção de cárie)</li>
                <li>1 sessão de clareamento em consultório</li>
                <li>30% de desconto nos demais procedimentos odontológicos</li>
              </ul>
            </div>
            <div class="vs-plan-btn">
              <a class="vs-btn" href="https://wa.me/551321912391?text=Oi.%20%0AQueria%20saber%20mais%20sobre%20o%20Plano%20Diamante%20do%20via%20sa%C3%BAde." target="_blank">Escolher Diamante</a>
            </div>
          </div>

        </div>

        <!-- Empresarial plans -->
        <div v-if="planType === 'empresarial'" class="vs-plans-grid vs-plans-grid--2col">

          <!-- Ouro Empresarial -->
          <div class="vs-plan-card">
            <div class="vs-plan-badge">🥇</div>
            <h4 class="vs-plan-name">Plano Ouro</h4>
            <div class="vs-plan-tag">Empresarial</div>
            <div class="vs-plan-price">R$49,90<span>/mês</span></div>
            <div class="vs-plan-section-label">Centro Médico</div>
            <ul class="vs-plan-list">
              <li>Descontos em consultas e exames dentro da rede credenciada</li>
              <li>1 consulta/mês: clínico geral, ginecologia, pediatria, ortopedia, nutrição ou oftalmologia</li>
            </ul>
            <div class="vs-plan-dental">
              <h5>🦷 Odontologia</h5>
              <ul>
                <li>Limpeza a cada 6 meses para titular e dependentes</li>
                <li>RX periapical</li>
                <li>30% de desconto nos demais procedimentos</li>
              </ul>
            </div>
            <div class="vs-plan-btn">
              <a class="vs-btn" href="https://wa.me/551321912391?text=Oi.%20%0AQueria%20saber%20mais%20sobre%20o%20Plano%20Ouro%20Empresarial%20do%20via%20sa%C3%BAde." target="_blank">Selecionar plano</a>
            </div>
          </div>

          <!-- Diamante Empresarial -->
          <div class="vs-plan-card vs-plan-card--featured">
            <div class="vs-plan-ribbon">Recomendado</div>
            <div class="vs-plan-badge">💎</div>
            <h4 class="vs-plan-name">Plano Diamante</h4>
            <div class="vs-plan-tag vs-plan-tag--featured">Empresarial</div>
            <div class="vs-plan-price">R$79,90<span>/mês</span></div>
            <p class="vs-plan-includes">Inclui todos os benefícios do plano Ouro, e mais:</p>
            <div class="vs-plan-section-label">Centro Médico</div>
            <ul class="vs-plan-list">
              <li>1 consulta/mês: endocrinologia, geriatria ou otorrinolaringologia</li>
            </ul>
            <div class="vs-plan-dental">
              <h5>🦷 Odontologia</h5>
              <ul>
                <li>1 restauração (remoção de cárie)</li>
                <li>1 sessão de clareamento em consultório</li>
                <li>30% de desconto nos demais procedimentos</li>
              </ul>
            </div>
            <div class="vs-plan-btn">
              <a class="vs-btn" href="https://wa.me/551321912391?text=Oi.%20%0AQueria%20saber%20mais%20sobre%20o%20Plano%20Diamante%20Empresarial%20do%20via%20sa%C3%BAde." target="_blank">Selecionar plano</a>
            </div>
          </div>

        </div>

        <!-- Comparison table -->
        <div v-if="planType === 'individual'" class="vs-compare">
          <h3>Compare os planos</h3>
          <div class="vs-compare-scroll">
            <table class="vs-compare-table">
              <thead>
                <tr>
                  <th style="color: #fff;">Principais benefícios</th>
                  <th>Bronze</th>
                  <th>Prata</th>
                  <th>Ouro</th>
                  <th class="vs-compare-featured">Diamante</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Consultas médicas</td>
                  <td>✓</td><td>✓</td><td>✓</td><td class="vs-compare-featured">✓</td>
                </tr>
                <tr>
                  <td>Desconto em exames</td>
                  <td>✓</td><td>✓</td><td>✓</td><td class="vs-compare-featured">✓</td>
                </tr>
                <tr>
                  <td>Exames laboratoriais</td>
                  <td>30%</td><td>30%</td><td>30%</td><td class="vs-compare-featured">35%</td>
                </tr>
                <tr>
                  <td>Odontologia</td>
                  <td>—</td><td>Básica</td><td>Completa</td><td class="vs-compare-featured">Completa</td>
                </tr>
                <tr>
                  <td>Especialidades com consulta cortesia/mês</td>
                  <td>—</td><td>2</td><td>6</td><td class="vs-compare-featured">9</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>

    <!-- About / Centro Médico Cavalcante -->
    <section class="vs-about">
      <div class="vs-container">
        <div class="vs-about-grid">
          <div class="vs-about-text">
            <h2>Centro Médico Cavalcante</h2>
            <p>Através do cartão de benefícios o cliente tem descontos em consultas e exames dentro da rede credenciada, sendo a principal rede o Centro Médico Cavalcante. As consultas cortesia são prestadas através desta rede.</p>
            <div class="vs-about-rules">
              <div class="vs-rule-item">
                <span class="vs-rule-icon">✓</span>
                <span><b>1 consulta gratuita</b> no mês por contrato a partir do plano Prata e Ouro</span>
              </div>
              <div class="vs-rule-item">
                <span class="vs-rule-icon">✓</span>
                <span>Zero carência e fidelização de contrato</span>
              </div>
              <div class="vs-rule-item">
                <span class="vs-rule-icon">✓</span>
                <span>Até 5 dependentes sem acréscimo na mensalidade</span>
              </div>
            </div>
            <div class="vs-about-btn">
              <a class="vs-btn" href="https://wa.me/+551321912391?text=Oi.%20%0AQueria%20conhecer%20o%20Centro%20M%C3%A9dico%20Cavalcante." target="_blank">Conhecer unidade</a>
            </div>
          </div>
          <div class="vs-about-img">
            <img src="/assets/img/medicos-cavalcante.avif" alt="Centro Médico Cavalcante" />
            <div class="vs-about-badge">📍 Atendimento na Baixada Santista</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Trust bar -->
    <section class="vs-trust">
      <div class="vs-container">
        <div class="vs-trust-title">A confiança de quem já usa</div>
        <div class="vs-trust-grid">
          <div class="vs-trust-item">
            <span class="vs-trust-icon">💙</span>
            <div><b>+8.500</b><small>vidas atendidas</small></div>
          </div>
          <div class="vs-trust-item">
            <span class="vs-trust-icon">⭐</span>
            <div><b>4,6/5</b><small>satisfação dos clientes</small></div>
          </div>
          <div class="vs-trust-item">
            <span class="vs-trust-icon">🏥</span>
            <div><b>Diversos</b><small>parceiros credenciados</small></div>
          </div>
          <div class="vs-trust-item">
            <span class="vs-trust-icon">🩺</span>
            <div><b>9+</b><small>especialidades</small></div>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ -->
    <section id="faq" class="vs-faq">
      <div class="vs-container">
        <div class="vs-section-title">
          <h2>Perguntas <b>Frequentes</b></h2>
          <p>Tire suas dúvidas sobre o Cartão de Benefícios Via Saúde</p>
        </div>

        <!-- Compact preview -->
        <div v-if="!showAllFaq" class="vs-faq-preview-grid">
          <div
            v-for="(item, i) in previewFaq"
            :key="i"
            class="vs-faq-item"
            :class="{ open: openPreviewFaq === i }"
          >
            <button class="vs-faq-question" @click="togglePreviewFaq(i)">
              <span>{{ item.q }}</span>
              <span class="vs-faq-icon">{{ openPreviewFaq === i ? '−' : '+' }}</span>
            </button>
            <div v-show="openPreviewFaq === i" class="vs-faq-answer">
              <p>{{ item.a }}</p>
            </div>
          </div>
        </div>

        <div class="vs-faq-more">
          <button class="vs-btn vs-btn-outline-primary" @click="showAllFaq = !showAllFaq">
            {{ showAllFaq ? 'Ver menos perguntas' : 'Ver todas as perguntas' }}
          </button>
        </div>

        <!-- Full categorized list -->
        <div v-if="showAllFaq" class="vs-faq-groups">
          <template v-for="(group, gi) in faqGroups" :key="gi">
            <div class="vs-faq-category">{{ group.category }}</div>
            <div
              v-for="(item, ii) in group.items"
              :key="`${gi}-${ii}`"
              class="vs-faq-item"
              :class="{ open: openFaq === `${gi}-${ii}` }"
            >
              <button class="vs-faq-question" @click="toggleFaq(`${gi}-${ii}`)">
                <span>{{ item.q }}</span>
                <span class="vs-faq-icon">{{ openFaq === `${gi}-${ii}` ? '−' : '+' }}</span>
              </button>
              <div v-show="openFaq === `${gi}-${ii}`" class="vs-faq-answer">
                <p>{{ item.a }}</p>
              </div>
            </div>
          </template>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="vs-cta">
      <div class="vs-container">
        <div class="vs-cta-inner">
          <div class="vs-cta-icon">💙</div>
          <div class="vs-cta-text">
            <h2>Comece a economizar com saúde hoje mesmo!</h2>
            <p>Escolha seu plano e tenha acesso a uma rede completa de benefícios com descontos exclusivos.</p>
          </div>
          <div class="vs-cta-btns">
            <a href="#planos" class="vs-btn">Quero meu plano agora</a>
            <a href="https://wa.me/+551321912391" class="vs-btn vs-btn-light" target="_blank">Falar no WhatsApp</a>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="vs-footer">
      <div class="vs-container">
        <p>© Copyright 2025 | Todos os direitos reservados por A&amp;R</p>
      </div>
    </footer>

  </div>
</template>

<style lang="scss">
/* =============================================
   Via Saúde – Self-contained styles
   All rules scoped under .vs-page
   ============================================= */

/* CSS vars – Via Saúde uses blue as primary */
.vs-page {
  --vs-primary: rgb(58, 87, 165);
  --vs-primary-dark: #2d4591;
  --vs-primary-light: #5570c0;
  --vs-secondary: #AC453A;
  --vs-accent: #52b38d;
  --vs-base: #eaeaea;
  --vs-dark: #2d2d2d;
  --vs-dark2: #555;
  --vs-white: #fff;
  --vs-radius: 8px;
  --vs-shadow: 0 4px 20px rgba(0,0,0,0.08);

  font-family: 'Open Sans', sans-serif;
  color: var(--vs-dark);
  background: var(--vs-base);
  min-height: 100vh;
}

.vs-container {
  max-width: 1140px;
  margin: 0 auto;
  padding: 0 20px;
}

/* ---- Shared button ---- */
.vs-btn {
  display: inline-block;
  padding: 12px 28px;
  background: var(--vs-primary);
  color: var(--vs-white) !important;
  border-radius: var(--vs-radius);
  font-weight: 600;
  font-size: 0.9rem;
  text-decoration: none;
  transition: background 0.2s, transform 0.1s;
  border: 2px solid var(--vs-primary);
  cursor: pointer;
}
.vs-btn:hover { background: var(--vs-primary-dark); border-color: var(--vs-primary-dark); transform: translateY(-1px); }

.vs-btn-outline {
  background: transparent;
  color: var(--vs-white) !important;
  border-color: var(--vs-white);
}
.vs-btn-outline:hover { background: rgba(255,255,255,0.15); }

.vs-btn-outline-primary {
  background: transparent;
  color: var(--vs-primary) !important;
  border-color: var(--vs-primary);
}
.vs-btn-outline-primary:hover { background: rgba(58,87,165,0.08); }

.vs-btn-wpp {
  background: var(--vs-accent);
  border-color: var(--vs-accent);
  display: flex;
  align-items: center;
  gap: 6px;
}
.vs-btn-wpp:hover { background: #1ebe5a; border-color: #1ebe5a; }

.vs-btn-light {
  background: var(--vs-white);
  color: var(--vs-primary) !important;
  border-color: var(--vs-white);
}
.vs-btn-light:hover { background: var(--vs-base); }

/* ---- Section title ---- */
.vs-section-title {
  text-align: center;
  margin-bottom: 48px;
}
.vs-section-title h2 {
  font-size: 1.8rem;
  font-weight: 300;
  color: var(--vs-dark);
  margin-bottom: 12px;
  line-height: 1.3;
}
.vs-section-title h2 b { font-weight: 700; color: var(--vs-primary); }
.vs-section-title p { color: var(--vs-dark2); font-size: 1rem; max-width: 600px; margin: 0 auto; }

/* =============================================
   HEADER
   ============================================= */
.vs-topbar {
  background: var(--vs-primary-dark);
  padding: 8px 0;
}
.vs-topbar-inner {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  flex-wrap: wrap;
}
.vs-topbar-links, .vs-topbar-contacts {
  display: flex;
  gap: 20px;
  align-items: center;
  flex-wrap: wrap;
}
.vs-topbar a {
  color: rgba(255,255,255,0.85);
  text-decoration: none;
  font-size: 0.8rem;
  display: flex;
  align-items: center;
  gap: 5px;
  transition: color 0.2s;
}
.vs-topbar a:hover { color: #fff; }

.vs-header-main {
  background: #fff;
  box-shadow: 0 2px 10px rgba(0,0,0,0.08);
  padding: 14px 0;
}
.vs-header-inner {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 24px;
}
.vs-logo img {
  height: 56px;
  object-fit: contain;
}
.vs-nav {
  display: flex;
  align-items: center;
  gap: 24px;
  flex: 1;
  justify-content: center;
}
.vs-nav a {
  color: var(--vs-dark2);
  text-decoration: none;
  font-size: 0.92rem;
  font-weight: 600;
  transition: color 0.2s;
  white-space: nowrap;
}
.vs-nav a:hover { color: var(--vs-primary); }

/* =============================================
   HERO
   ============================================= */
.vs-hero {
  background:
    linear-gradient(
      90deg,
      rgba(58, 87, 165, 1) 0%,
      rgba(58, 87, 165, 1) 35%,
      rgba(58, 87, 165, 1) 40%,
      rgba(58, 87, 165, 0) 100%
    ),
    url('/assets/img/via-saude/family_full.avif') right center / auto 140% no-repeat;

  padding: 80px 0;
}
.vs-hero-grid {
  display: grid;
  grid-template-columns: 1.1fr 1fr;
  gap: 48px;
  align-items: end;
}
.vs-hero-content h1 {
  font-size: 2.3rem;
  font-weight: 700;
  color: #fff;
  margin-bottom: 20px;
  line-height: 1.25;
}
.vs-hero-content h1 span { color: #7fe8bf; }
.vs-hero-content > p {
  color: rgba(255,255,255,0.88);
  font-size: 1rem;
  line-height: 1.7;
  margin-bottom: 20px;
}
.vs-hero-checks {
  display: flex;
  gap: 18px;
  flex-wrap: wrap;
  margin-bottom: 28px;
}
.vs-hero-checks span {
  display: flex;
  align-items: center;
  gap: 6px;
  color: #fff;
  font-size: 0.88rem;
  font-weight: 600;
}
.vs-hero-checks svg { color: #7fe8bf; flex-shrink: 0; }
.vs-hero-btns { 
  display: flex; 
  gap: 14px; 
  flex-wrap: wrap; 
  margin-top: 5rem;
}

.vs-hero-media { position: relative; }
.vs-hero-photo {
  background: rgba(255,255,255,0.12);
  border-radius: 16px;
  padding: 16px;
  display: flex;
  justify-content: center;
}
.vs-hero-photo img {
  max-width: 100%;
  max-height: 300px;
  object-fit: contain;
  filter: drop-shadow(0 8px 24px rgba(0,0,0,0.25));
}
.vs-hero-stats {
  margin-top: 16px;
  background: rgba(255, 255, 255, 0.7);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(9.6px);
  border: 1px solid rgba(255, 255, 255, 0.3);

  padding: 12px 18px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
}
.vs-hero-stat {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 6px;
}
.vs-hero-stat-icon { font-size: 1.3rem; }
.vs-hero-stat b { display: block; color: var(--vs-primary); font-size: 1.05rem; line-height: 1.1; }
.vs-hero-stat p { color: var(--vs-dark2); font-size: 0.8rem; line-height: 1.3; margin-top: .3rem; }

/* =============================================
   FEATURES
   ============================================= */
.vs-features {
  background: #fff;
  padding: 80px 0;
}
.vs-features-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}
.vs-feature-card {
  padding: 32px 24px;
  border: 1px solid #f0f0f0;
  border-radius: var(--vs-radius);
  transition: box-shadow 0.2s, transform 0.2s;
}
.vs-feature-card:hover { box-shadow: var(--vs-shadow); transform: translateY(-2px); }
.vs-feature-icon {
  width: 56px;
  height: 56px;
  background: var(--vs-base);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--vs-primary);
  font-size: 1.4rem;
  margin-bottom: 18px;
}
.vs-feature-card h4 {
  font-size: 1.05rem;
  font-weight: 700;
  color: var(--vs-dark);
  margin-bottom: 10px;
}
.vs-feature-card p { color: var(--vs-dark2); line-height: 1.6; font-size: 0.88rem; }

/* =============================================
   COMO FUNCIONA
   ============================================= */
.vs-how {
  background: var(--vs-base);
  padding: 80px 0;
}
.vs-how-steps {
  display: flex;
  align-items: stretch;
  justify-content: center;
  gap: 8px;
  flex-wrap: wrap;
}
.vs-how-step {
  background: #fff;
  border-radius: var(--vs-radius);
  box-shadow: var(--vs-shadow);
  padding: 24px 16px;
  text-align: center;
  width: 190px;
  position: relative;
}
.vs-how-num {
  position: absolute;
  top: -12px;
  left: 50%;
  transform: translateX(-50%);
  width: 26px;
  height: 26px;
  border-radius: 50%;
  background: var(--vs-primary);
  color: #fff;
  font-size: 0.8rem;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
}
.vs-how-icon { font-size: 1.6rem; margin: 10px 0 12px; }
.vs-how-step h5 { font-size: 0.92rem; font-weight: 700; color: var(--vs-primary); margin-bottom: 8px; }
.vs-how-step p { font-size: 0.78rem; color: var(--vs-dark2); line-height: 1.5; }
.vs-how-arrow { color: var(--vs-primary-light); font-size: 1.2rem; align-self: center; margin-top: 30px; }

/* =============================================
   PLANS
   ============================================= */
.vs-plans {
  padding: 80px 0;
  background: #fff;
}
.vs-plans-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
}
.vs-plan-card {
  background: #fff;
  border: 1px solid #eee;
  border-radius: 12px;
  padding: 32px 24px;
  box-shadow: var(--vs-shadow);
  display: flex;
  flex-direction: column;
  gap: 16px;
  transition: transform 0.2s, box-shadow 0.2s;
  position: relative;
}
.vs-plan-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 32px rgba(0,0,0,0.12);
}
.vs-plan-card--featured {
  border: 2px solid var(--vs-accent);
}
.vs-plan-ribbon {
  position: absolute;
  top: -13px;
  left: 50%;
  transform: translateX(-50%);
  background: var(--vs-accent);
  color: #fff;
  font-size: 0.7rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  padding: 4px 14px;
  border-radius: 20px;
  white-space: nowrap;
}
.vs-plan-badge {
  font-size: 2.5rem;
  line-height: 1;
}
.vs-plan-name {
  font-size: 1.2rem;
  font-weight: 700;
  color: var(--vs-dark);
  margin: 0;
}
.vs-plan-price {
  font-size: 1.8rem;
  font-weight: 700;
  color: var(--vs-primary);
  line-height: 1;
}
.vs-plan-price span {
  font-size: 0.9rem;
  font-weight: 400;
  color: var(--vs-dark2);
}
.vs-plan-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
  border-top: 1px solid #f0f0f0;
  padding-top: 16px;
}
.vs-plan-list li {
  font-size: 0.85rem;
  color: var(--vs-dark);
  padding-left: 20px;
  position: relative;
  line-height: 1.4;
}
.vs-plan-list li::before {
  content: '✓';
  position: absolute;
  left: 0;
  color: var(--vs-primary);
  font-weight: 700;
}
.vs-plan-dental {
  background: #f0f9f5;
  border-left: 3px solid var(--vs-primary);
  border-radius: 0 var(--vs-radius) var(--vs-radius) 0;
  padding: 14px 16px;
}
.vs-plan-dental h5 {
  font-size: 0.85rem;
  font-weight: 700;
  color: var(--vs-primary-dark);
  margin: 0 0 10px 0;
}
.vs-plan-dental ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 6px;
}
.vs-plan-dental ul li {
  font-size: 0.8rem;
  color: var(--vs-dark);
  padding-left: 16px;
  position: relative;
  line-height: 1.4;
}
.vs-plan-dental ul li::before {
  content: '•';
  position: absolute;
  left: 0;
  color: var(--vs-primary);
}
.vs-plan-btn { margin-top: auto; display: flex;}
.vs-plan-btn .vs-btn { width: 100%; text-align: center; }

/* Toggle Individual / Empresarial */
.vs-plans-toggle {
  display: flex;
  justify-content: center;
  margin-bottom: 40px;
  background: var(--vs-base);
  border-radius: 50px;
  padding: 4px;
  width: fit-content;
  margin-left: auto;
  margin-right: auto;
}
.vs-plans-toggle button {
  padding: 10px 32px;
  border: none;
  background: transparent;
  border-radius: 50px;
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--vs-dark2);
  cursor: pointer;
  transition: background 0.2s, color 0.2s;
  font-family: inherit;
}
.vs-plans-toggle button.active {
  background: var(--vs-primary);
  color: #fff;
}

/* 2-col grid for Empresarial */
.vs-plans-grid--2col {
  grid-template-columns: repeat(2, 1fr);
  max-width: 780px;
  margin: 0 auto;
}

.vs-plan-tag {
  display: inline-block;
  font-size: 0.72rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: var(--vs-primary);
  background: rgba(58,87,165,0.08);
  border-radius: 4px;
  padding: 3px 10px;
  margin-bottom: 4px;
}
.vs-plan-tag--featured {
  background: var(--vs-primary);
  color: #fff;
}
.vs-plan-section-label {
  font-size: 0.72rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: var(--vs-dark2);
  margin-bottom: 6px;
}
.vs-plan-includes {
  font-size: 0.82rem;
  color: var(--vs-primary);
  font-style: italic;
  margin: 0 0 8px;
  font-weight: 600;
}

/* ---- Compare table ---- */
.vs-compare {
  margin-top: 56px;
}
.vs-compare h3 {
  text-align: center;
  font-size: 1.3rem;
  font-weight: 700;
  color: var(--vs-dark);
  margin-bottom: 24px;
}
.vs-compare-scroll { overflow-x: auto; }
.vs-compare-table {
  width: 100%;
  border-collapse: collapse;
  background: #fff;
  box-shadow: var(--vs-shadow);
  border-radius: var(--vs-radius);
  overflow: hidden;
  min-width: 640px;
}
.vs-compare-table th, .vs-compare-table td {
  padding: 14px 18px;
  text-align: center;
  font-size: 0.88rem;
  border-bottom: 1px solid #f0f0f0;
}
.vs-compare-table th {
  background: var(--vs-primary-dark);
  color: #fff;
  font-weight: 700;
}
.vs-compare-table td:first-child, .vs-compare-table th:first-child {
  text-align: left;
  font-weight: 600;
  color: var(--vs-dark);
}
.vs-compare-table tbody tr:last-child td { border-bottom: none; }
.vs-compare-featured {
  background: rgba(65, 142, 113,0.08);
  font-weight: 900;
  color: var(--vs-primary);
}

/* =============================================
   ABOUT
   ============================================= */
.vs-about {
  background: var(--vs-white);
  overflow: hidden;

  .vs-container {
    background: var(--vs-primary);
    padding: 2rem 3rem;
    border-radius: 1rem;
    overflow: hidden;
  }
}
.vs-about-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: stretch;
}
.vs-about-text h2 {
  font-size: 1.8rem;
  font-weight: 700;
  color: #fff;
  margin-bottom: 16px;
}
.vs-about-text > p {
  color: rgba(255,255,255,0.8);
  line-height: 1.7;
  margin-bottom: 28px;
}
.vs-about-rules { display: flex; flex-direction: column; gap: 14px; margin-bottom: 28px; }
.vs-rule-item {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  color: rgba(255,255,255,0.9);
  font-size: 0.95rem;
  line-height: 1.4;
}
.vs-rule-icon {
  background: var(--vs-primary-light);
  color: #fff;
  width: 22px;
  height: 22px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.75rem;
  font-weight: 700;
  flex-shrink: 0;
  margin-top: 1px;
}
.vs-about-img {
  position: relative;
  min-height: 280px;
  border-radius: 12px;
  overflow: visible;
}
.vs-about-img img {
  position: absolute;
  inset: 0;
  left: -25%;
  height: 130%;
  object-fit: cover;
  border-radius: 12px;
  top: -15%;
  overflow: visible;
  -webkit-mask-image: linear-gradient(
    to right,
    transparent 0%,
    black 10%,
    black 90%,
    transparent 100%
  );

  mask-image: linear-gradient(
    to right,
    transparent 0%,
    black 20%,
    black 80%,
    transparent 100%
  );
}
.vs-about-badge {
  position: absolute;
  bottom: 16px;
  right: 16px;
  background: #fff;
  color: var(--vs-primary);
  font-size: 0.82rem;
  font-weight: 600;
  padding: 8px 18px;
  border-radius: 20px;
  box-shadow: var(--vs-shadow);
  white-space: nowrap;
}

/* =============================================
   TRUST BAR
   ============================================= */
.vs-trust {
  background: #fff;
  padding: 48px 0;
  border-bottom: 1px solid #eee;
}
.vs-trust-title {
  text-align: center;
  font-size: 1rem;
  font-weight: 700;
  color: var(--vs-dark);
  margin-bottom: 28px;
}
.vs-trust-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
}
.vs-trust-item {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
}
.vs-trust-icon { font-size: 1.6rem; }
.vs-trust-item b { display: block; color: var(--vs-primary); font-size: 1.2rem; line-height: 1.1; }
.vs-trust-item small { color: var(--vs-dark2); font-size: 0.78rem; }

/* =============================================
   FAQ
   ============================================= */
.vs-faq {
  padding: 80px 0;
  background: var(--vs-base);
}
.vs-faq-groups, .vs-faq-preview-grid {
  max-width: 900px;
  margin: 0 auto;
}
.vs-faq-preview-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
  align-items: start;
}
.vs-faq-more {
  text-align: center;
  margin: 32px auto;
}
.vs-faq-category {
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--vs-primary);
  margin: 32px 0 10px;
  padding: 0 4px;
}
.vs-faq-category:first-child { margin-top: 0; }
.vs-faq-item {
  background: #fff;
  border: 1px solid #e8e8e8;
  border-radius: var(--vs-radius);
  margin-bottom: 6px;
  overflow: hidden;
  transition: border-color 0.2s;
}
.vs-faq-item.open { border-color: var(--vs-primary); }
.vs-faq-question {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  padding: 16px 20px;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--vs-dark);
  text-align: left;
  transition: background 0.15s;
  font-family: inherit;
}
.vs-faq-question:hover { background: #fafafa; }
.vs-faq-item.open .vs-faq-question { color: var(--vs-primary); background: #f5fbf8; }
.vs-faq-icon {
  flex-shrink: 0;
  width: 24px;
  height: 24px;
  background: var(--vs-base);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.1rem;
  color: var(--vs-primary);
  font-weight: 700;
}
.vs-faq-item.open .vs-faq-icon { background: var(--vs-primary); color: #fff; }
.vs-faq-answer { padding: 0 20px 16px; }
.vs-faq-answer p { color: var(--vs-dark2); font-size: 0.9rem; line-height: 1.6; margin: 0; }

/* =============================================
   CTA
   ============================================= */
.vs-cta {
  background: var(--vs-secondary);
  padding: 56px 0;
}
.vs-cta-inner {
  display: flex;
  align-items: center;
  gap: 24px;
  flex-wrap: wrap;
  justify-content: space-between;
}
.vs-cta-icon {
  font-size: 2.4rem;
  background: rgba(255,255,255,0.15);
  width: 64px;
  height: 64px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}
.vs-cta-text { flex: 1; min-width: 260px; }
.vs-cta-text h2 {
  font-size: 1.5rem;
  font-weight: 700;
  color: #fff;
  margin-bottom: 8px;
}
.vs-cta-text p {
  color: rgba(255,255,255,0.85);
  line-height: 1.6;
  margin: 0;
}
.vs-cta-btns { display: flex; gap: 12px; flex-wrap: wrap; }

/* =============================================
   FOOTER
   ============================================= */
.vs-footer {
  background: var(--vs-dark);
  padding: 24px 0;
  text-align: center;
}
.vs-footer p {
  color: rgba(255,255,255,0.5);
  font-size: 0.85rem;
  margin: 0;
}

/* =============================================
   RESPONSIVE
   ============================================= */
@media (max-width: 1024px) {
  .vs-hero-grid { grid-template-columns: 1fr; }
  .vs-hero-media { order: -1; }
  .vs-plans-grid { grid-template-columns: repeat(2, 1fr); }
  .vs-plans-grid--2col { grid-template-columns: repeat(2, 1fr); }
  .vs-trust-grid { grid-template-columns: repeat(2, 1fr); gap: 20px; }
  .vs-how-steps { flex-direction: column; align-items: center; }
  .vs-how-arrow { display: none; }
  .vs-how-step { width: 100%; max-width: 320px; }
  .vs-nav { display: none; }
}

@media (max-width: 768px) {
  .vs-topbar-links, .vs-topbar-contacts { gap: 12px; }
  .vs-topbar-inner { flex-direction: column; gap: 6px; text-align: center; }

  .vs-hero { padding: 60px 0; }
  .vs-hero-content h1 { font-size: 1.6rem; }
  .vs-hero-stats { grid-template-columns: repeat(2, 1fr); }

  .vs-features-grid { grid-template-columns: 1fr; }

  .vs-plans-grid { grid-template-columns: 1fr; }
  .vs-plans-grid--2col { grid-template-columns: 1fr; }
  .vs-plans-toggle button { padding: 10px 20px; font-size: 0.85rem; }

  .vs-about-grid { grid-template-columns: 1fr; }

  .vs-faq-preview-grid { grid-template-columns: 1fr; }

  .vs-section-title h2 { font-size: 1.4rem; }
}
</style>
