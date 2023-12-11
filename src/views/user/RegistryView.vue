<template>
  <v-container>
      <v-row justify="center">
          <v-col xl="6" xxl="6">
      <v-sheet class="pa-2">
    <h1>Registro de usuários</h1>
    <v-form>
      <!-- Personal Information -->
      <v-text-field 
               color="green-accent-2"
              prepend-icon="mdi-account"
          label="Nome" v-model="applicant.fullName"></v-text-field>
      <v-text-field 
              prepend-icon="mdi-email"
          label="Email" v-model="applicant.email"></v-text-field>
      <v-text-field 
              prepend-icon="mdi-linkedin"
          label="Perfil do LinkedIn " v-model="applicant.linkedin"></v-text-field>
      <v-text-field 
              prepend-icon="mdi-github"
          label="Perfil do GitHub" v-model="applicant.github"></v-text-field>

      <v-select
              prepend-icon="mdi-map-marker"
        label="Seu Estado"
        :items="states"
        item-title="name"
        item-value="initials"
      ></v-select>
      
      <v-textarea label="Bio" v-model="applicant.experience"></v-textarea>
      <v-checkbox
              color="green-accent-2"
              label="Eu concordo com os termos e condições"
              ></v-checkbox>
      <v-btn color="primary" @click="submitApplication">Salvar</v-btn>
    </v-form>
      </v-sheet>
          </v-col>
      </v-row>
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

// genarate a lis of states of brazili, with name and initials
const states = [
  { name: 'Acre', initials: 'AC' },
  { name: 'Alagoas', initials: 'AL' },
  { name: 'Amapá', initials: 'AP' },
  { name: 'Amazonas', initials: 'AM' },
  { name: 'Bahia', initials: 'BA' },
  { name: 'Ceará', initials: 'CE' },
  { name: 'Distrito Federal', initials: 'DF' },
  { name: 'Espírito Santo', initials: 'ES' },
  { name: 'Goiás', initials: 'GO' },
  { name: 'Maranhão', initials: 'MA' },
  { name: 'Mato Grosso', initials: 'MT' },
  { name: 'Mato Grosso do Sul', initials: 'MS' },
  { name: 'Minas Gerais', initials: 'MG' },
  { name: 'Pará', initials: 'PA' },
  { name: 'Paraíba', initials: 'PB' },
  { name: 'Paraná', initials: 'PR' },
  { name: 'Pernambuco', initials: 'PE' },
  { name: 'Piauí', initials: 'PI' },
  { name: 'Rio de Janeiro', initials: 'RJ' },
  { name: 'Rio Grande do Norte', initials: 'RN' },
  { name: 'Rio Grande do Sul', initials: 'RS' },
  { name: 'Rondônia', initials: 'RO' },
  { name: 'Roraima', initials: 'RR' },
  { name: 'Santa Catarina', initials: 'SC' },
  { name: 'São Paulo', initials: 'SP' },
  { name: 'Sergipe', initials: 'SE' },
  { name: 'Tocantins', initials: 'TO' }
];

const submitApplication = () => {
  // Handle the submission of the application form
};
</script>
