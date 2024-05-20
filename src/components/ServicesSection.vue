<template>
    <v-container class="services-section">
        <div>
            <h2>
                Ingressar no mundo tech pode ser desafiador e, buscando ajudar nesse desafio, a SouJunior Labs oferece:
            </h2>
        </div>
        <div class="services">
            <section>
                <div>
                    <section>
                        <img :src="homeIcon1" alt="Suporte ao desenvolvimento" />
                    </section>
                    <p>Suporte ao desenvolvimento de novos produtos;</p>
                </div>
                <div>
                    <section>
                        <img :src="homeIcon2" alt="Aprimoramento de habilidades" />
                    </section>
                    <p>Aprimoramento de habilidades práticas em equipes (soft e hard skills);</p>
                </div>
            </section>
            <div class="vl"></div>
            <section>
                <div>
                    <section>
                        <img :src="homeIcon3" alt="Expansão de conexões" />
                    </section>
                    <p>Expansão de conexões e networking;</p>
                </div>
                <div>
                    <section>
                        <img :src="homeIcon4" alt="Colaboração na construção de portfólios" />
                    </section>
                    <p>Colaboração na construção e fortalecimento de portfólios e currículos;</p>
                </div>
            </section>
        </div>
    </v-container>
</template>

<script setup>
import homeIcon1 from '@/assets/home/icon1.png'
import homeIcon2 from '@/assets/home/icon2.png'
import homeIcon3 from '@/assets/home/icon3.png'
import homeIcon4 from '@/assets/home/icon4.png'
</script>

<style scoped>
.services-section {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.services-section h2 {
    text-align: center;
    max-width: 1100px;
    font-family: 'Radio Canada', sans-serif;
    font-size: 36px;
    line-height: 120%;
    font-weight: 700;
    color: #62D4A4;
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
    gap: 10px;
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

@media screen and (max-width: 968px) {
    .services-section h2 {
        text-align: left;
    }
}

@media screen and (max-width: 768px) {
    .services {
        flex-direction: column;
        gap: 0px;
    }

    .vl {
        display: none;
    }
}
</style>