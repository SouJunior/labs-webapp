<template>
    <v-app >
        <v-app-bar color="green-accent-2" app>
            <v-toolbar-title>Salvando o Labs</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn text :to="{name: 'home'}">Home</v-btn>
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

        <v-footer color="green-accent-2" padless>
            <v-row justify="center">
                <v-col cols="12" sm="6" md="3">
                    <h3 class="">Navegação</h3>
                    <v-list color="green-accent-2" dense>
                        <v-list-item  :to="{ name: 'home' }" link>
                            <v-list-item-content color="green-accent-2">Home</v-list-item-content>
                        </v-list-item>
                        <v-list-item link :to="{name: 'registry'}">
                            <v-list-item-content>Registro</v-list-item-content>
                        </v-list-item>
                        <!-- More links -->
                    </v-list>
                </v-col>
                <v-col cols="12" sm="6" md="3">
                    <h3>Midias Sociais</h3>
                    <v-list color="green-accent-2" dense>
                        <v-list-item href="https://www.linkedin.com/company/soujunior-labs/" link>
                            <v-list-item-content>Linkedin</v-list-item-content>
                        </v-list-item>
                    </v-list>
                </v-col>
                <!-- Additional columns for more content -->
            </v-row>
        </v-footer>
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
