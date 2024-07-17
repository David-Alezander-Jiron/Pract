<template>
  <div class="register-container">
    <div class="register-content">
      <img src="@/assets/logopra.png" alt="EventTix Logo" class="logo-img">
      <div class="register-box">
        <h1>EventTix</h1>
        <form @submit.prevent="handleSubmit">
          <div class="form-group">
            <div class="name-container">
              <div class="name-group">
                <label for="nombres">Nombres:</label>
                <input type="text" class="form-control" id="nombres" placeholder="Nombres" required>
              </div>
              <div class="name-group">
                <label for="apellidos">Apellidos:</label>
                <input type="text" class="form-control" id="apellidos" placeholder="Apellidos" required>
              </div>
            </div>
          </div>
          <div class="form-group">
            <label for="correo">Correo:</label>
            <input type="email" class="form-control" id="correo" placeholder="Correo" required>
          </div>
          <div class="form-group">
            <label for="telefono">Teléfono:</label>
            <input type="text" class="form-control" id="telefono" placeholder="Teléfono" required>
          </div>
          <div class="form-group">
            <label for="contraseña">Contraseña:</label>
            <input type="password" class="form-control" id="contrasena" placeholder="Contraseña" required>
          </div>
          <div class="form-group">
            <input type="checkbox" id="terms" v-model="accepted">
            <label for="terms">
              Al hacer clic en Registrarse, acepta nuestros <a href="#">Términos</a> y que ha leído nuestra <a href="#">Política de datos</a>, incluido nuestro <a href="#">Uso de cookies</a>.
            </label>
          </div>
          <button type="submit" class="btn btn-primary" :disabled="!accepted">Registrar</button>
        </form>
        <router-link to="/login">¿Ya tienes una cuenta? Inicia sesión</router-link>
      </div>
    </div>

    <div v-if="showSuccessModal" class="modal-overlay">
      <div class="modal-content">
        <img src="@/assets/visto.png" alt="Success" class="success-img">
        <h2>Registro exitoso</h2>
        <button @click="redirectToLogin" class="btn btn-secondary">Aceptar</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RegisterV',
  data() {
    return {
      accepted: false,
      showSuccessModal: false
    };
  },
  methods: {
    handleSubmit() {
      this.showSuccessModal = true;
    },
    redirectToLogin() {
      this.$router.push('/login');
    }
  }
};
</script>

<style scoped>
.register-container {
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

.register-content {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.85);
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
  max-width: 800px;
  width: 100%;
  margin: 0 auto;
}

.logo-img {
  max-width: 300px;
  height: auto;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  margin-right: 2rem;
}

.register-box {
  width: 100%;
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

.name-container {
  display: flex;
  justify-content: space-between;
}

.name-group {
  flex: 1;
  margin-right: 10px; /* Añadir margen entre los campos si es necesario */
}

.name-group:last-child {
  margin-right: 0;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: bold;
}

input[type="text"],
input[type="email"],
input[type="password"],
select {
  width: 100%;
  padding: 0.75rem;
  background-color: #f9f9f9;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 1rem;
  color: #333;
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

button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
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

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content {
  background: #fff;
  padding: 2rem;
  border-radius: 12px;
  text-align: center;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
  max-width: 400px; /* Ajusta este valor según tus necesidades */
  width: 100%; /* Asegura que el ancho no exceda el máximo especificado */
}

.success-img {
  max-width: 100px;
  margin-bottom: 1rem;
  margin-left: 110px; /* Ajusta este valor según sea necesario */

}

.modal-content h2 {
  margin-bottom: 1rem;
  color: #00bfa5;
}

.btn-secondary {
  background-color: #00bfa5;
  color: white;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;
}

.btn-secondary:hover {
  background-color: #45a049;
  transform: translateY(-2px);
}
</style>
