<template>
  <div class="main-content">
    <div class="stat-cards">
      <div class="stat-card">
        <div class="stat-icon">
          <img src="@/assets/stacts1.png" alt="Icon 1" />
        </div>
        <div class="stat-info">
          <h3>Usuarios Registrados</h3>
          <p>7,842,900</p>
          <router-link to="/" class="custom-link">Todos los detalles aquí</router-link>
        </div>
      </div>
      <div class="stat-card">
        <div class="stat-icon">
          <img src="@/assets/stacts2.png" alt="Icon 2" />
        </div>
        <div class="stat-info">
          <h3>Ventas de Tickets</h3>
          <p>180,200</p>
          <router-link to="/tickets" class="custom-link">Todos los detalles aquí</router-link>
        </div>
      </div>
      <div class="stat-card">
        <div class="stat-icon">
          <img src="@/assets/stacts3.png" alt="Icon 3" />
        </div>
        <div class="stat-info">
          <h3>Eventos Próximos</h3>
          <p>38,900</p>
          <router-link to="/" class="custom-link">Todos los detalles aquí</router-link>
        </div>
      </div>
      <div class="stat-card">
        <div class="stat-icon">
          <img src="@/assets/stacts4.png" alt="Icon 4" />
        </div>
        <div class="stat-info">
          <h3>Nuevos Comentarios</h3>
          <p>3,988</p>
          <router-link to="/comentarios" class="custom-link">Todos los detalles aquí</router-link>
        </div>
      </div>
    </div>
    
    <div class="main-content">
  <div class="cards-container">
    <div class="notification-cards">
      <div class="card">
        <div class="container">
          <div class="left">
            <div class="status-ind"></div>
          </div>
          <div class="right">
            <div class="text-wrap">
              <p class="text-content">
                <a class="text-link" href="#">Notificaciones</a> Nuevas notificaciones acerca de nuevos eventos proximos
                <a class="text-link" href="#">ver detalles</a> acerca de nuevos eventos.
              </p>
              <p class="time">Hace 2 horas </p>
            </div>
            <div class="button-wrap">
              <button class="primary-cta">ver detalles</button>
              <button class="secondary-cta">Mark as read</button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="event-card">
      <div class="ticket">
        <div class="ticket-header">
          <h2>Isabel & Pedro</h2>
          <p>LOS INVITAN A EMBARCAR A LA FIESTA DE SU CASAMIENTO</p>
        </div>
        <div class="ticket-body">
          <div class="ticket-details">
            <div class="ticket-detail">
              <p>FECHA:</p>
              <p>24 DE OCTUBRE, 2024</p>
            </div>
            <div class="ticket-detail">
              <p>DESTINO:</p>
              <p>BORCELLE CLUB</p>
            </div>
            <div class="ticket-detail">
              <p>HORA:</p>
              <p>21 HORAS</p>
            </div>
            <div class="ticket-detail">
              <p>TERMINAL:</p>
              <p>CALLE CUALQUIERA 123, CUALQUIER LUGAR</p>
            </div>
          </div>
          <div class="ticket-date">
            <p>OCT</p>
            <h3>24</h3>
            <p>2024</p>
            <p>VUELO: 123456</p>
            <p>RSVP: (55) 1234-5678</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>


    <div class="extra-cards">
      <div class="card highlight-events-card">
        <h3>Próximos eventos a destacar</h3>
        <div class="highlight-event">
          <h4>Concierto de rock</h4>
          <p>Fecha: 20 de Julio, 2024</p>
          <p>Ubicación: Estadio Nacional</p>
          <p>Descripción: Un increíble concierto con las mejores bandas de rock del momento.</p>
        </div>
        <div class="highlight-event">
          <h4>Feria de Tecnología</h4>
          <p>Fecha: 15 de Agosto, 2024</p>
          <p>Ubicación: Centro de Convenciones</p>
          <p>Descripción: La feria más grande de tecnología con expositores de todo el mundo.</p>
        </div>
        <div class="highlight-event">
          <h4>Festival de Cine</h4>
          <p>Fecha: 5 de Septiembre, 2024</p>
          <p>Ubicación: Teatro Principal</p>
          <p>Descripción: Disfruta de las mejores películas y cortometrajes del año.</p>
        </div>
        <div class="highlight-event">
          <h4>Evento de Jazz en el Parque</h4>
          <p>Fecha: 10 de Octubre, 2024</p>
          <p>Ubicación: Parque Central</p>
          <p>Descripción: Únete a nosotros para una velada inolvidable de jazz bajo las estrellas.</p>
        </div>
      </div>
      <div class="card map-card">
  <h3>Vista del mapa de más ventas de tickets de eventos</h3>
  <div class="map-details">
    <p><img src="@/assets/locacion.png" alt="Mapa Icono" class="icon"> <strong>Mapa tiempo real</strong></p>
    <p><img src="@/assets/calendario.png" alt="Calendario Icono" class="icon"> 08 de julio de 2024</p>
    <img src="@/assets/mapa.png" alt="Mapa" />
  </div>
