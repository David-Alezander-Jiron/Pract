<template>
  <div class="login-container animated fadeIn">
    <div class="login-content animated fadeInDown">
      <div class="logo-container">
        <img src="@/assets/logopra.png" alt="EventTix Logo" class="logo-img animated bounceIn" />
      </div>
      <div class="login-box animated fadeInUp">
        <h1>EventTix</h1>
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
          <button type="submit" class="btn animated pulse">Iniciar sesión</button>
        </form>
        <router-link to="/register" class="register-link animated fadeInUp">¿No tienes cuenta? Regístrate</router-link>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500&display=swap');
@import url('https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css');

.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: linear-gradient(45deg, #f3ec78, #af4261);
  font-family: 'Roboto', sans-serif;
}

.login-content {
  background: #fff;
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 420px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.logo-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.logo-img {
  width: 70%;
  max-width: 150px;
}

.login-box {
  width: 100%;
  text-align: center;
}

h1 {
  font-weight: 500;
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 1rem;
}

.input-group {
  width: 100%;
  margin-bottom: 1rem;
}

.input-group input {
  width: 100%;
  padding: 0.75rem;
  border: none;
  border-radius: 0.5rem;
  background: #eee;
  font-size: 1rem;
  color: #333;
}

.remember-me {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 1rem;
}

.remember-me input {
  margin-right: 0.5rem;
}

.btn {
  width: 100%;
  padding: 0.75rem;
  border: none;
  border-radius: 0.5rem;
  background: #af4261;
  color: #fff;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.5s;
}

.btn:hover {
  background: #f3ec78;
  color: #333;
}

.register-link {
  color: #333;
  text-decoration: none;
  margin-top: 1rem;
  font-size: 0.875rem;
}

.register-link:hover {
  text-decoration: underline;
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
