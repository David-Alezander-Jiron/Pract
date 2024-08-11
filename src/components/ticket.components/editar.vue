<template>
  <div class="container animated fadeIn">
    <div class="card">
      <div class="card-header">
        Editar Ticket
      </div>
      <div class="card-body">
        <form @submit.prevent="submitForm">
          <div class="form-group animated fadeInLeft">
            <label for="evento">Evento:</label>
            <select class="form-control" required v-model="ticket.evento_id" id="evento">
              <option value="" disabled>Selecciona un evento</option>
              <option v-for="evento in eventos" :key="evento.id" :value="evento.id">
                {{ evento.nombre }}
              </option>
            </select>
          </div>
          <div class="form-group animated fadeInRight">
            <label for="codigoQr">Código QR:</label>
            <input type="text" class="form-control" required v-model="ticket.codigoQr" id="codigoQr" placeholder="Código QR del ticket">
          </div>
          <div class="form-group animated fadeInLeft">
            <label for="precio">Precio:</label>
            <input type="number" class="form-control" required v-model="ticket.precio" id="precio" placeholder="Precio del ticket">
          </div>
          <div class="form-group animated fadeInRight">
            <label for="estado">Estado:</label>
            <select class="form-control" required v-model="ticket.estado" id="estado">
              <option value="" disabled>Selecciona un estado</option>
              <option value="activo">Activo</option>
              <option value="inactivo">Inactivo</option>
            </select>
          </div>
          <div class="form-group animated fadeInLeft">
            <label for="participante">Participante:</label>
            <select class="form-control" required v-model="ticket.participantes_id" id="participante">
              <option value="" disabled>Selecciona un participante</option>
              <option v-for="participante in participantes" :key="participante.id" :value="participante.id">
                {{ participante.nombre }}
              </option>
            </select>
          </div>
          <div class="btn-group" role="group" aria-label="">
            <button type="submit" class="btn btn-success animated pulse">Guardar Cambios</button>
            <router-link to="/tickets" class="btn btn-warning animated pulse">Cancelar</router-link>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import Swal from 'sweetalert2';
import instance from '@/pluggins/axios'; // Asegúrate de que la ruta sea correcta

export default {
  name: 'EditarTicket',
  data() {
    return {
      ticket: {
        evento_id: '', // Campo para el id del evento
        codigoQr: '', // Campo para el código QR
        precio: '',
        estado: 'activo',
        participantes_id: '' // Campo para el id del participante
      },
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

      // Cargar la lista de eventos y participantes
      await this.fetchEventos();
      await this.fetchParticipantes();

      // Cargar los datos del ticket
      await this.fetchTicket();
    } catch (error) {
      console.error('Error al obtener el token CSRF, los eventos, los participantes o los datos del ticket:', error);
    }
  },
  methods: {
    async fetchEventos() {
      try {
        const response = await instance.get('/eventos');
        this.eventos = response.data;
      } catch (error) {
        console.error('Error al obtener los eventos:', error);
      }
    },
    async fetchParticipantes() {
      try {
        const response = await instance.get('/participantes');
        this.participantes = response.data;
      } catch (error) {
        console.error('Error al obtener los participantes:', error);
      }
    },
    async fetchTicket() {
      try {
        const response = await instance.get(`/tickets/${this.$route.params.id}`);
        this.ticket = response.data;
      } catch (error) {
        console.error('Error al obtener los datos del ticket:', error);
      }
    },
    async submitForm() {
      try {
        await instance.put(`/tickets/${this.$route.params.id}`, this.ticket, {
          headers: {
            'X-CSRF-Token': this.csrfToken // Asegúrate de que este valor sea correcto
          }
        });
        this.$router.push('/tickets');
      } catch (error) {
        console.error('Error al actualizar el ticket:', error);
        const message = error.response && error.response.data && error.response.data.message
          ? error.response.data.message
          : 'No se pudo actualizar el ticket.';

        Swal.fire({
          icon: 'error',
          title: 'Error al actualizar el ticket',
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

.btn-success {
  background-color: #28a745;
  border-color: #28a745;
  color: #fff;
}

.btn-success:hover {
  background-color: #218838;
  border-color: #1e7e34;
  color: #fff;
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
</style>
