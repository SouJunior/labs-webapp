<template>
  <v-container class="home-page d-flex flex-column">
    <v-container class="hero-section">
      <div>
        <div class="d-flex flex-column">
          <h1>Vem pro Labs!</h1>
          <p>
            Aqui você desenvolve produtos reais e aprimora habilidades práticas para conquistar o
            mercado de trabalho.
          </p>
        </div>
      </div>
      <div>
        <img :src="imgUrl" alt="Logo SouJunior Labs" class="drag-none floating" />
      </div>
    </v-container>
    <v-container class="services-section">
      <div>
        <h2>
          Ingressar no mundo tech poder ser desafiador e, buscando ajudar nesse desafio, a SouJunior
          Labs, oferece:
        </h2>
      </div>
      <div class="services">
        <section>
          <div>
            <section>
              <img :src="homeIcon1" alt="" />
            </section>
            <p>Suporte ao desenvolvimento de novos produtos;</p>
          </div>
          <div>
            <section>
              <img :src="homeIcon2" alt="" />
            </section>
            <p>Aprimoramento de habilidades práticas em equipes (soft e hard skills);</p>
          </div>
        </section>
        <div class="vl"></div>
        <section>
          <div>
            <section>
              <img :src="homeIcon3" alt="" />
            </section>
            <p>Expansão de conexões e networking;</p>
          </div>
          <div>
            <section>
              <img :src="homeIcon4" alt="" />
            </section>
            <p>Colaboração na construção e fortalecimento de portfólios e currículos;</p>
          </div>
        </section>
      </div>
    </v-container>
    <v-container class="about-section">
      <div>
        <img :src="homeAboutIcon" alt="Sobre a SouJunior Labs" />
      </div>
      <div>
        <h3>Somos uma iniciativa voluntária comprometida em criar produtos reais.</h3>
        <p>
          Nosso propósito é oferecer suporte àqueles que buscam experiência prática, através da
          criação colaborativa de produtos inovadores, assim impulsionando o desenvolvimento
          profissional dos Juniors na área tech.
        </p>
      </div>
    </v-container>
    <v-container class="occupation-section">
      <div>
        <h2>Aqui, todas as áreas são bem-vindas:</h2>
        <div class="occupation-info">
          <p>Participe da nossa comunidade e explore diversas oportunidades disponíveis</p>
          <v-btn>Quero fazer parte</v-btn>
        </div>
      </div>
      <div>
        <div class="carousel-container">
          <swiper
            :slides-per-view="8"
            :space-between="30"
            :pagination="true"
            :navigation="{ nextEl: '.navigationNext', prevEl: '.navigationPrev' }"
            :breakpoints="{
              320: { slidesPerView: 2, spaceBetween: 20 },
              640: { slidesPerView: 3, spaceBetween: 30 },
              768: { slidesPerView: 4, spaceBetween: 35 },
              1024: { slidesPerView: 5, spaceBetween: 40 },
              1280: { slidesPerView: 6, spaceBetween: 45 },
              1536: { slidesPerView: 7, spaceBetween: 50 },
              1920: { slidesPerView: 8, spaceBetween: 60 }
            }"
          >
            <swiper-slide
              v-for="(item, index) in carouselItemsRef"
              :key="index"
              class="d-flex flex-column align-center"
            >
              <v-img :src="item.icon" width="100" height="100" />
              <p>{{ item.title }}</p>
            </swiper-slide>
          </swiper>
        </div>
        <div class="arrow-container">
          <v-btn icon class="navigationPrev" @click="navigationPrev">
            <v-icon>mdi-chevron-left</v-icon>
          </v-btn>
          <v-btn icon class="navigationNext" @click="navigationNext">
            <v-icon>mdi-chevron-right</v-icon>
          </v-btn>
        </div>
      </div>
    </v-container>
    <v-container class="howToUse-section">
      <div>
        <h2>Como utilizar a plataforma?</h2>
        <p>
          Atualmente, nossa plataforma está em fase de testes e
          <strong>disponível exclusivamente para os fundadores de projetos ativos.</strong> No
          entanto, estamos trabalhando para que, em breve, ela se torne o principal canal de
          comunicação da nossa comunidade. Contamos com o seu apoio e feedback para tornar este
          objetivo uma realidade.
        </p>
        <section>
          <v-icon color="#06d7a0">mdi-arrow-right-thin</v-icon>
          <span> <strong> Se você é Founder</strong> </span>, utilize o token enviado no Discord da
          Sou Junior Labs, para completar o seu cadastro.
        </section>
        <section>
          <v-icon color="#06d7a0">mdi-arrow-right-thin</v-icon>
          Como o intuito é termos um local oficial para nossos produtos, é importante manter esses
          dados sempre atualizados, especialmente em casos de mudanças, combinado!?
        </section>
        <section>
          <v-icon color="#06d7a0">mdi-arrow-right-thin</v-icon>
          Em breve adicionaremos diversas outras funcionalidades para tornar a plataforma ainda mais
          útil e eficiente para todos.
        </section>
        <h4 class="mt-2">Juntos, podemos fazer grandes coisas acontecerem.</h4>
      </div>
      <div>
        <img :src="howToUse" alt="" />
      </div>
    </v-container>
    <v-container class="contact-section">
      <v-card>
        <h2>Precisa de Ajuda?</h2>
        <p>
          Se estiver enfrentando alguma dificuldade ao utilizar nossa plataforma ou se possuir
          dúvidas ou sugestões que gostaria de compartilhar, entre em contato conosco através do
          canal "Founders only" no Discord da Sou Junior Labs. Nossa equipe ficará feliz em ouvi-lo
          e ajudá-lo.
        </p>
      </v-card>
    </v-container>
    <v-footer>
      <v-row>
        <v-col cols="12" class="d-flex align-center justify-center">
          <div>
            <a class="d-flex align-center logo">
              <v-img height="36" width="36" :src="logo_white" alt="Logo SouJunior" />
              <h1 class="text-h5 font-weight-bold font-semibold primary-color ml-3 logo-text">
                SouJunior Labs
              </h1>
            </a>
          </div>
          <div>
            <div>
              <p>Faça parte da nossa comunidade!</p>
            </div>
            <div class="d-flex align-center justify-center">
              <section>
                <a
                  href="https://github.com/SouJunior-Labs"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <v-img height="36" width="36" :src="footerIcon1" alt="Github" />
                </a>
              </section>
              <section>
                <a
                  href="https://forms.gle/uptNHWPrLn4CgqMf9"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <v-img height="36" width="36" :src="footerIcon2" alt="Discord" />
                </a>
              </section>
              <section>
                <a
                  href="https://www.linkedin.com/company/soujunior-labs/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <v-img height="36" width="36" :src="footerIcon3" alt="Linkedin" />
                </a>
              </section>
              <section>
                <a
                  href="https://www.instagram.com/soujunior.tech/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <v-img height="36" width="36" :src="footerIcon4" alt="Instagram" />
                </a>
              </section>
              <section>
                <a
                  href="https://www.youtube.com/@soujuniortech"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <v-img height="36" width="36" :src="footerIcon5" alt="Youtube" />
                </a>
              </section>
              <section>
                <a
                  href="https://twitter.com/SouJunior_Tech"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <v-img height="36" width="36" :src="footerIcon6" alt="Twitter" />
                </a>
              </section>
              <section>
                <a
                  href="https://www.facebook.com/people/SouJunior/100086671131030"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <v-img height="36" width="36" :src="footerIcon7" alt="Facebook" />
                </a>
              </section>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-footer>
  </v-container>
