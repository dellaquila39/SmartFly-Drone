<template>
  <section class="services-section">
    <!-- Encabezado -->
    <div class="section-header" data-aos="fade-up">
      <h2 class="section-title">Soluciones Tecnológicas Integrales</h2>
      <p class="section-subtitle">Monitoreo Inteligente & Producción Aérea de Excelencia</p>
    </div>

    <!-- Filtros -->
    <div class="category-filters" data-aos="fade-up">
      <button 
        v-for="(category, index) in categories"
        :key="index"
        @click="setActiveCategory(index)"
        :class="{ 'active': activeCategory === index }"
        class="filter-btn"
      >
        <v-icon left>{{ category.icon }}</v-icon>
        {{ category.name }}
      </button>
    </div>

    <!-- Grid de Servicios -->
    <div class="services-grid">
      <div 
        v-for="(service, index) in filteredServices"
        :key="index"
        class="service-card"
        data-aos="zoom-in"
        :data-aos-delay="index * 100"
      >
        <div class="card-header">
          <div class="service-icon-container">
            <v-icon class="service-icon">{{ service.icon }}</v-icon>
          </div>
          <h3 class="service-title">{{ service.title }}</h3>
        </div>

        <div class="card-body">
          <ul class="service-features">
            <li v-for="(feature, fIndex) in service.features" :key="fIndex">
              <v-icon small class="feature-icon">mdi-checkbox-marked-circle</v-icon>
              {{ feature }}
            </li>
          </ul>
        </div>

        <div class="card-footer">
          <v-btn 
            class="details-btn"
            color="#00f7ff"
            outlined
            @click="openDialog(service)"
          >
            Ver Especificaciones Técnicas
          </v-btn>
        </div>
      </div>
    </div>

    <!-- Diálogo de Detalles -->
    <v-dialog v-model="dialog" max-width="800">
      <service-details :service="selectedService" @close="dialog = false"/>
    </v-dialog>
  </section>
</template>


<script>
import AOS from 'aos';
import ServiceDetails from './ServiceDetails.vue';

export default {
  components: {
    ServiceDetails
  },
  
  data() {
    return {
      activeCategory: 0,
      dialog: false,
      selectedService: null,
      categories: [
        { name: 'Monitoreo Industrial', icon: 'mdi-factory', color: '#00f7ff' },
        { name: 'Seguridad Perimetral', icon: 'mdi-security', color: '#25D366' },
        { name: 'Producción Audiovisual', icon: 'mdi-video-4k', color: '#FF4081' },
        { name: 'Capacitación', icon: 'mdi-school', color: '#FFC107' }
      ],
      services: [
        // Monitoreo Industrial (Categoría 0)
        {
          category: 0,
          icon: 'mdi-pipe-leak',
          title: 'Detección de Fugas',
          features: [
            'Termografía de alta precisión',
            'Sensores de gas multispectral',
            'Informes en tiempo real',
            'Cobertura 360°'
          ],
          specs: {
            drones: ['DJI Matrice 300 RTK', 'Autel EVO II Dual 640T'],
            sensores: ['FLIR T1020', 'Sniffer4D'],
            autonomía: '45 min',
            resolución: '640x512 @ 30Hz'
          }
        },
        {
          category: 0,
          icon: 'mdi-robot-industrial',
          title: 'Análisis de Maquinaria',
          features: [
            'Monitorización vibratoria',
            'Detección de fallos en tiempo real',
            'Reportes predictivos',
            'Integración IoT'
          ],
          specs: {
            drones: ['DJI Mavic 3 Enterprise', 'Skydio X2D'],
            sensores: ['Siemens SINAMICS', 'ABB Ability'],
            autonomía: '40 min',
            resolución: '3840x2160 @ 60fps'
          }
        },

        // Seguridad Perimetral (Categoría 1)
        {
          category: 1,
          icon: 'mdi-motion-sensor',
          title: 'Vigilancia Térmica',
          features: [
            'Cámaras termográficas 640x480px',
            'Detección de movimiento a 500m',
            'Alertas automatizadas',
            'Integración con alarmas'
          ],
          specs: {
            drones: ['DJI Mavic 3T', 'Parrot Anafi Thermal'],
            sensores: ['Teledyne FLIR Boson', 'Hikvision DS-2TD'],
            autonomía: '32 min',
            resolución: '160x120 @ 9Hz'
          }
        },
        {
          category: 1,
          icon: 'mdi-radar',
          title: 'Escaneo LIDAR',
          features: [
            'Cartografía 3D en tiempo real',
            'Detección de intrusos',
            'Cobertura en zonas oscuras',
            'Algoritmos de reconocimiento'
          ],
          specs: {
            drones: ['DJI L1', 'RIEGL VUX-240'],
            sensores: ['Velodyne VLP-16', 'Hesai PandarXT'],
            autonomía: '28 min',
            resolución: '1200x800 puntos/sec'
          }
        },

        // Producción Audiovisual (Categoría 2)
        {
          category: 2,
          icon: 'mdi-video-stabilization',
          title: 'Filmación Cinematográfica',
          features: [
            'Cámaras 8K RAW',
            'Estabilización 360°',
            'Transmisión en vivo',
            'Edición en postproducción'
          ],
          specs: {
            drones: ['DJI Inspire 3', 'Freefly Alta X'],
            sensores: ['RED Komodo 6K', 'Sony FX6'],
            autonomía: '25 min',
            resolución: '8192x4320 @ 120fps'
          }
        },
        {
          category: 2,
          icon: 'mdi-image-multiple',
          title: 'Fotogrametría Profesional',
          features: [
            'Modelado 3D de precisión',
            'Ortofotos georreferenciadas',
            'Software de procesamiento',
            'Compatibilidad con GIS'
          ],
          specs: {
            drones: ['SenseFly eBee X', 'WingtraOne Gen II'],
            sensores: ['Sony RX1R II', 'PhaseOne iXM'],
            autonomía: '50 min',
            resolución: '100MP por toma'
          }
        },

        // Capacitación (Categoría 3)
        {
          category: 3,
          icon: 'mdi-certificate',
          title: 'Certificación en Operación',
          features: [
            'Cursos teórico-prácticos',
            'Simuladores de vuelo',
            'Certificaciones oficiales',
            'Soporte post-curso'
          ],
          specs: {
            drones: ['DJI Mini 3 Pro', 'DJI Avata'],
            sensores: ['Simulador Liftoff', 'Velocidrone'],
            autonomía: 'N/A',
            resolución: 'Simulación en 4K'
          }
        },
        {
          category: 3,
          icon: 'mdi-book-open-variant',
          title: 'Workshops Especializados',
          features: [
            'Manejo de software profesional',
            'Técnicas avanzadas de filmación',
            'Protocolos de seguridad',
            'Casos de estudio reales'
          ],
          specs: {
            drones: ['Personalizado según taller'],
            sensores: ['Adobe Premiere', 'Pix4D', 'DroneDeploy'],
            autonomía: 'Flexible',
            resolución: 'Adaptable a necesidades'
          }
        }
      ]
    }
  },

  computed: {
    filteredServices() {
      return this.services.filter(service => 
        service.category === this.activeCategory
      );
    }
  },

  methods: {
    setActiveCategory(index) {
    this.activeCategory = index;
  },

  openDialog(service) {
    this.selectedService = service;
    this.dialog = true;
  }
  },

  mounted() {
    if (typeof AOS !== 'undefined') {
      AOS.init({ duration: 1000, once: true });
    }
  }
}
</script>


