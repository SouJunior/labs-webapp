<template>
  <v-container>
    <v-row align="center" justify="center">
      <v-col cols="6" align="center">
        <label class="d-flex align-center justify-center">
          <a class="d-flex align-center logo">
            <v-img height="36" width="36" :src="imgUrl" alt="Logo SouJunior" />
            <h1 class="text-h5 font-weight-bold font-semibold primary-color ml-3 logo-text">
              SouJunior Labs
            </h1>
          </a>
        </label>
      </v-col>
    </v-row>
    <v-row align="center" justify="center">
      <v-col cols="7">
        <v-stepper v-model="step" :items="items" hide-actions>
          <template v-slot:item.1>
            <p class="mt-6">
              Olá você acaba de ser convidado para o painel administrativo da
              <strong color="primary">SouJunior Labs</strong>, para prosseguir será necessário se
              cadastrar.
            </p>
            <v-col align="center" class="mt-6">
              <v-btn color="primary" @click="nextStep">Continuar</v-btn>
              <v-btn class="ml-3" :to="{ name: 'home' }" @click="resetForm">Cancelar</v-btn>
            </v-col>
          </template>
          <template v-slot:item.2>
            <v-form>
              <v-text-field
                class="pt-1"
                label="Token"
                variant="outlined"
                hint="O Token foi  encaminhado através do canal Founders no Discord. Caso precise de ajude, entre em contato conosco através do discord."
                v-model="applicant.register_token"
              >
              </v-text-field>
              <v-text-field
                label="Digite seu nome completo."
                placeholder="Ex: Jonatas de Souza"
                variant="outlined"
                v-model="applicant.name"
              >
              </v-text-field>
              <v-text-field
                label="Digite seu e-mail."
                placeholder="exemplo@exemplo.com"
                variant="outlined"
                v-model="applicant.email"
                :rules="emailRules"
              >
              </v-text-field>
              <v-text-field
                label="Digite sua senha."
                variant="outlined"
                v-model="applicant.password"
                :rules="passwordRules"
              >
              </v-text-field>
              <v-text-field
                label="Confirme sua senha."
                variant="outlined"
                v-model="applicant.confirmPassword"
                :rules="passwordRules"
              >
              </v-text-field>
              <v-checkbox
                label="Eu concordo com os termos e condições."
                v-model="applicant.terms"
              ></v-checkbox>
              <v-row>
                <v-col align="center">
                  <v-btn @click="submitApplicant" color="primary">Cadastrar-se</v-btn>
                  <v-btn class="ml-3" :to="{ name: 'home' }" @click="resetForm">Cancelar</v-btn>
                </v-col>
              </v-row>
            </v-form>
          </template>
          <template v-slot:item.3>
            <p class="mt-6">
              Meus parabéns, conta criada com sucesso, clique em continuar para ser redirecionado
              para a pagina de login.
            </p>
            <v-col align="center" class="mt-6">
              <v-btn color="primary" @click="redirectToLogin">Continuar</v-btn>
            </v-col>
          </template>
        </v-stepper>
      </v-col>
      <v-col cols="7" class="mt-6">
        <v-card v-if="step === 1" class="pa-6" outlined color="primary"
          >No momento, o cadastro esta liberado apenas para os founders dos projetos já ativos. Mas
          em breve esperamos ter todos por aqui. Se você é founder, confira o register_token de
          acesso no canal do Discord exclusivo para os founders.</v-card
        >
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { useUserStore } from '@/stores/user.js'
import imgUrl from '@/assets/logo-green-transparent.png'

const userStore = useUserStore()

const step = ref(1)
const items = [
  { step: 1, title: '' },
  { step: 2, title: '' },
  { step: 3, title: '' }
]
const applicant = reactive({
  register_token: '',
  name: '',
  email: '',
  password: '',
  confirmPassword: '',
  terms: false,
  linkedin: 'linkedin.com/in/'
})

const nextStep = () => {
  step.value++
}

const emailRules = [
  (v) => !!v || 'E-mail é obrigatório',
  (v) => /.+@.+\..+/.test(v) || 'E-mail deve ser válido'
]

const passwordRules = [
  (v) => !!v || 'Senha é obrigatória',
  (v) => v.length >= 8 || 'Senha deve ter no mínimo 8 caracteres'
]

const resetForm = () => {
  applicant.register_token = ''
  applicant.name = ''
  applicant.email = ''
  applicant.password = ''
  applicant.confirmPassword = ''
  applicant.terms = false
  step.value = 1
}

const submitApplicant = async () => {
  const newApplicant = { ...applicant }
  if (
    !newApplicant.register_token ||
    !newApplicant.name ||
    !newApplicant.email ||
    !newApplicant.password ||
    !newApplicant.confirmPassword
  ) {
    return alert('Preencha todos os campos')
  } else if (newApplicant.password !== newApplicant.confirmPassword) {
    return alert('As senhas não conferem')
  } else if (!newApplicant.terms) {
    return alert('Você precisa concordar com os termos e condições!')
  } else if (userStore.registered === true) {
    return alert('Usuário cadastrado!')
  } else {
    try {
      await userStore.register(newApplicant)
      if (userStore.registered === true) {
        nextStep()
      }
    } catch (error) {
      console.error(error.message)
    }
  }
}
</script>

<style scoped>
.primary-color {
  color: #06d7a0;
}

.logo {
  cursor: pointer;
  transition: ease-in-out 0.2s;

  &:hover {
    filter: brightness(1.25);
    transition: ease-in-out 0.2s;
  }
}

.logo-text {
  font-family: 'Radio Canada', serif !important;
}

p {
  font-size: 18px;
}
</style>
