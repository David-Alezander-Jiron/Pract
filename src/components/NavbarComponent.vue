<template>
  <nav class="navbar">
    <ul>
      <li>
        <input type="text" placeholder="Buscar...">
        <button type="button" class="icon-button">
          <i class="fas fa-search"></i>
        </button>
        <button type="button" class="icon-button">
          <i class="fas fa-bell"></i>
        </button>
        <router-link to="/login" class="icon-button">
          <i class="fas fa-user-circle"></i>
          <span>Login</span>
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'NavbarComponent'
};
</script>

<style>
.navbar {
  background-color: #f8f9fa;
  padding: 10px;
}

ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

li {
  display: flex;
  align-items: center;
}

input {
  margin-left: auto;
  padding: 5px;
  position: relative;
  left: 870px;
}

.icon-button {
  background: none;
  border: none;
  margin-left: 10px;
  display: flex;
  align-items: center;
  cursor: pointer;
  position: relative;
  left: 800px;
}

.icon-button i {
  font-size: 1.2em;
  margin-right: 5px;
}

.icon-button span {
  margin-left: 5px;
  font-size: 1em;
  position: relative;
  left: 5px;
}
</style>
