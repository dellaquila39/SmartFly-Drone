<template>
  <div class="home-view">
    <HeroSection />
    <ServiceSection />
  </div>
</template>

<script>
  import HeroSection from '@/components/HeroSection.vue';
  import ServiceSection from '@/components/ServiceSection.vue';

  export default {
    name: 'HomeView',

    components: {
      HeroSection,
      ServiceSection,
    },
  }
</script>

<style scoped>
.home-view {
  scroll-behavior: smooth; /* Para desplazamiento suave */
}
</style>
