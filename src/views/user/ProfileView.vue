<template>
  <v-container>
    <v-row justify="center">
      <v-col xl="6" xxl="6">
        <v-sheet class="pa-2">
    <h1>Dados pessoais</h1>
    <v-form>
      <v-text-field label="Nome completo" v-model="profile.name" disabled></v-text-field>
      <v-text-field label="E-mail" v-model="profile.email" disabled></v-text-field>
      <v-text-field label="Cidade" v-model="profile.city"></v-text-field>
      <v-text-field label="Estado" v-model="profile.state"></v-text-field>
      <v-text-field label="Cargo?" v-model="profile.stack"></v-text-field>
      <v-text-field label="Perfil do LinkedIn" v-model="profile.linkedin"></v-text-field>
      <v-text-field label="Perfil no Discord" v-model="profile.discord"></v-text-field>
      <v-btn color="primary" @click="submitProfile">Atualizar</v-btn>
      <v-btn color="error" @click="cancelSubmit">Cancelar</v-btn>
    </v-form>
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref, reactive } from 'vue';
import { useAuthStore} from '@/stores/auth.js';

const auth = useAuthStore();

const profile = reactive({
  name: auth.auth.name,
  linkedin: '',
  email: auth.auth.email,
  password: '12345678'
});

const submitProfile = async () => {
  try {
    auth.updateProfile(profile);
  } catch (error) {
    console.log(error);
  }
};

const cancelSubmit = () => {
  profile.name = auth.auth.name;
  profile.email = auth.auth.email;
  profile.city = '';
  profile.state = '';
  profile.stack = '';
  profile.linkedin = '';
  profile.discord = '';
};
</script>
