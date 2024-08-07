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
            <tr v-for="evento in eventos" :key="evento.id">
              <td>{{ evento.id }}</td>
              <td>{{ evento.nombre }}</td>
              <td>{{ evento.fecha }}</td>
              <td>{{ evento.capacidad_personas }}</td>
              <td>{{ evento.ubicacion }}</td>
              <td>{{ evento.organizador_id }}</td>
              <td>{{ evento.tipo_evento_id }}</td>
              <td>
                <div class="btn-group" role="group">
                  <router-link :to="{ name: 'EditarEvento', params: { id: evento.id } }" class="btn">Editar</router-link>
                  <button type="button" @click="borrarEvento(evento.id)" class="btn btn-danger">Eliminar</button>
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
import instance from '@/pluggins/axios'; // Asegúrate de que la ruta sea correcta

export default {
  name: 'ListarEventos',
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
