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
              <th>ID</th>
              <th>Nombre</th>
              <th>Correo</th>
              <th>ROL</th>
              <th>Acciones</th>

            </tr>
          </thead>
          <tbody>

            <tr v-for="persona in personal" :key="persona.id">

              <td>{{ persona.id }}</td>
              <td>{{ persona.nombre }}</td>
              <td>{{ persona.correo }}</td>
              <td>{{ persona.rol }}</td>
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
    listarPersonal() {
      fetch('')
        .then(response => response.json())
        .then(data => {
          console.log(data);
          this.personal = []
          if (typeof data[0].success === 'undefined') {
            this.personal = data;
          }

        })
        .catch(console.log)
    },
    borrarPersonal(id) {
      console.log(id)
      fetch('' + id)
        .then(response => response.json())
        .then(data => {
          console.log(data)
          window.location.href = "/personal"

        })
        .catch(console.log)

    }
  }
};
</script>

<style>
body {
  background-color: #f5f5f5;
  margin: 0%;
  padding-left: 50px;

}
</style>