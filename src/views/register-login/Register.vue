<template>
  <div class="register-container animated fadeIn">
    <div class="register-content">
      <img src="@/assets/logopra.png" alt="EventTix Logo" class="logo-img animated bounceIn">
      <div class="register-box">
      
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
      <div class="modal-content modal-scrollable" @click.stop>
        <h2>Términos y Condiciones</h2>
        <p> 1. Introducción</p>
        <p>Bienvenido a EventosXYZ, una plataforma dedicada a la venta y creación de eventos.</p>
        <p> 2. Definiciones</p>
        <ul>
          <li>"Patrocinadores": Aquellos que financian nuestros eventos.</li>
          <li>"Participantes": Aquellos que asisten a nuestros eventos.</li>
          <li>"Personal de Servicio": Aquellos que proporcionan servicios en nuestros eventos.</li>
          <li>"Tickets": Las entradas vendidas para nuestros eventos.</li>
        </ul>
        <p> 3. Condiciones de Uso</p>
        <p>Al utilizar EventosXYZ, aceptas cumplir con estos términos y condiciones.</p>
        <p> 4. Registro y Cuentas de Usuario</p>
        <p>Para comprar tickets o participar en nuestros eventos, debes registrarte y crear una cuenta.</p>
        <p> 5. Patrocinadores</p>
        <p>Los patrocinadores deben firmar un acuerdo de patrocinio y cumplir con sus obligaciones según ese acuerdo.
        </p>
        <p> 6. Participantes</p>
        <p>Los participantes deben comportarse de manera respetuosa y segura durante nuestros eventos.</p>
        <p> 7. Personal de Servicio</p>
        <p>El personal de servicio debe cumplir con sus obligaciones laborales y seguir todas las políticas de seguridad
          y salud.</p>
        <p> 8. Venta de Tickets</p>
        <p>Los tickets se venden en un primer llegado, primer servido. No ofrecemos reembolsos a menos que el evento sea
          cancelado.</p>
        <p> 9. Política de Privacidad</p>
        <p>Por favor, consulta nuestra Política de Privacidad para obtener información sobre cómo recopilamos y
          utilizamos tus datos.</p>
        <p> 10. Limitación de Responsabilidad</p>
        <p>EventosXYZ no se hace responsable de ningún daño o pérdida que puedas sufrir como resultado de utilizar
          nuestra plataforma, a menos que dicho daño o pérdida sea causado por nuestra negligencia.</p>
        <p> 11. Ley Aplicable</p>
        <p>Estos términos y condiciones están regidos por las leyes de Ecuador.</p>
        <p> 12. Contacto</p>
        <p>Si tienes alguna pregunta sobre estos términos y condiciones, por favor contáctanos a info@eventosxyz.com.
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
  padding: 1rem;
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
  text-align: center;
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
  z-index: 1000;
  overflow: auto;
}

.modal-content {
  background: #ffffff;
  padding: 2rem;
  border-radius: 12px;
  max-width: 600px;
  width: 90%;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
  position: relative;
  z-index: 1001;
}

.modal-scrollable {
  max-height: 80vh;
  overflow-y: auto;
}

.modal-content h2 {
  margin-top: 0;
  font-size: 1.5rem;
  color: #333;
}

.modal-content p {
  margin-bottom: 1rem;
  color: #666;
  line-height: 1.5;
}

.btn {
  padding: 0.75rem 1.5rem;
  background-color: #00bfa5;
  color: #fff;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin-top: 1rem;
}

.btn-secondary {
  background-color: #777;
}

.btn-secondary:hover {
  background-color: #555;
}

.success-img {
  max-width: 100px;
  height: auto;
  margin-bottom: 1rem;
}

/* Estilos para pantallas grandes */
@media (min-width: 768px) {
  .register-content {
    flex-direction: row;
    text-align: left;
  }
  .logo-img {
    display: block;
    margin-right: 2rem;
  }
}

/* Estilos para pantallas pequeñas */
@media (max-width: 767px) {
  .register-content {
    flex-direction: column;
    text-align: center;
  }
  .logo-img {
    display: none;
  }
}

</style>