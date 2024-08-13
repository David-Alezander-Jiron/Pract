<template>
  <div id="app">
    <!-- Mostrar NavbarComponent solo si no estamos en las rutas de login, registro o una ruta inexistente -->
    <NavbarComponent v-if="shouldShowNavbar" />

    <div class="container-fluid">
      <div class="row">
        <!-- Mostrar SidebarComponent y HeaderComponent solo si no estamos en las rutas de login, registro o una ruta inexistente y no estamos en un móvil -->
        <SidebarComponent v-if="shouldShowNavbar && !isMobile" class="col-md-3 col-lg-2 d-md-block bg-dark sidebar" />
        <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
          <HeaderComponent v-if="shouldShowNavbar && !isMobile" />
        </main>
      </div>
    </div>
  </div>

  <div class="router-pag" v-bind:class="{ 'existing-route': isExistingRoute }">
    <!-- Solo mostrar el router-view en las rutas de login o registro -->
    <router-view v-if="isAuthRoute" />

    <!-- En otras rutas, muestra el router-view normalmente -->
    <router-view v-else />
  </div>
</template>

<script>
import NavbarComponent from './components/NavbarComponent.vue';
import SidebarComponent from './components/SidebarComponent.vue';

// Importa allowedRoutes desde el archivo donde lo definiste
import { allowedRoutes } from './router';


export default {
  name: 'App',
  components: {
    NavbarComponent,
    SidebarComponent,
  },
  data() {
    return {
      isMobile: window.innerWidth <= 768, // Define un tamaño de pantalla móvil, aquí 768px
    };
  },
  computed: {
    shouldShowNavbar() {
      // Verifica si la ruta actual está en la lista de rutas permitidas
      const isAllowedRoute = allowedRoutes.includes(this.$route.path);
      return isAllowedRoute;
    },
    isAuthRoute() {
      const routePath = this.$route.path;
      return routePath === '/login' || routePath === '/register';
    },
    isExistingRoute() {
      // Verifica si la ruta actual está en la lista de rutas permitidas
      const isAllowedRoute = allowedRoutes.includes(this.$route.path);
      return isAllowedRoute;
    }
  },
  mounted() {
    window.addEventListener('resize', this.checkMobile);
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.checkMobile);
  },
  methods: {
    checkMobile() {
      this.isMobile = window.innerWidth <= 768;
    }
  }
};
</script>

<style scoped>
/* Aquí siguen los estilos proporcionados */
@import url('https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css');

.router-pag {
  padding-left: 0;
}

.existing-route {
  padding-left: 280px;
}

/* Ajusta el padding-left a 0 en pantallas menores a 768px */
@media (max-width: 768px) {
  .existing-route {
    padding-left: 0;
  }
}

.container-fluid {
  padding: 0;
}

.sidebar {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  z-index: 100;
  padding: 48px 0 0;
  /* Ajuste para que no se superponga con el header */
}

.main-content {
  margin-top: 0px;
  /* Ajuste para que no se superponga con el header */
  padding: 5px;
}

.content {
  padding: 20px;
  background-color: #f8f9fa;
  min-height: calc(100vh - 80px);
  /* Ajusta la altura del contenido para que no se superponga con el header */
}

.sidebar {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  z-index: 100;
  padding: 48px 0 0;
  /* Ajuste para que no se superponga con el header */
}

.main-content {
  margin-top: 0px;
  /* Ajuste para que no se superponga con el header */
  padding: 5px;
}

.content {
  padding: 20px;
  background-color: #f8f9fa;
  min-height: calc(100vh - 80px);
  /* Ajusta la altura del contenido para que no se superponga con el header */
}
</style>