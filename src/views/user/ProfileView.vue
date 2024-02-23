<template>
  <v-container>
    <v-row align="center" justify="center">
        <v-col cols="6">
            <h1 class="text-primary">Dados pessoais:</h1>
        </v-col>
    </v-row>

    <v-row align="center" justify="center">
      <v-col cols="6">
        <v-form>
          <v-text-field label="Nome completo *"
                        variant="outlined"
                        v-model="profile.name" disabled>
          </v-text-field>
          <v-text-field label="E-mail *"
                        variant="outlined"
                        v-model="profile.email">
          </v-text-field>
          <v-text-field label="Cidade *"
                        variant="outlined"
                        v-model="profile.city" :rules="[rules.textOnly]">
          </v-text-field>
          <v-text-field label="Estado *"
                        variant="outlined"
                        v-model="profile.state" :rules="[rules.textOnly]">
          </v-text-field>
          <v-text-field label="Perfil do LinkedIn *"
                        variant="outlined"
                        v-model="profile.linkedin">
          </v-text-field>
          <v-text-field label="Perfil no Discord *"
                        variant="outlined"
                        v-model="profile.discord">
          </v-text-field>
          <v-row>
            <v-col>
              <v-btn color="primary" @click="submitProfile">Atualizar</v-btn>
              <v-btn class="ml-3" :to="{ name: 'home' }">cancelar</v-btn>
            </v-col>
          </v-row>
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { reactive } from 'vue';
import { useAuthStore} from '@/stores/auth.js';

const auth = useAuthStore();

const profile = reactive({
  name: auth.auth.name,
  email: auth.auth.email,
  password: '12345678',
  city: '',
  state: '',
  linkedin: '',
  discord: ''
});

const rules = {
  textOnly: (value) => /^[a-zA-Z\sáàâãéèêíïóôõöúçñÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇÑ]*$/.test(value) || 'Apenas texto é permitido.'
};

const submitProfile = async () => {
  try {
    auth.updateProfile(profile);
  } catch (error) {
    console.log(error);
  }
};
</script>
