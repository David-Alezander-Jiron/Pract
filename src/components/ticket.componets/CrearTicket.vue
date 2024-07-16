<template>
    <div class="container">
      <div class="card">
        <div class="card-header">
          Crear Ticket
        </div>
        <div class="card-body">
          <form @submit.prevent="crearTicket()">
            <div class="form-group">
              <label for="codigo">Código:</label>
              <input type="text" id="codigo" v-model="ticket.codigo" class="form-control" required>
            </div>
            <div class="form-group">
              <label for="precio">Precio:</label>
              <input type="number" id="precio" v-model="ticket.precio" class="form-control" required>
            </div>
            <div class="form-group">
              <label for="estado">Estado:</label>
              <input type="text" id="estado" v-model="ticket.estado" class="form-control" required>
            </div>
            <button type="submit" class="btn btn-primary">Crear Ticket</button>
          </form>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'CrearTicket',
    data() {
      return {
        ticket: {
          codigo: '',
          precio: 0,
          estado: ''
        }
      };
    },
    methods: {
      crearTicket() {
        // Simulación de solicitud de creación de ticket (deberías implementar la lógica real aquí)
        console.log('Creando ticket:', this.ticket);
        
        // Ejemplo: enviar datos al servidor (simulado)
        fetch('http://localhost/tickets.php', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(this.ticket)
        })
          .then(response => response.json())
          .then(data => {
            console.log('Ticket creado:', data);
            // Redirigir al usuario después de crear el ticket (ejemplo)
            this.$router.push('/tickets');
          })
          .catch(error => {
            console.error('Error al crear ticket:', error);
          });
      }
    }
  };
  </script>
  
  <style scoped>
  /* Estilos adicionales si es necesario */
  </style>
  