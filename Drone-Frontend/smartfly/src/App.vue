<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
    <NavigationBar />
      <v-spacer></v-spacer>

    </v-app-bar>

    <v-main>
      <router-view/>
    </v-main>
    <AppFooter />
  </v-app>
</template>

<script>
import NavigationBar from './components/NavigationBar.vue';
import AppFooter from '@/components/AppFooter.vue'  // Importación actualizada


export default {
  name: 'App',
  components: {
    NavigationBar,
    AppFooter,
  },

  data: () => ({
    //
  }),
};
</script>
