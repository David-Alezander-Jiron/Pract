<template>
    <div class="container">
      <h1>Editar Evento</h1>
      <form @submit.prevent="submitForm">
        <div class="row mb-3">
          <label class="form-label col-form-label col-md-3">Nombre del Evento</label>
          <div class="col-md-9">
            <input type="text" v-model="evento.nombre" class="form-control is-valid" required />
          </div>
        </div>
        <!-- Repite los campos para fecha, capacidad, ubicación, organizador, descripción y tipo de evento -->
        <button type="submit" class="btn btn-primary">Actualizar Evento</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    name: 'EditarEvento',
    data() {
      return {
        evento: {
          id: this.$route.params.id,
          nombre: '',
          fecha: '',
          capacidad: '',
          ubicacion: '',
          organizador: '',
          descripcion: '',
          tipo: ''
        }
      };
    },
    created() {
      this.obtenerEvento();
    },
    methods: {
      obtenerEvento() {
        fetch(`http://localhost/eventos.php/?id=${this.evento.id}`)
          .then(response => response.json())
          .then(data => {
            console.log(data);
            if (data && data.length > 0) {
                this.evento = data[0];   
            }
          })
          .catch(console.log);
      },
      submitForm() {
        fetch(`http://localhost/eventos.php/?actualizar=${this.evento.id}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(this.evento)
        })
          .then(response => response.json())
          .then(data => {
            console.log(data);
            this.$router.push('/eventos'); // Redirigir a la lista de eventos
          })
          .catch(console.log);
      }
    }
  };
  </script>
  
  <style scoped>
  /* Estilos adicionales si es necesario */
  </style>
  