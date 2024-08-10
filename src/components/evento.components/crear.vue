<template>
  <div class="container">
    <div class="card">
      <div class="card-header">
        Agregar Nuevo Evento
      </div>
      <div class="card-body">
        <form @submit.prevent="submitForm">
          <div class="form-group">
            <label for="nombre">Nombre del Evento:</label>
            <input type="text" class="form-control" required v-model="evento.nombre" id="nombre" placeholder="Nombre del Evento">
          </div>
          <div class="form-group">
            <label for="fecha">Fecha del Evento:</label>
            <input type="date" class="form-control" required v-model="evento.fecha" id="fecha">
          </div>
          <div class="form-group">
            <label for="capacidad">Capacidad de Personas:</label>
            <input type="number" class="form-control" required v-model="evento.capacidad_personas" id="capacidad" placeholder="Capacidad de Personas">
          </div>
          <div class="form-group">
            <label for="ubicacion">Ubicación:</label>
            <input type="text" class="form-control" required v-model="evento.ubicacion" id="ubicacion" placeholder="Ubicación del Evento">
          </div>
          <div class="form-group">
            <label for="patrocinador">Patrocinador:</label>
            <select class="form-control" required v-model="evento.patrocinador_id" id="patrocinador">
              <option v-for="patrocinador in patrocinadores" :key="patrocinador.id" :value="patrocinador.id">
                {{ patrocinador.nombre }}
              </option>
            </select>
          </div>
          <div class="form-group">
            <label for="descripcion">Descripción:</label>
            <textarea class="form-control" required v-model="evento.descripcion" id="descripcion" rows="3" placeholder="Descripción del Evento"></textarea>
          </div>
          <div class="form-group">
            <label for="tipo">Tipo de Evento:</label>
            <select class="form-control" required v-model="evento.tipo_evento" id="tipo">
              <option value="medianos">Medianos</option>
              <option value="pequeños">Pequeños</option>
            </select>
          </div>
          <div class="btn-group" role="group" aria-label="">
            <button type="submit" class="btn btn-success">Agregar Evento</button>
            <router-link to="/eventos" class="btn btn-warning">Cancelar</router-link>
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
  name: 'CrearEvento',
  data() {
    return {
      evento: {
        nombre: '',
        fecha: '',
        capacidad_personas: '',
        ubicacion: '',
        patrocinador_id: '',
        descripcion: '',
        tipo_evento: '',
        estado: 'activo',
      },
      patrocinadores: [],
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

      // Cargar la lista de patrocinadores
      await this.fetchPatrocinadores();
    } catch (error) {
      console.error('Error al obtener el token CSRF o los patrocinadores:', error);
    }
  },
  methods: {
    async fetchPatrocinadores() {
      try {
        const response = await instance.get('/patrocinadores');
        this.patrocinadores = response.data;
      } catch (error) {
        console.error('Error al obtener los patrocinadores:', error);
      }
    },
    async submitForm() {
    // Verificar si la fecha del evento es anterior a la fecha actual
    const fechaEvento = new Date(this.evento.fecha);
    const fechaActual = new Date();

    if (fechaEvento < fechaActual) {
      Swal.fire({
        icon: 'error',
        title: 'Error al guardar el evento',
        text: 'La fecha del evento no puede ser anterior a la fecha actual.'
      });
      return;
    }

    try {
      await instance.post('/eventos', this.evento, {
        headers: {
          'X-CSRF-Token': this.csrfToken // Asegúrate de que este valor sea correcto
        }
      });
      this.$router.push('/eventos');
    } catch (error) {
      console.error('Error al guardar el evento:', error);
      const message = error.response && error.response.data && error.response.data.message
        ? error.response.data.message
        : 'No se pudo guardar el evento.';

      Swal.fire({
        icon: 'error',
        title: 'Error al guardar el evento',
        text: message
      });
    }
  }
},
async submitForm() {
    // Verificar si la fecha del evento es anterior a la fecha actual
    const fechaEvento = new Date(this.evento.fecha);
    const fechaActual = new Date();

    if (fechaEvento < fechaActual) {
      Swal.fire({
        icon: 'error',
        title: 'Error al guardar el evento',
        text: 'La fecha del evento no puede ser anterior a la fecha actual.'
      });
      return;
    }

    try {
      await instance.post('/eventos', this.evento, {
        headers: {
          'X-CSRF-Token': this.csrfToken // Asegúrate de que este valor sea correcto
        }
      });
      this.$router.push('/eventos');
    } catch (error) {
      console.error('Error al guardar el evento:', error);
      const message = error.response && error.response.data && error.response.data.message
        ? error.response.data.message
        : 'No se pudo guardar el evento.';

      Swal.fire({
        icon: 'error',
        title: 'Error al guardar el evento',
        text: message
      });
    }
  }

};
</script>

<style scoped>
/* Estilos adicionales si es necesario */
</style>