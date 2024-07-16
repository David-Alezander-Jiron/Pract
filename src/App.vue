<template>
  <div id="app">
    <!-- Mostrar NavbarComponent solo si no estamos en las rutas de login o registro -->
    <NavbarComponent v-if="$route.path !== '/login' && $route.path !== '/register'" />

    <div class="container-fluid">
      <div class="row">
        <!-- Mostrar SidebarComponent y HeaderComponent solo si no estamos en las rutas de login o registro -->
        <SidebarComponent v-if="$route.path !== '/login' && $route.path !== '/register'" class="col-md-3 col-lg-2 d-md-block bg-dark sidebar"/>
        <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
          <HeaderComponent v-if="$route.path !== '/login' && $route.path !== '/register'" />

          <!-- Solo mostrar el router-view en las rutas de login o registro -->
          <router-view v-if="$route.path === '/login' || $route.path === '/register'" />

          <!-- En otras rutas, muestra el router-view normalmente -->
          <router-view v-else />
        </main>
      </div>
    </div>
  </div>
</template>

<script>
import NavbarComponent from './components/NavbarComponent.vue';
import SidebarComponent from './components/SidebarComponent.vue';
import HeaderComponent from './components/HeaderComponent.vue';

export default {
  name: 'App',
  components: {
    NavbarComponent,
    SidebarComponent,
    HeaderComponent
  }
};
</script>

<style>
.container-fluid {
  padding: 0;
}

.sidebar {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  z-index: 100;
  padding: 48px 0 0; /* Ajuste para que no se superponga con el header */
}

.main-content {
  margin-top: 56px; /* Ajuste para que no se superponga con el header */
  padding: 20px;
}

.content {
  padding: 20px;
  background-color: #f8f9fa;
  min-height: calc(100vh - 80px); /* Ajusta la altura del contenido para que no se superponga con el header */
}
</style>
