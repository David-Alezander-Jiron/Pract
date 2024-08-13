<template>
  <div id="app">
    <!-- Mostrar NavbarComponent solo si no estamos en las rutas de login, registro o una ruta inexistente -->
    <NavbarComponent v-if="shouldShowNavbar" />

    <div class="container-fluid">
      <div class="row">
        <!-- Mostrar SidebarComponent y HeaderComponent solo si no estamos en las rutas de login, registro o una ruta inexistente -->
        <SidebarComponent v-if="shouldShowNavbar" class="col-md-3 col-lg-2 sidebar" />
        <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
          <HeaderComponent v-if="shouldShowNavbar" />
        </main>
      </div>
    </div>
  </div>

  <div class="router-pag" :class="{ 'existing-route': isExistingRoute }">
    <!-- Solo mostrar el router-view en las rutas de login o registro -->
    <router-view v-if="isAuthRoute" />
    <router-view v-else />
  </div>
</template>

<script>
import NavbarComponent from './components/NavbarComponent.vue';
import SidebarComponent from './components/SidebarComponent.vue';

import { allowedRoutes } from './router';

export default {
  name: 'App',
  components: {
    NavbarComponent,
    SidebarComponent,
  },
  computed: {
    shouldShowNavbar() {
      return allowedRoutes.includes(this.$route.path);
    },
    isAuthRoute() {
      const routePath = this.$route.path;
      return routePath === '/login' || routePath === '/register';
    },
    isExistingRoute() {
      return allowedRoutes.includes(this.$route.path);
    }
  }
};
</script>

<style>
.router-pag {
  padding-left: 0;
}

.existing-route {
  padding-left: 0; /* Elimina padding izquierdo en rutas existentes */
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
  background-color: transparent; /* Fondo transparente */
}

.main-content {
  padding: 0; /* Elimina padding extra */
}

.content {
  padding: 20px;
  background-color: transparent; /* Fondo transparente */
  min-height: calc(100vh - 80px);
}
</style>
