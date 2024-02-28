<template>
    <div class="d-flex flex-column justify-center align-center">
        <div class="d-flex flex-column ga-6">
            <div>
                <h1 class="home-title text-left mb-2">Seja Bem vindo(a) ao SouJunior Labs</h1>
                <h2 class="home-subtitle text-left text-grey-darken-1 text-h4">Laboratorio de oportunidades</h2>
            </div>
            <br>
            <div class="ma-2">
                <p v-if="auth.getProduct() == false">
                    Voce ainda não cadastrou o seu produto
                    <v-btn
                        class="font-weight-semibold"
                        :to="{ name: 'product-create'}"
                        >
                        cadastre agora
                    </v-btn>
                </p>
                <p v-else>
                   Acesse seu produto agora! 
                   <v-btn 
                        class="font-weight-semibold"
                        :to="{ name: 'product-by-id', params: { uuid: auth.getProduct().uuid } }"
                        >
                       Acessar 
                    </v-btn>
                </p>

            </div>
            <div class="ma-2">
                <p v-if="auth.getSquad() == false && auth.getProduct()" >
                    Você ainda não cadastrou o sua Squad, cadastre agora.
                    <v-btn
                        class="font-weight-semibold"
                        :to="{ name: 'squad-create', params: { productUuid: auth.getProduct().uuid } }"
                        >
                        cadastre agora
                    </v-btn>
                </p>

                <p v-if="auth.getSquad()" >
                    Acesse a sua Squad
                    <v-btn
                        class="font-weight-semibold"
                        :to="{ name: 'squads', params: { uuid: auth.getSquad().uuid} }"
                    >
                       acessar 
                    </v-btn>
                </p>

            </div>
        </div>
    </div>
</template>

<script setup>
import { useProductStore } from "@/stores/product";
import { useAuthStore } from "@/stores/auth";

const product = useProductStore();
const tt = await product.fetchProducts();

const auth = useAuthStore();
</script>
