<template>
    <div class="background">
      <h2>Listado de Usuarios</h2>
      <table class="table">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Email</th>
            <th>Rol</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(usuario, index) in usuarios" :key="index">
            <td>{{ usuario.nombre }}</td>
            <td>{{ usuario.email }}</td>
            <td>{{ usuario.rol }}</td>
            <td>
              <router-link :to="`/usuarios/editar/${usuario.id}`">
                <button class="action-btn">Editar</button>
              </router-link>
              <button class="action-btn" @click="eliminarUsuario(usuario.id)">Eliminar</button>
            </td>
          </tr>
        </tbody>
      </table>
      <router-link to="/usuarios/crear" class="add-btn">Añadir Usuario</router-link>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ListadoUsuarios',
    data() {
      return {
        usuarios: [
          { id: 1, nombre: 'Kevin Martínez', email: 'kevinmar@gmail.com', rol: 'Administrador' },
          { id: 2, nombre: 'Angel Hernández', email: 'angelher@gmail.com', rol: 'Editor' },
          { id: 3, nombre: 'Alejandro Rodríguez', email: 'alejandro@gmail.com', rol: 'Viewer' }
        ]
      };
    },
    methods: {
      eliminarUsuario(id) {
        // Lógica para eliminar un usuario
        console.log('Eliminar usuario con ID:', id);
        this.usuarios = this.usuarios.filter(usuario => usuario.id !== id);
      }
    }
  };
  </script>
  
  <style scoped>
  .background {
    border: 1px solid #D9D9D9;
    padding: 20px;
    max-width: 1600px; /* Ajusta el ancho máximo según tu preferencia */
    margin: 0 auto; /* Centra horizontalmente */
  }
  
  .table {
    width: 100%; /* Ajusta el ancho de la tabla al contenedor */
    border-collapse: collapse;
    margin-left: 10px;
  }
  .table th, .table td {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: center; /* Centra el texto en las celdas */
  }
  .table th {
    background-color: #f2f2f2;
  }
  .action-btn, .add-btn, .cancel-btn {
    background-color: #2196F3;
    color: white;
    border: none;
    padding: 5px 10px;
    border-radius: 5px;
    cursor: pointer;
    margin: 5px; /* Añade espacio alrededor de los botones */
  }
  .action-btn:hover, .add-btn:hover, .cancel-btn:hover {
    background-color: #17A1FA;
  }
  .add-btn {
    background-color: #17A1FA;
    padding: 10px 20px;
    margin-top: 10px;
  }
  .cancel-btn {
    background-color: #f44336;
  }
  .cancel-btn:hover {
    background-color: #d32f2f;
  }
  </style>
  