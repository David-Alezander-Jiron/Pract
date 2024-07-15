<template>
  <div class="container">
    <div class="card">
      <div class="card-header">
        Agregar Nuevo Personal
      </div>
      <div class="card-body">
        <form v-on:submit.prevent="agregarRegistro">
          <div class="form-group">
            <label for="nombre">Nombre:</label>
            <input type="text" class="form-control" required name="nombre" v-model="persona.nombre" id="nombre" aria-describedby="helpId" placeholder="">
            <small id="helpId" class="form-text text-muted">Escribe el nombre del personal</small>
          </div>
          <div class="form-group">
            <label for="apellido">Apellido:</label>
            <input type="text" class="form-control" required name="apellido" v-model="persona.apellido" id="apellido" aria-describedby="helpId" placeholder="">
            <small id="helpId" class="form-text text-muted">Escribe el apellido del personal</small>
          </div>
          <div class="form-group">
            <label for="telefono">Teléfono:</label>
            <input type="text" class="form-control" required name="telefono" id="telefono" v-model="persona.telefono" aria-describedby="helpId" placeholder="Teléfono">
            <small id="helpId" class="form-text text-muted">Escribe el teléfono del personal</small>
          </div>
          <div class="form-group">
            <label for="rol">Rol:</label>
            <input type="text" class="form-control" required name="rol" id="rol" v-model="persona.rol" aria-describedby="helpId" placeholder="">
            <small id="helpId" class="form-text text-muted">Escribe el rol del personal</small>
          </div>
          <div class="btn-group" role="group" aria-label="">
            <button type="submit" class="btn btn-success">Agregar</button>
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
  name: 'CrearPersonal',
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
  methods: {
    agregarRegistro() {
      axios.post('http://localhost:3000/personal', this.persona)
        .then(response => {
          console.log(response.data);
          this.$router.push('/personal');
        })
        .catch(error => {
          console.log('Error al agregar el personal:', error);
        });
    }
  }
};
</script>

<style>

</style>
