<template>
  <v-container class="d-flex justify-center align-center" style="height: 100%;">
    <v-row>
      <v-col cols="12" md="6">
        <v-img :src="produto.imagem" aspect-ratio="1.7"></v-img>
      </v-col>
      <v-col cols="12" md="6">
        <v-card>
          <v-card-title class="headline">{{ produto.nome }}</v-card-title>
          <v-card-subtitle>{{ produto.descricaoCurta }}</v-card-subtitle>
          <v-card-text>{{ produto.descricaoCompleta }}</v-card-text>
          <v-list dense>
            <v-list-item v-for="(caracteristica, index) in produto.caracteristicas" :key="index">
              <v-list-item-icon>
                <v-icon>mdi-check-circle-outline</v-icon>
              </v-list-item-icon>
              <v-list-item-content>{{ caracteristica }}</v-list-item-content>
            </v-list-item>
          </v-list>
          <v-card-actions>
            <v-btn color="primary" @click="entrarEmContato">Entre em Contato</v-btn>
            <v-spacer></v-spacer>
            <span class="title">Preço: {{ produto.preco }}</span>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const produto = ref({
      nome: "Software Fantástico",
      imagem: "https://placehold.co/400",
      descricaoCurta: "Uma breve descrição do software.",
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

    return {
      produto,
      entrarEmContato
    };
  }
};
</script>
