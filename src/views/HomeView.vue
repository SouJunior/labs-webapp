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
  </v-container>
</template>

<script setup>
import imgUrl from '@/assets/logo-green-transparent.png'
import homeIcon1 from '@/assets/home-icon1.png'
import homeIcon2 from '@/assets/home-icon2.png'
import homeIcon3 from '@/assets/home-icon3.png'
import homeIcon4 from '@/assets/home-icon4.png'
import homeAboutIcon from '@/assets/home-aboutIcon.png'
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
  color: #fff;
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
  color: #fff;
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
  color: #fff;
}
</style>
