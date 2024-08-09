<template>
  <div class="container">
    <h4>Crear Patrocinador</h4>
    <hr>
    <form @submit.prevent="createSponsor">
      <div class="form-group">
        <label for="nombre">Nombre:</label>
        <input id="nombre" v-model="nombre" type="text" required>
      </div>
      <div class="form-group">
        <label for="apellido">Apellido:</label>
        <input id="apellido" v-model="apellido" type="text" required>
      </div>
      <div class="form-group">
        <label for="correo">Correo:</label>
        <input id="correo" v-model="correo" type="email" required>
      </div>
      <div class="form-group">
        <label for="telefono">Teléfono:</label>
        <input id="telefono" v-model="telefono" type="text" required>
      </div>
      <div class="btn-group-custom">
        <button type="submit" class="btn btn-crear">Crear</button>
        <button type="button" class="btn btn-cancelar" @click="cancelCreate">Cancelar</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'CrearPatrocinador',
  data() {
    return {
      nombre: '',
      apellido: '',
      correo: '',
      telefono: ''
    };
  },
  methods: {
    createSponsor() {
      // Lógica para crear un patrocinador
      console.log('Patrocinador creado:', this.nombre, this.apellido, this.correo, this.telefono);
      // Aquí podrías redirigir a la lista de patrocinadores
      this.$router.push('/patrocinadores');
    },
    cancelCreate() {
      // Lógica para cancelar la creación y volver a la lista de patrocinadores
      this.$router.push('/patrocinadores');
    }
  }
};
</script>

<style scoped>
.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background-color: #fff;
  border-radius: 10px; /* Bordes más redondeados */
  box-shadow: 0 4px 8px rgba(0,0,0,0.2); /* Sombra más profunda */
  margin-top: 30px;
}

h4 {
  margin-bottom: 20px;
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}

input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ced4da;
  border-radius: 5px;
  font-size: 16px;
}

.btn-group-custom {
  display: flex;
  gap: 10px; /* Espacio entre los botones */
  margin-top: 20px; /* Espacio superior para los botones */
}

.btn-crear,
.btn-cancelar {
  background-color: #17A1FA;
  border-color: #17A1FA;
  color: white;
  border-radius: 15px; /* Esquinas redondeadas */
  padding: 10px 20px; /* Espaciado interno */
  border: 1px solid transparent; /* Asegura que el borde sea visible */
  box-shadow: 0 2px 4px rgba(0,0,0,0.2); /* Sombra en los botones */
}

.btn-cancelar {
  background-color: #f44336;
  border-color: #f44336;
}

.btn-crear:hover {
  background-color: #0f8de3;
  border-color: #0f8de3;
  color: white;
}

.btn-cancelar:hover {
  background-color: #d32f2f;
  border-color: #d32f2f;
  color: white;
}

.btn:hover {
  opacity: 0.8;
}

h4{
  text-align: center;
}
</style>
