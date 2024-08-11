<template>
    <div class="container animated fadeIn">
      <div class="error-message">
        <img src="@/assets/logopra.png" alt="Logo" class="logo" />
        <h1 class="error-code">404</h1>
        <div class="pagAzul">
          <h2>No hemos encontrado la página que buscas.</h2>
          <p>Tal vez estas páginas te puedan ayudar a encontrar lo que buscas:</p>
          <ul>
            <li><a href="/">Página de inicio</a></li>
            <li><a href="/eventos">Eventos</a></li>
          </ul>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "NotPag",
  };
  </script>
  
  <style scoped>
  /* Estilos adicionales si es necesario */
  @import url('https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css');
  
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background-color: #ffffff;
  }
  
  .error-message {
    text-align: center;
  }
  
  .logo {
    width: 150px; /* Hacer el logo un poco más pequeño */
    height: auto;
    margin-bottom: 20px;
  }
  
  .error-code {
    font-size: 6em; /* Hacer el código de error un poco más pequeño */
    font-weight: bold;
    color: #333;
    line-height: 1.2;
  }
  
  .pagAzul {
    margin-top: 100px;
    background-color: #20242b;
    width: 100vw;
    padding: 70px;
    box-sizing: border-box;
    color: #fff; /* Cambiar el color del texto a blanco para mejorar la legibilidad */
  }
  
  .pagAzul h2 {
    font-size: 24px;
    font-weight: normal;
  }
  
  .pagAzul p {
    font-size: 16px;
    font-weight: normal;
    margin-top: 20px;
  }
  
  .pagAzul ul {
    list-style: none;
    padding: 0;
    margin: 20px 0;
  }
  
  .pagAzul ul li {
    margin-bottom: 10px;
  }
  
  .pagAzul ul a {
    text-decoration: none;
    color: #fff; /* Cambiar el color del enlace a blanco para mejorar la legibilidad */
    font-weight: bold;
  }
  </style>
  