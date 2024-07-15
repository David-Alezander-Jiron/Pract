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

                  <router-link :to="{name:'EditarPersonal',params:{id:persona.id}}" class="btn">Editar</router-link>
                  <button type="button" v-on:click="borrarPersonal(persona.id)" class="btn btn-danger">Eliminar</button>
                </div>

              </td>
            </tr>
          </tbody>
        </table>
      </div>

    </div>

    <a name="" id="" class="btn btn-primary" href="/personal/crear" role="button">agregar personal</a>

  </div>


</template>

<script>

import axios from "axios";



export default {
  name: 'ListarPersonal',
  data() {
    return {
      personal: []
    }
  },

  created: function () {
    this.listarPersonal();

  },
  methods: {
    async listarPersonal() {
      try {
        const reponse = await axios.get('http://localhost:3000/personal');
        this.personal = reponse.data;
      } catch(error){
        console.log(error);
      }
    },

    async borrarPersonal(id) {
      try {
        await axios.delete('http://localhost:3000/personal/' + id);
        this.personal = this.personal.filter(persona => persona.id !== id );
      } catch(error){
        console.log(error);
      }
    }


  }
};
</script>

<style>
</style>
