<template>
  <div class="container">
    <div class="card">
      <div class="card-header">
        Editar Evento
      </div>
      <div class="card-body">
        <form @submit.prevent="editarEvento">
          <div class="form-group">
            <label for="nombre">Nombre del Evento:</label>
            <input type="text" class="form-control" required v-model="evento.nombre" id="nombre" placeholder="Nombre del Evento">
          </div>
          <div class="form-group">
            <label for="fecha">Fecha del Evento:</label>
            <input type="date" class="form-control" required v-model="fechaEvento" id="fecha">
          </div>
          <div class="form-group">
            <label for="capacidad">Capacidad de Personas:</label>
            <input type="number" class="form-control" required v-model="evento.capacidad_personas" id="capacidad" placeholder="Capacidad de Personas">
          </div>
          <div class="form-group">
            <label for="ubicacion">Ubicación:</label>
            <input type="text" class="form-control" required v-model="evento.ubicacion" id="ubicacion" placeholder="Ubicación del Evento">
          </div>
          <div class="form-group">
            <label for="organizador">Organizador:</label>
            <input type="text" class="form-control" required v-model="evento.organizador_id" id="organizador" placeholder="Organizador del Evento">
          </div>
          <div class="form-group">
            <label for="descripcion">Descripción:</label>
            <textarea class="form-control" required v-model="evento.descripcion" id="descripcion" rows="3" placeholder="Descripción del Evento"></textarea>
          </div>
          <div class="form-group">
            <label for="tipo">Tipo de Evento:</label>
            <input type="text" class="form-control" required v-model="evento.tipo_evento_id" id="tipo" placeholder="Tipo de Evento">
          </div>
          <div class="btn-group" role="group" aria-label="">
            <button type="submit" class="btn btn-success">Guardar Cambios</button>
            <router-link to="/eventos" class="btn btn-warning">Cancelar</router-link>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'EditarEvento',
  data() {
    return {
      evento: {
        id: this.$route.params.id,
        nombre: '',
        fecha: '', // Usaremos esta propiedad para manejar la fecha en formato adecuado
        capacidad_personas: '',
        ubicacion: '',
        organizador_id: '',
        descripcion: '',
        tipo_evento_id: ''
      },
      fechaEvento: '' // Esta variable manejará la fecha en formato legible para el input date
    };
  },
  created() {
    this.obtenerEvento();
  },
  methods: {
    obtenerEvento() {
      const id = this.$route.params.id;
      axios.get(`http://localhost:3000/eventos/${id}`)
        .then(response => {
          this.evento = response.data;
          // Formatear la fecha para que sea compatible con <input type="date">
          this.fechaEvento = this.evento.fecha.substring(0, 10); // Tomar solo la parte de la fecha sin la hora
        })
        .catch(error => {
          console.log('Error al obtener el evento:', error);
        });
    },
    editarEvento() {
      // Asignar la fecha formateada de vuelta al objeto evento antes de enviarlo
      this.evento.fecha = this.fechaEvento;
      const id = this.$route.params.id;
      axios.put(`http://localhost:3000/eventos/${id}`, this.evento)
        .then(response => {
          console.log(response.data);
          this.$router.push('/eventos');
        })
        .catch(error => {
          console.log('Error al actualizar el evento:', error);
        });
    }
  }
};
</script>

<style>
/* Estilos adicionales si es necesario */
</style>
