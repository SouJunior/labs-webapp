<template>
    <v-container>
        <h1>
           Meus Produtos
        </h1>
        <v-list
                :items="myProducts"
                item-props
                lines="three"
                link
                >
                <template v-slot:subtitle="{ subtitle }">
                    <div v-html="subtitle"></div>
                </template>
        </v-list>

        <h2>
            Produtos do SJL: 
        </h2>
        <v-list
                :items="produtos"
                item-props
                lines="three"
                link
                >
                <template v-slot:subtitle="{ subtitle }">
                    <div v-html="subtitle"></div>
                </template>
        </v-list>

    </v-container>
</template>

<script setup>
import { ref } from 'vue';

const produtos = ref([
    {
        title: "Produto 1",
        prependAvatar: "https://placehold.co/200",
        subtitle: "Descrição do Produto 1",
        to: {name: 'product-by-id' }
    },
    { type: 'divider', inset: true },
    {
        title: "Produto 2",
        prependAvatar: "https://placehold.co/200",
        subtitle: "Descrição do Produto 2",
        to: {name: 'product-by-id'}
    },
]);

const myProducts = ref([
    {
        title: "PetJournal",
        prependAvatar: "https://placehold.co/200",
        subtitle: "Descrição do Produto 1",
        to: {name: 'product-by-id' }
    },
]);

</script>
