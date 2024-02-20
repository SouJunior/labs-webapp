<template>
    <v-row>
      <v-col cols="12" md="6">
        <v-img :src="produto.imagem" aspect-ratio="1.7"></v-img>
      </v-col>
      <v-col cols="12" md="6">
        <v-card>
          <v-card-title class="headline">{{ produto.nome }}</v-card-title>
          <v-card-subtitle>{{ produto.descricaoCurta }}</v-card-subtitle>
          <v-card-actions>
              <v-btn color="primary" :to="{ name : 'squads', params: {uuid: auth.squads[0].uuid } }">Squad</v-btn>
            <v-spacer></v-spacer>
            <v-btn color="primary" :to="{ name : 'product-create' }">Atualizar</v-btn>

            <v-dialog width="500">
                <template v-slot:activator="{ props }">
                    <v-btn v-bind="props" color="red">excluir</v-btn>
                </template>
                <template v-slot:default="{ isActive }">
                    <v-card title="Dialog">
                        <v-card-text>
                           Você tem certeza que deseja excluir o produto? 
                        </v-card-text>

                        <v-card-actions>
                            <v-btn
                                color="red"
                                text="excluir"
                                @click=""
                                ></v-btn>
                            <v-spacer/>
                            <v-btn
                                text="Cancelar"
                                @click="isActive.value = false"
                                ></v-btn>
                        </v-card-actions>
                    </v-card>
                </template>
            </v-dialog>

          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
</template>

<script setup>
import { ref } from 'vue';
import { useProductStore } from '@/stores/product';
import { useRoute } from 'vue-router';

import { useAuthStore } from "@/stores/auth";

const auth = useAuthStore();

const route = useRoute();

const product = useProductStore();

const p = await product.getProduct(route.params.uuid);

console.log(p);

    const produto = ref({
      nome: p.name,
      imagem: "https://placehold.co/400",
      descricaoCurta: p.description,
      descricaoCompleta: "Uma descrição mais detalhada do software, explicando suas principais funcionalidades e benefícios.",
      caracteristicas: [
        "Característica 1",
        "Característica 2",
        "Característica 3"
      ],
      preco: "R$ 999,00"
    });

    const entrarEmContato = () => {
      // Implementar a lógica de contato ou redirecionar para a página de compra
      console.log("Entrar em contato ou ir para a página de compra");
    };

</script>

<style scoped>
</style>
