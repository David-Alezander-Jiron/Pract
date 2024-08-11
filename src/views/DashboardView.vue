<template>
  <div class="dashboard">
    <section class="stat-cards">
      <div class="stat-card" v-for="(card, index) in statCards" :key="index">
        
        <div class="stat-info">
          <h3>{{ card.title }}</h3>
          <p>{{ card.value }}</p>
          <router-link :to="card.link" class="custom-link">Todos los detalles aquí</router-link>
        </div>
      </div>
    </section>

    <section class="cards-container">
      <div class="notification-cards" style="padding-left: 125px;">
        <div class="card">
          <div class="container">
            <div class="left">
              <div class="status-ind"></div>
            </div>
            <div class="right">
              <div class="text-wrap">
                <p class="text-content">
                  <a class="text-link" href="#">Notificaciones</a> Nuevas notificaciones acerca de eventos próximos
                  <a class="text-link" href="#">ver detalles</a>.
                </p>
                <p class="time">Hace 2 horas</p>
              </div>
              <div class="button-wrap">
                <button class="primary-cta">Ver detalles</button>
                <button class="secondary-cta">Marcar como leído</button>
              </div>
            </div>
          </div>
        </div>
      </div>

    
    </section>

    <section class="extra-cards">
      <div class="card highlight-events-card">
        <h3>Próximos eventos a destacar</h3>
        <div class="highlight-event" v-for="(event, index) in highlightEvents" :key="index">
          <h4>{{ event.title }}</h4>
          <p>Fecha: {{ event.date }}</p>
          <p>Ubicación: {{ event.location }}</p>
          <p>Descripción: {{ event.description }}</p>
        </div>
      </div>

      <div class="card map-card">
        <h3>Vista del mapa de más ventas de tickets de eventos</h3>
        <div class="map-details">
          <p><img src="@/assets/locacion.png" alt="Mapa Icono" class="icon"> <strong>Mapa en tiempo real</strong></p>
          <p><img src="@/assets/calendario.png" alt="Calendario Icono" class="icon"> 08 de julio de 2024</p>
          <img src="@/assets/mapa.png" alt="Mapa" />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'DashboardView',
  data() {
    return {
      statCards: [
        { icon: '', title: 'Usuarios Registrados', value: '7,842,900', link: '/' },
        { icon: '@/assets/stacts2.png', title: 'Ventas de Tickets', value: '180,200', link: '/tickets' },
        { icon: '@/assets/stacts3.png', title: 'Eventos Próximos', value: '38,900', link: '/' },
        { icon: '@/assets/stacts4.png', title: 'Nuevos Comentarios', value: '3,988', link: '/comentarios' },
      ],
      highlightEvents: [
        { title: 'Concierto de rock', date: '20 de Julio, 2024', location: 'Estadio Nacional', description: 'Un increíble concierto con las mejores bandas de rock del momento.' },
        { title: 'Feria de Tecnología', date: '15 de Agosto, 2024', location: 'Centro de Convenciones', description: 'La feria más grande de tecnología con expositores de todo el mundo.' },
        { title: 'Festival de Cine', date: '5 de Septiembre, 2024', location: 'Teatro Principal', description: 'Disfruta de las mejores películas y cortometrajes del año.' },
        { title: 'Evento de Jazz en el Parque', date: '10 de Octubre, 2024', location: 'Parque Central', description: 'Únete a nosotros para una velada inolvidable de jazz bajo las estrellas.' },
      ],
    };
  },
};
</script>

<style scoped>
.dashboard {
  font-family: 'Roboto', sans-serif;
  padding: 20px;
  background-color: #f4f7fc;
  color: #333;
}

.stat-cards {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-bottom: 40px;
}

.stat-card {
  background-color: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  padding: 20px;
  flex: 1;
  min-width: 200px;
  max-width: 300px;
  transition: transform 0.3s, box-shadow 0.3s;
}

.stat-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

.stat-icon img {
  width: 60px;
  height: 60px;
}

.stat-info {
  margin-top: 20px;
}

.stat-info h3 {
  margin: 0;
  font-size: 18px;
  color: #555;
}

.stat-info p {
  margin: 5px 0;
  font-size: 24px;
  font-weight: bold;
  color: #333;
}

.custom-link {
  font-size: 14px;
  font-weight: bold;
  color: #1677ff;
  text-decoration: none;
  transition: color 0.3s;
}

.custom-link:hover {
  color: #0056b3;
}

.cards-container {
  display: flex;
  gap: 20px;
  margin-bottom: 40px;
}

.card {
  background-color: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  padding: 20px;
  transition: transform 0.3s, box-shadow 0.3s;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

.notification-cards .card {
  flex: 1;
}

.event-card {
  flex: 1;
  background-image: url('@/assets/messages.png');
  background-size: cover;
  background-position: center;
  color: white;
  position: relative;
}

.ticket-header h2 {
  margin: 0;
  font-size: 28px;
  color: #ffcc00;
}

.ticket-header p {
  margin: 10px 0 20px;
  font-size: 16px;
  color: #fff;
}

.ticket-body {
  display: flex;
  justify-content: space-between;
}

.ticket-details {
  flex: 1;
  margin-right: 20px;
}

.ticket-detail p:first-child {
  font-weight: bold;
  color: #ffcc00;
}

.ticket-date {
  text-align: center;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 10px;
  border-radius: 8px;
  min-width: 150px;
}

.ticket-date p,
.ticket-date h3 {
  margin: 5px 0;
}

.extra-cards {
  display: flex;
  gap: 20px;
}

.highlight-events-card {
  flex: 2;
}

.highlight-event h4 {
  margin-bottom: 5px;
  font-size: 18px;
}

.map-card {
  flex: 1;
}

.map-details {
  text-align: center;
  margin-top: 10px;
}

.map-details img.icon {
  width: 20px;
  height: 20px;
  margin-right: 5px;
  vertical-align: middle;
}

.map-details img {
  width: 100%;
  border-radius: 8px;
  margin-top: 10px;
}

.primary-cta {
  background-color: #1677ff;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 6px;
  font-size: 14px;
  cursor: pointer;
  margin-right: 10px;
}

.secondary-cta {
  background-color: #f4f4f4;
  color: #555;
  border: none;
  padding: 10px 20px;
  border-radius: 6px;
  font-size: 14px;
  cursor: pointer;
}

.primary-cta:hover,
.secondary-cta:hover {
  opacity: 0.8;
}
</style>
