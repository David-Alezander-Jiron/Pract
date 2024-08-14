<template>
  <div class="container">
    <div class="card animated fadeIn">
      <div class="card-header">
        Lista de Tickets
      </div>
      <div class="card-body">
        <table class="table table-hover">
          <thead>
            <tr>
              <th>ID</th>
              <th>Código QR</th>
              <th>Evento</th>
              <th>Precio</th>
              <th>Estado</th>
              <th>Participante</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="ticket in tickets" :key="ticket.id" class="animated fadeIn">
              <td>{{ ticket.id }}</td>
              <td><qrcode-vue :value="ticket.codigoQr" :size="100"></qrcode-vue></td>
              <td>{{ ticket.eventoNombre }}</td>
              <td>{{ ticket.precio }}</td>
              <td>{{ ticket.estado }}</td>
              <td>{{ ticket.participanteNombre }}</td>
              <td>
                <router-link :to="`/tickets/editar/${ticket.id}`" class="btn btn-warning animated pulse">Editar</router-link>
                <button @click="eliminarTicket(ticket.id)" class="btn btn-danger animated shake">Eliminar</button>
              </td>
            </tr>
          </tbody>
        </table>
        <router-link to="/tickets/crear" class="btn btn-primary animated pulse">Agregar Ticket</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import Swal from 'sweetalert2';
import instance from '@/pluggins/axios'; // Asegúrate de que la ruta sea correcta
import QrcodeVue from 'qrcode.vue';

export default {
  name: 'ListarTickets',
  components: {
    QrcodeVue
  },
  data() {
    return {
      tickets: [],
      eventos: [],
      participantes: [],
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

      // Cargar la lista de eventos, participantes y tickets
      await this.fetchData();
    } catch (error) {
      console.error('Error al obtener el token CSRF o los datos:', error);
    }
  },
  methods: {
    async fetchData() {
      try {
        const [ticketsResponse, eventosResponse, participantesResponse] = await Promise.all([
          instance.get('/tickets'),
          instance.get('/eventos'),
          instance.get('/participantes')
        ]);

        this.eventos = eventosResponse.data;
        this.participantes = participantesResponse.data;

        this.tickets = ticketsResponse.data.map(ticket => {
          const evento = this.eventos.find(e => e.id === ticket.evento_id);
          const participante = this.participantes.find(p => p.id === ticket.participantes_id);
          return {
            ...ticket,
            eventoNombre: evento ? evento.nombre : 'Evento desconocido',
            participanteNombre: participante ? participante.nombre : 'Participante desconocido'
          };
        });
      } catch (error) {
        console.error('Error al obtener los datos:', error);
      }
    },
    async eliminarTicket(id) {
      try {
        await instance.delete(`/tickets/${id}`, {
          headers: {
            'X-CSRF-Token': this.csrfToken // Asegúrate de enviar el token CSRF
          }
        });
        await this.fetchData(); // Recargar la lista de tickets después de eliminar
      } catch (error) {
        console.error('Error al eliminar el ticket:', error);
        const message = error.response && error.response.data && error.response.data.message
          ? error.response.data.message
          : 'No se pudo eliminar el ticket.';
        Swal.fire({
          icon: 'error',
          title: 'Error al eliminar el ticket',
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

.btn-warning {
  background-color: #ffc107;
  border-color: #ffc107;
  color: #212529;
}

.btn-warning:hover {
  background-color: #d39e00;
  border-color: #c69500;
  color: #212529;
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

.btn-primary {
  background-color: #007bff;
  border-color: #007bff;
  color: #fff;
}

.btn-primary:hover {
  background-color: #0069d9;
  border-color: #0062cc;
  color: #fff;
}

/* Media Query para pantallas de tamaño del Galaxy S8+ (360px de ancho) */
@media (max-width: 360px) {
  .container {
    padding: 1em;
  }

  .card-body table {
    font-size: 0.8em; 
  }

  .card-body table th, .card-body table td {
    padding: 0.5em; 
  }

  .card-body table .btn {
    font-size: 0.75em; 
    padding: 0.4em 0.6em; 
  }

  .card-body table qrcode-vue {
    width: 75px; 
    height: 75px; 
  }

  .card-header {
    font-size: 1.2em; 
  }
}
</style>