<style scoped>
/* =================== */
/* Estructura General */
/* =================== */
.services-section {
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

/* =================== */
/* Filtros */
/* =================== */
.category-filters {
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin-bottom: 3rem;
  flex-wrap: wrap;
}

.filter-btn {
  background: rgba(0, 247, 255, 0.1) !important;
  border: 2px solid rgba(0, 247, 255, 0.3);
  color: #fff !important;
  padding: 0.8rem 1.5rem;
  border-radius: 50px;
  transition: all 0.3s ease;
  font-family: 'Montserrat', sans-serif;
  text-transform: uppercase;
  letter-spacing: 1px;
  display: flex;
  align-items: center;
}

.filter-btn.active {
  background: #00f7ff !important;
  color: #0a192f !important;
  border-color: #00f7ff;
  box-shadow: 0 0 15px rgba(0, 247, 255, 0.4);
}

.filter-btn:hover {
  transform: translateY(-2px);
}

/* =================== */
/* Tarjetas de Servicio */
/* =================== */
.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.service-card {
  background: rgba(10, 25, 47, 0.8);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(0, 247, 255, 0.1);
  border-radius: 15px;
  padding: 2rem;
  transition: all 0.4s cubic-bezier(0.215, 0.61, 0.355, 1);
}

.service-card:hover {
  transform: translateY(-10px);
  box-shadow: 
    0 15px 30px rgba(0, 247, 255, 0.15),
    0 0 0 2px rgba(0, 247, 255, 0.3);
}

.card-header {
  text-align: center;
  margin-bottom: 1.5rem;
}

.service-icon-container {
  background: rgba(0, 247, 255, 0.1);
  width: 80px;
  height: 80px;
  border-radius: 50%;
  margin: 0 auto 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.service-icon {
  color: #00f7ff;
  font-size: 2.5rem !important;
}

.service-title {
  font-family: 'Orbitron', sans-serif;
  color: #fff;
  font-size: 1.4rem;
  margin: 0;
}

.service-features {
  list-style: none;
  padding: 0;
  margin: 0;
}

.service-features li {
  color: rgba(255, 255, 255, 0.9);
  padding: 0.5rem 0;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.feature-icon {
  color: #00f7ff !important;
}

.details-btn {
  margin-top: 1.5rem;
  width: 100%;
  font-weight: 600;
  letter-spacing: 1px;
}

/* =================== */
/* Responsive Design */
/* =================== */
@media (max-width: 768px) {
  .services-section {
    padding: 4rem 1rem;
  }

  .section-title {
    font-size: 2rem;
  }

  .section-subtitle {
    font-size: 1rem;
  }

  .filter-btn {
    padding: 0.6rem 1rem;
    font-size: 0.9rem;
  }

  .services-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 480px) {
  .category-filters {
    gap: 1rem;
  }
}
</style>