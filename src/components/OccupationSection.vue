<template>
    <v-container class="occupation-section">
        <div>
            <h2>Aqui, todas as áreas são bem-vindas:</h2>
            <div class="occupation-info">
                <p>Participe da nossa comunidade e explore diversas oportunidades disponíveis.</p>
                <a href="https://forms.gle/uptNHWPrLn4CgqMf9" target="_blank" rel="noopener noreferrer">
                    <v-btn class="font-weight-semibold">Quero fazer parte</v-btn>
                </a>
            </div>
        </div>
        <div>
            <div class="carousel-container">
                <swiper :slides-per-view="8" :space-between="30" :pagination="true"
                    :navigation="{ nextEl: '.navigationNext', prevEl: '.navigationPrev' }" :breakpoints="{
                    320: { slidesPerView: 2, spaceBetween: 20 },
                    640: { slidesPerView: 3, spaceBetween: 30 },
                    768: { slidesPerView: 4, spaceBetween: 35 },
                    1024: { slidesPerView: 5, spaceBetween: 40 },
                    1280: { slidesPerView: 6, spaceBetween: 45 },
                    1536: { slidesPerView: 7, spaceBetween: 50 },
                    1920: { slidesPerView: 8, spaceBetween: 60 }
                }">
                    <swiper-slide v-for="(item, index) in carouselItemsRef" :key="index"
                        class="d-flex flex-column align-center">
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
</template>

<script setup>
import { ref } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
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

    @media screen and (max-width: 768px) {
        flex-direction: column;
    }
}

.occupation-info p {
    max-width: 800px;
}

.occupation-info a {
    text-decoration: none;
    max-width: fit-content;
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
    background-color: #40715c;
    border-radius: 1rem;
    cursor: pointer;
    padding: 10px;
}

.carousel-container .swiper-slide p {
    font-size: 16px;
    font-family: 'Radio Canada', sans-serif;
    font-weight: 400;
}
</style>