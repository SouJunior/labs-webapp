<template>
  <v-container>
    <v-form>
      <!-- Personal Information -->
      <v-text-field label="Full Name" v-model="applicant.fullName"></v-text-field>
      <v-text-field label="Email Address" v-model="applicant.email"></v-text-field>
      <v-text-field label="LinkedIn Profile" v-model="applicant.linkedin"></v-text-field>
      <v-text-field label="GitHub Profile" v-model="applicant.github"></v-text-field>

      <!-- Programming Skills -->
      <v-select
        label="Primary Programming Language"
        :items="programmingLanguages"
        v-model="applicant.primaryLanguage"
      ></v-select>
      <v-select
        label="Secondary Programming Languages"
        :items="programmingLanguages"
        v-model="applicant.secondaryLanguages"
        multiple
      ></v-select>
      <v-textarea label="Briefly describe your programming experience" v-model="applicant.experience"></v-textarea>

      <!-- Resume Upload -->
      <v-file-input label="Upload Resume" v-model="applicant.resume" accept=".pdf,.doc,.docx"></v-file-input>

      <!-- Submit Button -->
      <v-btn color="primary" @click="submitApplication">Submit Application</v-btn>
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
