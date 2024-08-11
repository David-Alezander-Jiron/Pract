<template>
  <div class="container animated fadeIn">
    <div class="card">
      <div class="card-header">
        Agregar Nuevo Patrocinador
      </div>
      <div class="card-body">
        <form @submit.prevent="submitForm">
          <div class="form-group">
            <label for="nombre">Nombre del Patrocinador:</label>
            <input type="text" class="form-control" required v-model="patrocinador.nombre" id="nombre" placeholder="Nombre del Patrocinador">
          </div>
          <div class="form-group">
            <label for="descripcion">Descripción:</label>
            <textarea class="form-control" required v-model="patrocinador.descripcion" id="descripcion" rows="3" placeholder="Descripción del Patrocinador"></textarea>
          </div>
          <div class="form-group">
            <label for="contacto">Contacto:</label>
            <input type="text" class="form-control" required v-model="patrocinador.contacto" id="contacto" placeholder="Contacto del Patrocinador">
          </div>
          <div class="btn-group" role="group" aria-label="">
            <button type="submit" class="btn btn-success animated pulse">Agregar Patrocinador</button>
            <router-link to="/patrocinadores" class="btn btn-warning animated pulse">Cancelar</router-link>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>


<style scoped>
/* Estilos adicionales si es necesario */
@import url('https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css');

.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background-color: #fff;
  border-radius: 10px; /* Bordes más redondeados */
  box-shadow: 0 4px 8px rgba(0,0,0,0.2); /* Sombra más profunda */
  margin-top: 30px;
}

.card-header {
  background-color: #f8f9fa;
  font-size: 1.25rem;
  font-weight: bold;
}

.card-body {
  padding: 20px;
}

.btn-success {
  background-color: #28a745;
  border-color: #28a745;
  color: #fff;
}

.btn-success:hover {
  background-color: #218838;
  border-color: #1e7e34;
  color: #fff;
}

.btn-warning {
  background-color: #ffc107;
  border-color: #ffc107;
  color: #212529;
}

.btn-warning:hover {
  background-color: #d39e00;
  border-color: #c69500;
  color: #212529;
}
</style>


<script>
import Swal from 'sweetalert2';
import instance from '@/pluggins/axios'; // Asegúrate de que la ruta sea correcta

export default {
  name: 'CrearPatrocinador',
  data() {
    return {
      patrocinador: {
        nombre: '',
        descripcion: '',
        contacto: '',
        estado: 'activo',
      },
      csrfToken: ''
    };
  },
  async mounted() {
    try {
      // Obtén el token CSRF del backend
      const response = await instance.get('/');
      this.csrfToken = response.data.csrfToken;
      // Configura el token CSRF en Axios
      instance.defaults.headers['X-CSRF-Token'] = this.csrfToken;
    } catch (error) {
      console.error('Error al obtener el token CSRF:', error);
    }
  },
  methods: {
    async submitForm() {
      try {
        await instance.post('/patrocinadores', this.patrocinador, {
          headers: {
            'X-CSRF-Token': this.csrfToken // Asegúrate de que este valor sea correcto
          }
        });
        this.$router.push('/patrocinadores');
      } catch (error) {
        console.error('Error al guardar el patrocinador:', error);
        const message = error.response && error.response.data && error.response.data.message
          ? error.response.data.message
          : 'No se pudo guardar el patrocinador.';

        Swal.fire({
          icon: 'error',
          title: 'Error al guardar el patrocinador',
          text: message
        });
      }
    }
  }
};
</script>

