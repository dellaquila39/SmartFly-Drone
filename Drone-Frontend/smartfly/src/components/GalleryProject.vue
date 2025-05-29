<template>
  <section class="project-gateway">
    <!-- Encabezado -->
    <div class="section-header" data-aos="fade-up">
      <h2 class="section-title">Explora Nuestro Mundo Visual</h2>
      <p class="section-subtitle">Descubre la excelencia técnica detrás de cada proyecto</p>
    </div>

    <!-- Grid de categorías -->
    <div class="services-grid">
      <div 
        v-for="(category, index) in categories"
        :key="index"
        class="service-card"
        data-aos="zoom-in"
        :data-aos-delay="index * 100"
      >
        <div class="card-header">
          <div class="service-icon-container">
            <v-icon class="service-icon">{{ category.icon }}</v-icon>
          </div>
          <h3 class="service-title">{{ category.name }}</h3>
        </div>

        <div class="card-body">
          <v-btn 
            class="details-btn"
            color="#00f7ff"
            outlined
            @click="$router.push(category.route)"
          >
            {{ category.btnText }}
          </v-btn>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data: () => ({
    categories: [
      {
        name: "Portafolio de Imágenes",
        icon: "mdi-image-filter-hdr",
        route: "/portafolio",
        btnText: "Ver Galería Completa"
      },
      {
        name: "Proyectos Destacados",
        icon: "mdi-lightning-bolt",
        route: "/destacados",
        btnText: "Explorar Casos"
      },
      {
        name: "Somos SmartFly",
        icon: "mdi-helicopter",
        route: "/nosotros",
        btnText: "Conocer Más"
      }
    ]
  })
}
</script>

<style scoped>
/* =================== */
/* Estructura General */
/* =================== */
.project-gateway {
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
/* Grid de Servicios */
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

/* =================== */
/* Elementos de Tarjeta */
/* =================== */
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

.details-btn {
  margin-top: 1.5rem;
  width: 100%;
  font-weight: 600;
  letter-spacing: 1px;
  border: 2px solid currentColor !important;
}

.details-btn:hover {
  background: rgba(0, 247, 255, 0.1) !important;
}

/* =================== */
/* Responsive Design */
/* =================== */
@media (max-width: 768px) {
  .project-gateway {
    padding: 4rem 1rem;
  }

  .section-title {
    font-size: 2rem;
  }

  .section-subtitle {
    font-size: 1rem;
  }

  .services-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 480px) {
  .section-title {
    font-size: 1.8rem;
  }
}
</style>