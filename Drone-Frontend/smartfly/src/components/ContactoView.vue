<template>
  <v-container class="contact-view white" id="contact">
    <!-- Sección superior: Redes sociales como CTA principal -->
    <v-row justify="center" class="social-section py-12">
      <v-col cols="12" class="text-center mb-8">
        <h2 class="section-title neon-text">Conéctate con nosotros</h2>
        <v-divider class="divider-custom mx-auto my-6"></v-divider>
        <p class="section-subtitle">Descubre nuestro trabajo y novedades en redes</p>
      </v-col>

      <!-- Tarjetas de redes sociales premium -->
      <v-col cols="12" md="10" class="social-cards-container">
        <v-row justify="center">
          <!-- WhatsApp -->
          <v-col cols="12" sm="6" md="3" class="text-center">
            <v-hover v-slot="{ hover }">
              <v-card 
                class="social-card whatsapp-card"
                @click="openWhatsApp"
                :elevation="hover ? 24 : 12"
                :class="{ 'on-hover': hover }"
              >
                <div class="card-gradient" :style="{ opacity: hover ? 1 : 0.2 }"></div>
                <div class="card-content">
                  <v-icon x-large :color="hover ? 'white' : '#25D366'" class="social-icon pulse-icon">mdi-whatsapp</v-icon>
                  <v-card-title class="social-card-title">WhatsApp</v-card-title>
                  <v-card-subtitle class="social-card-subtitle">Contacto directo</v-card-subtitle>
                  <div class="social-card-hover">
                    <span>Envíanos un mensaje</span>
                    <v-icon small :color="hover ? 'white' : '#25D366'">mdi-arrow-right</v-icon>
                  </div>
                </div>
                <div class="neon-border"></div>
              </v-card>
            </v-hover>
          </v-col>

          <!-- Instagram -->
          <v-col cols="12" sm="6" md="3" class="text-center">
            <v-hover v-slot="{ hover }">
              <v-card 
                class="social-card instagram-card"
                @click="openInstagram"
                :elevation="hover ? 24 : 12"
                :class="{ 'on-hover': hover }"
              >
                <div class="card-gradient" :style="{ opacity: hover ? 1 : 0.2 }"></div>
                <div class="card-content">
                  <v-icon x-large :color="hover ? 'white' : '#E1306C'" class="social-icon pulse-icon">mdi-instagram</v-icon>
                  <v-card-title class="social-card-title">Instagram</v-card-title>
                  <v-card-subtitle class="social-card-subtitle">Nuestro portfolio</v-card-subtitle>
                  <div class="social-card-hover">
                    <span>Ver nuestro trabajo</span>
                    <v-icon small :color="hover ? 'white' : '#E1306C'">mdi-arrow-right</v-icon>
                  </div>
                </div>
                <div class="neon-border"></div>
              </v-card>
            </v-hover>
          </v-col>

          <!-- Facebook -->
          <v-col cols="12" sm="6" md="3" class="text-center">
            <v-hover v-slot="{ hover }">
              <v-card 
                class="social-card facebook-card"
                @click="openFacebook"
                :elevation="hover ? 24 : 12"
                :class="{ 'on-hover': hover }"
              >
                <div class="card-gradient" :style="{ opacity: hover ? 1 : 0.2 }"></div>
                <div class="card-content">
                  <v-icon x-large :color="hover ? 'white' : '#1877F2'" class="social-icon pulse-icon">mdi-facebook</v-icon>
                  <v-card-title class="social-card-title">Facebook</v-card-title>
                  <v-card-subtitle class="social-card-subtitle">Últimas noticias</v-card-subtitle>
                  <div class="social-card-hover">
                    <span>Visítanos</span>
                    <v-icon small :color="hover ? 'white' : '#1877F2'">mdi-arrow-right</v-icon>
                  </div>
                </div>
                <div class="neon-border"></div>
              </v-card>
            </v-hover>
          </v-col>

          <!-- YouTube -->
          <v-col cols="12" sm="6" md="3" class="text-center">
            <v-hover v-slot="{ hover }">
              <v-card 
                class="social-card youtube-card"
                @click="openYoutube"
                :elevation="hover ? 24 : 12"
                :class="{ 'on-hover': hover }"
              >
                <div class="card-gradient" :style="{ opacity: hover ? 1 : 0.2 }"></div>
                <div class="card-content">
                  <v-icon x-large :color="hover ? 'white' : '#FF0000'" class="social-icon pulse-icon">mdi-youtube</v-icon>
                  <v-card-title class="social-card-title">YouTube</v-card-title>
                  <v-card-subtitle class="social-card-subtitle">Nuestros videos</v-card-subtitle>
                  <div class="social-card-hover">
                    <span>Ver contenido</span>
                    <v-icon small :color="hover ? 'white' : '#FF0000'">mdi-arrow-right</v-icon>
                  </div>
                </div>
                <div class="neon-border"></div>
              </v-card>
            </v-hover>
          </v-col>
        </v-row>
      </v-col>
    </v-row>

    <!-- Sección del formulario -->
    <v-row justify="center" class="form-section py-12">
      <v-col cols="12" md="8" lg="6">
        <v-card flat class="form-card">
          <v-card-title class="form-title text-center">
            <h2 class="section-title" style="font-size: 2.4rem; line-height: 1.2;">Envíanos un mensaje</h2>
            <v-divider class="divider-custom mx-auto my-6"></v-divider>
          </v-card-title>

          <v-card-text>
            <v-form ref="contactForm" v-model="valid" @submit.prevent="sendToWhatsApp">
              <!-- Campo Nombre -->
              <v-text-field
                v-model="name"
                :rules="nameRules"
                label="Nombre completo"
                outlined
                required
                prepend-inner-icon="mdi-account-outline"
                color="primary"
                class="mb-6 input-field"
              ></v-text-field>

              <!-- Campo Email -->
              <v-text-field
                v-model="email"
                :rules="emailRules"
                label="Correo electrónico"
                outlined
                required
                prepend-inner-icon="mdi-email-outline"
                color="primary"
                class="mb-6 input-field"
              ></v-text-field>

              <!-- Campo Teléfono -->
              <v-text-field
                v-model="phone"
                :rules="phoneRules"
                label="Teléfono"
                outlined
                required
                prepend-inner-icon="mdi-phone-outline"
                color="primary"
                class="mb-6 input-field"
              ></v-text-field>

              <!-- Campo Mensaje -->
              <v-textarea
                v-model="message"
                :rules="messageRules"
                label="Mensaje"
                outlined
                required
                rows="4"
                prepend-inner-icon="mdi-message-text-outline"
                color="primary"
                class="mb-8 input-field"
              ></v-textarea>

              <!-- Botón de enviar -->
              <v-btn
                block
                x-large
                color="primary"
                dark
                type="submit"
                :loading="loading"
                class="submit-btn"
              >
                <v-icon left>mdi-send</v-icon>
                Enviar por WhatsApp
              </v-btn>
            </v-form>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <!-- Carrusel de clientes -->
    <v-row justify="center" class="clients-section py-12">
      <v-col cols="12" class="text-center">
        <h2 class="section-title neon-text">Nuestros clientes</h2>
        <v-divider class="divider-custom mx-auto my-6"></v-divider>
        <p class="section-subtitle">Empresas que confiaron en nuestro trabajo</p>
      </v-col>

      <v-col cols="12" class="px-0">
        <v-carousel
          cycle
          height="200"
          hide-delimiters
          :show-arrows-on-hover="true"
          class="clients-carousel"
        >
          <v-carousel-item
            v-for="(clientGroup, i) in chunkedClients"
            :key="i"
          >
            <v-row align="center" justify="center" class="fill-height">
              <v-col
                v-for="(client, j) in clientGroup"
                :key="j"
                cols="6"
                sm="4"
                md="3"
                lg="2"
                class="text-center"
              >
                <v-hover v-slot="{ hover }">
                  <div class="client-card" :class="{ 'hover': hover }">
                    <v-img
                      :src="client.logo"
                      :alt="client.name"
                      contain
                      height="100"
                      class="client-logo"
                    ></v-img>
                    <div class="client-name">{{ client.name }}</div>
                  </div>
                </v-hover>
              </v-col>
            </v-row>
          </v-carousel-item>
        </v-carousel>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "ContactView",
  data() {
    return {
      valid: true,
      loading: false,
      name: "",
      email: "",
      phone: "",
      message: "",
      
      // Lista de clientes (ejemplo)
      clients: [
        { name: "Hotel Lux", logo: require("@/assets/Clientes/cliente.png") },
        { name: "Empresa XYZ", logo: require("@/assets/Clientes/cliente.png") },
        { name: "Comercio ABC", logo: require("@/assets/Clientes/cliente.png") },
        { name: "Restaurante Deluxe", logo: require("@/assets/Clientes/cliente.png") },
        { name: "Constructora 2023", logo: require("@/assets/Clientes/cliente.png") },
        { name: "Municipalidad", logo: require("@/assets/Clientes/cliente.png") },
        { name: "Cadena Hoteles", logo: require("@/assets/Clientes/cliente.png") },
        { name: "Desarrolladora Inmobiliaria", logo: require("@/assets/Clientes/cliente.png") }
      ],
      
      nameRules: [
        v => !!v || 'El nombre es requerido',
        v => (v && v.length >= 3) || 'Mínimo 3 caracteres'
      ],
      emailRules: [
        v => !!v || 'El email es requerido',
        v => /.+@.+\..+/.test(v) || 'Email debe ser válido'
      ],
      phoneRules: [
        v => !!v || 'El teléfono es requerido',
        v => (v && v.length >= 8) || 'Teléfono debe ser válido'
      ],
      messageRules: [
        v => !!v || 'El mensaje es requerido',
        v => (v && v.length >= 10) || 'Mínimo 10 caracteres'
      ]
    }
  },
  computed: {
    // Divide los clientes en grupos para el carrusel
    chunkedClients() {
      const chunkSize = 6;
      const chunks = [];
      for (let i = 0; i < this.clients.length; i += chunkSize) {
        chunks.push(this.clients.slice(i, i + chunkSize));
      }
      return chunks;
    }
  },
  methods: {
    sendToWhatsApp() {
      if (this.$refs.contactForm.validate()) {
        this.loading = true;
        
        const whatsappMessage = 
          `*Nuevo mensaje desde el sitio web*%0A%0A` +
          `*Nombre:* ${this.name}%0A` +
          `*Email:* ${this.email}%0A` +
          `*Teléfono:* ${this.phone}%0A` +
          `*Mensaje:* ${this.message}`;
        
        const phoneNumber = '+5491168885969';
        window.open(`https://wa.me/${phoneNumber}?text=${whatsappMessage}`, '_blank');
        
        this.loading = false;
        this.$refs.contactForm.reset();
      }
    },
    
    openWhatsApp() {
      window.open('https://wa.me/+5491168885969', '_blank');
    },
    openInstagram() {
      window.open('https://www.instagram.com/smartflyfpv?igsh=Z2swNjlhZ280b2Vsn', '_blank');
    },
    openFacebook() {
      window.open('https://facebook.com/tufacebook', '_blank');
    },
    openYoutube() {
      window.open('https://youtube.com/tuyoutube', '_blank');
    }
  }
}
</script>

