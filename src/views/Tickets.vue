<template>
  <div class="background">
    <div class="container">
      <h2>Listado de Tickets</h2>

      <table class="table">
        <thead>
          <tr>
            <th>Código</th>
            <th>Precio</th>
            <th>Estado</th>
            <th>Participantes</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="ticket in tickets" :key="ticket.codigo">
            <td>{{ ticket.codigo }}</td>
            <td>{{ ticket.precio }}</td>
            <td>{{ ticket.estado }}</td>
            <td>{{ ticket.participantes }}</td>
            <td>
              <a href="/tickets/editar/1" class="btn editar-btn">Editar</a>
              <a href="" class="btn eliminar-btn">Eliminar</a>
            </td>
          </tr>
        </tbody>
      </table>

      <a href="/tickets/crear" class="btn">Agregar Ticket</a>
    </div>
  </div>
</template>

<script>
import instance from '@/pluggins/axios'; // Asegúrate de que la ruta sea correcta

export default {
  name: 'TicketsNew',
  data() {
    return {
      tickets: [],
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

      // Cargar la lista de tickets
      await this.fetchTickets();
    } catch (error) {
      console.error('Error al obtener el token CSRF o los tickets:', error);
    }
  },
  methods: {
    async fetchTickets() {
      try {
        const response = await instance.get('/tickets');
        this.tickets = response.data;
      } catch (error) {
        console.error('Error al obtener los tickets:', error);
      }
    },
    async eliminarTicket(id) {
      try {
        await instance.delete(`/tickets/${id}`, {
          headers: {
            'X-CSRF-Token': this.csrfToken // Asegúrate de enviar el token CSRF
          }
        });
        await this.fetchTickets(); // Recargar la lista de tickets después de eliminar
      } catch (error) {
        console.error('Error al eliminar el ticket:', error);
      }
    },
    agregarTicket() {
      console.log("Agregar ticket");
      // Aquí puedes implementar la lógica para agregar un ticket usando Axios
    }
  }
};
</script>

<style scoped>
.background {
  background-color: #f9f9f9;
  border: 1px solid #D9D9D9;
  padding: 20px;
  border-radius: 8px;
  max-width: 1200px;
  margin: 0 auto;
}

.container {
  width: 100%;
  margin: 0 auto;
}

.table {
  width: 100%;
  border-collapse: collapse;
}

.table th {
  background-color: #D9D9D9;
}

.table th, .table td {
  border: 1px solid black;
  padding: 8px;
  text-align: center;
}

th, td {
  padding: 8px 12px;
  border: 1px solid #ddd;
  text-align: center;
}

th {
  background-color: #f0f0f0;
}

.btn {
  padding: 8px 12px;
  border: none;
  cursor: pointer;
  background-color: #17A1FA;
  color: white;
  margin-right: 8px; /* Agrega margen derecho para separar botones */
}

.editar-btn {
  border-radius: 15px; /* Border radius de 15px para el botón de Editar */
}

.eliminar-btn {
  background-color: #f44336; /* Color rojo para eliminar */
  border-radius: 15px;
}

.eliminar-btn:hover {
  background-color: #d32f2f; /* Oscurecer color en hover */
}

.btn:hover {
  background-color: #17A1FA;
}

h2{
  text-align: center
}
</style>
