<template>
  <div class="container">
    <h4>Editar Participante</h4>
    <form @submit.prevent="editarParticipante">
      <div class="form-group">
        <label for="nombre">Nombre:</label>
        <input type="text" v-model="participant.nombre" id="nombre" required />
      </div>
      <div class="form-group">
        <label for="apellido">Apellido:</label>
        <input type="text" v-model="participant.apellido" id="apellido" required />
      </div>
      <div class="form-group">
        <label for="correo">Correo:</label>
        <input type="email" v-model="participant.correo" id="correo" required />
      </div>
      <div class="form-group">
        <label for="telefono">Teléfono:</label>
        <input type="tel" v-model="participant.telefono" id="telefono" required />
      </div>
      <div class="btn-group-custom">
        <button type="submit" class="btn btn-crear">Actualizar</button>
        <button type="button" class="btn btn-cancelar" @click="cancelar">Cancelar</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'EditarParticipante',
  data() {
    return {
      participant: {
        nombre: '',
        apellido: '',
        correo: '',
        telefono: ''
      }
    };
  },
  methods: {
    editarParticipante() {
      // Lógica para editar participante
      console.log('Editar participante:', this.participant);
      // Redirigir a la ruta /participantes
      this.$router.push('/participantes');
    },
    cancelar() {
      // Lógica para cancelar
      this.participant.nombre = '';
      this.participant.apellido = '';
      this.participant.correo = '';
      this.participant.telefono = '';
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
  margin-left: 250px
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
h4{
  text-align: center;
}
</style>
