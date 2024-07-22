<template>
    <div class="container text-center">
      <h1>{{ evento.nombre }}</h1>
      <div class="event-details p-3 rounded shadow-sm mt-4">
        <p>{{ evento.descripcion }}</p>
        <p><strong>Fecha:</strong> {{ evento.fecha }}</p>
        <p><strong>Ubicación:</strong> {{ evento.ubicacion }}</p>
      </div>
      <div class="video-container p-3 rounded shadow-sm mt-4">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/h7U8TqOVyxc"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
      <div class="event-image p-3 rounded shadow-sm mt-4">
        <h2>❤️Tiago Pzk en Quito 🇪🇨</h2>
        <p>‘GOTTIA TOUR’ 🌙</p>
        <img src="@/assets/tiago.jpeg" alt="Tiago PZK" class="img-fluid">
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'PaginaEvento',
    data() {
      return {
        evento: {}
      };
    },
    created() {
      this.obtenerEvento();
    },
    methods: {
      obtenerEvento() {
        const id = this.$route.params.id;
        const eventos = [
          {
            id: 1,
            nombre: 'Tiago PZK - GOTTIA TOUR - Quito',
            descripcion: 'Un concierto impresionante con Tiago PZK en Quito! 19 de septiembre en el Coliseo Rumiñahui 20H00.',
            fecha: '19-9-2024',
            ubicacion: 'Quito, Ecuador'
          },
          {
            id: 2,
            nombre: 'Festival de Música',
            descripcion: 'Un festival de música espectacular en Guayaquil.',
            fecha: '2024-09-15',
            ubicacion: 'Guayaquil, Ecuador'
          }
        ];
        this.evento = eventos.find(evento => evento.id == id);
      }
    }
  };
  </script>
  
  <style scoped>
  .container {
    margin-top: 20px;
  }
  
  .event-details {
    background-color: #343a40;
    color: #ffffff;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    margin-top: 20px;
    text-align: left;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
  }
  
  .video-container {
    background-color: #343a40;
    color: #ffffff;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    margin-top: 20px;
    text-align: center;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
  }
  
  .event-image {
    background-color: #343a40;
    color: #ffffff;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    margin-top: 20px;
    text-align: center;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
  }
  
  .img-fluid {
    max-width: 100%;
    height: auto;
    border-radius: 5px;
  }
  </style>
  