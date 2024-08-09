<template>
  <div class="container">
    <div class="card">
      <div class="card-header">
        PERSONAL
      </div>
      <div class="card-body">
        <table class="table">
          <thead>
            <tr>
              <th>Id</th>
              <th>Nombre</th>
              <th>Rol</th>
              <th>Telefono</th>
              <th>Acción</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="persona in personalList" :key="persona.id">
              <td>{{ persona.id }}</td>
              <td>{{ persona.nombre }} {{ persona.apellido }}</td>
              <td>{{ persona.rol }}</td>
              <td>{{ persona.telefono }}</td>
              <td>
                <div class="btn-group" role="group" aria-label="">
                  <router-link :to="`/personal/editar/${persona.id}`" class="btn">Editar</router-link>
                  <button @click="deletePersonal(persona.id)" class="btn btn-danger delete-btn">Eliminar</button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <router-link to="/personal/crear" class="btn btn-primary add-btn">Agregar Personal</router-link>

    <div v-if="mensajeExito" class="mensaje-centro">
      <div class="mensaje-contenido">
        <img :src="imagenExito" alt="" class="mensaje-imagen">
        <p>Eliminado correctamente!!</p>
        <button @click="ocultarMensaje" class="btn btn-primary">Aceptar</button>
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
      csrfToken: '',
      mensajeExito: false,
      imagenExito: '' // Asegúrate de que esta imagen esté disponible
    };
  },
  async mounted() {
    try {
      // Obtén el token CSRF del backend
      const response = await instance.get('/');
      this.csrfToken = response.data.csrfToken;
      // Configura el token CSRF en Axios
      instance.defaults.headers['X-CSRF-Token'] = this.csrfToken;

      // Obtén la lista de personal
      const personalResponse = await instance.get('/personal');
      this.personalList = personalResponse.data;
    } catch (error) {
      console.error('Error al obtener el token CSRF o la lista de personal:', error);
    }
  },
  methods: {
    async deletePersonal(id) {
      try {
        await instance.delete(`/personal/${id}`, {
          headers: {
            'X-CSRF-Token': this.csrfToken // Asegúrate de que este valor sea correcto
          }
        });
        this.mensajeExito = true;
        this.personalList = this.personalList.filter(persona => persona.id !== id);
        setTimeout(() => {
          this.mensajeExito = false;
        }, 2000); // Oculta el mensaje después de 2 segundos
      } catch (error) {
        console.error('Error al eliminar el personal:', error);
        Swal.fire({
          icon: 'error',
          title: 'Error al eliminar el personal',
          text: 'No se pudo eliminar el personal.'
        });
      }
    },
    ocultarMensaje() {
      this.mensajeExito = false;
    }
  }
};
</script>

<style scoped>
.container {
  max-width: 1600px;
  margin: 0 auto;
  padding: 20px;
}

.card {
  border: 1px solid #D9D9D9;
  border-radius: 10px;
  padding: 20px;
}

.card-header {
 
  padding: 10px;
  font-size: 20px;
  text-align: center;
  border-radius: 10px 10px 0 0;
}

.card-body {
  padding: 20px;
}

.table {
  width: 100%;
  border-collapse: collapse;
}

.table th, .table td {
  border: 1px solid black;
  padding: 8px;
  text-align: center;
}

.table th {
  background-color: #D9D9D9;
}

.btn-group .btn {
  background-color: #2196F3;
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;
  margin: 5px;
}

.btn-group .btn:hover {
  background-color: #17A1FA;
}

.add-btn {
  background-color: #17A1FA;
  padding: 10px 20px;
  margin-top: 10px;
}

.delete-btn {
  background-color: #f44336;
  border-radius: 15px;
}

.delete-btn:hover {
  background-color: #d32f2f;
}

.btn {
  border-radius: 15px;
}

.mensaje-centro {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1000;
}

.mensaje-contenido {
  background: white;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
}

.mensaje-imagen {
  width: 100px;
  height: 75px;
}
</style>
