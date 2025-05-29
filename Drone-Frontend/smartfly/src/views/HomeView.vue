<template>
  <div class="home-view">
    <HeroSection />
    <ServiceSection />
    <GalleryProject />
  </div>
</template>

<script>
  import HeroSection from '@/components/HeroSection.vue';
  import ServiceSection from '@/components/ServiceSection.vue';
  import GalleryProject from '@/components/GalleryProject.vue';

  export default {
    name: 'HomeView',

    components: {
      HeroSection,
      ServiceSection,
      GalleryProject
    },
  }
</script>

<style scoped>
.home-view {
  scroll-behavior: smooth; /* Para desplazamiento suave */
}
</style>
