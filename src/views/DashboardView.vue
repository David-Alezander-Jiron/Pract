<template>
  <div class="dashboard">
    <section class="stat-cards">
  <div class="stat-card" v-for="(card, index) in statCards" :key="index">
    <!-- Aquí agregas la imagen -->
    <img :src="card.image" alt="Icono" class="stat-image"/>

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
  { image: require('@/assets/stacts1.png'), title: 'Usuarios Registrados', value: '7,842,900', link: '/' },
  { image: require('@/assets/stacts2.png'), title: 'Ventas de Tickets', value: '180,200', link: '/tickets' },
  { image: require('@/assets/stacts3.png'), title: 'Eventos Próximos', value: '38,900', link: '/' },
  { image: require('@/assets/stacts4.png'), title: 'Nuevos Comentarios', value: '3,988', link: '/comentarios' },
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

h3 {
  text-align: center;
}

.stat-cards {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-bottom: 40px;
}

.stat-card {
  position: relative; /* Necesario para que el contenido interno con position: absolute funcione */
  background-color: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  overflow: hidden; /* Asegura que el contenido no se desborde de la tarjeta */
  flex: 1;
  min-width: 200px;
  max-width: 300px;
  transition: transform 0.3s, box-shadow 0.3s;
  margin-left: 80px;
}

.stat-image {
  width: 100%;  
  height: auto;  
  display: block;
}

.stat-info {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 20px;
  background: rgba(0, 0, 0, 0.6); /* Fondo semitransparente para mejor legibilidad */
  color: white;
  text-align: center;
}

.stat-info h3 {
  margin: 0;
  font-size: 18px;
  color: #fff;
}

.stat-info p {
  margin: 5px 0;
  font-size: 24px;
  font-weight: bold;
  color: #fff;
}

.stat-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
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
  margin-left: 410px;
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

/* codigo de proximos eventos */
.extra-cards {
  display: flex;
  gap: 20px;
}

.highlight-events-card {
  flex: 2;
}

/* Empieza el nuevo código para agregar fondo a cada title en los eventos destacados */
.highlight-event h4 {
  background-color: #f0f0f0; /* Cambia este color al que desees para el fondo */
  padding: 10px;
  border-radius: 8px;
  margin: 0 0 10px 0; /* Espacio entre el título y el siguiente contenido */
  color: #333; /* Color del texto */
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1); /* Sombra opcional para el título */
}

.highlight-event p {
  margin: 0 0 5px 0; /* Espacio entre los párrafos */
  color: #555;
}

.card h3 {
  margin-bottom: 20px;
  font-size: 24px;
  color: #333;
}
/* Termina el nuevo código para agregar fondo a cada title en los eventos destacados */

.map-card {
  flex: 1;
}

.map-details {
  text-align: center;
  margin-top: 10px;
}

.map-details img.icon {
  width: 50px;
  height: 25px;
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
