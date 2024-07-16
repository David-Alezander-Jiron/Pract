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
            <tr v-for="persona in personal" :key="persona.id">
              <td>{{ persona.id }}</td>
              <td>{{ persona.nombre }} {{ persona.apellido }}</td>
              <td>{{ persona.rol }}</td>
              <td>{{ persona.telefono }}</td>
              <td>
                <div class="btn-group" role="group" aria-label="">
                  <router-link :to="{name:'EditarPersonal',params:{id:persona.id}}" class="btn">Editar</router-link>
                  <button type="button" v-on:click="borrarPersonal(persona.id)" class="btn btn-danger">Eliminar</button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <a name="" id="" class="btn btn-primary" href="/personal/crear" role="button">Agregar Personal</a>

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
import axios from "axios";
import imagenExito from '@/assets/visto.png'; // Importa la imagen de éxito

export default {
  name: 'ListarPersonal',
  data() {
    return {
      personal: [],
      mensajeExito: false,
      imagenExito: imagenExito // Ruta de la imagen de éxito
    }
  },
  created() {
    this.listarPersonal();
  },
  methods: {
    async listarPersonal() {
      try {
        const response = await axios.get('http://localhost:3000/personal');
        this.personal = response.data;
      } catch(error){
        console.log('Error al listar el personal:', error);
      }
    },
    async borrarPersonal(id) {
      try {
        await axios.delete(`http://localhost:3000/personal/${id}`);
        this.personal = this.personal.filter(persona => persona.id !== id);
        this.mensajeExito = true;
      } catch(error){
        console.log('Error al eliminar el personal:', error);
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
