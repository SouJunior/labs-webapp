<template>
    <div class="d-flex flex-column justify-center align-center">
        <div class="d-flex flex-column ga-6">
            <div>
                <h1 class="home-title text-left mb-2">Seja Bem vindo(a) ao Labs</h1>
                <h2 class="home-subtitle text-left text-grey-darken-1 text-h4">Laboratorio de oportunidades</h2>
            </div>
            <br>
            <div>
                <p v-if="product.getProductsByUuid().length == 0 ">
                    Voce ainda não cadastrou o seu Produto,
                    <v-btn
                        variant="text"
                        class="font-weight-semibold"
                        :to="{ name: 'product-create'}"
                        >
                        cadastre agora
                    </v-btn>
                </p>
                <p v-else>
                   Acesse seu produto agora! 
                   <v-btn 
                        variant="text"
                        class="font-weight-semibold"
                        :to="{ name: 'product-by-id', params: { uuid: tt[0].uuid } }"
                        >
                       Acessar 
                    </v-btn>
                </p>

                <p v-if="auth.squads.length == 0" >
                    Você ainda não cadastrou o sua Squad, cadastre agora.
                    <v-btn
                        variant="text"
                        class="font-weight-semibold"
                        :to="{ name: 'squad-create', params: { uuid: auth.squads[0].uuid} }"
                        >
                        cadastre agora
                    </v-btn>
                </p>
                <p v-else: >
                    Acesse a sua Squad
                    <v-btn
                        variant="text"
                        class="font-weight-semibold"
                        :to="{ name: 'squads', params: { uuid: auth.squads[0].uuid} }"
                    >
                       acessar 
                    </v-btn>
                </p>
            </div>
        </div>
    </div>
</template>

<script setup>
import { onMounted } from "vue";
import { useProductStore } from "@/stores/product";
import { useAuthStore } from "@/stores/auth";
//import { useSquadStore } from "@/stores/squad";

const product = useProductStore();
const auth = useAuthStore();
//const useSquad = useSquadStore();

const tt = await product.fetchProducts();

console.log('tt', tt[0].uuid)

onMounted(
   async () => {
        if (auth.getUuid() != undefined) {

            //const p = product.getProductsByUuid()
            console.log('mount :')
        }
    }
) 

// console.log(product.getProductsByUuid())

</script>

<style scoped>
</style>
