<template>
    <v-footer>
        <v-row>
            <v-col cols="12" class="d-flex">
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
                        <section v-for="(icon, index) in footerIcons" :key="index">
                            <a :href="icon.link" target="_blank" rel="noopener noreferrer">
                                <v-img :height="36" :width="36" :src="icon.src" :alt="icon.alt" />
                            </a>
                        </section>
                    </div>
                </div>
            </v-col>
        </v-row>
    </v-footer>
</template>

<script setup>
import logo_white from '@/assets/logo-white-transparent.png'
import footerIcon1 from '@/assets/home/Github.png'
import footerIcon2 from '@/assets/home/Discord.png'
import footerIcon3 from '@/assets/home/Linkedin.png'
import footerIcon4 from '@/assets/home/Instagram.png'
import footerIcon5 from '@/assets/home/YouTube.png'
import footerIcon6 from '@/assets/home/Twitter.png'
import footerIcon7 from '@/assets/home/Facebook.png'

const footerIcons = [
    { link: 'https://github.com/SouJunior-Labs', src: footerIcon1, alt: 'Github' },
    { link: 'https://forms.gle/uptNHWPrLn4CgqMf9', src: footerIcon2, alt: 'Discord' },
    { link: 'https://www.linkedin.com/company/soujunior-labs/', src: footerIcon3, alt: 'Linkedin' },
    { link: 'https://www.instagram.com/soujunior.tech/', src: footerIcon4, alt: 'Instagram' },
    { link: 'https://www.youtube.com/@soujuniortech', src: footerIcon5, alt: 'Youtube' },
    { link: 'https://twitter.com/SouJunior_Tech', src: footerIcon6, alt: 'Twitter' },
    { link: 'https://www.facebook.com/people/SouJunior/100086671131030', src: footerIcon7, alt: 'Facebook' },
]
</script>

<style scoped>
.v-footer {
    background-color: transparent;
    padding-bottom: 80px;
}

.v-footer .v-col {
    align-items: center;
    justify-content: space-between;

    @media screen and (max-width: 968px) {
        flex-direction: column;
        align-items: center;
        text-align: center;
    }
}

.v-footer .v-col div {
    gap: 40px;
    margin-top: 10px;

    @media screen and (max-width: 968px) {
        gap: 20px;
    }
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
</style>