<template>
  <div class="container animated fadeIn">
    <div class="card">
      <div class="card-header">
        Crear Ticket
      </div>
      <div class="card-body">
        <form @submit.prevent="crearTicket">
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
            <button type="submit" class="btn btn-success animated pulse">Crear Ticket</button>
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
  name: 'CrearTicket',
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
    } catch (error) {
      console.error('Error al obtener el token CSRF, los eventos o los participantes:', error);
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
    async crearTicket() {
      try {
        const response = await instance.post('/tickets', this.ticket, {
          headers: {
            'X-CSRF-Token': this.csrfToken // Asegúrate de enviar el token CSRF
          }
        });
        Swal.fire({
          icon: 'success',
          title: 'Ticket creado con éxito',
          text: `El ticket con ID ${response.data.ticket.id} ha sido creado.`
        });
        this.$router.push('/tickets'); // Redirigir a la lista de tickets
      } catch (error) {
        console.error('Error al crear el ticket:', error);
        const message = error.response && error.response.data && error.response.data.message
          ? error.response.data.message
          : 'No se pudo crear el ticket.';
        Swal.fire({
          icon: 'error',
          title: 'Error al crear el ticket',
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

/* Ajustes para dispositivos con un ancho máximo de 360px */
@media (max-width: 360px) {
  .container {
    padding: 1em;
  }

  .form-group {
    margin-bottom: 1em;
  }

  .form-control {
    font-size: 14px;
    padding: 0.5em;
  }

  .btn-group {
    display: flex;
    flex-direction: column;
    gap: 0.5em;
  }

  .btn {
    font-size: 14px;
    padding: 0.5em;
  }

  .btn-success, .btn-warning {
    width: 100%;
  }
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

