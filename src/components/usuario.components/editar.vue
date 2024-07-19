<template>
    <div class="background">
      <h2>Editar Usuario</h2>
      <form @submit.prevent="updateUser">
        <label>Nombre:</label>
        <input v-model="nombre" type="text" required>
        <label>Email:</label>
        <input v-model="email" type="email" required>
        <label>Rol:</label>
        <input v-model="rol" type="text" required>
        <div class="button-group">
          <button type="submit" class="action-btn">Actualizar</button>
          <button type="button" class="cancel-btn" @click="cancelEdit">Cancelar</button>
        </div>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    name: 'EditarUsuario',
    data() {
      return {
        nombre: '',
        email: '',
        rol: ''
      };
    },
    created() {
      // Lógica para cargar los datos del usuario a editar (esto es un ejemplo)
      const userId = this.$route.params.id;
      // Aquí podrías hacer una llamada a una API para obtener los datos del usuario
      // Simulación de datos para el ejemplo
      if (userId === '1') {
        this.nombre = 'Juan Pérez';
        this.email = 'juan.perez@example.com';
        this.rol = 'Admin';
      }
    },
    methods: {
      updateUser() {
        // Lógica para actualizar el usuario
        console.log('Usuario actualizado:', this.nombre, this.email, this.rol);
        // Aquí podrías redirigir a la lista de usuarios
        this.$router.push('/usuarios');
      },
      cancelEdit() {
        // Lógica para cancelar la edición y volver a la lista de usuarios
        this.$router.push('/usuarios');
      }
    }
  };
  </script>
  
  <style scoped>
  .background {
  border: 1px solid black;
  padding: 20px;
  max-width: 800px; /* Ajusta el ancho máximo según tu preferencia */
  margin: 80px auto; /* Centra horizontalmente */
}

form {
  display: flex;
  flex-direction: column;
}

label {
  margin-top: 10px;
}

input {
  padding: 5px;
  margin-top: 5px;
}

.button-group {
  display: flex;
  justify-content: center; /* Centra los botones en el contenedor */
  gap: 10px; /* Ajusta el espacio entre los botones */
  margin-top: 20px;
}

.action-btn, .cancel-btn {
  background-color: #2196F3;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
}

.cancel-btn {
  background-color: #f44336;
}

.cancel-btn:hover {
  background-color: #d32f2f;
}

.action-btn:hover {
  background-color: #0b7dda;
}

  </style>
  