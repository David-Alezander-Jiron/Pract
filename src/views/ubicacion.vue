<template>
    <div class="container">
      <h1>Ingresar Coordenadas</h1>
      <div class="form-group">
        <label for="latitude">Latitud:</label>
        <input type="number" v-model="latitude" class="form-control" id="latitude" placeholder="Ingrese la latitud">
      </div>
      <div class="form-group">
        <label for="longitude">Longitud:</label>
        <input type="number" v-model="longitude" class="form-control" id="longitude" placeholder="Ingrese la longitud">
      </div>
      <button @click="showMap" class="btn btn-primary">Mostrar en el Mapa</button>
      
      <div v-if="showingMap">
        <h2>Ubicación: {{ latitude }}, {{ longitude }}</h2>
        <div id="map"></div>
      </div>
    </div>
  </template>
  
  <script>
  /* global google */
  export default {
    name: 'UbicacionesNew',
    data() {
      return {
        latitude: '',
        longitude: '',
        showingMap: false,
      };
    },
    methods: {
      loadGoogleMapsScript() {
        return new Promise((resolve, reject) => {
          if (typeof google !== 'undefined') {
            resolve();
            return;
          }
          const script = document.createElement('script');
          script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyBDaeWicvigtP9xPv919E-RNoxfvC-Hqik`;
          script.async = true;
          script.defer = true;
          script.onload = resolve;
          script.onerror = reject;
          document.head.appendChild(script);
        });
      },
      async showMap() {
        this.showingMap = true;
        await this.$nextTick();
        this.loadGoogleMapsScript().then(() => {
          this.initMap();
        }).catch((error) => {
          console.error('Error loading Google Maps script: ', error);
        });
      },
      initMap() {
        const coord = { lat: parseFloat(this.latitude), lng: parseFloat(this.longitude) };
        const map = new google.maps.Map(document.getElementById('map'), {
          zoom: 10,
          center: coord,
        });
        new google.maps.Marker({
          position: coord,
          map: map,
        });
      },
    },
  };
  </script>
  
  <style scoped>
  .container {
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
  }
  
  #map {
    height: 500px;
    width: 100%;
    margin-top: 20px;
  }
  </style>
  