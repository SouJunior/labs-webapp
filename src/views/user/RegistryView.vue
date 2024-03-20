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
          <template #item.1>
            <p class="mt-6">
              Olá você acaba de ser convidado para o painel administrativo da
              <strong color="primary">SouJunior Labs</strong>, para prosseguir será necessário se
              cadastrar.
            </p>
            <v-col align="center" class="mt-6">
              <v-btn color="primary" @click="nextStep">Continuar</v-btn>
              <v-btn class="ml-3 cancelButton" :to="{ name: 'home' }" @click="resetForm"
                >Cancelar</v-btn
              >
            </v-col>
          </template>
          <template #item.2>
            <v-form>
              <v-text-field
                v-model="applicant.register_token"
                class="pt-1"
                label="Token"
                variant="outlined"
                hint="O Token foi  encaminhado através do canal Founders no Discord. Caso precise de ajude, entre em contato conosco através do discord."
              >
              </v-text-field>
              <v-text-field
                v-model="applicant.name"
                label="Digite seu nome completo."
                placeholder="Ex: Jonatas de Souza"
                variant="outlined"
              >
              </v-text-field>
              <v-text-field
                v-model="applicant.email"
                label="Digite seu e-mail."
                placeholder="exemplo@exemplo.com"
                variant="outlined"
                :rules="emailRules"
              >
              </v-text-field>
              <v-text-field
                v-model="applicant.password"
                label="Digite sua senha."
                variant="outlined"
                :rules="passwordRules"
              >
              </v-text-field>
              <v-text-field
                v-model="applicant.confirmPassword"
                label="Confirme sua senha."
                variant="outlined"
                :rules="passwordRules"
              >
              </v-text-field>
              <v-checkbox
                v-model="applicant.terms"
                label="Eu concordo com os termos e condições."
                @click="dialog = true"
              ></v-checkbox>
              <v-row>
                <v-col align="center">
                  <v-btn color="primary" @click="submitApplicant">Cadastrar-se</v-btn>
                  <v-btn class="ml-3 cancelButton" @click="cancelForm">Cancelar</v-btn>
                </v-col>
              </v-row>
            </v-form>
          </template>
          <template #item.3>
            <p class="mt-6">
              Meus parabéns, conta criada com sucesso, clique em continuar para ser redirecionado
              para a pagina de login.
            </p>
            <v-col align="center" class="mt-6">
              <v-btn color="primary" :to="{ name: 'login' }">Continuar</v-btn>
            </v-col>
          </template>
        </v-stepper>
      </v-col>
      <v-col cols="7" class="mt-6">
        <v-card v-if="step === 1" class="pa-6" outlined color="#325F4B"
          >No momento, o cadastro esta liberado apenas para os founders dos projetos já ativos. Mas
          em breve esperamos ter todos por aqui. Se você é founder, confira o token de acesso no
          canal do Discord exclusivo para os founders.</v-card
        >
      </v-col>
    </v-row>
    <v-dialog v-model="dialog" max-width="600">
      <v-card class="pa-3">
        <v-card-title>Termos e Condições</v-card-title>
        <v-card-text>
          <p>
            Todas as participações no SouJunior Labs são VOLUNTÁRIAS, não remuneradas e sem qualquer
            vínculo empregatício. As participações visam, unicamente, servir de experiência ao
            voluntário que também contribuirá com o crescimento do projeto. A SouJunior Labs não
            garante vaga de trabalho à pessoa voluntária, embora exista a possibilidade de que
            receba convites para oportunidades em empresas parceiras, externas e/ou recrutadores.
          </p>
        </v-card-text>
        <v-card-actions class="d-flex justify-end">
          <v-btn color="primary" @click="acceptTerms">Aceitar</v-btn>
          <v-btn color="error" @click="rejectTerms">Cancelar</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { useUserStore } from '@/stores/user.js'
import imgUrl from '@/assets/logo-green-transparent.png'
import { useRouter } from 'vue-router'

const $router = useRouter()

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

const cancelForm = () => {
  if (confirm('Você deseja mesmo cancelar esta ação?')) {
    resetForm()
    $router.push({ name: 'home' })
  }
}

const dialog = ref(false)

const acceptTerms = () => {
  applicant.terms = true
  dialog.value = false
}

const rejectTerms = () => {
  applicant.terms = false
  dialog.value = false
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

.v-text-field {
  padding-bottom: 10px;
}

.v-stepper {
  box-shadow: none;
}

.v-stepper :deep(.v-stepper-header) {
  box-shadow: none;
}
.v-stepper :deep(.v-stepper-item__avatar) {
  margin-inline-end: 0;
}

.cancelButton {
  border: 1px solid #62d4a4;
  color: #325f4b;
}

.cancelButton:hover {
  background-color: #325f4b;
  color: #fff;
}
</style>
