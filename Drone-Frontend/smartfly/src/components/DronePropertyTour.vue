<template>
  <v-container fluid class="property-gallery py-12" id="gallery">
    <v-row justify="center">
      <v-col cols="12" class="text-center">
        <h2 class="section-title">Perspectivas Exclusivas</h2>
        <p class="section-subtitle">Descubre propiedades desde el cielo</p>
      </v-col>

      <!-- Filtros -->
      <v-col cols="12">
        <v-row justify="center" class="property-filters">
          <v-col 
            v-for="(type, index) in propertyTypes" 
            :key="index"
            cols="auto"
          >
            <v-btn
              @click="activePropertyType = type.value"
              :color="activePropertyType === type.value ? 'cyan' : 'transparent'"
              class="filter-btn"
              outlined
              rounded
            >
              <v-icon left>{{ type.icon }}</v-icon>
              {{ type.label }}
            </v-btn>
          </v-col>
        </v-row>
      </v-col>

      <!-- Grid de Propiedades -->
      <v-col cols="12">
        <v-row>
          <v-col
            v-for="(property, index) in filteredProperties"
            :key="index"
            cols="12"
            sm="6"
            md="4"
            lg="3"
          >
            <v-card 
              class="property-card"
              @click="openPropertyModal(property)"
              elevation="0"
            >
              <v-hover v-slot="{}">
                <div class="card-media-container">
                  <!-- Placeholder para video -->
                  <v-sheet
                    v-if="!property.video"
                    height="280"
                    color="rgba(10, 25, 47, 0.7)"
                    class="d-flex flex-column justify-center align-center video-placeholder"
                  >
                    <v-icon size="64" color="rgba(255, 255, 255, 0.7)">mdi-video</v-icon>
                    <p class="mt-4 white--text">Video en producción</p>
                  </v-sheet>

                  <!-- Video real -->
                  <video
                    v-else
                    :src="property.video"
                    muted
                    loop
                    playsinline
                    ref="propertyVideos"
                    @mouseover="playVideo(index)"
                    @mouseout="pauseVideo(index)"
                    class="property-video"
                  ></video>

                  <!-- Superposición degradada -->
                  <div class="gradient-overlay"></div>

                  <!-- Contenido textual -->
                  <v-card-title class="property-title">
                    <span class="text-shadow">{{ property.title }}</span>
                  </v-card-title>
                  <v-card-subtitle class="property-location">
                    <v-icon small color="#00f7ff">mdi-map-marker</v-icon>
                    <span class="text-shadow">{{ property.location }}</span>
                  </v-card-subtitle>
                </div>
              </v-hover>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>

    <!-- Modal de Propiedad -->
    <v-dialog v-model="propertyModal" max-width="1200" scrollable>
      <v-card v-if="selectedProperty" class="property-modal">
        <v-card-actions class="justify-end modal-header">
          <v-btn icon @click="propertyModal = false" color="white">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-card-actions>

        <v-row no-gutters>
          <v-col cols="12" md="8" class="video-column">
            <div class="modal-media">
              <div v-if="!selectedProperty.video" class="video-placeholder large">
                <v-icon size="64" color="rgba(255, 255, 255, 0.7)">mdi-video-wireless</v-icon>
                <p class="mt-4 white--text">Contenido profesional en producción</p>
              </div>
              <video
                v-else
                :src="selectedProperty.video"
                controls
                autoplay
                ref="modalVideo"
                class="modal-video"
              ></video>
            </div>
          </v-col>

          <v-col cols="12" md="4" class="info-column">
            <v-card-text class="modal-content">
              <h2 class="modal-title">{{ selectedProperty.title }}</h2>
              <div class="property-meta">
                <v-chip small class="mr-2 mb-2 property-chip">
                  <v-icon left small>mdi-domain</v-icon>
                  {{ selectedProperty.type }}
                </v-chip>
                <v-chip small class="mr-2 mb-2 property-chip">
                  <v-icon left small>mdi-ruler</v-icon>
                  {{ selectedProperty.area }}
                </v-chip>
              </div>

              <v-divider class="my-4 divider-custom"></v-divider>

              <h3 class="info-subtitle">Detalles Técnicos</h3>
              <v-list class="tech-details">
                <v-list-item>
                  <v-list-item-icon>
                    <v-icon small color="#00f7ff">mdi-drone</v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <span class="detail-text">Dron: {{ selectedProperty.drone }}</span>
                  </v-list-item-content>
                </v-list-item>
                <v-list-item>
                  <v-list-item-icon>
                    <v-icon small color="#00f7ff">mdi-camera</v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <span class="detail-text">Cámara: {{ selectedProperty.camera }}</span>
                  </v-list-item-content>
                </v-list-item>
              </v-list>

              <v-divider class="my-4 divider-custom"></v-divider>

              <h3 class="info-subtitle">Características</h3>
              <div class="property-tags">
                <v-chip
                  v-for="(tag, index) in selectedProperty.tags"
                  :key="index"
                  small
                  class="mr-2 mb-2 property-chip"
                >
                  {{ tag }}
                </v-chip>
              </div>
            </v-card-text>
          </v-col>
        </v-row>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      activePropertyType: 'all',
      propertyModal: false,
      selectedProperty: null,
      propertyTypes: [
        { label: 'Todas', value: 'all', icon: 'mdi-home' },
        { label: 'Residencial', value: 'residential', icon: 'mdi-home-city' },
        { label: 'Comercial', value: 'commercial', icon: 'mdi-office-building' },
        { label: 'Hoteles', value: 'hotel', icon: 'mdi-office-building-marker-outline' },
        { label: 'Proyectos', value: 'project', icon: 'mdi-domain' }
      ],
      properties: [
        {
          id: 1,
          title: 'Luxury Beach House',
          location: 'Miami, FL',
          type: 'residential',
          area: '850 m²',
          drone: 'DJI Mavic 3 Cine',
          camera: 'Hasselblad 4K',
          video: null,
          tags: ['Vista al mar', 'Piscina infinita', 'Diseño moderno']
        },
        {
          id: 2,
          title: 'Boutique Hotel',
          location: 'Tulum, México',
          type: 'hotel',
          area: '2,500 m²',
          drone: 'DJI Inspire 2',
          camera: 'Zenmuse X7',
          video: null,
          tags: ['Jungla', 'Spa', 'Restaurante gourmet']
        }
      ]
    }
  },
  computed: {
    filteredProperties() {
      if (this.activePropertyType === 'all') return this.properties;
      return this.properties.filter(prop => prop.type === this.activePropertyType);
    }
  },
  methods: {
    openPropertyModal(property) {
      this.selectedProperty = property;
      this.propertyModal = true;
      this.$nextTick(() => {
        if (this.$refs.modalVideo) {
          this.$refs.modalVideo.play().catch(e => console.log("Autoplay prevented:", e));
        }
      });
    },
    playVideo(index) {
      const video = this.$refs.propertyVideos?.[index];
      if (video) video.play().catch(e => console.log("Play prevented:", e));
    },
    pauseVideo(index) {
      const video = this.$refs.propertyVideos?.[index];
      if (video) video.pause();
    },
    addVideoToProperty(propertyId, videoPath) {
      const property = this.properties.find(p => p.id === propertyId);
      if (property) {
        this.$set(property, 'video', require(`@/assets/Drone-Property-Tour/${videoPath}`));
      }
    }
  },
  mounted() {
    this.addVideoToProperty(1, 'video1.mp4');
    this.addVideoToProperty(2, 'video2.mp4');
  }
}
</script>

