<template>
  <div class="login-container">
    <div class="login-content">
      <img src="@/assets/logopra.png" alt="EventTix Logo" class="logo-img">
      <div class="login-box">
        <h1>EventTix</h1>
        <form  v-on:submit.prevent="login">
          <div class="form-group">
            <label for="correo">Correo:</label>
            <input type="email" class="form-control" id="correo" v-model="usuario.correo" required>
          </div>
          <div class="form-group">
            <label for="contraseña">Contraseña:</label>
            <input type="password" class="form-control" id="contraseña" v-model="usuario.contrasena" required>
          </div>
          <button type="submit" class="btn btn-primary">Login</button>

        </form>
        <router-link to="/register">No tienes Cuenta</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'LoginNew',
  data() {
    return {
      usuario: {
        correo: '',
        contrasena: ''
      }
    };
  },
  methods: {
    async login() {
      try {
        const response = await axios.post('http://localhost:3000/login', this.usuario);
        if (response.data.token) {
          localStorage.setItem('token', response.data.token);
          this.$router.push('/');
        } else{
          this.$router.push('/');
        }
      } catch (error) {
        console.error(error);
      }
    }
  }
};
</script>

<style scoped>
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 1560px;
  background-image: url(@/assets/fondoticket.jpg);
  background-size: cover; /* Ajusta el tamaño para cubrir toda el área */
  background-repeat: no-repeat; /* Evita que la imagen se repita */
  background-position: center; /* Centra la imagen */
  position: relative;
  right: 300px;
}

.login-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.8); /* Fondo semi-transparente */
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
  text-align: center;
  width: 500px;
  margin: 0 auto;
}

.logo-img {
  max-width: 200px;
  height: auto;
  margin-bottom: 2rem;
}

.login-box {
  width: 100%;
  position: relative;
}

h1 {
  font-size: 2rem;
  margin-bottom: 1.5rem;
  color: #333;
  position: relative;
  margin-right: 190px;
}

.input-group {
  margin-bottom: 1rem;
}

input[type="email"],
input[type="password"] {
  width: 100%;
  padding: 0.75rem;
  background-color: #f0f0f0;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1rem;
  color: #333;
}

.remember-me {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
}

.remember-me input {
  margin-right: 0.5rem;
}

.remember-me label {
  font-size: 0.9rem;
  color: #666;
}

button {
  width: 100%;
  padding: 0.75rem;
  background-color: #00bfa5;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #009e8e;
}

button:focus {
  outline: none;
  box-shadow: 0 0 5px rgba(0, 191, 165, 0.5);
}

.router-link {
  color: #007bff;
  text-decoration: none;
}

.router-link:hover {
  text-decoration: underline;
}
</style>
