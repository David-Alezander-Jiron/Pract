<template>
  <div class="container">
    <div class="card">
      <div class="card-header">
        Editar Personal
      </div>
      <div class="card-body">
        <form>
          <div class="form-group">
            <label for="nombre">Nombre:</label>
            <input type="text" class="form-control" required id="nombre" aria-describedby="helpId" placeholder="">
            <small id="helpId" class="form-text text-muted">Escribe el nombre del personal</small>
          </div>
          <div class="form-group">
            <label for="apellido">Apellido:</label>
            <input type="text" class="form-control" required id="apellido" aria-describedby="helpId" placeholder="">
            <small id="helpId" class="form-text text-muted">Escribe el apellido del personal</small>
          </div>
          <div class="form-group">
            <label for="telefono">Teléfono:</label>
            <input type="text" class="form-control" required id="telefono" aria-describedby="helpId" placeholder="Teléfono">
            <small id="helpId" class="form-text text-muted">Escribe el teléfono del personal</small>
          </div>
          <div class="form-group">
            <label for="rol">Rol:</label>
            <input type="text" class="form-control" required id="rol" aria-describedby="helpId" placeholder="">
            <small id="helpId" class="form-text text-muted">Escribe el rol del personal</small>
          </div>
          <div class="btn-group" role="group" aria-label="">
            <button type="submit" class="btn btn-success">Guardar</button>
            <router-link to="/personal" class="btn btn-warning">Cancelar</router-link>
          </div>
        </form>
        <div class="mensaje-centro" style="display: none;">
          <div class="mensaje-contenido">
            <img src="" alt="" class="mensaje-imagen">
            <p>Editado correctamente!!</p>
            <button class="btn btn-primary">Aceptar</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EditarPersonal',
};
</script>

<style scoped>
.container {
  max-width: 600px;
  margin: 20px auto;
}
.card {
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
}
.card-header {
  background-color: #f8f9fa;
  font-size: 1.25rem;
  font-weight: bold;
}
.card-body {
  padding: 20px;
}
.form-group {
  margin-bottom: 15px;
}
.form-text {
  color: #6c757d;
}
.btn-group {
  display: flex;
  justify-content: space-between;
}
.btn {
  padding: 10px 20px;
  font-size: 1rem;
}
.mensaje-centro {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1000;
}
.mensaje-contenido {
  background: white;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
}
.mensaje-imagen {
  width: 50px;
  height: 50px;
}
.alert {
  text-align: center;
}
</style>
