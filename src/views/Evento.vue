<template>
  <div class="container">
    <div class="card animated fadeIn">
      <div class="card-header">
        Lista de Eventos
      </div>
      <div class="card-body">
        <table class="table table-hover">
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Fecha</th>
              <th>Capacidad</th>
              <th>Ubicación</th>
              <th>Descripción</th>
              <th>Tipo de Evento</th>
              <th>Patrocinador</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="evento in eventos" :key="evento.id" class="animated fadeIn">
              <td>{{ evento.id }}</td>
              <td>{{ evento.nombre }}</td>
              <td>{{ formatFecha(evento.fecha) }}</td>
              <td>{{ evento.capacidad_personas }}</td>
              <td>{{ evento.ubicacion }}</td>
              <td>{{ evento.descripcion }}</td>
              <td>{{ evento.tipo_evento }}</td>
              <td>{{ evento.patrocinador.nombre }}</td>
              <td>
                <router-link :to="`/eventos/editar/${evento.id}`" class="btn btn-warning animated pulse">Editar</router-link>
                <button @click="eliminarEvento(evento.id)" class="btn btn-danger animated shake">Eliminar</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import Swal from 'sweetalert2';
import instance from '@/pluggins/axios'; // Asegúrate de que la ruta sea correcta

export default {
  name: 'ListarEventos',
  data() {
    return {
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
    const eventosData = response.data;

    // Obtener los datos del patrocinador para cada evento
    for (let evento of eventosData) {
      const patrocinadorResponse = await instance.get(`/patrocinadores/${evento.patrocinador_id}`);
      evento.patrocinador = patrocinadorResponse.data;
    }

    this.eventos = eventosData;
  } catch (error) {
    console.error('Error al obtener los eventos:', error);
  }
},

    formatFecha(fecha) {
      return new Date(fecha).toLocaleDateString(); // Formatear la fecha a una representación legible
    },
    async eliminarEvento(id) {
      try {
        await instance.delete(`/eventos/${id}`, {
          headers: {
            'X-CSRF-Token': this.csrfToken // Asegúrate de enviar el token CSRF
          }
        });
        await this.fetchEventos(); // Recargar la lista de eventos después de eliminar
      } catch (error) {
        console.error('Error al eliminar el evento:', error);
        const message = error.response && error.response.data && error.response.data.message
          ? error.response.data.message
          : 'No se pudo eliminar el evento.';
        Swal.fire({
          icon: 'error',
          title: 'Error al eliminar el evento',
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
</style>
