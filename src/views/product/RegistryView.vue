<template>
  <v-container>
      <h1>Criação de produto</h1>
    <v-form>
      <!-- Personal Information -->
      <v-text-field label="Qual o nome do projeto?" v-model="applicant.fullName"></v-text-field>
      <v-text-field label="Qual o escopo do projeto?" v-model="applicant.email"></v-text-field>
      <v-btn color="primary" @click="submitApplication">Salvar</v-btn>
    </v-form>
  </v-container>
</template>

<script setup>
import { reactive } from 'vue';

const applicant = reactive({
  fullName: '',
  email: '',
  linkedin: '',
  github: '',
  primaryLanguage: '',
  secondaryLanguages: [],
  experience: '',
  resume: null
});

const programmingLanguages = [
  'JavaScript', 'Python', 'Java', 'C#', 'C++', 'PHP', 'Ruby', 'Go', 'Swift', 'Kotlin'
];

const submitApplication = () => {
  // Handle the submission of the application form
};
</script>
