<template>
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
            <a href="https://forms.gle/uptNHWPrLn4CgqMf9" target="_blank" rel="noopener noreferrer">
                <v-btn class="font-weight-semibold">Quero fazer parte</v-btn>
            </a>
        </div>
    </v-container>
</template>

<script setup>
import homeAboutIcon from '@/assets/home/home-abouticon.png'
</script>

<style scoped>
.about-section {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    gap: 80px;

    @media screen and (max-width: 968px) {
        flex-direction: column;
        gap: 0;
    }
}

.about-section div {
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.about-section div img {
    max-height: 500px;

    @media screen and (max-width: 1500px) {
        max-height: 400px;
    }

    @media screen and (max-width: 1300px) {
        max-height: 300px;
    }

    @media screen and (max-width: 968px) {
        max-height: 100px;
    }

    @media screen and (max-width: 968px) {
        display: none;
    }
}

.about-section div p {
    font-family: 'Inter', sans-serif;
    font-size: 22px;
    font-weight: 400;
}

.about-section div a {
    text-decoration: none;
    max-width: fit-content;
}

.about-section div .v-btn {
    max-width: fit-content;
    background-color: #62d4a4;
    color: black;
    margin-top: 10px;
    padding: 10px 20px;
}
</style>
