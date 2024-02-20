<template>
    <v-container>
        <v-sheet class="ma-2 pa-2">
            <h2>
                Produtos da Comunidade: 
            </h2>

            <v-list-item
                    v-for="(item, index) in products.products"
                    :key="index"
                    :prepend-avatar="item.prependAvatar"
                    lines="three"
                    >
                    <v-list-item-title v-text="item.name"></v-list-item-title>
                    <v-list-item-subtitle v-text="item.name"></v-list-item-subtitle>
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
