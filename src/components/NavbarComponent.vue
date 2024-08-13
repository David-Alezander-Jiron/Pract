<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <router-link to="/" class="navbar-brand"></router-link>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav ml-auto">
        <li class="nav-item">
          <a class="nav-link" href="#"><i class="fas fa-bell"></i></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#" @click.prevent="logout"><i class="fas fa-user-circle"></i> Cerrar sesión</a>
        </li>
      </ul>
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
