<template>
  <div class="container animated fadeIn">
    <div class="card">
      <div class="card-header d-flex justify-content-between align-items-center">
        <span>Lista de Patrocinadores</span>
        <router-link to="/patrocinadores/crear" class="btn btn-crear animated pulse">Crear</router-link>
      </div>
      <div class="card-body">
        <div class="table-responsive">
          <table class="table table-hover">
            <thead>
              <tr>
                <th>ID</th>
                <th>Nombre</th>
                <th>Descripción</th>
                <th>Contacto</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="patrocinador in patrocinadores" :key="patrocinador.id" class="animated fadeIn">
                <td>{{ patrocinador.id }}</td>
                <td>{{ patrocinador.nombre }}</td>
                <td>{{ patrocinador.descripcion }}</td>
                <td>{{ patrocinador.contacto }}</td>
                <td class="actions">
                  <router-link :to="`/patrocinadores/editar/${patrocinador.id}`" class="btn btn-warning animated pulse btn-sm">Editar</router-link>
                  <button @click="eliminarPatrocinador(patrocinador.id)" class="btn btn-danger animated shake btn-sm">Eliminar</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

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
  font-size: 0.9rem; /* Reduce el tamaño de la fuente para pantallas pequeñas */
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
  font-size: 0.8rem; /* Reduce el tamaño de la fuente */
  border: 1px solid transparent;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

.btn-warning, .btn-danger {
  font-size: 0.8rem; /* Ajuste para pantallas pequeñas */
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




<script>
import Swal from 'sweetalert2';
import instance from '@/pluggins/axios'; // Asegúrate de que la ruta sea correcta

export default {
  name: 'ListarPatrocinadores',
  data() {
    return {
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
    async eliminarPatrocinador(id) {
      try {
        await instance.delete(`/patrocinadores/${id}`, {
          headers: {
            'X-CSRF-Token': this.csrfToken // Asegúrate de enviar el token CSRF
          }
        });
        await this.fetchPatrocinadores(); // Recargar la lista de patrocinadores después de eliminar
      } catch (error) {
        console.error('Error al eliminar el patrocinador:', error);
        const message = error.response && error.response.data && error.response.data.message
          ? error.response.data.message
          : 'No se pudo eliminar el patrocinador.';

        Swal.fire({
          icon: 'error',
          title: 'Error al eliminar el patrocinador',
          text: message
        });
      }
    }
  }
};
</script>

