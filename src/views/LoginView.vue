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
  width: 1505px;
  background-image: url(@/assets/fondoticket.jpg);
  background-size: cover; /* Ajusta el tamaño para cubrir toda el área */
  background-repeat: no-repeat; /* Evita que la imagen se repita */
  background-position: center; /* Centra la imagen */
  position: relative;
  right: 230px;
  bottom: 20px;
}

.login-content {
  position: relative;
  right: 80px;
  display: flex;
  align-items: center;
  background: #ffffff;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
}

.logo-img {
  max-width: 200px;
  height: auto;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  margin-right: 20px;
}

.login-box {
  text-align: center;
  width: 500px;
}

h1 {
  margin-bottom: 2rem;
  font-size: 2rem;
  color: #333333;
}

.input-group {
  margin-bottom: 1rem;
  position: relative;
  right: 875px;
}

input[type="email"],
input[type="password"] {
  width: 100%;
  padding: 0.75rem;
  background: #f0f0f0;
  border: 1px solid #dcdcdc;
  border-radius: 5px;
  font-size: 1rem;
  color: #333333;
}

input[type="email"]::placeholder,
input[type="password"]::placeholder {
  color: #999999;
}

.input-group input:focus {
  outline: none;
  border-color: #00bfa5;
  box-shadow: 0 0 5px rgba(0, 191, 165, 0.3);
}

.remember-me {
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
}

.remember-me input {
  left: -10px;
  position: relative;
  
}

.remember-me label {
  font-size: 0.9rem;
  color: #666666;
}

button {
  background-color: #00bfa5;
  color: white;
  border: none;
  padding: 0.75rem;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  width: 100%;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #009e8e;
}

button:focus {
  outline: none;
  box-shadow: 0 0 5px rgba(0, 191, 165, 0.5);
}
</style>
