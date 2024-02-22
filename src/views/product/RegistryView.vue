<template>
    <v-container>
        <v-row align="center" justify="center">
            <v-col cols="6">
                <h1 class="text-primary">Cadastre seu produto</h1>
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

const productStore = useProductStore();

const product = reactive({
    name: '',
    description: '',
    owner_uuid: '1234'
});

const submitApplication = () => {
    productStore.create(product);
};
</script>
