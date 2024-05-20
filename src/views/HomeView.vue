<template>
  <v-container class="home-page">
    <HeroSection />
    <ServicesSection />
    <AboutSection />
    <HowToUseSection />
    <OccupationSection />
    <SquadSection />
    <ContactSection />
    <FooterSection />
  </v-container>
</template>

<script setup>
import HeroSection from '@/components/HeroSection.vue'
import ServicesSection from '@/components/ServicesSection.vue'
import AboutSection from '@/components/AboutSection.vue'
import HowToUseSection from '@/components/HowToUseSection.vue'
import OccupationSection from '@/components/OccupationSection.vue'
import SquadSection from '@/components/SquadSection.vue'
import ContactSection from '@/components/ContactSection.vue'
import FooterSection from '@/components/FooterSection.vue'
</script>

<style scoped>
.home-page {
  display: flex;
  flex-direction: column;
  padding: 0;
  margin-top: 50px;
  gap: 75px;

  @media screen and (max-width: 768px) {
    gap: 20px;
  }
}
</style>