<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
    <v-app>
        <v-app-bar app>
            <v-app-bar-nav-icon></v-app-bar-nav-icon>
            <v-toolbar-title><RouterLink to="/">Salvando o Labs</RouterLink></v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn text href="/login">Login</v-btn>
            <v-btn text href="/products">Produtos</v-btn>
        </v-app-bar>

  <v-layout class="rounded rounded-md">
        <v-main class="d-flex justify-center ">
            <RouterView />
        </v-main>
  </v-layout>
    </v-app>

</template>
