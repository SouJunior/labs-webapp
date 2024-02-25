<template>
    <v-container>
        <v-row align="center" justify="center">
            <v-col cols="6">
                <h1 v-if="route.meta.update == false" class="text-primary">Cadastre seu produto</h1>
                <h1 v-if="route.meta.update == true" class="text-primary">Atualizar seu produto</h1>
            </v-col>
        </v-row>

        <v-row  align="center" justify="center">
            <v-col cols="6">
                <v-form>
                    <v-text-field label="Nome do produto*" 
                                  variant="outlined"
                                  v-model="product.name"></v-text-field>
                    <v-text-field 
                                  variant="outlined"
                                  label="Descreva seu projeto?" v-model="product.description"></v-text-field>
                    <v-row  align="center" justify="center">
                        <v-col cols="6">
                            <v-btn color="primary" @click="submitApplication">Salvar</v-btn>
                            <v-btn class="ml-3" :to="{ name: 'onboarding' }">cancelar</v-btn>
                        </v-col>
                    </v-row>
                </v-form>
            </v-col>
        </v-row>
    </v-container>
</template>

<script setup>
import { reactive } from 'vue';
import { useProductStore } from '@/stores/product';
import { useAuthStore } from "@/stores/auth";
import { useRoute } from 'vue-router';

const route = useRoute();

const productStore = useProductStore();
const useAuth = useAuthStore();

const index = useAuth.products.map(function(e) { return e.uuid; }).indexOf(route.params.uuid);
const p = useAuth.products[index];

const product = reactive({
    uuid: route.params.uuid,
    name: p.name,
    description: p.description,
});

const submitApplication = () => {
    if (route.meta.update == false) {
        productStore.create(product);
    } else {
        productStore.update(product);
    }
};
</script>
