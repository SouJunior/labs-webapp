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
                    <v-text-field
v-model="product.name" 
                                  label="Nome do produto*"
                                  variant="outlined"></v-text-field>
                    <v-text-field 
                                  v-model="product.description"
                                  variant="outlined" label="Descreva seu projeto?"></v-text-field>
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
let p = {}

if ( route.meta.update ==  true) {
    //const index = useAuth.products.map(function(e) { return e.uuid; }).indexOf(route.params.uuid);
    //p = useAuth.products[index];
    p = useAuth.getProduct();
}

const product = reactive({
    uuid: '',
    name: '',
    description: '',
});

if ( route.meta.update ==  true) {
    product.uuid = route.params.uuid
    product.name = p.name
    product.description = p.description 
}

const submitApplication = () => {
    if (route.meta.update == false) {
        productStore.create(product);
    } else {
        productStore.update(product);
    }
};
</script>
