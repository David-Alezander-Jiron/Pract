<template>
  <div class="container animated fadeIn">
    <div class="card">
      <div class="card-header d-flex justify-content-between align-items-center">
        <span>Lista de Participantes</span>
        <router-link to="/participantes/crear" class="btn btn-crear animated pulse">Agregar Participante</router-link>
      </div>
      <div class="card-body">
        <div class="table-responsive">
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
                <td class="actions">
                  <router-link :to="`/participantes/editar/${participante.id}`" class="btn btn-warning btn-sm animated pulse">Editar</router-link>
                  <button @click="eliminarParticipante(participante.id)" class="btn btn-danger btn-sm animated shake">Eliminar</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
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
@import url('https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css');

.container {
  max-width: 100%;
  margin: 0 auto;
  padding: 10px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  margin-top: 15px;
}

.card-header {
  background-color: #f8f9fa;
  font-size: 1rem;
  font-weight: bold;
  display: flex;
  justify-content: space-between;
}

.card-body {
  padding: 15px;
}

.table-responsive {
  margin-top: 15px;
}

.table th, .table td {
  padding: 8px;
  font-size: 0.9rem;
  text-align: center;
}

.actions {
  white-space: nowrap;
}

.btn-crear {
  background-color: #007bff;
  border-color: #007bff;
  color: white;
  border-radius: 15px;
  padding: 5px 10px;
  font-size: 0.8rem;
  border: 1px solid transparent;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

.btn-warning, .btn-danger {
  font-size: 0.8rem;
  padding: 5px 10px;
}

.btn-warning:hover {
  background-color: #d39e00;
  border-color: #c69500;
  color: #212529;
}

.btn-danger:hover {
  background-color: #c82333;
  border-color: #bd2130;
  color: #fff;
}
</style>
