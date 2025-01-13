<template>
  <v-container fluid class="pa-0 d-flex align-center justify-center">
    <v-col class="d-flex flex-grow-0 v-col-gap">
      <img
        :src="imgUrl"
        width="auto"
        height="100%"
        alt="Logo SouJunior Labs"
        class="floating d-none d-lg-block"
      />
      <v-card class="login-form secondary">
        <p>Entrar</p>
        <hr class="mt-1 mb-8" />
        <v-form @submit.prevent>
          <v-text-field
            variant="outlined"
            v-model="user.email"
            :rules="emailRules"
            label="Email"
            class="mb-2"
          />
          <v-text-field
            :append-inner-icon="visible ? 'mdi-eye' : 'mdi-eye-off'"
            :type="visible ? 'text' : 'password'"
            @click:append-inner="visible = !visible"
            variant="outlined"
            v-model="user.password"
            :rules="passwordRules"
            label="Senha"
          />
          <hr class="mb-6 mt-3" />
          <v-btn color="primary" type="submit" block @click="submitLogin">Login</v-btn>
          <v-btn block class="mt-2 cancelButton" :to="{ name: 'registry' }">Registrar</v-btn>
        </v-form>
      </v-card>
    </v-col>
  </v-container>
</template>

<script setup>
import { reactive, ref } from 'vue'
import imgUrl from '@/assets/logo-green-transparent.png'
import { useAuthStore } from '@/stores/auth'

const authStore = useAuthStore()

const user = reactive({
  email: '',
  password: ''
})

const submitLogin = async () => {
  try {
    await authStore.login(user)
  } catch (error) {
    console.log(error)
  }
}

const emailRules = [
  (v) => !!v || 'E-mail é obrigatório',
  (v) => /.+@.+\..+/.test(v) || 'E-mail deve ser válido'
]

const passwordRules = [
  (v) => !!v || 'Senha é obrigatória',
  (v) => v.length >= 8 || 'Senha deve ter no mínimo 8 caracteres'
]

const visible = ref(false)
</script>

<style scoped>
.floating {
  animation: float 6s ease-in-out infinite;
  filter: drop-shadow(0 0 15px #06d7a033);
}

@keyframes float {
  0%,
  100% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-20px);
  }
}

.v-col-gap {
  gap: 200px;
}

.login-form {
  width: 450px;
  padding: 40px;
  border-radius: 12px;
  box-shadow: 0px 0px 20px 0px #00000033;
}

.login-form p {
  font-family: 'Radio Canada', serif !important;
  font-size: 28px;
  font-weight: 600;
  text-align: center;
}

.login-form hr {
  border: 1.46px solid #cbcbcb;
}

.login-form div a {
  color: #62d4a4;
  text-decoration: none;
  font-size: 16px;
  font-family: 'Radio Canada', serif !important;
  font-weight: 600;
}

.login-form div label {
  font-size: 14px;
  font-family: 'Sora', sans-serif !important;
  font-weight: 400;
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
