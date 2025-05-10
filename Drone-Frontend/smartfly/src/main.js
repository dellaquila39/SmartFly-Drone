import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'

// 1. Importar AOS y sus estilos
import AOS from 'aos'
import 'aos/dist/aos.css'

// 2. Configurar AOS globalmente
AOS.init({
  duration: 800,       // Duración de las animaciones
  offset: 120,         // Offset (px) desde el borde inferior
  once: true,          // Animar solo una vez
  easing: 'ease-out'   // Tipo de easing
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')