<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
    <v-app >
        <v-app-bar color="grey-darken-4" app>
            <v-app-bar-nav-icon></v-app-bar-nav-icon>
            <v-toolbar-title><RouterLink to="/">Salvando o Labs</RouterLink></v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn text href="/registry">Registro</v-btn>
            <v-btn text href="/login">Login</v-btn>
            <v-btn text href="/products">Produtos</v-btn>
            <v-spacer></v-spacer>
            <v-btn text href="/profile">Perfil</v-btn>
        </v-app-bar>

        <transition name="fade" mode="out-in">
        <v-main>
            <RouterView />
        </v-main>
        </transition>
    </v-app>
</template>
