<template>
  <v-footer class="app-footer">
    <v-container>
      <v-row>
        <v-col cols="12" md="4" class="footer-section">
          <div class="logo-container">
            <img src="@/assets/AppFooter/logo-temporal.webp" alt="SmartFly Pro" class="footer-logo">
            <span class="logo-text">SMARTFLY-PRO</span>
          </div>
          <p class="footer-description">
            Soluciones aéreas de precisión para la industria moderna
          </p>
        </v-col>
        
        <v-col cols="12" md="4" class="footer-section">
          <h3 class="footer-heading">Enlaces Rápidos</h3>
          <ul class="footer-links">
            <li><router-link to="/">Inicio</router-link></li>
            <li><router-link to="/servicios">Servicios</router-link></li>
            <li><router-link to="/proyectos">Proyectos</router-link></li>
            <li><router-link to="/contacto">Contacto</router-link></li>
          </ul>
        </v-col>
        
        <v-col cols="12" md="4" class="footer-section">
          <h3 class="footer-heading">Contacto</h3>
          <ul class="contact-info">
            <li><v-icon small>mdi-email</v-icon> contacto@smartflypro.com</li>
            <li><v-icon small>mdi-phone</v-icon> +54 9 11 6888-5969</li>
            <li><v-icon small>mdi-map-marker</v-icon> Av. Corrientes 1234, CABA</li>
          </ul>
        </v-col>
      </v-row>
      
      <v-divider class="footer-divider"></v-divider>
      
      <div class="copyright">
        &copy; {{ new Date().getFullYear() }} SmartFly Pro. Todos los derechos reservados.
      </div>
    </v-container>
  </v-footer>
</template>

<script>

export default {
	name: 'AppFooter',
	data() {
		return {
			// Aquí puedes agregar datos reactivos si es necesario
		};
	},
}
</script>

<style scoped>
.app-footer {
  background: linear-gradient(180deg, #07152a 0%, #050e1d 100%);
  color: rgba(255, 255, 255, 0.8);
  padding: 4rem 0 2rem;
  border-top: 1px solid rgba(0, 247, 255, 0.1);
}

.footer-section {
  margin-bottom: 2rem;
}

.logo-container {
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
}

.footer-logo {
  width: 40px;
  height: 40px;
  margin-right: 10px;
  filter: drop-shadow(0 0 5px rgba(0, 247, 255, 0.5));
}

.logo-text {
  font-family: 'Orbitron', sans-serif;
  color: #00f7ff;
  font-size: 1.2rem;
  letter-spacing: 1px;
}

.footer-description {
  max-width: 300px;
  line-height: 1.6;
}

.footer-heading {
  color: #00f7ff;
  font-family: 'Montserrat', sans-serif;
  font-size: 1.2rem;
  margin-bottom: 1.5rem;
  position: relative;
  padding-bottom: 0.5rem;
}

.footer-heading::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 50px;
  height: 2px;
  background: #00f7ff;
}

.footer-links {
  list-style: none;
  padding: 0;
}

.footer-links li {
  margin-bottom: 0.8rem;
}

.footer-links a {
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  transition: all 0.3s ease;
  display: inline-block;
}

.footer-links a:hover {
  color: #00f7ff;
  transform: translateX(5px);
}

.contact-info {
  list-style: none;
  padding: 0;
}

.contact-info li {
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
}

.contact-info .v-icon {
  margin-right: 10px;
  color: #00f7ff;
}

.footer-divider {
  border-color: rgba(0, 247, 255, 0.1);
  margin: 2rem 0;
}

.copyright {
  text-align: center;
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.6);
  padding-top: 1rem;
}

@media (max-width: 768px) {
  .footer-section {
    text-align: center;
  }
  
  .footer-heading::after {
    left: 50%;
    transform: translateX(-50%);
  }
  
  .logo-container, .contact-info li {
    justify-content: center;
  }
  
  .footer-description {
    margin: 0 auto;
  }
}
</style>