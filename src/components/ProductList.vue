<template>
    <v-container>
        <v-sheet class="ma-2 pa-2">
            <h2>
                Produtos da Comunidade: 
            </h2>
            <p>
              Conheça os produtos criados dentro do SouJunior Labs.
            </p>

            <v-list-item
                    v-for="(item, index) in products.products"
                    :key="index"
                    :prepend-avatar="item.prependAvatar"
                    >
                    <v-list-item-title v-text="item.name || 'Produto sem nome'""></v-list-item-title>
            </v-list-item>
        </v-sheet>
    </v-container>
</template>

<script setup>
import { useProductStore } from '@/stores/product';

const products = useProductStore();

await products.fetchProducts();

</script>

<style scoped>
</style>
