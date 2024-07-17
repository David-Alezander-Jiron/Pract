<template>
  <div class="container">
    <div class="card">
      <div class="card-header">
        PERSONAL
      </div>
      <div class="card-body">
        <table class="table">
          <thead>
            <tr>
              <th>Id</th>
              <th>Nombre</th>
              <th>Rol</th>
              <th>Telefono</th>
              <th>Acción</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Edison Flores</td>
              <td>Mesero</td>
              <td>0979309324</td>
              <td>
                <div class="btn-group" role="group" aria-label="">
                  <a href="/personal/editar/1" class="btn"> Editar </a>
                  <button type="button" class="btn btn-danger">Eliminar</button>
                </div>
              </td>
            </tr>

            <tr>
              <td>2</td>
              <td>Edison Flores</td>
              <td>Mesero</td>
              <td>0979309324</td>
              <td>
                <div class="btn-group" role="group" aria-label="">
                  <a href="/personal/editar/2" class="btn"> Editar </a>
                  <button type="button" class="btn btn-danger">Eliminar</button>
                </div>
              </td>
            </tr>
            <tr>
              <td>3</td>
              <td>Edison Flores</td>
              <td>Mesero</td>
              <td>0979309324</td>
              <td>
                <div class="btn-group" role="group" aria-label="">
                  <a href="/personal/editar/3" class="btn"> Editar </a>
                  <button type="button" class="btn btn-danger">Eliminar</button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <a name="" id="" class="btn btn-primary" href="/personal/crear" role="button">Agregar Personal</a>

    <div v-if="mensajeExito" class="mensaje-centro">
      <div class="mensaje-contenido">
        <img :src="imagenExito" alt="" class="mensaje-imagen">
        <p>Eliminado correctamente!!</p>
        <button @click="ocultarMensaje" class="btn btn-primary">Aceptar</button>
      </div>
    </div>
  </div>
</template>

<script>


export default {
  name: 'ListarPersonal',
  
};
</script>

<style>
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
  width: 100px;
  height: 75px;
}
</style>
