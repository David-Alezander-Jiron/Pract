
<template>
  <div class="background animated fadeIn">
    <h2 class="title">Editar Usuario</h2>
    <form @submit.prevent="updateUser">
      <div class="form-group">
        <label for="nombre">Nombre:</label>
        <input v-model="usuario.nombres" type="text" id="nombre" required class="form-control">
        <small id="helpId" class="form-text text-muted">Escribe el nombre del usuario</small>
      </div>
      <div class="form-group">
        <label for="apellido">Apellido:</label>
        <input v-model="usuario.apellidos" type="text" id="apellido" required class="form-control">
        <small id="helpId" class="form-text text-muted">Escribe el apellido del usuario</small>
      </div>
      <div class="form-group">
        <label for="correo">Correo Electrónico:</label>
        <input v-model="usuario.correo" type="email" id="correo" required class="form-control">
        <small id="helpId" class="form-text text-muted">Escribe el correo electrónico del usuario</small>
      </div>
      <div class="form-group">
        <label for="telefono">Teléfono:</label>
        <input v-model="usuario.telefono" type="text" id="telefono" required class="form-control">
        <small id="helpId" class="form-text text-muted">Escribe el teléfono del usuario</small>
      </div>
      <div class="form-group">
        <label for="estado">Estado:</label>
        <select v-model="usuario.estado" id="estado" required class="form-control">
          <option value="activo">Activo</option>
          <option value="inactivo">Inactivo</option>
          <option value="eliminado">Eliminado</option>
        </select>
        <small id="helpId" class="form-text text-muted">Selecciona el estado del usuario</small>
      </div>
      <div class="button-group">
        <button type="submit" class="action-btn animated pulse">Actualizar</button>
        <button type="button" class="cancel-btn animated pulse" @click="cancelEdit">Cancelar</button>
      </div>
    </form>
  </div>
</template>



<style scoped>
/* Estilos adicionales si es necesario */
@import url('https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css');

.background {
  border: 1px solid #ddd;
  padding: 20px;
  max-width: 800px; /* Ajusta el ancho máximo según tu preferencia */
  margin: 80px auto; /* Centra horizontalmente */
  border-radius: 5px; /* Esquinas redondeadas */
  background-color: #fff; /* Fondo blanco */
}

.title {
  text-align: center; /* Centra el título */
  margin-bottom: 20px; /* Espacio debajo del título */
}

.form-group {
  margin-bottom: 15px;
}

.form-control {
  padding: 10px;
  border-radius: 5px; /* Esquinas redondeadas */
  border: 1px solid #ddd; /* Borde gris */
}

.button-group {
  display: flex;
  justify-content: space-between; /* Espacio entre los botones */
  margin-top: 20px;
}

.action-btn, .cancel-btn {
  background-color: #2196F3;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none; /* Remueve el subrayado */
}

.cancel-btn {
  background-color: #f44336;
}

.cancel-btn:hover {
  background-color: #d32f2f;
}

.action-btn:hover {
  background-color: #0b7dda;
}
</style>



<script>
import Swal from 'sweetalert2';
import instance from '@/pluggins/axios'; // Asegúrate de que la ruta sea correcta

export default {
  name: 'EditarUsuario',
  data() {
    return {
      usuario: {
        nombres: '',
        apellidos: '',
        correo: '',
        telefono: '',
        estado: 'activo'
      },
      csrfToken: ''
    };
  },
  async created() {
    try {
      // Obtener el token CSRF del backend
      const response = await instance.get('/');
      this.csrfToken = response.data.csrfToken;
      // Configurar el token CSRF en Axios
      instance.defaults.headers['X-CSRF-Token'] = this.csrfToken;

      // Cargar los datos del usuario
      const usuarioId = this.$route.params.id;
      const userResponse = await instance.get(`/usuarios/${usuarioId}`);
      this.usuario = userResponse.data;
    } catch (error) {
      console.error('Error al obtener el token CSRF o los datos del usuario:', error);
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Error al cargar los datos del usuario'
      });
      this.$router.push('/usuarios');
    }
  },
  methods: {
    async updateUser() {
      try {
        const usuarioId = this.$route.params.id;
        await instance.put(`/usuarios/${usuarioId}`, this.usuario, {
          headers: {
            'X-CSRF-Token': this.csrfToken // Asegúrate de enviar el token CSRF
          }
        });
        Swal.fire({
          icon: 'success',
          title: 'Éxito',
          text: 'Usuario actualizado correctamente'
        });
        this.$router.push('/usuarios');
      } catch (error) {
        console.error('Error al actualizar el usuario:', error);
        const message = error.response && error.response.data && error.response.data.message
          ? error.response.data.message
          : 'No se pudo actualizar el usuario.';

        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: message
        });
      }
    },
    cancelEdit() {
      this.$router.push('/usuarios');
    }
  }
};
</script>

