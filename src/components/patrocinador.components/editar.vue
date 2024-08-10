<template>
  <div class="container">
    <div class="card">
      <div class="card-header">
        Editar Patrocinador
      </div>
      <div class="card-body">
        <form @submit.prevent="submitForm">
          <div class="form-group">
            <label for="nombre">Nombre del Patrocinador:</label>
            <input type="text" class="form-control" required v-model="patrocinador.nombre" id="nombre">
          </div>
          <div class="form-group">
            <label for="descripcion">Descripción:</label>
            <textarea class="form-control" required v-model="patrocinador.descripcion" id="descripcion" rows="3"></textarea>
          </div>
          <div class="form-group">
            <label for="contacto">Contacto:</label>
            <input type="text" class="form-control" required v-model="patrocinador.contacto" id="contacto">
          </div>
          <div class="btn-group" role="group" aria-label="">
            <button type="submit" class="btn btn-success">Guardar Cambios</button>
            <router-link to="/patrocinadores" class="btn btn-warning">Cancelar</router-link>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import Swal from 'sweetalert2';
import instance from '@/pluggins/axios'; // Asegúrate de que la ruta sea correcta

export default {
  name: 'EditarPatrocinador',
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

      // Cargar los datos del patrocinador
      await this.fetchPatrocinador();
    } catch (error) {
      console.error('Error al obtener el token CSRF o los datos del patrocinador:', error);
    }
  },
  methods: {
    async fetchPatrocinador() {
      try {
        const response = await instance.get(`/patrocinadores/${this.$route.params.id}`);
        this.patrocinador = response.data;
      } catch (error) {
        console.error('Error al obtener los datos del patrocinador:', error);
      }
    },
    async submitForm() {
      try {
        await instance.put(`/patrocinadores/${this.$route.params.id}`, this.patrocinador, {
          headers: {
            'X-CSRF-Token': this.csrfToken // Asegúrate de que este valor sea correcto
          }
        });
        this.$router.push('/patrocinadores');
      } catch (error) {
        console.error('Error al guardar los cambios del patrocinador:', error);
        const message = error.response && error.response.data && error.response.data.message
          ? error.response.data.message
          : 'No se pudo guardar los cambios del patrocinador.';

        Swal.fire({
          icon: 'error',
          title: 'Error al guardar los cambios',
          text: message
        });
      }
    }
  }
};
</script>

<style scoped>
/* Estilos adicionales si es necesario */
</style>
