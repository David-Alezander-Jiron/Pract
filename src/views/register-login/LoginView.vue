<template>
  <div class="login-container animated fadeIn">
    <div class="login-content">
      <img src="@/assets/logopra.png" alt="EventTix Logo" class="logo-img">
      <div class="login-box">
        <h1 class="animated fadeInDown">EventTix</h1>
        <form @submit.prevent="login">
          <div class="input-group animated fadeInLeft">
            <input type="text" v-model="username" placeholder="Correo" required />
          </div>
          <div class="input-group animated fadeInRight">
            <input type="password" v-model="password" placeholder="Contraseña" required />
          </div>
          <div class="input-group remember-me animated fadeInLeft">
            <input type="checkbox" id="rememberMe" v-model="rememberMe" />
            <label for="rememberMe">Recordar usuario</label>
          </div>
          <button type="submit" class="animated pulse">Iniciar sesión</button>
        </form>
        <router-link to="/register" class="animated fadeInUp">¿No tienes cuenta? Regístrate</router-link>
      </div>
    </div>
  </div>
</template>


<style scoped>
/* Estilos adicionales si es necesario */
@import url('https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css');

.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  position: relative;
}

.login-content {
  display: flex;
  align-items: center;
  background: rgba(255, 255, 255, 0.85);
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
  max-width: 800px;
  width: 100%;
}

.logo-img {
  max-width: 200px; /* Hacer el logo un poco más pequeño */
  height: auto;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  margin-right: 2rem;
}

.login-box {
  flex-grow: 1;
  text-align: center;
}

h1 {
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  color: #333;
}

.input-group {
  margin-bottom: 1rem;
  text-align: left;
}

.input-group input {
  display: block;
  width: 100%;
  padding: 0.75rem;
  background-color: #495057;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 1rem;
  color: #fff;
  box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.1);
}

button {
  width: 100%;
  padding: 0.75rem;
  background-color: #00bfa5;
  color: #fff;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;
}

button:hover {
  background-color: #009e8e;
  transform: translateY(-2px);
}

button:focus {
  outline: none;
  box-shadow: 0 0 5px rgba(0, 191, 165, 0.5);
}

.router-link {
  color: #007bff;
  text-decoration: none;
  display: block;
  margin-top: 1rem;
}

.router-link:hover {
  text-decoration: underline;
}
</style>


<script>
import Swal from 'sweetalert2';
import instance from '@/pluggins/axios'; // Asegúrate de que la ruta sea correcta

export default {
  name: 'newLogin',
  data() {
    return {
      username: '',
      password: '',
      rememberMe: false,
      error: false,
      errorMessage: ''
    };
  },
  methods: {
    async login() {
      try {
        // Obtener el token CSRF
        const csrfResponse = await instance.get('/');
        const csrfToken = csrfResponse.data.csrfToken;

        // Enviar la solicitud de login
        const response = await instance.post('/login', {
          correo: this.username,
          contrasena: this.password
        }, {
          headers: {
            'X-CSRF-Token': csrfToken
          }
        });

        // Guardar el token de autenticación en localStorage
        localStorage.setItem('authToken', response.data.token);

        Swal.fire({
          icon: 'success',
          title: response.data.message,
          showConfirmButton: false,
          timer: 1500
        });

        // Redirigir si la autenticación es exitosa
        this.$router.push(response.data.redirect || '/');
      } catch (error) {
        this.error = true;
        this.errorMessage = 'Correo o contraseña incorrecto'; // Mensaje de error personalizado

        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: this.errorMessage,
          confirmButtonText: 'Aceptar'
        });
      }
    }
  }
}
</script>
