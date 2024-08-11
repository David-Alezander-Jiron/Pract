<template>
  <div class="container">
    <div class="card animated fadeIn">
      <div class="card-header">
        Crear Rol
      </div>
      <div class="card-body">
        <form @submit.prevent="crearRol">
          <div class="form-group">
            <label for="nombre">Nombre:</label>
            <input type="text" v-model.trim="nuevoRol.nombre" class="form-control" id="nombre" required>
          </div>
          
          <div class="form-group">
            <label for="descripcion">Descripción:</label>
            <textarea v-model.trim="nuevoRol.descripcion" class="form-control" id="descripcion"></textarea>
          </div>
          <button type="submit" class="btn btn-primary animated pulse">Crear Rol</button>
        </form>
      </div>
    </div>
    
    <div class="card mt-4 animated fadeIn">
      <div class="card-header">
        Lista de Roles
      </div>
      <div class="card-body">
        <table class="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Estado</th>
              <th>Descripción</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="rol in roles" :key="rol.id" class="animated fadeIn">
              <td>{{ rol.id }}</td>
              <td>{{ rol.nombre }}</td>
              <td>{{ rol.estado }}</td>
              <td>{{ rol.descripcion }}</td>
              <td>
                <button @click="eliminarRol(rol.id)" class="btn btn-danger animated shake">Eliminar</button>
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
  name: 'ListarRoles',
  data() {
    return {
      roles: [],
      nuevoRol: {
        nombre: '',
        estado: 'activo',
        descripcion: ''
      },
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

      // Cargar la lista de roles
      await this.fetchRoles();
    } catch (error) {
      console.error('Error al obtener el token CSRF o los roles:', error);
    }
  },
  methods: {
    async fetchRoles() {
      try {
        const response = await instance.get('/roles');
        this.roles = response.data;
      } catch (error) {
        console.error('Error al obtener los roles:', error);
      }
    },
    async crearRol() {
      try {
        await instance.post('/roles', this.nuevoRol, {
          headers: {
            'X-CSRF-Token': this.csrfToken // Asegúrate de enviar el token CSRF
          }
        });
        await this.fetchRoles(); // Recargar la lista de roles después de crear uno nuevo
        this.nuevoRol = {
          nombre: '',
          estado: 'activo',
          descripcion: ''
        }; // Limpiar el formulario después de crear el rol
      } catch (error) {
        console.error('Error al crear el rol:', error);
        const message = error.response && error.response.data && error.response.data.message
          ? error.response.data.message
          : 'No se pudo crear el rol.';

        Swal.fire({
          icon: 'error',
          title: 'Error al crear el rol',
          text: message
        });
      }
    },
    async eliminarRol(id) {
      try {
        await instance.delete(`/roles/${id}`, {
          headers: {
            'X-CSRF-Token': this.csrfToken // Asegúrate de enviar el token CSRF
          }
        });
        await this.fetchRoles(); // Recargar la lista de roles después de eliminar
      } catch (error) {
        console.error('Error al eliminar el rol:', error);
        const message = error.response && error.response.data && error.response.data.message
          ? error.response.data.message
          : 'No se pudo eliminar el rol.';

        Swal.fire({
          icon: 'error',
          title: 'Error al eliminar el rol',
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

.btn-primary {
  background-color: #007BFF;
  border-color: #007BFF;
  color: #fff;
}

.btn-primary:hover {
  background-color: #0056b3;
  border-color: #0056b3;
  color: #fff;
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
