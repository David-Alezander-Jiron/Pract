<template>
  <div class="register-container animated fadeIn">
    <div class="register-content">
      <img src="@/assets/logopra.png" alt="EventTix Logo" class="logo-img animated bounceIn">
      <div class="register-box">
        <h1 class="animated fadeInDown">EvenTix</h1>
        <form @submit.prevent="registro">
          <div class="input-group animated fadeInLeft">
            <label for="nombres">Nombres:</label>
            <input type="text" id="nombres" v-model="nombres" placeholder="Nombres" required />
          </div>
          <div class="input-group animated fadeInRight">
            <label for="apellidos">Apellidos:</label>
            <input type="text" id="apellidos" v-model="apellidos" placeholder="Apellidos" required />
          </div>
          <div class="input-group animated fadeInLeft">
            <label for="correo">Correo:</label>
            <input type="email" id="correo" v-model="correo" placeholder="Correo" required />
          </div>
          <div class="input-group animated fadeInRight">
            <label for="contrasena">Contraseña:</label>
            <input type="password" id="contrasena" v-model="contrasena" placeholder="Contraseña" required
              pattern=".{8,16}" title="La contraseña debe tener entre 8 y 16 caracteres" />
          </div>
          <div class="input-group animated fadeInLeft">
            <label for="telefono">Teléfono:</label>
            <input type="text" id="telefono" v-model="telefono" placeholder="Teléfono" required pattern="09\d{8}"
              title="El teléfono debe tener 10 dígitos y comenzar con 09" />
          </div>
          <div class="input-group animated fadeInRight">
            <label for="accept-terms" class="checkbox-label">
              <input type="checkbox" id="accept-terms" v-model="acceptTerms" required />
              Acepto los <a href="#" @click.prevent="showTermsModal = true">términos y condiciones</a>
            </label>
          </div>
          <div class="input-group animated fadeInLeft">
            <label for="accept-data-sharing" class="checkbox-label">
              <input type="checkbox" id="accept-data-sharing" v-model="acceptDataSharing" />
              Acepto compartir mis datos para recibir información sobre esta página
            </label>
          </div>
          <input type="hidden" v-model="estado" value="activo" />
          <button type="submit" :disabled="!acceptTerms" class="animated pulse">Registrarse</button>
        </form>
        <router-link to="/login" class="animated fadeInUp">¿Ya tienes una cuenta? Inicia sesión</router-link>
      </div>
    </div>

    <!-- Modal para Términos y Condiciones -->
    <div v-if="showTermsModal" class="modal-overlay" @click="showTermsModal = false">
      <div class="modal-content" @click.stop>
        <h2>Términos y Condiciones</h2>
        <p>
          Términos y Condiciones
        </p>
        <button @click="showTermsModal = false" class="btn btn-secondary">Cerrar</button>
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
import instance from '@/pluggins/axios'; // Asegúrate de que la ruta sea correcta
import Swal from 'sweetalert2';
export default {
  name: 'newRegistro',
  data() {
    return {
      nombres: '',
      apellidos: '',
      correo: '',
      contrasena: '',
      telefono: '',
      estado: 'activo',
      acceptTerms: false,
      acceptDataSharing: false,
      showTermsModal: false,
      showSuccessModal: false,
    };
  },
  methods: {
    async registro() {
      try {
        const csrfToken = await this.obtenerCsrfToken(); // Obtén el token CSRF
        const response = await instance.post('/Register', {
          nombres: this.nombres,
          apellidos: this.apellidos,
          correo: this.correo,
          contrasena: this.contrasena,
          telefono: this.telefono,
          estado: this.estado,
          acceptDataSharing: this.acceptDataSharing // Incluye la aceptación del uso de datos si está marcada
        }, {
          headers: {
            'X-CSRF-Token': csrfToken // Incluye el token CSRF en el header
          }
        });

        if (response.data.redirect) {
          this.$router.push(response.data.redirect);
        }

        Swal.fire({
          icon: 'success',
          title: response.data.message,
          showConfirmButton: false,
          timer: 1500
        });
      } catch (error) {
        Swal.fire({
          icon: 'error',
          title: 'Error al registrar',
          text: error.response ? error.response.data.message : error.message,
        });
      }
    },
    redirectToLogin() {
      this.showSuccessModal = false;
      this.$router.push('/login');
    },
    async obtenerCsrfToken() {
      try {
        const response = await instance.get("/"); // Endpoint para obtener el token CSRF
        return response.data.csrfToken;
      } catch (error) {
        console.error('Error al obtener el token CSRF:', error.message);
        throw new Error('No se pudo obtener el token CSRF');
      }
    }
  }
}
</script>

<style scoped>
@import url('https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css');

* {
  box-sizing: border-box;
}

.checkbox-label {
  display: flex;
  align-items: center;
}

.checkbox-label input[type="checkbox"] {
  margin-right: 0.5rem;
}

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
  background-color: #ffffff;
  overflow: auto;
  max-height: 100vh;
}

.register-content {
  display: flex;
  align-items: center;
  background: rgba(255, 255, 255, 0.85);
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
  max-width: 800px;
  width: 100%;
  flex-direction: row;
}

.logo-img {
  max-width: 200px;
  height: auto;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  margin-right: 2rem;
}

.register-box {
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

.input-group label {
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
  max-width: 400px;
  width: 100%;
  overflow: auto;
}

.success-img {
  max-width: 100px;
  margin-bottom: 1rem;
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

@media (max-width: 768px) {
  .register-content {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .logo-img {
    display: none;
    /* Ocultar el logo en pantallas pequeñas */
  }
}
</style>
