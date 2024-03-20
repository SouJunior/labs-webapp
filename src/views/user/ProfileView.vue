<template>
  <v-container>
    <v-row align="center" justify="center">
      <v-col cols="6">
        <h1 class="text-primary">Dados pessoais:</h1>
      </v-col>
    </v-row>

    <v-row align="center" justify="center">
      <v-col cols="6">
        <v-form>
          <v-text-field v-model="profile.name" label="Nome completo *" variant="outlined" disabled>
          </v-text-field>
          <v-text-field v-model="profile.email" label="E-mail *" variant="outlined"> </v-text-field>
          <v-text-field
            v-model="profile.city"
            label="Cidade *"
            variant="outlined"
            :rules="[rules.textOnly]"
          >
          </v-text-field>
          <v-text-field
            v-model="profile.state"
            label="Estado *"
            variant="outlined"
            :rules="[rules.textOnly]"
          >
          </v-text-field>
          <v-text-field v-model="profile.linkedin" label="Perfil do LinkedIn *" variant="outlined">
          </v-text-field>
          <v-text-field v-model="profile.discord" label="Perfil no Discord *" variant="outlined">
          </v-text-field>
          <v-row>
            <v-col>
              <v-btn color="primary" @click="submitProfile">Atualizar</v-btn>
              <v-btn class="ml-3" :to="{ name: 'onboarding' }">Cancelar</v-btn>
            </v-col>
          </v-row>
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { reactive } from 'vue'
import { useAuthStore } from '@/stores/auth.js'

const auth = useAuthStore()

const profile = reactive({
  name: auth.auth.name,
  email: auth.auth.email,
  city: '',
  state: '',
  linkedin: '',
  discord: ''
})

const rules = {
  textOnly: (value) =>
    /^[a-zA-Z\sáàâãéèêíïóôõöúçñÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇÑ]*$/.test(value) || 'Apenas texto é permitido.'
}

const submitProfile = async () => {
  try {
    auth.updateProfile(profile)
  } catch (error) {
    console.log(error)
  }
}
</script>
