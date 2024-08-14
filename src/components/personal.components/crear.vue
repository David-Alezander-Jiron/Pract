<template>
  <div class="container">
    <div class="card animated fadeIn">
      <div class="card-header">
        Agregar Nuevo Personal
      </div>
      <div class="card-body">
        <form @submit.prevent="submitForm">
          <div class="form-group">
            <label for="nombre">Nombre:</label>
            <input type="text" class="form-control" required v-model="personal.nombre" id="nombre" placeholder="">
            <small id="helpId" class="form-text text-muted">Escribe el nombre del personal</small>
          </div>
          <div class="form-group">
            <label for="apellido">Apellido:</label>
            <input type="text" class="form-control" required v-model="personal.apellido" id="apellido" placeholder="">
            <small id="helpId" class="form-text text-muted">Escribe el apellido del personal</small>
          </div>
          <div class="form-group">
            <label for="telefono">Teléfono:</label>
            <input type="number" class="form-control" required v-model="personal.telefono" id="telefono" placeholder="Teléfono">
            <small id="helpId" class="form-text text-muted">Escribe el teléfono del personal</small>
          </div>
          <div class="form-group">
            <label for="rol">Rol:</label>
            <select class="form-control" required v-model="personal.rol" id="rol">
              <option value="" disabled>Selecciona un rol</option>
              <option v-for="rol in roles" :key="rol.id" :value="rol.nombre">
                {{ rol.nombre }}
              </option>
            </select>
            <small id="helpId" class="form-text text-muted">Selecciona el rol del personal</small>
          </div>
          <div class="btn-group" role="group" aria-label="">
            <button type="submit" class="btn btn-primary animated pulse">Agregar</button>
            <router-link to="/personal" class="btn btn-danger animated pulse">Cancelar</router-link>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped>
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

/* Solo para pantallas pequeñas */
@media (max-width: 360px) {
  .container {
    padding: 1em; /* Ajuste de padding para pantallas pequeñas */
  }

  .btn-group {
    display: flex;
    flex-direction: column;
    align-items: stretch;
  }

  .btn-group .btn {
    margin-bottom: 10px; /* Espacio entre botones */
  }

  .form-group label {
    font-size: 0.9rem; /* Ajuste de tamaño de fuente para etiquetas */
  }

  .form-group input,
  .form-group select {
    font-size: 0.9rem; /* Ajuste de tamaño de fuente para inputs y selects */
  }

  .card-header {
    font-size: 1.2rem; /* Ajuste de tamaño de fuente para el encabezado */
  }
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

<script>
import Swal from 'sweetalert2';
import instance from '@/pluggins/axios'; 

export default {
  name: 'AgregarPersonal',
  data() {
    return {
      personal: {
        nombre: '',
        apellido: '',
        telefono: '',
        rol: ''
      },
      roles: [], 
      csrfToken: ''
    };
  },
  async mounted() {
    try {
      const response = await instance.get('/');
      this.csrfToken = response.data.csrfToken;
      instance.defaults.headers['X-CSRF-Token'] = this.csrfToken;

      const rolesResponse = await instance.get('/roles');
      this.roles = rolesResponse.data;
    } catch (error) {
      console.error('Error al obtener los datos:', error);
    }
  },
  methods: {
    async submitForm() {
      try {
        await instance.post('/personal', this.personal, {
          headers: {
            'X-CSRF-Token': this.csrfToken
          }
        });
        this.$router.push('/personal');
      } catch (error) {
        console.error('Error al guardar el personal:', error);
        const message = error.response && error.response.data && error.response.data.message
          ? error.response.data.message
          : 'No se pudo guardar el personal.';

        Swal.fire({
          icon: 'error',
          title: 'Error al guardar el personal',
          text: message
        });
      }
    }
  }
};
</script>