<style scoped>
/* Estilos base */
.property-gallery {
  background: linear-gradient(180deg, #07152a 0%, #0a192f 100%);
}

.section-title {
  font-family: 'Orbitron', sans-serif;
  color: #00f7ff;
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.section-subtitle {
  color: rgba(255, 255, 255, 0.8);
  font-size: 1.2rem;
}

.filter-btn {
  font-family: 'Orbitron', sans-serif;
  color: #ffffff !important;
  border: 1px solid rgba(0, 247, 255, 0.3) !important;
  letter-spacing: 0.5px;
  transition: all 0.3s;
  background: transparent !important;
}

.filter-btn.v-btn--active {
  color: #07152a !important;
  background: #00f7ff !important;
}

/* Estilos para las tarjetas */
.property-card {
  background: transparent !important;
  border: none !important;
  overflow: hidden;
  transition: transform 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
  cursor: pointer;
}

.property-card:hover {
  transform: translateY(-10px);
}

.card-media-container {
  position: relative;
  height: 280px;
}

.property-video {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.gradient-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 60%;
  background: linear-gradient(to top, rgba(10, 25, 47, 0.85) 20%, transparent);
}

.property-title {
  position: absolute;
  color: #ffffff !important;
  bottom: 40px;
  left: 0;
  width: 100%;
  padding: 0 16px 8px;
  z-index: 2;
}

.property-location {
  position: absolute;
  color: #ffffff !important;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 0 16px 16px;
  z-index: 2;
  display: flex;
  align-items: center;
  color: #00f7ff !important;
}

.text-shadow {
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.8);
}

/* Estilos para el modal */
.property-modal {
  background: #0a192f !important;
  color: white !important;
}

.modal-header {
  background: rgba(10, 25, 47, 0.9) !important;
  border-bottom: 1px solid rgba(0, 247, 255, 0.2) !important;
}

.video-column {
  background: #000 !important;
  padding: 0 !important;
}

.modal-media {
  height: 100%;
  position: relative;
}

.modal-video {
  width: 100%;
  height: 100%;
  display: block;
}

.info-column {
  background: linear-gradient(135deg, rgba(10, 25, 47, 0.95), rgba(7, 21, 42, 0.95)) !important;
}

.modal-content {
  padding: 24px;
  color: white !important;
}

.modal-title {
  color: #ffffff !important;
  font-size: 1.8rem;
  margin-bottom: 16px;
}

.info-subtitle {
  color: #ffffff !important;
  font-size: 1.2rem;
  margin: 24px 0 8px;
}

.property-chip {
  background: rgba(0, 247, 255, 0.15) !important;
  color: #ffffff !important;
  border: 1px solid rgba(0, 247, 255, 0.3) !important;
}

.divider-custom {
  border-color: rgba(255, 255, 255, 0.1) !important;
}

.tech-details {
  background: transparent !important;
}

.detail-text {
  color: rgba(255, 255, 255, 0.9) !important;
}

/* Responsive */
@media (max-width: 960px) {
  .property-card {
    height: 240px;
  }
  
  .card-media-container {
    height: 240px;
  }
}

@media (max-width: 600px) {
  .section-title {
    font-size: 2rem;
  }
  
  .modal-title {
    font-size: 1.5rem;
  }
  
  .info-subtitle {
    font-size: 1.1rem;
  }
}
</style>

