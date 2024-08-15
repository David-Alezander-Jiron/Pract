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
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
  background-color: #f4f7fc;
  color: #333;
  margin: 0 auto; /* Centra el dashboard horizontalmente */
  max-width: 100%; /* Asegura que el dashboard no exceda el ancho de la pantalla */
  box-sizing: border-box; /* Asegura que el padding y el borde estén incluidos en el ancho y alto */
}

.sidebar-collapsed .dashboard {
  margin-left: 80px; /* Ajustar el espacio cuando el sidebar esté colapsado */
}

.stat-cards {
  display: flex;
  flex-wrap: wrap; /* Permite que los elementos se ajusten a la siguiente línea si no hay suficiente espacio */
  justify-content: space-between; /* Distribuye el espacio de manera uniforme entre los elementos */
  gap: 20px;
}

.sidebar-collapsed .stat-cards {
  grid-template-columns: repeat(3, 1fr); /* Reducir el número de columnas */
}

.stat-card {
  flex: 1 0 200px; /* Permite que las tarjetas crezcan y se encojan, pero no sean más pequeñas que 200px */
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
  display: flex;
  flex-wrap: wrap; /* Permite que los elementos se ajusten a la siguiente línea si no hay suficiente espacio */
  justify-content: space-between; /* Distribuye el espacio de manera uniforme entre los elementos */
  gap: 20px;
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
  flex: 1 0 200px;
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
  .dashboard {
    max-width: calc(100% - 200px); /* Ajusta para pantallas medianas */
  }

  .stat-cards {
    grid-template-columns: repeat(3, 1fr); /* Reducir columnas en pantallas medianas */
  }

  .content-container {
    grid-template-columns: 1fr; /* Cambiar a una sola columna en pantallas medianas */
  }
}

@media (max-width: 900px) {
  .dashboard {
    max-width: calc(100% - 100px); /* Ajusta para pantallas pequeñas */
  }

  .stat-cards {
    grid-template-columns: repeat(2, 1fr); /* Reducir columnas en pantallas pequeñas */
  }
}

@media (max-width: 600px) {
  .dashboard {
    max-width: 100%; /* Ajusta para pantallas muy pequeñas */
  }

  .stat-cards {
    grid-template-columns: 1fr; /* Cambiar a una columna en pantallas muy pequeñas */
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
