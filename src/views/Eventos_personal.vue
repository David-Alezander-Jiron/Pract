<template>
    <div class="container">
      <div class="card animated fadeIn">
        <div class="card-header">
          Crear Evento-Personal
        </div>
        <div class="card-body">
          <form @submit.prevent="crearEventoPersonal">
            <div class="form-group">
              <label for="evento_id">Nombre del Evento:</label>
              <select v-model.trim="nuevoEventoPersonal.evento_id" class="form-control" id="evento_id" required>
                <option v-for="evento in eventos" :key="evento.id" :value="evento.id">{{ evento.nombre }}</option>
              </select>
            </div>
            
            <div class="form-group">
              <label for="personal_id">Nombre del Personal:</label>
              <select v-model.trim="nuevoEventoPersonal.personal_id" class="form-control" id="personal_id" required>
                <option v-for="personal in personals" :key="personal.id" :value="personal.id">{{ personal.nombre }}</option>
              </select>
            </div>
            <button type="submit" class="btn btn-primary animated pulse">Crear Evento-Personal</button>
          </form>
        </div>
      </div>
      
      <div class="card mt-4 animated fadeIn">
        <div class="card-header">
          Lista de Eventos-Personales
        </div>
        <div class="card-body">
          <table class="table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Nombre del Evento</th>
                <th>Nombre del Personal</th>
                <th>Estado</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="eventoPersonal in eventosPersonals" :key="eventoPersonal.id" class="animated fadeIn">
                <td>{{ eventoPersonal.id }}</td>
                <td>{{ getNombreEvento(eventoPersonal.evento_id) }}</td>
                <td>{{ getNombrePersonal(eventoPersonal.personal_id) }}</td>
                <td>{{ eventoPersonal.estado }}</td>
                <td>
                  <button @click="eliminarEventoPersonal(eventoPersonal.id)" class="btn btn-danger animated shake">Eliminar</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import Swal from 'sweetalert2';
  import instance from '@/pluggins/axios'; // Asegúrate de que la ruta sea correcta
  
  export default {
    name: 'ListarEventosPersonals',
    data() {
      return {
        eventosPersonals: [],
        eventos: [],
        personals: [],
        nuevoEventoPersonal: {
          evento_id: '',
          personal_id: '',
          estado: 'activo'
        },
        csrfToken: ''
      };
    },
    async mounted() {
      try {
        // Obtén el token CSRF del backend
        const response = await instance.get('/');
        this.csrfToken = response.data.csrfToken;
        // Configura el token CSRF en Axios
        instance.defaults.headers['X-CSRF-Token'] = this.csrfToken;
  
        // Cargar la lista de eventos-personals, eventos y personals
        await this.fetchEventosPersonals();
        await this.fetchEventos();
        await this.fetchPersonals();
      } catch (error) {
        console.error('Error al obtener el token CSRF o los eventos-personals:', error);
      }
    },
    methods: {
      async fetchEventosPersonals() {
        try {
          const response = await instance.get('/eventos-personals');
          this.eventosPersonals = response.data;
        } catch (error) {
          console.error('Error al obtener los eventos-personals:', error);
        }
      },
      async fetchEventos() {
        try {
          const response = await instance.get('/eventos');
          this.eventos = response.data;
        } catch (error) {
          console.error('Error al obtener los eventos:', error);
        }
      },
      async fetchPersonals() {
        try {
          const response = await instance.get('/personal');
          this.personals = response.data;
        } catch (error) {
          console.error('Error al obtener los personals:', error);
        }
      },
      getNombreEvento(id) {
        const evento = this.eventos.find(e => e.id === id);
        return evento ? evento.nombre : '';
      },
      getNombrePersonal(id) {
        const personal = this.personals.find(p => p.id === id);
        return personal ? personal.nombre : '';
      },
      async crearEventoPersonal() {
        try {
          await instance.post('/eventos-personals', this.nuevoEventoPersonal, {
            headers: {
              'X-CSRF-Token': this.csrfToken // Asegúrate de enviar el token CSRF
            }
          });
          await this.fetchEventosPersonals(); // Recargar la lista de eventos-personals después de crear uno nuevo
          this.nuevoEventoPersonal = {
            evento_id: '',
            personal_id: '',
            estado: 'activo'
          }; // Limpiar el formulario después de crear el evento-personal
        } catch (error) {
          console.error('Error al crear el evento-personal:', error);
          const message = error.response && error.response.data && error.response.data.message
            ? error.response.data.message
            : 'No se pudo crear el evento-personal.';
  
          Swal.fire({
            icon: 'error',
            title: 'Error al crear el evento-personal',
            text: message
          });
        }
      },
      async eliminarEventoPersonal(id) {
        try {
          await instance.delete(`/eventos-personals/${id}`, {
            headers: {
              'X-CSRF-Token': this.csrfToken // Asegúrate de enviar el token CSRF
            }
          });
          await this.fetchEventosPersonals(); // Recargar la lista de eventos-personals después de eliminar
        } catch (error) {
          console.error('Error al eliminar el evento-personal:', error);
          const message = error.response && error.response.data && error.response.data.message
            ? error.response.data.message
            : 'No se pudo eliminar el evento-personal.';
  
          Swal.fire({
            icon: 'error',
            title: 'Error al eliminar el evento-personal',
            text: message
          });
        }
      }
    }
  };
  </script>
  
  <style scoped>
  /* Estilos adicionales si es necesario */
  @import url('https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css');
  
  .card {
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    border-radius: 5px;
  }
  
  .card:hover {
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
  }
  
  .container {
    padding: 2em;
  }
  
  .btn-primary {
    background-color: #007BFF;
    border-color: #007BFF;
    color: #fff;
  }
  
  .btn-primary:hover {
    background-color: #0056b3;
    border-color: #0056b3;
    color: #fff;
  }
  
  .btn-danger {
    background-color: #dc3545;
    border-color: #dc3545;
    color: #fff;
  }
  
  .btn-danger:hover {
    background-color: #c82333;
    border-color: #bd2130;
    color: #fff;
  }
  </style>