<template>
  <div class="container">
    <div class="card">
      <div class="card-header">
        Agregar Nuevo Evento
      </div>
      <div class="card-body">
        <form >
          <div class="form-group">
            <label for="nombre">Nombre del Evento:</label>
            <input type="text" class="form-control" required name="nombre"  id="nombre" placeholder="Nombre del Evento">
          </div>
          <div class="form-group">
            <label for="fecha">Fecha del Evento:</label>
            <input type="date" class="form-control" required   id="fecha">
          </div>
          <div class="form-group">
            <label for="capacidad">Capacidad de Personas:</label>
            <input type="number" class="form-control" required   id="capacidad" placeholder="Capacidad de Personas">
          </div>
          <div class="form-group">
            <label for="ubicacion">Ubicación:</label>
            <input type="text" class="form-control" required   id="ubicacion" placeholder="Ubicación del Evento">
          </div>
          <div class="form-group">
            <label for="organizador">Organizador:</label>
            <input type="text" class="form-control" required  id="organizador" placeholder="Organizador del Evento">
          </div>
          <div class="form-group">
            <label for="descripcion">Descripción:</label>
            <textarea class="form-control" required   rows="3" placeholder="Descripción del Evento"></textarea>
          </div>
          <div class="form-group">
            <label for="tipo">Tipo de Evento:</label>
            <input type="text" class="form-control" required  placeholder="Tipo de Evento">
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
import instance from '@/pluggins/axios'; // Asegúrate de que la ruta sea correcta

export default {
  name: 'crearEventos',
  data() {
    return {
      eventos: [],
      searchQuery: '',
      formularioVisible: false,
      modalTitle: '',
      modalEvento: {
        id: null,
        nombre: '',
        fecha: '',
        capacidad_personas: '',
        tipo_evento_id: '',
        organizador_id: '',
        ubicacion: ''
      },
      csrfToken: '', // Store CSRF token, if needed
    };
  },
  async mounted() {
    try {
      const response = await instance.get('/'); // Llamada inicial para obtener el token CSRF
      this.csrfToken = response.data.csrfToken;
      instance.defaults.headers.common['X-CSRF-Token'] = this.csrfToken;
      await this.fetchEventos();
    } catch (error) {
      console.error('Error al obtener el token CSRF o los eventos:', error);
    }
  },
  computed: {
    filteredEventos() {
      if (this.searchQuery.trim() === '') {
        return this.eventos;
      }
      return this.eventos.filter(evento =>
        evento.nombre.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    }
  },
  methods: {
    async fetchEventos() {
      try {
        const response = await instance.get('/eventos');
        this.eventos = response.data;
      } catch (error) {
        console.error('Error al obtener eventos:', error);
      }
    },
    performSearch() {
      // La búsqueda se maneja automáticamente por la propiedad computada
    },
    mostrarFormulario() {
      this.modalTitle = 'Agregar Evento';
      this.modalEvento = {
        id: null,
        nombre: '',
        fecha: '',
        capacidad_personas: '',
        tipo_evento_id: '',
        organizador_id: '',
        ubicacion: ''
      };
      this.formularioVisible = true;
    },
    async submitForm() {
      try {
        if (this.modalEvento.id === null) {
          await instance.post('/eventos', this.modalEvento);
        } else {
          await instance.put(`/eventos/${this.modalEvento.id}`, this.modalEvento);
        }
        await this.fetchEventos();
        this.ocultarFormulario();
      } catch (error) {
        console.error('Error al guardar el evento:', error);
      }
    },
    async editEvento(evento) {
      this.modalTitle = 'Editar Evento';
      this.modalEvento = { ...evento };
      this.formularioVisible = true;
    },
    async deleteEvento(id) {
      try {
        await instance.delete(`/eventos/${id}`);
        this.eventos = this.eventos.filter(evento => evento.id !== id);
      } catch (error) {
        console.error('Error al eliminar el evento:', error);
      }
    },
    ocultarFormulario() {
      this.formularioVisible = false;
    }
  }
};
</script>


<style scoped>
/* Estilos adicionales si es necesario */
</style>
