<template>
  <div class="container">
    <h2>Crear Ticket</h2>
    <form @submit.prevent="guardarTicket">
      <div class="form-group">
        <label for="codigo">Código:</label>
        <input v-model="nuevoTicket.codigo" type="text" id="codigo" required />
      </div>
      <div class="form-group">
        <label for="precio">Precio:</label>
        <input v-model="nuevoTicket.precio" type="text" id="precio" required />
      </div>
      <div class="form-group">
        <label for="estado">Estado:</label>
        <select id="estado" v-model="nuevoTicket.estado" required>
          <option value="">Seleccionar</option>
          <option value="Activo">Activo</option>
          <option value="Cancelado">Cancelado</option>
          <option value="Vendido">Vendido</option>
        </select>
      </div>
      <div class="form-group">
        <label for="participantes">Participantes:</label>
        <input v-model="nuevoTicket.participantes" type="text" id="participantes" required />
      </div>
      <div class="btn-group-custom">
        <router-link to="/tickets" class="btn btn-editar">Editar</router-link>
        <router-link to="/tickets" class="btn btn-cancelar">Cancelar</router-link>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'CrearTicket',
  data() {
    return {
      nuevoTicket: {
        codigo: '',
        precio: '',
        estado: '',
        participantes: ''
      }
    };
  },
  methods: {
    guardarTicket() {
      // Lógica para guardar el nuevo ticket (por ejemplo, enviarlo a una API)
      console.log('Nuevo ticket:', this.nuevoTicket);
      // Limpia el formulario después de guardar
      this.nuevoTicket = {
        codigo: '',
        precio: '',
        estado: '',
        participantes: ''
      };
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

h2 {
  margin-bottom: 20px;
  text-align: center;
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}

input, select {
  width: 100%;
  padding: 10px;
  border: 1px solid #ced4da;
  border-radius: 5px;
  font-size: 16px;
}

input:focus, select:focus {
  outline: none;
  box-shadow: 0 6px 8px rgba(0,0,0,0.15);
}

.btn-group-custom {
  display: flex;
  gap: 10px;
  margin-top: 20px;
  margin-left: 270px;
}

.btn {
  background-color: #17A1FA;
  border-color: #17A1FA;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 15px;
  cursor: pointer;
  text-decoration: none;
  display: inline-block;
  text-align: center;
}

.btn-editar {
  background-color: #007bff;
}

.btn-cancelar {
  background-color: #ff3b30;
}

.btn-editar:hover {
  background-color: #0f8de3;
}

.btn-cancelar:hover {
  background-color: #d32f2f;
}

.btn:hover {
  opacity: 0.8;
}
</style>
