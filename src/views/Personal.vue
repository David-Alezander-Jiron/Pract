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
              <th>Accion</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="persona in personal" :key="persona.id">
              <td>{{ persona.id }}</td>
              <td>{{ persona.nombre }} {{ persona.apellido }}</td>
              <td>{{ persona.rol }}</td>
              <td>{{ persona.telefono }}</td>
              <td>
                <div class="btn-group" role="group" aria-label="">
                  <router-link :to="{name:'EditarPersonal',params:{id:persona.id}}" class="btn btn-primary">Editar</router-link>
                  <button type="button" @click="borrarPersonal(persona.id)" class="btn btn-danger">Eliminar</button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <router-link to="/personal/crear" class="btn btn-primary" role="button">Agregar Personal</router-link>

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
import axios from 'axios';

export default {
  name: 'ListarPersonal',
  data() {
    return {
      personal: [],
      mensajeExito: false,
      imagenExito: require('@/assets/visto.png') // Ruta de la imagen
    }
  },
  created() {
    this.listarPersonal();
  },
  methods: {
    async listarPersonal() {
      try {
        const response = await axios.get('http://localhost:9000/personal');
        this.personal = response.data;
      } catch (error) {
        console.log(error);
      }
    },
    async borrarPersonal(id) {
      try {
        await axios.delete(`http://localhost:9000/personal/${id}`);
        this.personal = this.personal.filter(persona => persona.id !== id);
        this.mensajeExito = true;
      } catch (error) {
        console.log(error);
      }
    },
    ocultarMensaje() {
      this.mensajeExito = false;
    }
  }
};
</script>

<style>
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
