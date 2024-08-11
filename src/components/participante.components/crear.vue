<template>
  <div class="container">
    <div class="card animated fadeIn">
      <div class="card-header">
        Agregar Nuevo Participante
      </div>
      <div class="card-body">
        <form @submit.prevent="submitForm">
          <div class="form-group">
            <label for="nombre">Nombre del Participante:</label>
            <input type="text" class="form-control" required v-model="participante.nombre" id="nombre" placeholder="Nombre del Participante">
          </div>
          <div class="form-group">
            <label for="correo">Correo del Participante:</label>
            <input type="email" class="form-control" required v-model="participante.correo" id="correo" placeholder="Correo del Participante">
          </div>
          <div class="form-group">
            <label for="telefono">Teléfono del Participante:</label>
            <input type="tel" class="form-control" required v-model="participante.telefono" id="telefono" placeholder="Teléfono del Participante">
          </div>
          <div class="form-group">
            <label for="evento">Evento:</label>
            <select class="form-control" required v-model="participante.evento_id" id="evento">
              <option v-for="evento in eventos" :key="evento.id" :value="evento.id">
                {{ evento.nombre }}
              </option>
            </select>
          </div>
          <div class="form-group">
            <label for="estado">Estado:</label>
            <select class="form-control" required v-model="participante.estado" id="estado">
              <option value="activo">Activo</option>
              <option value="inactivo">Inactivo</option>
              <option value="eliminado">Eliminado</option>
            </select>
          </div>
          <div class="btn-group" role="group" aria-label="">
            <button type="submit" class="btn btn-success animated pulse">Agregar Participante</button>
            <router-link to="/participantes" class="btn btn-warning animated pulse">Cancelar</router-link>
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
  name: 'CrearParticipante',
  data() {
    return {
      participante: {
        nombre: '',
        correo: '',
        telefono: '',
        evento_id: '',
        estado: 'activo',
      },
      eventos: [],
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

      // Cargar la lista de eventos
      await this.fetchEventos();
    } catch (error) {
      console.error('Error al obtener el token CSRF o los eventos:', error);
    }
  },
  methods: {
    async fetchEventos() {
      try {
        const response = await instance.get('/eventos');
        this.eventos = response.data;
      } catch (error) {
        console.error('Error al obtener los eventos:', error);
      }
    },
    async submitForm() {
      try {
        await instance.post('/participantes', this.participante, {
          headers: {
            'X-CSRF-Token': this.csrfToken // Asegúrate de que este valor sea correcto
          }
        });
        this.$router.push('/participantes');
      } catch (error) {
        console.error('Error al guardar el participante:', error);
        const message = error.response && error.response.data && error.response.data.message
          ? error.response.data.message
          : 'No se pudo guardar el participante.';

        Swal.fire({
          icon: 'error',
          title: 'Error al guardar el participante',
          text: message
        });
      }
    }
  }
};
</script>

<style scoped>
/* Estilos adicionales si es necesario */
@import url('https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css');

.card {
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  border-radius: 5px;
}

.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}

.container {
  padding: 2em;
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
