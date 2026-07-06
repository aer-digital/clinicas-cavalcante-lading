<script setup></script>

<template>
    <!-- Preloader -->
    <div class="preloader">
        <div class="loader">
            <div class="loader-outter"></div>
            <div class="loader-inner"></div>

            <div class="indicator">
                <svg width="16px" height="12px">
                    <polyline id="back" points="1 6 4 6 6 11 10 1 12 6 15 6"></polyline>
                    <polyline id="front" points="1 6 4 6 6 11 10 1 12 6 15 6"></polyline>
                </svg>
            </div>
        </div>
    </div>
    <!-- End Preloader -->

    <!-- Header Area -->
    <header class="header">
        <!-- Topbar -->
        <div class="topbar">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6 col-md-5 col-12">

                        <!-- Contact -->
                        <ul class="top-contact" style="float: left;">
                            <li>
                                <i class="fa fa-address-book"></i>
                                <a href="https://planoonline.com.br/portal/redirect/viasaude/rede-credenciada" target="blank">Rede credenciada</a>
                            </li>
                            <li>
                                <i class="fa fa-file-text"></i>
                                <a href="https://planoonline.com.br/portal/redirect/viasaude/segunda-via" target="blank">Segunda Via</a>
                            </li>
                        </ul>
                        <!-- End Contact -->
                    </div>
                    <div class="col-lg-6 col-md-7 col-12">
                        <!-- Top Contact -->
                        <ul class="top-contact">
                            <li>
                                <i class="fa fa-phone"></i>
                                <a href="https://wa.me/+551321912391" target="blank">+55 13 2191-2391</a>
                            </li>
                            <li>
                                <i class="fa fa-envelope"></i><a
                                    href="mailto:support@yourmail.com" target="blank">cartaoviasaude@gmail.com</a>
                            </li>
                        </ul>
                        <!-- End Top Contact -->
                    </div>
                </div>
            </div>
        </div>
        <!-- End Topbar -->
        <!-- Header Inner -->
        <div class="header-inner">
            <div class="container">
                <div class="inner">
                    <div class="row">
                        <div class="col-lg-3 col-md-3 col-12">
                            <!-- Start Logo -->
                            <div class="logo">
                                <a href="index.html"><img src="../../assets/img/logo_degrade.webp" alt="#" /></a>
                            </div>
                            <!-- End Logo -->
                            <!-- Mobile Nav -->
                            <div class="mobile-nav"></div>
                            <!-- End Mobile Nav -->
                        </div>
                        <!-- <div class="col-lg-7 col-md-9 col-12"> -->
                        <!-- Main Menu -->
                        <!-- <div class="main-menu">
									<nav class="navigation">
										<ul class="nav menu">
											<li class="active"><a href="#">Home <i class="icofont-rounded-down"></i></a>
												<ul class="dropdown">
													<li><a href="index.html">Home Page 1</a></li>
												</ul>
											</li>
											<li><a href="#">Doctos </a></li>
											<li><a href="#">Services </a></li>
											<li><a href="#">Pages <i class="icofont-rounded-down"></i></a>
												<ul class="dropdown">
													<li><a href="404.html">404 Error</a></li>
												</ul>
											</li>
											<li><a href="#">Blogs <i class="icofont-rounded-down"></i></a>
												<ul class="dropdown">
													<li><a href="blog-single.html">Blog Details</a></li>
												</ul>
											</li>
											<li><a href="contact.html">Contact Us</a></li>
										</ul>
									</nav>
								</div> -->
                        <!--/ End Main Menu -->
                        <!-- </div> -->
                        <div class="col-lg-2 col-12" style="align-content: center;">
                            <div class="get-quote">
                                <a href="https://wa.me/+551321912391" id="btn-whatsapp" class="btn">
                                    <img src="../../assets/img/whatsapp.png" alt="">
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!--/ End Header Inner -->
    </header>
    <!-- End Header Area -->

    <!-- Slider Area -->
    <section class="slider">
        <div class="hero-slider">
            <!-- Start Single Slider -->
            <div class="single-slider">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-7">
                            <div class="text">
                                <h1>
                                    Quando foi sua última <span>Avaliação médica</span>
                                </h1>
                                <p>
                                    Via Saúde oferece diversas opções de planos de benefício saúde na baixada. <br>
                                    É importante que você tenha cartão de descontos seguro, quando o assunto é saúde.
                                </p>
                                <div class="button">
                                    <a class="btn" href="https://wa.me/+551321912391">Saber mais</a>
                                    <a href="#pricing-table" class="btn primary">Ver nossos planos</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- End Single Slider -->

        </div>
    </section>
    <!--/ End Slider Area -->

    <!-- Start Schedule Area -->
    <section class="schedule">
        <div class="container">
            <div class="schedule-inner">
                <div class="row">
                    <div class="col-lg-4 col-md-6 col-12">
                        <!-- single-schedule -->
                        <div class="single-schedule first">
                            <div class="inner">
                                <div class="icon">
                                    <i class="fa fa-ambulance"></i>
                                </div>
                                <div class="single-content">
                                    <!-- <span>Lorem Amet</span> -->
                                    <h4>Procedimentos Estéticos</h4>
                                    <p>
                                        Realce sua beleza com tratamentos modernos e personalizados, realizados por
                                        especialistas em um ambiente seguro e equipado com tecnologia de ponta para
                                        garantir resultados incríveis.
                                    </p>
                                    <!-- <a href="#"
                                        >LEARN MORE<i
                                            class="fa fa-long-arrow-right"
                                        ></i
                                    ></a> -->
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-12">
                        <!-- single-schedule -->
                        <div class="single-schedule middle">
                            <div class="inner">
                                <div class="icon">
                                    <i class="icofont-prescription"></i>
                                </div>
                                <div class="single-content">
                                    <!-- <span>Fusce Porttitor</span> -->
                                    <h4>Exames laboratoriais</h4>
                                    <p>
                                        Oferecemos benefícios em exames médicos, desde simples análises de sangue até
                                        ecografias e exames complexos, atendendo a diversas necessidades clínicas.
                                    </p>
                                    <!-- <a href="#"
                                        >LEARN MORE<i
                                            class="fa fa-long-arrow-right"
                                        ></i
                                    ></a> -->
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-12 col-12">
                        <!-- single-schedule -->
                        <div class="single-schedule last" style="height: 100%;">
                            <div class="inner">
                                <div class="icon">
                                    <i class="icofont-ui-clock"></i>
                                </div>
                                <div class="single-content">
                                    <!-- <span>Donec luctus</span> -->
                                    <h4>Consultas médicas</h4>
                                    <p>
                                        Acesso a consultas com especialistas em diversas áreas, com atendimento
                                        humanizado para diagnóstico, acompanhamento e tratamento.
                                    </p>
                                    <!-- <ul class="time-sidual">
                                        <li class="day">
                                            Monday - Fridayp
                                            <span>8.00-20.00</span>
                                        </li>
                                        <li class="day">
                                            Saturday <span>9.00-18.30</span>
                                        </li>
                                        <li class="day">
                                            Monday - Thusday
                                            <span>9.00-15.00</span>
                                        </li>
                                    </ul> -->
                                    <!-- <a href="#"
                                        >LEARN MORE<i
                                            class="fa fa-long-arrow-right"
                                        ></i
                                    ></a> -->
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!--/End Start schedule Area -->

    <!-- Pricing Table -->
    <section id="pricing-table" class="pricing-table section">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="section-title">
                        <h2>
                            Cartão de Descontos Familiar: <b>Economia</b> e <b>Benefícios</b> em Um Só Plano
                        </h2>
                        <img src="../../assets/img/section-img.png" alt="#" />
                        <p>
                            Somos um cartão benefício que oferece descontos exclusivos através de uma mensalidade única
                            para você e sua família
                        </p>
                    </div>
                </div>
            </div>
            <div id="planos" class="row">

                <!-- Single Table -->
                <div class="col-lg-4 col-md-12 col-12">
                    <div class="single-table">
                        <!-- Table Head -->
                        <div class="table-head">
                            <div class="icon">
                                <img src="../../assets/img/diamond.png" alt="">
                            </div>
                            <h4 class="title">Plano Diamante</h4>
                            <div class="price">
                                <p class="amount">
                                    R$99,90<span>/ mês</span>
                                </p>
                            </div>
                        </div>
                        <!-- Table List -->
                        <ul class="table-list">
                            <li>
                                <i class="icofont icofont-ui-check"></i>
                                Benefícios do plano ouro
                            </li>
                            <li>
                                <i class="icofont icofont-ui-check"></i>
                                Descontos exclusivos em exames
                            </li>
                            <li>
                                <i class="icofont icofont-ui-check"></i>
                                Endocrinologista
                            </li>
                            <li>
                                <i class="icofont icofont-ui-check"></i>
                                Geriatria
                            </li>
                            <li>
                                <i class="icofont icofont-ui-check"></i>
                                Otorinolaringologista
                            </li>
                            <li style="padding-bottom: 30px;">
                                <!-- <i class="icofont icofont-ui-check"></i> -->
                                E muito mais...
                            </li>

                        </ul>
                        <div class="table-bottom">
                            <a class="btn" href="https://wa.me/551321912391?text=Oi.%20%0AQueria%20saber%20mais%20sobre%20o%20Plano%20Diamante%20do%20via%20sa%C3%BAde.">Selecionar plano</a>
                        </div>
                        <!-- Table Bottom -->
                    </div>
                </div>
                <!-- End Single Table-->

                <!-- Single Table -->
                <div class="col-lg-4 col-md-12 col-12">
                    <div class="single-table">
                        <!-- Table Head -->
                        <div class="table-head">
                            <div class="icon">
                                <img src="../../assets/img/ouro.png" alt="">
                            </div>
                            <h4 class="title">Plano Ouro</h4>
                            <div class="price">
                                <p class="amount">
                                    R$59,90<span>/ mês</span>
                                </p>
                            </div>
                        </div>
                        <!-- Table List -->
                        <ul class="table-list">
                            <li>
                                <i class="icofont icofont-ui-check"></i>
                                Descontos em consultas e exames dentro da rede credenciada
                            </li>
                            <li>
                                <i class="icofont icofont-ui-check"></i>
                                Benefícios do plano prata
                            </li>
                            <li>
                                <i class="icofont icofont-ui-check"></i>
                                Pediatra
                            </li>
                            <li>
                                <i class="icofont icofont-ui-check"></i>
                                Ortopedista
                            </li>
                            <li>
                                <i class="icofont icofont-ui-check"></i>
                                Nutrição
                            </li>
                            <li>
                                <i class="icofont icofont-ui-check"></i>
                                Oftalmologista
                            </li>
                        </ul>
                        <div class="table-bottom">
                            <a class="btn" href="https://wa.me/551321912391?text=Oi.%20%0AQueria%20saber%20mais%20sobre%20o%20Plano%20Ouro%20do%20via%20sa%C3%BAde.">Selecionar plano</a>
                        </div>
                        <!-- Table Bottom -->
                    </div>
                </div>
                <!-- End Single Table-->

                <!-- Single Table -->
                <div class="col-lg-4 col-md-12 col-12">
                    <div class="single-table">
                        <!-- Table Head -->
                        <div class="table-head">
                            <div class="icon">
                                <img src="../../assets/img/prata.png" alt="">
                            </div>
                            <h4 class="title">Plano Prata</h4>
                            <div class="price">
                                <p class="amount">
                                    R$49,90<span>/ mês</span>
                                </p>
                            </div>
                        </div>
                        <!-- Table List -->
                        <ul class="table-list">
                            <li>
                                <i class="icofont icofont-ui-check"></i>
                                Descontos em consultas e exames dentro da rede credenciada
                            </li>
                            <li>
                                <i class="icofont icofont-ui-check"></i>
                                1 (uma) consulta por mês:
                            </li>
                            <li>
                                <i class="icofont icofont-ui-check"></i>
                                Clinico geral
                            </li>
                            <li>
                                <i class="icofont icofont-ui-check"></i>
                                Ginecologista
                            </li>
                        </ul>
                        <div class="table-bottom">
                            <a class="btn" href="https://wa.me/551321912391?text=Oi.%20%0AQueria%20saber%20mais%20sobre%20o%20Plano%20Prata%20do%20via%20sa%C3%BAde.">Selecionar plano</a>
                        </div>
                        <!-- Table Bottom -->
                    </div>
                </div>
                <!-- End Single Table-->

                <!-- Single Table -->
                <div class="col-lg-4 col-md-12 col-12">
                    <div class="single-table">
                        <!-- Table Head -->
                        <div class="table-head">
                            <div class="icon">
                                <img src="../../assets/img/bronze.png" alt="">
                            </div>
                            <h4 class="title">Plano Bronze</h4>
                            <div class="price">
                                <p class="amount">
                                    R$29,90<span>/ mês</span>
                                </p>
                            </div>
                        </div>
                        <!-- Table List -->
                        <ul class="table-list">
                            <li>
                                <i class="icofont icofont-ui-check"></i>
                                Descontos em consultas e exames dentro da rede credenciada
                            </li>
                            <!-- <li class="cross">
                                <i class="icofont icofont-ui-close"></i>
                                1 (uma) consulta por mês com clinico geral ou ginecologista
                            </li>
                            <li class="cross">
                                <i class="icofont icofont-ui-close"></i>
                                Pediatra
                            </li>
                            <li class="cross">
                                <i class="icofont icofont-ui-close"></i>
                                Ortopedista
                            </li>
                            <li class="cross">
                                <i class="icofont icofont-ui-close"></i>
                                Nutrição
                            </li>
                            <li class="cross">
                                <i class="icofont icofont-ui-close"></i>
                                Oftalmologista
                            </li> -->
                        </ul>
                        <div class="table-bottom">
                            <a class="btn" href="https://wa.me/551321912391?text=Oi.%20%0AQueria%20saber%20mais%20sobre%20o%20Plano%20Bronze%20do%20via%20sa%C3%BAde.">Selecionar plano</a>
                        </div>
                        <!-- Table Bottom -->
                    </div>
                </div>
                <!-- End Single Table-->

            </div>
        </div>
    </section>
    <!--/ End Pricing Table -->

    <!-- Start Feautes -->
    <!-- <section class="Feautes section">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="section-title">
                        <h2>We Are Always Ready to Help You & Your Family</h2>
                        <img src="../../assets/img/section-img.png" alt="#" />
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipiscing
                            elit praesent aliquet. pretiumts
                        </p>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-4 col-12">

                    <div class="single-features">
                        <div class="signle-icon">
                            <i class="icofont icofont-ambulance-cross"></i>
                        </div>
                        <h3>Emergency Help</h3>
                        <p>
                            Lorem ipsum sit, consectetur adipiscing elit.
                            Maecenas mi quam vulputate.
                        </p>
                    </div>

                </div>
                <div class="col-lg-4 col-12">

                    <div class="single-features">
                        <div class="signle-icon">
                            <i class="icofont icofont-medical-sign-alt"></i>
                        </div>
                        <h3>Enriched Pharmecy</h3>
                        <p>
                            Lorem ipsum sit, consectetur adipiscing elit.
                            Maecenas mi quam vulputate.
                        </p>
                    </div>

                </div>
                <div class="col-lg-4 col-12">

                    <div class="single-features last">
                        <div class="signle-icon">
                            <i class="icofont icofont-stethoscope"></i>
                        </div>
                        <h3>Medical Treatment</h3>
                        <p>
                            Lorem ipsum sit, consectetur adipiscing elit.
                            Maecenas mi quam vulputate.
                        </p>
                    </div>

                </div>
            </div>
        </div>
    </section> -->
    <!--/ End Feautes -->

    <!-- Start Fun-facts -->
    <!-- <div id="fun-facts" class="fun-facts section overlay">
        <div class="container">
            <div class="row">
                <div class="col-lg-3 col-md-6 col-12">

                    <div class="single-fun">
                        <i class="icofont icofont-home"></i>
                        <div class="content">
                            <span class="counter">3468</span>
                            <p>Hospital Rooms</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6 col-12">

                    <div class="single-fun">
                        <i class="icofont icofont-user-alt-3"></i>
                        <div class="content">
                            <span class="counter">557</span>
                            <p>Specialist Doctors</p>
                        </div>
                    </div>

                </div>
                <div class="col-lg-3 col-md-6 col-12">
                    <div class="single-fun">
                        <i class="icofont-simple-smile"></i>
                        <div class="content">
                            <span class="counter">4379</span>
                            <p>Happy Patients</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6 col-12">
                    <div class="single-fun">
                        <i class="icofont icofont-table"></i>
                        <div class="content">
                            <span class="counter">32</span>
                            <p>Years of Experience</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div> -->
    <!--/ End Fun-facts -->

    <!-- Start Why choose -->
    <section class="why-choose section">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="section-title">
                        <h2>
                            Centro Médico Cavalcante
                        </h2>
                        <a href="https://centromedicocavalcante.com.br/" target="_blank">
                            <img src="../../assets/img/vm.png" alt="#" style="height: 60px;" />
                        </a>
                        <p>
                            Através do cartão de benefícios o cliente tem descontos em consultas e exames dentro da rede
                            credenciada, sendo a principal rede o centro médico Cavalcante.
                            As consultas cortesia são prestadas através desta rede
                        </p>
                    </div>
                </div>
            </div>
            <div class="row" style="position: relative;">
                <div class="col-lg-6 col-12">

                    <div class="choose-left">
                        <h3>Regras do Benefício</h3>
                        <p>
                            <b>Uma</b> consulta gratuita no mês por contrato a partir do plano prata e ouro

                        </p>
                        <p>
                            Zero carência e fidelização de contrato
                        </p>
                    </div>

                </div>
                <div class="appointment-image">
                    <img src="../../assets/img/contact-img.png" alt="#" />
                </div>
                <!-- <div class="col-lg-6 col-12">

                    <div class="choose-right">
                        <div class="video-image">

                            <div class="promo-video">
                                <div class="waves-block">
                                    <div class="waves wave-1"></div>
                                    <div class="waves wave-2"></div>
                                    <div class="waves wave-3"></div>
                                </div>
                            </div>

                            <a
                                href="https://www.youtube.com/watch?v=RFVXy6CRVR4"
                                class="video video-popup mfp-iframe"
                                ><i class="fa fa-play"></i
                            ></a>
                        </div>
                    </div>

                </div> -->
            </div>
        </div>
    </section>
    <!--/ End Why choose -->

    <!-- Start Call to action -->
    <section class="call-action overlay" data-stellar-background-ratio="0.5">
        <div class="container">
            <div class="row">
                <div class="col-lg-12 col-md-12 col-12">
                    <div class="content">
                        <h2>
                            Precisa de ajudar com o plano?
                        </h2>
                        <p>
                            Entre em contato com nosso suporte! Estamos aqui para esclarecer dúvidas, resolver problemas
                            e garantir que você aproveite ao máximo seu plano.
                        </p>
                        <div class="button">
                            <a href="#" class="btn">Falar com o Suporte</a>
                            <!-- <a href="#" class="btn second"
                                >Suporte<i class="fa fa-long-arrow-right"></i
                            ></a> -->
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!--/ End Call to action -->

    <!-- Footer Area -->
    <footer id="footer" class="footer">
        <!-- Footer Top -->
        <!-- <div class="footer-top">
            <div class="container">
                <div class="row">
                    <div class="col-lg-3 col-md-6 col-12">
                        <div class="single-footer">
                            <h2>About Us</h2>
                            <p>
                                Lorem ipsum dolor sit am consectetur adipisicing
                                elit do eiusmod tempor incididunt ut labore
                                dolore magna.
                            </p>
                            <ul class="social">
                                <li>
                                    <a href="#"
                                        ><i class="icofont-facebook"></i
                                    ></a>
                                </li>
                                <li>
                                    <a href="#"
                                        ><i class="icofont-google-plus"></i
                                    ></a>
                                </li>
                                <li>
                                    <a href="#"
                                        ><i class="icofont-twitter"></i
                                    ></a>
                                </li>
                                <li>
                                    <a href="#"
                                        ><i class="icofont-vimeo"></i
                                    ></a>
                                </li>
                                <li>
                                    <a href="#"
                                        ><i class="icofont-pinterest"></i
                                    ></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 col-12">
                        <div class="single-footer f-link">
                            <h2>Quick Links</h2>
                            <div class="row">
                                <div class="col-lg-6 col-md-6 col-12">
                                    <ul>
                                        <li>
                                            <a href="#"
                                                ><i
                                                    class="fa fa-caret-right"
                                                    aria-hidden="true"
                                                ></i
                                                >Home</a
                                            >
                                        </li>
                                        <li>
                                            <a href="#"
                                                ><i
                                                    class="fa fa-caret-right"
                                                    aria-hidden="true"
                                                ></i
                                                >About Us</a
                                            >
                                        </li>
                                        <li>
                                            <a href="#"
                                                ><i
                                                    class="fa fa-caret-right"
                                                    aria-hidden="true"
                                                ></i
                                                >Services</a
                                            >
                                        </li>
                                        <li>
                                            <a href="#"
                                                ><i
                                                    class="fa fa-caret-right"
                                                    aria-hidden="true"
                                                ></i
                                                >Our Cases</a
                                            >
                                        </li>
                                        <li>
                                            <a href="#"
                                                ><i
                                                    class="fa fa-caret-right"
                                                    aria-hidden="true"
                                                ></i
                                                >Other Links</a
                                            >
                                        </li>
                                    </ul>
                                </div>
                                <div class="col-lg-6 col-md-6 col-12">
                                    <ul>
                                        <li>
                                            <a href="#"
                                                ><i
                                                    class="fa fa-caret-right"
                                                    aria-hidden="true"
                                                ></i
                                                >Consuling</a
                                            >
                                        </li>
                                        <li>
                                            <a href="#"
                                                ><i
                                                    class="fa fa-caret-right"
                                                    aria-hidden="true"
                                                ></i
                                                >Finance</a
                                            >
                                        </li>
                                        <li>
                                            <a href="#"
                                                ><i
                                                    class="fa fa-caret-right"
                                                    aria-hidden="true"
                                                ></i
                                                >Testimonials</a
                                            >
                                        </li>
                                        <li>
                                            <a href="#"
                                                ><i
                                                    class="fa fa-caret-right"
                                                    aria-hidden="true"
                                                ></i
                                                >FAQ</a
                                            >
                                        </li>
                                        <li>
                                            <a href="#"
                                                ><i
                                                    class="fa fa-caret-right"
                                                    aria-hidden="true"
                                                ></i
                                                >Contact Us</a
                                            >
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 col-12">
                        <div class="single-footer">
                            <h2>Open Hours</h2>
                            <p>
                                Lorem ipsum dolor sit ame consectetur
                                adipisicing elit do eiusmod tempor incididunt.
                            </p>
                            <ul class="time-sidual">
                                <li class="day">
                                    Monday - Fridayp <span>8.00-20.00</span>
                                </li>
                                <li class="day">
                                    Saturday <span>9.00-18.30</span>
                                </li>
                                <li class="day">
                                    Monday - Thusday <span>9.00-15.00</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 col-12">
                        <div class="single-footer">
                            <h2>Newsletter</h2>
                            <p>
                                subscribe to our newsletter to get allour news
                                in your inbox.. Lorem ipsum dolor sit amet,
                                consectetur adipisicing elit,
                            </p>
                            <form
                                action="mail/mail.php"
                                method="get"
                                target="_blank"
                                class="newsletter-inner"
                            >
                                <input
                                    name="email"
                                    placeholder="Email Address"
                                    class="common-input"
                                    onfocus="this.placeholder = ''"
                                    onblur="this.placeholder = 'Your email address'"
                                    required=""
                                    type="email"
                                />
                                <button class="button">
                                    <i class="icofont icofont-paper-plane"></i>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div> -->
        <!--/ End Footer Top -->
        <!-- Copyright -->
        <div class="copyright">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12 col-md-12 col-12">
                        <div class="copyright-content">
                            <p>
                                © Copyright 2025 | All Rights Reserved by
                                <a href="" style="pointer-events: none; cursor: default;" target="_blank">A&R</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!--/ End Copyright -->
    </footer>
    <!--/ End Footer Area -->
</template>

<style lang="scss">
@use "../../style.scss";



.pricing-table {
    .icon {
        img {
            width: 80px;
        }
    }

    @media screen and (min-width: 768px) {
        #planos{
            flex-wrap: nowrap;
            overflow-x: auto;
            overflow-y: hidden;
            padding-bottom: 30px;
            
            &::-webkit-scrollbar {
                // width: 2px;
                height: 3px;
                // border: 1px solid #ddd;
            }
            &::-webkit-scrollbar-thumb {
                background: rgba(#3A57A5, 0.3);
                border-radius: 5px;
            }
        }
        
    }
}

.why-choose {
    :first-child {
        z-index: 5;
    }

    .appointment-image {
        position: absolute;
        opacity: .5;
        right: 0px;
        top: -100px;
        z-index: 1;
        max-width: 600px;
    }

    overflow: hidden;
}

.pricing-table .table-list .cross {
    color: #dddddd;
}

@media (max-width:768px) {
    .header-inner {
        height: 140px;
        position: relative;

        * {
            height: 100%;
        }
    }

    .why-choose {
        padding-bottom: 200px;

        .appointment-image {
            max-width: 300px;
            top: 200px;
            opacity: .4;
        }
    }
}
</style>