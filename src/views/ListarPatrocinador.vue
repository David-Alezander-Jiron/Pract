<template>
  <div class="container animated fadeIn">
    <div class="card">
      <div class="card-header">
        Lista de Patrocinadores
        <div class="text-center">
          <router-link to="/patrocinadores/crear" class="btn btn-crear animated pulse">Crear Nuevo Patrocinador</router-link>
        </div>
      </div>
      <div class="card-body">
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
              <td>
                <router-link :to="`/patrocinadores/editar/${patrocinador.id}`" class="btn btn-warning animated pulse">Editar</router-link>
                <button @click="eliminarPatrocinador(patrocinador.id)" class="btn btn-danger animated shake">Eliminar</button>
              </td>
            </tr>
          </tbody>
        </table>
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

.btn-crear {
  background-color: #17A1FA;
  border-color: #17A1FA;
  color: white;
  border-radius: 15px; /* Esquinas redondeadas */
  padding: 10px 20px; /* Espaciado interno */
  border: 1px solid transparent; /* Asegura que el borde sea visible */
  box-shadow: 0 2px 4px rgba(0,0,0,0.2); /* Sombra en los botones */
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

