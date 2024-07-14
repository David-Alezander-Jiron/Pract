<template>

  <div class="contaier">

    <div class="card">
      <div class="card-header">
        Agregar Nuevo Personal
      </div>
      <div class="card-body">
        <form v-on:submit.prevent="agregarRegistro">
          <div class="form-group">
            <label for="">Nombre:</label>
            <input type="text" class="form-control" required name="nombre" v-model="persona.nombre" id="nombre"
              aria-describedby="helpId" placeholder="">
            <small id="helpId" class="form-text text-muted">Escribe el nombre del personal</small>
          </div>
          <div class="form-group">
            <label for="">Correo</label>
            <input type="email" class="form-control" required name="correo" id="correo" v-model="persona.correo"
              aria-describedby="helpId" placeholder="Correo">
            <small id="helpId" class="form-text text-muted">Escribe el correo</small>
          </div>
          <div class="form-group">
            <label for="">Rol:</label>
            <input type="text" class="form-control" required name="rol" id="rol" v-model="persona.rol" aria-describedby="helpId"
              placeholder="">
            <small id="helpId" class="form-text text-muted">Escribe el rol del personal</small>
          </div>

          <div class="btn-group" role="group" aria-label="">
            <button type="submit" class="btn btn-success">Agregar</button>
            <a href="/personal" type="button" class="btn btn-warning">Cancelar</a>
            
          </div>

        </form>

      </div>

    </div>

  </div>
</template>

<script>
export default {
  name: 'CrearPersonal',
  data(){
    return {
      persona: {}
    }
    },
    methods:{
      agregarRegistro(){
        console.log(this.persona);

      var datosEnviar={nombre:this.persona.nombre, correo:this.persona.correo, rol:this.persona.rol}

      fetch('http://localhost/personal.php/?insertar=1',{
        method: 'POST',
        body: JSON.stringify(datosEnviar)
      })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        window.location.href='/personal'
      })

      }
    }
  }

</script>