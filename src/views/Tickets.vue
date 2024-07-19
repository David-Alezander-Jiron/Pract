<template>
  <div class="container">
    <div class="card">
      <div class="card-header">
        Lista de Tickets
      </div>
      <div class="card-body">
        <table class="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Codigo</th>
              <th>Precio</th>
              <th>Estado</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="ticket in tickets" :key="ticket.id">
              <td>{{ ticket.id }}</td>
              <td>{{ ticket.codigo }}</td>
              <td>{{ ticket.precio }}</td>
              <td>{{ ticket.estado }}</td>
              <td>
                <div class="btn-group" role="group">
                  <router-link :to="{ name: 'EditarTicket', params: { id: ticket.id } }" class="btn">Editar</router-link>
                  <button type="button" @click="borrarTicket(ticket.id)" class="btn btn-danger">Eliminar</button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <router-link to="/tickets/crear" class="btn btn-primary">Agregar Ticket</router-link>
  </div>
</template>

<script>
export default {
  name: 'TicketsView', // Nombre del componente
  
};
</script>

<style scoped>
.container{
  margin-top: 15px;
}

</style>
