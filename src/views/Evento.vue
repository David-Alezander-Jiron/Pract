<template>
  <div class="container">
    <div class="card">
      <div class="card-header">
        Eventos
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
              <td>{{ evento.capacidad }}</td>
              <td>{{ evento.ubicacion }}</td>
              <td>{{ evento.organizador }}</td>
              <td>{{ evento.tipo }}</td>
              <td>
                <div class="btn-group" role="group">
                  <router-link :to="{name:'EditarEvento', params:{id: evento.id}}" class="btn">Editar</router-link>
                  <button type="button" @click="borrarEvento(evento.id)" class="btn btn-danger">Eliminar</button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <router-link to="/eventos/crear" class="btn btn-primary">Agregar Evento</router-link>
  </div>
</template>

<script>
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
      fetch('http://localhost/eventos.php')
        .then(response => response.json())
        .then(data => {
          console.log(data);
          this.eventos = []
          if (typeof data[0] .success === 'undefined') {
            this.eventos = data;
          }
        })
        .catch(console.log);
    },
    borrarEvento(id) {
      console.log(id)
      fetch(`http://localhost/eventos.php/?borrar=`+ id)
        .then(response => response.json())
        .then(data => {
          console.log(data)
          this.listarEventos(); // Recargar la lista de eventos
          window.location.href = "/evento"
        })
        .catch(console.log);
    }
  }
};
</script>

<style scoped>
/* Estilos adicionales si es necesario */
</style>
