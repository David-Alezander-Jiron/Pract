<template>
  <div class="login-container">
    <div class="login-content">
      <div class="logo-container">
        <img src="@/assets/logopra.png" alt="EventTix Logo" class="logo-img">
      </div>
      <div class="login-box">
        <h1>EventTix</h1>
        <form @submit.prevent="login">
          <div class="input-group">
            <input type="text" v-model="username" placeholder="Correo" required />
          </div>
          <div class="input-group">
            <input type="password" v-model="password" placeholder="Contraseña" required />
          </div>
          <div class="input-group remember-me">
            <input type="checkbox" id="rememberMe" v-model="rememberMe" />
            <label for="rememberMe">Recordar usuario</label>
          </div>
          <button type="submit">Iniciar sesión</button>
        </form>
        <router-link to="/register">¿No tienes cuenta? Regístrate</router-link>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import url('https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css');

* {
  box-sizing: border-box;
}

.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  background-color: #f7f7f7;
}

.login-content {
  display: flex;
  flex-direction: row;
  align-items: center;
  background: #ffffff;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  max-width: 900px;
  width: 100%;
}

.logo-container {
  background-color: #f7f7f7;
  padding: 1rem;
  border-radius: 12px;
  margin-right: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
}

.logo-img {
  max-width: 100%;
  height: auto;
}

.login-box {
  width: 100%;
  text-align: center;
}

h1 {
  font-size: 2rem;
  margin-bottom: 2rem;
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
  margin-bottom: 1rem;
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
}

.router-link:hover {
  text-decoration: underline;
}

@media (max-width: 768px) {
  .login-content {
    flex-direction: column;
  }

  .logo-container {
    margin-right: 0;
    margin-bottom: 2rem;
    width: 70%;
  }

  .login-box {
    text-align: center;
  }
}
</style>

<script>
import Swal from 'sweetalert2';
import instance from '@/pluggins/axios';

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
        const csrfResponse = await instance.get('/');
        const csrfToken = csrfResponse.data.csrfToken;

        const response = await instance.post('/login', {
          correo: this.username,
          contrasena: this.password
        }, {
          headers: {
            'X-CSRF-Token': csrfToken
          }
        });

        localStorage.setItem('authToken', response.data.token);

        Swal.fire({
          icon: 'success',
          title: response.data.message,
          showConfirmButton: false,
          timer: 1500
        });

        this.$router.push(response.data.redirect || '/');
      } catch (error) {
        this.error = true;
        this.errorMessage = 'Correo o contraseña incorrecto';

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
