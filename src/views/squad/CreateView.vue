<template>
    <v-container>
        <v-row justify="center">
            <v-col cols="6">
                <h1 v-if="route.meta.type == 'create'">Cadastrar Squad</h1>
                <h1 v-if="route.meta.type == 'update'">Atualizar Squad</h1>
                <v-form>
                    <v-text-field v-model="squad.name" variant="outlined" label="Nome"></v-text-field>
                    <v-text-field v-model="squad.description" variant="outlined" label="Descrição"></v-text-field>
                    <v-btn
color="primary" class="me-4"
                                           @click="submit">Salvar</v-btn>
                    <v-btn 
                       :to="{ name: 'squads', params: { uuid: route.params.productUuid } }"
                        class="me-4"
                       >Cancelar</v-btn>
                </v-form>

            </v-col>
        </v-row>
    </v-container>
</template>

<script setup>
import { reactive } from 'vue';
import { useSquadStore } from '@/stores/squad';
import { useRoute } from 'vue-router';
import { useAuthStore } from "@/stores/auth";

import router from "@/router";

const useSquad = useSquadStore();
const route = useRoute();
const useAuth = useAuthStore();
console.log('params:' , route.params);
const squad = reactive({
    name: '',
    description: '',
    product_uuid: route.params.productUuid,
    uuid: ''
});

if (route.meta.type === 'update') {
    const s = useAuth.getSquad();
    squad.name = s.name;
    squad.description = s.description;
    squad.uuid = s.uuid;
    squad.product_uuid = s.product_uuid;
}

const submit = () => {
    if (route.meta.type == 'create') {
        useSquad.create(squad);
        router.push({ name: 'onboarding' });
    } else {
        console.log(useSquad.update(squad))
        router.push({ name: 'squads', params: { uuid: route.params.productUuid }});
    }
    // router.push({ name: 'product-by-id', params: { uuid: route.params.uuid } });
};
</script>