</template>

<script setup>
import { ref } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import imgUrl from '@/assets/logo-green-transparent.png'
import logo_white from '@/assets/logo-white-transparent.png'
import homeIcon1 from '@/assets/home/icon1.png'
import homeIcon2 from '@/assets/home/icon2.png'
import homeIcon3 from '@/assets/home/icon3.png'
import homeIcon4 from '@/assets/home/icon4.png'
import homeAboutIcon from '@/assets/home/home-aboutIcon.png'
import areaIcon1 from '@/assets/home/areaIcon1.png'
import areaIcon2 from '@/assets/home/areaIcon2.png'
import areaIcon3 from '@/assets/home/areaIcon3.png'
import areaIcon4 from '@/assets/home/areaIcon4.png'
import areaIcon5 from '@/assets/home/areaIcon5.png'
import areaIcon6 from '@/assets/home/areaIcon6.png'
import areaIcon7 from '@/assets/home/areaIcon7.png'
import areaIcon8 from '@/assets/home/areaIcon8.png'
import areaIcon9 from '@/assets/home/areaIcon9.png'
import areaIcon10 from '@/assets/home/areaIcon10.png'
import areaIcon11 from '@/assets/home/areaIcon11.png'
import areaIcon12 from '@/assets/home/areaIcon12.png'
import howToUse from '@/assets/home/howToUse.png'
import footerIcon1 from '@/assets/home/Github.png'
import footerIcon2 from '@/assets/home/Discord.png'
import footerIcon3 from '@/assets/home/Linkedin.png'
import footerIcon4 from '@/assets/home/Instagram.png'
import footerIcon5 from '@/assets/home/Youtube.png'
import footerIcon6 from '@/assets/home/Twitter.png'
import footerIcon7 from '@/assets/home/Facebook.png'
const carouselItems = [
  { title: 'Business', icon: areaIcon1 },
  { title: 'Tech Recruiter', icon: areaIcon2 },
  { title: 'Produtos', icon: areaIcon3 },
  { title: 'Ágil', icon: areaIcon4 },
  { title: 'Social Media', icon: areaIcon5 },
  { title: 'UI & UX Design', icon: areaIcon6 },
  { title: 'Front-end', icon: areaIcon7 },
  { title: 'Back-end', icon: areaIcon8 },
  { title: 'Data', icon: areaIcon9 },
  { title: 'Mobile', icon: areaIcon10 },
  { title: 'QA', icon: areaIcon11 },
  { title: 'DevOps', icon: areaIcon12 }
]
const carouselItemsRef = ref(carouselItems)
const navigationNext = () => {
  carouselItemsRef.value = carouselItemsRef.value
    .slice(1)
    .concat(carouselItemsRef.value.slice(0, 1))
}
const navigationPrev = () => {
  carouselItemsRef.value = carouselItemsRef.value
    .slice(-1)
    .concat(carouselItemsRef.value.slice(0, -1))
}
</script>