</div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'DashboardView'
};
</script>

<style scoped>
.main-content {
  padding: 20px;
}

.stat-cards {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

.stat-card {
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  width: calc(25% - 20px); /* Ajusta el tamaño de cada tarjeta de estadísticas */
  position: relative;
  overflow: hidden;
  font-family: Arial, sans-serif;
  margin-left: auto;
}

.stat-icon {
  position: absolute;
  top: 10px;
  right: 10px;
  width: 100%; /* Ajusta el ancho al 100% del contenedor */
  height: auto;
  pointer-events: none; /* Evita que la imagen interfiera con eventos del ratón */
  z-index: 0; /* Asegura que esté detrás del contenido de .stat-info */
  opacity: 0.6; /* Ajusta la opacidad de la imagen */
}

.stat-icon img {
  width: 100%; /* Ajusta el tamaño del ícono para llenar completamente .stat-icon */
  height: auto;
  display: block; /* Asegura que la imagen se comporte correctamente como fondo */
}

.stat-info {
  position: relative; /* Cambia a posición relativa */
  z-index: 1; /* Asegura que esté delante de .stat-icon */
}

.stat-info h3 {
  margin: 0;
  font-size: 18px;
  color: #000;
}

.stat-info p {
  margin: 5px 0;
  font-size: 24px;
  font-weight: bold;
  color: #000;
}

.stat-info a {
  color: #ffffff;
  text-decoration: none;
}

.stat-info a:hover {
  text-decoration: underline;
}

.custom-link {
  text-decoration: none; /* Elimina el subrayado predeterminado */
  font-weight: bold; /* Opcional: Añade negrita u otro estilo de fuente */
}

.custom-link:hover {
  text-decoration: underline; /* Cambia el estilo al pasar el ratón sobre el enlace */
}

.card {
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  width: calc(50% - 20px); /* Asegura que ambas cartas ocupen el 50% del ancho */
  margin-left: 85px; /* Ajusta este valor para mover la carta a la derecha */
}



.card:hover {
  background-color: #d3ddf1;
  border: 1.5px solid #1677ff;
}


.cards-container {
  display: flex;
  gap: 20px; /* Espacio entre las cartas */
}

.notification-cards .card,
.event-card {
  width: 50%; /* Ajusta el ancho para que ocupen la mitad del contenedor */
}

.notification-cards .card {
  background-color: #f9f9f9;
  border-radius: 8px;
  padding: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}


.status-ind {
  width: 0.625em;
  height: 0.625em;
  background-color: #ff0000;
  margin: 0.375em 0;
  border-radius: 0.5em;
}

.text-wrap {
  display: flex;
  flex-direction: column;
  gap: 0.25em;
  color: #333;
}

.time {
  font-size: 0.875em;
  color: #777;
}

.text-link {
  font-weight: 500;
  text-decoration: none;
  color: black;
}

.button-wrap {
  display: flex;
  flex-direction: row;
  gap: 1em;
  align-items: center;
}

.secondary-cta {
  background-color: transparent;
  border: none;
  font-size: 15px;
  font-weight: 400;
  color: #666;
  cursor: pointer;
}

.primary-cta {
  font-size: 15px;
  background-color: transparent;
  font-weight: 600;
  color: #1677ff;
  border: none;
  border-radius: 1.5em;
  cursor: pointer;
}

button:hover {
  text-decoration: underline;
}

.right {
  display: flex;
  flex-direction: column;
  gap: 0.875em;
}


.event-card {
  background-image: url('@/assets/messages.png');
  background-size: cover;
  background-position: center;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  color: white;
  font-family: 'Arial', sans-serif;
  position: relative;
  margin-left: 30px
}

.ticket {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.ticket-header {
  text-align: center;
  margin-bottom: 20px;
}

.ticket-header h2 {
  margin: 0;
  font-size: 24px;
  color: #007bff;
}

.ticket-header p {
  margin: 5px 0 0;
  font-size: 16px;
  color: #333;
}

.ticket-body {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.ticket-details {
  flex: 1;
  margin-right: 20px;
}

.ticket-detail {
  margin-bottom: 10px;
}

.ticket-detail p {
  margin: 0;
  font-size: 14px;
  color: #555;
}

.ticket-detail p:first-child {
  font-weight: bold;
  color: #007bff;
}

.ticket-date {
  text-align: center;
  background-color: #f0f0f0;
  padding: 10px;
  border-radius: 8px;
  width: 150px;
}

.ticket-date p {
  margin: 0;
  font-size: 14px;
  color: #333;
}

.ticket-date h3 {
  margin: 5px 0;
  font-size: 32px;
  color: #007bff;
}

.ticket-date p:last-child {
  margin-top: 10px;
  font-size: 12px;
  color: #555;
}

.extra-cards {
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  margin-top: 20px;
}

.card.highlight-events-card {
  background-color: #f9f9f9; /* Fondo claro */
  border-radius: 12px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15); /* Sombra más pronunciada */
  padding: 20px;
  width: calc(50% - 20px); /* Ajusta el tamaño de la tarjeta de eventos destacados */
  max-width: 800px; /* Limita el ancho máximo */
  margin: 20px auto; /* Centra la tarjeta */
  font-family: 'Arial', sans-serif;
  margin-top: -1px;
}

.highlight-events-card h3 {
  margin-bottom: 20px;
  font-size: 26px;
  text-align: center;
  color: #333;
}

.highlight-event {
  background-color: #FFFFFF; /* Fondo blanco para cada evento */
  border-radius: 8px;
  padding: 15px;
  margin-bottom: 20px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1); /* Sombra suave para cada evento */
  transition: transform 0.3s ease; /* Efecto de transición suave */
}

.highlight-event:hover {
  transform: translateY(-5px); /* Efecto de levantamiento en hover */
}

.highlight-event h4 {
  margin: 0 0 8px;
  font-size: 20px;
  color: #2c3e50;
}

.highlight-event p {
  margin: 0 0 8px;
  color: #7f8c8d;
  font-size: 16px;
}

.card.map-card {
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  width: calc(50% - 20px); /* Ajusta el tamaño de la tarjeta de mapa */
}

.map-details p {
  margin: 0 0 10px;
  font-size: 16px;
  display: flex;
  align-items: center;
}

.map-details img.icon {
  width: 70px; /* Ajusta el tamaño del icono */
  height: 35px;
  margin-right: 8px; /* Espacio entre la imagen y el texto */
}

.map-details img {
  width: 100%;
  border-radius: 8px;
}


</style>
