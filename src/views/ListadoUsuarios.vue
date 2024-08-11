<template>
  <div class="container">
    <div class="card animated fadeIn">
      <div class="card-header">
        Lista de Usuarios
      </div>
      <div class="card-body">
        <table class="table table-hover">
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombres</th>
              <th>Apellidos</th>
              <th>Correo</th>
              <th>Teléfono</th>
              <th>Estado</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="usuario in usuarios" :key="usuario.id" class="animated fadeIn">
              <td>{{ usuario.id }}</td>
              <td>{{ usuario.nombres }}</td>
              <td>{{ usuario.apellidos }}</td>
              <td>{{ usuario.correo }}</td>
              <td>{{ usuario.telefono }}</td>
              <td>{{ usuario.estado }}</td>
              <td>
                <router-link :to="`/usuarios/editar/${usuario.id}`" class="btn btn-warning animated pulse">Editar</router-link>
                <button @click="eliminarUsuario(usuario.id)" class="btn btn-danger animated shake">Eliminar</button>
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

<script>
import Swal from 'sweetalert2';
import instance from '@/pluggins/axios'; // Asegúrate de que la ruta sea correcta

export default {
  name: 'ListarUsuarios',
  data() {
    return {
      usuarios: [],
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

      // Cargar la lista de usuarios
      await this.fetchUsuarios();
    } catch (error) {
      console.error('Error al obtener el token CSRF o los usuarios:', error);
    }
  },
  methods: {
    async fetchUsuarios() {
      try {
        const response = await instance.get('/usuarios');
        this.usuarios = response.data;
      } catch (error) {
        console.error('Error al obtener los usuarios:', error);
      }
    },
    async eliminarUsuario(id) {
      try {
        await instance.delete(`/usuarios/${id}`, {
          headers: {
            'X-CSRF-Token': this.csrfToken // Asegúrate de enviar el token CSRF
          }
        });
        await this.fetchUsuarios(); // Recargar la lista de usuarios después de eliminar
      } catch (error) {
        console.error('Error al eliminar el usuario:', error);
        const message = error.response && error.response.data && error.response.data.message
          ? error.response.data.message
          : 'No se pudo eliminar el usuario.';

        Swal.fire({
          icon: 'error',
          title: 'Error al eliminar el usuario',
          text: message
        });
      }
    }
  }
};
</script>

