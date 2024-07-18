<template>
  <div class="container">
    <div class="card">
      <div class="card-header">
        Editar Evento
      </div>
      <div class="card-body">
        <form>
          <div class="form-group">
            <label for="nombre">Nombre del Evento:</label>
            <input type="text" class="form-control" required id="nombre" placeholder="Nombre del Evento">
          </div>
          <div class="form-group">
            <label for="fecha">Fecha del Evento:</label>
            <input type="date" class="form-control" required id="fecha">
          </div>
          <div class="form-group">
            <label for="capacidad">Capacidad de Personas:</label>
            <input type="number" class="form-control" required id="capacidad" placeholder="Capacidad de Personas">
          </div>
          <div class="form-group">
            <label for="ubicacion">Ubicación:</label>
            <input type="text" class="form-control" required id="ubicacion" placeholder="Ubicación del Evento">
          </div>
          <div class="form-group">
            <label for="organizador">Organizador:</label>
            <input type="text" class="form-control" required id="organizador" placeholder="Organizador del Evento">
          </div>
          <div class="form-group">
            <label for="descripcion">Descripción:</label>
            <textarea class="form-control" required id="descripcion" rows="3" placeholder="Descripción del Evento"></textarea>
          </div>
          <div class="form-group">
            <label for="tipo">Tipo de Evento:</label>
            <input type="text" class="form-control" required id="tipo" placeholder="Tipo de Evento">
          </div>
          <div class="btn-group" role="group" aria-label="">
            <a href="/evento" class="btn btn-success">Guardar</a>
            <router-link to="/eventos" class="btn btn-warning">Cancelar</router-link>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EditarEvento',
};
</script>

<style scoped>
.container {
  max-width: 600px;
  margin: 20px auto;
  padding: 20px;
}

.card {
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
}

.card-header {
  background-color: #f8f9fa;
  font-size: 1.25rem;
  font-weight: bold;
  padding: 10px 15px;
}

.card-body {
  padding: 20px;
}

.form-group {
  margin-bottom: 15px;
}

.form-control {
  width: 100%;
  padding: 10px;
  font-size: 1rem;
  border: 1px solid #ced4da;
  border-radius: 4px;
}

.btn-group {
  display: flex;
  justify-content: space-between;
}

.btn {
  padding: 10px 20px;
  font-size: 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.btn-success {
  background-color: #28a745;
  color: #fff;
}

.btn-success:hover {
  background-color: #218838;
}

.btn-warning {
  background-color: #ffc107;
  color: #fff;
}

.btn-warning:hover {
  background-color: #e0a800;
}
</style>
