<template>
    <div class="container">
      <h2>Editar Usuario</h2>
      <form @submit.prevent="editarUsuario">
        <div class="form-group">
          <label for="nombres">Nombres</label>
          <input type="text" id="nombres" v-model="usuario.nombres" required>
        </div>
        <div class="form-group">
          <label for="apellidos">Apellidos</label>
          <input type="text" id="apellidos" v-model="usuario.apellidos" required>
        </div>
        <div class="form-group">
          <label for="telefono">Teléfono</label>
          <input type="text" id="telefono" v-model="usuario.telefono" required>
        </div>
        <div class="form-group">
          <label for="rol_id">Rol ID</label>
          <input type="text" id="rol_id" v-model="usuario.rol_id" required>
        </div>
        <button type="submit" class="btn btn-primary">Guardar Cambios</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    name: 'EditarUsuario',
    data() {
      return {
        usuario: {
          id: this.$route.params.id,
          nombres: '',
          apellidos: '',
          telefono: '',
          rol_id: ''
        }
      };
    },
    created() {
      this.obtenerUsuario();
    },
    methods: {
      obtenerUsuario() {
        fetch(`http://localhost/usuarios.php?id=${this.usuario.id}`)
          .then(response => response.json())
          .then(data => {
            this.usuario = data;
          })
          .catch(error => {
            console.error('Error fetching usuario:', error);
          });
      },
      editarUsuario() {
        fetch(`http://localhost/usuarios.php?id=${this.usuario.id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(this.usuario)
        })
          .then(response => response.json())
          .then(data => {
            console.log('Usuario editado:', data);
            this.$router.push('/usuarios');
          })
          .catch(error => {
            console.error('Error al editar usuario:', error);
          });
      }
    }
  };
  </script>
  
  <style scoped>
  .container {
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
    background-color: #f8f9fa;
    border: 1px solid #d3d3d3;
    border-radius: 8px;
  }
  .form-group {
    margin-bottom: 15px;
  }
  label {
    display: block;
    margin-bottom: 5px;
  }
  input {
    width: 100%;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  .btn {
    display: block;
    width: 100%;
    padding: 10px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  .btn:hover {
    background-color: #0056b3;
  }
  </style>
  