<template>
  <v-container>
      <v-row justify="center">
          <v-col xl="6" xxl="6">
      <v-sheet class="pa-2">
    <h1>Registro de usuários</h1>
    <v-form>
      <v-text-field
              label="Login"
              v-model="applicant.login"
              prepend-icon="mdi-account"
              ></v-text-field>
      <v-text-field
              label="E-mail"
              v-model="applicant.email"
              prepend-icon="mdi-email"
              ></v-text-field>
      <v-text-field
              color="green-accent-2"
              prepend-icon="mdi-lock"
              label="Senha" v-model="applicant.password"></v-text-field>
      <v-text-field
              color="green-accent-2"
              prepend-icon="mdi-lock"
              label="Confirme a senha" v-model="applicant.passwordConfirm"></v-text-field>
      <v-text-field
              color="green-accent-2"
              prepend-icon="mdi-account-key"
              label="Token único de registro" v-model="applicant.token"></v-text-field>
      <v-checkbox
              color="green-accent-2"
              label="Eu concordo com os termos e condições" v-model="applicant.terms"
              ></v-checkbox>
      <v-btn color="green-accent-2" @click="submitApplication">Salvar</v-btn>
    </v-form>
      </v-sheet>
          </v-col>
      </v-row>
  </v-container>
</template>

<script setup>
import { reactive } from 'vue';
import { useUserStore } from '@/stores/user.js'

const applicant = reactive({
  login: '',
  email: '',
  password: '',
  terms: false
});

const resetForm = () => {
  applicant.login = '';
  applicant.email = '';
  applicant.password = '';
  applicant.passwordConfirm = '';
  applicant.token = '';
  applicant.terms = false;
};

const usersStore = useUserStore();

const submitApplication = () => {
  const newApplicant = { ...applicant };
  if (!newApplicant.login || !newApplicant.email || !newApplicant.password || !newApplicant.passwordConfirm || !newApplicant.token) {
    alert('Preencha todos os campos');
    return;
  }
  else if (!newApplicant.terms) {
    alert('Você precisa concordar com os termos e condições');
    return;
  }
  else if (newApplicant.password !== newApplicant.passwordConfirm) {
    alert('As senhas não conferem');
    return;
  }
  else if (newApplicant.token !== 'SJLv1BETA') {
    alert('Token inválido');
    return;
  }
  else {
    usersStore.addUser(newApplicant);
    alert('Usuário cadastrado com sucesso');
    resetForm();
  }
};
</script>
