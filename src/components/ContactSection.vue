<template>
    <v-container class="contact-section">
        <div class="contact-content d-flex flex-column align-center">
            <hr />
            <v-card>
                <h2>Precisa de Ajuda?</h2>
                <p>
                    Se estiver enfrentando alguma dificuldade ao utilizar nossa plataforma ou se possuir
                    dúvidas ou sugestões que gostaria de compartilhar, entre em contato conosco através do
                    canal "Founders only" no Discord da Sou Junior Labs. Nossa equipe ficará feliz em
                    ouvi-lo e ajudá-lo.
                </p>
            </v-card>
        </div>
    </v-container>
</template>

<style scoped>
.contact-section {
    display: flex;
    justify-content: center;
}

.contact-content {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.contact-section .v-card {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    gap: 12px;
    padding: 40px;
    background-color: transparent;
    text-align: center;
    border: none;
    box-shadow: none;

    @media screen and (max-width: 768px) {
        padding: 0;
        align-items: start;
        text-align: start;
    }
}

.contact-section .v-card p {
    max-width: 800px;
}

hr {
    border-image: linear-gradient(to right, #60a69c, #000) 250;
    height: 1px;
    margin: 20px 0;
    padding: 0;
    width: 100%;
}
</style>