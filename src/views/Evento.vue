<template>
  <div class="container">
    <div class="card">
      <div class="card-header">
        Lista de Eventos
      </div>
      <div class="card-body">
        <table class="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Fecha</th>
              <th>Capacidad</th>
              <th>Ubicación</th>
              <th>Organizador</th>
              <th>Tipo</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="evento in eventos" :key="evento.id">
              <td>{{ evento.id }}</td>
              <td>{{ evento.nombre }}</td>
              <td>{{ evento.fecha }}</td>
              <td>{{ evento.capacidad_personas }}</td>
              <td>{{ evento.ubicacion }}</td>
              <td>{{ evento.organizador_id }}</td>
              <td>{{ evento.tipo_evento_id }}</td>
              <td>
                <div class="btn-group" role="group">
                  <router-link :to="{ name: 'EditarEvento', params: { id: evento.id } }" class="btn">Editar</router-link>
                  <button type="button" @click="borrarEvento(evento.id)" class="btn btn-danger">Eliminar</button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div> <br>
    <router-link to="/eventos/crear" class="btn btn-primary">Agregar Evento</router-link>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'ListarEventos',
  data() {
    return {
      eventos: []
    };
  },
  created() {
    this.listarEventos();
  },
  methods: {
    listarEventos() {
      axios.get('http://localhost:3000/eventos')
        .then(response => {
          this.eventos = response.data;
        })
        .catch(error => {
          console.error('Error al cargar eventos:', error);
        });
    },
    borrarEvento(id) {
      axios.delete(`http://localhost:3000/eventos/${id}`)
        .then(() => {
          this.listarEventos(); // Recargar la lista de eventos
        })
        .catch(error => {
          console.error('Error al eliminar evento:', error);
        });
    }
  }
};
</script>

<style scoped>
/* Estilos adicionales si es necesario */
</style>
