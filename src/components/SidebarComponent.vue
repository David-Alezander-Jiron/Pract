<template>
  <div class="d-flex flex-column flex-shrink-0 p-3 bg-dark text-white vh-100 animated fadeIn" style="width: 280px;">
    <router-link to="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
      <span class="fs-4">EventTix</span>
    </router-link>
    <img src="@/assets/logopra.png" alt="EventTix Logo" class="sidebar-logo mb-3">
    <hr>
    <ul class="nav nav-pills flex-column mb-auto">
      <li class="nav-item">
        <router-link to="/" class="nav-link text-white d-flex align-items-center" active-class="active">
          <i class="fas fa-tachometer-alt me-2"></i> Dashboard
        </router-link>
      </li>
      <li>
        <router-link to="/roles" class="nav-link text-white d-flex align-items-center" active-class="active">
          <i class="fas fa-map-marker-alt me-2"></i> Roles
        </router-link>
      </li>
      <li class="nav-item">
        <a href="#" class="nav-link text-white d-flex align-items-center" @click="toggleDropdown('eventosDropdown')">
          <i class="fas fa-calendar-alt me-2"></i> Eventos
          <i :class="dropdowns.eventosDropdown ? 'fas fa-chevron-up ms-auto' : 'fas fa-chevron-down ms-auto'"></i>
        </a>
        <ul v-show="dropdowns.eventosDropdown" class="nav flex-column ms-3">
          <li class="nav-item">
            <router-link to="/eventos" class="nav-link text-white">Listado de Eventos</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/eventos/crear" class="nav-link text-white">Formulario de Eventos</router-link>
          </li>
        </ul>
      </li>
      <li class="nav-item">
        <a href="#" class="nav-link text-white d-flex align-items-center" @click="toggleDropdown('personalDropdown')">
          <i class="fas fa-calendar-alt me-2"></i> Personal
          <i :class="dropdowns.personalDropdown ? 'fas fa-chevron-up ms-auto' : 'fas fa-chevron-down ms-auto'"></i>
        </a>
        <ul v-show="dropdowns.personalDropdown" class="nav flex-column ms-3">
          <li class="nav-item">
            <router-link to="/personal" class="nav-link text-white">Listado de Personal</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/personal/crear" class="nav-link text-white">Formulario de Personal</router-link>
          </li>
        </ul>
      </li>
      <li class="nav-item">
        <a href="#" class="nav-link text-white d-flex align-items-center" @click="toggleDropdown('adminDropdown')">
          <i class="fas fa-user-cog me-2"></i> Administrador
          <i :class="dropdowns.adminDropdown ? 'fas fa-chevron-up ms-auto' : 'fas fa-chevron-down ms-auto'"></i>
        </a>
        <ul v-show="dropdowns.adminDropdown" class="nav flex-column ms-3">
          <li class="nav-item">
            <router-link to="/usuarios" class="nav-link text-white">Gestión de Usuarios</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/personal" class="nav-link text-white">Gestión de Personal</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/patrocinadores" class="nav-link text-white">Gestión de Patrocinadores</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/participantes" class="nav-link text-white">Gestión de Participantes</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/tickets" class="nav-link text-white">Gestión de Tickets</router-link>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>



<style scoped>
/* Estilos adicionales si es necesario */
@import url('https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css');

.nav-link {
  color: #ffffff;
}

.nav-link.active {
  background-color: #007bff;
}

.bg-dark {
  background-color: #343a40 !important;
}

.vh-100 {
  height: 100vh;
}

.dropdown-menu {
  background-color: #343a40 !important;
}

.sidebar-logo {
  display: block;
  max-width: 70%; /* Reducir el tamaño del logo */
  height: auto;
  margin: 0 auto 20px; /* Centrar el logo */
}
</style>




<script>
export default {
  name: 'SidebarMenu',
  data() {
    return {
      dropdowns: {
        eventosDropdown: false,
        adminDropdown: false,
        personalDropdown: false,
      },
    };
  },
  methods: {
    toggleDropdown(dropdown) {
      this.dropdowns[dropdown] = !this.dropdowns[dropdown];
    },
  },
};
</script>

