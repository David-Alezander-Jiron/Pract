<template>
  <div class="container">
    <div class="card">
      <div class="card-header">
        Agregar Nuevo Evento
      </div>
      <div class="card-body">
        <form @submit.prevent="agregarEvento">
          <div class="form-group">
            <label for="nombre">Nombre del Evento:</label>
            <input type="text" class="form-control" required name="nombre" v-model="evento.nombre" id="nombre" placeholder="Nombre del Evento">
          </div>
          <div class="form-group">
            <label for="fecha">Fecha del Evento:</label>
            <input type="date" class="form-control" required name="fecha" v-model="evento.fecha" id="fecha">
          </div>
          <div class="form-group">
            <label for="capacidad">Capacidad de Personas:</label>
            <input type="number" class="form-control" required name="capacidad" v-model="evento.capacidad_personas" id="capacidad" placeholder="Capacidad de Personas">
          </div>
          <div class="form-group">
            <label for="ubicacion">Ubicación:</label>
            <input type="text" class="form-control" required name="ubicacion" v-model="evento.ubicacion" id="ubicacion" placeholder="Ubicación del Evento">
          </div>
          <div class="form-group">
            <label for="organizador">Organizador:</label>
            <input type="text" class="form-control" required name="organizador" v-model="evento.organizador_id" id="organizador" placeholder="Organizador del Evento">
          </div>
          <div class="form-group">
            <label for="descripcion">Descripción:</label>
            <textarea class="form-control" required name="descripcion" v-model="evento.descripcion" id="descripcion" rows="3" placeholder="Descripción del Evento"></textarea>
          </div>
          <div class="form-group">
            <label for="tipo">Tipo de Evento:</label>
            <input type="text" class="form-control" required name="tipo" v-model="evento.tipo_evento_id" id="tipo" placeholder="Tipo de Evento">
          </div>
          <div class="btn-group" role="group" aria-label="">
            <button type="submit" class="btn btn-success">Agregar Evento</button>
            <router-link to="/eventos" class="btn btn-warning">Cancelar</router-link>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>


export default {
  name: 'CrearEvento',
}
  
 
</script>

<style scoped>
/* Estilos adicionales si es necesario */
</style>
