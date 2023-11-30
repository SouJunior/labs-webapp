<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
    <v-app class="w-100">
        <v-app-bar color="surface-variant" title="Application bar" app>
            <v-app-bar-nav-icon></v-app-bar-nav-icon>
            <v-toolbar-title><RouterLink to="/">Salvando o Labs</RouterLink></v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn text href="/login">Login</v-btn>
            <v-btn text href="/products">Produtos</v-btn>
        </v-app-bar>

        <transition name="fade" mode="out-in">
        <v-main>
            <RouterView />
        </v-main>
        </transition>
    </v-app>
</template>
