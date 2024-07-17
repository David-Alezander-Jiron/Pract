<template>
  <div class="login-container">
    <div class="login-content">
      <img src="@/assets/logopra.png" alt="EventTix Logo" class="logo-img">
      <div class="login-box">
        <h1>EventTix</h1>
        <form>
          <div class="form-group">
            <label for="correo">Email Addres:</label>
            <input type="email" class="form-control" id="correo" required>
          </div>
          <div class="form-group">
            <label for="contraseña">Password:</label>
            <input type="password" class="form-control" id="contraseña" required>
          </div>
          <a href="/" class="btn btn-primary" style="background-color: #00ACAC; border-color: #00ACAC;">Sign me in</a>
        </form>
        <router-link to="/register">No tienes Cuenta?</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoginNew',
};
</script>

<style scoped>
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
  max-width: 300px;
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

.form-group {
  margin-bottom: 1rem;
  text-align: left;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: bold;
}

input[type="email"],
input[type="password"] {
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
