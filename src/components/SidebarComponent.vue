<template>
  <div>
    <button @click="toggleSidebar" class="hamburger-btn">
      <i :class="sidebarVisible ? 'fas fa-times' : 'fas fa-bars'"></i>
    </button>
    <div v-if="sidebarVisible" class="sidebar-container animated fadeIn">
      <router-link to="/" class="brand-link">
        <span class="brand-name">EventTix</span>
      </router-link>
      <img src="@/assets/logopra.png" alt="EventTix Logo" class="sidebar-logo">
      <hr>
      <ul class="nav nav-pills flex-column mb-auto">
        <li class="nav-item">
          <router-link to="/" class="nav-link" active-class="active">
            <i class="fas fa-tachometer-alt me-2"></i> Dashboard
          </router-link>
        </li>
        <li>
          <router-link to="/roles" class="nav-link" active-class="active">
            <i class="fas fa-cog me-2"></i> Roles
          </router-link>
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link" @click="toggleDropdown('eventosDropdown')">
            <i class="fas fa-calendar-alt me-2"></i> Eventos
            <i :class="dropdowns.eventosDropdown ? 'fas fa-chevron-up ms-auto' : 'fas fa-chevron-down ms-auto'"></i>
          </a>
          <ul v-show="dropdowns.eventosDropdown" class="nav flex-column ms-3">
            <li class="nav-item">
              <router-link to="/eventos" class="nav-link">Listado de Eventos</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/eventospersonal" class="nav-link">Personal de Eventos</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/eventos/crear" class="nav-link">Formulario de Eventos</router-link>
            </li>
          </ul>
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link" @click="toggleDropdown('personalDropdown')">
            <i class="fas fa-user me-2"></i> Personal
            <i :class="dropdowns.personalDropdown ? 'fas fa-chevron-up ms-auto' : 'fas fa-chevron-down ms-auto'"></i>
          </a>
          <ul v-show="dropdowns.personalDropdown" class="nav flex-column ms-3">
            <li class="nav-item">
              <router-link to="/personal" class="nav-link">Listado de Personal</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/personal/crear" class="nav-link">Formulario de Personal</router-link>
            </li>
          </ul>
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link" @click="toggleDropdown('adminDropdown')">
            <i class="fas fa-user-cog me-2"></i> Administrador
            <i :class="dropdowns.adminDropdown ? 'fas fa-chevron-up ms-auto' : 'fas fa-chevron-down ms-auto'"></i>
          </a>
          <ul v-show="dropdowns.adminDropdown" class="nav flex-column ms-3">
            <li class="nav-item">
              <router-link to="/usuarios" class="nav-link">Gestión de Usuarios</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/personal" class="nav-link">Gestión de Personal</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/patrocinadores" class="nav-link">Gestión de Patrocinadores</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/participantes" class="nav-link">Gestión de Participantes</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/tickets" class="nav-link">Gestión de Tickets</router-link>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
@import url('https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css');

.sidebar-container {
  display: flex;
  flex-direction: column;
  background-color: #343a40;
  color: #ffffff;
  width: 100%;
  max-width: 280px;
  padding: 1rem;
  min-height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
}

.brand-name{
  text-align: center;
  margin-left: 50px;
}
.hamburger-btn {
  position: fixed;
  top: 10px;
  left: 10px;
  background-color: #343a40; /* Color negro de fondo */
  border: none;
  color: white;
  font-size: 1.5rem;
  padding: 0.5rem; /* Ajusta el padding según sea necesario */
  border-radius: 0.25rem; /* Opcional: agregar bordes redondeados */
  z-index: 1100;
}

.hamburger-btn i {
  display: block; /* Asegúrate de que el ícono esté centrado */
}

.brand-link {
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  text-decoration: none;
  color: white;
}

.brand-name {
  font-size: 1.25rem;
}

.nav-link {
  color: #ffffff;
  display: flex;
  align-items: center;
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
}

.nav-link.active {
  background-color: #007bff;
}

.sidebar-logo {
  display: block;
  max-width: 70%;
  height: auto;
  margin: 0 auto 20px;
}

@media (max-width: 375px) {
  .sidebar-container {
    width: 100%;
    padding: 0.5rem;
  }
  
  .brand-name {
    font-size: 1rem;
  }

  .nav-link {
    padding: 0.25rem 0.5rem;
    font-size: 0.9rem;
  }

  .sidebar-logo {
    max-width: 50%;
    margin-bottom: 15px;
  }
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
      sidebarVisible: false,
    };
  },
  methods: {
    toggleDropdown(dropdown) {
      this.dropdowns[dropdown] = !this.dropdowns[dropdown];
    },
    toggleSidebar() {
      this.sidebarVisible = !this.sidebarVisible;
    },
  },
};
</script>
