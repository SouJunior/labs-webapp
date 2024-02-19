<template>
  <v-container>
    <v-sheet class="py-4 rounded-lg mb-4">
      <div class="px-4 d-flex align-center justify-space-between">
        <h1>Minha Squad</h1>
        <v-btn  color="#06d7a0" prepend-icon="mdi-account-group" size="large" :to="{ name: 'squad-create', params: {id: 1} }">
          <template v-slot:prepend>
            <v-icon color="white"></v-icon>
          </template>
          <span class="text-white font-weight-bold">Criar squad</span>
        </v-btn>
      </div>

      <v-list-item
          v-for="(item, index) in mySquad"
          :key="index"
          :prepend-avatar="item.prependAvatar"
          lines="three"
          >
          <v-list-item-title v-text="item.title"></v-list-item-title>
          <v-list-item-subtitle v-text="item.subtitle"></v-list-item-subtitle>
      </v-list-item>
    </v-sheet>

    <v-sheet class="py-4 rounded-lg">
        <h2 class="px-4">Squads da comunidade</h2>
        <v-list-item
            v-for="(item, index) in squad"
            :key="index"
            :prepend-avatar="item.prependAvatar"
            lines="three"
            >
            <v-list-item-title v-text="item.title"></v-list-item-title>
            <v-list-item-subtitle v-text="item.subtitle"></v-list-item-subtitle>
        </v-list-item>
    </v-sheet>
  </v-container>
</template>

<script setup>
import { ref } from 'vue';

import { useAuthStore } from "@/stores/auth";

const auth = useAuthStore();
// import { useSquadStore } from '@/stores/squad';
// import { useRouter } from 'vue-router';

// const squadStore = useSquadStore();

// const router = useRouter();

const mySquad = ref([
  {
    id: 1,
    title: auth.squads[0].name,
    prependAvatar: `https://picsum.photos/600?random=${Math.random()}`,
    subtitle: auth.squads[0].description,
  },
]);

const squad = ref([
  {
    id: 2,
    title: 'Squad 1',
    prependAvatar: `https://picsum.photos/600?random=${Math.random()}`,
    subtitle: 'Descrição da Squad 1',
  },
  {
    id: 3,
    title: 'Squad 2',
    prependAvatar: `https://picsum.photos/600?random=${Math.random()}`,
    subtitle: 'Descrição da Squad 2',
  },
]);
</script>
