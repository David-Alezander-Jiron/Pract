<template>
  <div class="container">
    <div class="card animated fadeIn">
      <div class="card-header">
        Lista de Participantes
      </div>
      <div class="card-body">
        <table class="table table-hover">
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Correo</th>
              <th>Teléfono</th>
              <th>Nombre del Evento</th>
              <th>Estado</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="participante in participantes" :key="participante.id" class="animated fadeIn">
              <td>{{ participante.id }}</td>
              <td>{{ participante.nombre }}</td>
              <td>{{ participante.correo }}</td>
              <td>{{ participante.telefono }}</td>
              <td>{{ participante.evento ? participante.evento.nombre : 'Evento no disponible' }}</td>
              <td>{{ participante.estado }}</td>
              <td>
                <router-link :to="`/participantes/editar/${participante.id}`" class="btn btn-warning animated pulse">Editar</router-link>
                <button @click="eliminarParticipante(participante.id)" class="btn btn-danger animated shake">Eliminar</button>
              </td>
            </tr>
          </tbody>
        </table>
        <router-link to="/participantes/crear" class="btn btn-primary animated pulse">Agregar Participante</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import Swal from 'sweetalert2';
import instance from '@/pluggins/axios'; // Asegúrate de que la ruta sea correcta

export default {
  name: 'ListarParticipantes',
  data() {
    return {
      participantes: [],
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

      // Cargar la lista de participantes
      await this.fetchParticipantes();
    } catch (error) {
      console.error('Error al obtener el token CSRF o los participantes:', error);
    }
  },
  methods: {
    async fetchParticipantes() {
      try {
        const response = await instance.get('/participantes');
        this.participantes = response.data;
        for (let participante of this.participantes) {
          try {
            const eventoResponse = await instance.get(`/eventos/${participante.evento_id}`);
            participante.evento = eventoResponse.data;
          } catch (error) {
            console.error(`Error al obtener el evento para participante con ID ${participante.id}:`, error);
            participante.evento = { nombre: 'Evento no disponible' };
          }
        }
      } catch (error) {
        console.error('Error al obtener los participantes:', error);
      }
    },
    async eliminarParticipante(id) {
      try {
        await instance.delete(`/participantes/${id}`, {
          headers: {
            'X-CSRF-Token': this.csrfToken // Asegúrate de enviar el token CSRF
          }
        });
        await this.fetchParticipantes(); // Recargar la lista de participantes después de eliminar
      } catch (error) {
        console.error('Error al eliminar el participante:', error);
        const message = error.response && error.response.data && error.response.data.message
          ? error.response.data.message
          : 'No se pudo eliminar el participante.';
        Swal.fire({
          icon: 'error',
          title: 'Error al eliminar el participante',
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

.btn-danger {
  background-color: #dc3545;
  border-color: #dc3545;
  color: #fff;
}

.btn-danger:hover {
  background-color: #c82333;
  border-color: #bd2130;
  color: #fff;
}

.btn-primary {
  background-color: #007bff;
  border-color: #007bff;
  color: #fff;
}

.btn-primary:hover {
  background-color: #0069d9;
  border-color: #0062cc;
  color: #fff;
}
</style>
