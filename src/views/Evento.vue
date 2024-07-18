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
            <tr >
              <td>1</td>
              <td>Trueno</td>
              <td>24/11/2024</td>
              <td>500</td>
              <td>Estadio Atahualpa</td>
              <td>EventTix</td>
              <td>mediano</td>
              <td>
                <div class="btn-group" role="group">
                  <a href="/eventos/editar/1" class="btn">Editar</a>
                  <button type="button" class="btn btn-danger">Eliminar</button>
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

export default {
  name: 'ListarEventos',
  
};
</script>

<style scoped>
/* Estilos adicionales si es necesario */
</style>
