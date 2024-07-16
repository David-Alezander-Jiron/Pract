<template>
  <div class="register-container">
    <div class="register-content">
      <img src="@/assets/logopra.png" alt="EventTix Logo" class="logo-img">
      <div class="register-box">
        <h1>EventTix</h1>
        <form >
          <div class="form-group">
            <label for="nombres">Nombres:</label>
            <input type="text" class="form-control" id="nombres"  required>
          </div>
          <div class="form-group">
            <label for="apellidos">Apellidos:</label>
            <input type="text" class="form-control" id="apellidos"  required>
          </div>
          <div class="form-group">
            <label for="correo">Correo:</label>
            <input type="email" class="form-control" id="correo"  required>
          </div>
          <div class="form-group">
            <label for="telefono">Teléfono:</label>
            <input type="text" class="form-control" id="telefono"  required>
          </div>
          <div class="form-group">
            <label for="contraseña">Contraseña:</label>
            <input type="password" class="form-control" id="contrasena"  required>
          </div>
          
          <button type="submit" class="btn btn-primary">Registrar</button>
        </form>
        <router-link to="/login">Ya tienes una cuenta? Inicia sesión</router-link>
      </div>
    </div>
  </div>
</template>

<script>


export default {
  name: 'RegisterV',
  
};
</script>

<style scoped>
.register-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 1560px;
  background-image: url(@/assets/fondoticket.jpg);
  background-size: cover;
  /* Ajusta el tamaño para cubrir toda el área */
  background-repeat: no-repeat;
  /* Evita que la imagen se repita */
  background-position: center;
  /* Centra la imagen */
  position: relative;
  right: 300px;
}

.register-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.8);
  /* Fondo semi-transparente */
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
  text-align: center;
  width: 500px;
  margin: 0 auto;
}

.logo-img {
  max-width: 200px;
  height: auto;
  margin-bottom: 2rem;
}

.register-box {
  width: 100%;
  position: relative;
}

h1 {
  font-size: 2rem;
  margin-bottom: 1.5rem;
  color: #333;
  position: relative;
  margin-right: 190px;
}

.input-group {
  margin-bottom: 1rem;
}


input[type="text"],
input[type="email"],
input[type="password"],
select {
  width: 100%;
  padding: 0.75rem;
  background-color: #f0f0f0;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1rem;
  color: #333;
}

button {
  width: 100%;
  padding: 0.75rem;
  background-color: #00bfa5;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #009e8e;
}

button:focus {
  outline: none;
  box-shadow: 0 0 5px rgba(0, 191, 165, 0.5);
}

.router-link {
  color: #007bff;
  text-decoration: none;
}

.router-link:hover {
  text-decoration: underline;
}
</style>