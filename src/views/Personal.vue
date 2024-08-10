<template>
  <div class="container">
    <div class="card">
      <div class="card-header">
        Lista de Personal
      </div>
      <div class="card-body">
        <table class="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Apellido</th>
              <th>Teléfono</th>
              <th>Rol</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="personal in personalList" :key="personal.id">
              <td>{{ personal.id }}</td>
              <td>{{ personal.nombre }}</td>
              <td>{{ personal.apellido }}</td>
              <td>{{ personal.telefono }}</td>
              <td>{{ personal.rol }}</td>
              <td>
                <router-link :to="`/personal/editar/${personal.id}`" class="btn btn-warning">Editar</router-link>
                <button @click="eliminarPersonal(personal.id)" class="btn btn-danger">Eliminar</button>
              </td>
            </tr>
          </tbody>
        </table>
        
      </div>
      <div class="text-center">
          <router-link to="/personal/crear" class="btn btn-crear">Crear Nuevo Personal</router-link>
        </div>
    </div>
  </div>
</template>

<script>
import Swal from 'sweetalert2';
import instance from '@/pluggins/axios'; // Asegúrate de que la ruta sea correcta

export default {
  name: 'ListarPersonal',
  data() {
    return {
      personalList: [],
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

      // Cargar la lista de personal
      await this.fetchPersonal();
    } catch (error) {
      console.error('Error al obtener el token CSRF o el personal:', error);
    }
  },
  methods: {
    async fetchPersonal() {
      try {
        const response = await instance.get('/personal');
        this.personalList = response.data;
      } catch (error) {
        console.error('Error al obtener el personal:', error);
      }
    },
    async eliminarPersonal(id) {
      try {
        await instance.delete(`/personal/${id}`, {
          headers: {
            'X-CSRF-Token': this.csrfToken // Asegúrate de enviar el token CSRF
          }
        });
        await this.fetchPersonal(); // Recargar la lista de personal después de eliminar
      } catch (error) {
        console.error('Error al eliminar el personal:', error);
        const message = error.response && error.response.data && error.response.data.message
          ? error.response.data.message
          : 'No se pudo eliminar el personal.';
        Swal.fire({
          icon: 'error',
          title: 'Error al eliminar el personal',
          text: message
        });
      }
    }
  }
};
</script>

<style scoped>

.text-center {
  text-align: center;
  margin: 20px 0;
}
.btn-crear,
.btn-cancelar {
  background-color: #17A1FA;
  border-color: #17A1FA;
  color: white;
  border-radius: 15px; /* Esquinas redondeadas */
  padding: 10px 20px; /* Espaciado interno */
  border: 1px solid transparent; /* Asegura que el borde sea visible */
  box-shadow: 0 2px 4px rgba(0,0,0,0.2); /* Sombra en los botones */
}


</style>