<template>
    <v-container>
        <v-sheet class="ma-2 pa-2">
        <v-row>
            <v-col > 
                <h1>
                    Meus Produtos
                </h1>
            </v-col > 
            <v-col class="d-flex justify-end"> 
                <v-btn  color="primary" :to="{name: 'product-create'}"><v-icon>mdi-plus </v-icon>Criar produto</v-btn>
            </v-col > 
        </v-row>
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
        </v-sheet>
        <v-sheet class="ma-2 pa-2">
        <h2>
            Produtos da Comunidade: 
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
        </v-sheet>
    </v-container>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useProductStore } from '@/stores/product';

const products = useProductStore();

//console.log(products);


onMounted(
    () => {
        console.log('teste');
        products.fetchProducts();
    }
) 

products.$subscribe((state) => {
    console.log(state.products);
//    myProducts.value = state.products;
});

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
