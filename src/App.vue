<template>
  <div id="app">
    <!-- Mostrar NavbarComponent solo si no estamos en las rutas de login, registro o una ruta inexistente -->
    <NavbarComponent v-if="shouldShowNavbar" />

    <div class="container-fluid">
      <div class="row">
        <!-- Mostrar SidebarComponent y HeaderComponent solo si no estamos en las rutas de login, registro o una ruta inexistente -->
        <SidebarComponent v-if="shouldShowNavbar" class="col-md-3 col-lg-2 d-md-block bg-dark sidebar" />
        <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
          <HeaderComponent v-if="shouldShowNavbar" />
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

export default {
  name: 'App',
  components: {
    NavbarComponent,
    SidebarComponent,
  },
  computed: {
    shouldShowNavbar() {
      const routeExists = this.$router.options.routes.some(route => route.path === this.$route.path);
      return routeExists && this.$route.path !== '/login' && this.$route.path !== '/register';
    },
    isAuthRoute() {
      const routePath = this.$route.path;
      return routePath === '/login' || routePath === '/register';
    },
    isExistingRoute() {
      // Lista de rutas donde se debe mostrar la barra de navegación
      const allowedRoutes = ['/', '/evento', '/projects', '/roles', '/usuarios', '/usuarios/crear', '/usuarios/editar/:id', '/personal/crear', '/personal/editar/:id', '/personal', '/eventos', '/eventos/crear', '/eventos/editar/:id', '/eventos/opciones', '/participantes', '/participantes/crear', '/participantes/editar/:id', '/patrocinadores', '/patrocinadores/crear', '/patrocinadores/editar/:id', '/tickets', '/tickets/crear', '/tickets/editar/:id', '/pagina-gestion', '/pagina/:id'];

      // Verifica si la ruta actual está en la lista de rutas permitidas
      const isAllowedRoute = allowedRoutes.includes(this.$route.path);

      return isAllowedRoute;
    }
  }
};
</script>

<style>
.router-pag {
  padding-left: 0;
}

.existing-route {
  padding-left: 280px;
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
</style>
