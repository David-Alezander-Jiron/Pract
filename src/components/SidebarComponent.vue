<template>
  <div class="sidebar">
    <div class="logo">
      <img src="/defionitivelogo.png" alt="Eventix Logo" />
    </div>
    <nav class="navigation">
      <ul>
        <li><router-link to="/"><img src="@/assets/iconodash.png" class="menu-icon" alt="Dashboard Icon" /> Dashboard</router-link></li>
        <li><router-link to="/email">Email</router-link></li>
        <li><router-link to="/widgets">Widgets <span class="new-badge">NEW</span></router-link></li>
        <li><router-link to="/ui-elements">UI Elements <span class="new-badge">NEW</span></router-link></li>
        <li><router-link to="/registros">Registros</router-link></li>
        <li><router-link to="/eventos">Eventos <span class="new-badge">NEW</span></router-link></li>
        <li><router-link to="/administrador">Administrador</router-link></li>
        <li><router-link to="/gestion">Gestion <span class="new-badge">NEW</span></router-link></li>
        <li class="submenu">
          <router-link to="#" @click.prevent="toggleSubMenu">Gestion Entradas <i :class="{'fa fa-chevron-down': !submenuOpen, 'fa fa-chevron-up': submenuOpen}"></i></router-link>
          <ul v-if="submenuOpen">
            <li><router-link to="/listado-entradas">Listado de entradas</router-link></li>
            <li><router-link to="/detalle-entrada">Detalle de entrada</router-link></li>
          </ul>
        </li>
        <li><router-link to="/frontend">Front End <span class="new-badge">NEW</span></router-link></li>
        <li><router-link to="/email-template">Email Template</router-link></li>
        <li><router-link to="/chart">Chart</router-link></li>
        <li><router-link to="/calendar">Calendar</router-link></li>
        <li><router-link to="/map">Map</router-link></li>
        <li><router-link to="/gallery">Gallery</router-link></li>
        <li><router-link to="/page-options">Page Options <span class="new-badge">NEW</span></router-link></li>
        <li><router-link to="/extra">Extra <span class="new-badge">NEW</span></router-link></li>
        <li><router-link to="/login-register">Login & Register</router-link></li>
        <li><router-link to="/version">Version <span class="new-badge">NEW</span></router-link></li>
        <li><router-link to="/helper">Helper</router-link></li>
        <li><router-link to="/menu-level">Menu Level</router-link></li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'SidebarMenu',
  data() {
    return {
      submenuOpen: false
    };
  },
  methods: {
    toggleSubMenu() {
      this.submenuOpen = !this.submenuOpen;
    }
  }
};
</script>

<style scoped>
/* Estilos de SidebarMenu.vue */
.sidebar {
  width: 250px;
  background-color: #d9d9d9;
  height: 100vh;
  position: fixed;
  top: 0;
  overflow-y: auto;
  padding-top: 60px;
}
.logo {
  text-align: center;
  padding: 20px 0;
}
.logo img {
  width: 150px;
  border-radius: 15px;
  position: relative;
  bottom: 50px;
}
.navigation {
  padding: 0;
  position: relative;
  bottom: 30px;
}
.navigation ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
.navigation ul li {
  padding: 10px 20px;
}
.navigation ul li a {
  text-decoration: none;
  color: #8c9094;
  display: flex;
  align-items: center;
}
.navigation ul li a:hover {
  background-color: #20252a;
}
.new-badge {
  background-color: #00acac;
  color: #fff;
  font-size: 12px;
  padding: 2px 5px;
  border-radius: 3px;
  margin-left: auto;
}
.submenu ul {
  padding-left: 20px;
}
.submenu ul li a {
  font-size: 14px;
}
.fa {
  margin-left: 10px;
}
.menu-icon {
  width: 20px;
  margin-right: 10px;
}
</style>
