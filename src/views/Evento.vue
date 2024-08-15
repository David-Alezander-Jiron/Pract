<template>
  <div class="container animated fadeIn">
    <div class="card">
      <div class="card-header d-flex justify-content-between align-items-center">
        <span>Lista de Eventos</span>
        <router-link to="/eventos/crear" class="btn btn-crear animated pulse">Crear</router-link>
      </div>
      <div class="card-body">
        <div class="table-responsive">
          <table class="table table-hover">
            <thead class="thead">
              <tr>
                <th>ID</th>
                <th>Nombre</th>
                <th>Fecha</th>
                <th>Capacidad</th>
                <th>Ubicación</th>
                <th class="d-none d-md-table-cell">Descripción</th>
                <th class="d-none d-lg-table-cell">Tipo de Evento</th>
                <th class="d-none d-lg-table-cell">Patrocinador</th>
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
                <td class="d-none d-md-table-cell">{{ evento.descripcion }}</td>
                <td class="d-none d-lg-table-cell">{{ evento.tipo_evento }}</td>
                <td class="d-none d-lg-table-cell">{{ evento.patrocinador.nombre }}</td>
                <td class="actions">
                  <router-link :to="`/eventos/editar/${evento.id}`" class="btn btn-warning animated pulse btn-sm">Editar</router-link>
                  <button @click="eliminarEvento(evento.id)" class="btn btn-danger animated shake btn-sm">Eliminar</button>
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
import instance from '@/pluggins/axios';

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
      const response = await instance.get('/');
      this.csrfToken = response.data.csrfToken;
      instance.defaults.headers['X-CSRF-Token'] = this.csrfToken;
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
      return new Date(fecha).toLocaleDateString();
    },
    async eliminarEvento(id) {
      try {
        await instance.delete(`/eventos/${id}`, {
          headers: {
            'X-CSRF-Token': this.csrfToken
          }
        });
        await this.fetchEventos();
      } catch (error) {
        console.error('Error al eliminar el evento:', error);
        const message = error.response?.data?.message || 'No se pudo eliminar el evento.';
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
  background-color: #17A1FA;
  border-color: #17A1FA;
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
