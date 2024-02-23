<template>
<v-container fluid class="pa-0 d-flex align-center justify-center">
  <div>
    <div class="d-flex div-gap">
      <div>
        <img :src="imgUrl" width="auto" height="100%" alt="Logo SouJunior Labs" class="floating">
      </div>
      <div class="login-form">
          <p>Entrar</p>
          <hr class="mt-1 mb-8">
          <v-form @submit.prevent>
            <v-text-field
              variant="outlined"
              v-model="user.email"
              :rules="rules"
              label="Email"
            />
            <v-text-field
              :append-inner-icon="visible ? 'mdi-eye' : 'mdi-eye-off'"
              :type="visible ? 'text' : 'password'"
              @click:append-inner="visible = !visible"
              density="compact"
              variant="outlined"
              v-model="user.password"
              :rules="rules"
              label="Senha"
            />
            <div class="d-flex align-center justify-space-between">
              <label>
                <input type="checkbox" class="mr-2">
                Lembrar-me
              </label>
              <a href="/">Precisa de ajuda?</a>
            </div>
            <hr class="mb-6 mt-8">
            <v-btn color="primary" type="submit" block @click="submitLogin">Login</v-btn>
            <v-btn block class="mt-2" @click="$router.push('/registry')">Registrar</v-btn>
          </v-form>
      </div>
    </div>
  </div>
</v-container>
</template>

<script setup>

import { reactive, ref } from 'vue'
import imgUrl from '@/assets/logo-green-transparent.png';
import { useAuthStore } from '@/stores/auth'

const authStore = useAuthStore();

const user = reactive({
  email: 'w@w.com',
  password: '12345678',
  
});

const submitLogin = async () => {
    try {
        await authStore.login(user);
    } catch (error) {
        console.log(error);
    }
}

const rules = ref([
    value => {
        if (value) return true;
        return 'Campo obrigatório!';
    },
]);

const visible = ref(false);
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
.div-gap {
  gap: 250px;
}
.login-form {
  width: 450px;
  height: auto;
  padding: 38px;
  border-radius: 12px;
  background-color: #212121;
}

.login-form p {
  font-family: 'Radio Canada', serif !important;
  font-size: 28px;
  font-weight: 600;
  text-align: center;
}

.login-form hr {
  border: 1.46px solid #CBCBCB;
}

.login-form div a {
  color: #62D4A4;
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
</style>