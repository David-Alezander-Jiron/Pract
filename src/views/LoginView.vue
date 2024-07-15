<template>
  <div class="login-container">
    <div class="login-content">
      <img src="@/assets/logopra.png" alt="EventTix Logo" class="logo-img">
      <div class="login-box">
        <h1>EventTix</h1>
        <form @submit.prevent="login">
          <div class="input-group">
            <input type="email" v-model="email" placeholder="Email Address" required />
          </div>
          <div class="input-group">
            <input type="password" v-model="password" placeholder="Password" required />
          </div>
          <div class="remember-me">
            <input type="checkbox" id="rememberMe" v-model="rememberMe" />
            <label for="rememberMe">Remember Me</label>
          </div>
          <button type="submit">Sign me in</button>
        </form>
        <router-link to="/">Go to Dashboard</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoginView',
  data() {
    return {
      email: '',
      password: '',
      rememberMe: false
    };
  },
  methods: {
    login() {
      // Lógica de inicio de sesión
      console.log("Email:", this.email);
      console.log("Password:", this.password);
      console.log("Remember Me:", this.rememberMe);

      // Redirigir al dashboard u otra página después del login
      this.$router.push('/');
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
