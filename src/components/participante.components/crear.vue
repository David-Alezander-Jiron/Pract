<template>
  <div class="container">
    <h4>Gestión de Participantes</h4>
    <hr>
    <form @submit.prevent="agregarParticipante">
      <div class="form-group">
        <label for="nombre">Nombre*:</label>
        <input type="text" id="nombre" v-model="nombre" placeholder="Nombre" required />
      </div>
      <div class="form-group">
        <label for="apellido">Apellido*:</label>
        <input type="text" id="apellido" v-model="apellido" placeholder="Apellido" required />
      </div>
      <div class="form-group">
        <label for="correo">Correo*:</label>
        <input type="email" id="correo" v-model="correo" placeholder="Correo electrónico" required />
      </div>
      <div class="form-group">
        <label for="telefono">Teléfono*:</label>
        <input type="tel" id="telefono" v-model="telefono" placeholder="Teléfono" required />
      </div>
      <div class="btn-group-custom">
        <button type="submit" class="btn btn-crear">Agregar</button>
        <button type="button" class="btn btn-cancelar" @click="cancelar">Cancelar</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'CrearParticipante',
  data() {
    return {
      nombre: '',
      apellido: '',
      correo: '',
      telefono: ''
    };
  },
  methods: {
    agregarParticipante() {
      // Lógica para agregar participante
      console.log('Agregar participante:', {
        nombre: this.nombre,
        apellido: this.apellido,
        correo: this.correo,
        telefono: this.telefono
      });
      // Redirigir a la ruta /participantes
      this.$router.push('/participantes');
    },
    cancelar() {
      // Lógica para cancelar
      this.nombre = '';
      this.apellido = '';
      this.correo = '';
      this.telefono = '';

      // Redirigir a la ruta /participantes
      this.$router.push('/participantes');
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
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.2);
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

input:focus {
  outline: none;
  box-shadow: 0 6px 8px rgba(0,0,0,0.15);
}

.btn-group-custom {
  display: flex;
  gap: 10px;
  margin-top: 20px;
  margin-left: 260px;
}

.btn-crear,
.btn-cancelar {
  background-color: #17A1FA;
  border-color: #17A1FA;
  color: white;
  border-radius: 15px;
  padding: 10px 20px;
  border: 1px solid transparent;
  box-shadow: 0 2px 4px rgba(0,0,0,0.2);
}

.btn-cancelar {
  background-color: #f44336;
  border-color: #f44336;
}

.btn-crear:hover {
  background-color: #0f8de3;
  border-color: #0f8de3;
}

.btn-cancelar:hover {
  background-color: #d32f2f;
  border-color: #d32f2f;
}

.btn:hover {
  opacity: 0.8;
}
</style>
