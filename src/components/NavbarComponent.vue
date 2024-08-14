<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <a class="navbar-brand" href="/">EvenTix</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0 d-lg-none">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="/">Home</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Eventos
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="/eventos">lista de Eventos</a></li>
              <li><a class="dropdown-item" href="/eventos/crear">crear Evento</a></li>
              <li><hr class="dropdown-divider"></li>
              <li><a class="dropdown-item" href="/eventospersonal">Personal de Evento</a></li>
            </ul>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Administrador
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="/usuarios">Gestion de Usuarios</a></li>
              <li><a class="dropdown-item" href="/personal">Gestion de Personal</a></li>
              <li><a class="dropdown-item" href="/patrocinadores">Gestion de Patrocinadores</a></li>
              <li><a class="dropdown-item" href="/participantes">Gestion de Participantes</a></li>
              <li><a class="dropdown-item" href="/tickets">Gestion de Tickets</a></li>
            </ul>
          </li>
        </ul>
        <div class="d-flex">
          <a class="nav-link" href="#" @click.prevent="logout"><i class="fas fa-user-circle"></i> Cerrar sesión</a>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavbarComponent',
  methods: {
    logout() {
      // Elimina el token de autenticación u otros datos del usuario
      localStorage.removeItem('authToken');
      
      // Redirige al usuario a la página de login
      this.$router.push('/login');
    }
  }
};
</script>

<style scoped>
/* Ocultar el navbar completo excepto "Cerrar sesión" en pantallas grandes */
.navbar-nav {
  display: none;
}

.navbar .d-flex {
  margin-left: auto;
}

@media (max-width: 992px) {
  /* Mostrar el navbar completo en pantallas pequeñas */
  .navbar-nav {
    display: block;
  }
}
</style>
