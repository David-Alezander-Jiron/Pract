<template>
    <div class="container">
      <div class="card">
        <div class="card-header">
          Editar Ticket
        </div>
        <div class="card-body">
          <form @submit.prevent="editarTicket()">
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
            <button type="submit" class="btn btn-primary">Guardar Cambios</button>
          </form>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'EditarTicket',
    data() {
      return {
        ticket: {
          codigo: '',
          precio: 0,
          estado: ''
        }
      };
    },
    created() {
      // Cargar el ticket a editar al cargar el componente
      this.cargarTicket();
    },
    methods: {
      cargarTicket() {
        const id = this.$route.params.id; // Obtener el ID del ticket desde la ruta
        // Simulación de carga de datos del ticket desde el servidor (deberías implementar la lógica real aquí)
        fetch(`http://localhost/tickets.php?id=${id}`)
          .then(response => response.json())
          .then(data => {
            console.log('Ticket cargado para editar:', data);
            this.ticket = data; // Asignar los datos del ticket cargado al objeto ticket
          })
          .catch(error => {
            console.error('Error al cargar ticket para editar:', error);
          });
      },
      editarTicket() {
        // Simulación de solicitud de edición de ticket (deberías implementar la lógica real aquí)
        console.log('Editando ticket:', this.ticket);
        
        // Ejemplo: enviar datos actualizados al servidor (simulado)
        fetch(`http://localhost/tickets.php?id=${this.ticket.id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(this.ticket)
        })
          .then(response => response.json())
          .then(data => {
            console.log('Ticket editado:', data);
            // Redirigir al usuario después de editar el ticket (ejemplo)
            this.$router.push('/tickets');
          })
          .catch(error => {
            console.error('Error al editar ticket:', error);
          });
      }
    }
  };
  </script>
  
  <style scoped>
  /* Estilos adicionales si es necesario */
  </style>
  