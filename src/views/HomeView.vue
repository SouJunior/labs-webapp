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
  </v-container>
</template>

<script setup>
import { ref } from 'vue'
import imgUrl from '@/assets/logo-green-transparent.png'
import homeIcon1 from '@/assets/home-icon1.png'
import homeIcon2 from '@/assets/home-icon2.png'
import homeIcon3 from '@/assets/home-icon3.png'
import homeIcon4 from '@/assets/home-icon4.png'
import homeAboutIcon from '@/assets/home-aboutIcon.png'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import areaIcon1 from '@/assets/areaIcon1.png'
import areaIcon2 from '@/assets/areaIcon2.png'
import areaIcon3 from '@/assets/areaIcon3.png'
import areaIcon4 from '@/assets/areaIcon4.png'
import areaIcon5 from '@/assets/areaIcon5.png'
import areaIcon6 from '@/assets/areaIcon6.png'
import areaIcon7 from '@/assets/areaIcon7.png'
import areaIcon8 from '@/assets/areaIcon8.png'
import areaIcon9 from '@/assets/areaIcon9.png'
import areaIcon10 from '@/assets/areaIcon10.png'
import areaIcon11 from '@/assets/areaIcon11.png'
import areaIcon12 from '@/assets/areaIcon12.png'

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
  margin-right: 10px;
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
  padding: 20px;
}

.carousel-container .swiper-slide {
  background-color: #62d4a4;
  border-radius: 1rem;
  transition: ease 3s;
  cursor: pointer;
  padding: 10px;
}

.carousel-container .swiper-slide p {
  font-size: 16px;
  font-family: 'Radio Canada', sans-serif;
  font-weight: 400;
  margin-bottom: 1rem;
}
</style>
