<template>
    <v-container class="hero-section">
        <v-row>
            <div class="d-flex flex-column">
                <h1>Vem pro Labs!</h1>
                <p>
                    Aqui você desenvolve produtos reais e aprimora habilidades práticas para conquistar o
                    mercado de trabalho.
                </p>
                <a href="https://forms.gle/uptNHWPrLn4CgqMf9" target="_blank" rel="noopener noreferrer">
                    <v-btn class="font-weight-semibold">Quero fazer parte</v-btn>
                </a>
            </div>
        </v-row>
        <div>
            <img :src="imgUrl" alt="Logo SouJunior Labs" class="drag-none floating" />
        </div>
    </v-container>
</template>

<script setup>
import imgUrl from '@/assets/logo-green-transparent.png'
</script>

<style scoped>
.hero-section {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    gap: 80px;

    @media screen and (max-width: 968px) {
        flex-direction: column;
        gap: 0;
    }
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

.hero-section a {
    text-decoration: none;
    max-width: fit-content;
}

.hero-section .v-btn {
    max-width: fit-content;
    background-color: #62d4a4;
    color: black;
    margin-top: 10px;
    padding: 10px 20px;
}

.hero-section {
    img {
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
</style>