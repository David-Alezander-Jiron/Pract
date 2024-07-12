<!-- src/components/Topbar.vue -->
<template>
  <div class="menu-below">
    <ul>
      <li><router-link to="/">Dashboard/</router-link></li>
      <li><router-link to="/usuarios">Usuarios/</router-link></li>
      <li><router-link to="/">Home/</router-link></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'menu-below'
};
</script>

<style scoped>
.menu-below {
  margin-top: 60px; /* Ajusta este valor para mover el menú más arriba o más abajo */
  margin-left: 250px; /* Ajusta el margen izquierdo para alinear con la barra lateral */
  padding: 10px 20px;
  background-color: #f8f9fa;
  border-bottom: 1px solid #dee2e6;
  display: flex;
  position: relative;
  right: 220px;
  bottom: 80px;
  width: 1094px;
}

.menu-below ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  gap: 20px;
}

.menu-below ul li {
  padding: 10px 0;
}

.menu-below ul li a {
  text-decoration: none;
  color: #000;
}

.menu-below ul li a:hover {
  text-decoration: underline;
}
</style>
