<template>
  <section class="hero-section">
    <!-- Video de fondo -->
    <video autoplay muted loop class="hero-video">
      <source src="@/assets/Hero-Section/Videos/hero-section1.webm" type="video/webm">
      <source src="@/assets/Hero-Section/Videos/hero-section1.mp4" type="video/mp4">
      Tu navegador no soporta videos HTML5
    </video>

    <!-- Overlay con gradiente -->
    <div class="hero-overlay"></div>

    <!-- Contenido principal -->
    <div class="hero-content">
      <div class="text-container">
        <h1 class="hero-title">
          <span class="title-line">Elevando tus proyectos</span>
          <span class="title-line">a nuevas alturas</span>
        </h1>
        
        <p class="hero-subtitle">
          Servicios profesionales de pilotaje de drones certificados
        </p>
      </div>

      <!-- Contenedor del botón -->
      <div class="hero-cta-container">
  <a 
    href="https://wa.me/5491234567890" 
    class="whatsapp-btn"
    target="_blank"
    rel="noopener noreferrer"
  >
    <v-icon class="whatsapp-icon">mdi-whatsapp</v-icon>
    <span>WhatsApp</span>
  </a>
</div>
    </div>
  </section>
</template>

<script>
export default {
  mounted() {
    // Carga diferida del video
    const video = document.querySelector('.hero-video');
    if(video) video.setAttribute('autoplay', '');
  }
}
</script>

<style scoped>

/* Estructura General */
.hero-section {
  position: relative;
  height: 100vh;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Video de Fondo */
.hero-video {
  position: absolute;
  top: 50%;
  left: 50%;
  min-width: 100%;
  min-height: 100%;
  width: auto;
  height: auto;
  transform: translate(-50%, -50%);
  object-fit: cover;
  z-index: 1;
}

/* Overlay de Color */
.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    45deg,
    rgba(10, 25, 47, 0.9) 0%,
    rgba(10, 25, 47, 0.6) 100%
  );
  z-index: 2;
}

/* Contenido Principal */
.hero-content {
  position: relative;
  z-index: 3;
  text-align: center;
  padding: 0 1.5rem;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  padding-top: 20vh;
}

/* Títulos */
.hero-title {
  font-family: 'Orbitron', sans-serif;
  font-weight: 700;
  color: #fff;
  margin-bottom: 1.5rem;
  line-height: 1.2;
  letter-spacing: 2px;
  text-transform: uppercase;
  text-shadow: 0 0 15px rgba(0, 247, 255, 0.4);
}

.title-line {
  display: block;
  opacity: 0;
  transform: translateY(20px);
  animation: titleAppear 0.8s cubic-bezier(0.215, 0.61, 0.355, 1) forwards;
}

.title-line:first-child {
  animation-delay: 0.3s;
}

.title-line:last-child {
  animation-delay: 0.5s;
}

@keyframes titleAppear {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Subtítulo */
.hero-subtitle {
  color: #00f7ff;
  font-size: 1.25rem;
  margin-bottom: 2.5rem;
  opacity: 0;
  transform: translateY(20px);
  animation: subtitleAppear 0.8s 0.7s cubic-bezier(0.215, 0.61, 0.355, 1) forwards;
}

@keyframes subtitleAppear {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Botón WhatsApp */
.hero-cta-container {
  margin-top: auto;
  padding-bottom: 10vh;
}

.whatsapp-btn {
  display: inline-flex;
  align-items: center;
  background: linear-gradient(145deg, #25D366, #128C7E);
  color: #ffffff;
  padding: 1.25rem 2.5rem;
  border-radius: 50px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.4s cubic-bezier(0.215, 0.61, 0.355, 1);
  position: relative;
  overflow: hidden;
  border: none;
  box-shadow: 0 8px 25px rgba(37, 211, 102, 0.3);
  opacity: 0;
  transform: translateY(20px);
  animation: btnAppear 0.8s 0.9s cubic-bezier(0.215, 0.61, 0.355, 1) forwards;
}

.whatsapp-icon{
  color: #ffffff;
  font-size: 1.5rem;
  margin-right: 10px;
}

.whatsapp-btn:hover {
  transform: translateY(-3px);
  box-shadow: 
    0 12px 30px rgba(37, 211, 102, 0.4),
    0 0 0 3px rgba(255, 255, 255, 0.1);
}

.whatsapp-btn::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 300px;
  height: 300px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  transform: translate(-50%, -50%) scale(0);
  transition: transform 0.6s ease;
}

.whatsapp-btn:hover::after {
  transform: translate(-50%, -50%) scale(1);
}

.whatsapp-icon {
  width: 28px;
  height: 28px;
  margin-right: 15px;
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));
}

@keyframes btnAppear {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Responsive Design */
@media (max-width: 768px) {
  .hero-title {
    font-size: 2rem;
  }

  .hero-subtitle {
    font-size: 1rem;
  }

  .whatsapp-btn {
    padding: 0.75rem 1.5rem;
    font-size: 0.9rem;
  }
}

@media (max-width: 480px) {
  .hero-video {
    display: none;
  }
  
  .hero-section {
    background: url('@/assets/Hero-Section/Imagenes/hero-section1-poster.webp') center/cover;
  }
}
</style>