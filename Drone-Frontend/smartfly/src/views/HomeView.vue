<template>
  <div class="home-view">
    <HeroSection />
    <ServiceSection />
    <BasicServices />
    <GalleryProject />
  </div>
</template>

<script>
  import HeroSection from '@/components/HeroSection.vue';
  import ServiceSection from '@/components/ServiceSection.vue';
  import BasicServices from '@/components/BasicServices.vue';
  import GalleryProject from '@/components/GalleryProject.vue';

  export default {
    name: 'HomeView',

    components: {
      HeroSection,
      ServiceSection,
      BasicServices,
      GalleryProject,
    },
  }
</script>

<style scoped>
.home-view {
  scroll-behavior: smooth; /* Para desplazamiento suave */
}
</style>
