<template>
  <v-container>
      <h1>Atualizar Squad</h1>
    <v-form>
      <v-text-field label="Pesquisar"></v-text-field>
      <v-text-field label="Especialidade" v-model="profile.lastName"></v-text-field>
      <v-btn color="primary" class="me-4" @click="submitProfile">Submit</v-btn>
      <v-btn color="secondary">remover do projeto</v-btn>
    </v-form>
  </v-container>
</template>

<script setup>
import { ref, reactive } from 'vue';

const profile = reactive({
  firstName: '',
  lastName: '',
  email: '',
  birthDate: '',
  gender: ''
});

const genders = ref(['Male', 'Female', 'Other']);
const menu = ref(false);

const saveDate = () => {
  menu.value = false;
};

const submitProfile = () => {
  // Submit profile data
};
</script>
