<template>
  <v-app-bar app fixed elevate-on-scroll class="nav-bar" color="navBackground">
    <!-- Logo con efecto neón -->
    <router-link to="/" class="logo-container">
      <svg width="40" height="40" viewBox="0 0 24 24" class="logo-svg">
        <path fill="#00f7ff" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93s3.05-7.44 7-7.93v15.86zm2-15.86c3.94.49 7 3.85 7 7.93s-3.05 7.44-7 7.93V4.07z"/>
      </svg>
      <span class="logo-text">SMARTFLY-PRO</span>
    </router-link>

    <!-- Menú Desktop -->
    <div class="desktop-menu hidden-sm-and-down">
      <v-menu 
        v-for="(item, index) in menuItems" 
        :key="index"
        :open-on-hover="!!item.subitems"
        offset-y
        transition="slide-y-transition"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn 
            text 
            class="menu-btn"
            v-bind="attrs"
            v-on="on"
            :to="item.to"
          >
            {{ item.title }}
            <svg v-if="item.subitems" width="16" height="16" viewBox="0 0 24 24" class="dropdown-icon">
              <path fill="#00f7ff" d="M7 10l5 5 5-5z"/>
            </svg>
          </v-btn>
        </template>

        <v-list v-if="item.subitems" class="dropdown-list">
          <v-list-item v-for="(subitem, i) in item.subitems" :key="i">
            <v-list-item-title class="dropdown-item">
              {{ subitem }}
            </v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </div>

    <!-- Menú Mobile -->
    <v-menu class="hidden-md-and-up">
      <template v-slot:activator="{ on }">
        <v-btn icon large v-on="on" class="mobile-menu-btn">
          <v-icon color="#00f7ff">mdi-menu</v-icon>
        </v-btn>
      </template>
      
      <v-list dark class="mobile-menu">
        <v-list-group
          v-for="(item, index) in menuItems"
          :key="index"
          :value="openSubmenus[index]"
          @click.native.stop="toggleSubmenu(index)">
          
          <template v-slot:activator>
            <v-list-item 
              :to="item.to" 
              class="mobile-menu-item"
            >
              <v-list-item-title>
                {{ item.title }}
                <svg 
                  v-if="item.subitems" 
                  width="16" 
                  height="16" 
                  viewBox="0 0 24 24"
                  class="mobile-custom-arrow"
                >
                  <path fill="#00f7ff" d="M7 10l5 5 5-5z"/>
                </svg>
              </v-list-item-title>
            </v-list-item>
          </template>

          <v-list-item 
            v-for="(subitem, i) in item.subitems" 
            :key="i"
            class="mobile-subitem"
            @click.stop="closeMobileMenu"
          >
            {{ subitem }}
          </v-list-item>
        </v-list-group>
      </v-list>
    </v-menu>
  </v-app-bar>
</template>

<script>
export default {
  data() {
    return {
      menuItems: [
        { title: 'Inicio', to: '/' },
        { 
          title: 'Portafolio',
          subitems: ['Proyectos Destacados', 'Nuestra Misión', 'Quienes Somos']
        },
        { 
          title: 'Servicios',
          subitems: ['Soluciones Integrales', 'Equipos Profesionales', 'Cursos Disponibles']
        },
        { 
          title: 'Tienda',
          subitems: ['Drones', 'Accesorios', 'Repuestos']
        },
        { title: 'Contacto', to: '/contacto' }
      ],
      navBackground: 'rgba(10, 25, 47, 0.95)',
      isMobileMenuOpen: false,
      openSubmenus: {}
    }
  },
  created() {
    this.menuItems.forEach((_, index) => {
      this.$set(this.openSubmenus, index, false);
    });
  },
  methods: {
    toggleSubmenu(index) {
      const newState = !this.openSubmenus[index];
      const updatedSubmenus = { ...this.openSubmenus };
      updatedSubmenus[index] = newState;
      this.openSubmenus = updatedSubmenus;
      this.isMobileMenuOpen = true;
    },
    closeMobileMenu() {
      this.isMobileMenuOpen = false;
      this.openSubmenus = this.menuItems.reduce((acc, _, idx) => {
        acc[idx] = false;
        return acc;
      }, {});
    }
  }
}
</script>

<style scoped>
/* Estilos personalizados */
.nav-bar {
  backdrop-filter: blur(8px);
  border-bottom: 1px solid rgba(0, 247, 255, 0.1) !important;
}

.logo-container {
  display: flex;
  align-items: center;
  text-decoration: none;
  margin-right: 2rem;
}

.logo-svg {
  filter: drop-shadow(0 0 4px rgba(0, 247, 255, 0.4));
  transition: all 0.3s ease;
}

.logo-text {
  color: #00f7ff;
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  letter-spacing: 1px;
  margin-left: 8px;
  text-shadow: 0 0 8px rgba(0, 247, 255, 0.3);
}

.menu-btn {
  color: #fff !important;
  letter-spacing: 1px;
  transition: all 0.3s ease;
}

.menu-btn:hover {
  color: #00f7ff !important;
  transform: translateY(-2px);
}

.dropdown-icon {
  margin-left: 8px;
  transition: transform 0.3s ease;
}

.menu-btn:hover .dropdown-icon {
  transform: rotate(180deg);
}

.dropdown-list {
  background: rgba(10, 25, 47, 0.9) !important;
  border: 1px solid rgba(0, 247, 255, 0.2) !important;
  backdrop-filter: blur(4px);
}

.dropdown-item {
  color: #fff !important;
  padding: 12px 24px !important;
  transition: all 0.2s ease;
}

.dropdown-item:hover {
  background: rgba(0, 247, 255, 0.1) !important;
  padding-left: 32px !important;
}


.mobile-menu-btn {
  transition: transform 0.3s ease;
}

.mobile-menu-btn:hover {
  transform: scale(1.1);
}

.mobile-menu {
  background: rgba(10, 25, 47, 0.98) !important;
  border: 1px solid rgba(0, 247, 255, 0.2) !important;
  backdrop-filter: blur(8px);
}

::v-deep .mobile-menu .v-list-group__header__append-icon {
  display: none !important;
}

::v-deep .mobile-menu .v-list-group__header {
  padding-right: 0 !important;
}

/* En tu sección de estilos */
.mobile-menu-item {
  position: relative; /* Necesario para posicionar la flecha */
  display: flex !important;
  justify-content: space-between !important;
  align-items: center !important;
}

.mobile-custom-arrow {
  margin-left: 12px;
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Rotación al abrir el submenú */
::v-deep .v-list-group--active .mobile-custom-arrow {
  transform: rotate(180deg);
}

.mobile-menu-item {
  color: #fff !important;
  font-size: 1.1rem;
  padding: 16px 24px;
}

.mobile-subitem {
  color: #00f7ff !important;
  padding-left: 40px !important;
  font-size: 0.95rem;
}
</style>