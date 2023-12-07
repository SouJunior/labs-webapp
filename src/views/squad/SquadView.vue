<template>
  <v-container>
      <v-sheet class="pa-2">
      <h1>Minha Squad</h1>
        <v-list
                :items="squad"
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
import { ref } from 'vue';

const squad = ref([
    {
        title: "Produto 1",
        prependAvatar: "https://placehold.co/200",
        subtitle: "Descrição do Produto 1",
        to: {name: 'squad-create' }, 
        appendIcon: 'mdi-close',
    },
    { type: 'divider', inset: true },
    {
        title: "Produto 2",
        prependAvatar: "https://placehold.co/200",
        subtitle: "Descrição do Produto 2",
        to: {name: 'squad-create'}
    },
]);

</script>
