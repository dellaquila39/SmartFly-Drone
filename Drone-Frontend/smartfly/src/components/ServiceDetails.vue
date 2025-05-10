<template>
  <v-card class="specs-dialog">
    <!-- Encabezado con neón dinámico -->
    <v-card-title class="dialog-header px-6 pt-6 pb-4">
      <v-icon 
        class="dialog-icon"
        :color="serviceColor"
        x-large
      >
        {{ service.icon }}
      </v-icon>
      <h3 class="dialog-title ml-4">{{ service.title }}</h3>
    </v-card-title>

    <v-divider class="divider-neon mx-4" />

    <!-- Contenido Adaptativo -->
    <v-card-text class="specs-content pa-6">
      <v-row class="align-start" dense>
        <!-- Equipos -->
        <v-col cols="12" md="6" class="pr-md-4">
          <h4 class="specs-subtitle mb-3">🛠️ Equipos Utilizados</h4>
          <v-list class="transparent" dense>
            <v-list-item 
              v-for="(drone, index) in service.specs.drones" 
              :key="`drone-${index}`"
            >
              <v-list-item-icon class="mr-3">
                <v-icon small :color="serviceColor">mdi-helicopter</v-icon>
              </v-list-item-icon>
              <v-list-item-content class="specs-text">
                {{ drone || 'Modelo no especificado' }}
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-col>

        <!-- Especificaciones -->
        <v-col cols="12" md="6" class="pl-md-4">
          <h4 class="specs-subtitle mb-3">📊 Especificaciones Técnicas</h4>
          <v-list class="transparent" dense>
            <v-list-item>
              <v-list-item-icon class="mr-3">
                <v-icon small :color="serviceColor">mdi-clock-outline</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <strong>Autonomía:</strong> {{ service.specs.autonomía || 'N/A' }}
              </v-list-item-content>
            </v-list-item>

            <v-list-item>
              <v-list-item-icon class="mr-3">
                <v-icon small :color="serviceColor">mdi-camera</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <strong>Resolución:</strong> {{ service.specs.resolución || 'N/A' }}
              </v-list-item-content>
            </v-list-item>

            <v-list-item v-if="service.specs.sensores?.length">
              <v-list-item-icon class="mr-3">
                <v-icon small :color="serviceColor">mdi-chip</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <strong>Sensores:</strong> {{ service.specs.sensores.join(', ') }}
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-col>
      </v-row>
    </v-card-text>

    <!-- Botón de Cierre -->
    <v-card-actions class="dialog-actions pa-4">
      <v-spacer />
      <v-btn
        :color="serviceColor"
        text
        @click="$emit('close')"
        class="close-btn"
      >
        Cerrar
        <v-icon right>mdi-chevron-down</v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: 'ServiceDetails',
  props: {
    service: {
      type: Object,
      required: true,
      validator(value) {
        // Validación reforzada
        return (
          value.title &&
          value.icon &&
          value.specs &&
          Array.isArray(value.specs.drones) &&
          Array.isArray(value.specs.sensores) &&
          typeof value.specs.autonomía === 'string' &&
          typeof value.specs.resolución === 'string' &&
          (value.category !== 3 || ['Flexible', 'N/A'].includes(value.specs.autonomía))
        );
      }
    }
  },
  computed: {
    serviceColor() {
      return '#00f7ff'; // Monitoreo Industrial
    }
  },
}
</script>

<style scoped>
.specs-dialog {
  background: rgba(10, 25, 47, 0.98);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(0, 247, 255, 0.3);
  border-radius: 12px;
  opacity: 0;
  transform: translateY(-20px);
  animation: dialogEnter 0.4s cubic-bezier(0.4, 0, 0.2, 1) forwards;
}

@keyframes dialogEnter {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.dialog-header {
  background: linear-gradient(
    to right,
    rgba(0, 247, 255, 0.15),
    transparent
  );
}

.dialog-title {
  font-family: 'Orbitron', sans-serif;
  color: v-bind(serviceColor);
  text-shadow: 0 0 10px v-bind(serviceColor);
  letter-spacing: 1px;
}

.specs-subtitle {
  font-family: 'Orbitron', sans-serif;
  color: v-bind(serviceColor);
  border-left: 3px solid v-bind(serviceColor);
  padding-left: 12px;
}

/* Color del texto en el modal */
.specs-dialog {
  background: rgba(10, 25, 47, 0.98) !important; /* Fondo oscuro */
}

.specs-text,
.dialog-title,
.specs-subtitle,
.v-list-item__content {
  color: #f3f5f5 !important; /* Texto en neón azul */
}

/* Refuerza el brillo del neón */
.dialog-title {
  text-shadow: 0 0 15px #00f7ff;
}

/* Iconos y bordes */
.dialog-icon {
  color: #00f7ff !important;
  filter: drop-shadow(0 0 12px #00f7ff);
}

.v-divider {
  border-color: rgba(0, 247, 255, 0.3) !important;
}

/* Responsive Design */
@media (max-width: 600px) {
  .specs-content {
    padding: 1rem !important;
  }

  .v-list-item {
    padding-left: 0 !important;
    padding-right: 0 !important;
  }

  .dialog-title {
    font-size: 1.3rem !important;
  }
}

.close-btn {
  transition: all 0.3s ease !important;
  letter-spacing: 0.8px !important;
}

.close-btn:hover {
  transform: translateY(-2px);
  opacity: 0.8;
}

.dialog-icon {
  filter: drop-shadow(0 0 12px v-bind(serviceColor));
}
</style>