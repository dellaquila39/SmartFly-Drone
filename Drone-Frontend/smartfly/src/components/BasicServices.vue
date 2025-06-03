<template>
  <section class="basic-services-section">
    <!-- Encabezado con animación -->
    <div class="section-header" data-aos="fade-up">
      <h2 class="section-title">Nuestro Enfoque Operacional</h2>
      <p class="section-subtitle">Soluciones aéreas diseñadas para resultados tangibles</p>
    </div>

    <!-- Contenedor principal con timeline -->
    <div class="services-timeline">
      <!-- Línea de conexión vertical -->
      <div class="timeline-track"></div>

      <!-- Paso de servicio individual -->
      <div 
        v-for="(service, index) in services"
        :key="index"
        class="service-step"
        :class="{ 'left': index % 2 === 0, 'right': index % 2 !== 0 }"
        :data-aos="index % 2 === 0 ? 'fade-right' : 'fade-left'"
        :data-aos-delay="index * 100"
      >
        <!-- Indicador numérico -->
        <div class="step-indicator">
          <div class="step-number">{{ index + 1 }}</div>
        </div>

        <!-- Tarjeta de contenido -->
        <div class="step-card">
          <!-- Encabezado con ícono y título -->
          <div class="card-header">
            <div class="service-icon-container">
              <v-icon class="service-icon">{{ service.icon }}</v-icon>
            </div>
            <h3 class="service-title">{{ service.title }}</h3>
          </div>
          
          <!-- Descripción accesible -->
          <div class="card-content">
            <p>{{ service.description }}</p>
          </div>
          
          <!-- Imagen ilustrativa -->
          <div class="card-image">
            <img 
              :src="service.image" 
              :alt="'Ilustración de ' + service.title"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'BasicServices',
  data() {
    return {
      services: [
        {
          title: "Monitoreo Industrial Inteligente",
          description: "Utilizamos drones equipados con sensores avanzados para detectar anomalías en instalaciones industriales. Nuestros sistemas identifican problemas como fugas o sobrecalentamientos antes que causen fallos, reduciendo costos de mantenimiento.",
          icon: "mdi-factory",
          image: require('@/assets/BasicServices/imagenes/monitoreo-aereo.webp')
        },
        {
          title: "Seguridad Perimetral 360°",
          description: "Sistemas de vigilancia aérea que monitorean grandes áreas en tiempo real. Combinamos cámaras térmicas y de alta resolución para detectar intrusos incluso en condiciones de baja visibilidad, mejorando la protección de sus activos.",
          icon: "mdi-security",
          image: require('@/assets/BasicServices/imagenes/seguridad-perimetral.webp')
        },
        {
          title: "Producción Audiovisual Aérea",
          description: "Capturamos imágenes espectaculares desde perspectivas únicas. Nuestro equipo de pilotos y editores profesionales crea contenido cinematográfico para publicidad, documentales y eventos especiales.",
          icon: "mdi-video-4k-box",
          image: require('@/assets/BasicServices/imagenes/audio-visual.webp')
        },
        {
          title: "Capacitación Especializada",
          description: "Programas de entrenamiento práctico para operación de drones. Enseñamos desde fundamentos básicos hasta técnicas avanzadas de mapeo e inspección, con certificaciones reconocidas internacionalmente.",
          icon: "mdi-school",
          image: require('@/assets/BasicServices/imagenes/capacitacion.webp')
        }
      ]
    }
  }
}
</script>

<style scoped>

.basic-services-section {
  padding: 6rem 1.5rem;
  background: linear-gradient(180deg, #0a192f 0%, #07152a 100%);
}

.section-header {
  text-align: center;
  margin-bottom: 4rem;
}

.section-title {
  font-family: 'Orbitron', sans-serif;
  font-size: 2.5rem;
  color: #00f7ff;
  letter-spacing: 2px;
  margin-bottom: 1rem;
  text-transform: uppercase;
}

.section-subtitle {
  color: rgba(255, 255, 255, 0.9);
  font-size: 1.2rem;
  max-width: 800px;
  margin: 0 auto;
}


.services-timeline {
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.timeline-track {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 50%;
  width: 4px;
  background: linear-gradient(to bottom, 
    rgba(0, 247, 255, 0.8), 
    transparent 90%);
  transform: translateX(-50%);
  z-index: 0;
}


.service-step {
  position: relative;
  width: calc(50% - 4rem);
  margin-bottom: 4rem;
  z-index: 1;
}

.service-step.left {
  margin-right: auto;
  padding-right: 4rem;
}

.service-step.right {
  margin-left: auto;
  padding-left: 4rem;
}

.step-indicator {
  position: absolute;
  top: 20px;
  width: 50px;
  height: 50px;
}

.service-step.left .step-indicator {
  right: -25px;
}

.service-step.right .step-indicator {
  left: -25px;
}

.step-number {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: #0a192f;
  border: 2px solid #00f7ff;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #00f7ff;
  font-family: 'Orbitron', sans-serif;
  font-size: 1.2rem;
  font-weight: bold;
  box-shadow: 0 0 15px rgba(0, 247, 255, 0.3);
}


.step-card {
  background: rgba(10, 25, 47, 0.8);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(0, 247, 255, 0.1);
  border-radius: 15px;
  padding: 2rem;
  transition: all 0.4s cubic-bezier(0.215, 0.61, 0.355, 1);
}

.step-card:hover {
  transform: translateY(-10px);
  box-shadow: 
    0 15px 30px rgba(0, 247, 255, 0.15),
    0 0 0 2px rgba(0, 247, 255, 0.3);
}

.card-header {
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
}

.service-icon-container {
  background: rgba(0, 247, 255, 0.1);
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 1.5rem;
}

.service-icon {
  color: #00f7ff;
  font-size: 2rem !important;
}

.service-title {
  font-family: 'Orbitron', sans-serif;
  color: #fff;
  font-size: 1.4rem;
  margin: 0;
}

.card-content p {
  color: rgba(255, 255, 255, 0.9);
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.card-image {
  border-radius: 10px;
  overflow: hidden;
  border: 1px solid rgba(0, 247, 255, 0.2);
}

.card-image img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  display: block;
  transition: transform 0.4s ease;
}

.card-image:hover img {
  transform: scale(1.05);
}


@media (max-width: 992px) {
  .timeline-track {
    left: 40px;
  }

  .service-step {
    width: calc(100% - 4rem);
    padding-left: 4rem !important;
    padding-right: 0 !important;
    margin-left: 0 !important;
    margin-right: 0 !important;
  }

  .service-step.left .step-indicator,
  .service-step.right .step-indicator {
    left: -15px;
    right: auto;
  }
}

@media (max-width: 768px) {
  .basic-services-section {
    padding: 4rem 1rem;
  }

  .section-title {
    font-size: 2rem;
  }

  .section-subtitle {
    font-size: 1rem;
  }

  .service-step {
    width: calc(100% - 2rem);
    padding-left: 2rem !important;
  }

  .step-indicator {
    width: 40px;
    height: 40px;
  }

  .step-number {
    width: 40px;
    height: 40px;
    font-size: 1rem;
  }

  .service-title {
    font-size: 1.2rem;
  }

  .card-header {
    flex-direction: column;
    text-align: center;
  }

  .service-icon-container {
    margin-right: 0;
    margin-bottom: 1rem;
  }
}

@media (max-width: 480px) {
  .service-step {
    padding-left: 1.5rem !important;
  }
  
  .step-card {
    padding: 1.5rem;
  }
}
</style>