<style scoped>
.home-page {
  padding: 0;
  margin-top: 50px;
  gap: 75px;
}
.hero-section {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  gap: 80px;
}
.hero-section h1 {
  font-family: 'Radio Canada', sans-serif;
  font-size: 64px;
  color: #06d7a0;
  margin-bottom: 20px;
}
.hero-section p {
  font-size: 32px;
  font-weight: 400;
}
.hero-section img {
  @media screen and (max-width: 1300px) {
    max-height: 300px;
  }
  @media screen and (max-width: 968px) {
    max-height: 100px;
  }
  @media screen and (max-width: 768px) {
    display: none;
  }
}
.floating {
  animation: float 6s ease-in-out infinite;
  filter: drop-shadow(0 0 15px #06d7a033);
}
@keyframes float {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
}
h2 {
  font-size: 36px;
  font-family: 'Radio Canada', sans-serif;
  font-weight: 700;
  color: #62d4a4;
}
h3 {
  font-size: 32px;
  font-family: 'Radio Canada', sans-serif;
  font-weight: 700;
  color: #62d4a4;
}
h4 {
  font-size: 22px;
  font-family: 'Radio Canada', sans-serif;
  font-weight: 700;
}
.services-section {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.services-section h2 {
  text-align: center;
  max-width: 1100px;
}
.services {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  gap: 20px;
  margin-top: 20px;
}
.services section div {
  display: flex;
  align-items: center;
}
.services section div img {
  width: 32px;
  height: 32px;
}
.services section div p {
  font-family: 'Radio Canada', sans-serif;
  font-size: 22px;
  font-weight: 400;
}
.vl {
  border-left: 2px solid #06d7a0;
  height: 100px;
  margin: 0 20px;
}
.about-section {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  gap: 80px;
}
.about-section div img {
  width: 500px;
  height: 500px;
  @media screen and (max-width: 1500px) {
    max-height: 400px;
    max-width: 400px;
  }
  @media screen and (max-width: 1300px) {
    max-height: 300px;
    max-width: 300px;
  }
  @media screen and (max-width: 968px) {
    max-height: 100px;
    max-width: 100px;
  }
  @media screen and (max-width: 768px) {
    max-height: 100px;
    max-width: 100px;
  }
  @media screen and (max-width: 768px) {
    display: none;
  }
}
.about-section div p {
  font-family: 'Inter', sans-serif;
  font-size: 22px;
  font-weight: 400;
}
.occupation-section {
  background-color: transparent;
}
.occupation-section p {
  font-family: 'Radio Canada', sans-serif;
  font-size: 22px;
  font-weight: 400;
}
.occupation-info {
  display: flex;
  gap: 20px;
  margin-top: 20px;
}
.occupation-info p {
  max-width: 800px;
}
.occupation-info .v-btn {
  background-color: #62d4a4;
  color: black;
}
.arrow-container {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
}
.navigationPrev,
.navigationNext {
  background-color: transparent;
  color: #62d4a4;
  border: 1px solid #62d4a4;
}
.navigationPrev:hover,
.navigationNext:hover {
  background-color: #62d4a4;
  color: black;
}
.carousel-container {
  text-align: center;
  padding: 50px 0;
}
.carousel-container .swiper-slide {
  background-color: #62d4a4;
  border-radius: 1rem;
  cursor: pointer;
  padding: 10px;
}
.carousel-container .swiper-slide p {
  font-size: 16px;
  font-family: 'Radio Canada', sans-serif;
  font-weight: 400;
}
.howToUse-section {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
}

.howToUse-section div img {
  max-height: 450px;
  @media screen and (max-width: 1500px) {
    max-height: 400px;
  }
  @media screen and (max-width: 1300px) {
    display: none;
  }
}
.howToUse-section div p {
  font-family: 'Radio Canada', sans-serif;
  font-size: 22px;
  font-weight: 400;
}
.howToUse-section div section {
  margin-top: 10px;
}
.contact-section {
  display: flex;
  justify-content: center;
}
.contact-section .v-card {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 12px;
  padding: 40px;
  background-color: transparent;
  text-align: center;
  border: 1px solid #62d4a4;
  border-radius: 16px;
}
.contact-section .v-card .v-btn {
  background-color: #62d4a4;
  color: black;
}
.logo {
  cursor: pointer;
  transition: ease-in-out 0.2s;
  &:hover {
    filter: brightness(1.25);
    transition: ease-in-out 0.2s;
  }
}
.logo-text {
  font-family: 'Radio Canada', serif !important;
  color: white;
}
.v-footer {
  background-color: transparent;
  padding-bottom: 80px;
}

.v-footer .v-col {
  gap: 300px;
}

.v-footer .v-col div {
  gap: 40px;
  margin-top: 10px;
}

.v-footer p {
  font-family: 'Radio Canada', sans-serif;
  color: #62d4a4;
  font-size: 32px;
  font-weight: 700;
}

.v-footer a {
  cursor: pointer;
  transition: ease-in-out 0.2s;
  &:hover {
    filter: brightness(1.25);
    transition: ease-in-out 0.2s;
  }
}
</style>
