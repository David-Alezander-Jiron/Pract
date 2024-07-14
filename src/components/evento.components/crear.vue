<template>
    <div class="container">
      <h1>Nuevo Evento</h1>
      <form @submit.prevent="submitForm">
        <div class="row mb-3">
          <label class="form-label col-form-label col-md-3">Nombre del Evento</label>
          <div class="col-md-9">
            <input type="text" v-model="evento.nombre" class="form-control is-valid" required />
            
          </div>
        </div>
        <div class="row mb-3">
          <label class="form-label col-form-label col-md-3">Fecha del Evento</label>
          <div class="col-md-9">
            <input type="date" v-model="evento.fecha" class="form-control is-valid" required />
            
          </div>
        </div>
        <div class="row mb-3">
          <label class="form-label col-form-label col-md-3">Capacidad</label>
          <div class="col-md-9">
            <input type="number" v-model="evento.capacidad" class="form-control is-valid" required />
            
          </div>
        </div>
        <div class="row mb-3">
          <label class="form-label col-form-label col-md-3">Ubicación</label>
          <div class="col-md-9">
            <input type="text" v-model="evento.ubicacion" class="form-control is-valid" required />
            
          </div>
        </div>
        <div class="row mb-3">
          <label class="form-label col-form-label col-md-3">Organizador</label>
          <div class="col-md-9">
            <input type="text" v-model="evento.organizador" class="form-control is-valid" required />
            
          </div>
        </div>
        <div class="row mb-3">
          <label class="form-label col-form-label col-md-3">Descripción</label>
          <div class="col-md-9">
            <textarea v-model="evento.descripcion" class="form-control is-valid" required></textarea>
            
          </div>
        </div>
        <div class="row mb-3">
          <label class="form-label col-form-label col-md-3">Tipo de Evento</label>
          <div class="col-md-9">
            <input type="text" v-model="evento.tipo" class="form-control is-valid" required />
            
          </div>
        </div>
        <button type="submit" class="btn btn-primary">Guardar Evento</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    name: 'NewEvento',
    data() {
      return {
        evento: {
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
    methods: {
      submitForm() {
        // Aquí va la lógica para enviar los datos del formulario
        console.log(this.evento);
      }
    }
  };
  </script>
  
  <style scoped>
  /* Estilos adicionales si es necesario */
  </style>
  