<template>
    <v-app >
        <v-app-bar color="grey-darken-4" app>
            <v-app-bar-nav-icon></v-app-bar-nav-icon>
            <v-toolbar-title><RouterLink to="/">Salvando o Labs</RouterLink></v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn v-if="!user.getName" text :to="{name: 'registry'}">Registro</v-btn>
            <v-btn v-if="!user.getName" text :to="{name: 'login'}">Login</v-btn>
            <v-btn v-if="user.getName" text :to="{name: 'products'}">Produtos</v-btn>
            <v-spacer></v-spacer>
            <!-- Custom Dropdown -->
            <v-menu v-if="user.getName" open-on-hover>
                <template v-slot:activator="{ props }">
                    <v-btn text v-bind="props" >
                        {{ user.getName }}
                        <v-icon icon="$vuetify"></v-icon>
                        <v-icon right>mdi-chevron-down</v-icon>
                    </v-btn>
                </template>

                <v-list>
                    <v-list-item link :to="{name: 'profile'}">
                        <v-list-item-title>Profile</v-list-item-title>
                    </v-list-item>
                    <v-list-item link :to="{name: 'home'}">
                        <v-list-item-title>Logout</v-list-item-title>
                    </v-list-item>
                </v-list>

            </v-menu>

        </v-app-bar>

        <transition name="fade" mode="out-in">
        <v-main>
            <RouterView />
        </v-main>
        </transition>
    </v-app>
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { ref } from 'vue';
import { useUserStore } from '@/stores/user'

const isLoggedIn = ref(false); // Use ref for reactive primitives
const userName = ref('Alice');
const {user} = useUserStore()
</script>
