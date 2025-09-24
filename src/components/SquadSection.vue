<template>
    <v-container class="squad-section">
        <h5>Conheça nossa equipe</h5>
        <p class="squad-text">
            No SouJunior Labs, nossa equipe é apaixonada por criar produtos inovadores que fazem a
            diferença. Estamos comprometidos em melhorar a experiência da comunidade e em ajudar
            profissionais iniciantes a crescerem no mercado de tecnologia. Estamos sempre prontos para
            ouvir suas ideias e responder às suas perguntas. Sinta-se à vontade para entrar em contato
            conosco.
        </p>
        <v-row>
            <v-col v-for="member in teamMembers" :key="member.id" cols="12" md="6" lg="4"
                class="d-flex flex-column align-center">
                <v-card class="d-flex flex-column align-center">
                    <v-img :src="member.image" width="100" height="100" />
                    <h6>{{ member.name }}</h6>
                    <p>{{ member.role }}</p>
                    <div class="d-flex align-center justify-center ga-2 mt-3">
                        <a :href="member.linkedin" target="_blank" rel="noopener noreferrer">
                            <v-img height="20" width="20" :src="squadIcon1" alt="Linkedin" />
                        </a>
                        <a :href="member.github" target="_blank" rel="noopener noreferrer">
                            <v-img height="20" width="20" :src="squadIcon2" alt="Github" />
                        </a>
                    </div>
                </v-card>
            </v-col>
            <v-col cols="12" md="6" lg="12" class="d-flex flex-column align-center">
                <v-card class="d-flex flex-column align-center">
                    <v-img :src="wouernerIcon" width="120" height="120" />
                    <h6>Wouerner Brandão</h6>
                    <p>Founder e CEO SouJunior / Tech Lead</p>
                    <div class="d-flex align-center justify-center ga-2 mt-3">
                        <a href="https://www.linkedin.com/in/wouerner/" target="_blank" rel="noopener noreferrer">
                            <v-img height="20" width="20" :src="squadIcon1" alt="Linkedin" />
                        </a>
                        <a href="https://www.github.com/wouerner" target="_blank" rel="noopener noreferrer">
                            <v-img height="20" width="20" :src="squadIcon2" alt="Github" />
                        </a>
                    </div>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script setup>
import andrezzaIcon from '@/assets/home/andrezzazenith.jpg'
import anneIcon from '@/assets/home/annefreitas.jpg'
import fernandaIcon from '@/assets/home/fernandagiraldelli.png'
import larissaIcon from '@/assets/home/larissasouza.jpg'
import leticiaIcon from '@/assets/home/leticiaevelyn.jpg'
import ovidioIcon from '@/assets/home/ovidiofariasneto.jpg'
import squadIcon1 from '@/assets/home/squadIcon1.png'
import squadIcon2 from '@/assets/home/squadIcon2.png'
import wouernerIcon from '@/assets/home/wouerner.png'

const teamMembers = [
    {
        id: 1,
        name: 'Ovídio Farias',
        role: 'Front-end Developer',
        linkedin: 'https://www.linkedin.com/in/ovidiojcf/',
        github: 'https://github.com/Ovidiojcf',
        image: ovidioIcon
    },
    {
        id: 2,
        name: 'Leticia Neves',
        role: 'Product Manager',
        linkedin: 'https://www.linkedin.com/in/leticiaevelyn/',
        github: 'https://github.com/leticiaefneves',
        image: leticiaIcon
    },
    {
        id: 3,
        name: 'Andrezza Zenith',
        role: 'Product Manager',
        linkedin: 'https://www.linkedin.com/in/andrezza-resende-zenith/',
        github: 'https://github.com/Andrezzamg',
        image: andrezzaIcon
    },
    {
        id: 4,
        name: 'Anne Freitas',
        role: 'UI/UX Designer',
        linkedin: 'https://www.linkedin.com/in/annefreitas/',
        github: 'https://github.com/annecfreits',
        image: anneIcon
    },
    {
        id: 5,
        name: 'Fernanda Giraldelli',
        role: 'UI/UX Designer',
        linkedin: 'https://www.linkedin.com/in/fernandagiraldelli/',
        github: 'https://github.com/FeGiraldelli',
        image: fernandaIcon
    }
    ,
    {
        id: 6,
        name: 'Larissa Rodrigues',
        role: 'UI/UX Designer',
        linkedin: 'https://www.linkedin.com/in/larissamanawa/',
        github: 'https://github.com/larimanawa',
        image: larissaIcon
    }
]
</script>

<style scoped>
.squad-section {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.squad-section .v-row {
    display: flex;
    margin-top: 20px;
}

.squad-section .squad-text {
    font-family: 'Inter', sans-serif;
    font-size: 20px;
    font-weight: 400;
    margin-top: 20px;
    max-width: 900px;
    text-align: center;

    @media screen and (max-width: 968px) {
        text-align: start;
    }
}

.squad-section .v-card {
    display: flex;
    width: 100%;
    height: 100%;
    gap: 3px;
    padding: 30px 0px 20px 0px;
    background-color: transparent;
    text-align: center;
    border: 1px solid #62d4a4;
    border-radius: 8px;
    background-color: #335445;
}

.squad-section .v-card .v-img {
    margin-bottom: 20px;
}

.squad-section .v-card .v-img {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    object-fit: cover;
}

.squad-section .v-card p {
    font-size: 16px;
    font-family: 'Radio Canada', sans-serif;
    font-weight: 400;
    color: #62d4a4;
}

.squad-section .v-card a {
    cursor: pointer;
    transition: ease-in-out 0.2s;

    &:hover {
        filter: brightness(1.25);
        transition: ease-in-out 0.2s;
    }
}
</style>