<template>
  <div class="register-container animated fadeIn">
    <div class="register-content animated fadeInDown">
      <img src="@/assets/logopra.png" alt="EventTix Logo" class="logo-img animated bounceIn">
      <div class="register-box animated fadeInUp">
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
          <button type="submit" :disabled="!acceptTerms" class="animated pulse btn">Registrarse</button>
        </form>
        <router-link to="/login" class="animated fadeInUp register-link">¿Ya tienes una cuenta? Inicia sesión</router-link>
      </div>
    </div>

    <!-- Modal para Términos y Condiciones -->
    <div v-if="showTermsModal" class="modal-overlay animated fadeIn" @click="showTermsModal = false">
      <div class="modal-content animated bounceIn" @click.stop>
        <h2>Términos y Condiciones</h2>
        <div class="terms-content">
          <p># Términos y Condiciones</p>
          <p>## 1. Introducción</p>
          <p>Bienvenido a EventosXYZ, una plataforma dedicada a la venta y creación de eventos.</p>
          <p>## 2. Definiciones</p>
          <ul>
            <li>"Patrocinadores": Aquellos que financian nuestros eventos.</li>
            <li>"Participantes": Aquellos que asisten a nuestros eventos.</li>
            <li>"Personal de Servicio": Aquellos que proporcionan servicios en nuestros eventos.</li>
            <li>"Tickets": Las entradas vendidas para nuestros eventos.</li>
          </ul>
          <p>## 3. Condiciones de Uso</p>
          <p>Al utilizar EventosXYZ, aceptas cumplir con estos términos y condiciones.</p>
          <p>## 4. Registro y Cuentas de Usuario</p>
          <p>Para comprar tickets o participar en nuestros eventos, debes registrarte y crear una cuenta.</p>
          <p>## 5. Patrocinadores</p>
          <p>Los patrocinadores deben firmar un acuerdo de patrocinio y cumplir con sus obligaciones según ese acuerdo.</p>
          <p>## 6. Participantes</p>
          <p>Los participantes deben comportarse de manera respetuosa y segura durante nuestros eventos.</p>
          <p>## 7. Personal de Servicio</p>
          <p>El personal de servicio debe cumplir con sus obligaciones laborales y seguir todas las políticas de seguridad y salud.</p>
          <p>## 8. Venta de Tickets</p>
          <p>Los tickets se venden en un primer llegado, primer servido. No ofrecemos reembolsos a menos que el evento sea cancelado.</p>
          <p>## 9. Política de Privacidad</p>
          <p>Por favor, consulta nuestra Política de Privacidad para obtener información sobre cómo recopilamos y utilizamos tus datos.</p>
          <p>## 10. Limitación de Responsabilidad</p>
          <p>EventosXYZ no se hace responsable de ningún daño o pérdida que puedas sufrir como resultado de utilizar nuestra plataforma, a menos que dicho daño o pérdida sea causado por nuestra negligencia.</p>
          <p>## 11. Ley Aplicable</p>
          <p>Estos términos y condiciones están regidos por las leyes de Ecuador.</p>
          <p>## 12. Contacto</p>
          <p>Si tienes alguna pregunta sobre estos términos y condiciones, por favor contáctanos a info@eventosxyz.com.</p>
        </div>
        <button @click="showTermsModal = false" class="btn btn-secondary">Cerrar</button>
      </div>
    </div>

    <div v-if="showSuccessModal" class="modal-overlay animated fadeIn">
      <div class="modal-content animated bounceIn">
        <img src="@/assets/visto.png" alt="Success" class="success-img">
        <h2>Registro exitoso</h2>
        <button @click="redirectToLogin" class="btn btn-secondary">Aceptar</button>
      </div>
    </div>
  </div>
</template>

<script>
import instance from '@/pluggins/axios';
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
        const csrfToken = await this.obtenerCsrfToken();
        const response = await instance.post('/Register', {
          nombres: this.nombres,
          apellidos: this.apellidos,
          correo: this.correo,
          contrasena: this.contrasena,
          telefono: this.telefono,
          estado: this.estado,
          acceptDataSharing: this.acceptDataSharing
        }, {
          headers: {
            'X-CSRF-Token': csrfToken
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
        const response = await instance.get("/");
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
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500&display=swap');
@import url('https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css');

.register-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh; /* Asegura que el contenedor ocupe el 100% de la altura de la ventana */
  background: linear-gradient(45deg, #f3ec78, #af4261);
  font-family: 'Roboto', sans-serif;
}

.register-content {
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

.logo-img {
  width: 70%;
}

.register-box {
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
  border: none;
  border-radius: 0.5rem;
  background: #eee;
  font-size: 1rem;
  color: #333;
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
  color: #af4261;
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

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal-content {
  background: #fff;
  padding: 2rem;
  border-radius: 10px;
  width: 90%;
  max-width: 600px;
  position: relative;
}

.modal-content h2 {
  margin-bottom: 1rem;
  color: #af4261;
}

.terms-content {
  max-height: 300px;
  overflow-y: auto;
  margin-bottom: 1rem;
  text-align: left;
  font-size: 0.9rem;
}

.success-img {
  width: 50px;
  margin-bottom: 1rem;
}

@media (min-width: 768px) {
  .register-container {
    padding: 40px;
  }
  .logo-img {
    width: 50%;
  }
  .modal-content {
    width: 70%;
    max-width: 600px;
  }
}
</style>
