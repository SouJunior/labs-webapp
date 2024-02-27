<template>
    <v-container>
        <v-row justify="center">
            <v-col cols="6">
                <h1>Cadastrar Squad</h1>
                <v-form>
                    <v-text-field variant="outlined" v-model="squad.name" label="Nome"></v-text-field>
                    <v-text-field variant="outlined" v-model="squad.description" label="Descrição"></v-text-field>
                    <v-btn color="primary" class="me-4"
                                           @click="submit">Salvar</v-btn>
                </v-form>

            </v-col>
        </v-row>
    </v-container>
</template>

<script setup>
import { reactive } from 'vue';
import { useSquadStore } from '@/stores/squad';
import { useRoute } from 'vue-router';
import router from "@/router";

const useSquad = useSquadStore();
const route = useRoute();

const squad = reactive({
    name: '',
    description: '',
    product_uuid: route.params.uuid,
});

const submit = () => {
    useSquad.create(squad);
    router.push({ name: 'product-by-id', params: { uuid: route.params.uuid } });
};
</script>
