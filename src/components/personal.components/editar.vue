<template>
  <div class="container">
    <div class="card">
      <div class="card-header">
        Editar Personal
      </div>
      <div class="card-body">
        <form v-on:submit.prevent="editarRegistro">
          <div class="form-group">
            <label for="nombre">Nombre:</label>
            <input type="text" class="form-control" required v-model="persona.nombre" id="nombre" aria-describedby="helpId" placeholder="">
            <small id="helpId" class="form-text text-muted">Escribe el nombre del personal</small>
          </div>
          <div class="form-group">
            <label for="apellido">Apellido:</label>
            <input type="text" class="form-control" required v-model="persona.apellido" id="apellido" aria-describedby="helpId" placeholder="">
            <small id="helpId" class="form-text text-muted">Escribe el apellido del personal</small>
          </div>
          <div class="form-group">
            <label for="telefono">Teléfono:</label>
            <input type="text" class="form-control" required v-model="persona.telefono" id="telefono" aria-describedby="helpId" placeholder="Teléfono">
            <small id="helpId" class="form-text text-muted">Escribe el teléfono del personal</small>
          </div>
          <div class="form-group">
            <label for="rol">Rol:</label>
            <input type="text" class="form-control" required v-model="persona.rol" id="rol" aria-describedby="helpId" placeholder="">
            <small id="helpId" class="form-text text-muted">Escribe el rol del personal</small>
          </div>
          <div class="btn-group" role="group" aria-label="">
            <button type="submit" class="btn btn-success">Guardar</button>
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
</style>
