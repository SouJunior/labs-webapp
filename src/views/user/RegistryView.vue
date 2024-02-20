<template>
    <v-container>
        <v-row justify="center">
            <v-col xl="6" xxl="6">
                <v-sheet class="pa-2">
                    <v-alert 
                         v-if="usersStore.registered"
                         type="success"
                         closable 
                         text="Salvo com sucesso"
                        ></v-alert>
                    <h1>Registro de usuários</h1>
                    <v-form>
                        <v-text-field
                                label="Nome"
                                v-model="applicant.name"
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
                                prepend-icon="mdi-linkedin"
                                label="LinkedIn" v-model="applicant.linkedin"></v-text-field>
                        <v-text-field
                                color="green-accent-2"
                                prepend-icon="mdi-account-key"
                                label="Token único de registro" v-model="applicant.register_token"></v-text-field>
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
  name: '',
  email: '',
  password: '',
  passwordConfirm: '',
  linkedin: '',
  register_token: '',
  terms: false
});

const resetForm = () => {
  applicant.name = '';
  applicant.email = '';
  applicant.password = '';
  applicant.passwordConfirm = '';
  applicant.linkedin = '';
  applicant.register_token = '';
  applicant.terms = false;
};

const usersStore = useUserStore();

const submitApplication = async () => {
  const newApplicant = { ...applicant };
  if (!newApplicant.name || !newApplicant.email || !newApplicant.password || !newApplicant.passwordConfirm || !newApplicant.linkedin || !newApplicant.register_token) {
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
  else {
    try {
      await usersStore.register(newApplicant);
      resetForm();
    } catch (error) {
      console.log(error.message);
    }
  }
};
</script>
