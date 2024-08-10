<template>
  <div class="container">
    <div class="card">
      <div class="card-header">
        Lista de Patrocinadores
        <div class="text-center">
          <router-link to="/patrocinadores/crear" class="btn btn-crear">Crear Nuevo Patrocinador</router-link>
        </div>
      </div>
      <div class="card-body">
        <table class="table">
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
            <tr v-for="patrocinador in patrocinadores" :key="patrocinador.id">
              <td>{{ patrocinador.id }}</td>
              <td>{{ patrocinador.nombre }}</td>
              <td>{{ patrocinador.descripcion }}</td>
              <td>{{ patrocinador.contacto }}</td>
              <td>
                <router-link :to="`/patrocinadores/editar/${patrocinador.id}`" class="btn btn-warning">Editar</router-link>
                <button @click="eliminarPatrocinador(patrocinador.id)" class="btn btn-danger">Eliminar</button>
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

<style scoped>
.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background-color: #fff;
  border-radius: 10px; /* Bordes más redondeados */
  box-shadow: 0 4px 8px rgba(0,0,0,0.2); /* Sombra más profunda */
  margin-top: 30px;
}

h4 {
  margin-bottom: 20px;
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}

input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ced4da;
  border-radius: 5px;
  font-size: 16px;
}

.btn-group-custom {
  display: flex;
  gap: 10px; /* Espacio entre los botones */
  margin-top: 20px; /* Espacio superior para los botones */
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

.btn-cancelar {
  background-color: #f44336;
  border-color: #f44336;
}

.btn-crear:hover {
  background-color: #0f8de3;
  border-color: #0f8de3;
  color: white;
}

.btn-cancelar:hover {
  background-color: #d32f2f;
  border-color: #d32f2f;
  color: white;
}

.btn:hover {
  opacity: 0.8;
}

h4{
  text-align: center;
}

.text-center {
  text-align: center;
  margin: 20px 0;
}
</style>
