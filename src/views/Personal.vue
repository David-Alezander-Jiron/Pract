<template>
  <div class="table-container">
    <table class="table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Nombre</th>
          <th>Apellido</th>
          <th>Rol</th>
          <th>Teléfono</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="persona in personal" :key="persona.id">
          <td>{{ persona.id }}</td>
          <td>{{ persona.nombre }}</td>
          <td>{{ persona.apellido }}</td>
          <td>{{ persona.rol }}</td>
          <td>{{ persona.telefono }}</td>
          <td>
            <div class="btn-group" role="group" aria-label="">
              <router-link :to="{ name: 'EditarPersonal', params: { id: persona.id }}" class="btn_editar">Editar</router-link>
              <button type="button" v-on:click="borrarPersonal(persona.id)" class="btn_eliminar">Eliminar</button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <router-link to="/personal/crear" class="btn btn-primary" role="button">Agregar Personal</router-link>
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
.table-container {
  width: 100%;
  overflow-x: auto;
}

.table {
  width: 100%;
  border-collapse: collapse;
  margin: 20px 0;
  font-size: 18px;
  text-align: left;
}

.table th, .table td {
  padding: 12px 15px;
  border: 1px solid #ddd;
}

.table th {
  background-color: #f4f4f4;
  color: #333;
}

.table tbody tr:nth-of-type(even) {
  background-color: #f9f9f9;
}

.table tbody tr:nth-of-type(odd) {
  background-color: #fff;
}

.table th.sortable:hover {
  cursor: pointer;
  background-color: #e1e1e1;
}

.table .avatar {
  display: flex;
  align-items: center;
}

.table .avatar img {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 10px;
}

.table .avatar span {
  vertical-align: middle;
}

.btn_editar {
  padding: 8px 12px;
  border: none;
  cursor: pointer;
  font-size: 14px;
  border-radius: 4px;
  background-color: #4CAF50; /* Green */
  color: white;
  
  color: white;
  padding: 10px 15px;
  text-decoration: none;
  border-radius: 4px;
  display: inline-block;
  margin-top: 20px;
  opacity: 0.8;
} 

.btn_eliminar {
  padding: 8px 12px;
  border: none;
  cursor: pointer;
  font-size: 14px;
  border-radius: 4px;
  background-color: #f44336; /* Red */
  color: white;
  opacity: 0.8;
 
  color: white;
  padding: 10px 15px;
  text-decoration: none;
  border-radius: 4px;
  display: inline-block;
  margin-top: 20px;


} 

</style>