<style scoped>
/* Estilos generales */
.contact-view {
  padding: 0;
}

/* Títulos con efecto neón mejorado */
.section-title {
  font-family: 'Montserrat', sans-serif;
  font-weight: 800;
  color: #333;
  font-size: 2.8rem;
  margin-bottom: 24px;
  letter-spacing: 0.5px;
  position: relative;
  text-transform: uppercase;
  line-height: 1.2;
}

.neon-text {
  position: relative;
  display: inline-block;
}

.neon-text::after {
  content: '';
  position: absolute;
  bottom: -15px;
  left: 10%;
  width: 80%;
  height: 4px;
  background: linear-gradient(90deg, transparent, #00f7ff, transparent);
  box-shadow: 0 0 20px rgba(0, 247, 255, 0.8);
  border-radius: 100%;
}

.section-subtitle {
  color: #666;
  font-size: 1.3rem;
  font-weight: 500;
  margin-top: 30px;
}

.divider-custom {
  width: 120px;
  height: 4px;
  background: linear-gradient(90deg, #00f7ff, #0066cc);
  border: none;
  border-radius: 10px;
  margin-top: 20px;
}

/* Sección de redes sociales */
.social-section {
  background: linear-gradient(to bottom, #ffffff, #f0f9ff);
  border-bottom: 1px solid #e0f0ff;
}

.social-cards-container {
  max-width: 1200px;
}

/* Tarjetas de redes sociales premium */
.social-card {
  border-radius: 20px !important;
  transition: all 0.5s cubic-bezier(0.165, 0.84, 0.44, 1);
  overflow: visible !important;
  position: relative;
  cursor: pointer;
  height: 100%;
  min-height: 280px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 30px;
  transform: translateY(0);
  border: none !important;
  background: white !important;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1) !important;
}

.social-card.on-hover {
  transform: translateY(-15px);
  z-index: 10;
}

.card-gradient {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 20px;
  transition: opacity 0.5s ease;
  z-index: 1;
}

.whatsapp-card .card-gradient {
  background: linear-gradient(135deg, #25D366, #128C7E);
}

.instagram-card .card-gradient {
  background: linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888);
}

.facebook-card .card-gradient {
  background: linear-gradient(135deg, #1877F2, #0D5ABD);
}

.youtube-card .card-gradient {
  background: linear-gradient(135deg, #FF0000, #CC0000);
}

.card-content {
  position: relative;
  z-index: 2;
  width: 100%;
}

.social-icon {
  margin-bottom: 25px;
  transition: all 0.4s ease;
  filter: drop-shadow(0 2px 4px rgba(0,0,0,0.1));
}

/* Efecto de pulso para los íconos */
.pulse-icon {
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0% { transform: scale(1); }
  50% { transform: scale(1.1); }
  100% { transform: scale(1); }
}

.social-card:hover .social-icon {
  animation: none;
  transform: scale(1.2);
}

.social-card-title {
  font-weight: 700;
  font-size: 1.8rem !important;
  color: #333 !important;
  width: 100%;
  justify-content: center;
  padding: 0 !important;
  margin-bottom: 10px;
  letter-spacing: 0.5px;
  text-shadow: 0 1px 2px rgba(0,0,0,0.1);
  transition: color 0.4s ease;
}

.social-card.on-hover .social-card-title {
  color: white !important;
  text-shadow: 0 2px 4px rgba(0,0,0,0.3);
}

.social-card-subtitle {
  color: #666 !important;
  font-size: 1.1rem !important;
  padding: 0 !important;
  transition: color 0.4s ease;
  font-weight: 500;
  margin-top: -5px; /* Reduce espacio entre título y subtítulo */
}

.social-card.on-hover .social-card-subtitle {
  color: rgba(255,255,255,0.9) !important;
}

.social-card-hover {
  position: absolute;
  bottom: -50px;
  left: 0;
  width: 100%;
  background: rgba(0, 0, 0, 0.85);
  color: white;
  padding: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  z-index: 3;
  font-weight: 600;
  letter-spacing: 0.5px;
  border-radius: 0 0 20px 20px;
  opacity: 0;
}

.social-card.on-hover .social-card-hover {
  bottom: 0;
  opacity: 1;
}

.neon-border {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 20px;
  box-shadow: 0 0 15px rgba(0, 247, 255, 0.5);
  opacity: 0;
  transition: opacity 0.4s ease;
}

.social-card.on-hover .neon-border {
  opacity: 1;
}

/* Formulario */
.form-section {
  background: linear-gradient(to top, #ffffff, #f5fbff);
}

.form-card {
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.1) !important;
  border: 1px solid #e0f0ff;
  background: white !important;
  position: relative;
}

.form-card::before {
  content: '';
  position: absolute;
  top: -2px;
  left: -2px;
  right: -2px;
  bottom: -2px;
  background: linear-gradient(45deg, #00f7ff, #0066cc, #00f7ff);
  z-index: -1;
  border-radius: 22px;
  animation: gradientBorder 3s ease infinite;
  background-size: 400% 400%;
}

.form-title {
  display: flex;
  flex-direction: column;
  padding: 40px 24px 30px;
}

/* Campos del formulario futuristas */
.input-field :deep(.v-input__slot) {
  border-radius: 12px !important;
  transition: all 0.4s ease;
  background: white !important;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05) !important;
  overflow: hidden;
  border: 2px solid #e0e0e0 !important;
}

.input-field :deep(.v-input__slot:hover) {
  box-shadow: 0 0 0 3px rgba(0, 247, 255, 0.3) !important;
  border-color: #00f7ff !important;
}

.input-field :deep(.v-input__slot fieldset) {
  border: none !important;
}

.input-field :deep(.v-input--is-focused .v-input__slot) {
  box-shadow: 0 0 0 3px rgba(0, 247, 255, 0.5), 0 5px 20px rgba(0, 247, 255, 0.2) !important;
  border: 2px solid #00f7ff !important;
  transform: translateY(-2px);
}

.input-field :deep(.v-label) {
  color: #666 !important;
  font-weight: 600;
  letter-spacing: 0.3px;
  font-size: 1.05rem !important;
}

.input-field :deep(.v-icon) {
  color: #666 !important;
}

/* Botón de enviar */
.submit-btn {
  background: linear-gradient(135deg, #0066cc, #00c6ff) !important;
  font-weight: 700;
  letter-spacing: 1px;
  border-radius: 12px;
  transition: all 0.4s ease;
  box-shadow: 0 8px 25px rgba(0, 198, 255, 0.5) !important;
  height: 60px !important;
  font-size: 1.2rem !important;
  position: relative;
  overflow: hidden;
  text-transform: uppercase;
}

.submit-btn:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 30px rgba(0, 198, 255, 0.7) !important;
}

.submit-btn::after {
  content: "";
  position: absolute;
  top: -50%;
  left: -60%;
  width: 20px;
  height: 200%;
  background: rgba(255, 255, 255, 0.4);
  transform: rotate(25deg);
  transition: all 0.6s;
}

.submit-btn:hover::after {
  left: 120%;
}

/* Sección de clientes */
.clients-section {
  background: linear-gradient(to bottom, #f5fbff, #ffffff);
  border-top: 1px solid #e0f0ff;
}

.clients-carousel {
  max-width: 1400px;
  margin: 0 auto;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.1);
}

.client-card {
  border-radius: 15px;
  overflow: hidden;
  transition: all 0.5s ease;
  padding: 25px 15px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: white !important;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  position: relative;
}

.client-card.hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15), 0 0 20px rgba(0, 247, 255, 0.3) !important;
  z-index: 5;
}

.client-logo {
  transition: all 0.5s ease;
  margin-bottom: 20px;
  filter: drop-shadow(0 3px 6px rgba(0,0,0,0.1));
}

.client-card.hover .client-logo {
  transform: scale(1.1);
  filter: drop-shadow(0 5px 10px rgba(0,0,0,0.2));
}

.client-name {
  color: #333 !important;
  font-weight: 700;
  font-size: 1.1rem;
  text-align: center;
  letter-spacing: 0.5px;
}

/* Animación para el borde del formulario */
@keyframes gradientBorder {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

/* Responsive */
@media (max-width: 960px) {
  .section-title {
    font-size: 2.3rem;
  }
  
  .social-card {
    min-height: 240px;
  }
  
  .social-card-title {
    font-size: 1.5rem !important;
  }
}

@media (max-width: 600px) {
  .section-title {
    font-size: 1.9rem;
  }
  
  .section-subtitle {
    font-size: 1.1rem;
  }
  
  .social-card {
    min-height: 220px;
    padding: 20px;
  }
  
  .social-card-title {
    font-size: 1.3rem !important;
  }
  
  .submit-btn {
    font-size: 1.1rem !important;
    height: 55px !important;
  }
}
</style>





      <!--// Lista de clientes (ejemplo)
      clients: [
        { name: "Hotel Lux", logo: require("@/assets/Clientes/cliente.png") },
        { name: "Empresa XYZ", logo: require("@/assets/Clientes/cliente.png") },
        { name: "Comercio ABC", logo: require("@/assets/Clientes/cliente.png") },
        { name: "Restaurante Deluxe", logo: require("@/assets/Clientes/cliente.png") },
        { name: "Constructora 2023", logo: require("@/assets/Clientes/cliente.png") },
        { name: "Municipalidad", logo: require("@/assets/Clientes/cliente.png") },
        { name: "Cadena Hoteles", logo: require("@/assets/Clientes/cliente.png") },
        { name: "Desarrolladora Inmobiliaria", logo: require("@/assets/Clientes/cliente.png") }
      ],-->