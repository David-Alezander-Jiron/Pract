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
@import url('https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css');

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  padding: 20px;
  background-color: #ffffff;
}

.error-message {
  text-align: center;
  max-width: 600px;
  width: 100%;
}

.logo {
  width: 120px;
  height: auto;
  margin-bottom: 20px;
}

.error-code {
  font-size: 5em;
  font-weight: bold;
  color: #333;
  margin-bottom: 20px;
}

.pagAzul {
  background-color: #20242b;
  padding: 40px 20px;
  color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.pagAzul h2 {
  font-size: 1.5rem;
  margin-bottom: 10px;
}

.pagAzul p {
  font-size: 1rem;
  margin-bottom: 20px;
}

.pagAzul ul {
  list-style: none;
  padding: 0;
}

.pagAzul ul li {
  margin-bottom: 10px;
}

.pagAzul ul a {
  text-decoration: none;
  color: #00bfa5;
  font-weight: bold;
  transition: color 0.3s ease;
}

.pagAzul ul a:hover {
  color: #009e8e;
}

@media (max-width: 768px) {
  .error-code {
    font-size: 4em;
  }

  .pagAzul {
    padding: 30px 15px;
  }

  .pagAzul h2 {
    font-size: 1.25rem;
  }

  .pagAzul p {
    font-size: 0.9rem;
  }
}
</style>
