<template>
  <div class="dashboard">
    <section class="stat-cards">
      <div class="stat-card" v-for="(card, index) in statCards" :key="index">
        <img :src="card.image" alt="Icono" class="stat-image" />
        <div class="stat-info">
          <h3>{{ card.title }}</h3>
          <p>{{ card.value }}</p>
          <router-link :to="card.link" class="custom-link">Ver detalles</router-link>
        </div>
      </div>
    </section>

    <section class="content-container">
      <div class="highlight-events-card card">
        <h3>Próximos eventos a destacar</h3>
        <div class="highlight-event" v-for="(event, index) in highlightEvents" :key="index">
          <h4>{{ event.title }}</h4>
          <p>Fecha: {{ event.date }}</p>
          <p>Ubicación: {{ event.location }}</p>
          <p>Descripción: {{ event.description }}</p>
        </div>
      </div>

      <div class="map-card card">
        <h3>Vista del mapa de más ventas de tickets de eventos</h3>
        <div class="map-details">
          <p>
            <img src="@/assets/locacion.png" alt="Mapa Icono" class="icon" />
            <strong>Mapa en tiempo real</strong>
          </p>
          <p>
            <img src="@/assets/calendario.png" alt="Calendario Icono" class="icon" />
            08 de julio de 2024
          </p>
          <img src="@/assets/mapa.png" alt="Mapa" />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "DashboardView",
  data() {
    return {
      statCards: [
        {
          image: require("@/assets/stacts1.png"),
          title: "Usuarios Registrados",
          value: "7,842,900",
          link: "/",
        },
        {
          image: require("@/assets/stacts2.png"),
          title: "Ventas de Tickets",
          value: "180,200",
          link: "/tickets",
        },
        {
          image: require("@/assets/stacts3.png"),
          title: "Eventos Próximos",
          value: "38,900",
          link: "/",
        },
        {
          image: require("@/assets/stacts4.png"),
          title: "Nuevos Comentarios",
          value: "3,988",
          link: "/comentarios",
        },
      ],

      highlightEvents: [
        {
          title: "Concierto de rock",
          date: "20 de Julio, 2024",
          location: "Estadio Nacional",
          description:
            "Un increíble concierto con las mejores bandas de rock del momento.",
        },
        {
          title: "Feria de Tecnología",
          date: "15 de Agosto, 2024",
          location: "Centro de Convenciones",
          description:
            "La feria más grande de tecnología con expositores de todo el mundo.",
        },
        {
          title: "Festival de Cine",
          date: "5 de Septiembre, 2024",
          location: "Teatro Principal",
          description:
            "Disfruta de las mejores películas y cortometrajes del año.",
        },
        {
          title: "Evento de Jazz en el Parque",
          date: "10 de Octubre, 2024",
          location: "Parque Central",
          description:
            "Únete a nosotros para una velada inolvidable de jazz bajo las estrellas.",
        },
      ],
    };
  },
};
</script>

<style scoped>
.dashboard {
  display: grid;
  grid-template-rows: auto auto;
  gap: 20px;
  padding: 20px;
  background-color: #f4f7fc;
  color: #333;
  transition: margin-left 0.3s; /* Animación para acomodar contenido */
}

.sidebar-collapsed .dashboard {
  margin-left: 80px; /* Ajustar el espacio cuando el sidebar esté colapsado */
}

.stat-cards {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  transition: grid-template-columns 0.3s; /* Animación para cambiar el diseño */
}

.sidebar-collapsed .stat-cards {
  grid-template-columns: repeat(3, 1fr); /* Reducir el número de columnas */
}

.stat-card {
  background-color: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.3s, box-shadow 0.3s;
}

.stat-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

.stat-image {
  width: 100%;
  height: auto;
  display: block;
}

.stat-info {
  padding: 10px;
  background: #f0f0f0;
  color: #333;
  text-align: center;
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

.content-container {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 20px;
  transition: grid-template-columns 0.3s;
}

.sidebar-collapsed .content-container {
  grid-template-columns: 1fr; /* Cambiar a una sola columna */
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

.highlight-event h4 {
  background-color: #f0f0f0;
  padding: 10px;
  border-radius: 8px;
  margin: 0 0 10px 0;
  color: #333;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
}

.highlight-event p {
  margin: 0 0 5px 0;
  color: #555;
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

/* Responsive adjustments */
@media (max-width: 1200px) {
  .stat-cards {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 900px) {
  .stat-cards {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .content-container {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 600px) {
  .stat-card {
    padding: 10px;
  }

  .highlight-event h4 {
    font-size: 1rem;
  }

  .highlight-event p {
    font-size: 0.875rem;
  }

  .map-details img.icon {
    width: 40px;
    height: 20px;
  }
}
</style>
