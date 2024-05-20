<template>
    <v-container class="howToUse-section">
        <div>
            <h2>A Plataforma</h2>
            <p>
                Nossa plataforma foi projetada para auxiliar no gerenciamento dos produtos criados na
                SouJunior Labs. Por enquanto, ela
                <strong>está disponível apenas para os Founders dos produtos já cadastrados,</strong> mas
                em breve todos poderão acessá-la.
            </p>
            <p>
                Se você é um Founder ativo, primeiro precisamos fazer seu cadastro. Bem simples! Na aba de
                registro, confirme que quer realizar o cadastro e, de posse do token enviado no canal
                dedicado aos , no Discord da Sou Junior Labs, realize o seu cadastro.
            </p>
            <p>
                Não esqueça de cadastrar seu produto e squad. Como o intuito é termos um local oficial
                para nossos produtos, é importante manter esses dados sempre atualizados. Em breve,
                teremos mais novidades.
            </p>
        </div>
        <div>
            <img :src="howToUse" alt="" />
        </div>
    </v-container>
</template>

<script setup>
import howToUse from '@/assets/home/howToUse.png'
</script>

<style scoped>
.howToUse-section {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;

    @media screen and (max-width: 768px) {
        flex-direction: column;
    }
}

.howToUse-section div {
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.howToUse-section div img {
    max-height: 400px;

    @media screen and (max-width: 1500px) {
        max-height: 300px;
    }

    @media screen and (max-width: 1300px) {
        max-height: 250px;
    }

    @media screen and (max-width: 968px) {
        max-height: 100px;
    }

    @media screen and (max-width: 968px) {
        display: none;
    }
}

.howToUse-section div p {
    font-family: 'Radio Canada', sans-serif;
    font-size: 22px;
    font-weight: 400;
}
</style>