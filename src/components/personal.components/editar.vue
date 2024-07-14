<template>
  <div class="container">
    <div class="card">
      <div class="card-header">
        Editar Personal
      </div>
      <div class="card-body">
        <form v-on:submit.prevent="actualizarRegistro">
          <div class="form-group">
            <label for="nombre">Nombre:</label>
            <input type="text" class="form-control" required v-model="persona.nombre" id="nombre" placeholder="Nombre">
          </div>
          <div class="form-group">
            <label for="apellido">Apellido:</label>
            <input type="text" class="form-control" required v-model="persona.apellido" id="apellido" placeholder="Apellido">
          </div>
          <div class="form-group">
            <label for="telefono">Teléfono:</label>
            <input type="text" class="form-control" required v-model="persona.telefono" id="telefono" placeholder="Teléfono">
          </div>
          <div class="form-group">
            <label for="rol">Rol:</label>
            <input type="text" class="form-control" required v-model="persona.rol" id="rol" placeholder="Rol">
          </div>
          <div class="btn-group">
            <button type="submit" class="btn btn-primary">Actualizar</button>
            <router-link to="/personal" class="btn btn-warning">Cancelar</router-link>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'EditarPersonal',
  data() {
    return {
      persona: {
        nombre: '',
        apellido: '',
        telefono: '',
        rol: ''
      }
    };
  },
  created() {
    this.obtenerPersonal();
  },
  methods: {
    obtenerPersonal() {
      const id = this.$route.params.id;
      axios.get(`http://localhost:3000/personal/${id}`)
        .then(response => {
          this.persona = response.data;
        })
        .catch(error => {
          console.log('Error al obtener el personal:', error);
        });
    },
    editarRegistro() {
      const id = this.$route.params.id;
      axios.put(`http://localhost:3000/personal/${id}`, this.persona)
        .then(response => {
          console.log(response.data);
          this.$router.push('/personal');
        })
        .catch(error => {
          console.log('Error al actualizar el personal:', error);
        });
    }
  }
};
</script>

<style>
.container {
  width: 50%;
  margin: 0 auto;
  padding: 20px;
}

.card {
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.card-header {
  background-color: #f5f5f5;
  padding: 10px 15px;
  font-size: 18px;
  border-bottom: 1px solid #ddd;
}

.card-body {
  padding: 15px;
}

.form-group {
  margin-bottom: 15px;
}

.form-group label {
  display: block;
  margin-bottom: 5px;
}

.form-control {
  width: 100%;
  padding: 8px;
  box-sizing: border-box;
  border: 1px solid #ddd;
  border-radius: 4px;
}

.btn-group {
  display: flex;
  gap: 10px;
}

.btn {
  padding: 10px 15px;
  border: none;
  cursor: pointer;
  font-size: 14px;
  border-radius: 4px;
}

.btn-primary {
  background-color: #007bff;
  color: white;
}

.btn-warning {
  background-color: #ffc107;
  color: white;
}
</style>
